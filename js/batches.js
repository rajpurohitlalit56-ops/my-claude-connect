/* ==== Batches: rendering + mounting + Firebase sync (batch products only) ====
   Depends on: js/batches-data.js (BATCHES array) — load that script BEFORE this one. */

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


(function(){
  var batchesGrid = document.getElementById('batchesGrid');
  if (batchesGrid) batchesGrid.innerHTML = BATCHES.map(renderBatchCard).join('');
})();

/* ---- Firebase se admin panel ke through add kiye gaye naye BATCHES load karo ----
   Static BATCHES list ko touch nahi karta, sirf naye batch products jod deta hai. */
(function loadFirebaseBatches(){
  fetch('/.netlify/functions/get-all-products')
    .then(function(res){ return res.ok ? res.json() : []; })
    .then(function(items){
      var batchesGrid = document.getElementById('batchesGrid');
      if (!batchesGrid) return;
      items.forEach(function(p){
        if (p.category !== 'batch') return;
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
        batchesGrid.insertAdjacentHTML('beforeend', renderBatchCard(mapped));
      });
    })
    .catch(function(){ /* silent fail — static catalogue already visible */ });
})();
