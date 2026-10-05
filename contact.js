
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

  document.querySelectorAll('.hub-card').forEach(card => {
    if (card.getAttribute('data-hub-id') === hubId) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });

  const titleEl = document.getElementById('mapTargetTitle');
  const coordsEl = document.getElementById('mapCoordinates');
  if (titleEl) titleEl.textContent = 'TARGET: ' + data.title;
  if (coordsEl) coordsEl.innerHTML = `<span>${data.coords}</span>`;

  document.querySelectorAll('.map-pin-group').forEach(pin => {
    pin.classList.remove('active');
  });
  const activePin = document.getElementById(data.pinId);
  if (activePin) activePin.classList.add('active');

  const mfpTitle = document.getElementById('mfpTitle');
  const mfpDesc = document.getElementById('mfpDesc');
  const mfpClearance = document.getElementById('mfpClearance');
  if (mfpTitle) mfpTitle.textContent = data.address.split(',')[0];
  if (mfpDesc) mfpDesc.textContent = data.desc;
  if (mfpClearance) mfpClearance.textContent = data.clearance;

  const locSelect = document.getElementById('cfLocation');
  if (locSelect) {
    if (hubId === 'central') locSelect.value = 'Central HQ — 48 Calibration Dr (Tech District)';
    if (hubId === 'metro') locSelect.value = 'Metro EV Hub — 128 Precision Way (Suite A)';
    if (hubId === 'west') locSelect.value = 'West Corridor — 70 Aviation Blvd (Bay 4)';
  }
}

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

  const originalText = submitBtn ? submitBtn.innerHTML : 'Submit Priority Request';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Signing SHA-256 Token...</span>`;
  }

  setTimeout(() => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const token = `ORV-2026-X${randomNum}`;
    const hash = generateRandomHex(64);

    const clientName = nameInput ? nameInput.value.trim() : 'Jonathan Sterling';
    const protocol = protocolSelect ? protocolSelect.value : 'Combined Comprehensive Protocol';
    const bayLoc = locationSelect ? locationSelect.value.split('—')[0].trim() : 'Central HQ';
    const arrivalWin = windowSelect ? windowSelect.value : 'Morning (08:00 – 11:00 AM)';
    const vehicleStr = `${makeInput ? makeInput.value.trim() : 'Vehicle'} (${yearInput ? yearInput.value : '2024'})`;

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
  initFaqAccordion();

  const dateInput = document.getElementById('cfDate');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split('T')[0];
    dateInput.min = new Date().toISOString().split('T')[0];

    dateInput.addEventListener('click', function () {
      try {
        if (typeof this.showPicker === 'function') {
          this.showPicker();
        }
      } catch (err) {}
    });
  }

  const successModal = document.getElementById('intakeSuccessModal');
  if (successModal) {
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) closeSuccessModal();
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
