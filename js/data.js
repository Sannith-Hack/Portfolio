export const profileData = {
    executiveSummary: `Highly motivated and versatile Full-Stack Engineer and Data Analyst with a profound focus on Backend Architecture, Next.js, and Agentic AI workflows. Proven track record of building production-ready systems, ranging from multi-role college management systems to IoT hardware prototypes and AI-driven healthcare assistants. Recognized as a Google Cloud Innovator and Premium Tier Member of the Google Developer Program.`,
    
    background: {
        degree: "B.Tech in Computer Science and Engineering (CSE) - 4th Year",
        institution: "Kakatiya University College of Engineering and Technology (KUCET)",
        focusAreas: ["Full-stack Web & Mobile Development", "Data Science/Analytics", "Generative AI (LLMs, RAG)", "Hardware-Software Integration (IoT)"]
    },

        skills: [
        {
            category: "Programming Languages",
            icon: "fas fa-code",
            items: ["TypeScript", "JavaScript", "Python", "C++", "C", "Rust", "Java", "SQL"]
        },
        {
            category: "Frontend Technologies",
            icon: "fas fa-laptop-code",
            items: ["React.js (React 19)", "Next.js", "Vite", "HTML5/CSS3", "Tailwind CSS (v4)"]
        },
        {
            category: "Mobile Development",
            icon: "fas fa-mobile-alt",
            items: ["React Native (CLI, Android/iOS, Hermes engine)", "TypeScript"]
        },
        {
            category: "Backend & APIs",
            icon: "fas fa-server",
            items: ["Node.js", "Express.js", "FastAPI", ".NET", "Server-Sent Events (SSE)", "RESTful APIs"]
        },
        {
            category: "Cloud & BaaS",
            icon: "fas fa-cloud",
            items: ["Supabase", "Firebase", "AWS (LAMP Stack)", "Vercel", "Render"]
        },
        {
            category: "Databases & Vector Stores",
            icon: "fas fa-database",
            items: ["PostgreSQL", "SQLite3", "ChromaDB", "MySQL", "Oracle", "Microsoft SQL Server"]
        },
        {
            category: "AI & Data Science",
            icon: "fas fa-brain",
            items: ["Prompt Engineering", "AI Agent Tech/Handling", "Looping", "LangChain", "Groq API (Llama 3.3)", "Google Gemini API (gemini-1.5-flash)", "RAG", "Tableau", "Excel", "Data Modeling"]
        },
        {
            category: "DevOps & IT Admin",
            icon: "fas fa-tools",
            items: ["Docker", "Docker Compose", "GitHub Actions", "Cloudflare Tunnels", "Ventoy", "Custom Android ROMs & Rooting"]
        },
        {
            category: "Hardware & Electronics",
            icon: "fas fa-microchip",
            items: ["Soldering & Micro-soldering (8/10)", "PC Diagnostics & Repair (8/10)", "Custom Li-ion Battery Packs & BMS (12V/48V/60V)", "Spot Welding", "USB Power Delivery (PD) protocols", "ESP32", "Arduino", "Relays/H-Bridges"]
        }
    ],

    projects: [
        {
            title: "KUCET College Management System",
            techStack: "Next.js, Docker, SSE, Vercel/Self-Hosted",
            description: "A comprehensive role-based college management portal designed to digitalize student administration, scholarships, and fee management workflows.",
            features: "Automated student ID via roll numbers, multi-semester timetable orchestration, GPS-based attendance, real-time schedule synchronization via SSE.",
            github: "https://github.com/GouthamA15/KUCET_College_Management_System.git",
            image: "assets/images/home.png"
        },
        {
            title: "Healthcare Monitoring AI Agent",
            techStack: "React, TypeScript, FastAPI, LangChain, Groq, ChromaDB",
            description: "A secure digital health assistant utilizing a conversational interface with Retrieval-Augmented Generation (RAG).",
            features: "Grounded answers extracted from medical documents using ChromaDB. Integrates health calculation tools guarded by Emergency Protocols.",
            github: "https://github.com/GouthamA15/healthcare-ai-agent.git",
            image: "assets/images/healthcare-ai-agent.png"
        },
        {
            title: "TODO_LIST (Solo Leveling System)",
            techStack: "React Native 0.76, TypeScript, Async Storage",
            description: "A cross-platform mobile application themed after the 'Solo Leveling' anime interface with a gamified XP system.",
            features: "5 Skill Trees (Coding, Workout, Cultural, Sports, Mental), Rep counters for physical quests, and a penalty quest system.",
            github: "https://github.com/Sannith-Hack/TODO_LIST.git",
            image: "assets/images/TODO.png"
        },
        {
            title: "Keyboard-Combat-for-KUCE-T",
            techStack: "React (Vite), TypeScript, Tailwind v4, Zustand, Supabase, Express",
            description: "A scalable, real-time typing competition web application engineered for high-stakes college fest events.",
            features: "Real-time leaderboards, admin dashboards, multi-level typing experiences, duplication prevention.",
            github: "https://github.com/Sannith-Hack/Keyboard-Combat-for-KUCE-T.git",
            image: "assets/images/Keyboard-Combat.png"
        },
        {
            title: "MindFlow AI (Stress Detector)",
            techStack: "HTML5, Vanilla JS, Express, Gemini API, Bcrypt, JWT",
            description: "A student wellness dashboard tracking daily habits and evaluating mental stress levels using rule-based metrics combined with AI.",
            features: "Encrypted stateless sessions, AI counseling, PDF stress report generation, enterprise-grade security.",
            github: "https://github.com/Sannith-Hack/Mini-Project.git",
            image: "assets/images/MindFlow AI.png"
        },
        {
            title: "Wireless Weightlifting Trolley",
            techStack: "C++, ESP32 (WiFi), H-Bridge 6-Relay Array, 24V Motors",
            description: "Mechanical material handling prototype focused on a remotely controlled, wireless weightlifting trolley.",
            features: "Management of high-power 24V worm gear motors using custom logic over WiFi, including safety self-locking mechanics.",
            github: "https://github.com/Sannith-Hack/Major-Project-MECH.git",
            image: "assets/images/Trolley.png"
        },
        {
            title: "Custom High-Voltage EV Packs",
            techStack: "18650 Li-ion Cells, Spot Welder, BMS",
            description: "Engineered high-capacity battery systems for home backup and electric vehicles.",
            features: "Built 12V packs for emergency lighting and 48V/60V packs for an electric vehicle with BMS.",
            image: "assets/images/Battery.png"
        },
        {
            title: "Consumer Electronics Modding",
            techStack: "TP4056 Type-C Modules, Audio Amplifiers, USB PD",
            description: "Modified and repaired everyday electronics to enhance functionality and lifespan.",
            features: "Upgraded TV remote to Type-C rechargeable, built custom Bluetooth speakers, micro-soldered wireless earbuds.",
            image: "assets/images/Consumer-Electronics.png"
        },
        {
            title: "Android OS Modification",
            techStack: "Android Custom ROMs, Magisk/Root, OEM Unlocking",
            description: "Deep system-level modifications on Android devices.",
            features: "Rooted and flashed custom ROMs (Samsung M31) to spoof Pixel identifiers for unlimited cloud storage.",
            github: "https://xdaforums.com/t/rom-15-0-unofficial-evolution-x-10-4-for-galaxy-m31.4724865/",
            image: "assets/images/X.png"
        },
        {
            title: "School Billing & Inventory",
            techStack: "React 19, TypeScript, Tailwind, Node.js, Express, SQLite3",
            description: "A full-stack application managing school billing, student data, inventory, and procurement.",
            features: "Highly relational localized database management.",
            github: "https://github.com/Sannith-Hack/Sir-Work.git",
            image: "assets/images/Bill.png"
        },
        {
            title: "NCC-Air-Wing Portal",
            techStack: "React, Vite, TypeScript, Supabase",
            description: "Sophisticated portal for NCC Air Wing allowing students to manage their profiles and granting admins control.",
            features: "Real-time updates, admin dashboards for Gallery and Achievements.",
            github: "https://github.com/Sannith-Hack/NCC-Air-Wing.git",
            image: "assets/images/Dashboard - Social Media Analytics.jpg"
        },

        {
            title: "EcoHaven",
            techStack: "TypeScript, Firebase",
            description: "A sustainable second-hand marketplace prototype.",
            features: "Secure user authentication, category filtering, and product lifecycle management.",
            github: "https://github.com/Sannith-Hack/EcoHaven.git",
            image: "assets/images/Cleveroad.jpg"
        }
    ],

    employment: [
        {
            company: "BrightLine Management Solutions",
            role: "Technical Role",
            ctc: "2.4 - 3.0 LPA",
            status: "Onboarding starting July 2026. Includes 45-day technical training and 1-month OJT.",
            type: "Placement"
        }
    ],

    internships: [
        {
            title: "Data Science & Analytics",
            company: "Proxenix",
            date: "Dec 2025",
            type: "Internship Offer"
        },
        {
            title: "Data Analytics Graduate Certificate",
            company: "PI LABS Commons Research Foundation",
            date: "Aug - Nov 2025",
            type: "Certificate"
        },
        {
            title: "Data Analytics Job Simulation",
            company: "Deloitte",
            date: "Nov 2025",
            type: "Simulation"
        },
        {
            title: "5-Day AI Agents Intensive",
            company: "Google / Kaggle",
            date: "Jul 2026",
            type: "Course"
        },
        {
            title: "Agentic AI Virtual Internship",
            company: "Brain O Vision",
            date: "Jan 2026",
            type: "Internship"
        },
        {
            title: "Agentic AI Saksham Program",
            company: "NASSCOM / KUCE&T",
            date: "Nov 2025",
            type: "Program"
        },
        {
            title: "Scalable WordPress Hosting on AWS",
            company: "Orbit Learning",
            date: "May - Jun 2025",
            type: "Training"
        },
        {
            title: "Cybersecurity Analyst Job Simulation",
            company: "TATA / Forage",
            date: "Recent",
            type: "Simulation"
        }
    ],

    badges: [
        { name: "Premium Tier Member", org: "Google Developer Program (Jan 2026)", icon: "fas fa-medal" },
        { name: "Google Cloud Innovator", org: "Google Cloud (Jul 2024)", icon: "fas fa-cloud" },
        { name: "Innovators Get Certified", org: "Google Cloud (Jul 2024)", icon: "fas fa-certificate" },
        { name: "Android Studio User & Panda releases", org: "Google Developers (Mar 2026)", icon: "fab fa-android" },
        { name: "Vampire, Code Forker, Python Coder", org: "Kaggle", icon: "fab fa-kaggle" },
        { name: "Pair Extraordinaire, Pull Shark, YOLO", org: "GitHub", icon: "fab fa-github" }
    ],

    interests: [
        "Architecting resilient, highly scalable backend APIs and microservices.",
        "Pushing the boundaries of Agentic AI, Prompt Engineering, RAG integrations.",
        "Designing complex database schemas and optimizing data lifecycles.",
        "Expanding hardware integrations, IT diagnostics, USB Power Delivery systems.",
        "Consumer electronics repair, micro-soldering, and custom battery solutions.",
        "Fun Fact: Proudly uses a spare RAM stick as a daily keychain!"
    ]
};
