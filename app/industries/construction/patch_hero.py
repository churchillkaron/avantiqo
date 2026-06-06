import shutil

file_path = 'app/industries/construction/page.js'
backup_path = '/tmp/construction-page-backup.js'

# Backup
shutil.copyfile(file_path, backup_path)
print(f"Backup saved to {backup_path}")

# Read file
with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Replacement hero section
hero_lines = [
'      <section className="relative min-h-screen px-6 py-28">\n',
'        <div className="absolute inset-0 bg-[url(/images/construction-hero.png)] bg-cover bg-center brightness-90" />\n',
'        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,5,11,0.55)_0%,rgba(3,5,11,0.85)_60%,rgba(3,5,11,1)_100%)]" />\n',
'        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center">\n',
'          <div className="max-w-4xl rounded-[46px] border border-white/10 bg-black/30 p-8 shadow-[0_35px_140px_rgba(0,0,0,0.65)] backdrop-blur-3xl md:p-12">\n',
'            <p className="mb-7 text-xs uppercase tracking-[0.45em] text-[#D6A66A]">CONSTRUCTION OPERATIONS</p>\n',
'            <h1 className="text-5xl font-extralight leading-[1] tracking-[-0.06em] md:text-6xl lg:text-[72px]">\n',
'              Control Every Project Before<br />\n',
'              <span className="bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#8C6BFF] bg-clip-text text-transparent">Delays Become Losses.</span>\n',
'            </h1>\n',
'            <p className="mt-8 max-w-2xl text-[18px] leading-8 text-white/62">\n',
'              Construction companies do not lose money because they lack work. They lose money because they lose control. Avantiqo connects projects, quotations, procurement, workforce, site reporting, invoices, clients, marketing and synthetic intelligence into one construction operating system.\n',
'            </p>\n',
'            <div className="mt-10 flex flex-col gap-4 sm:flex-row">\n',
'              <Link href="/demo" className="rounded-2xl bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#C9974D] px-9 py-4 text-center font-semibold text-black shadow-[0_0_45px_rgba(214,166,106,0.42)] transition hover:brightness-110">Book Demo</Link>\n',
'              <Link href="/workspace" className="rounded-2xl border border-white/15 bg-white/[0.04] px-9 py-4 text-center font-semibold text-white/80 transition hover:border-[#D6A66A]/40 hover:bg-white/[0.08]">Explore Platform</Link>\n',
'            </div>\n',
'          </div>\n',
'        </div>\n',
'      </section>\n'
]

# Replace hero section in lines 112-170 (0-indexed)
lines[111:170] = hero_lines

# Write back
with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Hero section patched successfully in page.js")
