
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRTL();
  initHeaderScroll();
  initActiveNavigation();
  initMobileDrawer();
  initTimelineObserver();
  initMethodologyStepper();
  initDiagnosticRadar();
  initModalListeners();
  initDateDefaults();
});

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

function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const htmlRoot = document.documentElement;

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

function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.pageYOffset > 40);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initActiveNavigation() {
  const PAGE_SECTION = {
    'index.html': 'home',
    'home2.html': 'home',
    'about.html': 'about',
    'service.html': 'services',
    'service-detail.html': 'services',
    'journal.html': 'journals',
    'journal-detail.html': 'journals',
    'contact.html': 'contact',
    'dashboard.html': 'dashboard'
  };

  const fileOf = (href) => {
    if (!href) return '';
    if (href.startsWith('#')) return 'index.html';
    return decodeURIComponent(href.split('?')[0].split('#')[0].split('/').pop()) || 'index.html';
  };

  const currentFile = fileOf(window.location.pathname) || 'index.html';
  const currentSection = PAGE_SECTION[currentFile];
  if (!currentSection) return;

  document.querySelectorAll('.main-nav .nav-link').forEach(link => {
    const isActive = PAGE_SECTION[fileOf(link.getAttribute('href'))] === currentSection;
    link.classList.toggle('active', isActive);
    if (isActive) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });

  const PARENT = { 'service-detail.html': 'service.html', 'journal-detail.html': 'journal.html' };
  const exactFile = PARENT[currentFile] || currentFile;

  document.querySelectorAll('.nav-dropdown-menu .dropdown-item, .drawer-link').forEach(link => {
    link.classList.toggle('active', fileOf(link.getAttribute('href')) === exactFile);
  });
}

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

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (mobileDrawer) {
        if (mobileDrawer.classList.contains('open')) {
          closeDrawer();
        } else {
          openDrawer();
        }
      }
    });
  }

  if (drawerClose) {
    drawerClose.addEventListener('click', (e) => {
      e.stopPropagation();
      closeDrawer();
    });
  }

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  if (drawerBookBtn) {
    drawerBookBtn.addEventListener('click', () => {
      closeDrawer();
      openBookingModal();
    });
  }

  document.addEventListener('click', (e) => {
    if (mobileDrawer && mobileDrawer.classList.contains('open')) {
      if (!mobileDrawer.contains(e.target) && (!mobileMenuBtn || !mobileMenuBtn.contains(e.target))) {
        closeDrawer();
      }
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

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
  const ROTATION_INTERVAL = 2000;

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

    pills.forEach(pill => {
      const isCurrent = pill.getAttribute('data-step') === stepKey;
      pill.classList.toggle('active', isCurrent);
      pill.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
    });

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

    if (hudText) hudText.textContent = data.hud;
    if (calBadge) calBadge.textContent = data.cal;
    if (nodeLabel1) nodeLabel1.textContent = data.node1.label;
    if (nodeVal1) nodeVal1.textContent = data.node1.val;
    if (nodeLabel2) nodeLabel2.textContent = data.node2.label;
    if (nodeVal2) nodeVal2.textContent = data.node2.val;

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

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const stepKey = pill.getAttribute('data-step');
      const targetIndex = stepKeys.indexOf(stepKey);
      if (targetIndex !== -1) {
        setStep(targetIndex, true);
        startAutoRotation();
      }
    });
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoRotation();
    } else {
      startAutoRotation();
    }
  });

  startAutoRotation();
}

let currentBookingStep = 1;

function initModalListeners() {
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

  window.addEventListener('click', (e) => {
    if (e.target === bookingModal) closeBookingModal();
    const docModal = document.getElementById('docModal');
    if (e.target === docModal) closeDocModal();
    const searchModal = document.getElementById('quickSearchModal');
    if (e.target === searchModal) closeSearchModal();
  });

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

  const indicators = document.querySelectorAll('.step-indicator-item');
  indicators.forEach(ind => {
    const s = parseInt(ind.getAttribute('data-step-indicator'), 10);
    if (s <= step) {
      ind.classList.add('active');
    } else {
      ind.classList.remove('active');
    }
  });

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

  const randomRef = 'ORV-' + Math.floor(10000 + Math.random() * 90000);
  document.getElementById('confirmRefId').innerText = `REFERENCE: ${randomRef}`;

  goToBookingStep(4);
}

function handleBookingSubmit(event) {
  event.preventDefault();
  generateConfirmationStep();
}

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

function initDateDefaults() {
  const dateInput = document.getElementById('bookingDate');
  if (dateInput) {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    dateInput.value = today.toISOString().split('T')[0];
    dateInput.min = new Date().toISOString().split('T')[0];
    dateInput.addEventListener('click', function () {
      try {
        if (typeof this.showPicker === 'function') this.showPicker();
      } catch (err) {}
    });
  }

  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.innerText = new Date().getFullYear();
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

document.addEventListener('DOMContentLoaded', () => {
  const portalModal = document.getElementById('portalNoticeModal');
  if (portalModal) {
    portalModal.addEventListener('click', (e) => {
      if (e.target === portalModal) closePortalNotice();
    });
  }
});

function initDiagnosticRadar() {
  const tabs = document.querySelectorAll('.radar-tab-btn');
  const hotspots = document.querySelectorAll('.radar-hotspot');
  if (!tabs.length) return;

  const RADAR_DATA = {
    emissions: {
      badge: "ZONE 01 // EXHAUST GAS SPECTROMETRY",
      status: "CALIBRATED COMPLIANT",
      title: "Dual-Probe Infrared Gas Chromatography & Opacity Analysis",
      desc: "Continuous raw tailpipe sampling measuring CO, CO₂, HC, O₂, and NOx under simulated dynamic highway and transient engine cycles with automated pass-fail limit certification.",
      ticker: "AVL DiGas 4000 • 100 Hz Continuous Transient Stream • Traceable to NIST SRMs",
      hardware: "AVL DiGas 4000 • NDIR 5-Gas • Heated Extraction Bench",
      standard: "UN/ECE Regulation 83 • Euro 6d-ISC-FCM • ISO/IEC 17025",
      hash: "SHA-256 e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
      link: "service-detail.html?service=emissions-testing",
      gauges: [
        { label: "CARBON MONOXIDE (CO)", val: "0.08% vol", width: "40%", limit: "Limit: < 0.20%", status: "OPTIMAL PASS" },
        { label: "HYDROCARBONS (HC)", val: "16 PPM", width: "16%", limit: "Limit: < 100 PPM", status: "COMPLIANT" },
        { label: "LAMBDA RATIO (λ)", val: "1.002", width: "50%", limit: "Range: 0.97 – 1.03", status: "STOICHIOMETRIC" },
        { label: "NITROGEN OXIDES (NOx)", val: "26 mg/km", width: "32%", limit: "Euro 6d: < 60 mg/km", status: "ZERO EXCEEDANCE" }
      ]
    },
    braking: {
      badge: "ZONE 02 // 4WD DYNAMIC BRAKE & CHASSIS",
      status: "CALIBRATED COMPLIANT",
      title: "MAHA 4WD Roller Dynamometer & Deceleration Balance",
      desc: "Dynamic axle roller measurement under regulated clamping loads, verifying left/right brake force distribution, emergency deceleration rate, and brake disc thermal variance.",
      ticker: "MAHA IW7 4WD Dynamometer • 40 kN Axle Rating • Sub-Percent Symmetry Calculation",
      hardware: "MAHA IW7 Dual-Roller Bed • Dynamic Load Cells & Infrared Pyrometry",
      standard: "EU Directive 2014/45/EU • ECE Regulation 13-H • ISO 21069",
      hash: "SHA-256 c819441a129ef3e680a6be17f2258d4e9c7e0964722c83ae18471c08d986b245",
      link: "service-detail.html?service=safety-inspection",
      gauges: [
        { label: "FRONT AXLE FORCE", val: "4.85 kN / 4.82 kN", width: "82%", limit: "Imbalance: 0.6% (< 25%)", status: "PERFECT SYMMETRY" },
        { label: "REAR AXLE FORCE", val: "3.10 kN / 3.08 kN", width: "78%", limit: "Imbalance: 0.6% (< 30%)", status: "BALANCED" },
        { label: "DECELERATION EFFICIENCY", val: "84.2% g", width: "84%", limit: "Statutory Minimum: > 50%", status: "HIGH PERFORMANCE" },
        { label: "ROTOR RUNOUT", val: "0.012 mm", width: "24%", limit: "OEM Tolerance: < 0.040 mm", status: "SUB-MICRON PASS" }
      ]
    },
    suspension: {
      badge: "ZONE 03 // 3D LASER GEOMETRY & PLAY",
      status: "CALIBRATED COMPLIANT",
      title: "3D Optical Stereo Geometry & Hydraulic Shaker Play Detection",
      desc: "Sub-millimeter triangulation across four wheel clamps mounted on a flush hydraulic lift, verifying camber, caster, toe, and kingpin inclination alongside suspension joint integrity.",
      ticker: "Hunter HawkEye Elite 3D • 4x High-Res CMOS Stereoscopic Towers • ±0.01° Resolution",
      hardware: "Hunter HawkEye Elite 3D Towers & Maha PMS 3.5 Hydraulic Axle Shaker",
      standard: "Directive 2014/45/EU Annex I • ISO 8855 • VDI/VDE 2634",
      hash: "SHA-256 7d1f56bc229a43e792c81d34f9a0b12c85e43178229dc7b88491c107293a52f8",
      link: "service-detail.html?service=combined-protocol",
      gauges: [
        { label: "CAMBER VARIANCE", val: "-0.48° L / -0.50° R", width: "52%", limit: "Spec: -0.50° (±0.20°)", status: "FACTORY SPEC" },
        { label: "TOE ANGLE DEVIATION", val: "+0.02° L / +0.02° R", width: "42%", limit: "OEM Tolerance: ±0.05°", status: "PERFECTLY ZEROED" },
        { label: "BALL JOINT RADIAL PLAY", val: "0.11 mm", width: "18%", limit: "Allowable Play: < 1.0 mm", status: "ZERO SLACK" },
        { label: "DAMPER DAMPING RATIO", val: "68% L / 67% R", width: "68%", limit: "EUSAMA Balance: > 40%", status: "CERTIFIED FIRM" }
      ]
    },
    ev: {
      badge: "ZONE 04 // 1000V HIGH-VOLTAGE EV LAB",
      status: "CALIBRATED COMPLIANT",
      title: "1000V DC Galvanic Isolation & CANbus Cell Telemetry",
      desc: "Complete diagnostic evaluation of high-voltage battery modules, inverter insulation resistance, CANbus individual cell voltage spread, and regenerative braking charge management.",
      ticker: "Gossen Metrawatt Profitest H+E • 1000V DC Hi-Pot & Micro-Ohm Earth Continuity",
      hardware: "Gossen Metrawatt 1000V Isolation Rig & CANbus Telemetry Sniffer",
      standard: "UN/ECE Regulation 100 • ISO 6469-3 • SAE J1766",
      hash: "SHA-256 a159f84826d9e13b86027e8241cd75f68b31a89c962b1049281e6402f14c2b99",
      link: "service-detail.html?service=ev-hybrid",
      gauges: [
        { label: "ISOLATION RESISTANCE", val: "850 MΩ", width: "85%", limit: "UN ECE R100: > 100 Ω/V", status: "SUPERIOR GALVANIC" },
        { label: "MAX CELL VOLTAGE DELTA", val: "11 mV", width: "22%", limit: "Balance Limit: < 25 mV", status: "OPTIMAL SPREAD" },
        { label: "BATTERY STATE OF HEALTH", val: "98.6% SOH", width: "98%", limit: "Degradation Threshold: < 70%", status: "CELL INTEGRITY EXCELLENT" },
        { label: "PEAK REGEN TORQUE", val: "320 Nm", width: "80%", limit: "Firmware Synchronized", status: "100% RECOVERY" }
      ]
    }
  };

  function setRadarZone(zoneKey) {
    const data = RADAR_DATA[zoneKey];
    if (!data) return;

    tabs.forEach(tab => {
      const isCurrent = tab.getAttribute('data-zone') === zoneKey;
      tab.classList.toggle('active', isCurrent);
      tab.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
    });

    hotspots.forEach(pin => {
      pin.classList.toggle('active', pin.getAttribute('data-pin') === zoneKey);
    });

    const elementsToUpdate = [
      { id: 'radarCardBadge', text: data.badge },
      { id: 'radarStatusTxt', text: data.status },
      { id: 'radarCardTitle', text: data.title },
      { id: 'radarCardDesc', text: data.desc },
      { id: 'radarTickerVal', text: data.ticker },
      { id: 'protoHardware', text: data.hardware },
      { id: 'protoStandard', text: data.standard },
      { id: 'protoHash', text: data.hash }
    ];

    elementsToUpdate.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) {
        el.style.opacity = '0.3';
        el.style.transform = 'translateY(4px)';
        el.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        setTimeout(() => {
          el.textContent = item.text;
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 100);
      }
    });

    const linkEl = document.getElementById('radarDetailLink');
    if (linkEl && data.link) linkEl.href = data.link;

    const gaugesContainer = document.getElementById('radarGaugesGrid');
    if (gaugesContainer && data.gauges) {
      data.gauges.forEach((g, idx) => {
        const num = idx + 1;
        const gVal = document.getElementById('gVal' + num);
        const gBar = document.getElementById('gBar' + num);
        const gCard = gaugesContainer.children[idx];

        if (gCard) {
          const lbl = gCard.querySelector('.gauge-label');
          const lim = gCard.querySelector('.statutory-limit');
          const stat = gCard.querySelector('.gauge-status');
          if (lbl) lbl.textContent = g.label;
          if (lim) lim.textContent = g.limit;
          if (stat) stat.textContent = g.status;
        }

        if (gVal) {
          gVal.style.opacity = '0.3';
          setTimeout(() => {
            gVal.textContent = g.val;
            gVal.style.opacity = '1';
          }, 100);
        }

        if (gBar) {
          gBar.style.width = '0%';
          setTimeout(() => {
            gBar.style.width = g.width;
          }, 140);
        }
      });
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const zone = tab.getAttribute('data-zone');
      if (zone) setRadarZone(zone);
    });
  });

  hotspots.forEach(pin => {
    pin.addEventListener('click', () => {
      const zone = pin.getAttribute('data-pin');
      if (zone) setRadarZone(zone);
    });
  });
}

