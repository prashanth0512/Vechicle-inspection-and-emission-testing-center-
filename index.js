/**
 * ORVEXA — Luxury Vehicle Inspection & Emissions Testing Center
 * High-End Interactive Architecture & State Management
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRTL();
  initHeaderScroll();
  initMobileDrawer();
  initTimelineObserver();
  initMethodologyStepper();
  initModalListeners();
  initDateDefaults();
});

/* --------------------------------------------------------------------------
   01B. RTL TOGGLE (Left-to-Right / Right-to-Left Switcher)
   -------------------------------------------------------------------------- */
function initRTL() {
  const rtlToggle = document.getElementById('rtlToggle');
  const htmlRoot = document.documentElement;

  // Check persisted direction or default to ltr
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

/* --------------------------------------------------------------------------
   01. THEME SWITCHER (Light Ivory / Dark Architectural)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const htmlRoot = document.documentElement;

  // Check persisted theme or fallback to html data-theme attribute
  const savedTheme = localStorage.getItem('orvexa-theme') || htmlRoot.getAttribute('data-theme') || 'light';
  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
      localStorage.setItem('orvexa-theme', newTheme);
    });
  }
}

function applyTheme(theme) {
  const htmlRoot = document.documentElement;
  htmlRoot.setAttribute('data-theme', theme);
}

/* --------------------------------------------------------------------------
   02. HEADER SCROLL & ACTIVE NAVIGATION
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Header blur styling
    if (scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // ScrollSpy for Active Nav Link
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   03. MOBILE DRAWER
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerLinks = document.querySelectorAll('.drawer-link');
  const drawerBookBtn = document.getElementById('drawerBookBtn');

  function openDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add('open');
  }

  function closeDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  if (drawerBookBtn) {
    drawerBookBtn.addEventListener('click', () => {
      closeDrawer();
      openBookingModal();
    });
  }
}

/* --------------------------------------------------------------------------
   04. VERTICAL TIMELINE SCROLL PROGRESS
   -------------------------------------------------------------------------- */
function initTimelineObserver() {
  const timelineSection = document.getElementById('timeline');
  const progressBar = document.getElementById('timelineProgress');

  if (!timelineSection || !progressBar) return;

  window.addEventListener('scroll', () => {
    const rect = timelineSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0) {
      const totalDist = rect.height;
      const currentScroll = windowHeight - rect.top;
      const percentage = Math.min(100, Math.max(0, (currentScroll / totalDist) * 100));
      progressBar.style.height = `${percentage}%`;
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   05. METHODOLOGY INTERACTIVE STEPPER & TELEMETRY
   -------------------------------------------------------------------------- */
function initMethodologyStepper() {
  const steps = {
    book: {
      img: 'assets/method_book.jpg',
      alt: 'ORVEXA Digital Appointment Booking Interface',
      hud: 'STAGE 01: DIGITAL APPOINTMENT INTAKE',
      cal: 'CALIBRATION: ONLINE DISPATCH',
      node1: { label: 'DIGITAL INTAKE', val: 'Priority Lane Reservation' },
      node2: { label: 'SERVICE PROTOCOL', val: 'Safety & Emissions Selected' },
      info: [
        { tag: 'ONLINE RESERVATION', sub: 'Select bay & priority time slot' },
        { tag: 'CALENDAR SYNC', sub: 'Encrypted intake verification' },
        { tag: 'FAST-LANE ACCESS', sub: 'Direct intake with zero queues' },
        { tag: 'CLIENT CONCIERGE', sub: 'Automated digital pass dispatch' }
      ]
    },
    arrive: {
      img: 'assets/method_arrive.jpg',
      alt: 'Vehicle Arrival at ORVEXA Inspection Facility Bay',
      hud: 'STAGE 02: FACILITY ARRIVAL & SCAN',
      cal: 'CALIBRATION: BAY 1 INTAKE',
      node1: { label: 'VEHICLE ARRIVAL', val: 'Automated Plate Recognition' },
      node2: { label: 'ENTRY GUIDANCE', val: 'Dynamic LED Floor Indicators' },
      info: [
        { tag: 'SEAMLESS INTAKE', sub: 'Immediate reception bay entry' },
        { tag: 'PLATE RECOGNITION', sub: 'Instant digital pass validation' },
        { tag: 'PRE-CHECK TELEMETRY', sub: 'Optical intake geometry scan' },
        { tag: 'ZERO WAITING', sub: 'Direct transit to diagnostic bay' }
      ]
    },
    inspect: {
      img: 'assets/method_inspect.jpg',
      alt: 'Active Multi-Point Laser & Hydraulic Inspection',
      hud: 'STAGE 03: MULTI-AXIS LASER INSPECTION',
      cal: 'CALIBRATION: 0.001° TOLERANCE',
      node1: { label: 'CHASSIS SCAN', val: 'Multi-Axis Laser Measurement' },
      node2: { label: 'SAFETY PROTOCOL', val: 'Hydraulic & Optical Analysis' },
      info: [
        { tag: 'LASER ALIGNMENT', sub: '0.001° Sub-millimeter tolerances' },
        { tag: 'BRAKE DYNAMICS', sub: 'Roller bench deceleration test' },
        { tag: 'STEERING INTEGRITY', sub: 'Geometry & optical sensors' },
        { tag: 'STRUCTURAL CHASSIS', sub: 'Multi-point safety clearance' }
      ]
    },
    result: {
      img: 'assets/method_result.jpg',
      alt: 'High-Tech Vehicle Inspection & Diagnostic Results Monitor',
      hud: 'STAGE 04: REAL-TIME TEST RESULTS',
      cal: 'CALIBRATION: PASS VALIDATED',
      node1: { label: 'EMISSIONS TELEMETRY', val: 'CO 0.01% | HC 14 ppm (Pass)' },
      node2: { label: 'BRAKE EFFICIENCY', val: '96.5% Overall Dynamic Balance' },
      info: [
        { tag: 'DIAGNOSTIC REPORT', sub: 'Full multi-point evaluation' },
        { tag: 'EMISSIONS READING', sub: 'EPA Tier 3 & Euro 6 infrared test' },
        { tag: 'ZERO DTC CODES', sub: 'OBD-II electronic verification' },
        { tag: 'INSTANT SUMMARY', sub: 'Unambiguous itemized report' }
      ]
    },
    certificate: {
      img: 'assets/method_certificate.jpg',
      alt: 'Official Digital Compliance Certificate on Tablet',
      hud: 'STAGE 05: OFFICIAL DIGITAL CERTIFICATE',
      cal: 'CALIBRATION: STATUTORY CERTIFIED',
      node1: { label: 'DIGITAL CLEARANCE', val: 'Official Statutory Certificate' },
      node2: { label: 'QR VERIFICATION', val: 'Encrypted Security Passport' },
      info: [
        { tag: 'CERTIFIED CLEARANCE', sub: 'State & regional compliance pass' },
        { tag: 'MOBILE WALLET', sub: 'Direct Apple & Google Wallet sync' },
        { tag: 'DIGITAL VAULT', sub: 'Permanent tamper-evident record' },
        { tag: 'REGULATORY FILING', sub: 'Automated authority registration' }
      ]
    }
  };

  const pills = document.querySelectorAll('#processStepper .step-pill');
  const imgEl = document.getElementById('methodologyImg');
  const hudText = document.getElementById('hudStatusText');
  const calBadge = document.getElementById('hudCalBadge');
  const nodeLabel1 = document.getElementById('nodeLabel1');
  const nodeVal1 = document.getElementById('nodeVal1');
  const nodeLabel2 = document.getElementById('nodeLabel2');
  const nodeVal2 = document.getElementById('nodeVal2');
  const infoTags = [
    document.getElementById('infoTag1'),
    document.getElementById('infoTag2'),
    document.getElementById('infoTag3'),
    document.getElementById('infoTag4')
  ];
  const infoSubs = [
    document.getElementById('infoSub1'),
    document.getElementById('infoSub2'),
    document.getElementById('infoSub3'),
    document.getElementById('infoSub4')
  ];

  const stepKeys = ['book', 'arrive', 'inspect', 'result', 'certificate'];
  let activeIndex = 0;
  let autoTimer = null;
  const ROTATION_INTERVAL = 2000; // 2-second interval between image & badge changes

  // Preload all step images to ensure instantaneous transition without flickers
  stepKeys.forEach(key => {
    if (steps[key] && steps[key].img) {
      const img = new Image();
      img.src = steps[key].img;
    }
  });

  function setStep(index, animate = true) {
    if (index < 0 || index >= stepKeys.length) return;
    activeIndex = index;
    const stepKey = stepKeys[activeIndex];
    const data = steps[stepKey];
    if (!data) return;

    // Synchronize active step badge / pill
    pills.forEach(pill => {
      const isCurrent = pill.getAttribute('data-step') === stepKey;
      pill.classList.toggle('active', isCurrent);
      pill.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
    });

    // Smooth image crossfade
    if (imgEl) {
      if (animate) {
        imgEl.classList.add('fading');
        setTimeout(() => {
          imgEl.src = data.img;
          imgEl.alt = data.alt;
          imgEl.classList.remove('fading');
        }, 140);
      } else {
        imgEl.src = data.img;
        imgEl.alt = data.alt;
      }
    }

    // Update HUD & telemetry badges
    if (hudText) hudText.textContent = data.hud;
    if (calBadge) calBadge.textContent = data.cal;
    if (nodeLabel1) nodeLabel1.textContent = data.node1.label;
    if (nodeVal1) nodeVal1.textContent = data.node1.val;
    if (nodeLabel2) nodeLabel2.textContent = data.node2.label;
    if (nodeVal2) nodeVal2.textContent = data.node2.val;

    // Update bottom info blocks
    data.info.forEach((item, idx) => {
      if (infoTags[idx]) infoTags[idx].textContent = item.tag;
      if (infoSubs[idx]) infoSubs[idx].textContent = item.sub;
    });
  }

  function advanceStep() {
    const nextIndex = (activeIndex + 1) % stepKeys.length;
    setStep(nextIndex, true);
  }

  function startAutoRotation() {
    stopAutoRotation();
    autoTimer = setInterval(advanceStep, ROTATION_INTERVAL);
  }

  function stopAutoRotation() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  // Interactive manual click on badges updates step immediately and resets 2s timer
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const stepKey = pill.getAttribute('data-step');
      const targetIndex = stepKeys.indexOf(stepKey);
      if (targetIndex !== -1) {
        setStep(targetIndex, true);
        startAutoRotation(); // restart 2s cycle from the newly selected badge
      }
    });
  });

  // Pause timer when browser tab is hidden to save resources, resume when focused
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoRotation();
    } else {
      startAutoRotation();
    }
  });

  // Start automatic rotation immediately on page load (2-second gap)
  startAutoRotation();
}

/* --------------------------------------------------------------------------
   06. BOOKING MODAL WIZARD STATE
   -------------------------------------------------------------------------- */
let currentBookingStep = 1;

function initModalListeners() {
  // Triggers for Booking
  const headerBookBtn = document.getElementById('headerBookBtn');
  const heroBookBtn = document.getElementById('heroBookBtn');
  const searchBtn = document.getElementById('searchBtn');
  const loginBtn = document.getElementById('loginBtn');
  const footerLoginLink = document.getElementById('footerLoginLink');

  if (headerBookBtn) headerBookBtn.addEventListener('click', openBookingModal);
  if (heroBookBtn) heroBookBtn.addEventListener('click', openBookingModal);

  if (searchBtn) {
    searchBtn.addEventListener('click', openSearchModal);
  }

  if (loginBtn && loginBtn.tagName === 'BUTTON') {
    loginBtn.addEventListener('click', () => {
      window.location.href = 'login.html';
    });
  }

  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const bookingModal = document.getElementById('bookingModal');

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeBookingModal);

  // Close modals when clicking outside container
  window.addEventListener('click', (e) => {
    if (e.target === bookingModal) closeBookingModal();
    const docModal = document.getElementById('docModal');
    if (e.target === docModal) closeDocModal();
    const searchModal = document.getElementById('quickSearchModal');
    if (e.target === searchModal) closeSearchModal();
  });

  // ESC key listener
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBookingModal();
      closeDocModal();
      closeSearchModal();
    }
  });
}

function openBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    goToBookingStep(1);
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

function openBookingWithService(serviceName) {
  openBookingModal();
  const radio = document.querySelector(`input[name="bookingService"][value="${serviceName}"]`);
  if (radio) {
    radio.checked = true;
  }
  goToBookingStep(2);
}

function openBookingWithLocation(locationName) {
  openBookingModal();
  const select = document.getElementById('facilitySelect');
  if (select) {
    select.value = locationName;
  }
  goToBookingStep(2);
}

function goToBookingStep(step) {
  currentBookingStep = step;

  // Update step indicators
  const indicators = document.querySelectorAll('.step-indicator-item');
  indicators.forEach(ind => {
    const s = parseInt(ind.getAttribute('data-step-indicator'), 10);
    if (s <= step) {
      ind.classList.add('active');
    } else {
      ind.classList.remove('active');
    }
  });

  // Update panes
  const panes = document.querySelectorAll('.form-step-pane');
  panes.forEach(p => {
    const paneStep = parseInt(p.getAttribute('data-step-pane'), 10);
    if (paneStep === step) {
      p.classList.add('active');
    } else {
      p.classList.remove('active');
    }
  });
}

function generateConfirmationStep() {
  const serviceInput = document.querySelector('input[name="bookingService"]:checked');
  const service = serviceInput ? serviceInput.value : 'Safety Inspection';
  const facility = document.getElementById('facilitySelect').value;
  const dateVal = document.getElementById('bookingDate').value || 'Tomorrow';
  const timeVal = document.getElementById('bookingTime').value;
  const make = document.getElementById('vehicleMake').value;
  const plate = document.getElementById('vehiclePlate').value;
  const email = document.getElementById('driverEmail').value;

  document.getElementById('summaryService').innerText = service;
  document.getElementById('summaryLocation').innerText = facility;
  document.getElementById('summaryTime').innerText = `${dateVal} at ${timeVal}`;
  document.getElementById('summaryVehicle').innerText = `${make} (${plate})`;
  document.getElementById('summaryEmail').innerText = email;

  // Random luxury reference id
  const randomRef = 'ORV-' + Math.floor(10000 + Math.random() * 90000);
  document.getElementById('confirmRefId').innerText = `REFERENCE: ${randomRef}`;

  goToBookingStep(4);
}

function handleBookingSubmit(event) {
  event.preventDefault();
  generateConfirmationStep();
}

/* --------------------------------------------------------------------------
   08. DOCUMENT PREVIEW MODAL
   -------------------------------------------------------------------------- */
function previewDocModal(docTitle) {
  const modal = document.getElementById('docModal');
  const title = document.getElementById('docModalTitle');
  if (title) title.innerText = docTitle;
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeDocModal() {
  const modal = document.getElementById('docModal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

/* --------------------------------------------------------------------------
   09. QUICK SEARCH MODAL
   -------------------------------------------------------------------------- */
function openSearchModal() {
  const modal = document.getElementById('quickSearchModal');
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    const input = document.getElementById('siteSearchInput');
    if (input) setTimeout(() => input.focus(), 100);
    document.body.style.overflow = 'hidden';
  }
}

function closeSearchModal() {
  const modal = document.getElementById('quickSearchModal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function searchFor(query) {
  closeSearchModal();
  if (query.includes('Inspection') || query.includes('Emissions')) {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
  } else if (query.includes('Standards')) {
    document.getElementById('standards').scrollIntoView({ behavior: 'smooth' });
  } else if (query.includes('Vault') || query.includes('Records')) {
    previewDocModal('Inspection Certificate');
  }
}

/* --------------------------------------------------------------------------
   10. UTILITIES
   -------------------------------------------------------------------------- */
function initDateDefaults() {
  const dateInput = document.getElementById('bookingDate');
  if (dateInput) {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    dateInput.value = today.toISOString().split('T')[0];
    dateInput.min = new Date().toISOString().split('T')[0];
  }

  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.innerText = new Date().getFullYear();
  }
}

/* --------------------------------------------------------------------------
   11. PORTAL NOTICES & FOOTER LINKS (404, COMING SOON, LOGIN, DASHBOARD)
   -------------------------------------------------------------------------- */
function openPortalNotice(type, title, msg) {
  const modal = document.getElementById('portalNoticeModal');
  if (!modal) return;
  const eyebrowEl = document.getElementById('portalNoticeEyebrow');
  const titleEl = document.getElementById('portalNoticeTitle');
  const msgEl = document.getElementById('portalNoticeMsg');
  const detailsEl = document.getElementById('portalNoticeDetails');
  const actionBtn = document.getElementById('portalNoticeActionBtn');

  if (type === '404') {
    eyebrowEl.textContent = 'REGIONAL ARCHIVE NODE';
    titleEl.textContent = title || 'HTTP 404 — Document Not Found';
    msgEl.textContent = msg || 'The requested verification telemetry record or digital archive does not exist on this regional node.';
    detailsEl.innerHTML = `
      <div class="notice-meta-tag">STATUS: 404 RECORD NOT FOUND</div>
      <p class="notice-meta-sub">Ensure your 64-character verification hash matches your physical inspection paperwork or certificate QR code.</p>
    `;
    actionBtn.textContent = 'Return to Platform';
    actionBtn.onclick = function() {
      closePortalNotice();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  } else if (type === 'comingsoon') {
    eyebrowEl.textContent = 'DEPLOYMENT ROADMAP • Q4 2026';
    titleEl.textContent = title || 'Mobile Rapid Verification Unit';
    msgEl.textContent = msg || 'ORVEXA Mobile Rapid-Response Telemetry fleet deployment is currently in field testing.';
    detailsEl.innerHTML = `
      <div class="notice-meta-tag tag-gold">PHASE 2 ROLLOUT: ON SCHEDULE</div>
      <p class="notice-meta-sub">On-demand commercial fleet inspection vehicles equipped with calibrated gas analyzers and wireless chassis alignment sensors.</p>
    `;
    actionBtn.textContent = 'Book Standard Inspection';
    actionBtn.onclick = function() {
      closePortalNotice();
      openBookingModal();
    };
  } else if (type === 'login') {
    eyebrowEl.textContent = 'SECURE CLIENT VAULT';
    titleEl.textContent = title || 'Client & Partner Authentication';
    msgEl.textContent = msg || 'Access your authenticated ORVEXA vehicle history reports, digital token keys, and automated fleet compliance records.';
    detailsEl.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:0.65rem; margin-top:0.35rem;">
        <input type="text" class="form-input" placeholder="Enterprise ID / Fleet Account" style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.12); color:#FFF; padding:0.65rem 0.85rem; border-radius:4px; font-size:0.85rem;">
        <input type="password" class="form-input" placeholder="Hardware Passkey / Token" style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.12); color:#FFF; padding:0.65rem 0.85rem; border-radius:4px; font-size:0.85rem;">
      </div>
    `;
    actionBtn.textContent = 'Sign In (Demo)';
    actionBtn.onclick = function() {
      alert('Client Vault Authenticated: Demo access granted to active telemetry feed.');
      closePortalNotice();
    };
  } else if (type === 'dashboard') {
    eyebrowEl.textContent = 'TELEMETRY STREAM CONSOLE';
    titleEl.textContent = title || 'Inspector Telemetry Dashboard';
    msgEl.textContent = msg || 'Live OBD-II stream viewer, gas analyzer opacity readouts, and ISO/IEC 17020 compliance telemetry console.';
    detailsEl.innerHTML = `
      <div class="notice-meta-tag">STATION NODE: ACTIVE • 24 BAYS CONNECTED</div>
      <p class="notice-meta-sub">Live telemetry feed: Sensor cluster #NY-04 transmitting 100Hz brake force &amp; 5-gas optical analysis telemetry.</p>
    `;
    actionBtn.textContent = 'Open Console Stream';
    actionBtn.onclick = function() {
      alert('Inspector Console: Live telemetry stream connected.');
      closePortalNotice();
    };
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

// Close portal modal on backdrop click
document.addEventListener('DOMContentLoaded', () => {
  const portalModal = document.getElementById('portalNoticeModal');
  if (portalModal) {
    portalModal.addEventListener('click', (e) => {
      if (e.target === portalModal) closePortalNotice();
    });
  }
});

