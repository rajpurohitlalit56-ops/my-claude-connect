const PRODUCTS = require('./products');
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
    const productId = event.queryStringParameters && event.queryStringParameters.id;

    if (!productId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Product id required' }),
      };
    }

    // Pehle purani static file check karo (existing products)
    let product = PRODUCTS[productId];

    // Agar wahan nahi mila, Firestore check karo (admin panel se add kiye gaye)
    if (!product) {
      const snap = await db.collection('catalog_products').doc(productId).get();
      if (snap.exists) {
        product = snap.data();
      }
    }

    if (!product) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Product not found' }),
      };
    }

    // channelId sirf backend (telegram-webhook) ke kaam ka hai,
    // frontend ko bhejne ki zaroorat nahi — isliye hata dete hain.
    const { channelId, ...publicProduct } = product;

    return {
      statusCode: 200,
      body: JSON.stringify(publicProduct),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
