import re

file_path = "app/industries/healthcare/page.js"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Regex to find the hero section (starts at h.hero?.badge line until the first </div> after buttons)
pattern = re.compile(
    r'(<p className="mb-7 text-xs uppercase tracking-\[0\.45em\] text-\[#D6A66A\]">\s*\{h\.hero\?\..*?\}\s*</p>.*?<div className="mt-10 flex flex-col gap-4 sm:flex-row">.*?</div>)',
    re.DOTALL
)

replacement = '''<div className="rounded-[46px] border border-white/10 bg-black/[0.045] p-8 shadow-[0_35px_140px_rgba(0,0,0,0.55)] backdrop-blur-3xl md:p-12">
<p className="mb-7 text-xs uppercase tracking-[0.45em] text-[#D6A66A]">
Healthcare Doesn't Fail In Treatment.
</p>

<h1 className="text-5xl font-extralight leading-[0.96] tracking-[-0.075em] md:text-7xl lg:text-[88px]">
<span className="bg-gradient-to-r from-[#D6A66A] via-[#E7C38A] to-[#8C6BFF] bg-clip-text text-transparent">
It Fails In Operations.
</span>
</h1>

<p className="mt-8 max-w-3xl text-lg leading-9 text-white/62">
Patients, clinicians, operations, finance, compliance and leadership are connected through one synthetic intelligence layer, providing real-time insights, predictive analytics, and operational visibility to prevent failures before they happen.
</p>

<div className="mt-10 flex flex-col gap-4 sm:flex-row">
<Link
href="/demo"
className="rounded-2xl bg-gradient-to-r from-[#D6A66A] via-[#E7C38A] to-[#C9974D] px-9 py-4 text-center font-semibold text-black shadow-[0_0_45px_rgba(214,166,106,0.42)] transition hover:brightness-110"
>
Request Executive Briefing
</Link>
<Link
href="/workspace"
className="rounded-2xl border border-white/15 bg-white/[0.04] px-9 py-4 text-center font-semibold text-white/80 transition hover:border-[#D6A66A]/40 hover:bg-white/[0.08]"
>
Explore Platform
</Link>
</div>
</div>'''

content_new = pattern.sub(replacement, content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content_new)

print("Healthcare hero patched successfully!")
