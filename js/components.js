/* ============================================================
   components.js
   Sets the active nav link based on the current page URL.
   Nav and footer are now injected at build time — no fetching.
   ============================================================ */

(function () {
  var path  = window.location.pathname;
  var links = document.querySelectorAll('.nav-links a');

  links.forEach(function(link) {
    var linkPath = new URL(link.href).pathname;

    // Exact match
    if (path === linkPath) {
      link.classList.add('active');
      return;
    }

    // Blog section — active for any /blog/ URL
    if (linkPath === '/blog/' && path.indexOf('/blog/') === 0) {
      link.classList.add('active');
    }
  });
})();
