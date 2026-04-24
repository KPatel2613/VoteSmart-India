// ── COMPARE PAGE JS ──

const FULL_CANDIDATES = [
  { id:1, name:'Rahul Kumar',   party:'National Party',    symbol:'🌸', education:'M.A. Political Science', assets:'₹42 Lakh',  criminal:0, constituency:'Demo-01 North', age:48 },
  { id:2, name:'Priya Singh',   party:'United Front',      symbol:'⚡', education:'B.Tech Engineering',     assets:'₹18 Lakh',  criminal:1, constituency:'Demo-01 North', age:36 },
  { id:3, name:'Arjun Mehta',   party:"People's Alliance", symbol:'🌿', education:'LL.B Law',               assets:'₹1.2 Cr',   criminal:0, constituency:'Demo-01 North', age:55 },
  { id:4, name:'Sunita Devi',   party:'Progress Party',    symbol:'☀️', education:'M.Sc Economics',         assets:'₹55 Lakh',  criminal:0, constituency:'Demo-01 North', age:42 },
  { id:5, name:'Dev Sharma',    party:'Reform Front',      symbol:'🔔', education:'MBA Finance',            assets:'₹2.8 Cr',   criminal:2, constituency:'Demo-01 North', age:51 },
  { id:6, name:'Kavita Rao',    party:'National Party',    symbol:'🌸', education:'Ph.D History',           assets:'₹28 Lakh',  criminal:0, constituency:'Demo-02 South', age:44 },
  { id:7, name:'Mohan Lal',     party:'United Front',      symbol:'⚡', education:'B.A. Arts',              assets:'₹8 Lakh',   criminal:3, constituency:'Demo-02 South', age:60 },
  { id:8, name:'Seema Gupta',   party:"People's Alliance", symbol:'🌿', education:'M.Com Commerce',         assets:'₹75 Lakh',  criminal:0, constituency:'Demo-02 South', age:39 },
  { id:9, name:'Vijay Patil',   party:'Progress Party',    symbol:'☀️', education:'MBBS Medicine',          assets:'₹3.5 Cr',   criminal:1, constituency:'Demo-03 East',  age:47 },
];

let compareList = [];
let filtered = [...FULL_CANDIDATES];

function renderCandidates(list) {
  const grid = document.getElementById('candidatesGrid');
  const noRes = document.getElementById('noResults');
  if (!list.length) { grid.innerHTML=''; noRes.style.display='block'; return; }
  noRes.style.display='none';
  grid.innerHTML = '';
  list.forEach(c => {
    const isSelected = compareList.find(x => x.id === c.id);
    const crimClass = c.criminal === 0 ? 'criminal-clean' : c.criminal === 1 ? 'criminal-warn' : 'criminal-bad';
    const crimText  = c.criminal === 0 ? '✓ None' : `⚠ ${c.criminal} case${c.criminal>1?'s':''}`;
    const card = document.createElement('div');
    card.className = 'cand-card' + (isSelected ? ' selected' : '');
    card.id = 'ccard' + c.id;
    card.innerHTML = `
      <div class="cand-top">
        <div class="cand-symbol">${c.symbol}</div>
        <div class="cand-name">${c.name}</div>
        <div class="cand-party">${c.party}</div>
      </div>
      <div class="cand-body">
        <div class="cand-row"><span class="cr-label">Constituency</span><span class="cr-value">${c.constituency}</span></div>
        <div class="cand-row"><span class="cr-label">Education</span><span class="cr-value">${c.education}</span></div>
        <div class="cand-row"><span class="cr-label">Declared Assets</span><span class="cr-value">${c.assets}</span></div>
        <div class="cand-row"><span class="cr-label">Criminal Cases</span><span class="cr-value ${crimClass}">${crimText}</span></div>
        <div class="cand-row"><span class="cr-label">Age</span><span class="cr-value">${c.age} years</span></div>
      </div>
      <div class="cand-actions">
        <button class="btn-compare-add${isSelected?' added':''}" id="cbtn${c.id}" onclick="toggleCompare(${c.id})">
          ${isSelected ? '✓ Added' : '+ Compare'}
        </button>
      </div>`;
    grid.appendChild(card);
  });
}

function toggleCompare(id) {
  const c = FULL_CANDIDATES.find(x => x.id === id);
  const idx = compareList.findIndex(x => x.id === id);
  if (idx > -1) {
    compareList.splice(idx, 1);
  } else {
    if (compareList.length >= 4) { alert('Maximum 4 candidates can be compared at once.'); return; }
    compareList.push(c);
  }
  updateTray();
  renderCandidates(filtered);
}
window.toggleCompare = toggleCompare;

function updateTray() {
  const tray = document.getElementById('compareTray');
  const items = document.getElementById('trayItems');
  if (!compareList.length) { tray.style.display='none'; return; }
  tray.style.display='flex';
  items.innerHTML = compareList.map(c => `
    <div class="tray-tag">${c.symbol} ${c.name} <button onclick="toggleCompare(${c.id})">✕</button></div>
  `).join('');
}

function filterCandidates() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  const party = document.getElementById('filterParty').value;
  const crim = document.getElementById('filterCriminal').value;
  filtered = FULL_CANDIDATES.filter(c => {
    const matchQ = !q || c.name.toLowerCase().includes(q) || c.party.toLowerCase().includes(q);
    const matchP = !party || c.party === party;
    const matchC = !crim || (crim==='0' && c.criminal===0) || (crim==='1' && c.criminal>=1) || (crim==='2' && c.criminal>=2);
    return matchQ && matchP && matchC;
  });
  renderCandidates(filtered);
  updateChips();
}
window.filterCandidates = filterCandidates;

function updateChips() {
  const chips = document.getElementById('sbChips');
  const party = document.getElementById('filterParty').value;
  const crim = document.getElementById('filterCriminal').value;
  const html = [];
  if (party) html.push(`<div class="chip">Party: ${party} <button onclick="document.getElementById('filterParty').value='';filterCandidates()">✕</button></div>`);
  if (crim) html.push(`<div class="chip">Criminal: ${crim === '0' ? 'Clean' : crim+'+ cases'} <button onclick="document.getElementById('filterCriminal').value='';filterCandidates()">✕</button></div>`);
  chips.innerHTML = html.join('');
}

function clearFilters() {
  document.getElementById('searchInput').value='';
  document.getElementById('filterParty').value='';
  document.getElementById('filterCriminal').value='';
  filtered = [...FULL_CANDIDATES];
  renderCandidates(filtered);
  updateChips();
}
window.clearFilters = clearFilters;

function showCompareTable() {
  if (compareList.length < 2) { alert('Please select at least 2 candidates to compare.'); return; }
  const wrap = document.getElementById('cmTableWrap');
  const fields = [
    { label:'Party', key:'party' },
    { label:'Constituency', key:'constituency' },
    { label:'Age', fn: c => c.age + ' years' },
    { label:'Education', key:'education' },
    { label:'Declared Assets', key:'assets' },
    { label:'Criminal Cases', fn: c => {
      const cl = c.criminal===0?'criminal-clean':c.criminal===1?'criminal-warn':'criminal-bad';
      const t = c.criminal===0?'✓ None':`⚠ ${c.criminal} case${c.criminal>1?'s':''}`;
      return `<span class="${cl}">${t}</span>`;
    }},
  ];
  let html = `<table class="cm-table"><thead><tr><th>Field</th>`;
  compareList.forEach(c => {
    html += `<th><span class="cm-sym">${c.symbol}</span><div class="cm-name">${c.name}</div><div class="cm-party">${c.party}</div></th>`;
  });
  html += '</tr></thead><tbody>';
  fields.forEach(f => {
    html += `<tr><td>${f.label}</td>`;
    compareList.forEach(c => {
      const val = f.fn ? f.fn(c) : c[f.key];
      html += `<td>${val}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody></table>';
  wrap.innerHTML = html;
  document.getElementById('compareModal').classList.add('open');
}
window.showCompareTable = showCompareTable;

function closeCompare() {
  document.getElementById('compareModal').classList.remove('open');
}
window.closeCompare = closeCompare;

document.addEventListener('DOMContentLoaded', () => {
  renderCandidates(FULL_CANDIDATES);
  document.getElementById('compareModal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeCompare();
  });
});
