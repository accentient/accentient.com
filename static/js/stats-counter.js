(function () {
  // Count-up animation for the homepage stats band. Parses each .stat-n value
  // (e.g. "2,000+", "100%") into a prefix, an integer, and a suffix, then
  // animates from 0 to the target when the band scrolls into view. Honors
  // prefers-reduced-motion by showing the final value immediately.
  var els = document.querySelectorAll('.stat-n');
  if (!els.length) return;

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var supported = 'IntersectionObserver' in window && !reduce;

  function parse(text) {
    var m = text.match(/[\d,]+/);
    if (!m) return null;
    var target = parseInt(m[0].replace(/,/g, ''), 10);
    if (isNaN(target)) return null;
    return { prefix: text.slice(0, m.index), suffix: text.slice(m.index + m[0].length), target: target };
  }

  function fmt(n) { return n.toLocaleString('en-US'); }

  function animate(el) {
    var info = el._stat;
    var dur = 1300, startTs = null;
    function step(ts) {
      if (startTs === null) startTs = ts;
      var p = Math.min((ts - startTs) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = info.prefix + fmt(Math.round(info.target * eased)) + info.suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = info.prefix + fmt(info.target) + info.suffix;
    }
    requestAnimationFrame(step);
  }

  var io = supported ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { animate(en.target); io.unobserve(en.target); }
    });
  }, { threshold: 0.4 }) : null;

  els.forEach(function (el) {
    var info = parse(el.textContent.trim());
    if (!info) return;
    el._stat = info;
    if (!supported) return;            // reduced motion / no IO: leave final value
    el.textContent = info.prefix + '0' + info.suffix;
    io.observe(el);
  });
})();
