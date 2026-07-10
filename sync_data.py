import os
import re

file_path = "js/data.js"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace the entire skills array to match GEMINI.md precisely
new_skills = """    skills: [
        {
            category: "Programming Languages",
            icon: "fas fa-code",
            items: ["TypeScript", "JavaScript", "Python", "C++", "C", "Rust", "Java", "R", "SQL"]
        },
        {
            category: "Frontend Technologies",
            icon: "fas fa-laptop-code",
            items: ["React.js (React 19)", "Next.js", "Vite", "HTML5/CSS3", "Tailwind CSS (v4)", "shadcn/ui", "Three.js", "Zustand"]
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
    ],"""
content = re.sub(r'skills: \[\s*\{[\s\S]*?\}\s*\],', new_skills, content)

# Inject the 13th project at the end of the projects array
demo_3d_test = """
        {
            title: "EcoHaven",
            techStack: "TypeScript, Firebase",
            description: "A sustainable second-hand marketplace prototype.",
            features: "Secure user authentication, category filtering, and product lifecycle management.",
            github: "https://github.com/Sannith-Hack/EcoHaven.git",
            image: "assets/images/Cleveroad.jpg"
        },
        {
            title: "Demo-3D-Test",
            techStack: "Three.js, HTML5 localStorage",
            description: "A unique approach to creating and synchronizing a 3D scene across multiple browser windows for advanced web graphics and state management.",
            features: "Advanced 3D graphics rendering and multi-window state synchronization.",
            github: "#",
            image: "assets/images/Task manager app.jpg"
        }
    ],"""
content = content.replace("""        {
            title: "EcoHaven",
            techStack: "TypeScript, Firebase",
            description: "A sustainable second-hand marketplace prototype.",
            features: "Secure user authentication, category filtering, and product lifecycle management.",
            github: "https://github.com/Sannith-Hack/EcoHaven.git",
            image: "assets/images/Cleveroad.jpg"
        }
    ],""", demo_3d_test)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("data.js successfully aligned with GEMINI.md")
