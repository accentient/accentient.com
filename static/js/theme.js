(function () {
  var root = document.documentElement;
  var KEY = 'acc-theme';
  var bL = document.getElementById('theme-light');
  var bD = document.getElementById('theme-dark');

  function paint() {
    var t = root.getAttribute('data-theme');
    if (bL) { bL.classList.toggle('active', t === 'light'); bL.setAttribute('aria-pressed', t === 'light' ? 'true' : 'false'); }
    if (bD) { bD.classList.toggle('active', t === 'dark'); bD.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false'); }
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
