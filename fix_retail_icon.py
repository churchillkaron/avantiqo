from pathlib import Path
import re

f = Path("app/industries/retail-commerce/page.js")
text = f.read_text()

# Wrap the Icon render with a check
text = re.sub(
    r'(<Icon className="[^"]*" />)',
    r'{card.icon && \1}',
    text
)

f.write_text(text)
print("RetailCommercePage Icon undefined check applied")
