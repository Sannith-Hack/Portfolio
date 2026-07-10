import re

css_path = "style.css"
with open(css_path, "r", encoding="utf-8") as f:
    css = f.read()

# Increase blur
css = css.replace("filter: blur(120px);", "filter: blur(180px);")
css = css.replace("opacity: 0.6;", "opacity: 0.7;")

# Increase sizes
css = css.replace("width: 400px;\n  height: 400px;", "width: 700px;\n  height: 700px;")
css = css.replace("width: 500px;\n  height: 500px;", "width: 800px;\n  height: 800px;")
css = css.replace("width: 300px;\n  height: 300px;", "width: 600px;\n  height: 600px;")

with open(css_path, "w", encoding="utf-8") as f:
    f.write(css)

print("Orbs scaled up successfully!")
