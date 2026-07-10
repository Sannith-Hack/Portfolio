import os
import re

html_path = "index.html"
with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

# 1. Add Google Font
if "fonts.googleapis.com" not in html:
    html = html.replace("</head>", '    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800;900&display=swap" rel="stylesheet">\n  </head>')

# 2. Add Orb Background
if "hero-bg-orbs" not in html:
    orb_html = """
    <!-- Animated Orbs -->
    <div class="hero-bg-orbs">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
    </div>
"""
    html = html.replace('<section class="hero" id="home">', '<section class="hero" id="home">' + orb_html)

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html)

css_path = "style.css"
with open(css_path, "r", encoding="utf-8") as f:
    css = f.read()

# 3. Add global font family to body
css = re.sub(r'(body\s*{[^}]*)(\n})', r"\1\n  font-family: 'Outfit', sans-serif;\2", css, count=1)

# 4. Append Orb CSS and gradient text CSS
css += """

/* --- PREMIUM HERO SECTION --- */
.hero {
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.hero-bg-orbs {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  background: #000000;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.6;
  animation: floatOrb 12s infinite ease-in-out alternate;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: rgba(45, 114, 255, 0.4); /* Blue */
  top: -100px;
  left: -100px;
  animation-delay: 0s;
}

.orb-2 {
  width: 500px;
  height: 500px;
  background: rgba(138, 43, 226, 0.35); /* Purple */
  bottom: -150px;
  right: -100px;
  animation-delay: -4s;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: rgba(0, 255, 200, 0.25); /* Cyan */
  top: 40%;
  left: 40%;
  animation-delay: -8s;
}

@keyframes floatOrb {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -30px) scale(1.1); }
  100% { transform: translate(-30px, 40px) scale(1.2); }
}

/* Make SANNITH look stunning */
.hero .container .content .hero-name-text {
  font-family: 'Outfit', sans-serif !important;
  text-transform: uppercase;
  font-weight: 900;
  font-size: clamp(4rem, 12vw, 10rem);
  text-align: center;
  margin-bottom: 0.5rem;
  letter-spacing: 2px;
  /* Premium text gradient */
  background: linear-gradient(135deg, #ffffff 0%, #b3b3b3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 10px 30px rgba(255,255,255,0.05);
}

.hero .container .content h1 {
  font-family: 'Outfit', sans-serif;
}
"""

with open(css_path, "w", encoding="utf-8") as f:
    f.write(css)

print("Hero section enhanced!")
