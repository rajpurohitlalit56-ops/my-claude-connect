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
    price: 44,
    qr: "images/RzrQr44.png",
    channelId: "-1004307551538"
  },
  parmar6: {
    name: "Parmar PYQ Series 6.0",
    icon: "📗",
    price: 29,
    qr: "images/Qr29.jpg",
    channelId: "-1004338123908"
  },
  achievers7: {
    name: "Achievers Batch 7.0 (3 in 1)",
    icon: "📙",
    price: 44,
    qr: "images/RzrQr44.png",
    channelId: "-1004336012928"
  },
  foundation_zero_to_hero_batch_bhutesh_sir_e1_coaching: {
  name: "Foundation (Zero To Hero) Batch by Bhutesh Sir E1 Coaching",
  icon: "📘",
  price: 44,
  qr: "images/RzrQr44.png",
  channelId: "-1004468090740"
 },
 piyushsir: {
    name: "Reasoning by Piyush Sir",
    icon: "📙",
    price: 44,
    qr: "images/RzrQr44.png",
    channelId: "-1004310870752"
  },
  gaganselection: {
    name: "Math Special VOD Batch — Selection Way Gagan Sir 2026",
    icon: "📙",
    price: 44,
    qr: "images/RzrQr44.png",
    channelId: "-1003778857673"
  },
 gaganrevision: {
    name: "Math Special Revision Batch — Selection Way Gagan Sir 2026",
    icon: "📙",
    price: 44,
    qr: "images/RzrQr44.png",
    channelId: "-1003593223313"
  },
 parmarCurrent: {
    name: "Parmar Current Affairs",
    icon: "📙",
    price: 44,
    qr: "images/RzrQr44.png",
    channelId: "-1003769119210"
  },
 aditya3: {
    name: "Maths VOD 3.0 Batch by Aditya Ranjan Sir",
    icon: "📙",
    price: 44,
    qr: "images/RzrQr44.png",
    channelId: "-1004480644099"
  },
 amansir: {
    name: "aman sir English Foundation + Vocab + Practice Batch",
    icon: "📙",
    price: 44,
    qr: "images/RzrQr44.png",
    channelId: "-1003944944955"
  },
 parmarreason: {
    name: "Parmar's Reasoning Foundation VOD",
    icon: "📙",
    price: 44,
    qr: "images/RzrQr44.png",
    channelId: "-1003913515919"
  },
 neetumam: {
    name: "Neetu Madam English Grammar + Vocab + Practice Batch 67 2026",
    icon: "📙",
    price: 44,
    qr: "images/RzrQr44.png",
    channelId: "-1003991854507"
  },
 parmarcds: {
    name: "Parmar CDS/CAPF Batch 2.0",
    icon: "📙",
    price: 44,
    qr: "images/RzrQr44.png",
    channelId: "-1003976593657"
  },
 rakeshsir: {
    name: "Rakesh Yadav Sir Math 2026 Batch — Careerwill",
    icon: "📙",
    price: 44,
    qr: "images/RzrQr44.png",
    channelId: "-1003898192663"
  },
 abhinavsir: {
    name: "Abhinav Sharma Math Batch 2026 — Careerwill",
    icon: "📙",
    price: 44,
    qr: "images/RzrQr44.png",
    channelId: "-1003985142079"
  },
  ssc_cgl_english_achievers_batch_8_0_rani_maam_uc_live_2026: {
  name: "SSC CGL English Achievers Batch 8.0 by Rani Ma'am — UC Live 2026",
  icon: "📘",
  price: 44,
  qr: "images/RzrQr44.png",
  channelId: "-1003783102098"
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
