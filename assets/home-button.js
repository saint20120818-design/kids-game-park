(()=>{
  if(document.querySelector('[data-game-park-home]'))return;
  const style=document.createElement('style');
  style.textContent=`.game-park-home{position:fixed!important;z-index:2147483647!important;top:max(12px,env(safe-area-inset-top))!important;left:12px!important;display:grid!important;place-items:center!important;width:50px!important;height:50px!important;padding:0!important;border:4px solid #fff!important;border-radius:18px!important;background:#ff826b!important;color:#fff!important;font:900 25px/1 Arial,sans-serif!important;text-decoration:none!important;box-shadow:0 6px 0 #c74e42,0 8px 18px #173c4e33!important;touch-action:manipulation!important;-webkit-tap-highlight-color:transparent!important}.game-park-home:active{transform:translateY(5px)!important;box-shadow:0 1px 0 #c74e42!important}.game-park-home:focus-visible{outline:5px solid #2d67d5!important;outline-offset:3px!important}`;
  document.head.appendChild(style);
  const home=document.createElement('a');home.className='game-park-home';home.href='../../';home.textContent='⌂';home.setAttribute('aria-label','回到小小遊戲樂園');home.dataset.gameParkHome='';document.body.appendChild(home);
})();

