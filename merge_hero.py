import os
import re

html_path = "index.html"
with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

# 1. Extract hero buttons
btns_match = re.search(r'(<div class="hero-btns".*?</div>)', html, re.DOTALL)
hero_btns = btns_match.group(1) if btns_match else ""

# 2. Build the merged section header
merged_header = """
    <!-- Merged Hero/About Section -->
    <section class="about hero-merged" id="home" style="position: relative; overflow: hidden; z-index: 1; padding-top: 6rem;">
      <!-- Animated Orbs -->
      <div class="hero-bg-orbs">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
      </div>

      <div class="container">
        <div class="content">
          <h1 class="hero-name-text" data-aos="fade-down" style="margin-bottom: 0.5rem; margin-top: 2rem;">SANNITH</h1>
          <h2 data-aos="zoom-in-up" style="text-align: center; margin-bottom: 4rem; font-weight: 300; font-size: 1.5rem; font-family: 'Outfit', sans-serif;">
            Delivering Custom Data Analyst and Backend Solutions that <span style="font-weight: bold; color: #fff;">Stand Out</span>
          </h2>
"""

# 3. Modify the about section to become the merged section
# Find the start of the about section
about_start = r'<section id="about" class="about">\s*<div class="container">\s*<div class="content">\s*<h1 data-aos="zoom-in-down" data-aos-delay="300" class="title">\s*About Me\s*</h1>'
html = re.sub(about_start, merged_header, html, flags=re.DOTALL)

# 4. Inject buttons after description text
desc_end = r'(</div>\s*<!-- GitHub Stats -->)'
html = re.sub(r'(</p>\s*</div>)', r'\1\n              ' + hero_btns, html, count=1)

# 5. Remove the old hero section completely
old_hero_pattern = r'<!-- Hero Section -->\s*<section class="hero" id="home">.*?</section>'
html = re.sub(old_hero_pattern, '', html, flags=re.DOTALL)

# 6. Change Nav links (About -> #home)
html = html.replace('<a href="#about">About</a>', '<a href="#home">About</a>')
html = html.replace('<a class="nav-link" href="#about">About</a>', '<a class="nav-link" href="#home">About</a>')

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html)

print("Merged hero and about sections successfully!")
