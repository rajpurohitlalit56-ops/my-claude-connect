/* ---------------------------------------------------------
   PRODUCT CATALOG — sabse zaroori file, naya product/batch
   add karne ke liye SIRF isi file mein entry add karo.

   Har product ka apna unique ID (key) hona chahiye:
   - sirf chhote letters, numbers, underscore (_)
   - space ya special characters mat use karo
   - jaise: parmar4, gagan1, neetu_english1

   Fields:
   - name: product/batch ka display naam
   - icon: chat header mein dikhne wala emoji
   - price: rupees mein (number, bina ₹ symbol ke)
   - qr: payment QR image ka poora URL
   - channelId: sirf BATCHES ke liye — Telegram channel ki ID
                (bot ko us channel mein admin banana zaroori hai)
                Books ke liye isko chhod sakte ho ya null rakho.
--------------------------------------------------------- */

const PRODUCTS = {
  parmar4: {
    name: "Parmar 4.0 Batch",
    icon: "📘",
    price: 44₹,
    qr: "images/Qr44.jpg",
    channelId: "-1001234567890"
  },
  gagan1: {
    name: "Gagan Pratap Sir - Maths Batch",
    icon: "📗",
    price: 39,
    qr: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=example@upi%26pn=SSCStore%26am=39",
    channelId: "-1009876543210"
  },
  aditya2: {
    name: "Aditya Ranjan Sir - Reasoning Batch",
    icon: "📙",
    price: 29,
    qr: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=example@upi%26pn=SSCStore%26am=29",
    channelId: "-1005556667777"
  }

  // ⬇️ Naya product add karna ho toh yahan comma laga ke aisi entry banao:
  // neetu1: {
  //   name: "Neetu Singh - English Batch",
  //   icon: "📕",
  //   price: 39,
  //   qr: "ASLI_QR_IMAGE_URL",
  //   channelId: "-100..."
  // }
};

module.exports = PRODUCTS;
