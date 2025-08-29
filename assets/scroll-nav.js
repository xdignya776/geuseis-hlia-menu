// Detect horizontal overflow and add/remove .no-overflow class
(function(){
  function update() {
    document.querySelectorAll('.topnav.scrollable').forEach(function(nav){
      if (!nav) return;
      if (nav.scrollWidth <= nav.clientWidth + 1) nav.classList.add('no-overflow');
      else nav.classList.remove('no-overflow');
    });
  }
  window.addEventListener('resize', update);
  document.addEventListener('DOMContentLoaded', function(){
    update();
    // also observe mutations (e.g., fonts loading) that may change width
    var obs = new MutationObserver(update);
    document.querySelectorAll('.topnav.scrollable').forEach(function(nav){ obs.observe(nav, { childList:true, subtree:true, attributes:true }); });
  });
})();
