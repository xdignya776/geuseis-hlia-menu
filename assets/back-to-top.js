// Show a floating back-to-top button when the user scrolls down
(function(){
  const showAfter = 300; // px
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label','Back to top');
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M6 15l6-6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  btn.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
  btn.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' ') { e.preventDefault(); btn.click(); }});
  document.addEventListener('DOMContentLoaded', ()=>{
    document.body.appendChild(btn);
    const onScroll = ()=>{
      if(window.scrollY > showAfter) btn.classList.add('show'); else btn.classList.remove('show');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});
  });
})();
