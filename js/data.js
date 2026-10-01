// ==============================================================================
// MASTER TECHNICAL & PROFESSIONAL DATA CONTEXT — OCTOBER 2026 REFRESH
// Primary Source of Truth: INFO.md (Audited October 2026)
// Candidate: Pasunooti Sannith (P. Sannith)
// ==============================================================================

export const profileData = {
    name: "Pasunooti Sannith",
    shortName: "P. Sannith",
    title: "Full-Stack Engineer & AI Systems Developer",
    roles: [
        "Full-Stack Engineer",
        "AI & Agentic Systems Developer",
        "Backend & Distributed Systems Architect",
        "Mobile & IoT Hardware Engineer"
    ],
    status: {
        availability: "Actively Seeking Opportunities",
        badge: "Open to Work",
        headline: "Open to Full-Time Software Engineer, Full-Stack, Backend & AI Roles",
        details: "Graduating / graduated B.Tech CSE (8.5 CGPA) from Kakatiya University. Available immediately for software engineering roles.",
        campusPlacement: {
            company: "BrightLine Technologies",
            role: "Associate Software Engineer",
            type: "Campus Placement / Selection Letter",
            note: "Selected through Kakatiya University campus placement (Letter of Intent received); actively seeking immediate full-time software engineering opportunities."
        }
    },
    contact: {
        email: "sunnysunnit@gmail.com",
        phone: "+91 7498461916",
        location: "Warangal / Hyderabad, Telangana, India",
        github: "https://github.com/Sannith-Hack",
        linkedin: "https://www.linkedin.com/in/sannith-pasunooti-183b86302/",
        youtube: "https://www.youtube.com/@Ronnyroy",
        instagram: "https://www.instagram.com/sunebhai_mpc/"
    },
    executiveSummary: "Passionate Full-Stack Engineer and AI Systems Developer with a B.Tech in Computer Science & Engineering from Kakatiya University (8.5 CGPA). Over 450+ continuous days of engineering contributions with deep expertise in modern React/Next.js architectures, high-performance Node.js/FastAPI backends, distributed SQL/NoSQL databases, autonomous Agentic AI workflows (LangChain, Groq, Gemini), native mobile development (Kotlin Jetpack Compose, React Native), and embedded IoT engineering. Proven ability to take mission-critical systems from zero to production—having architected the KUCET College Management System (serving 300+ students with 665 automated unit tests), the AegisPredict money-mule detection engine (SIH26184 Internal Finalist), the GPS-CAM Telangana Display Monitoring System (deployed native Android app with mock location detection), and the Anna Canteen TV Monitoring System across 204 locations in Andhra Pradesh.",
    metrics: {
        codingStreak: "450+",
        projectsCount: "23",
        certificationsCount: "19+",
        cgpa: "8.5 / 10",
        unitTests: "665",
        productionAdmissions: "303+"
    },
    education: [
        {
            degree: "B.Tech in Computer Science and Engineering",
            institution: "Kakatiya University College of Engineering and Technology (KUCE&T), Warangal",
            period: "2022 – 2026",
            badge: "8.5 CGPA",
            icon: "fas fa-graduation-cap",
            details: "Core Focus: Distributed Systems, Operating Systems, Database Management, Algorithms, AI & Machine Learning. Lead student organizer and platform architect for KU Fest 2026."
        },
        {
            degree: "Intermediate Education (MPC - Math, Physics, Chemistry)",
            institution: "Alphores Junior College",
            period: "2020 – 2022",
            badge: "Completed",
            icon: "fas fa-atom",
            details: "Intensive coursework in analytical mathematics, physical mechanics, electrochemistry, and algorithmic foundations."
        },
        {
            degree: "Secondary School Certificate (SSC)",
            institution: "St. Johns High School",
            period: "Passed 2020",
            badge: "10.0 GPA",
            icon: "fas fa-award",
            details: "Graduated with perfect academic distinction (10.0 / 10.0 CGPA)."
        }
    ],
    languages: [
        { name: "Hindi", proficiency: "Native / Fluent", flag: "🇮🇳" },
        { name: "English", proficiency: "Professional Working", flag: "🌐" },
        { name: "Telugu", proficiency: "Conversational", flag: "🗣️" }
    ],
    interests: [
        "Distributed Systems & Relational / Graph DB Optimization",
        "Autonomous Agentic AI, RAG & LLM Tool Orchestration",
        "High-Concurrency WebSockets, Real-time Multiplayer & SSE",
        "Native Android Engineering (Kotlin Jetpack Compose, SDK 35)",
        "Micro-soldering, Hardware Reverse Engineering & Li-ion BMS Design",
        "Custom Linux Kernel & Android OS Modding (Magisk, AOSP, Hyprland)"
    ],

    // ==============================================================================
    // CORE ENGINEERING DOMAINS
    // ==============================================================================
    engineeringDomains: [
        {
            id: "fullstack",
            title: "Full-Stack & Distributed Web",
            icon: "fas fa-layer-group",
            description: "Architecting end-to-end scalable web applications using Next.js 16 (App Router, RSC), React 19, TypeScript, and state-of-the-art caching.",
            technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Zustand", "Socket.IO"]
        },
        {
            id: "ai",
            title: "AI & Agentic Systems",
            icon: "fas fa-brain",
            description: "Building production RAG pipelines, autonomous multi-step agents, graph-based ML fraud detectors, and multimodal clinical diagnostic suites.",
            technologies: ["LangChain", "Groq Llama 3.3", "Google Gemini Flash", "ChromaDB", "Neo4j Graph AI", "XGBoost"]
        },
        {
            id: "backend",
            title: "Backend & Database Engineering",
            icon: "fas fa-server",
            description: "Developing resilient REST APIs, microservices with Dependency Injection & Repository patterns, and optimized relational schemas.",
            technologies: ["Node.js 20+", "Express", "FastAPI", "PostgreSQL", "MySQL / TiDB", "Supabase RLS", "Drizzle ORM"]
        },
        {
            id: "mobile",
            title: "Mobile App Development",
            icon: "fas fa-mobile-alt",
            description: "Building native Android apps with Kotlin Jetpack Compose and cross-platform apps with React Native Hermes & Flutter.",
            technologies: ["Kotlin", "Jetpack Compose", "React Native 0.76", "Flutter 3.x", "Retrofit2", "CameraX"]
        },
        {
            id: "data",
            title: "Data Analytics & ML",
            icon: "fas fa-chart-line",
            description: "Executing clinical predictive modeling, automated OCR parsing, spatial Haversine clustering, and SHAP explainability.",
            technologies: ["Python", "Pandas", "Scikit-Learn", "SHAP", "DBSCAN", "Matplotlib / Seaborn"]
        },
        {
            id: "iot",
            title: "Embedded Systems & IoT Hardware",
            icon: "fas fa-microchip",
            description: "Designing non-blocking C++ microcontrollers, environmental telemetry sensors, and custom high-voltage lithium battery packs with BMS.",
            technologies: ["ESP8266 NodeMCU", "ESP32", "Arduino C++", "I2C / SPI", "18650 Li-ion BMS", "Micro-soldering"]
        },
        {
            id: "cloud",
            title: "Cloud Infrastructure & DevOps",
            icon: "fas fa-cloud",
            description: "Containerizing services with multi-container Docker Compose, continuous integration, and cloud-native database clustering.",
            technologies: ["Docker", "Docker Compose", "AWS (EC2, S3)", "TiDB Cloud", "Vercel", "Git & GitHub Actions"]
        },
        {
            id: "security",
            title: "Cybersecurity & Linux Systems",
            icon: "fas fa-shield-alt",
            description: "Linux system administration, Arch Linux / Hyprland configuration, Android OS custom kernel compiling, and JWT role-based security.",
            technologies: ["Arch Linux", "Bash Scripting", "Magisk / Zygisk", "AOSP Modding", "JWT RBAC", "Network Telemetry"]
        }
    ],

    // ==============================================================================
    // TECHNICAL SKILLS MATRIX (Accurate, Categorized, No Fake Percentages)
    // ==============================================================================
    skills: [
        {
            category: "Core Languages",
            icon: "fas fa-code",
            accent: "cyan",
            items: [
                { name: "JavaScript (ES2024)", icon: "assets/icon/javascript.svg", level: "Production" },
                { name: "TypeScript", icon: "assets/icon/typescript.svg", level: "Production" },
                { name: "Python 3.12+", icon: "fab fa-python", level: "Production" },
                { name: "SQL (PostgreSQL/MySQL)", icon: "fas fa-database", level: "Advanced" },
                { name: "C / C++", icon: "fas fa-microchip", level: "Proficient" },
                { name: "Kotlin", icon: "fab fa-android", level: "Native Android" },
                { name: "Java", icon: "assets/icon/java.svg", level: "Proficient" },
                { name: "Dart", icon: "fas fa-feather-alt", level: "Bootcamp Cert" },
                { name: "Bash / Shell", icon: "fas fa-terminal", level: "Advanced" },
                { name: "HTML5 & CSS3", icon: "assets/icon/html5.svg", level: "Expert" }
            ]
        },
        {
            category: "Backend & Microservices",
            icon: "fas fa-server",
            accent: "indigo",
            items: [
                { name: "Node.js 20+", icon: "assets/icon/Node.js.svg", level: "Core Runtime" },
                { name: "Express.js", icon: "fas fa-network-wired", level: "Production" },
                { name: "FastAPI", icon: "fas fa-bolt", level: "High Throughput" },
                { name: "RESTful Architecture", icon: "fas fa-exchange-alt", level: "Standard" },
                { name: "Server-Sent Events (SSE)", icon: "fas fa-stream", level: "Realtime" },
                { name: "Repository & DI Patterns", icon: "fas fa-cubes", level: "Clean Arch" },
                { name: "Role-Based Access Control", icon: "fas fa-user-shield", level: "Enterprise" },
                { name: "WebSockets / Socket.IO", icon: "fas fa-satellite-dish", level: "Realtime" }
            ]
        },
        {
            category: "Frontend & UI Systems",
            icon: "fas fa-desktop",
            accent: "purple",
            items: [
                { name: "React 19 / 18", icon: "assets/icon/react.svg", level: "Production" },
                { name: "Next.js 16 (App Router)", icon: "fas fa-layer-group", level: "Production" },
                { name: "Tailwind CSS v4 / v3", icon: "assets/icon/css3.svg", level: "Expert" },
                { name: "Zustand & Context API", icon: "fas fa-project-diagram", level: "State Mgmt" },
                { name: "Vite Build Engine", icon: "fas fa-fighter-jet", level: "Modern Tooling" },
                { name: "Responsive UI/UX", icon: "fas fa-mobile-alt", level: "Mobile-First" },
                { name: "Three.js / WebGL", icon: "fas fa-cube", level: "3D Graphics" },
                { name: "HTML5 Canvas API", icon: "fas fa-paint-brush", level: "Interactive" }
            ]
        },
        {
            category: "Databases & Storage",
            icon: "fas fa-database",
            accent: "emerald",
            items: [
                { name: "PostgreSQL", icon: "assets/icon/postgresql.svg", level: "Relational Core" },
                { name: "MySQL", icon: "assets/icon/mysql.svg", level: "Relational Core" },
                { name: "TiDB Cloud (Distributed)", icon: "fas fa-cloud", level: "Serverless SQL" },
                { name: "Supabase (Postgres RLS)", icon: "assets/icon/supabase.svg", level: "Auth & Realtime" },
                { name: "Drizzle ORM (22 Migrations)", icon: "fas fa-code-branch", level: "Type-safe SQL" },
                { name: "SQLite3", icon: "fas fa-hdd", level: "Embedded" },
                { name: "ChromaDB", icon: "fas fa-vector-square", level: "Vector Store" },
                { name: "Neo4j Graph Database", icon: "fas fa-share-alt", level: "Graph AI" },
                { name: "Redis", icon: "fas fa-memory", level: "Cache & Queue" }
            ]
        },
        {
            category: "AI, Agents & Data Science",
            icon: "fas fa-brain",
            accent: "rose",
            items: [
                { name: "LangChain Orchestration", icon: "fas fa-link", level: "Agentic RAG" },
                { name: "Groq Cloud (Llama 3.3-70B)", icon: "fas fa-microchip", level: "Sub-second LLM" },
                { name: "Google Gemini 2.0 / Flash", icon: "fab fa-google", level: "Multimodal AI" },
                { name: "Vector Embeddings & RAG", icon: "fas fa-search", level: "Production RAG" },
                { name: "Scikit-Learn & XGBoost", icon: "fas fa-chart-line", level: "ML Pipelines" },
                { name: "TensorFlow / Keras", icon: "fas fa-network-wired", level: "EfficientNetB0" },
                { name: "SHAP Explainability", icon: "fas fa-lightbulb", level: "Clinical AI" },
                { name: "DBSCAN Spatial Clustering", icon: "fas fa-map-marker-alt", level: "Geospatial ML" }
            ]
        },
        {
            category: "Mobile Engineering",
            icon: "fas fa-mobile-screen",
            accent: "amber",
            items: [
                { name: "Kotlin Jetpack Compose", icon: "fab fa-android", level: "Native SDK 35" },
                { name: "React Native 0.76 (Hermes)", icon: "assets/icon/react.svg", level: "Cross-Platform" },
                { name: "Flutter 3.x", icon: "fas fa-feather-alt", level: "C-DAC Certified" },
                { name: "CameraX & FusedLocation", icon: "fas fa-camera", level: "Native Hardware" },
                { name: "Retrofit2 & Room DB", icon: "fas fa-exchange-alt", level: "Android Architecture" },
                { name: "Mock GPS Anti-Spoofing", icon: "fas fa-shield-alt", level: "Security Protocol" }
            ]
        },
        {
            category: "Cloud, DevOps & Systems",
            icon: "fas fa-cloud",
            accent: "blue",
            items: [
                { name: "Docker & Multi-Container", icon: "assets/icon/docker.svg", level: "6 Containers" },
                { name: "Docker Compose", icon: "fas fa-boxes", level: "Orchestration" },
                { name: "Git & GitHub Actions", icon: "assets/icon/github.svg", level: "450+ Day Streak" },
                { name: "AWS (EC2, S3, RDS)", icon: "fab fa-aws", level: "LAMP Certified" },
                { name: "Arch Linux & Hyprland", icon: "fab fa-linux", level: "Daily Driver OS" },
                { name: "Playwright Automation", icon: "fas fa-robot", level: "CDP Headless" }
            ]
        },
        {
            category: "Hardware, IoT & Battery Tech",
            icon: "fas fa-bolt",
            accent: "teal",
            items: [
                { name: "ESP8266 & ESP32 (C++)", icon: "fas fa-microchip", level: "Embedded Firmware" },
                { name: "Sensors (DHT11, HW-61, I2C)", icon: "fas fa-thermometer-half", level: "Hardware Telemetry" },
                { name: "18650/21700 Battery Packs", icon: "fas fa-battery-full", level: "12V/48V/60V BMS" },
                { name: "Spot Welding & Nickel Strips", icon: "fas fa-fire", level: "Precision Hardware" },
                { name: "Micro-soldering & SMD Repair", icon: "fas fa-wrench", level: "Hardware Modding" },
                { name: "Android Kernel / Magisk", icon: "fab fa-android", level: "Custom ROMs" }
            ]
        }
    ],

    // ==============================================================================
    // VERIFIED PROJECTS (All 23 Audited Systems from INFO.md)
    // ==============================================================================
    projects: [
        {
            id: "kucet-cms",
            title: "KUCET College Management System",
            badge: "Production ERP • 665 Tests",
            category: "fullstack",
            categoryLabel: "Enterprise Full-Stack",
            featured: true,
            techStack: "Next.js 16 (RSC), Node.js 20, MySQL / TiDB Cloud, Drizzle ORM (22 Migrations), Docker (6 Containers), Socket.IO, Redis",
            image: "assets/images/home.png",
            description: "Institutional Enterprise College ERP engineered for Kakatiya University College of Engineering and Technology (KUCE&T). Features 5 role-based portals (Superadmin, Principal, Student, Faculty, Staff) with 303 verified admissions finalized in production.",
            features: "Architected 6 multi-stage Docker containers with Redis caching and Socket.IO real-time event broadcasting. Built 78 comprehensive test suites containing 665 automated unit and integration tests. Includes custom admissions workflow, fee tracking, semester grading, and TiDB Cloud distributed MySQL clustering.",
            github: "https://github.com/Sannith-Hack",
            date: "2025 – 2026"
        },
        {
            id: "aegispredict",
            title: "AegisPredict: Graph AI Fraud Detection",
            badge: "SIH26184 Finalist • Graph AI",
            category: "ai",
            categoryLabel: "AI & Graph Analytics",
            featured: true,
            techStack: "Neo4j Graph DB, Python FastAPI, XGBoost, LSTM Neural Networks, DBSCAN Haversine Clustering, Scikit-learn",
            image: "assets/images/MindFlow AI.png",
            description: "Smart India Hackathon (SIH26184) internal finalist solution for tracing complex money-mule networks and predicting physical cash-out ATM locations before fraudulent withdrawals occur.",
            features: "Constructed deep graph traversal algorithms across Neo4j to identify synthetic identity rings and mule layering up to 5 hops deep. Combined transaction velocity models with DBSCAN geospatial clustering to predict cash-out ATM clusters within a 90-minute operational interception window.",
            github: "https://github.com/Sannith-Hack",
            date: "2026"
        },
        {
            id: "gps-cam",
            title: "Telangana Display Monitoring (GPS-CAM / T-DDMS)",
            badge: "Deployed Native Android • SDK 35",
            category: "mobile",
            categoryLabel: "Native Mobile & Government System",
            featured: true,
            techStack: "Kotlin, Jetpack Compose, CameraX API, Google Play Fused Location, Material Design 3, Signed APK v1.0.0",
            image: "assets/images/TODO.png",
            description: "Official Android monitoring application engineered for the Telangana Government to authenticate, inspect, and monitor public government display boards, hoards, and tenders across all 33 districts.",
            features: "Enforces strict anti-spoofing protocols by detecting and rejecting mock location providers. Implements custom CameraX image capture with real-time GPS coordinate watermarking, bearing calculations, and tamper-resistant cryptographic payload generation for state municipal audit compliance.",
            github: "https://github.com/Sannith-Hack",
            date: "2026"
        },
        {
            id: "anna-canteen",
            title: "Anna Canteen TV Monitoring System",
            badge: "State-wide AP Deployment • 204 Centers",
            category: "fullstack",
            categoryLabel: "Real-time Telemetry & Audit",
            featured: true,
            techStack: "React 18, Vite, Supabase PostgreSQL, Row-Level Security (RLS), Realtime WebSockets, Automated DB Triggers",
            image: "assets/images/Dashboard - Social Media Analytics.jpg",
            description: "Real-time state-wide display and infrastructure monitoring platform tracking public canteen television screens, live streaming status, and operational metrics across 204 canteen centers in 25 Andhra Pradesh districts.",
            features: "Utilizes Supabase Postgres Realtime event streams and automated audit triggers to track equipment uptime, TV screen power state, and district-level operational compliance without requiring high-polling server overhead.",
            github: "https://github.com/Sannith-Hack",
            date: "2025"
        },
        {
            id: "hecar",
            title: "HECAR: Clinical Diagnostic & Stroke Predictor",
            badge: "Dual UI • Streamlit & CustomTkinter",
            category: "ai",
            categoryLabel: "Clinical AI & Diagnostics",
            featured: true,
            techStack: "Python, Streamlit Cloud, CustomTkinter (8 GUI Screens), XGBoost Classifier, PDF OCR Pipeline, SHAP Explainability",
            image: "assets/images/img.jpg",
            description: "Clinical diagnostic decision-support system deployed online at sirwork.streamlit.app with a standalone 8-screen offline desktop GUI for low-connectivity rural health clinics.",
            features: "Ingests raw Tricog and Bhageerath ECG diagnostic PDFs, extracts key electrophysiological parameters via regex OCR pipelines, and fuses them with patient vitals to predict 10-year stroke and Coronary Artery Disease (CAD) risk with full SHAP feature importance attribution.",
            github: "https://github.com/Sannith-Hack",
            date: "2025 – 2026"
        },
        {
            id: "zestbite",
            title: "ZestBite: Food Delivery Ecosystem",
            badge: "Stateless Backend • DI & Repository",
            category: "backend",
            categoryLabel: "Distributed Microservices & Mobile",
            featured: true,
            techStack: "Node.js 20, Express, Dependency Injection, Next.js Admin Portal, Native Java Android App (MVVM, Retrofit2, Room)",
            image: "assets/images/Cleveroad.jpg",
            description: "Complete 3-tier food ordering and restaurant management platform with a decoupled stateless Express backend, responsive Next.js restaurant dashboard, and high-performance native Android customer mobile client.",
            features: "Engineered clean software architecture adhering to Dependency Injection and Repository patterns for zero-leakage business logic. Includes JWT authentication, optimistic client caching with Room DB, and live order state machine transitions.",
            github: "https://github.com/Sannith-Hack",
            date: "2025 – 2026"
        },
        {
            id: "ecg-ml",
            title: "AI-Powered ECG Analysis Platform",
            badge: "Deep Learning • FastAPI & React 19",
            category: "ai",
            categoryLabel: "Computer Vision & Medical ML",
            featured: true,
            techStack: "FastAPI, TensorFlow / Keras, EfficientNetB0, React 19 SPA, MD5 Image Deduplication, Tailwind CSS v4",
            image: "assets/images/MindFlow AI.png",
            description: "Web platform for instantaneous cardiac arrhythmia classification from 12-lead ECG paper trace images, classifying rhythms into Normal Sinus, Atrial Fibrillation, Myocardial Infarction, and Ventricular Ectopy.",
            features: "Trained transfer-learned EfficientNetB0 convolutional neural networks with custom image pre-processing (deskewing, contrast normalization). Utilizes MD5 hash verification to deduplicate image uploads and prevent duplicate model inferences.",
            github: "https://github.com/Sannith-Hack",
            date: "2025"
        },
        {
            id: "healthcare-ai",
            title: "Healthcare Monitoring AI Agent (Agentic RAG)",
            badge: "Autonomous Agent • ChromaDB & Groq",
            category: "ai",
            categoryLabel: "Agentic AI & Medical NLP",
            featured: true,
            techStack: "FastAPI, LangChain, Groq Cloud (Llama 3.3-70B), ChromaDB, HuggingFace Embeddings, Pydantic V2",
            image: "assets/images/healthcare-ai-agent.png",
            description: "Autonomous agentic medical monitoring system that evaluates patient laboratory reports, vitals, and prescription histories to deliver contextualized clinical summaries with hard-coded emergency guardrails.",
            features: "Combines dense vector retrieval via ChromaDB with LangChain dynamic tool-calling. Features sub-500ms inference times powered by Groq Llama 3.3-70B and autonomous triage escalation triggers for critical patient metrics.",
            github: "https://github.com/Sannith-Hack",
            date: "2025"
        },
        {
            id: "keyboard-combat",
            title: "Keyboard Combat for KUCE-T",
            badge: "KU Fest 2026 Official Tournament",
            category: "fullstack",
            categoryLabel: "Real-time Multiplayer Gaming",
            featured: true,
            techStack: "React, Vite, Tailwind CSS v4, Zustand, Supabase Realtime Channels, Node.js / Express API, Postgres",
            image: "assets/images/Keyboard-Combat.png",
            description: "High-speed real-time competitive typing platform engineered specifically for Kakatiya University's technical fest (KU Fest 2026), hosting live multiplayer typing battles under extreme concurrent campus loads.",
            features: "Achieved sub-100ms real-time typing synchronization via Supabase Realtime broadcast channels. Implemented anti-cheat keystroke verification, live spectating leaderboards, and zero-latency WPM/accuracy telemetry calculations.",
            github: "https://github.com/Sannith-Hack",
            date: "2026"
        },
        {
            id: "3d-printer-monitor",
            title: "3D Printer Environmental Safety Monitor",
            badge: "IoT Production Hardware • Non-blocking C++",
            category: "iot",
            categoryLabel: "Embedded Systems & Safety IoT",
            featured: true,
            techStack: "ESP8266 NodeMCU, Non-blocking Arduino C++, 16x2 I2C LCD, HW-61 Sensor, Logic Shifters, LittleFS, Active Buzzer D5",
            image: "assets/images/3d-printer-enclosure-monitor.jpg",
            description: "Physical industrial-grade environmental monitoring unit mounted to a 3D printer enclosure to prevent thermal runaway, detect volatile emissions, and trigger active hardware alarms.",
            features: "Wrote clean non-blocking Arduino C++ utilizing `millis()` state scheduling without blocking delays. Features dual-mode LittleFS web dashboard with PROGMEM emergency flash fallback, active piezo alarm on pin D5, and tactile mute toggle on D6.",
            github: "https://github.com/Sannith-Hack",
            date: "2025"
        },
        {
            id: "kucet-tournaments",
            title: "KUCET College Event & Tournament Engine",
            badge: "Campus Production • High Concurrency",
            category: "fullstack",
            categoryLabel: "Enterprise Event Architecture",
            featured: true,
            techStack: "React 19, Node.js Express, MySQL (Isolated experiment_college_db), Server-Authoritative Timers, Socket.IO",
            image: "assets/images/home.png",
            description: "Comprehensive multi-event tournament operations engine developed for KUCE&T to manage technical quizzes, collegiate FIDE rapid chess tournaments, and live campus contests.",
            features: "Features server-authoritative countdown timers to prevent client-side clock tampering, automatic answer autosave every 5 seconds, live scoreboard projection, and strict database isolation via dedicated multi-tenant schemas.",
            github: "https://github.com/Sannith-Hack",
            date: "2026"
        },
        {
            id: "trolley",
            title: "Wireless Weightlifting Electric Trolley",
            badge: "Hardware & Robotics • ESP32 24V",
            category: "iot",
            categoryLabel: "Robotics & Power Electronics",
            featured: false,
            techStack: "ESP32 SoC, 24V High-Torque Geared DC Motors, Custom H-Bridge Drivers, ESP-NOW / RF Remote, Custom 24V Li-ion Pack",
            image: "assets/images/Trolley.png",
            description: "Heavy-duty electric transport trolley designed for workshop and laboratory material transport with proportional joystick control and high-load torque delivery.",
            features: "Constructed using dual high-torque DC motors driven by custom PWM H-bridge drivers. Implemented ultra-low latency RF joystick communication with emergency dead-man electronic braking.",
            github: "https://github.com/Sannith-Hack",
            date: "2025"
        },
        {
            id: "battery-packs",
            title: "Custom High-Voltage EV & Backup Battery Packs",
            badge: "Energy Engineering • 12V / 48V / 60V",
            category: "iot",
            categoryLabel: "Power Electronics & Energy Storage",
            featured: false,
            techStack: "Grade-A 18650 / 21700 Lithium-ion Cells, Micro-spot Welder, Pure Nickel Busbars, Smart BMS with Active Balancing",
            image: "assets/images/Battery.png",
            description: "Engineered custom high-density lithium battery modules (12V 3S, 48V 13S, 60V 16S configurations) for electric mobility and uninterruptible inverter power storage.",
            features: "Utilized precision capacitive spot welding with pure nickel strips, dual-layer Kapton insulation, and smart BMS integration monitoring over-current, thermal limits, and cell-level voltage drift.",
            github: "https://github.com/Sannith-Hack",
            date: "2024 – 2026"
        },
        {
            id: "consumer-electronics",
            title: "Hardware Modding & Type-C Conversions",
            badge: "Micro-soldering (8/10) • SMD Rework",
            category: "iot",
            categoryLabel: "Hardware Rework & Electronics",
            featured: false,
            techStack: "SMD Micro-soldering, TP4056 USB Type-C Charging Modules, CC1/CC2 5.1k Resistors, Hot Air Rework Station",
            image: "assets/images/Consumer-Electronics.png",
            description: "Extensive micro-soldering and hardware modification program upgrading legacy micro-USB consumer electronics and diagnostic gear to modern USB-C Power Delivery standards.",
            features: "Integrated TP4056 lithium protection ICs with proper 5.1kΩ pull-down resistors on CC lines to ensure seamless handshake compatibility with modern USB-PD high-wattage smart chargers.",
            github: "https://github.com/Sannith-Hack",
            date: "2024 – 2026"
        },
        {
            id: "android-modding",
            title: "Android OS Modding & Magisk Kernel Framework",
            badge: "AOSP • Kernel & Zygisk Modding",
            category: "systems",
            categoryLabel: "Mobile OS & Kernel Engineering",
            featured: false,
            techStack: "Evolution X (Android 15), Fastboot / ADB Tooling, Magisk / KernelSU, Zygisk Injection Modules, Pixel Device Spoofing",
            image: "assets/images/X.png",
            description: "Deep Android operating system customization including bootloader unlocking, partition table flashing, custom recovery installation, and system-level performance tuning.",
            features: "Configured systemless root frameworks (KernelSU/Magisk) to pass Play Integrity attestation (MEETS_DEVICE_INTEGRITY) while running root-privileged background diagnostics and memory governor optimizations.",
            github: "https://github.com/Sannith-Hack",
            date: "2024 – 2026"
        },
        {
            id: "todo-solo",
            title: "Solo Leveling Gamified Task & Habit System",
            badge: "Mobile App • React Native Hermes",
            category: "mobile",
            categoryLabel: "Cross-Platform Mobile Development",
            featured: false,
            techStack: "React Native 0.76, Hermes JavaScript Engine, React Native Reanimated 3, AsyncStorage, Custom Sound FX",
            image: "assets/images/Task manager app.jpg",
            description: "Immersive RPG-themed productivity application inspired by the 'Solo Leveling' webtoon system, transforming daily technical tasks, habit building, and workouts into leveling quests.",
            features: "Optimized for Hermes Bytecode compilation with 60fps gesture physics powered by Reanimated 3. Features XP calculation algorithms, dynamic stat scaling, and persistent offline JSON state serialization.",
            github: "https://github.com/Sannith-Hack",
            date: "2025"
        },
        {
            id: "mindflow-ai",
            title: "MindFlow AI: Stress Assessment Platform",
            badge: "AI & Full-Stack • Multimodal ML",
            category: "ai",
            categoryLabel: "Multimodal AI & NLP",
            featured: false,
            techStack: "HTML5 Canvas, Vanilla ES6+, Node.js Express, Google Gemini Flash API, JWT Session Tokens",
            image: "assets/images/MindFlow AI.png",
            description: "Multimodal cognitive stress analysis platform that evaluates textual user responses, typing cadence rhythms, and voice transcripts to estimate anxiety markers and suggest coping interventions.",
            features: "Features lightweight client-side keystroke dynamics tracking and low-latency structured prompt orchestration with Google Gemini Flash for empathetic, personalized mental wellness guidance.",
            github: "https://github.com/Sannith-Hack",
            date: "2025"
        },
        {
            id: "transcriptify",
            title: "Transcriptify Automation Pipeline",
            badge: "Browser Automation & Speech AI",
            category: "systems",
            categoryLabel: "Automation & Speech Recognition",
            featured: false,
            techStack: "Python, Playwright (CDP Mode), OpenAI Whisper Large-v3, FFmpeg Audio Stream Slicing, Asyncio",
            image: "assets/images/Bill.png",
            description: "End-to-end headless browser automation pipeline that navigates university lecture recordings, intercepts secured audio streams via Chrome DevTools Protocol, and transcribes them into timestamped markdown notes.",
            features: "Overcomes strict bot-detection mechanisms using CDP session injection. Incorporates chunked FFmpeg audio extraction and local Whisper inference with accurate speaker diarization.",
            github: "https://github.com/Sannith-Hack",
            date: "2025 – 2026"
        },
        {
            id: "school-billing",
            title: "School Billing & Inventory System",
            badge: "Desktop / Web ERP • React 19 & SQLite",
            category: "fullstack",
            categoryLabel: "Institutional ERP & Accounting",
            featured: false,
            techStack: "React 19, Node.js Express, SQLite3 with WAL mode, Thermal Receipt PDF Engine, Tailwind CSS",
            image: "assets/images/Bill.png",
            description: "Complete accounting, student fee billing, and inventory tracking software built for private educational institutions, featuring instant thermal receipt generation and balance audits.",
            features: "Utilizes SQLite Write-Ahead Logging (WAL) for reliable concurrent reads and writes. Generates standard 80mm ESC/POS formatted thermal receipts and exports balance sheets directly to Excel/CSV.",
            github: "https://github.com/Sannith-Hack",
            date: "2025"
        },
        {
            id: "ncc-portal",
            title: "1(T) Air Squadron NCC Web Portal",
            badge: "Institutional Portal • Cadets & Events",
            category: "fullstack",
            categoryLabel: "Web Portal & Authentication",
            featured: false,
            techStack: "HTML5, Modern CSS Grid, JavaScript ES6+, Supabase Auth & Storage, Role-Based Access Control",
            image: "assets/images/Dashboard - Social Media Analytics.jpg",
            description: "Official cadet information portal developed for the 1(T) Air Squadron National Cadet Corps, streamlining parade attendance tracking, camp enrollment, and aviation study resources.",
            features: "Implements distinct permission tiers for Cadets, Flight Leaders, and Commanding Officers with instant PDF camp clearance certificate generation.",
            github: "https://github.com/Sannith-Hack",
            date: "2024 – 2025"
        },
        {
            id: "ecohaven",
            title: "EcoHaven: Sustainable Architecture Hub",
            badge: "Environmental Tech • Interactive Web",
            category: "fullstack",
            categoryLabel: "CleanTech & Web Simulation",
            featured: false,
            techStack: "JavaScript ES6, Canvas API, Chart.js, CSS3 Custom Properties, LocalStorage Persistence",
            image: "assets/images/home.png",
            description: "Interactive clean-technology simulator calculating residential solar array yields, rainwater harvesting capacities, and building thermal insulation savings.",
            features: "Features real-time mathematical simulation models with responsive Canvas animations demonstrating annual kilowatt-hour offsets and municipal rebate calculations.",
            github: "https://github.com/Sannith-Hack",
            date: "2024"
        },
        {
            id: "demo-3d",
            title: "Demo-3D-Test (Three.js Multi-Window Sync)",
            badge: "3D WebGL • LocalStorage Inter-Tab Sync",
            category: "systems",
            categoryLabel: "Computer Graphics & Web Protocols",
            featured: false,
            techStack: "Three.js, WebGL Shader Engine, Window PostMessage & LocalStorage Event Bus, Vanilla JS",
            image: "assets/images/MindFlow AI.png",
            description: "Experimental 3D computer graphics project demonstrating multi-window browser synchronization where 3D entities smoothly traverse across disconnected physical browser windows in real-time.",
            features: "Calculates window screen coordinates relative to the operating system display and synchronizes particle vector transforms via high-speed LocalStorage storage events without web socket server overhead.",
            github: "https://github.com/Sannith-Hack",
            date: "2024 – 2025"
        },
        {
            id: "portfolio",
            title: "Developer Portfolio Architecture",
            badge: "Production Web • ES6 Modules & Radar",
            category: "fullstack",
            categoryLabel: "Personal Engineering Platform",
            featured: false,
            techStack: "Vanilla ES6 Modules, Modern CSS3 Variables, Chart.js, Dynamic Lightbox, AOS Animation Engine",
            image: "assets/images/img.jpg",
            description: "Custom lightweight, zero-bloat developer portfolio website featuring dynamic ES6 module loading, interactive SQL playground, live telemetry simulators, and certificate lightbox inspectors.",
            features: "Scores 95+ on Google Lighthouse across Performance and Accessibility. Contains zero heavy runtime dependencies, engineered purely with semantic HTML5 and vanilla JavaScript.",
            github: "https://github.com/Sannith-Hack",
            date: "2026"
        }
    ],

    // ==============================================================================
    // VERIFIED CERTIFICATIONS & ACCREDITATIONS (19 Items from INFO.md)
    // ==============================================================================
    certifications: [
        {
            id: "cert-capabl-internship",
            title: "Agentic AI Saksham Virtual Internship & Residency",
            organization: "Capabl / NASSCOM FutureSkills PRIME",
            date: "Sep 18, 2026",
            credentialId: "CPBL26PI375",
            type: "Internship & Residency",
            category: "internship",
            description: "Intensive 2-month applied industry residency (July 18 – Sep 18, 2026) in Agentic AI workflows, LangChain autonomous multi-step agents, RAG vector retrieval, and production LLM orchestration.",
            technologies: ["Agentic AI", "LangChain", "Vector RAG", "Groq Cloud", "LLM Orchestration"],
            image: "assets/certificates/agentic-ai-saksham-internship.jpg",
            documentUrl: "assets/certificates/agentic-ai-saksham-internship.pdf",
            credentialUrl: "assets/certificates/agentic-ai-saksham-internship.pdf",
            buttonText: "View Internship Credential"
        },
        {
            id: "cert-cdac-flutter",
            title: "Flutter & REST APIs Technical Bootcamp",
            organization: "C-DAC Mohali / FutureSkills PRIME",
            date: "July 31, 2026",
            credentialId: "FSP/BCMP/C-DAC/MOH/BC22FLUT/2607/007",
            type: "Government Technical Bootcamp",
            category: "bootcamp",
            description: "Rigorous government-certified technical bootcamp under the Ministry of Electronics & IT (MeitY) covering Dart, Flutter cross-platform architecture, asynchronous REST API integration, and mobile UI/UX state management.",
            technologies: ["Flutter 3.x", "Dart", "REST API", "Asynchronous Dart", "State Management"],
            image: "assets/certificates/flutter-rest-api.jpg",
            documentUrl: "assets/certificates/flutter-rest-api.pdf",
            credentialUrl: "assets/certificates/flutter-rest-api.pdf",
            buttonText: "View C-DAC Certificate"
        },
        {
            id: "cert-google-kaggle-agents",
            title: "5-Day AI Agents Intensive Course with Google",
            organization: "Google / Kaggle",
            date: "Dec 18, 2025",
            credentialId: "Kaggle Verified",
            type: "Professional AI Course",
            category: "ai",
            description: "Comprehensive hands-on training with Google AI researchers and Kaggle on building autonomous multi-modal AI agents using Google Gemini 2.0 Flash, function calling, tool use, and multi-agent coordination.",
            technologies: ["Google Gemini Flash", "Function Calling", "Multi-Agent Systems", "Prompt Chaining"],
            image: "assets/certificates/google-kaggle-ai-agents.jpg",
            documentUrl: "assets/certificates/google-kaggle-ai-agents.jpg",
            credentialUrl: "assets/certificates/google-kaggle-ai-agents.jpg",
            buttonText: "View Google Credential"
        },
        {
            id: "cert-capabl-workshop",
            title: "Agentic AI 2-Day Practical Hands-on Workshop",
            organization: "Capabl / KUCE&T Kakatiya University",
            date: "Nov 2025",
            credentialId: "CPBLtf25qi554",
            type: "Hands-on Workshop",
            category: "ai",
            description: "Practical workshop conducted on-campus at Kakatiya University covering the mathematical foundations of LLM reasoning, tokenization, prompt decomposition, and autonomous agent loops.",
            technologies: ["Agentic AI", "Prompt Engineering", "Python", "API Pipelines"],
            image: "assets/certificates/nasscom-agentic-ai.jpg",
            documentUrl: "assets/certificates/nasscom-agentic-ai.jpg",
            credentialUrl: "assets/certificates/nasscom-agentic-ai.jpg",
            buttonText: "View Workshop Certificate"
        },
        {
            id: "cert-pi-labs",
            title: "Graduate Certificate in Data Analytics",
            organization: "PI LABS Research Foundation",
            date: "Nov 2025",
            credentialId: "PILABS/DA/2025/11/042",
            type: "Graduate Certification",
            category: "bootcamp",
            description: "Intensive 3-month research program (Aug – Nov 2025) covering exploratory data analysis (EDA), multivariate statistical inference, hypothesis testing, regression modeling, and Tableau/PowerBI dashboarding.",
            technologies: ["Python Data Science", "Pandas", "NumPy", "Statistical Inference", "Data Visualization"],
            image: "assets/certificates/pi-labs-data-analytics.jpg",
            documentUrl: "assets/certificates/pi-labs-data-analytics.pdf",
            credentialUrl: "assets/certificates/pi-labs-data-analytics.pdf",
            buttonText: "View PI LABS Certificate"
        },
        {
            id: "cert-orbit-aws",
            title: "Scalable AWS LAMP Stack Cloud Hosting",
            organization: "Orbit Learning & Development",
            date: "June 2025",
            credentialId: "OL-AWS-2025-089",
            type: "Cloud Certification",
            category: "bootcamp",
            description: "Production cloud engineering program covering Amazon Web Services (AWS EC2, VPC, Security Groups, Elastic IPs, Route 53, S3 storage buckets, and high-availability Linux LAMP stack deployment).",
            technologies: ["AWS EC2", "VPC Security", "Linux Systems", "Apache", "MySQL RDS"],
            image: "assets/certificates/aws-wordpress-hosting.jpg",
            documentUrl: "assets/certificates/aws-wordpress-hosting.pdf",
            credentialUrl: "assets/certificates/aws-wordpress-hosting.pdf",
            buttonText: "View Cloud Certificate"
        },
        {
            id: "cert-deloitte-analytics",
            title: "Data Analytics Job Simulation",
            organization: "Deloitte / Forage",
            date: "Nov 24, 2025",
            credentialId: "g3AeoJb9d2E3XfG67",
            type: "Industry Job Simulation",
            category: "simulation",
            description: "Completed real-world corporate analytics tasks including data quality cleansing, relational dataset restructuring, statistical outlier detection, and strategic executive KPI presentations.",
            technologies: ["Data Cleaning", "Business Intelligence", "Relational Mapping", "Executive Reporting"],
            image: "assets/certificates/deloitte-data-analytics.jpg",
            documentUrl: "assets/certificates/deloitte-data-analytics.pdf",
            credentialUrl: "assets/certificates/deloitte-data-analytics.pdf",
            buttonText: "View Deloitte Verification"
        },
        {
            id: "cert-tata-cyber",
            title: "Cybersecurity Analyst Job Simulation",
            organization: "TATA / Forage",
            date: "Nov 27, 2025",
            credentialId: "N7r8KqA3s5P2m9Xy4",
            type: "Industry Job Simulation",
            category: "simulation",
            description: "Simulated cybersecurity incident response, identifying network intrusion patterns, analyzing access authorization controls, and authoring mitigation strategies for enterprise systems.",
            technologies: ["IAM Security", "Incident Response", "Vulnerability Assessment", "Access Controls"],
            image: "assets/certificates/tata-cybersecurity.jpg",
            documentUrl: "assets/certificates/tata-cybersecurity.pdf",
            credentialUrl: "assets/certificates/tata-cybersecurity.pdf",
            buttonText: "View TATA Verification"
        },
        {
            id: "cert-hackwithhyderabad",
            title: "HackWithHyderabad Hackathon",
            organization: "Microsoft Office Hyderabad / HackWithIndia",
            date: "Oct 2025",
            credentialId: "HWH-2025-PART",
            type: "Competitive Hackathon",
            category: "simulation",
            description: "Participated in an intensive 24-hour on-site hackathon held at the Microsoft Office in Hyderabad, collaborating on high-velocity rapid prototyping of AI-assisted cloud platforms.",
            technologies: ["Rapid Prototyping", "Team Engineering", "Cloud Architecture", "Hackathon"],
            image: "assets/certificates/hackwithhyderabad-hackathon.jpg",
            documentUrl: "assets/certificates/hackwithhyderabad-hackathon.jpg",
            credentialUrl: "assets/certificates/hackwithhyderabad-hackathon.jpg",
            buttonText: "View Hackathon Credential"
        },
        {
            id: "cert-digital-summit",
            title: "Digital Citizen Summit 2024",
            organization: "DEF / CNX Asia-Pacific",
            date: "Nov 2024",
            credentialId: "DCS-2024-DEL",
            type: "International Conference",
            category: "simulation",
            description: "Attended high-level technical symposiums on open internet infrastructure, distributed community networks, data privacy, and ethical AI deployment across developing regions.",
            technologies: ["Digital Governance", "Data Privacy", "Network Protocols", "Open Source"],
            image: "assets/certificates/digital-citizen-summit-2024.jpg",
            documentUrl: "assets/certificates/digital-citizen-summit-2024.pdf",
            credentialUrl: "assets/certificates/digital-citizen-summit-2024.pdf",
            buttonText: "View Summit Delegate Pass"
        },
        {
            id: "cert-webxcelerate",
            title: "WebXcelerate Project & Web Dev Program",
            organization: "Poditivity / KITSW",
            date: "March 2025",
            credentialId: "WX-KITSW-2025",
            type: "Technical Program",
            category: "bootcamp",
            description: "Project completion and technical presentation certificate for architecting full-stack web platforms adhering to modern responsive standards and backend API integrations.",
            technologies: ["Web Development", "Full-Stack UI", "JavaScript", "Project Lifecycle"],
            image: "assets/certificates/webxcelerate-project-completion.jpg",
            documentUrl: "assets/certificates/webxcelerate-project-completion.pdf",
            credentialUrl: "assets/certificates/webxcelerate-project-completion.pdf",
            buttonText: "View WebXcelerate Credential"
        },
        {
            id: "cert-kaggle-python",
            title: "Python Coder Badge",
            organization: "Kaggle",
            date: "2025",
            credentialId: "Kaggle Achievement",
            type: "Platform Badge",
            category: "kaggle",
            description: "Awarded by Kaggle for executing and publishing algorithmic Python code notebooks solving structured data manipulation and machine learning challenges.",
            technologies: ["Python", "Kaggle Notebooks", "Algorithmic Code"],
            image: "assets/certificates/kaggle-python-coder.png",
            documentUrl: "assets/certificates/kaggle-python-coder.png",
            credentialUrl: "https://www.kaggle.com",
            buttonText: "View Kaggle Profile"
        },
        {
            id: "cert-kaggle-community",
            title: "Kaggle Community Member Badge",
            organization: "Kaggle",
            date: "2025",
            credentialId: "Kaggle Community",
            type: "Platform Badge",
            category: "kaggle",
            description: "Recognized active participant in the global Kaggle data science ecosystem, sharing code implementations, datasets, and collaborative discussions.",
            technologies: ["Data Science", "Open Science", "Community Collaboration"],
            image: "assets/certificates/kaggle-community-member.png",
            documentUrl: "assets/certificates/kaggle-community-member.png",
            credentialUrl: "https://www.kaggle.com",
            buttonText: "View Kaggle Community"
        },
        {
            id: "cert-kaggle-forker",
            title: "Code Forker Badge",
            organization: "Kaggle",
            date: "2025",
            credentialId: "Kaggle Badge",
            type: "Platform Badge",
            category: "kaggle",
            description: "Earned on Kaggle for analyzing, reproducing, and enhancing state-of-the-art open-source machine learning pipelines and research benchmarks.",
            technologies: ["Reproducible ML", "Pipeline Refinement", "Model Analysis"],
            image: "assets/certificates/kaggle-code-forker.png",
            documentUrl: "assets/certificates/kaggle-code-forker.png",
            credentialUrl: "https://www.kaggle.com",
            buttonText: "View Kaggle Badge"
        },
        {
            id: "cert-kaggle-vampire",
            title: "Vampire Novice Badge",
            organization: "Kaggle",
            date: "2025",
            credentialId: "Kaggle Badge",
            type: "Platform Badge",
            category: "kaggle",
            description: "Earned for high-frequency night-time code notebook commits and algorithmic benchmarking during Kaggle hackathons and coding sprints.",
            technologies: ["Coding Dedication", "Night Sprint", "Model Tuning"],
            image: "assets/certificates/kaggle-vampire.png",
            documentUrl: "assets/certificates/kaggle-vampire.png",
            credentialUrl: "https://www.kaggle.com",
            buttonText: "View Kaggle Badge"
        },
        {
            id: "cert-google-innovator",
            title: "Google Cloud Innovator Member",
            organization: "Google Developer Program",
            date: "2025 – Present",
            credentialId: "Google Premium Tier",
            type: "Developer Recognition",
            category: "kaggle",
            description: "Recognized as a verified member of the Google Developer Program (Premium Tier & Google Cloud Innovator), accessing advanced cloud architectures and preview SDKs.",
            technologies: ["Google Cloud", "Gemini Ecosystem", "Cloud Architecture"],
            image: "assets/certificates/google-cloud-innovator.png",
            documentUrl: "assets/certificates/google-cloud-innovator.png",
            credentialUrl: "https://developers.google.com",
            buttonText: "Google Developer Tier"
        },
        {
            id: "cert-10000-coders",
            title: "Full-Stack / Software Dev Internship & Training Offer",
            organization: "10000 Coders",
            date: "Aug 17, 2026",
            credentialId: "10K-OFFER-2026",
            type: "Internship & Training Offer",
            category: "offers",
            description: "Official selection letter for an intensive full-stack software development program with direct placement acceleration (3.0+ LPA bracket).",
            technologies: ["Full-Stack Dev", "Software Engineering", "Placement Track"],
            image: "assets/certificates/10000-coders-internship-offer.png",
            documentUrl: "assets/certificates/10000-coders-internship-offer.pdf",
            credentialUrl: "assets/certificates/10000-coders-internship-offer.pdf",
            buttonText: "View Offer Document"
        },
        {
            id: "cert-brain-o-vision",
            title: "Agentic AI Virtual Internship Offer",
            organization: "Brain O Vision Solutions India",
            date: "Jan 02, 2026",
            credentialId: "BOV-AIA-2026-042",
            type: "Internship Offer Letter",
            category: "offers",
            description: "Official internship offer letter for developing applied autonomous Agentic AI pipelines, prompt chain architectures, and retrieval systems.",
            technologies: ["Agentic AI", "Prompt Chains", "AI Engineering"],
            image: "assets/certificates/brain-o-vision-agentic-ai.jpg",
            documentUrl: "assets/certificates/brain-o-vision-agentic-ai.pdf",
            credentialUrl: "assets/certificates/brain-o-vision-agentic-ai.pdf",
            buttonText: "View Offer Document"
        },
        {
            id: "cert-proxenix",
            title: "Data Science Internship Offer Letter",
            organization: "Proxenix Technologies",
            date: "Dec 25, 2025",
            credentialId: "PX-DS-2025-110",
            type: "Internship Offer Letter",
            category: "offers",
            description: "Official internship offer letter covering hands-on predictive modeling, data pipeline ingestion, and exploratory data analytics workflows.",
            technologies: ["Data Science", "Python", "Predictive Modeling"],
            image: "assets/certificates/proxenix-data-science.jpg",
            documentUrl: "assets/certificates/proxenix-data-science.pdf",
            credentialUrl: "assets/certificates/proxenix-data-science.pdf",
            buttonText: "View Offer Document"
        }
    ],

    // ==============================================================================
    // ACHIEVEMENTS & LEADERSHIP
    // ==============================================================================
    achievements: [
        {
            title: "Lead Platform Developer & Event Organizer — KU Fest 2026",
            organization: "Kakatiya University College of Engineering & Technology",
            date: "March 2026",
            icon: "fas fa-trophy",
            description: "Architected, deployed, and operated the official 'Keyboard Combat' competitive typing tournament and live tournament scoreboards under high concurrent campus traffic."
        },
        {
            title: "Smart India Hackathon (SIH 2026) Internal Finalist",
            organization: "Ministry of Education / AICTE",
            date: "2026",
            icon: "fas fa-award",
            description: "Selected as internal finalist with AegisPredict (Problem Statement SIH26184), engineering graph-based money-mule detection up to 5 hops deep."
        },
        {
            title: "Google Cloud Innovator & Developer Program Premium Member",
            organization: "Google Developer Program",
            date: "2025 – Present",
            icon: "fab fa-google",
            description: "Recognized in Google's developer tier with verified innovator credential."
        },
        {
            title: "450+ Day Continuous GitHub Contribution Streak",
            organization: "GitHub / Open Source",
            date: "Ongoing",
            icon: "fas fa-fire",
            description: "Maintained an unbroken daily commit record spanning full-stack web applications, AI models, native mobile apps, and embedded firmware."
        }
    ]
};
