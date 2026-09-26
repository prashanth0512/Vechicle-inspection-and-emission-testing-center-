/* ==========================================================
   CONTACT.JS - ORVEXA Priority Intake & Testing Center Logic
   Form Handling, HUD Map Interactive Switching, FAQs, Theme & Modals
   ========================================================== */

const HUB_DATA = {
  central: {
    id: 'central',
    title: 'CENTRAL METROLOGY HEADQUARTERS',
    pinId: 'mapPinCentral',
    address: '48 Calibration Drive, Tech District, CA 90210',
    coords: 'LAT 37.7749° N • LONG 122.4194° W • ELEV 38M',
    type: 'Central Laboratory & Heavy Propulsion Bay',
    desc: 'Central Laboratory Hub with Class-A chassis dynos and Horiba gas analyzers.',
    clearance: '4 Active Slots',
    phone: '+1 (800) 555-0199 • Ext. 1',
    hours: 'Mon – Fri: 7:00 AM – 7:00 PM | Sat: 8:00 AM – 5:00 PM'
  },
  metro: {
    id: 'metro',
    title: 'METRO EV & TELEMETRY FACILITY',
    pinId: 'mapPinMetro',
    address: '128 Precision Way, Suite A, Metro District, CA 90212',
    coords: 'LAT 37.7833° N • LONG 122.4167° W • ELEV 24M',
    type: '1000V DC Galvanic Isolation & CANbus Telemetry',
    desc: 'Dedicated high-voltage laboratory corridor for EV battery and hybrid cell metrology.',
    clearance: '2 Active Slots',
    phone: '+1 (800) 555-0198 • Ext. 2',
    hours: 'Mon – Fri: 8:00 AM – 6:00 PM | Sat: 9:00 AM – 3:00 PM'
  },
  west: {
    id: 'west',
    title: 'COMMERCIAL FLEET LOGISTICS HUB',
    pinId: 'mapPinWest',
    address: '70 Aviation Blvd, Bay 4, West Corridor, CA 90215',
    coords: 'LAT 37.7650° N • LONG 122.4300° W • ELEV 15M',
    type: 'Heavy Fleet Corridors & Pre-Purchase Diagnostics',
    desc: 'High-throughput commercial bay with ultrasonic chassis profiling and multi-van capacity.',
    clearance: '3 Active Slots',
    phone: '+1 (800) 555-0197 • Ext. 3',
    hours: 'Mon – Fri: 6:30 AM – 7:30 PM | Sat: 8:00 AM – 4:00 PM'
  }
};

let currentSelectedHub = 'central';

function selectHub(hubId) {
  const data = HUB_DATA[hubId];
  if (!data) return;

  currentSelectedHub = hubId;

  // 1. Update Hub Cards Active Class
  document.querySelectorAll('.hub-card').forEach(card => {
    if (card.getAttribute('data-hub-id') === hubId) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });

  // 2. Update Map HUD Header Bar
  const titleEl = document.getElementById('mapTargetTitle');
  const coordsEl = document.getElementById('mapCoordinates');
  if (titleEl) titleEl.textContent = 'TARGET: ' + data.title;
  if (coordsEl) coordsEl.innerHTML = `<span>${data.coords}</span>`;

  // 3. Update Map Pins Active State
  document.querySelectorAll('.map-pin-group').forEach(pin => {
    pin.classList.remove('active');
  });
  const activePin = document.getElementById(data.pinId);
  if (activePin) activePin.classList.add('active');

  // 4. Update Floating Info Card on Map
  const mfpTitle = document.getElementById('mfpTitle');
  const mfpDesc = document.getElementById('mfpDesc');
  const mfpClearance = document.getElementById('mfpClearance');
  if (mfpTitle) mfpTitle.textContent = data.address.split(',')[0];
  if (mfpDesc) mfpDesc.textContent = data.desc;
  if (mfpClearance) mfpClearance.textContent = data.clearance;

  // 5. Sync location dropdown in form if user wants
  const locSelect = document.getElementById('cfLocation');
  if (locSelect) {
    if (hubId === 'central') locSelect.value = 'Central HQ — 48 Calibration Dr (Tech District)';
    if (hubId === 'metro') locSelect.value = 'Metro EV Hub — 128 Precision Way (Suite A)';
    if (hubId === 'west') locSelect.value = 'West Corridor — 70 Aviation Blvd (Bay 4)';
  }
}

// ==========================================================
//  FORM SUBMISSION & RECEIPT GENERATOR
// ==========================================================
function handleContactSubmit(e) {
  e.preventDefault();

  const nameInput = document.getElementById('cfFullName');
  const emailInput = document.getElementById('cfEmail');
  const phoneInput = document.getElementById('cfPhone');
  const makeInput = document.getElementById('cfMakeModel');
  const protocolSelect = document.getElementById('cfProtocol');
  const locationSelect = document.getElementById('cfLocation');
  const windowSelect = document.getElementById('cfWindow');
  const yearInput = document.getElementById('cfYear');
  const submitBtn = document.getElementById('formSubmitBtn');

  let hasError = false;

  // Validate fields
  [nameInput, emailInput, phoneInput, makeInput].forEach(input => {
    if (!input) return;
    const group = input.closest('.form-group');
    if (!input.value.trim() || (input.type === 'email' && !input.value.includes('@'))) {
      if (group) group.classList.add('has-error');
      hasError = true;
    } else {
      if (group) group.classList.remove('has-error');
    }
  });

  if (hasError) {
    return;
  }

  // Visual loading feedback
  const originalText = submitBtn ? submitBtn.innerHTML : 'Submit Priority Request';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Signing SHA-256 Token...</span>`;
  }

  setTimeout(() => {
    // Generate simulated Token & Hash
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const token = `ORV-2026-X${randomNum}`;
    const hash = generateRandomHex(64);

    const clientName = nameInput ? nameInput.value.trim() : 'Jonathan Sterling';
    const protocol = protocolSelect ? protocolSelect.value : 'Combined Comprehensive Protocol';
    const bayLoc = locationSelect ? locationSelect.value.split('—')[0].trim() : 'Central HQ';
    const arrivalWin = windowSelect ? windowSelect.value : 'Morning (08:00 – 11:00 AM)';
    const vehicleStr = `${makeInput ? makeInput.value.trim() : 'Vehicle'} (${yearInput ? yearInput.value : '2024'})`;

    // Populate Success Modal
    const tokenEl = document.getElementById('receiptToken');
    const protoEl = document.getElementById('receiptProtocol');
    const clientEl = document.getElementById('receiptClient');
    const bayEl = document.getElementById('receiptBay');
    const winEl = document.getElementById('receiptWindow');
    const vehEl = document.getElementById('receiptVehicle');
    const hashEl = document.getElementById('receiptHash');

    if (tokenEl) tokenEl.textContent = token;
    if (protoEl) protoEl.textContent = protocol;
    if (clientEl) clientEl.textContent = clientName;
    if (bayEl) bayEl.textContent = bayLoc;
    if (winEl) winEl.textContent = arrivalWin;
    if (vehEl) vehEl.textContent = vehicleStr;
    if (hashEl) hashEl.textContent = hash;

    // Open Success Modal
    openSuccessModal();

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  }, 650);
}

function generateRandomHex(len) {
  const chars = '0123456789abcdef';
  let res = '';
  for (let i = 0; i < len; i++) {
    res += chars[Math.floor(Math.random() * chars.length)];
  }
  return res;
}

function openSuccessModal() {
  const modal = document.getElementById('intakeSuccessModal');
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeSuccessModal() {
  const modal = document.getElementById('intakeSuccessModal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

// ==========================================================
//  FAQ ACCORDION
// ==========================================================
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.contact-faq-grid .faq-item');
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

// ==========================================================
//  BOOKING MODAL
// ==========================================================
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

// ==========================================================
//  PORTAL NOTICE MODAL (404, Coming Soon, Login, Dashboard)
// ==========================================================
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

// ==========================================================
//  RTL LOGIC
// ==========================================================
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

// ==========================================================
//  HEADER SCROLL GLASS BLUR & SHADOW
// ==========================================================
function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  if (!header) return;
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

// ==========================================================
//  DOM READY INITIALIZATION
// ==========================================================
document.addEventListener('DOMContentLoaded', () => {
  initRTL();
  initFaqAccordion();
  initHeaderScroll();

  // Set default date in form to tomorrow
  const dateInput = document.getElementById('cfDate');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split('T')[0];
    dateInput.min = new Date().toISOString().split('T')[0];
  }

  // Theme Toggle
  const toggleBtn = document.getElementById('themeToggle');
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('orvexa_theme') || 'light';
  html.setAttribute('data-theme', savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = html.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('orvexa_theme', next);
    });
  }

  // Mobile Menu Drawer
  const mobBtn = document.getElementById('mobileMenuBtn');
  const mobDrawer = document.getElementById('mobileDrawer');
  const mobClose = document.getElementById('drawerClose');
  const drawerLinks = document.querySelectorAll('.drawer-link');
  if (mobBtn && mobDrawer) mobBtn.addEventListener('click', () => mobDrawer.classList.add('open'));
  if (mobClose && mobDrawer) mobClose.addEventListener('click', () => mobDrawer.classList.remove('open'));
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobDrawer) mobDrawer.classList.remove('open');
    });
  });

  // Booking Modal
  const closeBtn = document.getElementById('modalCloseBtn');
  const bookingModal = document.getElementById('bookingModal');
  if (closeBtn) closeBtn.addEventListener('click', closeBookingModal);
  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) closeBookingModal();
    });
  }

  // Success Modal Click Backdrop
  const successModal = document.getElementById('intakeSuccessModal');
  if (successModal) {
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) closeSuccessModal();
    });
  }

  // Portal Notice Modal Click Backdrop
  const portalModal = document.getElementById('portalNoticeModal');
  if (portalModal) {
    portalModal.addEventListener('click', (e) => {
      if (e.target === portalModal) closePortalNotice();
    });
  }

  // Set Current Year in Footer
  const yr = document.getElementById('currentYear');
  if (yr) yr.textContent = new Date().getFullYear();
});
