/* ==========================================================
   SIGNUP.JS - ORVEXA Enterprise Client Registration Logic
   Password Visibility Toggle, Form Validation, Theme & RTL
   ========================================================== */

// ----------------------------------------------------------
// 01. PASSWORD VISIBILITY TOGGLE (Eye Icon)
// ----------------------------------------------------------
function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;

  const isPassword = input.getAttribute('type') === 'password';
  input.setAttribute('type', isPassword ? 'text' : 'password');

  if (isPassword) {
    btn.classList.add('active');
    btn.setAttribute('aria-label', 'Hide password');
  } else {
    btn.classList.remove('active');
    btn.setAttribute('aria-label', 'Show password');
  }
}

// ----------------------------------------------------------
// 02. SIGNUP FORM SUBMISSION & VALIDATION
// ----------------------------------------------------------
function handleSignupSubmit(e) {
  e.preventDefault();

  const nameInput = document.getElementById('suFullName');
  const emailInput = document.getElementById('suEmail');
  const passInput = document.getElementById('suPassword');
  const confirmInput = document.getElementById('suConfirmPass');
  const submitBtn = document.getElementById('btnSubmitSignup');

  const name = nameInput ? nameInput.value.trim() : '';
  const email = emailInput ? emailInput.value.trim() : '';
  const pass = passInput ? passInput.value : '';
  const confirm = confirmInput ? confirmInput.value : '';

  if (pass.length < 8) {
    showAuthToast('Password must contain at least 8 characters.', true);
    if (passInput) passInput.focus();
    return;
  }

  if (pass !== confirm) {
    showAuthToast('Passwords do not match. Please verify.', true);
    if (confirmInput) confirmInput.focus();
    return;
  }

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Creating Account &amp; Keys...</span>`;
  }

  setTimeout(() => {
    showAuthToast(`Welcome, ${name}! Account initialized successfully.`);
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 1200);
  }, 900);
}

// ----------------------------------------------------------
// 03. SOCIAL LOGIN SIMULATION (Google / Apple)
// ----------------------------------------------------------
function simulateSocialAuth(provider) {
  showAuthToast(`Connecting to ${provider} Identity Provider...`);
  setTimeout(() => {
    showAuthToast(`${provider} verification successful! Redirecting...`);
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 1000);
  }, 800);
}

// ----------------------------------------------------------
// 04. TOAST NOTIFICATION UTILITY
// ----------------------------------------------------------
function showAuthToast(msg, isError = false) {
  let toast = document.getElementById('authToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'authToast';
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background-color: #171512;
      color: #ECE8E1;
      padding: 12px 20px;
      border-radius: 8px;
      border: 1px solid #A47743;
      box-shadow: 0 12px 32px rgba(0,0,0,0.4);
      font-size: 0.82rem;
      font-weight: 600;
      z-index: 2000;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: all 0.3s ease;
      opacity: 0;
      transform: translateY(12px);
    `;
    document.body.appendChild(toast);
  }

  if (isError) {
    toast.style.borderColor = '#E53935';
    toast.innerHTML = `<span style="color:#EF5350;">&#9888;</span> <span>${msg}</span>`;
  } else {
    toast.style.borderColor = '#A47743';
    toast.innerHTML = `<span style="color:#00E5BD;">&#10004;</span> <span>${msg}</span>`;
  }

  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';

  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px)';
  }, 3500);
}

// ----------------------------------------------------------
// 05. THEME & RTL MANAGEMENT
// ----------------------------------------------------------
function initAuthThemeAndRTL() {
  const themeToggle = document.getElementById('authThemeToggle');
  const rtlToggle = document.getElementById('authRtlToggle');
  const rtlText = document.getElementById('authRtlText');
  const htmlRoot = document.documentElement;

  // Saved theme
  const savedTheme = localStorage.getItem('orvexa_theme') || 'light';
  htmlRoot.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = htmlRoot.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      htmlRoot.setAttribute('data-theme', next);
      localStorage.setItem('orvexa_theme', next);
    });
  }

  // Saved RTL
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
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initAuthThemeAndRTL();

  // Log in navigation guarantee
  const loginLink = document.getElementById('loginLink');
  if (loginLink) {
    loginLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'login.html';
    });
  }
});
