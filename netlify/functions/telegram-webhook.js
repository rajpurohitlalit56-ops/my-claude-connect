const admin = require('firebase-admin');
const products = require('./products.js');

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

    const data = callback.data; // e.g. "approve_ORD12345"
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
      let channelId = products[order.productId]?.channelId;
      let lookupNote = ''; // debug ke liye — kahan se channelId mila ya kyun nahi mila

      // Agar static file mein nahi mila, Firestore check karo
      // (admin panel se add kiye gaye naye products ke liye)
      if (!channelId) {
        const prodSnap = await db.collection('catalog_products').doc(order.productId).get();
        if (!prodSnap.exists) {
          lookupNote = `Product "${order.productId}" catalog_products mein nahi mila`;
        } else {
          channelId = prodSnap.data().channelId;
          if (!channelId) {
            lookupNote = `Product mila, lekin channelId khaali hai`;
          }
        }
      }

      // Whitespace trim — copy-paste se aayi extra space bhi issue de sakti hai
      if (channelId) channelId = String(channelId).trim();

      let inviteLink = null;
      let linkErrorNote = '';

      if (channelId) {
        const linkRes = await tgCall('createChatInviteLink', {
          chat_id: channelId,
          member_limit: 1,
        });
        if (linkRes.ok) {
          inviteLink = linkRes.result?.invite_link || null;
        } else {
          // Telegram ka asli error yahan capture karo — silently ignore mat karo
          linkErrorNote = linkRes.description || 'Unknown Telegram API error';
        }
      } else {
        linkErrorNote = lookupNote || 'Channel ID nahi mila';
      }

      await orderRef.update({
        status: 'approved',
        inviteLink: inviteLink,
        inviteLinkError: inviteLink ? admin.firestore.FieldValue.delete() : linkErrorNote,
      });

      const captionWarning = inviteLink
        ? ''
        : `\n⚠️ Invite link fail: ${linkErrorNote}`;

      await tgCall('editMessageCaption', {
        chat_id: chatId,
        message_id: messageId,
        caption: `✅ Approved\nProduct: ${order.productName}\nOrder ID: ${orderId}${captionWarning}`,
      });

      await tgCall('answerCallbackQuery', {
        callback_query_id: callback.id,
        text: inviteLink ? 'Approved ✅' : 'Approved, but link fail ⚠️',
      });
    } else if (action === 'reject') {
      await orderRef.update({
        status: 'rejected',
      });

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
