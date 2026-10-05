
const JOURNAL_ARTICLES = [
  {
    slug: 'ev-battery-soh-telemetry',
    issue: 'ISSUE 01',
    category: 'HIGH-VOLTAGE EV',
    categorySlug: 'ev',
    title: 'Next-Generation EV Battery SOH Telemetry: Beyond Dashboard Estimates',
    excerpt: 'Analyzing real-time CANbus cell voltage deltas, impedance shifts at 1000V DC, and why factory dashboard state-of-charge algorithms conceal up to 18% true usable capacity degradation.',
    date: 'OCTOBER 2025',
    readTime: '8 MIN READ',
    author: 'Dr. Marcus Vance',
    authorRole: 'Chief Metrology Engineer',
    authorImg: 'assets/team_marcus.jpg',
    img: 'assets/service_card_ev.jpg',
    badge: 'UNECE R100 REV 3'
  },
  {
    slug: '5-gas-optical-chromatography',
    issue: 'ISSUE 02',
    category: 'EMISSIONS RESEARCH',
    categorySlug: 'emissions',
    title: '5-Gas Optical Chromatography vs Handheld OBD: Measuring Clean Air Compliance',
    excerpt: 'Dyno-loaded tailpipe optical bench spectrometry measuring CO, CO₂, HC, O₂, and NOx down to 1 ppm resolution. Why non-dispersive infrared absorption is essential for real-world compliance.',
    date: 'SEPTEMBER 2025',
    readTime: '11 MIN READ',
    author: 'Elena Rostova',
    authorRole: 'Lead Emissions Chemist',
    authorImg: 'assets/team_elena.jpg',
    img: 'assets/service_emissions.jpg',
    badge: 'ECE REGULATION 83'
  },
  {
    slug: 'brake-force-distribution-dynamics',
    issue: 'ISSUE 03',
    category: 'SAFETY PROTOCOL',
    categorySlug: 'safety',
    title: 'The Mathematics of Deceleration: Brake Force Distribution on Roller Dynos',
    excerpt: 'How Maha IW4 dynamic load cells quantify asymmetric pad drag, pedal pressure hysteresis, and why a 15% lateral disparity compromises wet-weather anti-lock brake stability.',
    date: 'AUGUST 2025',
    readTime: '9 MIN READ',
    author: 'David Sterling',
    authorRole: 'Head of Vehicle Kinematics',
    authorImg: 'assets/team_david.jpg',
    img: 'assets/service_safety.jpg',
    badge: 'ISO/IEC 17020'
  },
  {
    slug: 'blockchain-cryptographic-compliance',
    issue: 'ISSUE 04',
    category: 'DIGITAL RECORDS',
    categorySlug: 'digital',
    title: 'Cryptographic Compliance: Anchoring Vehicle Inspection Records via SHA-256',
    excerpt: 'Eliminating paper certificate forgery and mileage clocking through immutable distributed ledgers and 64-character dynamic QR hashes instantly scannable by transport authorities.',
    date: 'JULY 2025',
    readTime: '7 MIN READ',
    author: 'Sophia Lin',
    authorRole: 'Cryptographic Architect',
    authorImg: 'assets/team_sophia.jpg',
    img: 'assets/card_tablet_cert.jpg',
    badge: 'SHA-256 IMMUTABLE'
  },
  {
    slug: 'commercial-fleet-compliance-strategy',
    issue: 'ISSUE 05',
    category: 'FLEET MANAGEMENT',
    categorySlug: 'fleet',
    title: 'Managing Commercial Fleet Compliance: Automated Bay Scheduling & Risk Mitigation',
    excerpt: 'An operational analysis on reducing logistics depot downtime by 42% via automated 30-day statutory expiry queuing, bulk digital accounts, and priority commercial inspection lanes.',
    date: 'JUNE 2025',
    readTime: '12 MIN READ',
    author: 'Dr. Marcus Vance',
    authorRole: 'Chief Metrology Engineer',
    authorImg: 'assets/team_marcus.jpg',
    img: 'assets/card_clean_road.jpg',
    badge: 'COMMERCIAL CARRIER'
  },
  {
    slug: 'high-voltage-electrical-isolation',
    issue: 'ISSUE 06',
    category: 'METROLOGY STANDARDS',
    categorySlug: 'ev',
    title: 'High-Voltage Electrical Isolation: Preventing Dielectric Breakdown in Hybrids',
    excerpt: 'Fluke 1000V DC megohmmeter methodology for diagnosing chassis isolation degradation, contact resistance in fast-charge ports, and preventing catastrophic interlock shutdowns.',
    date: 'MAY 2025',
    readTime: '10 MIN READ',
    author: 'Elena Rostova',
    authorRole: 'IEV Level 3 Specialist',
    authorImg: 'assets/team_elena.jpg',
    img: 'assets/h2_inspection_bay.jpg',
    badge: 'IEV LEVEL 3'
  }
];

function renderJournalCards(filterCategory = 'all') {
  const grid = document.getElementById('journalGrid');
  if (!grid) return;

  const filtered = filterCategory === 'all'
    ? JOURNAL_ARTICLES
    : JOURNAL_ARTICLES.filter(a => a.categorySlug === filterCategory);

  grid.innerHTML = filtered.map(a => `
    <article class="journal-card" data-category="${a.categorySlug}">
      <div class="jc-media">
        <img src="${a.img}" alt="${a.title}" class="jc-img" loading="lazy">
        <div class="jc-media-overlay"></div>
        <span class="jc-issue-badge">${a.issue}</span>
        <span class="jc-cert-tag">${a.badge}</span>
      </div>
      <div class="jc-body">
        <div class="jc-meta-top">
          <span class="jc-cat-pill">${a.category}</span>
          <span class="jc-date">${a.date}</span>
          <span class="jc-read-time">&bull; ${a.readTime}</span>
        </div>
        <h3 class="jc-title">
          <a href="journal-detail.html?article=${a.slug}">${a.title}</a>
        </h3>
        <p class="jc-excerpt">${a.excerpt}</p>
        <div class="jc-author-row">
          <img src="${a.authorImg}" alt="${a.author}" class="jc-author-img">
          <div class="jc-author-info">
            <span class="jc-author-name">${a.author}</span>
            <span class="jc-author-role">${a.authorRole}</span>
          </div>
        </div>
      </div>
      <div class="jc-footer">
        <a href="journal-detail.html?article=${a.slug}" class="btn-journal-link">
          <span>Read Full Journal</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </article>
  `).join('');
}

function initFilterTabs() {
  const tabs = document.querySelectorAll('.j-filter-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-filter') || 'all';
      renderJournalCards(cat);
    });
  });
}

function initJournalFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const body = item.querySelector('.faq-body');
    if (!trigger || !body) return;

    trigger.addEventListener('click', () => {
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';
      faqItems.forEach(fi => {
        const t = fi.querySelector('.faq-trigger');
        const b = fi.querySelector('.faq-body');
        if (t) t.setAttribute('aria-expanded', 'false');
        if (b) b.classList.remove('open');
      });
      if (!isOpen) {
        trigger.setAttribute('aria-expanded', 'true');
        body.classList.add('open');
      }
    });
  });
}

function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggle');
  const html = document.documentElement;

  const savedTheme = localStorage.getItem('orvexa-theme') || 'light';
  html.setAttribute('data-theme', savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = html.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('orvexa-theme', next);
    });
  }
}

function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  const close = document.getElementById('drawerClose');

  if (btn && drawer) {
    btn.addEventListener('click', () => drawer.classList.add('open'));
  }
  if (close && drawer) {
    close.addEventListener('click', () => drawer.classList.remove('open'));
  }
}

function openBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function initRTL() {
  const rtlToggle = document.getElementById('rtlToggle');
  const htmlRoot = document.documentElement;
  const savedDir = localStorage.getItem('orvexa-dir') || 'ltr';
  applyDir(savedDir);

  if (rtlToggle) {
    rtlToggle.addEventListener('click', () => {
      const currentDir = htmlRoot.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      applyDir(newDir);
      localStorage.setItem('orvexa-dir', newDir);
    });
  }
}

function applyDir(dir) {
  const htmlRoot = document.documentElement;
  const rtlBtnText = document.getElementById('rtlBtnText');
  htmlRoot.setAttribute('dir', dir);
  if (rtlBtnText) {
    rtlBtnText.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
  }
}

function openPortalNotice(type, title, msg) {
  const modal = document.getElementById('portalNoticeModal');
  if (!modal) return;
  const eyebrowEl = document.getElementById('portalNoticeEyebrow');
  const titleEl = document.getElementById('portalNoticeTitle');
  const msgEl = document.getElementById('portalNoticeMsg');
  const detailsEl = document.getElementById('portalNoticeDetails');
  const actionBtn = document.getElementById('portalNoticeActionBtn');

  if (type === '404') {
    if (eyebrowEl) eyebrowEl.textContent = 'REGIONAL ARCHIVE NODE';
    if (titleEl) titleEl.textContent = title || 'HTTP 404 — Document Not Found';
    if (msgEl) msgEl.textContent = msg || 'The requested verification telemetry record or digital archive does not exist on this regional node.';
    if (detailsEl) detailsEl.innerHTML = `
      <div class="notice-meta-tag">STATUS: 404 RECORD NOT FOUND</div>
      <p class="notice-meta-sub">Ensure your 64-character verification hash matches your physical inspection paperwork or certificate QR code.</p>
    `;
    if (actionBtn) {
      actionBtn.textContent = 'Return to Platform';
      actionBtn.onclick = function() {
        closePortalNotice();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    }
  } else if (type === 'comingsoon') {
    if (eyebrowEl) eyebrowEl.textContent = 'DEPLOYMENT ROADMAP • Q4 2026';
    if (titleEl) titleEl.textContent = title || 'Mobile Rapid Verification Unit';
    if (msgEl) msgEl.textContent = msg || 'ORVEXA Mobile Rapid-Response Telemetry fleet deployment is currently in field testing.';
    if (detailsEl) detailsEl.innerHTML = `
      <div class="notice-meta-tag tag-gold">PHASE 2 ROLLOUT: ON SCHEDULE</div>
      <p class="notice-meta-sub">On-demand commercial fleet inspection vehicles equipped with calibrated gas analyzers and wireless chassis alignment sensors.</p>
    `;
    if (actionBtn) {
      actionBtn.textContent = 'Book Standard Inspection';
      actionBtn.onclick = function() {
        closePortalNotice();
        openBookingModal();
      };
    }
  } else {
    if (eyebrowEl) eyebrowEl.textContent = 'CLIENT ACCESS PROTOCOL';
    if (titleEl) titleEl.textContent = title || 'Client & Partner Authentication';
    if (msgEl) msgEl.textContent = msg || 'Access your authenticated ORVEXA vehicle history reports, digital token keys, and automated fleet compliance records.';
    if (detailsEl) detailsEl.innerHTML = `
      <div class="notice-meta-tag">ENTERPRISE CLIENT PORTAL</div>
      <p class="notice-meta-sub">Direct access requires cryptographic hardware key authentication or enterprise API token.</p>
    `;
    if (actionBtn) {
      actionBtn.textContent = 'Close';
      actionBtn.onclick = closePortalNotice;
    }
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closePortalNotice() {
  const modal = document.getElementById('portalNoticeModal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderJournalCards('all');
  initFilterTabs();
  initJournalFAQ();
  initThemeToggle();
  initRTL();
  initMobileMenu();

  const closeBtn = document.getElementById('modalCloseBtn');
  const bookingModal = document.getElementById('bookingModal');
  if (closeBtn) closeBtn.addEventListener('click', closeBookingModal);
  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) closeBookingModal();
    });
  }

  const portalModal = document.getElementById('portalNoticeModal');
  if (portalModal) {
    portalModal.addEventListener('click', (e) => {
      if (e.target === portalModal) closePortalNotice();
    });
  }

  const yr = document.getElementById('currentYear');
  if (yr) yr.textContent = new Date().getFullYear();
});
