(function(){
  var p = location.pathname;
  var h = document.documentElement;
  if (p.indexOf('/workflows/') !== -1) h.classList.add('scope-workflows');
  if (p.indexOf('/articles/')  !== -1) h.classList.add('scope-articles');
})();
