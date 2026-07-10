# Sannith's Portfolio

A high-performance, interactive personal portfolio website for **P. Sannith**, a Full-Stack Engineer and Data Analyst with a profound focus on Backend Architecture, Next.js, and Agentic AI workflows. This project showcases Sannith's skills, extensive projects (ranging from college management systems to IoT and AI), and professional background.

## Features

- **Hero Section**: A visually engaging introduction with dynamic background.
- **Interactive Developer UI**: Includes a mocked Developer Console (Terminal), an Interactive SQL Playground, and a Live System Status dashboard.
- **About Me**: Detailed professional background, academic journey, and timeline.
- **Skills Portfolio**: Deep dive into technical skills including Backend, AI/ML, Cloud/DevOps, and Hardware technologies visualized with a radar chart.
- **Projects**: Showcase of 13 major projects with dynamic layout handling for various image aspect ratios.
- **Certifications**: Highlights Google, Kaggle, and other professional badges.

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6 Modules)
- **Architecture**: Modular static SPA (Single Page Application)
- **Libraries**:
  - [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) - For reveal animations.
  - [Chart.js](https://www.chartjs.org/) - For the Technical Profile Radar Chart.
  - [Mermaid.js](https://mermaid.js.org/) - For rendering Database Schemas.
- **Styling**: Vanilla CSS featuring modern aesthetics, glassmorphism, and responsive (mobile-first) design elements.

## Project Structure

```text
portfolio/
├── assets/             # Images, icons, and videos
│   ├── icon/           # SVG icons for skills
│   └── images/         # Project images and background video
├── js/                 # Modular JavaScript logic
│   ├── modules/        # Render scripts (projects.js, about.js, advanced.js, etc.)
│   ├── data.js         # Centralized data object for all portfolio content
│   └── main.js         # Main orchestrator script
├── index.html          # Main HTML skeleton
├── style.css           # Custom styling and responsive overrides
├── README.md           # Project documentation
└── GEMINI.md           # Instructions for AI assistants
```

## How to Run

Because this project utilizes ES6 Modules (`import`/`export`), it **cannot** be run directly via the `file:///` protocol due to browser CORS policies.

1. Clone the repository or download the source code.
2. Serve the directory using a local web server:
   - **VS Code**: Use the "Live Server" extension.
   - **Python**: Run `python -m http.server 8000` in the terminal.
   - **Node.js**: Run `npx serve .` in the terminal.
3. Open your browser to the local URL provided (e.g., `http://localhost:8000`).

## Contact

- **Email**: sunnysunnit@gmail.com
- **GitHub**: [Sannith-Hack](https://github.com/Sannith-Hack)
- **LinkedIn**: [Sannith Pasunooti](https://www.linkedin.com/in/sannith-pasunooti-183b86302/)
- **Instagram**: [@sunebhai_mpc](https://www.instagram.com/sunebhai_mpc/)
