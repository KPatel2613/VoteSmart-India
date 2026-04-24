// ── DASHBOARD JS ──

const LEADERBOARD = [
  { rank: 1, name: 'Ananya Sharma', inst: 'IIT Bombay', pts: 4820, badges: 8 },
  { rank: 2, name: 'Rohan Patel',   inst: 'BITS Pilani', pts: 4510, badges: 7 },
  { rank: 3, name: 'Kavya Nair',    inst: 'NLSIU Bangalore', pts: 4200, badges: 7 },
  { rank: 4, name: 'Arjun Verma',   inst: 'Delhi University', pts: 3980, badges: 6 },
  { rank: 5, name: 'Priya Reddy',   inst: 'Jadavpur University', pts: 3740, badges: 5 },
  { rank: 6, name: 'Siddharth Jha', inst: 'NIT Surat', pts: 3500, badges: 5 },
  { rank: 7, name: 'Meera Iyer',    inst: 'Anna University', pts: 3250, badges: 4 },
  { rank: 42, name: 'You (Demo)',    inst: 'VoteSmart Demo', pts: 1240, badges: 3, isMe: true },
];

const MODULES_FULL = [
  { icon: '🇮🇳', name: 'How Indian Elections Work', pct: 80, status: 'In Progress', statusClass: 'badge-green' },
  { icon: '🗳️', name: 'What is EVM', pct: 100, status: 'Certified', statusClass: 'badge-purple' },
  { icon: '⚖️', name: 'Role of Election Commission', pct: 30, status: 'Started', statusClass: 'badge-saffron' },
  { icon: '🙋', name: 'Voter Rights', pct: 0, status: 'Not Started', statusClass: '' },
  { icon: '🔍', name: 'Candidate Due Diligence', pct: 0, status: 'Not Started', statusClass: '' },
  { icon: '📊', name: 'Reading Election Results', pct: 0, status: 'Not Started', statusClass: '' },
  { icon: '🏛️', name: 'Model Code of Conduct', pct: 0, status: 'Not Started', statusClass: '' },
  { icon: '📋', name: 'Election Commission Functions', pct: 0, status: 'Not Started', statusClass: '' },
];

// Tab switching
document.querySelectorAll('.snav-item').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    const tab = item.dataset.tab;
    document.querySelectorAll('.snav-item').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    item.classList.add('active');
    document.getElementById('tab-' + tab).classList.add('active');
    if (tab === 'leaderboard') renderLeaderboard();
    if (tab === 'learning') renderFullModules();
  });
});

// Render leaderboard
function renderLeaderboard() {
  const list = document.getElementById('lbList');
  if (!list) return;
  list.innerHTML = '';
  LEADERBOARD.forEach(r => {
    const row = document.createElement('div');
    row.className = 'lb-row' + (r.isMe ? ' me' : '');
    const rankClass = r.rank === 1 ? 'gold' : r.rank === 2 ? 'silver' : r.rank === 3 ? 'bronze' : '';
    row.innerHTML = `
      <span class="lb-rank ${rankClass}">${r.rank === 1 ? '🥇' : r.rank === 2 ? '🥈' : r.rank === 3 ? '🥉' : '#' + r.rank}</span>
      <span class="lb-name">${r.name}</span>
      <span class="lb-inst">${r.inst}</span>
      <span class="lb-pts">${r.pts.toLocaleString()}</span>
      <span class="lb-b">${r.badges} 🏆</span>
    `;
    list.appendChild(row);
  });
}

// Render full modules list
function renderFullModules() {
  const list = document.getElementById('fullModuleList');
  if (!list) return;
  list.innerHTML = '';
  MODULES_FULL.forEach(m => {
    const item = document.createElement('div');
    item.className = 'module-item';
    item.innerHTML = `
      <div class="module-icon">${m.icon}</div>
      <div class="module-info">
        <div class="module-name">${m.name}</div>
        <div class="progress-bar"><div class="progress-fill" style="width:${m.pct}%"></div></div>
        <div class="module-meta">${m.pct}% complete ${m.statusClass ? `· <span class="badge ${m.statusClass}">${m.status}</span>` : `· ${m.status}`}</div>
      </div>
    `;
    list.appendChild(item);
  });
}

function showCreateElection() {
  const f = document.getElementById('createElectionForm');
  f.style.display = f.style.display === 'none' ? 'block' : 'none';
}
window.showCreateElection = showCreateElection;

function joinElection() {
  const code = document.getElementById('electionCode').value.trim();
  if (!code) return alert('Please enter an election code.');
  alert('Joining election: ' + code + '\n(Demo: Use EVM Simulator to vote)');
}
window.joinElection = joinElection;

function logout() {
  AuthState.clear();
  window.location.href = '../index.html';
}
window.logout = logout;

// Load user info
document.addEventListener('DOMContentLoaded', () => {
  const user = AuthState.get();
  const name = user ? user.name : 'Demo User';
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2);
  document.getElementById('userAvatar').textContent = initials;
  document.getElementById('userName').textContent = name;
  const gn = document.getElementById('greetName');
  if (gn) gn.textContent = name.split(' ')[0];
});
