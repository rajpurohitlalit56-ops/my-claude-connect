require('dotenv').config();
const key = process.env.FIREBASE_PRIVATE_KEY;

if (!key) {
  console.log("❌ FIREBASE_PRIVATE_KEY .env me mila hi nahi. Naam check karo (typo to nahi hai).");
} else {
  const fixed = key.replace(/\\n/g, '\n');
  const startsOk = fixed.startsWith('-----BEGIN PRIVATE KEY-----');
  const endsOk = fixed.trim().endsWith('-----END PRIVATE KEY-----');
  const lineCount = fixed.split('\n').length;
  console.log("Key mili, length:", key.length);
  console.log("BEGIN sahi se shuru ho raha hai:", startsOk);
  console.log("END sahi se khatam ho raha hai:", endsOk);
  console.log("Total lines:", lineCount, "(sahi key me aam taur par 25-30 ke aas paas hoti hain)");
  if (startsOk && endsOk && lineCount > 5) {
    console.log("✅ Format sahi lagta hai");
  } else {
    console.log("⚠️ Format me gadbad hai");
  }
}
