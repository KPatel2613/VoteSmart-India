// ── GLOBAL JS ──

// Language switcher
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    // In a real app, trigger i18n here
    console.log('Language set to:', this.dataset.lang);
  });
});

// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// Auth state simulation (localStorage)
const AuthState = {
  get() {
    try { return JSON.parse(localStorage.getItem('vs_user')) || null; } catch { return null; }
  },
  set(user) {
    localStorage.setItem('vs_user', JSON.stringify(user));
  },
  clear() {
    localStorage.removeItem('vs_user');
  },
  isLoggedIn() {
    return !!this.get();
  }
};

// Update nav based on auth
function updateNavAuth() {
  const user = AuthState.get();
  const navLinks = document.querySelector('.nav-links');
  if (!navLinks) return;
  const loginBtn = navLinks.querySelector('a[href*="login"]');
  const registerBtn = navLinks.querySelector('a[href*="register"]');
  if (user && loginBtn && registerBtn) {
    loginBtn.textContent = 'Dashboard';
    loginBtn.href = 'pages/dashboard.html';
    registerBtn.textContent = 'Logout';
    registerBtn.href = '#';
    registerBtn.onclick = (e) => {
      e.preventDefault();
      AuthState.clear();
      window.location.reload();
    };
  }
}

// EVM beep sound (Web Audio API)
function evmBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 880;
    osc.type = 'sine';
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.25);
  } catch(e) {}
}

// Candidates data (shared across pages)
const CANDIDATES = [
  { id: 1, name: 'Rahul Kumar',  party: 'National Party',    symbol: '🌸', education: 'M.A. Political Science', assets: '₹42 Lakh', criminal: 0, votes: 0 },
  { id: 2, name: 'Priya Singh',  party: 'United Front',      symbol: '⚡', education: 'B.Tech Engineering',     assets: '₹18 Lakh', criminal: 1, votes: 0 },
  { id: 3, name: 'Arjun Mehta',  party: "People's Alliance", symbol: '🌿', education: 'LL.B Law',               assets: '₹1.2 Cr',  criminal: 0, votes: 0 },
  { id: 4, name: 'Sunita Devi',  party: 'Progress Party',    symbol: '☀️', education: 'M.Sc Economics',         assets: '₹55 Lakh', criminal: 0, votes: 0 },
  { id: 5, name: 'Dev Sharma',   party: 'Reform Front',      symbol: '🔔', education: 'MBA Finance',            assets: '₹2.8 Cr',  criminal: 2, votes: 0 },
];

document.addEventListener('DOMContentLoaded', () => {
  updateNavAuth();
});
