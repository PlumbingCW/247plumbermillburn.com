(function(){
  var BP=768, root=document.documentElement;
  var btn=document.querySelector('.hamburger'), drawer=document.querySelector('.mob-drawer'), overlay=document.querySelector('.mob-overlay'), closeBtn=document.querySelector('.drawer-close');
  function openMenu(){ if(!drawer) return; drawer.removeAttribute('hidden'); overlay.classList.add('visible'); btn.setAttribute('aria-expanded','true'); root.style.overflow='hidden'; closeBtn.focus(); }
  function closeMenu(){ if(!drawer) return; drawer.setAttribute('hidden',''); overlay.classList.remove('visible'); btn.setAttribute('aria-expanded','false'); root.style.overflow=''; }
  if(btn){
    btn.addEventListener('click',function(){ btn.getAttribute('aria-expanded')==='true'?closeMenu():openMenu(); });
    closeBtn.addEventListener('click',function(){ closeMenu(); btn.focus(); });
    overlay.addEventListener('click',closeMenu);
    document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&btn.getAttribute('aria-expanded')==='true'){ closeMenu(); btn.focus(); } });
    window.addEventListener('resize',function(){ if(window.innerWidth>BP) closeMenu(); });
    drawer.addEventListener('click',function(e){ if(e.target.tagName==='A') closeMenu(); });
  }
  var items=document.querySelectorAll('.faq-item');
  items.forEach(function(it){
    var q=it.querySelector('.faq-q'), a=it.querySelector('.faq-answer');
    q.addEventListener('click',function(){
      var open=it.classList.toggle('open');
      q.setAttribute('aria-expanded',open?'true':'false');
    });
  });
})();
