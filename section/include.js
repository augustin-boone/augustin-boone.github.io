document.querySelectorAll('[data-include]').forEach(function (el) {
  fetch(el.getAttribute('data-include'))
    .then(function (r) { return r.text(); })
    .then(function (html) { el.outerHTML = html; });
});
