# 🗳️ VoteSmart India — Localhost Setup Guide

India's first EVM simulation and election education platform.

---

## 📁 Project Structure

```
votesmart-india/
├── index.html                  ← Landing page
├── css/
│   ├── global.css              ← Shared styles (nav, footer, EVM, buttons)
│   ├── landing.css             ← Landing page styles
│   ├── evm.css                 ← EVM Simulator page styles
│   ├── dashboard.css           ← Student Dashboard styles
│   ├── learning.css            ← Learning Center styles
│   ├── compare.css             ← Candidate Comparison styles
│   └── institution.css         ← Institution Panel styles
├── js/
│   ├── global.js               ← Shared JS (auth, beep, candidate data)
│   ├── landing.js              ← Landing page EVM demo
│   ├── evm.js                  ← Full EVM Simulator logic
│   ├── dashboard.js            ← Student Dashboard logic
│   ├── learning.js             ← Learning modules, quiz, certificates
│   ├── compare.js              ← Candidate comparison & filter logic
│   └── institution.js          ← Institution panel logic
└── pages/
    ├── login.html              ← Login page
    ├── register.html           ← Registration page
    ├── evm.html                ← EVM Voting Simulator
    ├── dashboard.html          ← Student Dashboard
    ├── learning.html           ← Learning Center (8 modules + quizzes)
    ├── compare.html            ← Candidate Comparison
    └── institution.html        ← Institution Panel
```

---

## 🚀 Quick Start (3 methods)

### Method 1: VS Code Live Server (Recommended)
1. Open the `votesmart-india/` folder in VS Code
2. Install the **Live Server** extension (by Ritwick Dey)
3. Right-click `index.html` → **Open with Live Server**
4. Opens at `http://127.0.0.1:5500`

### Method 2: Python HTTP Server
```bash
cd votesmart-india
python -m http.server 8000
# Open http://localhost:8000
```

### Method 3: Node.js http-server
```bash
npm install -g http-server
cd votesmart-india
http-server -p 8000
# Open http://localhost:8000
```

> ⚠️ **Do not open HTML files directly** (file://) — Google Fonts will not load and some JS may not work correctly. Always use a local server.

---

## 🔑 Demo Login Credentials

| Role | Email | Password |
|------|-------|----------|
| Student | demo@votesmart.in | demo123 |
| Google (mock) | — | Click "Continue with Google" |

Or register a new account via the Register page.

---

## 📄 Pages & Features

| Page | URL | Features |
|------|-----|----------|
| Landing | `/index.html` | Hero, Live EVM demo, Features, Pricing |
| Login | `/pages/login.html` | Email/password + Google auth (mock) |
| Register | `/pages/register.html` | Student/Institution role selection |
| EVM Simulator | `/pages/evm.html` | Full EVM with VVPAT, NOTA, facts rotator |
| Dashboard | `/pages/dashboard.html` | Stats, Elections, Badges, Leaderboard |
| Learning | `/pages/learning.html` | 8 modules, quizzes, certificates |
| Compare | `/pages/compare.html` | 9 candidates, filters, comparison table |
| Institution | `/pages/institution.html` | Create elections, analytics, reports |

---

## 🛠️ Tech Stack

- **Pure HTML5 + CSS3 + Vanilla JS** — Zero dependencies
- **Google Fonts**: Rajdhani + Noto Sans (loaded via CDN)
- **Auth**: localStorage-based mock auth (replace with Firebase/Auth0)
- **Data**: Hardcoded demo data (replace with Supabase/PostgreSQL APIs)
- **No build step required** — open and run immediately

---

## 🔮 Production Integration Checklist

When moving to production, replace these with real implementations:

- [ ] **Auth**: Replace `AuthState` (localStorage) with Firebase Auth or Auth0
- [ ] **Database**: Connect to Supabase/PostgreSQL via REST API
- [ ] **Elections**: Wire `POST /election/create` and `POST /vote` endpoints
- [ ] **Candidates**: Replace `FULL_CANDIDATES` array with `GET /candidates` API call
- [ ] **Learning Progress**: Sync to database via `POST /progress`
- [ ] **Certificates**: Integrate jsPDF for PDF generation
- [ ] **Charts**: Replace SVG bar charts with Chart.js for real data
- [ ] **Email**: Wire SendGrid for join codes and election notifications
- [ ] **Hosting**: Deploy to Vercel (frontend) + Render (backend)

---

## 🎨 Branding

| Token | Value |
|-------|-------|
| Primary | `#6A0DAD` (Purple) |
| Accent | `#FF9933` (Saffron) |
| Background | `#0A0A0F` (Near black) |
| Font | Rajdhani (headings) + Noto Sans (body) |

---

## 📞 Support

This is an educational simulation platform.  
Not affiliated with the Election Commission of India.

© 2024 VoteSmart India
