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
        },
        {
            title: "3D Printer Enclosure Monitor",
            techStack: "IoT, ESP8266, NodeMCU, Arduino, DHT11, Wi-Fi, REST API, Web Dashboard, LittleFS, Firmware, Electronics",
            description: "An ESP8266 (NodeMCU)-based IoT system designed to monitor and protect the environment inside a 3D printer enclosure through real-time temperature and humidity monitoring.",
            features: "Real-time Temp & Humidity, Wi-Fi Dashboard, Audible/Visual Alarm, Physical Mute, LittleFS Persistent Config, 16x2 LCD, Non-blocking Firmware, Auto AP Mode.",
            github: "https://github.com/Sannith-Hack",
            image: "assets/images/3d-printer-enclosure-monitor.jpg"
        }
    ],

    certifications: [
        
        {
            title: "Bootcamp on Full-Stack Mobile App Development using Flutter and REST APIs",
            organization: "FutureSkills Prime 2.0 / C-DAC Mohali",
            type: "Bootcamp",
            date: "2026",
            image: "assets/certificates/flutter-rest-api.jpg",
            credentialUrl: "https://drive.google.com/file/d/1fIOdtPCSMv8fEqQur1QlOxgMbu__wJwK/view?usp=drive_link",
            description: "Successfully completed the FutureSkills Prime 2.0 bootcamp on Full-Stack Mobile App Development using Flutter and REST APIs, strengthening skills in cross-platform mobile development, REST API integration, backend communication, and full-stack application development.",
            technologies: ["Flutter", "REST APIs", "Mobile Development", "Full Stack Development", "API Integration", "Application Development"],
            buttonText: "View Certificate"
        },
        {
            title: "Data Analytics Graduate Certificate",
            organization: "PI LABS Commons Research Foundation",
            type: "Certificate",
            date: "Aug - Nov 2025",
            image: "assets/certificates/pi-labs-data-analytics.jpg",
            credentialUrl: "",
            description: "Graduate certificate program focusing on end-to-end data analytics pipelines, statistical modeling, database queries, and executive data visualization.",
            technologies: ["Data Analytics", "Python", "SQL", "Data Modeling", "Visualization"],
            buttonText: "View Certificate",
            documentUrl: "assets/certificates/pi-labs-data-analytics.pdf",
            credentialUrl: "assets/certificates/pi-labs-data-analytics.pdf"
        },
        {
            title: "Scalable WordPress Hosting with LAMP Stack on AWS",
            organization: "Orbit Learning",
            type: "Training",
            date: "May - Jun 2025",
            image: "assets/certificates/aws-wordpress-hosting.jpg",
            credentialUrl: "",
            description: "Hands-on cloud architecture training building high-availability, fault-tolerant WordPress hosting platforms on Amazon Web Services.",
            technologies: ["AWS", "Cloud Hosting", "WordPress", "DevOps", "LAMP Stack"],
            buttonText: "View Certificate",
            documentUrl: "assets/certificates/aws-wordpress-hosting.pdf",
            credentialUrl: "assets/certificates/aws-wordpress-hosting.pdf"
        },
        {
            id: "dcs-2024",
            title: "Certificate of Appreciation – Digital Citizen Summit 2024",
            organization: "Digital Citizen Summit / CNX Asia-Pacific / T-Hub",
            type: "Certificate of Appreciation",
            date: "2024",
            image: "assets/certificates/digital-citizen-summit-2024.jpg",
            documentUrl: "assets/certificates/digital-citizen-summit-2024.pdf",
            credentialUrl: "assets/certificates/digital-citizen-summit-2024.pdf",
            description: "Certificate of Appreciation recognizing participation in the 8th Community Network Xchange Asia-Pacific (CNX) and 6th Digital Citizen Summit (DCS), 2024 focusing on 'Algorithms, AI and Accountability', associated with Digital Empowerment Foundation and T-Hub.",
            technologies: ["Digital Citizen Summit", "AI", "Algorithms", "Community", "Technology"],
            buttonText: "View Certificate"
        },
        {
            id: "kaggle-python-coder",
            title: "Python Coder",
            organization: "Kaggle",
            type: "Kaggle Achievement",
            date: "November 2025",
            image: "assets/certificates/kaggle-python-coder.png",
            credentialUrl: "https://www.kaggle.com",
            description: "Verified Kaggle achievement badge awarded to P. Sannith (CSE 42) in November 2025 for demonstrated Python programming expertise and data science skill mastery.",
            technologies: ["Python", "Kaggle", "Programming", "Data Science"],
            buttonText: "View Certificate"
        },
        {
            id: "kaggle-community-member",
            title: "Kaggle Community Member",
            organization: "Kaggle",
            type: "Kaggle Achievement",
            date: "December 26, 2025",
            image: "assets/certificates/kaggle-community-member.png",
            credentialUrl: "https://www.kaggle.com",
            description: "Official Kaggle Community Member recognition certificate awarded to P. Sannith (CSE 42) on December 26, 2025 for active participation and contributions in the global Kaggle community.",
            technologies: ["Kaggle", "Community", "Data Science", "Technology"],
            buttonText: "View Certificate"
        },
        {
            title: "Kaggle Code Forker",
            organization: "Kaggle",
            type: "Kaggle Achievement",
            date: "2025",
            image: "assets/certificates/kaggle-code-forker.png",
            credentialUrl: "https://www.kaggle.com",
            description: "Kaggle achievement badge recognizing open-source code iteration and notebook forking across machine learning repositories.",
            technologies: ["Kaggle", "Open Source", "Python", "Code Forking"]
        },
        {
            title: "Kaggle Vampire",
            organization: "Kaggle",
            type: "Kaggle Achievement",
            date: "2025",
            image: "assets/certificates/kaggle-vampire.png",
            credentialUrl: "https://www.kaggle.com",
            description: "Kaggle achievement badge earned during community challenge milestones.",
            technologies: ["Kaggle", "Community", "Data Science"]
        },
        {
            title: "Google Cloud Innovator & Premium Tier Member",
            organization: "Google Developer Program / Google Cloud",
            type: "Technical Achievement",
            date: "Jan 2026",
            image: "assets/certificates/google-cloud-innovator.png",
            description: "Recognized as a Google Cloud Innovator and Premium Tier Member of the Google Developer Program for cloud computing expertise and active participation in developer ecosystems.",
            technologies: ["Google Cloud", "Google Developers", "Cloud Architecture", "Generative AI"]
        },
        {
            title: "5-Day AI Agents Intensive",
            organization: "Google / Kaggle",
            type: "Course Completion",
            date: "Jul 2026",
            image: "assets/certificates/google-kaggle-ai-agents.jpg",
            credentialUrl: "https://www.kaggle.com",
            description: "Intensive deep-dive into multi-agent workflows, tool calling, memory management, and autonomous reasoning loops.",
            technologies: ["Agentic AI", "Google AI", "Kaggle", "LLMs"]
        },
        {
            title: "Agentic AI Virtual Internship",
            organization: "Brain O Vision",
            type: "Internship",
            date: "Jan 2026",
            image: "assets/certificates/brain-o-vision-agentic-ai.jpg",
            credentialUrl: "",
            description: "Virtual internship focusing on developing intelligent agent frameworks and backend AI tool integrations.",
            technologies: ["Agentic AI", "Python", "LangChain"],
            documentUrl: "assets/certificates/brain-o-vision-agentic-ai.pdf",
            credentialUrl: "assets/certificates/brain-o-vision-agentic-ai.pdf"
        },
        {
            title: "Agentic AI Saksham Program",
            organization: "NASSCOM / KUCE&T",
            type: "Program",
            date: "Nov 2025",
            image: "assets/certificates/nasscom-agentic-ai.jpg",
            credentialUrl: "",
            description: "NASSCOM Saksham initiative certification in Agentic AI architecture, state management, and real-time agent execution environments.",
            technologies: ["Agentic AI", "NASSCOM", "AI Architecture"],
            buttonText: "View Certificate"
        },
        {
            title: "Cybersecurity Analyst Job Simulation",
            organization: "TATA / Forage",
            type: "Simulation",
            date: "Recent",
            image: "assets/certificates/tata-cybersecurity.jpg",
            credentialUrl: "https://www.theforage.com",
            description: "Completed practical job simulation in identity and access management (IAM), vulnerability assessment, and threat mitigation strategies.",
            technologies: ["Cybersecurity", "IAM", "Security Auditing", "TATA"],
            buttonText: "Open Credential",
            documentUrl: "assets/certificates/tata-cybersecurity.pdf",
            credentialUrl: "assets/certificates/tata-cybersecurity.pdf"
        },
        {
            title: "Data Analytics Job Simulation",
            organization: "Deloitte / Forage",
            type: "Simulation",
            date: "Nov 2025",
            image: "assets/certificates/deloitte-data-analytics.jpg",
            credentialUrl: "https://www.theforage.com",
            description: "Simulated corporate data analysis, cleaning raw datasets, building telemetry dashboards, and presenting executive business insights.",
            technologies: ["Data Analytics", "Deloitte", "Excel", "Data Cleaning"],
            buttonText: "Open Credential",
            documentUrl: "assets/certificates/deloitte-data-analytics.pdf",
            credentialUrl: "assets/certificates/deloitte-data-analytics.pdf"
        },
        {
            title: "Data Science & Analytics",
            organization: "Proxenix",
            type: "Internship Offer",
            date: "Dec 2025",
            image: "assets/certificates/proxenix-data-science.jpg",
            credentialUrl: "",
            description: "Data Science internship program focused on statistical modeling, exploratory data analysis, and scalable data pipeline development.",
            technologies: ["Data Science", "Analytics", "Python", "Machine Learning"],
            buttonText: "View Certificate",
            documentUrl: "assets/certificates/proxenix-data-science.pdf",
            credentialUrl: "assets/certificates/proxenix-data-science.pdf"
        },
        {
            id: "webxcelerate",
            title: "Certificate of Project Completion – WebXcelerate",
            organization: "Poditivity – C-iRE, KITSW",
            type: "Project Completion",
            date: "March 6–7, 2025",
            image: "assets/certificates/webxcelerate-project-completion.jpg",
            documentUrl: "assets/certificates/webxcelerate-project-completion.pdf",
            credentialUrl: "assets/certificates/webxcelerate-project-completion.pdf",
            description: "Successfully completed the WebXcelerate project, demonstrating proficiency in Fundamentals of Frontend Web Development and hands-on implementation during the event held on March 6–7, 2025. Organized by Poditivity in collaboration with Centre for Innovation, Research & Entrepreneurship (C-iRE), KITSW.",
            technologies: ["Frontend Development", "Web Development", "Project", "HTML/CSS/JavaScript"],
            buttonText: "View Certificate"
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
            title: "Scalable WordPress Hosting with LAMP Stack on AWS",
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
