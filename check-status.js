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
    const orderId = event.queryStringParameters.orderId;
    if (!orderId) {
      return { statusCode: 400, body: JSON.stringify({ error: 'orderId required' }) };
    }

    const snap = await db.collection('orders').doc(orderId).get();
    if (!snap.exists) {
      return { statusCode: 404, body: JSON.stringify({ error: 'not found' }) };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(snap.data()),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
