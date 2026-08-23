/* ==== BATCHES & BOOKS DATA — edit here to add/update batches and books ==== */

var BATCHES = [
  {
    alt: 'Parmar GK 4.0',
    img: 'images/parmar-gk-4-0.jpg',
    by: 'BATCH BY RAJ SSC',
    name: 'Parmar GK 4.0',
    desc: 'Recorded lectures, bilingual notes, topic-wise quizzes &amp; revision',
    price: '₹44',
    duration: '1 year',
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
    duration: '1 year',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQADOgwAAt5E0Ef1D5hUYI8m3RYE',
    buyHref: 'https://t.me/Pyq60batch_bot'
  },
  {
    alt: 'Achievers Batch 7.0 (3 in 1)',
    img: 'images/achievers-batch-7-0-3-in-1.png',
    by: 'Rani Mam · UC Live',
    name: 'Achievers Batch 7.0 (3 in 1)',
    desc: 'A-to-Z Grammar, live practice &amp; recorded vocabulary',
    price: '₹44',
    duration: '1 year',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQAD4AgAAtDbCUdfnYrjZlsZ-hYE',
    buyHref: 'https://t.me/Ranimam70_bot'
  },
  {
    alt: 'Reasoning by Piyush Sir',
    img: 'images/reasoning-by-piyush-sir.jpg',
    by: 'Reasoning',
    name: 'Reasoning by Piyush Sir',
    desc: 'All topics covered, live practice sessions &amp; class PDFs',
    price: '₹44',
    duration: '1 year',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQADNRIAAl9I6EfSrmpxevArthYE',
    buyHref: 'https://t.me/Piyushresoning96_bot'
  },
  {
    alt: 'Math Special VOD Batch — Selection Way Gagan Sir 2026',
    img: 'images/math-special-vod-batch-selection-way-gagan-sir-2026.png',
    by: 'Gagan Sir · Selection Way',
    name: 'Math Special VOD Batch — Selection Way Gagan Sir 2026',
    desc: 'Complete syllabus coverage with structured practice questions',
    price: '₹44',
    duration: '1 year',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQADBAsAAsSJYEQsnzjaugjkLRYE',
    buyHref: 'https://t.me/Gagansirmathssc96_bot'
  },
  {
    alt: 'Math Special Revision Batch — Selection Way Gagan Sir 2026',
    img: 'images/math-special-revision-batch-selection-way-gagan-sir-2026.jpg',
    by: 'Gagan Sir · Selection Way',
    name: 'Math Special Revision Batch — Selection Way Gagan Sir 2026',
    desc: 'Complete syllabus coverage with structured practice &amp; revision',
    price: '₹44',
    duration: '1 year',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQADcxIAAhTLgUTVNLzwQjgSjRYE',
    buyHref: 'https://t.me/Gagansirrevision96_bot'
  },
  {
    alt: 'Parmar Current Affairs',
    img: 'images/parmar-current-affairs.jpg',
    by: 'Parmar SSC',
    name: 'Parmar Current Affairs',
    desc: 'Monthly current-affairs PDFs in Hindi &amp; English',
    price: '₹44',
    duration: '1 year',
    demoHref: null,
    demoLabel: 'Demo unavailable',
    buyHref: 'https://t.me/CAparmar96_bot'
  },
  {
    alt: 'Maths VOD 3.0 Batch by Aditya Ranjan Sir',
    img: 'images/maths-vod-3-0-batch-by-aditya-ranjan-sir.jpg',
    by: 'Arithmetic + Advance · Pre + Mains',
    name: 'Maths VOD 3.0 Batch by Aditya Ranjan Sir',
    desc: '350+ lectures, bilingual PDFs/tests &amp; classroom sheets',
    price: '₹44',
    duration: '1 year',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQAD1AgAAsSJWESCUa5HZJ4NMRYE',
    buyHref: 'https://t.me/Aaditya3096_bot'
  },
  {
    alt: 'English Foundation + Vocab + Practice Batch',
    img: 'images/english-foundation-vocab-practice-batch.jpg',
    by: 'Aman Vashishth · Selection Way',
    name: 'English Foundation + Vocab + Practice Batch',
    desc: 'Grammar, vocab &amp; passage practice with printable notes',
    price: '₹44',
    duration: '1 year',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQADShQAAhTLgUSVQDY8hQ-A_xYE',
    buyHref: 'https://t.me/Aman962026_bot'
  },
  {
    alt: 'Parmar\'s Reasoning Foundation VOD + Revision Batch',
    img: 'images/parmar-s-reasoning-foundation-vod-revision-batch.jpg',
    by: 'Kamal Sir',
    name: 'Parmar\'s Reasoning Foundation VOD + Revision Batch',
    desc: 'Foundation + revision lectures, bilingual PDFs &amp; mock tests',
    price: '₹44',
    duration: '1 year',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQADJxQAAhTLgURmx5FOH_SOOBYE',
    buyHref: 'https://t.me/Kamalsir96_bot'
  },
  {
    alt: 'Neetu Madam English Grammar + Vocab + Practice Batch 67 2026',
    img: 'images/neetu-madam-english-grammar-vocab-practice-batch-67-2026.jpg',
    by: 'Neetu Madam',
    name: 'Neetu Madam English Grammar + Vocab + Practice Batch 67 2026',
    desc: 'Grammar &amp; vocabulary lectures, PDFs plus practice mocks',
    price: '₹44',
    duration: '1 year',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQADChQAAhTLgUSFHYJVfHDmLRYE',
    buyHref: 'https://t.me/Neetu962026_bot'
  },
  {
    alt: 'Parmar CDS/CAPF Batch 2.0',
    img: 'images/parmar-cds-capf-batch-2-0.jpg',
    by: 'Parmar Sir',
    name: 'Parmar CDS/CAPF Batch 2.0',
    desc: 'Complete CDS &amp; CAPF prep — live + recorded classes, PYQ coverage, bilingual notes',
    price: '₹44',
    duration: '1 year',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQADow4AAhbgSUTfgeheutFPRxYE',
    buyHref: 'https://t.me/Sscbatch778_bot'
  },
  {
    alt: 'Rakesh Yadav Sir Math 2026 Batch — Careerwill',
    img: 'images/rakesh-yadav-sir-math-2026-batch-careerwill.jpg',
    by: 'Rakesh Yadav Sir',
    name: 'Rakesh Yadav Sir Math 2026 Batch — Careerwill',
    desc: 'Foundation to advanced arithmetic, mock tests &amp; printable practice sheets',
    price: '₹44',
    duration: '1 year',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQAD_BMAAhTLgUSIMds0CPWnuhYE',
    buyHref: 'https://t.me/Sscbatch778_bot'
  },
  {
    alt: 'Abhinav Sharma Math Batch 2026 — Careerwill',
    img: 'images/abhinav-sharma-math-batch-2026-careerwill.jpg',
    by: 'Abhinav Sharma Sir',
    name: 'Abhinav Sharma Math Batch 2026 — Careerwill',
    desc: 'Arithmetic + Advanced maths, live and recorded, with practice sheets',
    price: '₹44',
    duration: '1 year',
    demoHref: 'https://t.me/Sscbyrajbot?start=BQADAQAD3hMAAhTLgUTjK-D9TAl7GhYE',
    buyHref: 'https://t.me/Sscbatch778_bot'
  },
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
    card.style.display=(!q || card.textContent.toLowerCase().includes(q))?'':'none';
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

