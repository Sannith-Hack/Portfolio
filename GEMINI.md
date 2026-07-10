# Sannith's Portfolio - Project Instructions

## Project Overview
This project is a high-performance, interactive personal portfolio website for **P. Sannith**, a Full-Stack Engineer and Data Analyst with a focus on Backend Architecture, Next.js, and Agentic AI workflows. The portfolio emphasizes technical depth and interactive demonstrations of backend and data skills.

### Main Technologies
- **Core:** HTML5, CSS3 (Vanilla), JavaScript (ES6 Modules)
- **Libraries:**
  - [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) - For reveal animations.
  - [Chart.js](https://www.chartjs.org/) - For the Technical Profile Radar Chart.
  - [Mermaid.js](https://mermaid.js.org/) - For rendering Database Schemas (ERDs).
  - [Boxicons](https://boxicons.com/) & [Font Awesome](https://fontawesome.com/) - For iconography.

### Architecture
The project is a modular single-page application (SPA) style static website. It separates data from logic and presentation by utilizing ES6 JavaScript modules. Content is centralized in a data object and dynamically rendered, ensuring the codebase is easily updatable, scalable, and developer-friendly.

## Building and Running
As a static web project, there is no build step required. However, because it utilizes ES6 modules (`import`/`export`), it should ideally be run via a local server (e.g. VS Code Live Server, or Python's `http.server`) rather than simply opening the file with a `file://` protocol to avoid CORS policies blocking module loading.

### Key Commands
- **Run Locally:** Use a local web server (e.g. `npx serve .` or `python -m http.server`) in the root directory.
- **Development:** Edit `style.css` for styling updates. Modify `js/data.js` to seamlessly update all text/data content without touching HTML. Update specific renderers in `js/modules/` for structural changes.
- **Testing:** Verify responsiveness using DevTools (F12) across Mobile, Tablet, and Desktop breakpoints.

## Development Conventions

### Styling
- **Glassmorphism:** Use `backdrop-filter: blur()` and semi-transparent backgrounds (`rgba`) for cards and buttons.
- **Responsiveness:** Always use media queries for `@media (max-width: 768px)` and `@media (min-width: 1024px)` to ensure layout stability. Elements are engineered to gracefully scale with `auto` heights and `word-wrap` to prevent mobile overflows.
- **Image Aspect Ratios:** Cards use `height: auto` and `object-fit: cover` with `object-position: top` to fluidly handle both portrait and landscape screenshots while keeping them 100% wide. Flexbox ensures the bottom action buttons align symmetrically across different row heights.
- **Animations:** Use `data-aos` attributes for scroll-triggered entry effects.

### Interactive Components
- **Data Centralization:** `js/data.js` acts as the single source of truth for the entire portfolio's content (Experience, Skills, Projects, Certifications).
- **Modular Renderers:** Individual scripts inside `js/modules/` handle rendering distinct sections (e.g. `projects.js`, `skills.js`), while `advanced.js` deals with the interactive UIs.
- **Terminal (Console):** Logic is handled in `js/modules/advanced.js`. New commands can be added to the `commands` object.
- **SQL Playground:** Uses a mock database object in `js/modules/advanced.js` to simulate SQL query execution.
- **Live Status:** Updates system metrics every 3 seconds to simulate a live backend environment (`js/modules/advanced.js`).

## Key Files
- `index.html`: Main structure and content skeleton.
- `style.css`: Custom styles, including advanced feature UIs, glassmorphism, and responsive (mobile-first) overrides.
- `js/main.js`: Main orchestrator script that initializes all module rendering and interactions.
- `js/data.js`: The central data object holding the user's professional profile, projects, and skills.
- `js/modules/`: Directory containing modular scripts handling specific UI features and renders (`about.js`, `projects.js`, `skills.js`, `certifications.js`, `advanced.js`).
- `README.md`: High-level summary for repository hosting.
