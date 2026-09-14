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
    const snap = await db.collection('catalog_products').get();
    const items = [];
    snap.forEach(doc => {
      items.push({ id: doc.id, ...doc.data() });
    });

    return {
      statusCode: 200,
      body: JSON.stringify(items),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
