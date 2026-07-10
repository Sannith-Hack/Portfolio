import os
import re

file_path = "style.css"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace max-height and object-position to allow full height
content = content.replace("max-height: 400px;", "")
content = content.replace("object-position: top;", "")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("CSS updated successfully!")
