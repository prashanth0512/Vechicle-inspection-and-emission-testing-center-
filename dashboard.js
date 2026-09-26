/* ==========================================================
   DASHBOARD.JS - ORVEXA Enterprise Client & Telemetry Portal
   Tab Management, Chart Interactivity, Bookings, Certificates, Theme & RTL
   ========================================================== */

// ----------------------------------------------------------
// 01. TAB SWITCHING LOGIC (Sidebar Navigation)
// ----------------------------------------------------------
function switchTab(tabId) {
  // Update sidebar active link
  const navLinks = document.querySelectorAll('.sidebar-nav-link');
  navLinks.forEach(link => {
    if (link.getAttribute('data-tab') === tabId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Update tab panel visibility
  const panels = document.querySelectorAll('.portal-tab-panel');
  panels.forEach(panel => {
    panel.classList.remove('active');
  });

  const activePanel = document.getElementById('tab-' + tabId);
  if (activePanel) {
    activePanel.classList.add('active');
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const contentBody = document.querySelector('.portal-content-body');
    if (contentBody) {
      contentBody.scrollTop = 0;
      contentBody.scrollLeft = 0;
    }
  }

  // Close mobile sidebar if open
  closeMobileSidebar();

  // Keep URL hash synchronized
  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, null, '#' + tabId);
  }
}

// ----------------------------------------------------------
// 02. MOBILE SIDEBAR DRAWER TOGGLE
// ----------------------------------------------------------
function openMobileSidebar() {
  const sidebar = document.getElementById('portalSidebar');
  const backdrop = document.getElementById('sidebarBackdrop');
  if (sidebar) sidebar.classList.add('open');
  if (backdrop) backdrop.classList.add('open');
}

function closeMobileSidebar() {
  const sidebar = document.getElementById('portalSidebar');
  const backdrop = document.getElementById('sidebarBackdrop');
  if (sidebar) sidebar.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
}

// ----------------------------------------------------------
// 03. DROPDOWNS MANAGEMENT (Notifications & User Profile)
// ----------------------------------------------------------
function initDropdowns() {
  const notifBtn = document.getElementById('notifBtn');
  const notifPopover = document.getElementById('notifPopover');
  const profileBtn = document.getElementById('profileTriggerBtn');
  const profilePopover = document.getElementById('profilePopover');

  if (notifBtn && notifPopover) {
    notifBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = notifPopover.classList.contains('open');
      closeAllDropdowns();
      if (!isOpen) {
        notifPopover.classList.add('open');
        notifBtn.setAttribute('aria-expanded', 'true');
      }
    });
  }

  if (profileBtn && profilePopover) {
    profileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = profilePopover.classList.contains('open');
      closeAllDropdowns();
      if (!isOpen) {
        profilePopover.classList.add('open');
        profileBtn.setAttribute('aria-expanded', 'true');
      }
    });
  }

  // Close dropdowns on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#notifWrap') && !e.target.closest('#profileWrap')) {
      closeAllDropdowns();
    }
  });

  // Mark all notifications read
  const markReadBtn = document.getElementById('markAllReadBtn');
  if (markReadBtn) {
    markReadBtn.addEventListener('click', () => {
      document.querySelectorAll('.notif-item').forEach(item => item.classList.remove('unread'));
      const pill = document.getElementById('notifPill');
      if (pill) pill.style.display = 'none';
      showToast('All notifications marked as read.');
    });
  }

  // Logout Trigger
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      closeAllDropdowns();
      openLogoutModal();
    });
  }
}

function closeAllDropdowns() {
  const notifPopover = document.getElementById('notifPopover');
  const profilePopover = document.getElementById('profilePopover');
  const notifBtn = document.getElementById('notifBtn');
  const profileBtn = document.getElementById('profileTriggerBtn');

  if (notifPopover) notifPopover.classList.remove('open');
  if (profilePopover) profilePopover.classList.remove('open');
  if (notifBtn) notifBtn.setAttribute('aria-expanded', 'false');
  if (profileBtn) profileBtn.setAttribute('aria-expanded', 'false');
}

// ----------------------------------------------------------
// 04. THEME & RTL SWITCHERS
// ----------------------------------------------------------
function initThemeAndRTL() {
  // Theme Toggle
  const themeToggle = document.getElementById('portalThemeToggle');
  const htmlRoot = document.documentElement;
  const savedTheme = localStorage.getItem('orvexa_theme') || 'light';
  htmlRoot.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = htmlRoot.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      htmlRoot.setAttribute('data-theme', next);
      localStorage.setItem('orvexa_theme', next);
      showToast(`Switched to ${next === 'dark' ? 'Dark' : 'Light'} Mode`);
    });
  }

  // RTL Toggle
  const rtlToggle = document.getElementById('portalRtlToggle');
  const rtlText = document.getElementById('portalRtlText');
  const savedDir = localStorage.getItem('orvexa-dir') || 'ltr';
  htmlRoot.setAttribute('dir', savedDir);
  if (rtlText) rtlText.textContent = savedDir === 'rtl' ? 'LTR' : 'RTL';

  if (rtlToggle) {
    rtlToggle.addEventListener('click', () => {
      const currentDir = htmlRoot.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      htmlRoot.setAttribute('dir', newDir);
      localStorage.setItem('orvexa-dir', newDir);
      if (rtlText) rtlText.textContent = newDir === 'rtl' ? 'LTR' : 'RTL';
      showToast(`Direction toggled to ${newDir.toUpperCase()}`);
    });
  }
}

// ----------------------------------------------------------
// 05. CHART TIME RANGE TOGGLE (6 Months vs 1 Year)
// ----------------------------------------------------------
const CHART_DATA = {
  '6M': {
    purpleArea: 'M 60 190 Q 180 180 280 160 T 480 110 T 660 45 L 660 210 L 60 210 Z',
    cyanArea: 'M 60 200 Q 180 190 280 175 T 480 140 T 660 85 L 660 210 L 60 210 Z',
    purpleLine: 'M 60 190 Q 180 180 280 160 T 480 110 T 660 45',
    cyanLine: 'M 60 200 Q 180 190 280 175 T 480 140 T 660 85',
    months: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    latest: 'Sep 2026: $48,250.00 • 420 Tests'
  },
  '1Y': {
    purpleArea: 'M 60 200 Q 180 160 280 140 T 480 80 T 660 35 L 660 210 L 60 210 Z',
    cyanArea: 'M 60 205 Q 180 175 280 155 T 480 115 T 660 65 L 660 210 L 60 210 Z',
    purpleLine: 'M 60 200 Q 180 160 280 140 T 480 80 T 660 35',
    cyanLine: 'M 60 205 Q 180 175 280 155 T 480 115 T 660 65',
    months: ['Oct', 'Dec', 'Feb', 'Apr', 'Jun', 'Sep'],
    latest: 'Sep 2026: $48,250.00 (Annual Peak)'
  }
};

function initChartInteractivity() {
  const btn6M = document.getElementById('btnChart6M');
  const btn1Y = document.getElementById('btnChart1Y');
  const purpleArea = document.getElementById('purpleArea');
  const cyanArea = document.getElementById('cyanArea');
  const purpleLine = document.getElementById('purpleLine');
  const cyanLine = document.getElementById('cyanLine');
  const tooltip = document.getElementById('chartTooltip');

  if (btn6M && btn1Y) {
    btn6M.addEventListener('click', () => {
      btn6M.classList.add('active');
      btn1Y.classList.remove('active');
      updateChartSVG('6M');
    });

    btn1Y.addEventListener('click', () => {
      btn1Y.classList.add('active');
      btn6M.classList.remove('active');
      updateChartSVG('1Y');
    });
  }

  function updateChartSVG(mode) {
    const d = CHART_DATA[mode];
    if (!d) return;
    if (purpleArea) purpleArea.setAttribute('d', d.purpleArea);
    if (cyanArea) cyanArea.setAttribute('d', d.cyanArea);
    if (purpleLine) purpleLine.setAttribute('d', d.purpleLine);
    if (cyanLine) cyanLine.setAttribute('d', d.cyanLine);

    const monthTexts = document.querySelectorAll('.chart-month-text');
    monthTexts.forEach((el, idx) => {
      if (d.months[idx]) el.textContent = d.months[idx];
    });

    if (tooltip) {
      tooltip.querySelector('.tooltip-stat').textContent = d.latest;
    }
  }

  // Dot tooltips
  const dots = document.querySelectorAll('.chart-dot');
  dots.forEach(dot => {
    dot.addEventListener('mouseenter', (e) => {
      const info = dot.getAttribute('data-tooltip');
      if (tooltip && info) {
        tooltip.querySelector('.tooltip-stat').textContent = info;
      }
    });
  });
}

// ----------------------------------------------------------
// 06. BOOKING APPOINTMENT FORM SUBMISSION
// ----------------------------------------------------------
function handleDashBookingSubmit(e) {
  e.preventDefault();

  const hubInput = document.getElementById('dbHub');
  const protoInput = document.getElementById('dbProtocol');
  const dateInput = document.getElementById('dbDate');
  const timeInput = document.getElementById('dbTime');
  const vehInput = document.getElementById('dbVehicle');
  const vinInput = document.getElementById('dbVin');
  const submitBtn = document.getElementById('btnSubmitSlot');

  const hub = hubInput ? hubInput.value : 'Central Metrology HQ';
  const protocol = protoInput ? protoInput.value : 'Combined Protocol';
  const rawDate = dateInput ? dateInput.value : '';
  const time = timeInput ? timeInput.value.split('(')[0].trim() : '09:30 AM';
  const vehicle = vehInput ? vehInput.value.trim() : 'Registered Fleet Vehicle';
  const vin = vinInput ? vinInput.value.trim().toUpperCase() : 'ORVEXA-VIN-TEMP';

  // Format date display (e.g. OCT 15)
  let dateFormatted = 'OCT 15';
  if (rawDate) {
    const d = new Date(rawDate);
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    dateFormatted = `${months[d.getMonth()]} ${String(d.getDate()).padStart(2, '0')}`;
  }

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Reserving Testing Bay...</span>`;
  }

  setTimeout(() => {
    // Create new slot card element
    const container = document.getElementById('scheduledSlotsContainer');
    if (container) {
      const slotCard = document.createElement('div');
      slotCard.className = 'slot-card active-slot';
      slotCard.innerHTML = `
        <div class="slot-time-col">
          <span class="slot-day">${dateFormatted}</span>
          <span class="slot-hour">${time}</span>
        </div>
        <div class="slot-details-col">
          <div class="slot-veh-title">${vehicle}</div>
          <div class="slot-meta-strip">
            <span>VIN: ${vin}</span>
            <span>&bull;</span>
            <span>${hub.split('(')[0].trim()}</span>
          </div>
          <span class="slot-tier-pill">${protocol.split('(')[0].trim()}</span>
        </div>
        <div class="slot-actions-col">
          <span class="status-pill status-scheduled">CONFIRMED</span>
          <button type="button" class="btn-slot-cancel" onclick="cancelSlot(this)">Cancel</button>
        </div>
      `;
      container.prepend(slotCard);

      // Update badge count
      updateBookingBadge(1);
    }

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span>Confirm &amp; Lock Inspection Slot</span><span class="btn-arrow">&rarr;</span>`;
    }

    // Reset inputs
    if (vehInput) vehInput.value = '';
    if (vinInput) vinInput.value = '';

    showToast(`Inspection slot successfully reserved for ${vehicle}!`);
  }, 500);
}

function cancelSlot(btn) {
  const card = btn.closest('.slot-card');
  if (card && confirm('Are you sure you want to release this bay reservation slot?')) {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.95)';
    setTimeout(() => {
      card.remove();
      updateBookingBadge(-1);
      showToast('Inspection slot has been cancelled.');
    }, 200);
  }
}

function updateBookingBadge(delta) {
  const badge = document.getElementById('badgeBookingCount');
  if (!badge) return;
  const current = parseInt(badge.textContent, 10) || 3;
  const updated = Math.max(0, current + delta);
  badge.textContent = `${updated} Active`;
}

// Quick prefill from Renewals tab
function prefillBooking(vin, vehicle, protocol) {
  switchTab('bookings');

  setTimeout(() => {
    const vinInput = document.getElementById('dbVin');
    const vehInput = document.getElementById('dbVehicle');
    const protoSelect = document.getElementById('dbProtocol');
    const dateInput = document.getElementById('dbDate');

    if (vinInput) vinInput.value = vin;
    if (vehInput) vehInput.value = vehicle;

    // Pick closest protocol
    if (protoSelect) {
      for (let i = 0; i < protoSelect.options.length; i++) {
        if (protoSelect.options[i].text.toLowerCase().includes(protocol.toLowerCase())) {
          protoSelect.selectedIndex = i;
          break;
        }
      }
    }

    // Set suggested date to 5 days from now
    if (dateInput) {
      const d = new Date();
      d.setDate(d.getDate() + 5);
      dateInput.value = d.toISOString().split('T')[0];
      dateInput.focus();
    }

    showToast(`Booking pre-filled for ${vehicle}`);
  }, 150);
}

// ----------------------------------------------------------
// 07. CERTIFICATES TABLE FILTER & DIGITAL PASSPORT MODAL
// ----------------------------------------------------------
function filterCertificatesTable() {
  const query = (document.getElementById('certSearchInput')?.value || '').toLowerCase();
  const rows = document.querySelectorAll('#certTable tbody tr');

  rows.forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(query) ? '' : 'none';
  });
}

function initCertFilterButtons() {
  const filterBtns = document.querySelectorAll('.btn-filter-tag');
  const rows = document.querySelectorAll('#certTable tbody tr');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      rows.forEach(row => {
        const status = row.getAttribute('data-status');
        if (filter === 'all' || status === filter) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });
}

function openCertModal(vin, vehicle, protocol, token) {
  const modal = document.getElementById('certModal');
  const cmVehicle = document.getElementById('cmVehicle');
  const cmVin = document.getElementById('cmVin');
  const cmProtocol = document.getElementById('cmProtocol');
  const cmToken = document.getElementById('cmToken');

  if (cmVehicle) cmVehicle.textContent = vehicle;
  if (cmVin) cmVin.textContent = vin;
  if (cmProtocol) cmProtocol.textContent = protocol;
  if (cmToken) cmToken.textContent = token;

  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeCertModal() {
  const modal = document.getElementById('certModal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

// ----------------------------------------------------------
// 08. LOGOUT MODAL
// ----------------------------------------------------------
function openLogoutModal() {
  const modal = document.getElementById('logoutModal');
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeLogoutModal() {
  const modal = document.getElementById('logoutModal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

// ----------------------------------------------------------
// 09. SETTINGS & UTILITY ACTIONS
// ----------------------------------------------------------
function handleSettingsSave(e) {
  e.preventDefault();
  showToast('Fleet organization profile saved successfully.');
}

function copyApiKey() {
  navigator.clipboard.writeText('orv_live_9f88a2e19d084c7b8e192');
  showToast('API Key copied to clipboard!');
}

function simulateDownload(filename) {
  showToast(`Generating certified download for ${filename}...`);
  setTimeout(() => {
    showToast(`Downloaded: ${filename}`);
  }, 1000);
}

// ----------------------------------------------------------
// 10. TOAST NOTIFICATION UTILITY
// ----------------------------------------------------------
function showToast(msg) {
  let toast = document.getElementById('portalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'portalToast';
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background-color: #171512;
      color: #ECE8E1;
      padding: 12px 20px;
      border-radius: 8px;
      border: 1px solid #A47743;
      box-shadow: 0 8px 24px rgba(0,0,0,0.35);
      font-size: 0.82rem;
      font-weight: 600;
      z-index: 2000;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: all 0.3s ease;
      opacity: 0;
      transform: translateY(10px);
    `;
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span style="color:#00E5BD;">&#10004;</span> <span>${msg}</span>`;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';

  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
  }, 3200);
}

// Global Search (Top Bar)
function initGlobalSearch() {
  const searchInput = document.getElementById('topbarSearchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', () => {
    const val = searchInput.value.trim().toLowerCase();
    if (!val) return;

    // Search matches in quick recent table or certificates table
    const quickRows = document.querySelectorAll('#quickRecentTbody tr');
    quickRows.forEach(row => {
      row.style.display = row.innerText.toLowerCase().includes(val) ? '' : 'none';
    });
  });

  // Keyboard shortcut CMD+K / CTRL+K
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      searchInput.focus();
    }
  });
}

// ----------------------------------------------------------
// 11. DOM CONTENT LOADED INITIALIZER
// ----------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initThemeAndRTL();
  initDropdowns();
  initChartInteractivity();
  initCertFilterButtons();
  initGlobalSearch();

  // Sidebar Links click listeners
  const navLinks = document.querySelectorAll('.sidebar-nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const tab = link.getAttribute('data-tab');
      if (tab) switchTab(tab);
    });
  });

  // Mobile menu buttons
  const mobToggle = document.getElementById('mobileSidebarToggle');
  const mobClose = document.getElementById('sidebarCloseBtn');
  const backdrop = document.getElementById('sidebarBackdrop');

  if (mobToggle) mobToggle.addEventListener('click', openMobileSidebar);
  if (mobClose) mobClose.addEventListener('click', closeMobileSidebar);
  if (backdrop) backdrop.addEventListener('click', closeMobileSidebar);

  // Set default booking date to tomorrow
  const dateInput = document.getElementById('dbDate');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split('T')[0];
    dateInput.min = new Date().toISOString().split('T')[0];
  }

  // Backdrop clicks for modals
  const certModal = document.getElementById('certModal');
  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) closeCertModal();
    });
  }

  const logoutModal = document.getElementById('logoutModal');
  if (logoutModal) {
    logoutModal.addEventListener('click', (e) => {
      if (e.target === logoutModal) closeLogoutModal();
    });
  }

  // Check URL hash on load (e.g. #reminders, #payments)
  const initialHash = window.location.hash.replace('#tab-', '').replace('#', '');
  if (initialHash) {
    const validTabs = ['overview', 'bookings', 'certificates', 'reminders', 'documents', 'payments', 'settings'];
    if (validTabs.includes(initialHash)) {
      switchTab(initialHash);
    }
  }
  const contentBody = document.querySelector('.portal-content-body');
  if (contentBody) {
    contentBody.scrollLeft = 0;
  }
});
