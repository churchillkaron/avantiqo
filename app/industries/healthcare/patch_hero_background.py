import re

file_path = "app/industries/healthcare/page.js"
bg_path = "/images/a_dark_cinematic_high_tech_healthcare_website_hero.png"

# Copy the uploaded image to the public images folder
import shutil
shutil.copy("/mnt/data/a_dark_cinematic_high_tech_healthcare_website_he.png", f"public{bg_path}")

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace the hero <Image> src line
pattern = re.compile(r'(src=")(/images/.*?)(\.png")')
replacement = r'\1' + bg_path + r'\3'

content_new = pattern.sub(replacement, content, count=1)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content_new)

print("Healthcare hero background patched successfully!")
