// ── LANDING PAGE JS ──

const DEMO_CANDIDATES = [
  { num: 1, name: 'Rahul Kumar',  party: 'National Party',    sym: '🌸' },
  { num: 2, name: 'Priya Singh',  party: 'United Front',      sym: '⚡' },
  { num: 3, name: 'Arjun Mehta',  party: "People's Alliance", sym: '🌿' },
  { num: 4, name: 'Sunita Devi',  party: 'Progress Party',    sym: '☀️' },
];

let voted = false;

function buildEVM() {
  const body = document.getElementById('evmBody');
  if (!body) return;
  body.innerHTML = '';
  DEMO_CANDIDATES.forEach((c, i) => {
    const row = document.createElement('div');
    row.className = 'evm-row';
    row.innerHTML = `
      <span class="evm-num">${c.num}</span>
      <span class="evm-name">${c.name}<span class="party">${c.party}</span></span>
      <span class="evm-sym">${c.sym}</span>
      <button class="evm-btn" id="evmBtn${i}" onclick="castVote(${i})"></button>
      <span class="evm-voted-ind" id="vi${i}"></span>
    `;
    body.appendChild(row);
  });
}

function castVote(idx) {
  if (voted) return;
  voted = true;
  evmBeep();

  const allBtns = document.querySelectorAll('.evm-btn');
  allBtns.forEach(b => { b.disabled = true; });

  const btn = document.getElementById('evmBtn' + idx);
  btn.classList.add('voted');
  document.getElementById('vi' + idx).classList.add('show');

  const screen = document.getElementById('evmStatus');
  screen.textContent = '✓ VOTE RECORDED';
  screen.style.color = '#22C55E';

  // Show VVPAT
  const c = DEMO_CANDIDATES[idx];
  document.getElementById('vvpatSym').textContent = c.sym;
  document.getElementById('vvpatName').textContent = c.name;
  document.getElementById('vvpatParty').textContent = c.party;
  const vvpat = document.getElementById('vvpat');
  vvpat.classList.add('show');

  // Reset after 5s
  setTimeout(() => {
    vvpat.classList.remove('show');
    setTimeout(() => {
      voted = false;
      allBtns.forEach(b => { b.disabled = false; });
      btn.classList.remove('voted');
      document.getElementById('vi' + idx).classList.remove('show');
      screen.textContent = 'READY TO VOTE';
      screen.style.color = '#5AE05A';
    }, 600);
  }, 5000);
}

// Expose castVote globally (called from inline onclick)
window.castVote = castVote;

document.addEventListener('DOMContentLoaded', () => {
  buildEVM();
});
