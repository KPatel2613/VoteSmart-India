// ── LEARNING JS ──

const MODULES_DATA = [
  {
    id: 1, icon: '🇮🇳', title: 'How Indian Elections Work', pct: 80,
    duration: '25 min', quizCount: 5, status: 'progress',
    desc: 'Understand the full lifecycle of Indian elections — from announcement to result.',
    content: [
      { heading: 'The Election Cycle', text: 'India holds elections at multiple levels: Lok Sabha (national), Vidhan Sabha (state), and local body elections. The Election Commission of India (ECI) is the constitutional authority that supervises, directs, and controls the conduct of all elections.' },
      { heading: 'Key Phases', text: 'Every election passes through distinct phases:', list: ['Announcement of election schedule & Model Code of Conduct (MCC) activation','Filing of nomination papers by candidates','Scrutiny and withdrawal of nominations','Election campaign period','Polling day','Counting of votes and result declaration'] },
      { heading: 'The Model Code of Conduct', text: 'The MCC is a set of guidelines issued by the ECI for political parties and candidates during elections. It becomes effective from the date of the announcement of the election schedule and remains in force until the process of election is complete. It ensures a level playing field.' },
      { heading: 'Who Conducts Elections?', text: 'The ECI is a permanent constitutional body established in 1950 under Article 324. It consists of the Chief Election Commissioner and two Election Commissioners. The body is independent of the executive government to ensure free and fair elections.' },
    ],
    quiz: [
      { q: 'Which constitutional article establishes the Election Commission of India?', opts: ['Article 314','Article 324','Article 356','Article 370'], ans: 1 },
      { q: 'What does MCC stand for?', opts: ['Model Candidate Committee','Model Code of Conduct','Ministry of Central Control','Mandatory Constituency Criteria'], ans: 1 },
      { q: 'How many Election Commissioners are currently in the ECI?', opts: ['1','2','3','4'], ans: 2 },
      { q: 'When does the Model Code of Conduct become effective?', opts: ['On polling day','After results are declared','From announcement of election schedule','30 days before polling'], ans: 2 },
      { q: 'Which body is responsible for Lok Sabha elections?', opts: ['State Election Commission','Supreme Court','Election Commission of India','Cabinet Secretariat'], ans: 2 },
    ]
  },
  {
    id: 2, icon: '🗳️', title: 'What is EVM', pct: 100,
    duration: '20 min', quizCount: 4, status: 'completed',
    desc: 'Deep dive into Electronic Voting Machines — how they work, why they are secure, and what VVPAT does.',
    content: [
      { heading: 'Introduction to EVM', text: 'An Electronic Voting Machine (EVM) is a simple electronic device used to record votes in elections. India introduced EVMs to replace paper ballots in order to eliminate bogus voting and reduce logistical complexity. EVMs were first used on a pilot basis in 1982.' },
      { heading: 'Components of EVM', text: 'An EVM system has two units:', list: ['Control Unit (CU): Operates with the Polling Officer who enables votes. Stores and counts votes.','Ballot Unit (BU): Placed in the voting compartment. Has buttons for each candidate.','VVPAT: Voter Verifiable Paper Audit Trail — prints a paper slip showing the voted candidate for 5 seconds.'] },
      { heading: 'Security Features', text: 'EVMs are standalone machines with no WiFi, Bluetooth, or internet connectivity. The microchip is one-time programmable (OTP) and cannot be reprogrammed. EVMs are tested at multiple levels and randomized before deployment.' },
      { heading: 'How a Vote is Cast', text: 'The voter presses the blue button next to their chosen candidate on the Ballot Unit. The EVM emits a beep, confirming the vote. The VVPAT prints a slip showing the candidate name and symbol for 5 seconds for visual verification, after which it drops into a sealed VVPAT box.' },
    ],
    quiz: [
      { q: 'In which year were EVMs first used in Indian elections on a pilot basis?', opts: ['1977','1982','1989','1999'], ans: 1 },
      { q: 'Which unit of the EVM stores and counts votes?', opts: ['Ballot Unit','Control Unit','VVPAT Unit','Central Unit'], ans: 1 },
      { q: 'How long does a VVPAT slip remain visible to the voter?', opts: ['3 seconds','7 seconds','5 seconds','10 seconds'], ans: 2 },
      { q: 'What type of programming chip does an EVM use?', opts: ['Reprogrammable EEPROM','One-time programmable chip','SIM card','Flash drive'], ans: 1 },
    ]
  },
  {
    id: 3, icon: '⚖️', title: 'Role of Election Commission', pct: 30,
    duration: '30 min', quizCount: 5, status: 'progress',
    desc: 'The ECI is the guardian of Indian democracy. Learn its powers, functions, and landmark decisions.',
    content: [
      { heading: 'Constitutional Mandate', text: 'Article 324 of the Indian Constitution vests in the ECI the superintendence, direction, and control of the preparation of electoral rolls and the conduct of elections. The ECI is independent of both the Central and State governments.' },
      { heading: 'Powers of ECI', text: 'Key powers include:', list: ['Issue Model Code of Conduct','Recognize political parties and allot election symbols','Disqualify candidates for corrupt practices','Order re-polls or countermand elections','Implement the Representation of the People Act'] },
      { heading: 'Landmark Decisions', text: 'The ECI has made several landmark decisions, including cancelling elections in Bihar in 1995 due to violence, derecognising parties for violating the MCC, and introducing EVMs and VVPAT to modernize elections.' },
    ],
    quiz: [
      { q: 'Under which Article is the ECI established?', opts: ['Article 312','Article 320','Article 324','Article 330'], ans: 2 },
      { q: 'Who appoints the Chief Election Commissioner?', opts: ['Prime Minister','President of India','Chief Justice','Parliament'], ans: 1 },
      { q: 'What does RPA stand for in election law?', opts: ['Representation of the People Act','Registration of Political Affairs','Rules of Poll Administration','Right to Political Association'], ans: 0 },
    ]
  },
  {
    id: 4, icon: '🙋', title: 'Voter Rights', pct: 0,
    duration: '20 min', quizCount: 4, status: 'locked',
    desc: 'Every citizen has rights as a voter. Learn about NOTA, voter ID, EPIC, and more.',
    content: [
      { heading: 'Right to Vote', text: 'Every Indian citizen above 18 years of age is entitled to vote under Article 326. The right is non-discriminatory — it cannot be denied based on religion, caste, sex, or economic status.' },
      { heading: 'Voter ID & EPIC', text: 'The Electoral Photo Identity Card (EPIC) is issued by the ECI. While not mandatory for voting, it is the primary identity proof. Voters can also use 12 other alternate photo ID documents if EPIC is unavailable.' },
      { heading: 'NOTA — None of the Above', text: 'Introduced by the Supreme Court in 2013, NOTA gives voters the right to reject all candidates. Though a NOTA "win" does not trigger a re-election (currently), it sends a strong democratic signal.' },
      { heading: 'Voter Helpline', text: 'The national voter helpline number is 1950. Voters can also check their name on the electoral roll at voterportal.eci.gov.in or the Voter Helpline App.' },
    ],
    quiz: [
      { q: 'What is the minimum voting age in India?', opts: ['16','18','21','25'], ans: 1 },
      { q: 'What does NOTA stand for?', opts: ['Not On The Agenda','None of the Above','No Option To Abstain','Not Of This Area'], ans: 1 },
      { q: 'What is the national voter helpline number?', opts: ['1800','1950','100','112'], ans: 1 },
      { q: 'What does EPIC stand for?', opts: ['Electoral Photo Identity Card','Election Process Identity Certificate','Electronic Personal ID Card','Electoral Participant Identification Card'], ans: 0 },
    ]
  },
  {
    id: 5, icon: '🔍', title: 'Candidate Due Diligence', pct: 0,
    duration: '25 min', quizCount: 4, status: 'locked',
    desc: 'Learn how to research candidates using affidavits — assets, criminal cases, and education.',
    content: [
      { heading: 'Why Candidate Background Matters', text: 'Every candidate contesting elections is required to file an affidavit disclosing their criminal records, assets and liabilities, and educational qualifications. This is mandatory under the Representation of the People Act.' },
      { heading: 'Where to Find Affidavits', text: 'Affidavits are publicly available on the ECI website (eci.gov.in) and through the Association for Democratic Reforms (ADR) at myneta.info. These resources allow voters to make informed choices.' },
      { heading: 'What to Look For', text: 'Key things to check:', list: ['Criminal cases: Number, nature, and outcome of cases','Assets: Movable and immovable assets; significant increases raise questions','Liabilities: Outstanding loans','Education: Declared qualifications','Tax returns: Indicator of income disclosure'] },
    ],
    quiz: [
      { q: 'Where can voters find candidate affidavits?', opts: ['Police station','ECI website (eci.gov.in)','Gram Panchayat','State government website only'], ans: 1 },
      { q: 'What website does ADR use for candidate info?', opts: ['adrindia.org','myneta.info','eci.gov.in','india.gov.in'], ans: 1 },
      { q: 'Under which law must candidates file affidavits?', opts: ['Indian Penal Code','Representation of the People Act','Companies Act','Right to Information Act'], ans: 1 },
      { q: 'Which of these is NOT disclosed in a candidate affidavit?', opts: ['Criminal cases','Social media passwords','Educational qualifications','Assets and liabilities'], ans: 1 },
    ]
  },
  {
    id: 6, icon: '📊', title: 'Reading Election Results', pct: 0,
    duration: '20 min', quizCount: 3, status: 'locked',
    desc: 'Understand how votes are counted, what winning margins mean, and how to read result tables.',
    content: [
      { heading: 'Counting Day', text: 'Vote counting happens on a designated day after the polling is complete. Counting agents from each candidate are present. Votes are counted constituency-by-constituency, round by round, with cumulative totals updated in real-time.' },
      { heading: 'First-Past-the-Post System', text: 'India uses the First-Past-the-Post (FPTP) system. The candidate with the most votes wins, even without an absolute majority. This means a candidate can win with 30% of votes if others are split.' },
      { heading: 'Key Metrics', text: 'When reading results, watch for:', list: ['Vote share %: Proportion of total votes received','Margin of victory: Difference between winner and runner-up','Voter turnout %: Proportion of registered voters who voted','Postal ballot count: Votes from armed forces, overseas'] },
    ],
    quiz: [
      { q: 'What electoral system does India use for Lok Sabha elections?', opts: ['Proportional Representation','First-Past-the-Post','Two-round system','Ranked-choice voting'], ans: 1 },
      { q: 'What is "margin of victory"?', opts: ['Total votes cast','Votes between winner and runner-up','Percentage of total electorate','Invalid votes'], ans: 1 },
      { q: 'Which group casts postal ballots?', opts: ['NRI voters only','Senior citizens','Armed forces and certain government officials','All voters who register early'], ans: 2 },
    ]
  },
  {
    id: 7, icon: '🏛️', title: 'Model Code of Conduct', pct: 0,
    duration: '22 min', quizCount: 4, status: 'locked',
    desc: 'The MCC ensures fair play during elections. Understand what\'s allowed, what\'s banned, and why.',
    content: [
      { heading: 'What is MCC?', text: 'The Model Code of Conduct (MCC) is a set of guidelines evolved by consensus between political parties and the ECI to ensure free and fair elections. It is not a statute — it is based on consensus and enforced by the ECI\'s moral authority.' },
      { heading: 'Key Provisions', text: 'The MCC includes:', list: ['No use of government machinery or resources for campaigning','No inflammatory speeches that could aggravate divisions','No bribery or voter inducement','No new policy announcements or schemes by ruling party','Campaign must stop 48 hours before polling (silence period)'] },
      { heading: 'Enforcement', text: 'The ECI can issue notices, warnings, censure parties, recommend FIR registration, or cancel rallies for MCC violations. It cannot impose fines or jail terms directly.' },
    ],
    quiz: [
      { q: 'Is the Model Code of Conduct a statutory law?', opts: ['Yes, under IPC','Yes, under RPA','No, it is based on consensus','Yes, under Constitution'], ans: 2 },
      { q: 'How many hours before polling must campaigning stop?', opts: ['12 hours','24 hours','48 hours','72 hours'], ans: 2 },
      { q: 'When does the MCC come into effect?', opts: ['On polling day','After results','At election announcement','30 days before polling'], ans: 2 },
      { q: 'Which of these is a violation of MCC?', opts: ['Holding a rally with permission','Distributing voter ID cards','Using government vehicles for campaigning','Printing election manifesto'], ans: 2 },
    ]
  },
  {
    id: 8, icon: '📋', title: 'Election Commission Functions', pct: 0,
    duration: '28 min', quizCount: 5, status: 'locked',
    desc: 'A comprehensive look at all ECI functions — from delimitation to election symbol disputes.',
    content: [
      { heading: 'Delimitation', text: 'Delimitation is the process of fixing and redrawing the boundaries of constituencies. It is done by a Delimitation Commission set up by an Act of Parliament. The last delimitation was based on the 2001 Census.' },
      { heading: 'Voter Registration', text: 'The ECI maintains the electoral rolls (voter lists). Citizens can register at age 18. The ECI conducts Special Summary Revision each year to add new voters and update existing entries.' },
      { heading: 'Symbol Allotment', text: 'The ECI recognizes national and state parties and allots reserved symbols. Unrecognized parties get symbols from a free symbols list. Recognition is based on vote share and seat thresholds from the previous election.' },
      { heading: 'Observer System', text: 'The ECI deploys General Observers, Expenditure Observers, and Police Observers during elections to ensure fair conduct. Observers are IAS/IPS officers deputed from other states.' },
    ],
    quiz: [
      { q: 'Who conducts delimitation of constituencies?', opts: ['ECI directly','Delimitation Commission','State Legislature','Supreme Court'], ans: 1 },
      { q: 'At what age can an Indian citizen register as a voter?', opts: ['16','17','18','21'], ans: 2 },
      { q: 'Which census was the basis for the last delimitation exercise?', opts: ['1991','2001','2011','2021'], ans: 1 },
      { q: 'What type of observer monitors candidate expenditure?', opts: ['General Observer','Police Observer','Expenditure Observer','Special Observer'], ans: 2 },
      { q: 'How many national parties are recognized by ECI (approx)?', opts: ['3','6','10','15'], ans: 1 },
    ]
  },
];

let activeModule = null;
let quizAnswers = {};
let quizSubmitted = false;

function renderModules() {
  const grid = document.getElementById('modulesGrid');
  if (!grid) return;
  grid.innerHTML = '';
  MODULES_DATA.forEach(m => {
    const card = document.createElement('div');
    card.className = 'module-card' + (m.pct === 100 ? ' completed' : '');
    const statusBadge = m.pct === 100
      ? `<span class="badge badge-purple">Certified</span>`
      : m.pct > 0
        ? `<span class="badge badge-green">In Progress</span>`
        : `<span class="badge" style="background:rgba(136,136,170,0.1);color:var(--muted)">Not Started</span>`;
    card.innerHTML = `
      <div class="mc-icon">${m.icon}</div>
      <div class="mc-body">
        <div class="mc-title">${m.title}</div>
        <div class="mc-desc">${m.desc}</div>
        <div class="progress-bar mc-bar" style="max-width:100%;margin-bottom:8px"><div class="progress-fill" style="width:${m.pct}%"></div></div>
        <div class="mc-footer">
          <span class="mc-meta">⏱ ${m.duration} · ${m.quizCount} questions</span>
          ${statusBadge}
        </div>
      </div>
    `;
    card.onclick = () => openModule(m.id);
    grid.appendChild(card);
  });
}

function openModule(id) {
  activeModule = MODULES_DATA.find(m => m.id === id);
  if (!activeModule) return;
  quizAnswers = {};
  quizSubmitted = false;

  document.getElementById('mvBreadcrumb').textContent = activeModule.title;
  document.getElementById('mvTitle').textContent = activeModule.title;

  // Build content
  const cp = document.getElementById('mvp-content');
  cp.innerHTML = activeModule.content.map(s => `
    <div class="content-section">
      <h3>${s.heading}</h3>
      <p>${s.text}</p>
      ${s.list ? `<ul>${s.list.map(i => `<li>${i}</li>`).join('')}</ul>` : ''}
    </div>
  `).join('') + `
    <div class="content-nav">
      <div></div>
      <button class="btn-primary" style="font-size:0.85rem;padding:10px 24px" onclick="switchMvTab('quiz')">Take Quiz →</button>
    </div>`;

  // Build quiz
  renderQuiz();

  // Build cert
  renderCert();

  document.getElementById('moduleOverlay').classList.add('open');
  switchMvTab('content');
}

function renderQuiz() {
  const qp = document.getElementById('mvp-quiz');
  qp.innerHTML = activeModule.quiz.map((q, qi) => `
    <div class="quiz-q" id="qq${qi}">
      <div class="qtext">Q${qi+1}. ${q.q}</div>
      <div class="quiz-options">
        ${q.opts.map((o, oi) => `
          <div class="quiz-opt" id="opt${qi}_${oi}" onclick="selectOpt(${qi},${oi})">${o}</div>
        `).join('')}
      </div>
    </div>
  `).join('') + `
    <button class="btn-primary" style="margin-top:1rem" onclick="submitQuiz()">Submit Quiz →</button>
    <div id="quizResult" style="display:none"></div>`;
}

function selectOpt(qi, oi) {
  if (quizSubmitted) return;
  quizAnswers[qi] = oi;
  const opts = document.querySelectorAll(`#qq${qi} .quiz-opt`);
  opts.forEach((o, i) => o.classList.toggle('selected', i === oi));
}

function submitQuiz() {
  if (quizSubmitted) return;
  quizSubmitted = true;
  let score = 0;
  activeModule.quiz.forEach((q, qi) => {
    const userAns = quizAnswers[qi];
    const opts = document.querySelectorAll(`#qq${qi} .quiz-opt`);
    if (userAns === q.ans) { opts[userAns].classList.add('correct'); score++; }
    else {
      if (userAns !== undefined) opts[userAns].classList.add('wrong');
      opts[q.ans].classList.add('correct');
    }
  });
  const total = activeModule.quiz.length;
  const pct = Math.round((score/total)*100);
  const res = document.getElementById('quizResult');
  res.style.display = 'block';
  res.innerHTML = `
    <div class="quiz-score">
      <div class="qs-num">${score}/${total}</div>
      <div class="qs-label">Score: ${pct}% ${pct >= 60 ? '🎉 Passed!' : '— Try again for a higher score'}</div>
      ${pct >= 60 ? `<button class="btn-primary" style="margin-top:1rem;font-size:0.85rem;padding:10px 24px" onclick="switchMvTab('cert')">Get Certificate →</button>` : ''}
    </div>`;
}

function renderCert() {
  const user = AuthState.get();
  const name = user ? user.name : 'Demo User';
  const date = new Date().toLocaleDateString('en-IN', { day:'numeric', month:'long', year:'numeric' });
  document.getElementById('certPreview').innerHTML = `
    <div class="cert-tricolor"><div style="background:#FF9933;flex:1"></div><div style="background:#fff;flex:1"></div><div style="background:#138808;flex:1"></div></div>
    <div class="cert-logo">VOTESMART INDIA</div>
    <div style="font-family:'Rajdhani',sans-serif;font-size:0.75rem;color:var(--muted);letter-spacing:2px;margin-bottom:1.5rem">CERTIFICATE OF COMPLETION</div>
    <div class="cert-headline">This certifies that</div>
    <div class="cert-name">${name}</div>
    <div class="cert-module">has successfully completed the module<br><strong style="color:var(--text)">${activeModule ? activeModule.title : '—'}</strong><br>on the VoteSmart India platform</div>
    <div style="font-size:0.75rem;color:var(--muted)">Issued on ${date}</div>
    <div class="cert-seals">
      <div class="cert-seal-item"><span class="si">🏛️</span>VoteSmart India</div>
      <div class="cert-seal-item"><span class="si">📜</span>Verified</div>
      <div class="cert-seal-item"><span class="si">🇮🇳</span>India</div>
    </div>`;
}

function downloadCert() {
  alert('Certificate download feature requires jsPDF integration.\nIn production, this will download a PDF certificate.');
}
window.downloadCert = downloadCert;

function closeModule() {
  document.getElementById('moduleOverlay').classList.remove('open');
  activeModule = null;
}
window.closeModule = closeModule;

function switchMvTab(tab) {
  document.querySelectorAll('.mv-tab').forEach(t => t.classList.toggle('active', t.dataset.mvtab === tab));
  document.querySelectorAll('.mv-panel').forEach(p => p.classList.toggle('active', p.id === 'mvp-' + tab));
  if (tab === 'cert') renderCert();
}
window.switchMvTab = switchMvTab;
window.selectOpt = selectOpt;
window.submitQuiz = submitQuiz;
window.openModule = openModule;

document.addEventListener('DOMContentLoaded', () => {
  renderModules();
  // Close overlay on bg click
  document.getElementById('moduleOverlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModule();
  });
});
