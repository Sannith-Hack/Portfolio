import os

file_path = "style.css"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Add word wrap to body
content = content.replace("overflow-x: hidden;", "overflow-x: hidden;\n  word-wrap: break-word;\n  overflow-wrap: break-word;")

# Fix the two project card img classes
old_1 = """.project .projects .card img {
  width: 100%;
  height: 50%;
  object-fit: cover;"""
new_1 = """.project .projects .card img {
  width: 100%;
  height: 50%;
  object-fit: contain;
  background-color: rgba(25, 25, 25, 0.4);
  padding: 10px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;"""

old_2 = """.project .container .content .projects .card img {
  width: 100%;
  height: 250px;
  object-fit: cover;"""
new_2 = """.project .container .content .projects .card img {
  width: 100%;
  height: 250px;
  object-fit: contain;
  background-color: rgba(25, 25, 25, 0.4);
  padding: 10px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;"""

content = content.replace(old_1, new_1)
content = content.replace(old_2, new_2)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("CSS updated successfully!")
