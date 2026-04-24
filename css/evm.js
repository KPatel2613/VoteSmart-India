// ── EVM PAGE JS ──

let evmVoted = false;
let factIndex = 0;
const FACTS_COUNT = 5;

function buildEvmFull() {
  const body = document.getElementById('evmBody');
  if (!body) return;
  body.innerHTML = '';
  CANDIDATES.forEach((c, i) => {
    const row = document.createElement('div');
    row.className = 'evm-row';
    row.innerHTML = `
      <span class="evm-num">${c.id}</span>
      <span class="evm-name">${c.name}<span class="party">${c.party}</span></span>
      <span class="evm-sym">${c.symbol}</span>
      <button class="evm-btn" id="evmBtn${i}" onclick="castVoteFull(${i})"></button>
      <span class="evm-voted-ind" id="vi${i}"></span>
    `;
    body.appendChild(row);
  });
}

function castVoteFull(idx) {
  if (evmVoted) return;
  evmVoted = true;
  evmBeep();

  // Disable all buttons
  document.querySelectorAll('.evm-btn').forEach(b => b.disabled = true);

  const isNota = idx === -1;
  const c = isNota ? { name: 'None of The Above', party: 'NOTA', symbol: '🚫' } : CANDIDATES[idx];
  const btnId = isNota ? 'notaBtn' : 'evmBtn' + idx;
  const viId = isNota ? 'viNota' : 'vi' + idx;

  document.getElementById(btnId).classList.add('voted');
  document.getElementById(viId).classList.add('show');

  // Update screen
  const screen = document.getElementById('evmStatus');
  screen.textContent = '✓ VOTE RECORDED';
  screen.style.color = '#22C55E';

  // Update state panel
  document.getElementById('stateValue').textContent = 'VOTED';
  document.getElementById('stateValue').style.color = '#22C55E';
  document.getElementById('stateDesc').textContent = 'Your vote has been successfully recorded.';

  // Show vote result
  const vr = document.getElementById('voteResult');
  document.getElementById('vrSym').textContent = c.symbol;
  document.getElementById('vrName').textContent = c.name;
  document.getElementById('vrParty').textContent = c.party;
  vr.style.display = 'block';

  // VVPAT
  document.getElementById('vvpatSym').textContent = c.symbol;
  document.getElementById('vvpatName').textContent = c.name;
  document.getElementById('vvpatParty').textContent = c.party;
  const vvpat = document.getElementById('vvpat');
  vvpat.classList.add('show');

  setTimeout(() => { vvpat.classList.remove('show'); }, 5000);

  // Save vote to localStorage
  const votes = JSON.parse(localStorage.getItem('vs_demo_votes') || '{}');
  votes[Date.now()] = { candidateId: idx, candidateName: c.name, party: c.party };
  localStorage.setItem('vs_demo_votes', JSON.stringify(votes));
}

window.castVoteFull = castVoteFull;

function resetEVM() {
  evmVoted = false;
  document.querySelectorAll('.evm-btn').forEach(b => {
    b.disabled = false;
    b.classList.remove('voted');
  });
  document.querySelectorAll('.evm-voted-ind').forEach(v => v.classList.remove('show'));
  const screen = document.getElementById('evmStatus');
  screen.textContent = 'READY TO VOTE';
  screen.style.color = '#5AE05A';
  document.getElementById('stateValue').textContent = 'WAITING';
  document.getElementById('stateValue').style.color = 'var(--saffron)';
  document.getElementById('stateDesc').textContent = 'Press a blue button to cast your vote';
  document.getElementById('voteResult').style.display = 'none';
  document.getElementById('vvpat').classList.remove('show');
}
window.resetEVM = resetEVM;

// Facts rotator
function buildDots() {
  const dots = document.getElementById('factDots');
  if (!dots) return;
  dots.innerHTML = '';
  for (let i = 0; i < FACTS_COUNT; i++) {
    const d = document.createElement('span');
    d.className = 'fact-dot' + (i === 0 ? ' active' : '');
    d.onclick = () => showFact(i);
    dots.appendChild(d);
  }
}

function showFact(n) {
  factIndex = n;
  document.querySelectorAll('.fact-item').forEach((f, i) => {
    f.classList.toggle('active', i === n);
  });
  document.querySelectorAll('.fact-dot').forEach((d, i) => {
    d.classList.toggle('active', i === n);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  buildEvmFull();
  buildDots();
  // Auto-rotate facts
  setInterval(() => { showFact((factIndex + 1) % FACTS_COUNT); }, 4000);
});
