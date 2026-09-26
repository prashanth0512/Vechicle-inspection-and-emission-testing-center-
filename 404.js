/**
 * ORVEXA — 404 Error Page: Vehicle Inspection & Emission Testing Center
 * Interactive Engine: Theme Switcher, RTL Management, Realistic Vehicle Dynamics & Telemetry Stream
 * (404.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRTL();
  initTopCarAnimation();
  initTelemetrySpeed();
  initBackToSiteButton();
  init404NumberInteraction();
});

/* --------------------------------------------------------------------------
   01. THEME TOGGLE (Sun / Moon Switcher on the Right)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const htmlRoot = document.documentElement;

  // Retrieve saved preference or default to light
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
   02. RTL TOGGLE (Right Corner in Top Bar)
   -------------------------------------------------------------------------- */
function initRTL() {
  const rtlToggle = document.getElementById('rtlToggle');
  const rtlBtnText = document.getElementById('rtlBtnText');
  const htmlRoot = document.documentElement;

  // Retrieve saved direction or default to ltr
  const savedDir = localStorage.getItem('orvexa-dir') || htmlRoot.getAttribute('dir') || 'ltr';
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
   03. REALISTIC TOP MOVING CAR TURBO INTERACTION
   -------------------------------------------------------------------------- */
function initTopCarAnimation() {
  const carWrapper = document.getElementById('highwayCar') || document.querySelector('.highway-moving-car');
  if (!carWrapper) return;

  // Clicking the realistic sports car activates a dynamic turbo speed burst
  carWrapper.addEventListener('click', () => {
    carWrapper.style.animationDuration = '4.5s';
    
    // Accelerate wheels rotation during boost
    const wheels = carWrapper.querySelectorAll('.wheel-spokes');
    wheels.forEach(w => w.style.animationDuration = '0.14s');

    // Intense high-beam flash
    const beam = carWrapper.querySelector('.car-light-cone');
    if (beam) {
      beam.style.opacity = '1';
      beam.style.filter = 'drop-shadow(0 0 10px #FFF5D6)';
      setTimeout(() => {
        beam.style.opacity = '';
        beam.style.filter = '';
      }, 1000);
    }

    // Boost speed in telemetry
    const speedEl = document.getElementById('telemetrySpeed');
    if (speedEl) {
      speedEl.textContent = '164 KM/H [TURBO]';
      speedEl.style.color = '#E5C77A';
    }

    // Return to standard stately highway cruise after 4.5s
    setTimeout(() => {
      carWrapper.style.animationDuration = '13s';
      wheels.forEach(w => w.style.animationDuration = '0.42s');
      if (speedEl) {
        speedEl.style.color = '';
      }
    }, 4500);
  });
}

/* --------------------------------------------------------------------------
   04. LIVE TELEMETRY SPEED FLUCTUATION SIMULATION
   -------------------------------------------------------------------------- */
function initTelemetrySpeed() {
  const speedEl = document.getElementById('telemetrySpeed');
  if (!speedEl) return;

  // Realistic dynamic speed micro-fluctuations (114 - 124 KM/H)
  setInterval(() => {
    // If currently not in turbo boost mode
    if (!speedEl.textContent.includes('TURBO')) {
      const baseSpeed = 118;
      const variation = Math.floor(Math.random() * 9) - 4; // -4 to +4
      speedEl.textContent = `${baseSpeed + variation} KM/H`;
    }
  }, 1200);
}

/* --------------------------------------------------------------------------
   05. BACK TO SITE BUTTON MICRO INTERACTION
   -------------------------------------------------------------------------- */
function initBackToSiteButton() {
  const backBtn = document.getElementById('backToSiteBtn');
  if (!backBtn) return;

  backBtn.addEventListener('mouseenter', () => {
    if ('vibrate' in navigator) {
      try {
        navigator.vibrate(15);
      } catch (e) {
        // Safe ignore
      }
    }
  });
}

/* --------------------------------------------------------------------------
   06. 404 BIG NUMBER SUBTLE 3D PARALLAX TILT
   -------------------------------------------------------------------------- */
function init404NumberInteraction() {
  const bigNum = document.querySelector('.p404-big-num');
  if (!bigNum) return;

  window.addEventListener('mousemove', (e) => {
    const xRatio = (e.clientX / window.innerWidth) - 0.5;
    const yRatio = (e.clientY / window.innerHeight) - 0.5;

    const tiltX = -yRatio * 10;
    const tiltY = xRatio * 14;

    bigNum.style.transform = `perspective(600px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`;
  });

  window.addEventListener('mouseleave', () => {
    bigNum.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg)';
  });
}
