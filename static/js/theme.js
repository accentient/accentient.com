(function () {
  var root = document.documentElement;
  var KEY = 'acc-theme';
  var bL = document.getElementById('theme-light');
  var bD = document.getElementById('theme-dark');

  function paint() {
    // The visual active state is handled in CSS, keyed off <html data-theme> which
    // the inline head script sets before first paint (so no flicker on navigation).
    // Here we only sync the accessibility state.
    var t = root.getAttribute('data-theme');
    if (bL) bL.setAttribute('aria-pressed', t === 'light' ? 'true' : 'false');
    if (bD) bD.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
  }
  function setTheme(t) {
    root.setAttribute('data-theme', t);
    try { localStorage.setItem(KEY, t); } catch (e) {}
    paint();
  }
  if (bL) bL.addEventListener('click', function () { setTheme('light'); });
  if (bD) bD.addEventListener('click', function () { setTheme('dark'); });
  paint();

  var burger = document.getElementById('nav-burger');
  var links = document.getElementById('nav-links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();
