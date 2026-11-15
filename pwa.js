// Service worker + install button. External file because CSP is script-src 'self'.
if ('serviceWorker' in navigator) {
  addEventListener('load', () => navigator.serviceWorker.register('/sw.js'));
}
(() => {
  const box = document.getElementById('pwaHowTo');
  if (!box) return;
  const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone;
  if (standalone) { box.querySelector('.pwa-installed').hidden = false; return; }
  const ua = navigator.userAgent;
  const isIOS = /iphone|ipad|ipod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  // Open the matching steps for this device; the others stay visible but secondary.
  const mine = box.querySelector(isIOS ? '[data-os="ios"]' : /android/i.test(ua) ? '[data-os="android"]' : '[data-os="desktop"]');
  if (mine) mine.classList.add('pwa-mine');
  const btn = box.querySelector('.pwa-btn');
  let deferred;
  addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferred = e; btn.hidden = false; });
  btn.addEventListener('click', async () => {
    if (!deferred) return;
    deferred.prompt(); await deferred.userChoice; deferred = null; btn.hidden = true;
  });
  addEventListener('appinstalled', () => { btn.hidden = true; box.querySelector('.pwa-installed').hidden = false; });
})();

// Close the phone menu after a tap so it doesn't cover the section you jumped to.
document.querySelectorAll('.nav-menu a').forEach(a =>
  a.addEventListener('click', () => a.closest('details').removeAttribute('open')));
