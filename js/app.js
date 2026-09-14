/* ==== App shell: page navigation, global search, welcome popup ====
   Depends on: batches.js / books.js / orders.js already having rendered
   their cards into the DOM — load this file AFTER those. */

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

  /* Yaad rakho ki last kaun sa tab khula tha, taaki reload karne par
     wahi tab wapas khule (Batch home pe wapas na jaaye). */
  try { sessionStorage.setItem('lastActivePage', name); } catch(e){}

  /* Search box ko reset karo jab tab badlo — taaki ek section ka
     search doosre section me "carry over" na ho. */
  const searchInputEl = document.getElementById('globalSearch');
  if (searchInputEl && searchInputEl.value) {
    searchInputEl.value = '';
    document.querySelectorAll('.search-hide').forEach(el => el.classList.remove('search-hide'));
  }
}

/* ---- Page load par section open karo — pehle URL (?section=books jaisa link
   book_page.html ke hamburger menu se aata hai) check karo, warna last-active tab restore karo ---- */
(function restoreLastPage(){
  var urlSection = null;
  try {
    var params = new URLSearchParams(window.location.search);
    urlSection = params.get('section');
  } catch(e){}

  if (urlSection && document.getElementById('page-' + urlSection)) {
    showPage(urlSection);
    return;
  }

  var lastPage = null;
  try { lastPage = sessionStorage.getItem('lastActivePage'); } catch(e){}
  if (lastPage && lastPage !== 'all') {
    showPage(lastPage);
  }
})();

/* ---- Global search — sirf currently-active section ke cards par lagta hai ---- */
const searchInput=document.getElementById('globalSearch');
searchInput.addEventListener('input',function(){
  const q=this.value.trim().toLowerCase();
  const activePage=document.querySelector('.page.active');
  if (!activePage) return;
  activePage.querySelectorAll('.batch-card,.book-card').forEach(card=>{
    const match=!q || card.textContent.toLowerCase().includes(q);
    card.classList.toggle('search-hide',!match);
  });
  activePage.querySelectorAll('.faq-item').forEach(item=>{
    const match=!q || item.textContent.toLowerCase().includes(q);
    item.classList.toggle('search-hide',!match);
  });
});

/* ---- Welcome popup (first-time visitors) ---- */
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
