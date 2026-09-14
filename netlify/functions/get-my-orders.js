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
    const authHeader = event.headers.authorization || event.headers.Authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { statusCode: 401, body: JSON.stringify({ error: 'Sign in zaroori hai' }) };
    }

    const idToken = authHeader.split('Bearer ')[1];
    const decoded = await admin.auth().verifyIdToken(idToken);
    const uid = decoded.uid;
    const email = (decoded.email || '').toLowerCase();

    const byUidSnap = await db.collection('orders').where('uid', '==', uid).get();
    const orderDocs = new Map();
    byUidSnap.forEach(doc => orderDocs.set(doc.id, doc.data()));

    // Safety net: some orders placed before sign-in fully succeeded may have
    // been saved without a uid. Also match by email so those still show up.
    if (email) {
      const byEmailSnap = await db.collection('orders').where('buyerEmail', '==', email).get();
      byEmailSnap.forEach(doc => {
        if (!orderDocs.has(doc.id)) orderDocs.set(doc.id, doc.data());
      });
    }

    const orders = [];
    orderDocs.forEach((d, id) => {
      orders.push({
        orderId: id,
        productId: d.productId || '',
        productName: d.productName || '',
        price: d.price || '',
        category: d.category || 'batch',
        status: d.status || 'pending',
        inviteLink: d.inviteLink || null,
        createdAt: d.createdAt || null,
      });
    });

    orders.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));

    return {
      statusCode: 200,
      body: JSON.stringify(orders),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
