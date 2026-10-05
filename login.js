
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

function handleLoginSubmit(e) {
  e.preventDefault();

  const emailInput = document.getElementById('loginEmail');
  const passInput = document.getElementById('loginPassword');
  const submitBtn = document.getElementById('btnSubmitLogin');

  const email = emailInput ? emailInput.value.trim() : '';
  const pass = passInput ? passInput.value : '';

  if (!email || !email.includes('@')) {
    showAuthToast('Please enter a valid work or fleet email address.', true);
    if (emailInput) emailInput.focus();
    return;
  }

  if (pass.length < 6) {
    showAuthToast('Please enter your authentication password.', true);
    if (passInput) passInput.focus();
    return;
  }

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Verifying Hardware Credentials...</span>`;
  }

  setTimeout(() => {
    showAuthToast(`Authentication verified for ${email}! Redirecting...`);
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 1000);
  }, 800);
}

function simulateSocialAuth(provider) {
  showAuthToast(`Connecting to ${provider} Single Sign-On...`);
  setTimeout(() => {
    showAuthToast(`${provider} enterprise handshake verified! Redirecting...`);
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 1000);
  }, 800);
}

function openForgotModal() {
  const modal = document.getElementById('forgotModal');
  if (modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    const input = document.getElementById('recoveryEmail');
    if (input) input.focus();
  }
}

function closeForgotModal() {
  const modal = document.getElementById('forgotModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
}

function handleSendRecoveryToken() {
  const emailInput = document.getElementById('recoveryEmail');
  const email = emailInput ? emailInput.value.trim() : '';

  if (!email || !email.includes('@')) {
    showAuthToast('Please provide a valid registered email.', true);
    return;
  }

  closeForgotModal();
  showAuthToast(`Cryptographic reset token dispatched to ${email}. Check inbox.`);
}

window.addEventListener('click', (e) => {
  const modal = document.getElementById('forgotModal');
  if (modal && e.target === modal) {
    closeForgotModal();
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeForgotModal();
  }
});

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

function initAuthThemeAndRTL() {
  const themeToggle = document.getElementById('authThemeToggle');
  const rtlToggle = document.getElementById('authRtlToggle');
  const rtlText = document.getElementById('authRtlText');
  const htmlRoot = document.documentElement;

  const savedTheme = localStorage.getItem('orvexa-theme') || 'light';
  htmlRoot.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = htmlRoot.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      htmlRoot.setAttribute('data-theme', next);
      localStorage.setItem('orvexa-theme', next);
    });
  }

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

  const createAccountBtn = document.getElementById('createAccountBtn');
  if (createAccountBtn) {
    createAccountBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'signup.html';
    });
  }
});
