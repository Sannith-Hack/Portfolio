import os
import re

# 1. Edit index.html
html_path = "index.html"
with open(html_path, "r", encoding="utf-8") as f:
    html_content = f.read()

# Remove video tag
html_content = re.sub(r'<video.*?id="background-video".*?</video>\s*', '', html_content, flags=re.DOTALL)

# Replace SVG with h1
svg_pattern = r'<svg class="hero-name-svg" viewBox="0 0 1500 500" data-aos="fade-down">\s*<text x="50%" y="50%" text-anchor="middle">SANNITH</text>\s*</svg>'
replacement_h1 = '<h1 class="hero-name-text" data-aos="fade-down">SANNITH</h1>'
html_content = re.sub(svg_pattern, replacement_h1, html_content, flags=re.DOTALL)

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html_content)

# 2. Append CSS to style.css
css_path = "style.css"
with open(css_path, "a", encoding="utf-8") as f:
    f.write("""

/* --- HERO NAME SOLID TEXT FIX --- */
.hero .container .content .hero-name-text {
  text-transform: uppercase;
  font-weight: 900;
  font-size: clamp(3rem, 10vw, 8rem);
  color: #fff;
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: 5px;
}
""")

# 3. Delete the video file
video_file = os.path.join("assets", "images", "12686138_3840_2160_30fps.mp4")
if os.path.exists(video_file):
    os.remove(video_file)
    print(f"Deleted {video_file}")
else:
    print(f"Video file {video_file} not found.")

print("Changes applied successfully!")
