# Sannith's Portfolio - Project Instructions & System Architecture

## Project Overview
This project is a high-performance, interactive personal portfolio web application for **P. Sannith (Pasunooti Sannith)**, a Full-Stack Engineer and Data Analyst with an in-depth focus on Backend Architecture, Next.js, and Agentic AI workflows. The portfolio emphasizes technical depth, real-world system implementations, hardware engineering, and live interactive demonstrations.

### Main Technologies & Libraries
- **Core Stack:** HTML5 (Semantic), CSS3 (Vanilla Glassmorphism & Custom Keyframe Animations), JavaScript (ES6 Modules).
- **Libraries & Integrations:**
  - [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) - For smooth scroll-triggered reveal animations.
  - [Chart.js](https://www.chartjs.org/) - For the dynamic Technical Profile Radar Chart.
  - [Mermaid.js](https://mermaid.js.org/) - For rendering Database Schemas and Entity-Relationship Diagrams (ERDs).
  - [Boxicons](https://boxicons.com/) & [Font Awesome 6](https://fontawesome.com/) - For comprehensive iconography.
  - [Google Fonts (Outfit)](https://fonts.google.com/specimen/Outfit) - For modern typography hierarchy.
  - [GitHub Readme Stats & Activity Graphs](https://github.com/anuraghazra/github-readme-stats) - Real-time developer streak and repository telemetry.

---

## 🏛️ Application Architecture & Design Patterns

The portfolio is structured as a **modular Single-Page Application (SPA)** utilizing clean ES6 JavaScript modules with strict separation of concerns:

```
portfolio/
├── index.html                  # Main semantic structure, navigation, and section anchors
├── style.css                   # Custom styling, glowing orbs, glassmorphism, responsive breakpoints
├── js/
│   ├── main.js                 # Orchestrator: DOMContentLoaded & window.load lifecycle, AOS init
│   ├── data.js                 # Central Single Source of Truth (profileData) for all content
│   └── modules/
│       ├── about.js            # Renders bio, 440+ day streak summary, education, and career timeline
│       ├── skills.js           # Renders 9 skill categories with interactive visual badges
│       ├── projects.js         # Renders 13 project cards with dynamic aspect ratio & backdrop blur
│       ├── certifications.js   # Renders 15 visual credential cards, interactive modal lightbox & fallbacks
│       └── advanced.js         # Interactive tools (Terminal, SQL Playground, Live Status, Radar Chart, Nav)
└── assets/
    ├── certificates/           # High-DPI JPG previews and original PDF credential documents
    ├── images/                 # Project screenshots, circuit diagrams, hardware photos, profile avatar
    └── icon/                   # SVG icons for technology chips
```

---

## 🛠️ Building, Running & Development Conventions

### Key Commands
- **Local Web Server:** Run `npx serve .` or `python -m http.server 8000` in the root directory. (Avoid opening via raw `file://` protocol to ensure ES6 module imports work without CORS restrictions).
- **Styling Updates:** Edit `style.css` (with cache busting `?v=2.x` when publishing).
- **Content Updates:** Edit `js/data.js` to modify bio, skills, projects, certifications, or employment history without touching HTML structures.
- **Interactive UI Updates:** Modify modular scripts under `js/modules/`.

### Development & Styling Rules
1. **Glassmorphism:** Use `backdrop-filter: blur(12px)` and semi-transparent backgrounds (`rgba(255, 255, 255, 0.05)` to `rgba(20, 20, 20, 0.6)`) with subtle borders (`rgba(255, 255, 255, 0.1)`).
2. **Dynamic Background Glow:** Multi-layered radial gradient orbs (`.hero-bg-orbs .orb-1`, `.orb-2`, `.orb-3`) with smooth continuous floating and breathing keyframe animations.
3. **Aspect Ratio Preservation & Anti-Pillarboxing:** Project and certificate media use `object-fit: cover`, `object-position: top`, and a blurred background duplicate (`.card-bg-blur` / `.cert-bg-blur`) to eliminate white/black dead bars on portrait assets.
4. **Lifecycle & Scrolling Stability:** AOS animations must be refreshed inside `window.addEventListener('load')` and after dynamic DOM insertion to prevent touch trapping or content clipping on mobile viewports.
5. **Robust Placeholder & Error Fallbacks:** Certificates and project images include inline `onerror` handling with visual fallback placeholders and graceful badge degradations.

---

## 🚀 Interactive Features & Engineering Demonstrations

1. **Merged Hero & Profile Dashboard:** High-density landing interface presenting title, glowing badge tags, 440+ day GitHub commit streak, live GitHub telemetry cards, and career/academic journey.
2. **Interactive Developer Console (Terminal):** Simulated bash terminal (`sannith@portfolio:~$`) supporting commands:
   - `help`: Lists all available commands.
   - `about`: Summarizes Sannith's core engineering focus and continuous coding streak.
   - `skills`: Displays backend, frontend, database, and DevOps capabilities.
   - `sudo`: Superuser security check easter egg.
   - `clear`: Resets terminal viewport.
3. **Interactive SQL Console (Playground):** Mock database engine simulating query parsing and instant SQL results for:
   - `SELECT * FROM projects WHERE type = 'Backend';`
   - `SELECT title, tech FROM projects ORDER BY date DESC;`
   - `SELECT COUNT(*) FROM projects WHERE status = 'Completed';`
4. **Live System Telemetry Monitor:** Real-time periodic status dashboard updating every 3000ms with simulated API latency (15-65ms), active database connection pools (40-50 conns), and server memory load.
5. **Technical Profile Radar Chart:** Chart.js integration visualizing core competencies across:
   - Logic & Algorithms (90%)
   - Security & Authentication (85%)
   - Database Design & Optimization (95%)
   - API Design & Protocols (88%)
   - Data Visualization (80%)
   - System Architecture (82%)
6. **Technical Problem & Deep Dive Showcase:** Case study highlighting query performance optimization (>2s unindexed query reduced to ~15ms via PostgreSQL composite indexing and materialized views).
7. **Interactive Certificate Lightbox Modal:** Full-screen modal (`#cert-lightbox-modal`) with smooth backdrop dismiss, dynamic tag rendering, and direct links to high-res PDF credentials and external verification portals.
8. **The Lab (Micro-Experiments):** Interactive demos for RegEx password validation algorithms, streaming JSON-to-CSV parsers, and stateless JWT authentication guards.

---

## 📋 Comprehensive Portfolio Content Reference

### 1. Central Profile Data (`js/data.js`)
- **Name:** P. Sannith (Pasunooti Sannith)
- **Role:** Full-Stack Engineer, Backend Architect & Data Analyst
- **Education:** B.Tech in CSE (4th Year), Kakatiya University College of Engineering & Technology (KUCET), 2023 - 2027.
- **Placement:** 10000 Coders (SRA EduTech Pvt Ltd) (Software Developer / Full Stack Intern, Starting Package: 3.0+ LPA, Offer Date: August 21, 2026).
- **Coding Streak:** 440+ continuous days of active code commits.
- **Known Languages:** Hindi (Expert), English (Intermediate), Telugu (Intermediate).

### 2. 9 Comprehensive Skill Categories
1. **Programming Languages:** TypeScript, JavaScript, Python, C++, C, Rust, Java, SQL.
2. **Frontend Technologies:** React.js (React 19), Next.js, Vite, HTML5/CSS3, Tailwind CSS (v4).
3. **Mobile Development:** React Native (CLI, Hermes engine), Flutter, TypeScript.
4. **Backend & APIs:** Node.js, Express.js, FastAPI, .NET, Server-Sent Events (SSE), RESTful APIs.
5. **Cloud & BaaS:** Supabase, Firebase, AWS (LAMP Stack, EC2, S3), Vercel, Render.
6. **Databases & Vector Stores:** PostgreSQL, SQLite3, ChromaDB, MySQL, Oracle, Microsoft SQL Server.
7. **AI & Data Science:** Prompt Engineering, AI Agent Architectures, Looping, LangChain, Groq API (Llama 3.3-70b), Google Gemini API (gemini-1.5-flash), RAG, Tableau, Excel, Data Modeling.
8. **DevOps & IT Administration:** Docker, Docker Compose, GitHub Actions, Cloudflare Tunnels, Ventoy, Custom Android ROMs & Rooting.
9. **Hardware, Electronics & IoT:** Micro-soldering (8/10), Component-level PC Diagnostics (8/10), Custom Li-ion Battery Packs (12V/48V/60V BMS), Spot Welding, USB Power Delivery, ESP8266 (NodeMCU), ESP32, Arduino, Relays/H-Bridges.

### 3. Complete Portfolio Projects (13 Showcase Systems)
1. **KUCET College Management System:** Next.js, Docker, SSE, Vercel. Role-based portal for student administration, roll number generation, timetable orchestration, and GPS attendance.
2. **Healthcare Monitoring AI Agent:** React, TypeScript, FastAPI, LangChain, Groq (Llama 3.3-70b), ChromaDB vector search for medical document RAG with emergency protocols.
3. **TODO_LIST (Solo Leveling System):** React Native 0.76 (Hermes), TypeScript, Async Storage. Gamified RPG task manager with XP, 5 skill trees, rep counters, and penalty quests.
4. **Keyboard-Combat-for-KUCE-T:** React (Vite), TypeScript, Tailwind v4, Zustand, Supabase, Express. High-stakes real-time college typing contest platform with anti-cheat duplicate prevention.
5. **MindFlow AI (Mental Stress Detector):** HTML5, Vanilla JS, Express, Gemini 1.5 Flash API, Bcrypt, JWT. Daily habit stress evaluator with AI counseling and automated PDF report generation.
6. **3D Printer Enclosure Monitor:** IoT, ESP8266 (NodeMCU), Arduino C++, DHT11, LittleFS, REST API, Wi-Fi Web Dashboard, 16x2 LCD, non-blocking firmware, audible/visual alarms, Auto-AP mode.
7. **Wireless Weightlifting Trolley:** C++, ESP32 (Wi-Fi), 6-Relay H-Bridge Array, 24V worm gear motors, SMPS, Buck converters for wireless industrial material handling.
8. **Custom High-Voltage EV & Backup Battery Packs:** 18650 Li-ion cells, Spot Welder, BMS. Built 12V (3s) home backup packs and 48V (13s) / 60V (16s) high-voltage EV scooty battery packs.
9. **Consumer Electronics Modding & Audio Engineering:** TP4056 Type-C modules, audio amplifiers, micro-soldering. Converted TV remote to rechargeable Li-ion Type-C, custom Bluetooth speakers, and earbud cell replacements.
10. **Android OS Modification & Device Spoofing:** Custom ROMs (Evolution X), Magisk/Root, OEM Unlocking on Samsung M31 to spoof Pixel 1 identifiers for unlimited cloud storage.
11. **School Billing & Inventory Management:** React 19, TypeScript, Tailwind, Node.js, Express, SQLite3, Multer. Full-stack localized billing, student directory, and inventory control.
12. **NCC-Air-Wing Portal:** React, Vite, TypeScript, Supabase. Cadet profile management, live attendance updates, and administrative content control for achievements/gallery.
13. **EcoHaven:** TypeScript, Firebase. Sustainable second-hand marketplace prototype with category filters and product lifecycle state management.

### 4. 15 Verified Credentials, Certifications & Badges
1. **Flutter & REST APIs Full-Stack Mobile Bootcamp:** FutureSkills Prime 2.0 / C-DAC Mohali (2026).
2. **Data Analytics Graduate Certificate:** PI LABS Commons Research Foundation (Aug - Nov 2025).
3. **Scalable WordPress Hosting with LAMP Stack on AWS:** Orbit Learning (May - Jun 2025).
4. **Digital Citizen Summit (DCS) 2024 Certificate of Appreciation:** CNX Asia-Pacific / T-Hub / DEF (2024).
5. **Python Coder Badge:** Kaggle (Nov 2025).
6. **Kaggle Community Member Recognition:** Kaggle (Dec 2025).
7. **Kaggle Code Forker Badge:** Kaggle (2025).
8. **Kaggle Vampire Badge:** Kaggle (2025).
9. **Google Cloud Innovator & Premium Tier Member:** Google Developer Program (Jan 2026, Jul 2024).
10. **5-Day AI Agents Intensive Course:** Google / Kaggle (Jul 2026).
11. **Agentic AI Virtual Internship:** Brain O Vision (Jan 2026).
12. **Agentic AI Saksham Program:** NASSCOM / KUCE&T (Nov 2025).
13. **Cybersecurity Analyst Job Simulation:** TATA / Forage.
14. **Data Analytics Job Simulation:** Deloitte / Forage (Nov 2025).
15. **Data Science & Analytics Internship Offer:** Proxenix (Dec 2025).
16. **WebXcelerate Project Completion Certificate:** Poditivity / C-iRE KITSW (March 2025).

---

## 📜 Full Git Commit & Enhancement Log

| Commit | Description | Key Changes & Files |
|---|---|---|
| **4028598** | *Yoooo Certificate also added* | Ingested high-resolution certificate images and PDF credential files for AWS Hosting, Brain O Vision, Deloitte, DCS 2024, Kaggle, PI LABS, Proxenix, TATA, and WebXcelerate. Updated `js/data.js` with comprehensive metadata and links. |
| **246a1b3** | *IKWID* | Replaced badge items with large visual certificate cards, integrated interactive Lightbox Modal (`#cert-lightbox-modal`), dynamic placeholders, and added 3D Printer Enclosure Monitor IoT project and Flutter Bootcamp. Added navigation links. |
| **7e95133** | *Fix scrolling issue* | Resolved AOS lifecycle mismatch, mobile navigation touch trapping, and body overflow lock conflicts in `js/main.js` and `js/modules/advanced.js`. |
| **ef9169e / 2276c38** | *Mobile view & UI polish* | Overhauled CSS media queries, responsive grids, card padding, and mobile drawer accessibility. |
| **943e127 / 3ed3f95** | *Hero Glowing Orbs & Typography* | Integrated dynamic CSS floating radial orbs (`.hero-bg-orbs`), Outfit font family, cache busting (`style.css?v=2.0`), and streamlined hero CTA buttons. |
| **fa78b9f / a9ddddc** | *Merged Hero/About & Performance* | Consolidated Hero and About into a high-density dashboard, eliminated heavy video asset in favor of performant CSS keyframes, and added GitHub stats cards. |
| **c090d07 / f6e18d0** | *Data Sync & Cleanup* | Synchronized `js/data.js` with comprehensive technical profile, purged legacy one-off helper scripts. |
| **aa51f85 / 857ec99** | *ES6 Architecture & Project Cards* | Refactored monolith `script.js` into ES6 modules (`js/modules/`), built full-bleed image handling with blurred ambient backdrops for 13 projects. |
| **c797010 / 84bd451** | *Interactive Features* | Added SQL Console, Terminal bash emulator, Live System Telemetry, Radar chart, and The Lab micro-experiments. |

---

## 💡 Quick Tips for Future Maintenance
- **Adding a Project:** Add a new object entry to `profileData.projects` in `js/data.js` with `title`, `techStack`, `description`, `features`, `github`, and `image`. The dynamic renderer automatically creates the card and handles formatting.
- **Adding a Certificate:** Place the preview image in `assets/certificates/` and PDF document in `assets/certificates/`. Add the entry to `profileData.certifications` in `js/data.js`.
- **Modifying Terminal Commands:** Add key-value pairs to the `commands` object inside `js/modules/advanced.js`.
