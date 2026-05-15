export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 py-24">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.06),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* TOP */}
        <div className="flex flex-col gap-12 border-b border-white/5 pb-16 lg:flex-row lg:items-end lg:justify-between">

          <div>

            <img
              src="/brand/avantiqo-logo1.png"
              className="h-50 w-auto object-contain"
            />

            <p
              className="mt-8 max-w-xl text-white/40"
              style={{
                fontSize: "17px",
                lineHeight: 1.9,
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              AI-powered business operating infrastructure
              designed for modern enterprise, intelligent
              operations and scalable AI-native companies.
            </p>

          </div>

          <div className="flex items-center gap-4">

            <button className="rounded-2xl bg-gradient-to-r from-[#D6A66A] via-[#B98B57] to-[#8B5CF6] px-7 py-4 text-sm font-medium text-white shadow-[0_0_90px_rgba(168,85,247,.18)] transition hover:scale-[1.02]">
              Book Demo
            </button>

            <button className="rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm text-white/70 backdrop-blur-xl transition hover:border-[#8B5CF6]/30 hover:bg-[#8B5CF6]/10">
              Contact
            </button>

          </div>

        </div>

        {/* LINKS */}
        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-5">

          {[
            {
              title: "Platform",
              links: [
                "Operations",
                "Finance",
                "Analytics",
                "AI Intelligence",
              ],
            },
            {
              title: "AI Studio",
              links: [
                "AI Render",
                "AI Enhance",
                "AI Composite",
                "AI Video",
              ],
            },
            {
              title: "Enterprise",
              links: [
                "Infrastructure",
                "Security",
                "Governance",
                "Multi-location",
              ],
            },
            {
              title: "Company",
              links: [
                "About",
                "Partners",
                "Contact",
                "Careers",
              ],
            },
            {
              title: "Legal",
              links: [
                "Privacy",
                "Terms",
                "Compliance",
                "Security",
              ],
            },
          ].map((group) => (
            <div key={group.title}>

              <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8]">
                {group.title}
              </p>

              <div className="space-y-4">

                {group.links.map((link) => (
                  <div
                    key={link}
                    className="cursor-pointer text-sm text-white/40 transition hover:text-white"
                  >
                    {link}
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-6 border-t border-white/5 pt-10 text-sm text-white/30 lg:flex-row lg:items-center lg:justify-between">

          <div>
            © 2026 Avantiqo. All rights reserved.
          </div>

          <div>
            AI Business Operating Infrastructure
          </div>

        </div>

      </div>

    </footer>
  )
}