import re

# File paths
input_file = "app/industries/retail-commerce/page.js"
output_file = "app/industries/retail-commerce/page.js"

# Read original JS content
with open(input_file, "r", encoding="utf-8") as f:
    content = f.read()

# Replace hero section div (between Retail Challenges and Retail Operating System) with luxury glass style
hero_pattern = re.compile(
    r'(<\s*{\s*/\*\s*Retail Challenges\s*\*/.*?)(<\s*h2.*?Retail Operating System.*?>)',
    re.DOTALL
)

new_hero = r"""
{/* Retail Challenges */}
<div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-b from-black/60 via-black/50 to-black/40 p-8 shadow-lg">
  <img src="/images/hero_luxury_glass.png" alt="Luxury Retail Hero" className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-3xl"/>
  <h2 className="text-4xl font-semibold text-center mb-12 z-10 relative text-white">Retail Challenges</h2>
  <div className="grid gap-6 md:grid-cols-3 z-10 relative text-white">
    <div className="rounded-xl bg-black/40 p-6">
      <h3 className="font-semibold mb-2">Inventory Inaccuracies</h3>
      <p>Stock visibility is fragmented across locations, causing overstock and lost sales.</p>
    </div>
    <div className="rounded-xl bg-black/40 p-6">
      <h3 className="font-semibold mb-2">Disconnected Systems</h3>
      <p>Different software across stores leads to data silos and slow operations.</p>
    </div>
    <div className="rounded-xl bg-black/40 p-6">
      <h3 className="font-semibold mb-2">Customer Churn</h3>
      <p>Lack of real-time customer insights leads to missed opportunities.</p>
    </div>
  </div>
</div>
"""

# Substitute the hero section while keeping all other content intact
new_content = hero_pattern.sub(lambda m: new_hero + m.group(2), content)

# Save updated content back to file
with open(output_file, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Retail Commerce hero section updated with luxury glass style and full text preserved.")
