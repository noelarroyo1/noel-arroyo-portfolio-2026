/* ==========================================================================
   NOEL ARROYO — PORTFOLIO SITE
   script.js
   Shared script for all pages: index.html, mvp-healthcare.html,
   takeda.html, cfna.html, mvp-provider.html
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const header = document.querySelector('header.site-header');

  /* ===== MOBILE MENU ===== */
  function closeMenu() {
    mobileMenu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', false);
    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i> Menu';
  }

  if (menuBtn && mobileMenu) {
    // Toggle menu open/close on button click
    menuBtn.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', isOpen);
      menuBtn.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i> Menu'
        : '<i class="fa-solid fa-bars"></i> Menu';
    });

    // Close menu when a nav link is clicked
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Auto-close and reset when viewport resizes back to desktop width (>960px)
    window.addEventListener('resize', function () {
      if (window.innerWidth > 960) {
        closeMenu();
      }
    });
  }

  /* ===== STICKY HEADER SHADOW ON SCROLL ===== */
  if (header) {
    window.addEventListener('scroll', function () {
      header.style.boxShadow = window.scrollY > 10 ? '0 2px 12px rgba(0,0,0,0.08)' : 'none';
    });
  }

  /* ===== SMOOTH SCROLL FOR IN-PAGE ANCHOR LINKS =====
     Used on index.html for nav links (Learn About Me, View Experience,
     View Portfolio, Contact Me), hero buttons, the CTA button, and the
     logo (which scrolls to #top). Harmless no-op on pages with no
     matching in-page anchors. */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = header ? header.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

});
