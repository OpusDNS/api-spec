(function () {
  var suffix = ' - OpusDNS API Docs';

  function updateTitle() {
    var h1 = document.querySelector('h1');
    if (h1) {
      var pageTitle = h1.textContent.trim();
      if (pageTitle && document.title !== pageTitle + suffix) {
        document.title = pageTitle + suffix;
      }
    }
  }

  // Run on initial load and on SPA navigation
  var observer = new MutationObserver(updateTitle);
  observer.observe(document.querySelector('head > title') || document.head, {
    childList: true,
    subtree: true,
    characterData: true
  });

  // Also observe body for SPA route changes
  if (document.body) {
    var bodyObserver = new MutationObserver(updateTitle);
    bodyObserver.observe(document.body, { childList: true, subtree: true });
  }

  document.addEventListener('DOMContentLoaded', updateTitle);
  updateTitle();
})();
