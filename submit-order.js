const admin = require('firebase-admin');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
  });
}

const db = admin.firestore();

exports.handler = async (event) => {
  try {
    const { productId, productName, price, imageBase64 } = JSON.parse(event.body);

    const orderId = 'ORD' + Date.now();

    await db.collection('orders').doc(orderId).set({
      productId,
      productName,
      price,
      status: 'pending',
      createdAt: new Date().toISOString(),
    });

    const buffer = Buffer.from(imageBase64.split(',')[1], 'base64');
    const formData = new FormData();
    formData.append('chat_id', process.env.TELEGRAM_CHAT_ID);
    formData.append('caption',
      `🆕 New Order\nProduct: ${productName}\nAmount: ₹${price}\nOrder ID: ${orderId}`
    );
    formData.append('reply_markup', JSON.stringify({
      inline_keyboard: [[
        { text: '✅ Approve', callback_data: `approve_${orderId}` },
        { text: '❌ Reject', callback_data: `reject_${orderId}` }
      ]]
    }));
    formData.append('photo', new Blob([buffer]), 'screenshot.jpg');

    await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendPhoto`, {
      method: 'POST',
      body: formData,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, orderId }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
