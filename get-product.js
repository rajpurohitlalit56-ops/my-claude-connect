const PRODUCTS = require('./products');

exports.handler = async (event) => {
  try {
    const productId = event.queryStringParameters && event.queryStringParameters.id;

    if (!productId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Product id required' }),
      };
    }

    const product = PRODUCTS[productId];

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
