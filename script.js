// Elements
const menu = document.getElementById("menu");
const closeButton = document.getElementById("close-mobile");
const nav = document.getElementById("nav-mobile");
const navLinks = document.querySelectorAll(".nav-link");


const getInTouchBtn = document.getElementById("get-in-touch-btn");
getInTouchBtn.addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
  });
});

/* --- ADVANCED FEATURES LOGIC --- */

// Interactive SQL Console Logic
const runSqlBtn = document.getElementById("run-sql-btn");
const sqlQuerySelect = document.getElementById("sql-query-select");
const sqlOutput = document.getElementById("sql-output");

const mockDatabase = {
    "SELECT * FROM projects WHERE type = 'Backend';": `
id | title        | tech      | type
---|--------------|-----------|---------
1  | EcoHaven     | Node.js   | Backend
2  | NCC Air Wing | Supabase  | Backend
(2 rows returned in 12ms)`,
    "SELECT title, tech FROM projects ORDER BY date DESC;": `
title                  | tech
-----------------------|-----------
College Management Sys | Next.js
Task Manager           | React
NCC Air Wing           | Supabase
EcoHaven               | Node.js
(4 rows returned in 8ms)`,
    "SELECT COUNT(*) FROM projects WHERE status = 'Completed';": `
count
-----
4
(1 row returned in 3ms)`
};

if (runSqlBtn && sqlQuerySelect && sqlOutput) {
    runSqlBtn.addEventListener("click", () => {
        const query = sqlQuerySelect.value;
        sqlOutput.innerHTML = `> Running query...<br><span style="color:#fff">${query}</span><br>`;
        
        // Simulate network delay
        setTimeout(() => {
            const result = mockDatabase[query] || "Query returned 0 rows.";
            sqlOutput.innerHTML += result;
        }, 500);
    });
}

// Live System Status Mock
const statusGrid = document.getElementById("status-grid");

function updateSystemStatus() {
    if (!statusGrid) return;
    
    // Simulate some fluctuating metrics
    const apiLatency = Math.floor(Math.random() * 50) + 15 + "ms";
    const dbConnections = Math.floor(Math.random() * 10) + 40;
    const memoryUsage = Math.floor(Math.random() * 15) + 45 + "%";

    statusGrid.innerHTML = `
        <div class="status-item">
            <h4>API Status</h4>
            <div class="value"><span class="indicator pulse"></span>Online</div>
        </div>
        <div class="status-item">
            <h4>API Latency</h4>
            <div class="value" style="color: #a0a0a0">${apiLatency}</div>
        </div>
        <div class="status-item">
            <h4>Active DB Connections</h4>
            <div class="value" style="color: #4dff4d">${dbConnections}</div>
        </div>
        <div class="status-item">
            <h4>Server Memory</h4>
            <div class="value" style="color: #ffbd2e">${memoryUsage}</div>
        </div>
    `;
}

// Initial call and set interval for mock live updates
updateSystemStatus();
setInterval(updateSystemStatus, 3000);

// Terminal Logic
const terminalInput = document.getElementById("terminal-input");
const terminalBody = document.getElementById("terminal-body");
const terminalInputLine = document.getElementById("terminal-input-line");

const commands = {
    "help": "Available commands: \n- about: Learn more about Sannith\n- skills: List technical skills\n- clear: Clear the terminal\n- sudo: Execute a command as superuser",
    "about": "Sannith is a Backend Developer with a 440+ day coding streak, specializing in database optimization and secure server architecture.",
    "skills": "Backend: Java, MySQL, PostgreSQL, Supabase, Node.js\nFrontend: React, HTML/CSS, TS/JS\nDevOps: Docker, AWS, Linux",
    "sudo": "Sannith is not in the sudoers file. This incident will be reported.",
};

if (terminalInput && terminalBody) {
    terminalInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            const cmd = terminalInput.value.trim().toLowerCase();
            
            // Create response block
            const historyLine = document.createElement("div");
            historyLine.innerHTML = `<span class="prompt">sannith@portfolio:~$</span> <span style="color:#fff">${cmd}</span>`;
            
            const responseLine = document.createElement("div");
            responseLine.className = "terminal-response";
            
            if (cmd === "clear") {
                terminalBody.innerHTML = "<p>Terminal cleared.</p>";
            } else if (cmd === "") {
                responseLine.textContent = "";
            } else if (commands[cmd]) {
                responseLine.textContent = commands[cmd];
            } else {
                responseLine.textContent = `bash: ${cmd}: command not found`;
            }
            
            if(cmd !== "clear") {
                terminalBody.insertBefore(historyLine, terminalInputLine);
                terminalBody.insertBefore(responseLine, terminalInputLine);
            }
            
            terminalInput.value = "";
            terminalBody.scrollTop = terminalBody.scrollHeight; // auto scroll
        }
    });
    
    // Focus input when clicking anywhere in terminal
    terminalBody.addEventListener("click", () => terminalInput.focus());
}


/* --- RADAR CHART LOGIC --- */
const ctx = document.getElementById("radarChart");
if (ctx) {
    new Chart(ctx, {
        type: "radar",
        data: {
            labels: [
                "Logic & Algorithms",
                "Security",
                "Database Design",
                "API Design",
                "Data Visualization",
                "System Architecture"
            ],
            datasets: [{
                label: "Technical Proficiency",
                data: [90, 85, 95, 88, 80, 82],
                fill: true,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderColor: "rgba(255, 255, 255, 1)",
                pointBackgroundColor: "rgba(255, 255, 255, 1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255, 255, 255, 1)"
            }]
        },
        options: {
            elements: {
                line: {
                    borderWidth: 3
                }
            },
            scales: {
                r: {
                    angleLines: { color: "rgba(255, 255, 255, 0.2)" },
                    grid: { color: "rgba(255, 255, 255, 0.2)" },
                    pointLabels: { color: "#fff", font: { size: 12 } },
                    ticks: { display: false },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

