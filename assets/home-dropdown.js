(function(){
  // Simple dropdown behavior shared across pages.
  function initDropdown(root) {
    var toggle = root.querySelector('#home-toggle');
    var menu = root.querySelector('#home-menu');
    if(!toggle || !menu) return;
    function close(){ menu.classList.remove('show'); toggle.setAttribute('aria-expanded','false'); }
    function open(){ menu.classList.add('show'); toggle.setAttribute('aria-expanded','true'); menu.querySelector('[role=menuitem]')?.focus(); }
    toggle.addEventListener('click', function(e){
      if(menu.classList.contains('show')) { close(); root.classList.remove('open'); } else { open(); root.classList.add('open'); }
    });
    // close on outside click
    document.addEventListener('click', function(e){
      if(!root.contains(e.target)) close();
    });
    // keyboard handling
    toggle.addEventListener('keydown', function(e){
      if(e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
      if(e.key === 'Escape') close();
    });
    menu.addEventListener('keydown', function(e){
      if(e.key === 'Escape') { e.preventDefault(); close(); root.classList.remove('open'); toggle.focus(); }
    });
    // wire actions
    var printBtn = root.querySelector('#print-action');
    if(printBtn) printBtn.addEventListener('click', function(){ window.print(); });
    var topBtn = root.querySelector('#top-action');
    if(topBtn) topBtn.addEventListener('click', function(){ window.scrollTo({top:0, behavior:'smooth'}); });
  }
  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.home-dropdown').forEach(function(root){ initDropdown(root); });
  });
})();