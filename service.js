/* ==========================================================
   SERVICE.JS - ORVEXA Services Page Logic
   ========================================================== */

// ---- FAQ Accordion ----
document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    const trigger = item.querySelector('.faq-trigger');
    const body = item.querySelector('.faq-body');
    if (!trigger || !body) return;
    trigger.addEventListener('click', function () {
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';
      // Close all
      faqItems.forEach(function (fi) {
        fi.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
        fi.querySelector('.faq-body').classList.remove('open');
      });
      // Open clicked if was closed
      if (!isOpen) {
        trigger.setAttribute('aria-expanded', 'true');
        body.classList.add('open');
      }
    });
  });

  // ---- Booking modal close button ----
  const closeBtn = document.getElementById('modalCloseBtn');
  const bookingModal = document.getElementById('bookingModal');
  if (closeBtn && bookingModal) {
    closeBtn.addEventListener('click', function () {
      bookingModal.classList.remove('open');
      bookingModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
    bookingModal.addEventListener('click', function (e) {
      if (e.target === bookingModal) {
        bookingModal.classList.remove('open');
        bookingModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  }

  // ---- Card hover glow enhancement ----
  const cards = document.querySelectorAll('.svc-card');
  cards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const glow = card.querySelector('.svc-card-glow');
      if (glow) {
        const pct = (x / rect.width) * 100;
        glow.style.background = 'linear-gradient(90deg, transparent ' + (pct - 30) + '%, var(--brand-accent) ' + pct + '%, transparent ' + (pct + 30) + '%)';
      }
    });
  });

  // ---- Animate stats on scroll ----
  const statNums = document.querySelectorAll('.svc-stat-num, .gstat-num');
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  statNums.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // ---- Cards entrance animation ----
  const cardObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, idx) {
      if (entry.isIntersecting) {
        setTimeout(function () {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, idx * 80);
        cardObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(function (card, idx) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(28px)';
    card.style.transition = 'opacity 0.55s ease, transform 0.55s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease, border-color 0.3s ease';
    cardObs.observe(card);
  });

  // Update year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// ---- openBookingModal (lightweight on services page) ----
function openBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}
