import os
import re

file_path = "style.css"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Update the main card image styling
card_img_pattern = re.compile(r'\.project \.container \.content \.projects \.card img \{[^\}]+\}')
new_card_img = """.project .container .content .projects .card img {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  object-position: top;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  transition: transform 0.5s ease;
  margin: 0;
  padding: 0;
  display: block;
}"""
content = card_img_pattern.sub(new_card_img, content)

# Update the alternative card image styling (if it exists)
alt_card_img_pattern = re.compile(r'\.project \.projects \.card img \{[^\}]+\}')
new_alt_card_img = """.project .projects .card img {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  object-position: top;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  transition: transform 0.4s ease;
  margin: 0;
  padding: 0;
  display: block;
}"""
content = alt_card_img_pattern.sub(new_alt_card_img, content)

# Ensure the card itself is a flex column so the buttons can be pushed to the bottom
# We will append to .project .container .content .projects .card { if not already flex
card_pattern = re.compile(r'(\.project \.container \.content \.projects \.card \{[^\}]+height: auto !important;[^\}]+)\}')
if 'display: flex;' not in content:
    pass # we'll just add it globally safely below

# It's safer to just append the flex properties to the end of the file
additional_css = """

/* --- CSS GRID/FLEX FIXES FOR CARD HEIGHTS --- */
.project .container .content .projects .card {
  display: flex !important;
  flex-direction: column !important;
  justify-content: flex-start;
  align-items: stretch;
}

.project .container .content .projects .card .description {
  display: flex !important;
  flex-direction: column !important;
  flex-grow: 1 !important;
}

.project .container .content .projects .card .description .action {
  margin-top: auto !important;
}
"""
if "/* --- CSS GRID/FLEX FIXES FOR CARD HEIGHTS --- */" not in content:
    content += additional_css

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("CSS updated successfully!")
