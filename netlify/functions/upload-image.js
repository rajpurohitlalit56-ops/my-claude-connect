exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const { password, image } = body;

    // Password check — sirf admin hi upload kar sake
    if (!password || password !== process.env.ADMIN_PASSWORD) {
      return {
        statusCode: 401,
        body: JSON.stringify({ error: 'Galat password' }),
      };
    }

    if (!image) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Image data required' }),
      };
    }

    const formData = new URLSearchParams();
    formData.append('key', process.env.IMGBB_API_KEY);
    formData.append('image', image); // base64 string (bina data: prefix ke)

    const res = await fetch('https://api.imgbb.com/1/upload', {
      method: 'POST',
      body: formData,
    });
    const result = await res.json();

    if (!result.success) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'ImgBB upload fail hua' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, url: result.data.url }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
