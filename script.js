/* ==== BATCHES & BOOKS DATA — edit here to add/update batches and books ==== */

var BATCHES = [
  {
    alt: 'Parmar GK 4.0',
    img: 'images/parmar-gk-4-0.jpg',
    by: 'BATCH BY RAJ SSC',
    name: 'Parmar GK 4.0',
    desc: 'Recorded lectures, bilingual notes, topic-wise quizzes &amp; revision',
    price: '₹44',
    duration: 'VALIDITY-1 year',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQADiwgAAtDbCUdz4EB-M913fBYE',
    buyHref: 'chat-3.html?product=parmar4'
  },
  {
    alt: 'Parmar PYQ Series 6.0',
    img: 'images/parmar-pyq-series-6-0.jpg',
    by: 'BATCH BY RAJ SSC',
    name: 'Parmar PYQ Series 6.0',
    desc: 'Bilingual lecture PDFs, mindmaps &amp; future lecture PDFs',
    price: '₹29',
    duration: 'VALIDITY-1 year',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQADOgwAAt5E0Ef1D5hUYI8m3RYE',
    buyHref: 'chat-3.html?product=parmar6'
  },
  {
    alt: 'Achievers Batch 7.0 (3 in 1)',
    img: 'images/achievers-batch-7-0-3-in-1.png',
    by: 'Rani Mam · UC Live',
    name: 'Achievers Batch 7.0 (3 in 1)',
    desc: 'A-to-Z Grammar, live practice &amp; recorded vocabulary',
    price: '₹44',
    duration: 'VALIDITY-1 year',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQAD4AgAAtDbCUdfnYrjZlsZ-hYE',
    buyHref: 'chat-3.html?product=achievers7'
  },
  {
    alt: 'Reasoning by Piyush Sir',
    img: 'images/reasoning-by-piyush-sir.jpg',
    by: 'Reasoning',
    name: 'Reasoning by Piyush Sir',
    desc: 'All topics covered, live practice sessions &amp; class PDFs',
    price: '₹44',
    duration: 'VALIDITY-1 year',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQADNRIAAl9I6EfSrmpxevArthYE',
    buyHref: 'chat-3.html?product=piyushsir'
  },
  {
    alt: 'Math Special VOD Batch — Selection Way Gagan Sir 2026',
    img: 'images/math-special-vod-batch-selection-way-gagan-sir-2026.png',
    by: 'Gagan Sir · Selection Way',
    name: 'Math Special VOD Batch — Selection Way Gagan Sir 2026',
    desc: 'Complete syllabus coverage with structured practice questions',
    price: '₹44',
    duration: 'VALIDITY-1 year',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQADBAsAAsSJYEQsnzjaugjkLRYE',
    buyHref: 'chat-3.html?product=gaganselection'
  },
  {
    alt: 'Math Special Revision Batch — Selection Way Gagan Sir 2026',
    img: 'images/math-special-revision-batch-selection-way-gagan-sir-2026.jpg',
    by: 'Gagan Sir · Selection Way',
    name: 'Math Special Revision Batch — Selection Way Gagan Sir 2026',
    desc: 'Complete syllabus coverage with structured practice &amp; revision',
    price: '₹44',
    duration: 'VALIDITY-1 year',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQADcxIAAhTLgUTVNLzwQjgSjRYE',
    buyHref: 'chat-3.html?product=gaganrevision'
  },
  {
    alt: 'Parmar Current Affairs',
    img: 'images/parmar-current-affairs.jpg',
    by: 'Parmar SSC',
    name: 'Parmar Current Affairs',
    desc: 'Monthly current-affairs PDFs in Hindi &amp; English',
    price: '₹44',
    duration: 'VALIDITY-1 year',
    demoHref: null,
    demoLabel: 'Demo unavailable',
    buyHref: 'chat-3.html?product=parmaCurrent'
  },
  {
    alt: 'Maths VOD 3.0 Batch by Aditya Ranjan Sir',
    img: 'images/maths-vod-3-0-batch-by-aditya-ranjan-sir.jpg',
    by: 'Arithmetic + Advance · Pre + Mains',
    name: 'Maths VOD 3.0 Batch by Aditya Ranjan Sir',
    desc: '350+ lectures, bilingual PDFs/tests &amp; classroom sheets',
    price: '₹44',
    duration: 'VALIDITY-1 year',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQAD1AgAAsSJWESCUa5HZJ4NMRYE',
    buyHref: 'chat-3.html?product=aditya3'
  },
  {
    alt: 'English Foundation + Vocab + Practice Batch',
    img: 'images/english-foundation-vocab-practice-batch.jpg',
    by: 'Aman Vashishth · Selection Way',
    name: 'English Foundation + Vocab + Practice Batch',
    desc: 'Grammar, vocab &amp; passage practice with printable notes',
    price: '₹44',
    duration: 'VALIDITY-1 year',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQADShQAAhTLgUSVQDY8hQ-A_xYE',
    buyHref: 'chat-3.html?product=amansir'
  },
  {
    alt: 'Parmar\'s Reasoning Foundation VOD + Revision Batch',
    img: 'images/parmar-s-reasoning-foundation-vod-revision-batch.jpg',
    by: 'Kamal Sir',
    name: 'Parmar\'s Reasoning Foundation VOD + Revision Batch',
    desc: 'Foundation + revision lectures, bilingual PDFs &amp; mock tests',
    price: '₹44',
    duration: 'VALIDITY-1 year',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQADJxQAAhTLgURmx5FOH_SOOBYE',
    buyHref: 'chat-3.html?product=parmarreason'
  },
  {
    alt: 'Neetu Madam English Grammar + Vocab + Practice Batch 67 2026',
    img: 'images/neetu-madam-english-grammar-vocab-practice-batch-67-2026.jpg',
    by: 'Neetu Madam',
    name: 'Neetu Madam English Grammar + Vocab + Practice Batch 67 2026',
    desc: 'Grammar &amp; vocabulary lectures, PDFs plus practice mocks',
    price: '₹44',
    duration: 'VALIDITY-1 year',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQADChQAAhTLgUSFHYJVfHDmLRYE',
    buyHref: 'chat-3.html?product=neetumam'
  },
  {
    alt: 'Parmar CDS/CAPF Batch 2.0',
    img: 'images/parmar-cds-capf-batch-2-0.jpg',
    by: 'Parmar Sir',
    name: 'Parmar CDS/CAPF Batch 2.0',
    desc: 'Complete CDS &amp; CAPF prep — live + recorded classes, PYQ coverage, bilingual notes',
    price: '₹44',
    duration: 'VALIDITY-1 year',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQADow4AAhbgSUTfgeheutFPRxYE',
    buyHref: 'chat-3.html?product=parmarcds'
  },
  {
    alt: 'Rakesh Yadav Sir Math 2026 Batch — Careerwill',
    img: 'images/rakesh-yadav-sir-math-2026-batch-careerwill.jpg',
    by: 'Rakesh Yadav Sir',
    name: 'Rakesh Yadav Sir Math 2026 Batch — Careerwill',
    desc: 'Foundation to advanced arithmetic, mock tests &amp; printable practice sheets',
    price: '₹44',
    duration: 'VALIDITY-1 year',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQAD_BMAAhTLgUSIMds0CPWnuhYE',
    buyHref: 'chat-3.html?product=rakeshsir'
  },
  {
    alt: 'Abhinav Sharma Math Batch 2026 — Careerwill',
    img: 'images/abhinav-sharma-math-batch-2026-careerwill.jpg',
    by: 'Abhinav Sharma Sir',
    name: 'Abhinav Sharma Math Batch 2026 — Careerwill',
    desc: 'Arithmetic + Advanced maths, live and recorded, with practice sheets',
    price: '₹44',
    duration: 'VALIDITY-1 year',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQAD3hMAAhTLgUTjK-D9TAl7GhYE',
    buyHref: 'chat-3.html?product=abhinavsir'
  },
  {
  alt: 'Foundation (Zero To Hero) Batch by Bhutesh Sir E1 Coaching',
  img: 'images/foundation_zero_to_hero_batch_bhutesh_sir_e1_coaching.jpg',
  by: 'BATCH BY RAJ SSC',
  name: 'Foundation (Zero To Hero) Batch by Bhutesh Sir E1 Coaching',
  desc: 'foundation batch airthmetic+advanced(pre+mains) ',
  price: '₹44',
  duration: 'VALIDITY-1 year',
  demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQADTg8AAvh5YERJIr2qVL73HxYE',
  buyHref: 'chat-3.html?product=foundation_zero_to_hero_batch_bhutesh_sir_e1_coaching'
},
{
  alt: "SSC CGL English Achievers Batch 8.0 by Rani Ma'am — UC Live 2026",
  img: 'images/ssc_cgl_english_achievers_batch_8_0_rani_maam_uc_live_2026.jpg',
  by: ' rani mam uc live',
  name: "SSC CGL English Achievers Batch 8.0 by Rani Ma'am — UC Live 2026",
  desc: 'latest 2026(3 in 1) batch grammar+vocab+pratice',
  price: '₹44',
  duration: 'VALIDITY-1 year',
  demoHref: 'https://t.me/Sscbyrajbot?start=...',
  buyHref: 'chat-3.html?product=ssc_cgl_english_achievers_batch_8_0_rani_maam_uc_live_2026'
}
];

var BOOKS = [
  {
    alt: 'Parmar SSC Fatman GK/GS Theory Book Hindi Medium — 2nd Edition for SSC &amp; One Day Exams',
    img: 'images/parmar-ssc-fatman-gk-gs-theory-book-hindi-medium-2nd-edition-2.jpg',
    by: 'SSC BOOKS BY RAJ',
    name: 'Parmar SSC Fatman GK/GS Theory Book Hindi Medium — 2nd Edition for SSC &amp; One Day Exams',
    price: '₹20',
    demoType: 'popup',
    demoHref: 'none',
    buyHref: 'https://t.me/BOOKSBYRAJSSC96BOT?start=book1'
  },
  {
    alt: 'Parmar SSC Fatman GK/GS Theory Book English Medium — 2nd Edition, 2026',
    img: 'images/parmar-ssc-fatman-gk-gs-theory-book-english-medium-2nd-editi-2.jpg',
    by: 'SSC BOOKS BY RAJ',
    name: 'Parmar SSC Fatman GK/GS Theory Book English Medium — 2nd Edition, 2026',
    price: '₹20',
    demoType: 'link',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQADRxQAAv_ceEcBmekjgOoftxYE',
    buyHref: 'https://t.me/BOOKSBYRAJSSC96BOT?start=book2'
  },
  {
    alt: 'Parmar SSC Little Boy GK MCQ Book — English Medium, 1st Edition 2025',
    img: 'images/parmar-ssc-little-boy-gk-mcq-book-english-medium-1st-edition-2.jpg',
    by: 'SSC BOOKS BY RAJ',
    name: 'Parmar SSC Little Boy GK MCQ Book — English Medium, 1st Edition 2025',
    price: '₹20',
    demoType: 'link',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQADUxQAAv_ceEevt9lKWeGBtBYE',
    buyHref: 'https://t.me/BOOKSBYRAJSSC96BOT?start=book3'
  },
  {
    alt: 'Parmar SSC Little Boy GK MCQ Book — Hindi Medium, 1st Edition 2025',
    img: 'images/parmar-ssc-little-boy-gk-mcq-book-hindi-medium-1st-edition-2-2.jpg',
    by: 'SSC BOOKS BY RAJ',
    name: 'Parmar SSC Little Boy GK MCQ Book — Hindi Medium, 1st Edition 2025',
    price: '₹20',
    demoType: 'link',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQADWRQAAv_ceEcSaUyWsNv--BYE',
    buyHref: 'https://t.me/BOOKSBYRAJSSC96BOT?start=book4'
  },
  {
    alt: 'Blackbook of English Vocabulary 2026 — for SSC, Banking, Railway &amp; Defence Exams',
    img: 'images/blackbook-of-english-vocabulary-2026-for-ssc-banking-railway-2.jpg',
    by: 'SSC BOOKS BY RAJ',
    name: 'Blackbook of English Vocabulary 2026 — for SSC, Banking, Railway &amp; Defence Exams',
    price: '₹20',
    demoType: 'link',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQADshQAAv_ceEcNDFShdsQ-IxYE',
    buyHref: 'https://t.me/BOOKSBYRAJSSC96BOT?start=book5'
  },
  {
    alt: 'Samundramanthan of Vocabulary Bilingual Revised Edition 2025 by Rani Mam',
    img: 'images/samundramanthan-of-vocabulary-bilingual-revised-edition-2025-2.jpg',
    by: 'SSC BOOKS BY RAJ',
    name: 'Samundramanthan of Vocabulary Bilingual Revised Edition 2025 by Rani Mam',
    price: '₹20',
    demoType: 'link',
    demoHref: 'https://t.me/Sscbatch778_bot',
    buyHref: 'https://t.me/BOOKSBYRAJSSC96BOT?start=book6'
  },
  {
    alt: 'English Grammar Handwritten Notes (Achievers 1.0) by Rani Ma\'am — UCLive',
    img: 'images/english-grammar-handwritten-notes-achievers-1-0-by-rani-ma-a-2.jpg',
    by: 'SSC BOOKS BY RAJ',
    name: 'English Grammar Handwritten Notes (Achievers 1.0) by Rani Ma\'am — UCLive',
    price: '₹20',
    demoType: 'link',
    demoHref: 'https://t.me/SSCBOOKSAVEING1806BOT?start=BQADAQADOBUAAv_ceEcuesrgW-RdBBYE',
    buyHref: 'https://t.me/BOOKSBYRAJSSC96BOT?start=book7'
  },
  {
    alt: 'Eduquity Pattern Decoder SSC Maths Smart Book — 3000+ Chapterwise PYQs by Aditya Ranjan Sir',
    img: 'images/eduquity-pattern-decoder-ssc-maths-smart-book-3000-chapterwi-2.jpg',
    by: 'SSC BOOKS BY RAJ',
    name: 'Eduquity Pattern Decoder SSC Maths Smart Book — 3000+ Chapterwise PYQs by Aditya Ranjan Sir',
    price: '₹20',
    demoType: 'link',
    demoHref: 'https://t.me/SSCBOOKSAVEING1806BOT?start=BQADAQADOxUAAv_ceEfYB7hXDo1KbhYE',
    buyHref: 'https://t.me/BOOKSBYRAJSSC96BOT?start=book8'
  },
  {
    alt: 'Reasoning Book with Piyush Varshney — Solve Without Pen and Paper (Hindi Medium) for SSC',
    img: 'images/reasoning-book-with-piyush-varshney-solve-without-pen-and-pa-2.jpg',
    by: 'SSC BOOKS BY RAJ',
    name: 'Reasoning Book with Piyush Varshney — Solve Without Pen and Paper (Hindi Medium) for SSC',
    price: '₹20',
    demoType: 'link',
    demoHref: 'https://t.me/SSCBOOKSAVEING1806BOT?start=BQADAQADPxUAAv_ceEd4sPgZfqoD1xYE',
    buyHref: 'https://t.me/BOOKSBYRAJSSC96BOT?start=book9'
  },
  {
    alt: 'Class Notes Grammar by Aman Sir for SSC, Bank, CDS, NDA and All Competitive Exams',
    img: 'images/class-notes-grammar-by-aman-sir-for-ssc-bank-cds-nda-and-all-2.jpg',
    by: 'SSC BOOKS BY RAJ',
    name: 'Class Notes Grammar by Aman Sir for SSC, Bank, CDS, NDA and All Competitive Exams',
    price: '₹20',
    demoType: 'link',
    demoHref: 'https://t.me/SSCBOOKSAVEING1806BOT?start=BQADAQADQRUAAv_ceEe77bq1QkyoGBYE',
    buyHref: 'https://t.me/BOOKSBYRAJSSC96BOT?start=book10'
  },
  {
    alt: 'SSC CGL Mathematics Practice King: 1500+ TCS-MCQ (Pre + Mains)',
    img: 'images/ssc-cgl-mathematics-practice-king-1500-tcs-mcq-pre-mains-2.jpg',
    by: 'SSC BOOKS BY RAJ',
    name: 'SSC CGL Mathematics Practice King: 1500+ TCS-MCQ (Pre + Mains)',
    price: '₹20',
    demoType: 'link',
    demoHref: 'https://t.me/SSCBOOKSAVEING1806BOT?start=BQADAQADRxUAAv_ceEdF6rpNetKu-BYE',
    buyHref: 'https://t.me/BOOKSBYRAJSSC96BOT?start=book11'
  },
  {
    alt: 'Complete Class Notes Arithmetic: Maths Special Batch for SSC &amp; Competitive Exams',
    img: 'images/complete-class-notes-arithmetic-maths-special-batch-for-ssc--2.jpg',
    by: 'SSC BOOKS BY RAJ',
    name: 'Complete Class Notes Arithmetic: Maths Special Batch for SSC &amp; Competitive Exams',
    price: '₹20',
    demoType: 'link',
    demoHref: 'https://t.me/SSCBOOKSAVEING1806BOT?start=BQADAQADTxUAAv_ceEeDwUB3finuAhYE',
    buyHref: 'https://t.me/BOOKSBYRAJSSC96BOT?start=book12'
  },
  {
    alt: 'Reasoning Formula by Piyush Sir for SSC, Banking &amp; Railway Exams',
    img: 'images/reasoning-formula-by-piyush-sir-for-ssc-banking-amp-railway--2.jpg',
    by: 'SSC BOOKS BY RAJ',
    name: 'Reasoning Formula by Piyush Sir for SSC, Banking &amp; Railway Exams',
    price: '₹20',
    demoType: 'link',
    demoHref: 'https://t.me/SSCBOOKSAVEING1806BOT?start=BQADAQADVhUAAv_ceEdsh-GCdHSlKBYE',
    buyHref: 'https://t.me/BOOKSBYRAJSSC96BOT?start=book13'
  },
  {
    alt: 'SSC Mathematics 7300+ Chapter-Wise &amp; Type-Wise Questions for SSC CGL, CHSL &amp; Railway Exams — Hindi',
    img: 'images/ssc-mathematics-7300-chapter-wise-amp-type-wise-questions-fo-2.jpg',
    by: 'SSC BOOKS BY RAJ',
    name: 'SSC Mathematics 7300+ Chapter-Wise &amp; Type-Wise Questions for SSC CGL, CHSL &amp; Railway Exams — Hindi',
    price: '₹20',
    demoType: 'link',
    demoHref: 'https://t.me/SSCBOOKSAVEING1806BOT?start=BQADAQADXBUAAv_ceEeiyKiCrj0wdxYE',
    buyHref: 'https://t.me/BOOKSBYRAJSSC96BOT?start=book14'
  },
  {
    alt: 'SSC Mathematics Chapterwise &amp; Typewise Questions with Detailed Solutions 7300+ Objective Questions — English',
    img: 'images/ssc-mathematics-chapterwise-amp-typewise-questions-with-deta-2.jpg',
    by: 'SSC BOOKS BY RAJ',
    name: 'SSC Mathematics Chapterwise &amp; Typewise Questions with Detailed Solutions 7300+ Objective Questions — English',
    price: '₹20',
    demoType: 'link',
    demoHref: 'https://t.me/SSCBOOKSAVEING1806BOT?start=BQADAQADYBUAAv_ceEdpQhtfu3pekBYE',
    buyHref: 'https://t.me/BOOKSBYRAJSSC96BOT?start=book15'
  },
  {
    alt: 'Neetu Singh English Class Notes (Bilingual) Updated 2026',
    img: 'images/neetu-singh-english-class-notes-bilingual-updated-2026-2.jpg',
    by: 'SSC BOOKS BY RAJ',
    name: 'Neetu Singh English Class Notes (Bilingual) Updated 2026',
    price: '₹20',
    demoType: 'link',
    demoHref: 'https://t.me/SSCBOOKSAVEING1806BOT?start=BQADAQADZhUAAv_ceEfZBvInK7y1YRYE',
    buyHref: 'https://t.me/BOOKSBYRAJSSC96BOT?start=book16'
  },
  {
    alt: 'Neetu Singh Vocab 15000+ Vocabularies — All PYQ &amp; Expected Questions, 1st Edition 2023',
    img: 'images/neetu-singh-vocab-15000-vocabularies-all-pyq-amp-expected-qu-2.jpg',
    by: 'SSC BOOKS BY RAJ',
    name: 'Neetu Singh Vocab 15000+ Vocabularies — All PYQ &amp; Expected Questions, 1st Edition 2023',
    price: '₹20',
    demoType: 'link',
    demoHref: 'https://t.me/SSCBOOKSAVEING1806BOT?start=BQADAQADcBUAAv_ceEcPPetHNMEmcRYE',
    buyHref: 'https://t.me/BOOKSBYRAJSSC96BOT?start=book17'
  },
  {
    alt: 'Brahmastra Complete Maths Multicolored Formula Book — 2nd Edition Hindi for SSC, Railway',
    img: 'images/brahmastra-complete-maths-multicolored-formula-book-2nd-edit-2.jpg',
    by: 'SSC BOOKS BY RAJ',
    name: 'Brahmastra Complete Maths Multicolored Formula Book — 2nd Edition Hindi for SSC, Railway',
    price: '₹20',
    demoType: 'link',
    demoHref: 'https://t.me/SSCBOOKSAVEING1806BOT?start=BQADAQADmBUAAv_ceEeZtNaTRc7jAxYE',
    buyHref: 'https://t.me/BOOKSBYRAJSSC96BOT?start=book18'
  },
  {
    alt: 'Brahmastra Complete Maths Formula Book English Medium — 3rd Edition 2026 by Aditya Ranjan',
    img: 'images/brahmastra-complete-maths-formula-book-english-medium-3rd-ed-2.jpg',
    by: 'SSC BOOKS BY RAJ',
    name: 'Brahmastra Complete Maths Formula Book English Medium — 3rd Edition 2026 by Aditya Ranjan',
    price: '₹20',
    demoType: 'link',
    demoHref: 'https://t.me/SSCBOOKSAVEING1806BOT?start=BQADAQADnhUAAv_ceEeB6Hf4qkv9OxYE',
    buyHref: 'https://t.me/BOOKSBYRAJSSC96BOT?start=book19'
  },
  {
    alt: 'SSC Maths — Chapterwise &amp; Typewise 6500+ TCS PYQs, 3rd Edition, English Medium by Aditya Ranjan',
    img: 'images/ssc-maths-chapterwise-amp-typewise-6500-tcs-pyqs-3rd-edition-3.jpg',
    by: 'SSC BOOKS BY RAJ',
    name: 'SSC Maths — Chapterwise &amp; Typewise 6500+ TCS PYQs, 3rd Edition, English Medium by Aditya Ranjan',
    price: '₹20',
    demoType: 'link',
    demoHref: 'https://t.me/SSCBOOKSAVEING1806BOT?start=BQADAQADmBUAAv_ceEeZtNaTRc7jAxYE',
    buyHref: 'https://t.me/BOOKSBYRAJSSC96BOT?start=book20'
  },
  {
    alt: 'SSC Maths — Chapterwise &amp; Typewise 6500+ TCS PYQs, 3rd Edition, Hindi Medium by Aditya Ranjan',
    img: 'images/ssc-maths-chapterwise-amp-typewise-6500-tcs-pyqs-3rd-edition-4.jpg',
    by: 'SSC BOOKS BY RAJ',
    name: 'SSC Maths — Chapterwise &amp; Typewise 6500+ TCS PYQs, 3rd Edition, Hindi Medium by Aditya Ranjan',
    price: '₹20',
    demoType: 'link',
    demoHref: 'https://t.me/SSCBOOKSAVEING1806BOT?start=BQADAQADcBUAAv_ceEcPPetHNMEmcRYE',
    buyHref: 'https://t.me/BOOKSBYRAJSSC96BOT?start=book21'
  },
];
function renderBatchCard(b){
  var demoBtn = b.demoHref
    ? '<a class="btn btn-demo" href="'+b.demoHref+'" rel="noopener" target="_blank">Demo</a>'
    : '<span class="btn btn-demo disabled">'+(b.demoLabel||'Demo unavailable')+'</span>';
  var durationSpan = b.duration
    ? '<span style="font-size:11px;color:var(--sub);font-weight:600;">'+b.duration+'</span>'
    : '';
  return '<div class="card batch-card"><img alt="'+b.alt+'" class="batch-cover" src="'+b.img+'"/>'
    + '<div class="body"><div class="by">'+b.by+'</div><h3>'+b.name+'</h3>'
    + '<div class="batch-desc">'+b.desc+'</div>'
    + '<div class="price-row"><span class="price b">'+b.price+'</span>'+durationSpan+'</div>'
    + '<div class="btn-row">'+demoBtn
    + '<a class="btn btn-buy b" href="'+b.buyHref+'" rel="noopener" target="_blank">Buy</a></div></div></div>';
}

function renderBookCard(b){
  var demoBtn = (b.demoType === 'popup')
    ? '<a class="btn btn-demo" href="javascript:void(0)" onclick="openPdfDemo(event)">Demo</a>'
    : '<a class="btn btn-demo" href="'+b.demoHref+'" rel="noopener" target="_blank">Demo</a>';
  return '<div class="card book-card" data-category="book"><img alt="'+b.alt+'" src="'+b.img+'"/>'
    + '<div class="book-meta-force"><div class="book-cat-force">'+b.by+'</div><div class="book-name-force">'+b.name+'</div></div>'
    + '<div class="body"><div class="by">'+b.by+'</div><h3>'+b.name+'</h3>'
    + '<div class="price-row"><span class="price b">'+b.price+'</span></div>'
    + '<div class="btn-row">'+demoBtn
    + '<a class="btn btn-buy b" href="'+b.buyHref+'" rel="noopener" target="_blank">Buy</a></div></div></div>';
}

(function(){
  var batchesGrid = document.getElementById('batchesGrid');
  if (batchesGrid) batchesGrid.innerHTML = BATCHES.map(renderBatchCard).join('');
  var booksGrid = document.getElementById('booksGrid');
  if (booksGrid) booksGrid.innerHTML = BOOKS.map(renderBookCard).join('');
})();

/* ---- Firebase se admin panel ke through add kiye gaye naye products load karo ----
   Yeh purani BATCHES/BOOKS list ko bilkul touch nahi karta — sirf naye products
   ko upar wali static list ke saath jod deta hai. Agar Firebase se fetch fail ho
   jaye (internet issue waghera), purani static site bilkul normal chalti rahegi. */
(function loadFirebaseProducts(){
  fetch('/.netlify/functions/get-all-products')
    .then(function(res){ return res.ok ? res.json() : []; })
    .then(function(items){
      var batchesGrid = document.getElementById('batchesGrid');
      var booksGrid = document.getElementById('booksGrid');
      items.forEach(function(p){
        var mapped = {
          alt: p.name,
          img: p.cardImage || '',
          by: p.by || '',
          name: p.name,
          desc: p.desc || '',
          price: '₹' + p.price,
          duration: p.duration || '',
          demoHref: 'product_page.html?id=' + p.id + '#demoSection',
          demoType: 'link',
          buyHref: 'product_page.html?id=' + p.id
        };
        if (p.category === 'batch' && batchesGrid) {
          batchesGrid.insertAdjacentHTML('beforeend', renderBatchCard(mapped));
        } else if (p.category === 'book' && booksGrid) {
          booksGrid.insertAdjacentHTML('beforeend', renderBookCard(mapped));
        }
      });
    })
    .catch(function(){ /* silent fail — static catalogue already visible */ });
})();

/* ---- inline script block 1 ---- */


function showPage(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  const page=document.getElementById('page-'+name);
  if(page) page.classList.add('active');
  const navBtn=document.querySelector('.nav-btn[data-page="'+name+'"]');
  if(navBtn){
    navBtn.classList.add('active');
    navBtn.setAttribute('aria-current','page');
  }
  document.querySelectorAll('.nav-btn:not([data-page="'+name+'"])').forEach(b=>b.removeAttribute('aria-current'));
  document.querySelectorAll('.section-status').forEach(s=>s.style.display='none');
  const status=document.querySelector('.section-status[data-status="'+name+'"]');
  if(status) status.style.display='inline-flex';
  window.scrollTo(0,0);
}

/* ---- inline script block 2 ---- */

const searchInput=document.getElementById('globalSearch');
searchInput.addEventListener('input',function(){
  const q=this.value.trim().toLowerCase();
  document.querySelectorAll('.batch-card,.book-card').forEach(card=>{
    const match=!q || card.textContent.toLowerCase().includes(q);
    card.classList.toggle('search-hide',!match);
  });
  document.querySelectorAll('.faq-item').forEach(item=>{
    const match=!q || item.textContent.toLowerCase().includes(q);
    item.classList.toggle('search-hide',!match);
  });
});

/* ---- inline script block 3 ---- */

(function(){
  var FATMAN_PAGES = ["images/fatman-page-01.jpg", "images/fatman-page-02.jpg", "images/fatman-page-03.jpg", "images/fatman-page-04.jpg", "images/fatman-page-05.jpg", "images/fatman-page-06.jpg", "images/fatman-page-07.jpg", "images/fatman-page-08.jpg", "images/fatman-page-09.jpg", "images/fatman-page-10.jpg", "images/fatman-page-11.jpg", "images/fatman-page-12.jpg", "images/fatman-page-13.jpg", "images/fatman-page-14.jpg", "images/fatman-page-15.jpg", "images/fatman-page-16.jpg", "images/fatman-page-17.jpg", "images/fatman-page-18.jpg", "images/fatman-page-19.jpg", "images/fatman-page-20.jpg"];
  var overlay = document.getElementById('pdfModalOverlay');
  var body = document.getElementById('pdfModalBody');
  var closeBtn = document.getElementById('pdfModalCloseBtn');
  var rendered = false;
  var isOpen = false;

  function renderPages(){
    if (rendered) return;
    rendered = true;
    var frag = document.createDocumentFragment();
    FATMAN_PAGES.forEach(function(src, i){
      var wrap = document.createElement('div');
      wrap.className = 'pdf-page-wrap';
      var img = document.createElement('img');
      img.src = src;
      img.loading = 'lazy';
      img.alt = 'Page ' + (i+1);
      var badge = document.createElement('div');
      badge.className = 'pdf-page-num';
      badge.textContent = (i+1) + ' / ' + FATMAN_PAGES.length;
      wrap.appendChild(img);
      wrap.appendChild(badge);
      frag.appendChild(wrap);
    });
    var note = document.createElement('div');
    note.className = 'pdf-modal-footer-note';
    note.textContent = 'End of demo preview — ' + FATMAN_PAGES.length + ' pages';
    frag.appendChild(note);
    body.innerHTML = '';
    body.appendChild(frag);
  }

  window.openPdfDemo = function(e){
    if (e) e.preventDefault();
    renderPages();
    overlay.classList.add('open');
    requestAnimationFrame(function(){ overlay.classList.add('show'); });
    document.body.style.overflow = 'hidden';
    isOpen = true;
    body.scrollTop = 0;
    if (!(history.state && history.state.pdfModal)) {
      history.pushState({pdfModal:true}, '', location.href);
    }
  };

  function hideModal(){
    overlay.classList.remove('show');
    document.body.style.overflow = '';
    isOpen = false;
    setTimeout(function(){ overlay.classList.remove('open'); }, 220);
  }

  window.closePdfDemo = function(){
    if (!isOpen) return;
    if (history.state && history.state.pdfModal) {
      history.back();
    } else {
      hideModal();
    }
  };

  closeBtn.addEventListener('click', window.closePdfDemo);
  overlay.addEventListener('click', function(e){
    if (e.target === overlay) window.closePdfDemo();
  });

  window.addEventListener('popstate', function(e){
    if (isOpen && !(e.state && e.state.pdfModal)) {
      hideModal();
    }
  });
})();

/* ---- inline script block 4 — Welcome popup (first-time visitors) ---- */

(function(){
  var STORAGE_KEY = 'welcomePopupDismissed';
  var overlay = document.getElementById('welcomeModalOverlay');
  var closeBtn = document.getElementById('welcomeModalCloseBtn');
  var checkbox = document.getElementById('welcomeDontShowAgain');
  if (!overlay || !closeBtn || !checkbox) return;

  function showWelcome(){
    overlay.classList.add('open');
    requestAnimationFrame(function(){ overlay.classList.add('show'); });
    document.body.style.overflow = 'hidden';
  }

  function hideWelcome(){
    overlay.classList.remove('show');
    document.body.style.overflow = '';
    setTimeout(function(){ overlay.classList.remove('open'); }, 220);
    if (checkbox.checked) {
      try { localStorage.setItem(STORAGE_KEY, '1'); } catch(e){}
    }
  }

  closeBtn.addEventListener('click', hideWelcome);
  overlay.addEventListener('click', function(e){
    if (e.target === overlay) hideWelcome();
  });

  var alreadyDismissed = false;
  try { alreadyDismissed = localStorage.getItem(STORAGE_KEY) === '1'; } catch(e){}
  if (!alreadyDismissed) showWelcome();
})();

/* ---- My Orders section ---- */
(function(){
  var auth = firebase.auth();
  var signedOutEl = document.getElementById('ordersSignedOut');
  var loadingEl = document.getElementById('ordersLoading');
  var emptyEl = document.getElementById('ordersEmpty');
  var listEl = document.getElementById('ordersList');
  var signInBtn = document.getElementById('ordersSignInBtn');

  /* Popups get silently blocked inside in-app browsers (Telegram, Instagram, etc.)
     and some mobile browsers — in that case Firebase throws (or the popup just
     never opens) and, before this fix, we only logged it to the console, so the
     button looked "dead". Now we fall back to a full-page redirect sign-in and
     also show the person a visible message if sign-in truly fails. */
  function isPopupBlockedErr(err){
    return err && (
      err.code === 'auth/popup-blocked' ||
      err.code === 'auth/popup-closed-by-user' ||
      err.code === 'auth/cancelled-popup-request' ||
      err.code === 'auth/operation-not-supported-in-this-environment'
    );
  }

  if (signInBtn) {
    signInBtn.addEventListener('click', function(){
      var provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider).catch(function(err){
        console.error('Sign-in popup error:', err);
        if (isPopupBlockedErr(err)) {
          auth.signInWithRedirect(provider).catch(function(err2){
            console.error('Sign-in redirect error:', err2);
            alert('Sign in nahi ho paya. Kripya browser ka popup blocker check karein ya dusre browser mein try karein.');
          });
          return;
        }
        alert('Sign in nahi ho paya. Dobara try karein.');
      });
    });
  }

  /* Completes the redirect-based sign-in flow above, and surfaces any error
     that happened during the redirect round trip. */
  auth.getRedirectResult().catch(function(err){
    console.error('Redirect sign-in error:', err);
  });

  function statusLabel(s){
    if (s === 'approved') return 'Approved';
    if (s === 'rejected') return 'Rejected';
    return 'Pending';
  }

  function orderCardHTML(o){
    var isBatch = o.category !== 'book';
    var showJoin = isBatch && o.status === 'approved' && o.inviteLink;
    var icon = isBatch
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>';
    var dateStr = o.createdAt ? new Date(o.createdAt).toLocaleDateString('en-IN', {day:'numeric', month:'short', year:'numeric'}) : '';
    var joinBtn = showJoin
      ? '<a class="order-join-btn" href="' + o.inviteLink + '" target="_blank" rel="noopener"><svg width="14" height="14" viewBox="0 0 240 240" fill="currentColor"><path d="M120 0C53.7 0 0 53.7 0 120s53.7 120 120 120 120-53.7 120-120S186.3 0 120 0zm55.6 82.1l-19.4 91.4c-1.5 6.6-5.3 8.2-10.7 5.1l-29.6-21.8-14.3 13.7c-1.6 1.6-2.9 2.9-6 2.9l2.1-30.2 55-49.7c2.4-2.1-.5-3.3-3.7-1.2l-68 42.8-29.3-9.2c-6.4-2-6.5-6.4 1.3-9.4l114.6-44.2c5.3-2 9.9 1.3 8.2 9.8z"/></svg>Join Telegram</a>'
      : '';
    return '<div class="order-card"><div class="row"><div class="thumb">' + icon + '</div>'
      + '<div class="info"><div class="n">' + (o.productName || '') + '</div>'
      + '<div class="m">' + dateStr + (dateStr ? ' &middot; ' : '') + '₹' + (o.price || '') + '</div></div>'
      + '<div class="order-pill ' + o.status + '">' + statusLabel(o.status) + '</div></div>'
      + joinBtn + '</div>';
  }

  function loadOrders(user){
    signedOutEl.style.display = 'none';
    loadingEl.style.display = 'block';
    emptyEl.style.display = 'none';
    listEl.innerHTML = '';

    user.getIdToken().then(function(idToken){
      return fetch('/.netlify/functions/get-my-orders', {
        headers: { 'Authorization': 'Bearer ' + idToken }
      });
    }).then(function(res){ return res.json(); }).then(function(orders){
      loadingEl.style.display = 'none';
      if (!orders || !orders.length) {
        emptyEl.style.display = 'block';
        return;
      }
      listEl.innerHTML = orders.map(orderCardHTML).join('');
    }).catch(function(){
      loadingEl.style.display = 'none';
      emptyEl.textContent = 'Orders load nahi ho paaye';
      emptyEl.style.display = 'block';
    });
  }

  auth.onAuthStateChanged(function(user){
    if (user) {
      loadOrders(user);
    } else {
      loadingEl.style.display = 'none';
      emptyEl.style.display = 'none';
      listEl.innerHTML = '';
      signedOutEl.style.display = 'block';
    }
  });
})();

