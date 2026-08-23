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
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

// Har product ka apna channel ID (apne asli channel IDs se replace karo)
const CHANNEL_MAP = {
  parmar4: '-1003986949274',
  gagan1: '-1009876543210',
  aditya2: '-1005556667777'
};

async function tgCall(method, params) {
  const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/${method}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });
  return res.json();
}

exports.handler = async (event) => {
  try {
    const update = JSON.parse(event.body);
    const callback = update.callback_query;

    if (!callback) {
      return { statusCode: 200, body: 'ignored' };
    }

    const data = callback.data;
    const [action, orderId] = data.split('_');
    const chatId = callback.message.chat.id;
    const messageId = callback.message.message_id;

    const orderRef = db.collection('orders').doc(orderId);
    const orderSnap = await orderRef.get();

    if (!orderSnap.exists) {
      await tgCall('answerCallbackQuery', {
        callback_query_id: callback.id,
        text: 'Order not found!',
      });
      return { statusCode: 200, body: 'not found' };
    }

    const order = orderSnap.data();

    if (action === 'approve') {
      const channelId = CHANNEL_MAP[order.productId];
      let inviteLink = null;

      if (channelId) {
        const linkRes = await tgCall('createChatInviteLink', {
          chat_id: channelId,
          member_limit: 1,
        });
        inviteLink = linkRes.result?.invite_link || null;
      }

      await orderRef.update({
        status: 'approved',
        inviteLink: inviteLink,
      });

      await tgCall('editMessageCaption', {
        chat_id: chatId,
        message_id: messageId,
        caption: `✅ Approved\nProduct: ${order.productName}\nOrder ID: ${orderId}`,
      });

      await tgCall('answerCallbackQuery', {
        callback_query_id: callback.id,
        text: 'Approved ✅',
      });
    } else if (action === 'reject') {
      await orderRef.update({ status: 'rejected' });

      await tgCall('editMessageCaption', {
        chat_id: chatId,
        message_id: messageId,
        caption: `❌ Rejected\nProduct: ${order.productName}\nOrder ID: ${orderId}`,
      });

      await tgCall('answerCallbackQuery', {
        callback_query_id: callback.id,
        text: 'Rejected ❌',
      });
    }

    return { statusCode: 200, body: 'ok' };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
