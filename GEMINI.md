# Sannith's Portfolio - Project Instructions

## Project Overview
This project is a high-performance, interactive personal portfolio website for **P. Sannith**, a Backend Engineer and Data Analyst. Unlike standard portfolios, this site focuses on technical depth and interactive demonstrations of backend and data skills.

### Main Technologies
- **Core:** HTML5, CSS3 (Vanilla), JavaScript (Vanilla)
- **Libraries:**
  - [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) - For reveal animations.
  - [Chart.js](https://www.chartjs.org/) - For the Technical Profile Radar Chart.
  - [Mermaid.js](https://mermaid.js.org/) - For rendering Database Schemas (ERDs).
  - [Boxicons](https://boxicons.com/) & [Font Awesome](https://fontawesome.com/) - For iconography.

### Architecture
The project is a single-page application (SPA) style static website. It features a background video and multiple interactive "Next-Level" sections designed to showcase technical maturity.

## Building and Running
As a static web project, there is no build step required.

### Key Commands
- **Run Locally:** Open `index.html` in any modern web browser.
- **Development:** Edit `style.css` for styling updates and `script.js` for interactive logic.
- **Testing:** Manually verify responsiveness using browser DevTools (F12) across Mobile, Tablet, and Desktop breakpoints.

## Development Conventions

### Styling
- **Glassmorphism:** Use `backdrop-filter: blur()` and semi-transparent backgrounds (`rgba`) for cards and buttons.
- **Responsiveness:** Always use media queries for `@media (max-width: 768px)` and `@media (min-width: 1024px)` to ensure layout stability.
- **Animations:** Use `data-aos` attributes for scroll-triggered entry effects.

### Interactive Components
- **Terminal (Console):** Logic is handled in `script.js`. New commands can be added to the `commands` object.
- **SQL Playground:** Uses a mock database object in `script.js` to simulate SQL query execution.
- **Live Status:** A `setInterval` function in `script.js` updates system metrics every 3 seconds to simulate a live backend environment.

### Technical Visualization
- **Mermaid Diagrams:** Ensure `mermaid.initialize` in the `<head>` remains configured for high legibility in dark mode (use the `base` theme with custom variables).
- **Radar Chart:** Data points in `script.js` should reflect current proficiency levels across the 6 core backend/data metrics.

## Key Files
- `index.html`: Main structure and content.
- `style.css`: Custom styles, including advanced feature UIs and responsive overrides.
- `script.js`: All interactive logic (Nav, Terminal, SQL, Charts).
- `README.md`: High-level summary for repository hosting.
