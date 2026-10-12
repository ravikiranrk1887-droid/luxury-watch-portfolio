# Ravikiran S — Luxury Mechanical Watch Portfolio

An interactive, personal portfolio website inspired by haute horlogerie craftsmanship (notably the intricate rose-gold case, engraved laurel bezel, ivory face, and complex astronomical subdials of the Patek Philippe Grandmaster Chime).

---

## 🏛️ Horological Concept & Engineering

The portfolio is designed as an authentic luxury time instrument:
- **Rose-Gold Caliber Case:** Multi-tiered concentric metallic rings, 3D relief engraved laurel wreath bezel, coin-edge chapter ring, knurled winding crown at 3 o'clock, pushers at 2/4/8/10 o'clock, and alligator leather strap with saddle stitching.
- **Warm Ivory Dial:** Engine-turned guilloché wave ripples radiating from the center, chemin de fer (railway minute track), and deep espresso Roman numerals (I through XII).
- **Four Working Complications:**
  1. **Top (12 o'clock):** 24-hour dual-time / alarm subdial with azurage circular graining and hand.
  2. **Bottom (6 o'clock):** Astronomical moon phase aperture featuring a night-sky star field, rotating celestial moon disc, and a 31-day date calendar ring with needle.
  3. **Left (9 o'clock):** Power reserve / "MOUVEMENT" calibrated complication arc.
  4. **Right (3 o'clock):** "SONNERIE" chime indicator complication.
- **Precision Needles & Real-Time Engine:**
  - Continuous sweeping rose-gold second needle beating in sync with `requestAnimationFrame`.
  - Live Breguet blued-steel minute needle and hour hand tracking your local time.
  - **Live Clock Mode vs Pointer Mode:** Toggle between real-time horology and complication pointing where hands animate to target chosen portfolio sections.
- **Procedural Sound Engine:**
  - Built using the Web Audio API (zero external mp3 files, zero latency, zero CORS errors).
  - Escapement pallet fork ticks, ratchet winding clicks, and sonnerie chime.
  - Starts muted by default with an instant mute/unmute toggle in the HUD.
- **Twelve-Number Primary Navigation:**
  - `01` — **ABOUT ME** (I)
  - `02` — **SKILLS** (II)
  - `03` — **PROJECTS** (III)
  - `04` — **AI / LLM** (IV)
  - `05` — **CERTIFICATIONS & WORKSHOPS** (V)
  - `06` — **ENTREPRENEURSHIP** (VI)
  - `07` — **ACHIEVEMENTS** (VII)
  - `08` — **LEARNING JOURNEY** (VIII)
  - `09` — **GITHUB** (IX)
  - `10` — **RESUME** (X)
  - `11` — **FUTURE** (XI)
  - `12` — **CONTACT** (XII)
- **Easter Egg:** Triple-click the central **R** monogram cartouche to reveal the horologist's secret:
  > *"BUILT WITH CURIOSITY. KEPT RUNNING BY COFFEE."*

---

## 📂 Project Architecture

```
d:/portfolio/
├── public/
│   ├── favicon.svg            # Luxury rose-gold R monogram favicon
│   └── resume.pdf             # Place your actual resume PDF here
├── src/
│   ├── assets/                # Visual media assets
│   ├── components/
│   │   ├── EasterEgg/         # Triple-click secret modal
│   │   ├── Navigation/        # 12 Roman numeral dial anchors & DialHUD
│   │   ├── SectionPanel/      # Unfolding side panel with breadcrumb & pagination
│   │   ├── Subdials/          # 24h GMT, Moon phase, power reserve, sonnerie
│   │   ├── Watch/             # WatchContainer, gradients, and audio engine
│   │   ├── WatchCase/         # 3D rose-gold bezel, laurel wreath, lugs, crown
│   │   ├── WatchDial/         # Ivory face, guilloché waves, railway tracks
│   │   ├── WatchHands/        # Breguet hour/min hands & sweeping second needle
│   │   └── common/            # Custom GitHub & LinkedIn SVG brand icons
│   ├── data/
│   │   └── portfolioData.js   # Single source of truth for all content & links
│   ├── sections/              # 12 individual section components
│   │   ├── 01_About/
│   │   ├── 02_Skills/
│   │   ├── 03_Projects/
│   │   ├── 04_AI_LLM/
│   │   ├── 05_Certifications/
│   │   ├── 06_Entrepreneurship/
│   │   ├── 07_Achievements/
│   │   ├── 08_LearningJourney/
│   │   ├── 09_GitHub/
│   │   ├── 10_Resume/
│   │   ├── 11_Future/
│   │   └── 12_Contact/
│   ├── styles/
│   │   ├── horology.css       # Core palette tokens, shadows & typography
│   │   └── sections.css       # Layout transitions & section cards
│   ├── utils/
│   │   └── audio.js           # Web Audio API mechanical escapement sound synthesizer
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🛠️ How to Customize Your Content

All information is managed in one central file: [`src/data/portfolioData.js`](src/data/portfolioData.js).

### 1. Personal Details & Social Links
Open `src/data/portfolioData.js` and edit `PERSONAL_INFO`:
```javascript
export const PERSONAL_INFO = {
  name: "Ravikiran S",
  title: "Computer Science Engineering Student",
  subtitle: "CSE · AI · TECHNOLOGY · ENTREPRENEURSHIP",
  githubUsername: "your-github-username",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
  resumePath: "/resume.pdf",
};
```

### 2. Resume PDF
Drop your real resume PDF file into the [`public/`](public/) directory named `resume.pdf`. The **VIEW RESUME** and **DOWNLOAD RESUME** buttons will automatically open and download this file.

### 3. Adding New Projects
In `src/data/portfolioData.js`, add an object to `PROJECTS_DATA`:
```javascript
{
  id: "my-new-project",
  title: "Project Name",
  badge: "Active",
  tagline: "Short summary",
  status: "Building",
  period: "2025",
  liveUrl: "https://...",
  githubUrl: "https://github.com/...",
  problem: "What problem was solved?",
  solution: "How did you solve it?",
  keyFeatures: ["Feature 1", "Feature 2"],
  techStack: ["React", "Python", "FastAPI"]
}
```

---

## 🚀 Running Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready assets will be generated in `dist/`.

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import this repository. Vite settings are detected automatically:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository on [Netlify](https://netlify.com).
2. Set build command to `npm run build` and publish directory to `dist`.
3. Click **Deploy Site**.
