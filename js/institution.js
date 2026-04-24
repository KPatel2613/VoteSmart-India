// ── INSTITUTION JS ──

let currentStep = 1;
let candCount = 2;

// Tab switching
document.querySelectorAll('.snav-item').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    switchTab(item.dataset.tab);
  });
});

function switchTab(tab) {
  document.querySelectorAll('.snav-item').forEach(s => s.classList.toggle('active', s.dataset.tab === tab));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.id === 'tab-' + tab));
  if (tab === 'participants') renderParticipants();
  if (tab === 'analytics') renderAnalytics();
}
window.switchTab = switchTab;

// Step navigation
function nextStep(n) {
  document.getElementById('step' + currentStep).classList.remove('active');
  currentStep = n;
  document.getElementById('step' + n).classList.add('active');
}
function prevStep(n) { nextStep(n); }
window.nextStep = nextStep;
window.prevStep = prevStep;

// Add candidate entry
function addCandEntry() {
  const list = document.getElementById('candidatesList');
  const symbols = ['🌺','🔥','🐘','🦁','🌊','⭐','🎯','🔑'];
  const div = document.createElement('div');
  div.className = 'cand-entry';
  div.id = 'ce' + candCount;
  div.innerHTML = `
    <div class="ce-header"><span>Candidate ${candCount + 1}</span><button class="ce-remove" onclick="removeCand(${candCount})">✕</button></div>
    <div class="form-row3">
      <div class="form-group"><label>Name *</label><input type="text" placeholder="Candidate Name" /></div>
      <div class="form-group"><label>Party</label><input type="text" placeholder="Party or Independent" /></div>
      <div class="form-group"><label>Symbol (emoji)</label><input type="text" placeholder="${symbols[candCount % symbols.length]}" maxlength="2" /></div>
    </div>`;
  list.appendChild(div);
  candCount++;
}
function removeCand(id) {
  const el = document.getElementById('ce' + id);
  if (el) el.remove();
}
window.addCandEntry = addCandEntry;
window.removeCand = removeCand;

// Launch election
function launchElection() {
  const title = document.getElementById('elTitle') ? document.getElementById('elTitle').value : '';
  alert(`✅ Election "${title || 'New Election'}" created!\n\nJoin Code: SVNIT-2024-MK7\nShare this code with your participants.\n\n(Demo: In production, election is saved to database)`);
  switchTab('elections');
}
window.launchElection = launchElection;

// Participants table
const PARTICIPANTS = [
  { n:1, name:'Ananya Sharma',  email:'ananya@svnit.ac.in',  joined:'Jan 5, 2024',  elections:3, modules:6, active:true },
  { n:2, name:'Rohan Patel',    email:'rohan@svnit.ac.in',   joined:'Jan 6, 2024',  elections:3, modules:5, active:true },
  { n:3, name:'Priya Mehta',    email:'priya@svnit.ac.in',   joined:'Jan 8, 2024',  elections:2, modules:4, active:true },
  { n:4, name:'Kiran Nair',     email:'kiran@svnit.ac.in',   joined:'Jan 10, 2024', elections:2, modules:3, active:false },
  { n:5, name:'Aditya Joshi',   email:'aditya@svnit.ac.in',  joined:'Jan 12, 2024', elections:1, modules:7, active:true },
  { n:6, name:'Deepa Singh',    email:'deepa@svnit.ac.in',   joined:'Jan 14, 2024', elections:1, modules:2, active:false },
  { n:7, name:'Vijay Kumar',    email:'vijay@svnit.ac.in',   joined:'Jan 15, 2024', elections:3, modules:8, active:true },
  { n:8, name:'Meena Reddy',    email:'meena@svnit.ac.in',   joined:'Jan 17, 2024', elections:2, modules:4, active:true },
];

function renderParticipants() {
  const body = document.getElementById('ptBody');
  if (!body) return;
  body.innerHTML = PARTICIPANTS.map(p => `
    <tr>
      <td>${p.n}</td>
      <td>${p.name}</td>
      <td style="color:var(--muted)">${p.email}</td>
      <td style="color:var(--muted)">${p.joined}</td>
      <td>${p.elections}</td>
      <td>${p.modules}/8</td>
      <td><span class="badge ${p.active ? 'badge-green' : ''}" style="${!p.active ? 'background:rgba(136,136,170,0.1);color:var(--muted)' : ''}">${p.active ? 'Active' : 'Inactive'}</span></td>
    </tr>`).join('');
}

// Analytics
function renderAnalytics() {
  renderTurnoutChart();
  renderModulesChart();
  renderTopStudents();
}

function renderTurnoutChart() {
  const el = document.getElementById('chartTurnout');
  if (!el) return;
  const data = [
    { label:'Oct', val:55 },
    { label:'Nov', val:68 },
    { label:'Dec', val:72 },
    { label:'Jan', val:89 },
    { label:'Feb', val:74 },
    { label:'Mar', val:81 },
  ];
  const max = Math.max(...data.map(d => d.val));
  el.innerHTML = data.map(d => `
    <div style="flex:1;position:relative">
      <div class="bar" style="height:${(d.val/max)*120}px;background:linear-gradient(180deg,#8B2FC9,#6A0DAD)">
        <div style="position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:0.6rem;color:var(--text2)">${d.val}%</div>
        <div class="bar-label">${d.label}</div>
      </div>
    </div>`).join('');
}

function renderModulesChart() {
  const el = document.getElementById('chartModules');
  if (!el) return;
  const data = [
    { label:'M1', val:68 },
    { label:'M2', val:85 },
    { label:'M3', val:42 },
    { label:'M4', val:30 },
    { label:'M5', val:18 },
    { label:'M6', val:12 },
    { label:'M7', val:8 },
    { label:'M8', val:5 },
  ];
  const max = 100;
  el.innerHTML = data.map(d => `
    <div style="flex:1;position:relative">
      <div class="bar" style="height:${(d.val/max)*120}px;background:linear-gradient(180deg,#FF9933,#E07000)">
        <div style="position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:0.6rem;color:var(--text2)">${d.val}%</div>
        <div class="bar-label">${d.label}</div>
      </div>
    </div>`).join('');
}

function renderTopStudents() {
  const el = document.getElementById('topStudents');
  if (!el) return;
  const students = [
    { rank:'🥇', name:'Vijay Kumar',   pts:4820 },
    { rank:'🥈', name:'Ananya Sharma', pts:4510 },
    { rank:'🥉', name:'Aditya Joshi',  pts:4200 },
    { rank:'4',  name:'Rohan Patel',   pts:3980 },
    { rank:'5',  name:'Priya Mehta',   pts:3740 },
  ];
  el.innerHTML = students.map(s => `
    <div class="ts-row">
      <span class="ts-rank">${s.rank}</span>
      <span>${s.name}</span>
      <span class="ts-pts">${s.pts.toLocaleString()} pts</span>
    </div>`).join('');
}

function downloadReport(type) {
  alert(`Download "${type}" report — In production, this generates a real file.\n(Demo only)`);
}
window.downloadReport = downloadReport;

document.addEventListener('DOMContentLoaded', () => {});
