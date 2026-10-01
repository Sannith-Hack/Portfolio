// Toast Notification Helper
export function showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast-message toast-${type}`;
    const icon = type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-triangle' : 'fa-info-circle';
    toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}

export function initNavigation() {
    const menu = document.getElementById("menu");
    const closeButton = document.getElementById("close-mobile");
    const nav = document.getElementById("nav-mobile");
    const navLinks = document.querySelectorAll(".nav-link");
    const header = document.querySelector("header");

    const closeNav = () => {
        if (nav) nav.classList.remove("show");
        document.body.style.overflow = "";
    };

    if (menu) {
        menu.addEventListener("click", () => {
            if (nav) nav.classList.add("show");
            document.body.style.overflow = "hidden";
        });
    }

    if (closeButton) {
        closeButton.addEventListener("click", closeNav);
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", closeNav);
    });

    if (nav) {
        nav.addEventListener("click", (e) => {
            if (e.target === nav) {
                closeNav();
            }
        });
    }

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeNav();
        }
    });

    // Sticky Header backdrop & shadow
    window.addEventListener("scroll", () => {
        if (header) {
            if (window.scrollY > 40) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }
        updateActiveNav();
    });

    // ScrollSpy active link update
    function updateActiveNav() {
        const sections = document.querySelectorAll("section[id]");
        const scrollPosition = window.scrollY + 150;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll("header nav a").forEach((a) => {
                    a.classList.remove("active");
                    if (a.getAttribute("href") === `#${sectionId}`) {
                        a.classList.add("active");
                    }
                });
            }
        });
    }

    const showWorkBtn = document.getElementById("show-work-btn");
    if (showWorkBtn) {
        showWorkBtn.addEventListener("click", () => {
            const projSec = document.getElementById("project");
            if (projSec) projSec.scrollIntoView({ behavior: "smooth" });
        });
    }

    const getInTouchBtn = document.getElementById("get-in-touch-btn");
    if (getInTouchBtn) {
        getInTouchBtn.addEventListener("click", () => {
            const contactSec = document.getElementById("contact");
            if (contactSec) contactSec.scrollIntoView({ behavior: "smooth" });
        });
    }

    // Copy to clipboard actions for contact cards
    const copyBtns = document.querySelectorAll("[data-copy]");
    copyBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const textToCopy = btn.getAttribute("data-copy");
            if (navigator.clipboard) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    showToast(`Copied to clipboard: ${textToCopy}`, "success");
                }).catch(() => {
                    showToast(`Copy failed. Please manually copy: ${textToCopy}`, "error");
                });
            }
        });
    });
}

export function initSQLPlayground() {
    const runSqlBtn = document.getElementById("run-sql-btn");
    const sqlQuerySelect = document.getElementById("sql-query-select");
    const sqlOutput = document.getElementById("sql-output");

    const mockDatabase = {
        "SELECT * FROM projects WHERE type = 'Backend';": `
+----+--------------------------------+-----------+-----------+---------+
| id | title                          | tech      | type      | status  |
+----+--------------------------------+-----------+-----------+---------+
| 1  | KUCET College Management Sys   | Next.js16 | FullStack | Online  |
| 2  | AegisPredict (SIH26184)        | Neo4j/XGB | Graph AI  | Active  |
| 3  | GPS-CAM (T-DDMS)               | Kotlin/SDK| Mobile    | Deployed|
| 4  | Anna Canteen TV Monitoring     | Supabase  | Realtime  | Online  |
| 5  | ZestBite Food Delivery Engine  | Express DI| Backend   | Ready   |
| 6  | Healthcare AI Agent (RAG)      | FastAPI   | AI Agent  | Active  |
+----+--------------------------------+-----------+-----------+---------+
Query executed: 6 rows in set (0.006 sec) • Memory: 1.4 MB`,

        "SELECT title, tech FROM projects ORDER BY date DESC;": `
+------------------------------------+------------------------------------+
| title                              | tech                               |
+------------------------------------+------------------------------------+
| KUCET College Management System    | Next.js 16, TiDB, Docker, 665 Tests|
| AegisPredict Money-Mule Tracing    | Neo4j Graph DB, XGBoost, DBSCAN    |
| Telangana Display Monitoring (DDMS)| Kotlin Compose, CameraX, Mock GPS  |
| Anna Canteen TV Monitoring (AP)    | React 18, Supabase Realtime, RLS   |
| HECAR Clinical Diagnostic Suite    | Python, XGBoost, Streamlit, OCR    |
| Keyboard Combat for KUCE-T         | React, Supabase Channels, Zustand  |
| 3D Printer Safety Monitor          | ESP8266, Non-blocking C++, LittleFS|
+------------------------------------+------------------------------------+
Query executed: 7 rows in set (0.003 sec)`,

        "SELECT COUNT(*) FROM projects WHERE status = 'Completed';": `
+--------------------------+
| COUNT(*) (All Verified)  |
+--------------------------+
| 23                       |
+--------------------------+
Query executed: 1 row in set (0.001 sec)`
    };

    if (runSqlBtn && sqlQuerySelect && sqlOutput) {
        runSqlBtn.addEventListener("click", () => {
            const query = sqlQuerySelect.value;
            sqlOutput.innerHTML = `<span style="color:#6366f1;">> Parsing & executing query in mock PostgreSQL database...</span><br><span style="color:#38bdf8;">$ ${query}</span><br>`;
            
            setTimeout(() => {
                const result = mockDatabase[query] || `
+-------------------------------------------------------+
| Notice: Query parsed successfully. 0 rows affected.   |
+-------------------------------------------------------+`;
                sqlOutput.innerHTML += `<pre class="sql-result-code">${result}</pre>`;
                showToast("SQL Query executed successfully!", "success");
            }, 300);
        });
    }
}

export function initSystemStatus() {
    const statusGrid = document.getElementById("status-grid");
    if (!statusGrid) return;
    
    function updateSystemStatus() {
        const latencyVal = Math.floor(Math.random() * 25) + 18;
        const dbConnections = Math.floor(Math.random() * 8) + 42;
        const memoryUsage = Math.floor(Math.random() * 8) + 38;
        const uptimeHours = "99.98%";

        statusGrid.innerHTML = `
            <div class="status-item">
                <div class="status-item-header">
                    <h4>Cluster API Status</h4>
                    <span class="status-badge-online"><span class="indicator pulse"></span>Healthy</span>
                </div>
                <div class="value">Online</div>
                <small>Endpoints responding (200 OK)</small>
            </div>
            <div class="status-item">
                <div class="status-item-header">
                    <h4>Network Latency</h4>
                    <i class="fas fa-bolt" style="color: #38bdf8;"></i>
                </div>
                <div class="value" style="color: #38bdf8">${latencyVal} ms</div>
                <small>Avg Edge roundtrip time</small>
            </div>
            <div class="status-item">
                <div class="status-item-header">
                    <h4>Active Connection Pool</h4>
                    <i class="fas fa-database" style="color: #10b981;"></i>
                </div>
                <div class="value" style="color: #10b981">${dbConnections} conns</div>
                <small>PostgreSQL & Supabase pools</small>
            </div>
            <div class="status-item">
                <div class="status-item-header">
                    <h4>Telemetry Uptime</h4>
                    <i class="fas fa-server" style="color: #a855f7;"></i>
                </div>
                <div class="value" style="color: #a855f7">${uptimeHours}</div>
                <small>Memory footprint: ${memoryUsage}%</small>
            </div>
        `;
    }

    updateSystemStatus();
    setInterval(updateSystemStatus, 3500);
}

export function initLabMicroTools() {
    // 1. RegEx Validator
    const regexInput = document.getElementById('lab-regex-input');
    const regexLength = document.getElementById('rule-length');
    const regexUpper = document.getElementById('rule-upper');
    const regexNum = document.getElementById('rule-number');
    const regexSpecial = document.getElementById('rule-special');

    if (regexInput) {
        regexInput.addEventListener('input', (e) => {
            const val = e.target.value;
            const hasLength = val.length >= 8;
            const hasUpper = /[A-Z]/.test(val);
            const hasNum = /[0-9]/.test(val);
            const hasSpecial = /[^A-Za-z0-9]/.test(val);

            toggleRule(regexLength, hasLength);
            toggleRule(regexUpper, hasUpper);
            toggleRule(regexNum, hasNum);
            toggleRule(regexSpecial, hasSpecial);
        });
    }

    function toggleRule(el, valid) {
        if (!el) return;
        if (valid) {
            el.className = 'rule-item rule-valid';
            el.innerHTML = `<i class="fas fa-check-circle"></i> ${el.getAttribute('data-label')}`;
        } else {
            el.className = 'rule-item rule-invalid';
            el.innerHTML = `<i class="fas fa-circle"></i> ${el.getAttribute('data-label')}`;
        }
    }

    // 2. JSON to CSV Converter
    const jsonInput = document.getElementById('lab-json-input');
    const convertBtn = document.getElementById('lab-convert-btn');
    const copyCsvBtn = document.getElementById('lab-copy-csv-btn');
    const csvOutput = document.getElementById('lab-csv-output');

    if (convertBtn && jsonInput && csvOutput) {
        convertBtn.addEventListener('click', () => {
            try {
                const data = JSON.parse(jsonInput.value);
                if (!Array.isArray(data) || data.length === 0) {
                    throw new Error("JSON must be an array of objects (e.g. [{...}, {...}])");
                }
                const headers = Object.keys(data[0]);
                const rows = data.map(obj => headers.map(h => `"${(obj[h] ?? '').toString().replace(/"/g, '""')}"`).join(','));
                const csv = [headers.join(','), ...rows].join('\n');
                csvOutput.textContent = csv;
                showToast("JSON parsed to CSV in 2ms!", "success");
            } catch (err) {
                csvOutput.textContent = `Error parsing JSON: ${err.message}`;
                showToast(err.message, "error");
            }
        });
    }

    if (copyCsvBtn && csvOutput) {
        copyCsvBtn.addEventListener('click', () => {
            const content = csvOutput.textContent;
            if (content && !content.startsWith('Error')) {
                navigator.clipboard.writeText(content).then(() => {
                    showToast("CSV copied to clipboard!", "success");
                });
            }
        });
    }

    // 3. JWT Guard Simulator
    const roleSelect = document.getElementById('jwt-role-select');
    const jwtOutput = document.getElementById('jwt-payload-output');
    const authStatusBadge = document.getElementById('auth-status-badge');

    if (roleSelect && jwtOutput) {
        const updateJwtPreview = () => {
            const role = roleSelect.value;
            const now = Math.floor(Date.now() / 1000);
            const payload = {
                sub: "usr_sannith_042",
                name: "P. Sannith",
                role: role,
                permissions: role === 'admin' 
                    ? ["db:read", "db:write", "users:manage", "deploy:execute"] 
                    : role === 'cadet'
                    ? ["portal:read", "attendance:mark", "profile:edit"]
                    : ["read:public", "demo:run"],
                iat: now,
                exp: now + 3600,
                iss: "https://auth.sannith.dev"
            };
            jwtOutput.textContent = JSON.stringify(payload, null, 2);
            if (authStatusBadge) {
                authStatusBadge.className = `auth-badge auth-${role}`;
                authStatusBadge.textContent = role === 'admin' ? 'Superuser Verified' : `${role.toUpperCase()} Verified`;
            }
        };

        roleSelect.addEventListener('change', updateJwtPreview);
        updateJwtPreview();
    }
}

export function initTerminal() {
    const terminalInput = document.getElementById("terminal-input");
    const terminalBody = document.getElementById("terminal-body");
    const terminalInputLine = document.getElementById("terminal-input-line");

    const commands = {
        "help": `Available commands:
  • about       - Executive engineering bio, education & career status
  • skills      - Backend, Frontend, AI/ML, Mobile & Hardware summary
  • projects    - Flagship showcase systems (23 total)
  • certs       - 19 verified credentials, residencies & badges
  • languages   - Spoken language proficiency
  • contact     - Direct email, phone, and professional links
  • stack       - Complete architectural toolchain
  • status      - Career status & immediate availability
  • matrix      - Cyber terminal visual stream
  • whoami      - User identity and permissions
  • clear       - Wipe terminal viewport`,

        "about": "P. Sannith (Pasunooti Sannith): Full-Stack Engineer, AI Systems Developer & Distributed Systems Architect. B.Tech in CSE (8.5 CGPA) from Kakatiya University (KUCE&T 2022–2026). Currently seeking full-time software engineering roles. Active 450+ day continuous code streak on GitHub.",

        "status": "Current Status: Actively Seeking Opportunities / Open to Work (Available for Software Engineer, Full-Stack, Backend & AI roles).\nCampus Selection on Record: Associate Software Engineer @ BrightLine Technologies (Letter of Intent received; seeking immediate full-time software engineering roles).",

        "languages": "Spoken Languages:\n  • Hindi: Native / Fluent\n  • English: Professional Working Proficiency\n  • Telugu: Conversational Proficiency",

        "skills": "Frontend: React 19, Next.js 16 (RSC), TypeScript, Tailwind CSS v4, Zustand\nBackend: Node.js 20+, Express, FastAPI, REST APIs, SSE, DI & Repository Patterns\nDatabases: PostgreSQL, MySQL, TiDB Cloud, Supabase RLS, ChromaDB, Neo4j, Redis\nAI & Agents: LangChain, Groq (Llama 3.3-70B), Gemini Flash, XGBoost, SHAP, Vector RAG\nMobile & IoT: Kotlin Jetpack Compose (SDK 35), React Native Hermes, ESP8266/ESP32, BMS",

        "projects": "Flagship Systems (23 Total):\n  1. KUCET College Management System (Next.js 16, TiDB, Docker, 665 Tests, 303 Admissions)\n  2. AegisPredict: Money-Mule Tracing & Pre-Crime Intervention (SIH26184, Neo4j, XGBoost)\n  3. Telangana Display Monitoring (T-DDMS / GPS-CAM, Native Kotlin Compose, SDK 35)\n  4. Anna Canteen TV Monitoring System (204 Canteens across AP, Supabase Realtime)\n  5. HECAR: Clinical Diagnostic Suite & 10-Yr Stroke Predictor (Python, XGBoost, OCR)\n  6. ZestBite: Decoupled Food Delivery Ecosystem (Express DI, Next.js, Native Android)\n  7. Keyboard Combat for KUCE-T (Live KU Fest 2026 Competitive Typing Platform)\n  8. 3D Printer Enclosure Environmental Safety Monitor (ESP8266, Non-blocking C++)",

        "certs": "Verified Credentials (19 Total):\n  • Agentic AI Saksham Virtual Internship & Residency — Capabl / NASSCOM (CPBL26PI375)\n  • Flutter & REST APIs Technical Bootcamp — C-DAC Mohali / FutureSkills PRIME\n  • 5-Day AI Agents Intensive Course with Google — Google / Kaggle\n  • Graduate Certificate in Data Analytics — PI LABS Research Foundation\n  • Scalable AWS LAMP Stack Hosting — Orbit Learning\n  • Data Analytics Simulation (Deloitte) & Cybersecurity Simulation (TATA)\n  • HackWithHyderabad (Microsoft Office) & Digital Citizen Summit 2024\n  • Google Cloud Innovator & Kaggle Badges (Python Coder, Forker, Vampire, Community)",

        "contact": "Email: sunnysunnit@gmail.com\nPhone: +91 7498461916\nGitHub: https://github.com/Sannith-Hack\nLinkedIn: https://www.linkedin.com/in/sannith-pasunooti-183b86302/",

        "stack": "Runtime: Node.js 20+, Python 3.12 | UI: Next.js 16, React 19, Tailwind v4 | DB: PostgreSQL, TiDB Cloud, Supabase | AI: Groq, Gemini, LangChain | Cloud: AWS, Docker",
        
        "whoami": "guest_recruiter@sannith-portfolio (Permissions: READ, EXECUTE, INTERACT)",

        "matrix": "Wake up, Neo...\nThe Matrix has you.\nFollow the white rabbit.\nKnock, knock, Neo.",

        "sudo": "Permission check: 'guest_recruiter' is not in the sudoers file. Sannith has been notified via security telemetry."
    };

    if (terminalInput && terminalBody && terminalInputLine) {
        terminalInput.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                const cmd = terminalInput.value.trim().toLowerCase();
                
                if (cmd === "clear") {
                    terminalBody.innerHTML = "";
                    const clearMsg = document.createElement("p");
                    clearMsg.className = "term-welcome";
                    clearMsg.textContent = "Terminal cleared. Type 'help' for available commands.";
                    terminalBody.appendChild(clearMsg);
                    terminalBody.appendChild(terminalInputLine);
                    terminalInput.value = "";
                    return;
                }

                const historyLine = document.createElement("div");
                historyLine.className = "term-history-line";
                historyLine.innerHTML = `<span class="prompt">sannith@portfolio:~$</span> <span class="term-entered-cmd">${cmd}</span>`;
                
                const responseLine = document.createElement("div");
                responseLine.className = "terminal-response";
                
                if (cmd === "") {
                    responseLine.textContent = "";
                } else if (commands[cmd]) {
                    responseLine.textContent = commands[cmd];
                } else {
                    responseLine.textContent = `bash: command not found: ${cmd}. Type 'help' for command list.`;
                }
                
                terminalBody.insertBefore(historyLine, terminalInputLine);
                terminalBody.insertBefore(responseLine, terminalInputLine);
                
                terminalInput.value = "";
                terminalBody.scrollTop = terminalBody.scrollHeight;
            }
        });
        
        terminalBody.addEventListener("click", () => terminalInput.focus());
    }
}

export function initChart() {
    const ctx = document.getElementById("radarChart");
    if (ctx && window.Chart) {
        new Chart(ctx, {
            type: "radar",
            data: {
                labels: [
                    "Database Optimization",
                    "Backend Architecture",
                    "API Protocols & SSE",
                    "AI Agent & RAG Workflows",
                    "Hardware / IoT Systems",
                    "Frontend & Mobile"
                ],
                datasets: [{
                    label: "Core Proficiency",
                    data: [95, 92, 90, 88, 85, 86],
                    fill: true,
                    backgroundColor: "rgba(99, 102, 241, 0.25)",
                    borderColor: "#6366f1",
                    pointBackgroundColor: "#38bdf8",
                    pointBorderColor: "#ffffff",
                    pointHoverBackgroundColor: "#ffffff",
                    pointHoverBorderColor: "#6366f1",
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: { color: "rgba(255, 255, 255, 0.12)" },
                        grid: { color: "rgba(255, 255, 255, 0.08)" },
                        pointLabels: { 
                            color: "#cbd5e1", 
                            font: { 
                                size: 12,
                                family: "'Outfit', sans-serif",
                                weight: "600"
                            } 
                        },
                        ticks: { display: false },
                        suggestedMin: 50,
                        suggestedMax: 100
                    }
                },
                plugins: { 
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: "rgba(15, 23, 42, 0.95)",
                        titleFont: { family: "'Outfit', sans-serif" },
                        bodyFont: { family: "'Outfit', sans-serif" },
                        borderColor: "rgba(99, 102, 241, 0.4)",
                        borderWidth: 1,
                        padding: 10
                    }
                }
            }
        });
    }
}
