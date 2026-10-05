
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRTL();
  initBackwardCountdown();
  initNotifyForm();
});

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

function initRTL() {
  const rtlToggle = document.getElementById('rtlToggle');
  const rtlBtnText = document.getElementById('rtlBtnText');
  const htmlRoot = document.documentElement;

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

function initBackwardCountdown() {
  const STORAGE_KEY = 'orvexa_facility_target_time';
  let targetTime = parseInt(localStorage.getItem(STORAGE_KEY), 10);

  const now = Date.now();
  if (!targetTime || targetTime <= now) {
    const launchDurationMs = (48 * 24 * 3600 + 14 * 3600 + 36 * 60 + 24) * 1000;
    targetTime = now + launchDurationMs;
    localStorage.setItem(STORAGE_KEY, targetTime.toString());
  }

  const elDays = document.getElementById('cdDays');
  const elHours = document.getElementById('cdHours');
  const elMinutes = document.getElementById('cdMinutes');
  const elSeconds = document.getElementById('cdSeconds');

  const barDays = document.getElementById('barDays');
  const barHours = document.getElementById('barHours');
  const barMinutes = document.getElementById('barMinutes');
  const barSeconds = document.getElementById('barSeconds');

  let prevVals = { days: '', hours: '', minutes: '', seconds: '' };

  function tickCountdown() {
    const currentTime = Date.now();
    let diffMs = targetTime - currentTime;

    if (diffMs <= 0) {
      diffMs = 0;
    }

    const totalSecs = Math.floor(diffMs / 1000);
    const days = Math.floor(totalSecs / (3600 * 24));
    const hours = Math.floor((totalSecs % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSecs % 3600) / 60);
    const seconds = Math.floor(totalSecs % 60);

    const strDays = String(days).padStart(2, '0');
    const strHours = String(hours).padStart(2, '0');
    const strMinutes = String(minutes).padStart(2, '0');
    const strSeconds = String(seconds).padStart(2, '0');

    updateDigit(elDays, strDays, prevVals.days, 'days');
    updateDigit(elHours, strHours, prevVals.hours, 'hours');
    updateDigit(elMinutes, strMinutes, prevVals.minutes, 'minutes');
    updateDigit(elSeconds, strSeconds, prevVals.seconds, 'seconds');

    prevVals = { days: strDays, hours: strHours, minutes: strMinutes, seconds: strSeconds };

    if (barDays) barDays.style.width = Math.min(100, Math.max(5, (days / 60) * 100)) + '%';
    if (barHours) barHours.style.width = ((hours / 24) * 100) + '%';
    if (barMinutes) barMinutes.style.width = ((minutes / 60) * 100) + '%';
    if (barSeconds) barSeconds.style.width = ((seconds / 60) * 100) + '%';
  }

  function updateDigit(element, newVal, oldVal, unit) {
    if (!element) return;
    if (newVal !== oldVal) {
      element.textContent = newVal;
      const card = element.closest('.cs-timer-card');
      if (card) {
        card.classList.add('tick');
        setTimeout(() => card.classList.remove('tick'), 300);
      }
    }
  }

  tickCountdown();

  setInterval(tickCountdown, 1000);
}

function initNotifyForm() {
  const form = document.getElementById('csNotifyForm');
  const input = document.getElementById('csEmailInput');
  const feedback = document.getElementById('csNotifyFeedback');

  if (!form || !input || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      feedback.className = 'cs-notify-feedback error';
      feedback.textContent = 'Please provide a valid diagnostic or fleet email address.';
      input.focus();
      return;
    }

    const subscribers = JSON.parse(localStorage.getItem('orvexa_vip_subscribers') || '[]');
    if (!subscribers.includes(email)) {
      subscribers.push(email);
      localStorage.setItem('orvexa_vip_subscribers', JSON.stringify(subscribers));
    }

    feedback.className = 'cs-notify-feedback success';
    feedback.innerHTML = '&#10003; Verification successful. You have been reserved on the VIP Priority Commissioning Register.';
    input.value = '';
    input.blur();

    setTimeout(() => {
      feedback.style.opacity = '0';
      setTimeout(() => {
        feedback.className = 'cs-notify-feedback';
        feedback.style.opacity = '1';
        feedback.textContent = '';
      }, 500);
    }, 6000);
  });
}
