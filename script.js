document.addEventListener('DOMContentLoaded', function () {

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Nav + back-to-top visibility on scroll
  var nav = document.getElementById('mainNav');
  var backTop = document.getElementById('backTop');

  function onScroll() {
    var scrolled = window.scrollY > 40;
    if (nav) nav.style.padding = scrolled ? '0.55rem 0' : '0.9rem 0';
    if (backTop) backTop.classList.toggle('is-visible', window.scrollY > 500);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Close mobile menu after clicking a nav link
  var navMenu = document.getElementById('navMenu');
  document.querySelectorAll('#navMenu .nav-link, #navMenu .mp-nav-cta').forEach(function (link) {
    link.addEventListener('click', function () {
      if (navMenu && navMenu.classList.contains('show')) {
        var collapse = bootstrap.Collapse.getOrCreateInstance(navMenu);
        collapse.hide();
      }
    });
  });

  // Contact form — front-end only demo submission
  var form = document.getElementById('contactForm');
  var note = document.getElementById('formNote');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        note.textContent = 'Mohon lengkapi nama dan kebutuhan packaging Anda.';
        note.style.color = '#C8402C';
        return;
      }

      var name = document.getElementById('name').value.trim();
      note.style.color = '';
      note.textContent = 'Terima kasih, ' + name + '. Pesan Anda telah dicatat — tim kami akan segera menghubungi Anda.';
      form.reset();
    });
  }

});