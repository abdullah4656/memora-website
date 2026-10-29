/* Memora — page interactions */
(function () {
  'use strict';

  /* Mobile menu */
  var toggle = document.querySelector('.nav__toggle');
  var links = document.getElementById('nav-links');
  if (toggle && links) {
    var setMenu = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      links.classList.toggle('is-open', open);
    };
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });
    window.matchMedia('(min-width: 901px)').addEventListener('change', function (mq) {
      if (mq.matches) setMenu(false);
    });
  }

  /* FAQ accordion: one answer open at a time */
  var items = Array.prototype.slice.call(document.querySelectorAll('.faq__item'));
  var setItem = function (item, open) {
    var btn = item.querySelector('.faq__q');
    item.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
  };
  items.forEach(function (item) {
    item.querySelector('.faq__q').addEventListener('click', function () {
      var willOpen = !item.classList.contains('is-open');
      items.forEach(function (other) { setItem(other, false); });
      setItem(item, willOpen);
    });
  });
})();
