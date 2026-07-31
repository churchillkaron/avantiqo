import Link from "next/link";
import SiteTopNav from "@/app/components/SiteTopNav";
import Footer from "@/components/layout/Footer";

const capabilities = [
  {
    code: "01",
    title: "Finance",
    text: "Accounting, cash, billing, forecasting, reporting and executive financial control.",
  },
  {
    code: "02",
    title: "Operations",
    text: "Work, service delivery, incidents, policies, evidence and performance in one operating flow.",
  },
  {
    code: "03",
    title: "Supply Chain",
    text: "Procurement, suppliers, inventory, warehouses, fulfilment and connected commercial demand.",
  },
  {
    code: "04",
    title: "Commercial",
    text: "Customers, sales, channels, marketing, campaigns, pricing and revenue intelligence.",
  },
  {
    code: "05",
    title: "People",
    text: "Workforce, scheduling, performance, learning, payroll context and employee services.",
  },
  {
    code: "06",
    title: "Creative Studio",
    text: "Advertising, films, images, websites, social content and complete campaigns from one brief.",
  },
  {
    code: "07",
    title: "Projects",
    text: "Plans, budgets, resources, milestones, risks, approvals and accountable delivery.",
  },
  {
    code: "08",
    title: "Intelligence",
    text: "Continuous analysis, prediction, decision support and autonomous action across the enterprise.",
  },
];

const signals = [
  { label: "Revenue intelligence", value: "+18.4%", note: "Opportunity detected" },
  { label: "Operating control", value: "96.8%", note: "Within policy" },
  { label: "Working capital", value: "12.7 days", note: "Improving" },
  { label: "Campaign performance", value: "4.9x", note: "Scaling recommended" },
];

const orchestration = [
  "Observe every connected business signal",
  "Understand relationships across departments",
  "Predict risk, demand and opportunity",
  "Coordinate people, systems and providers",
  "Execute governed actions with evidence",
  "Learn continuously from outcomes",
];

function CommandCentre() {
  return (
    <div className="relative mx-auto w-full max-w-[760px]">
      <div className="absolute -inset-10 rounded-full bg-[#D6A66A]/10 blur-[90px]" />
      <div className="relative overflow-hidden rounded-[34px] border border-[#D6A66A]/25 bg-[linear-gradient(145deg,rgba(20,18,15,.96),rgba(4,5,9,.98))] p-3 shadow-[0_45px_160px_rgba(0,0,0,.72),0_0_90px_rgba(214,166,106,.08)]">
        <div className="rounded-[27px] border border-white/[0.07] bg-[#050609]">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#D6A66A] shadow-[0_0_16px_rgba(214,166,106,.9)]" />
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/55">
                Enterprise intelligence live
              </span>
            </div>
            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1 text-[8px] uppercase tracking-[0.18em] text-emerald-300/80">
              Governed
            </span>
          </div>

          <div className="grid gap-px bg-white/[0.06] md:grid-cols-[1.12fr_.88fr]">
            <div className="bg-[#07080b] p-5 sm:p-7">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.26em] text-[#D6A66A]/75">
                    Business health
                  </p>
                  <p className="mt-3 text-4xl font-light tracking-[-0.05em] text-white sm:text-5xl">
                    91.4
                  </p>
                </div>
                <div className="pb-1 text-right">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">Trajectory</p>
                  <p className="mt-1 text-sm text-emerald-300/85">+7.2%</p>
                </div>
              </div>

              <div className="relative mt-8 h-36 overflow-hidden rounded-2xl border border-white/[0.06] bg-black/35 p-4">
                <div className="absolute inset-x-0 top-1/4 h-px bg-white/[0.045]" />
                <div className="absolute inset-x-0 top-2/4 h-px bg-white/[0.045]" />
                <div className="absolute inset-x-0 top-3/4 h-px bg-white/[0.045]" />
                <svg viewBox="0 0 600 150" className="h-full w-full" aria-hidden="true">
                  <defs>
                    <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#8c6b7e" />
                      <stop offset="52%" stopColor="#d6a66a" />
                      <stop offset="100%" stopColor="#ffe0a0" />
                    </linearGradient>
                    <linearGradient id="areaGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#d6a66a" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="#d6a66a" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 125 C60 118, 70 92, 126 98 S210 120, 264 78 S350 63, 402 72 S484 34, 600 22 L600 150 L0 150 Z" fill="url(#areaGlow)" />
                  <path d="M0 125 C60 118, 70 92, 126 98 S210 120, 264 78 S350 63, 402 72 S484 34, 600 22" fill="none" stroke="url(#lineGlow)" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="600" cy="22" r="6" fill="#f6d88f" />
                </svg>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  ["Risk", "Low"],
                  ["Execution", "94%"],
                  ["Forecast", "+12%"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-3">
                    <p className="text-[8px] uppercase tracking-[0.18em] text-white/30">{label}</p>
                    <p className="mt-2 text-sm text-white/78">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#09090c] p-5 sm:p-7">
              <p className="text-[9px] uppercase tracking-[0.26em] text-[#D6A66A]/75">
                Synthetic intelligence
              </p>
              <div className="mt-5 space-y-3">
                {signals.map((signal, index) => (
                  <div key={signal.label} className="rounded-2xl border border-white/[0.065] bg-white/[0.025] p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.16em] text-white/38">{signal.label}</p>
                        <p className="mt-2 text-xl font-light text-white/90">{signal.value}</p>
                      </div>
                      <span className={`mt-1 h-1.5 w-1.5 rounded-full ${index === 1 ? "bg-emerald-300" : "bg-[#D6A66A]"}`} />
                    </div>
                    <p className="mt-3 border-t border-white/[0.055] pt-3 text-[9px] tracking-[0.08em] text-white/38">
                      {signal.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteTopNav />

      <main className="min-h-screen overflow-hidden bg-[#030303] pt-[84px] text-white">
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,166,106,.12),transparent_34%),radial-gradient(circle_at_88%_30%,rgba(126,86,123,.09),transparent_28%)]" />
        <div className="pointer-events-none fixed inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:78px_78px]" />

        <section className="relative px-5 pb-24 pt-16 sm:px-8 lg:px-10 lg:pb-32 lg:pt-24">
          <div className="mx-auto grid max-w-[1500px] items-center gap-16 xl:grid-cols-[.84fr_1.16fr]">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#D6A66A]/25 bg-[#D6A66A]/[0.055] px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D6A66A] shadow-[0_0_14px_rgba(214,166,106,.9)]" />
                <span className="text-[9px] uppercase tracking-[0.28em] text-[#E8C887]/80">
                  Coming soon
                </span>
              </div>

              <p className="mt-8 text-[10px] uppercase tracking-[0.42em] text-[#D6A66A]/75">
                Synthetic Intelligence Operating System
              </p>

              <h1 className="mt-7 max-w-[790px] text-[54px] font-extralight leading-[.94] tracking-[-0.065em] sm:text-[76px] lg:text-[96px] xl:text-[104px]">
                The business
                <br />
                <span className="bg-gradient-to-r from-[#F7E6BD] via-[#D6A66A] to-[#9C738D] bg-clip-text text-transparent">
                  operating itself.
                </span>
              </h1>

              <p className="mt-8 max-w-[700px] text-base leading-8 text-white/52 sm:text-lg sm:leading-9">
                Avantiqo connects every department, workflow, decision and customer interaction inside one governed intelligence layer—then helps the organisation understand, coordinate and act.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/login"
                  className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-[#F1D28D] bg-[linear-gradient(105deg,#8B591F,#D5A34D,#F2D68B,#AA6C25)] px-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-black shadow-[0_18px_48px_rgba(188,124,42,.22)] transition hover:brightness-110"
                >
                  Avantiqo login
                </Link>
                <a
                  href="#platform"
                  className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-white/[0.11] bg-white/[0.035] px-8 text-[11px] uppercase tracking-[0.2em] text-white/72 transition hover:border-[#D6A66A]/40 hover:bg-white/[0.06]"
                >
                  Explore the system
                </a>
              </div>

              <div className="mt-12 grid max-w-[690px] grid-cols-3 gap-3 border-t border-white/[0.08] pt-6">
                {[
                  ["One platform", "Every department"],
                  ["One intelligence", "Every signal"],
                  ["One reality", "Every decision"],
                ].map(([title, text]) => (
                  <div key={title}>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[#D6A66A]/75">{title}</p>
                    <p className="mt-2 text-xs text-white/34">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <CommandCentre />
          </div>
        </section>

        <section id="platform" className="relative border-y border-white/[0.06] bg-white/[0.018] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-[1500px]">
            <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
              <div>
                <p className="text-[10px] uppercase tracking-[0.38em] text-[#D6A66A]/75">
                  The complete operating layer
                </p>
                <h2 className="mt-6 text-5xl font-extralight leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                  Every function.
                  <br />
                  <span className="text-white/32">One connected system.</span>
                </h2>
              </div>
              <p className="max-w-3xl text-base leading-8 text-white/48 lg:justify-self-end lg:text-lg lg:leading-9">
                Avantiqo is not another isolated application. It is the operating environment that connects the organisation’s financial, operational, commercial, human and creative reality.
              </p>
            </div>

            <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {capabilities.map((capability) => (
                <article
                  key={capability.title}
                  className="group min-h-[255px] rounded-[26px] border border-white/[0.075] bg-[linear-gradient(145deg,rgba(255,255,255,.045),rgba(255,255,255,.014))] p-6 transition duration-500 hover:-translate-y-1 hover:border-[#D6A66A]/30 hover:bg-[#D6A66A]/[0.035]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] uppercase tracking-[0.22em] text-[#D6A66A]/55">{capability.code}</span>
                    <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#D6A66A]/55 transition-all group-hover:w-16" />
                  </div>
                  <h3 className="mt-12 text-2xl font-light tracking-[-0.035em] text-white/90">{capability.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-white/40">{capability.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="intelligence" className="relative px-5 py-24 sm:px-8 lg:px-10 lg:py-36">
          <div className="mx-auto grid max-w-[1500px] gap-16 xl:grid-cols-[.82fr_1.18fr] xl:items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.38em] text-[#D6A66A]/75">
                Beyond artificial intelligence
              </p>
              <h2 className="mt-6 text-5xl font-extralight leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Intelligence that
                <br />
                <span className="bg-gradient-to-r from-[#F6E3B8] via-[#D6A66A] to-[#9A728D] bg-clip-text text-transparent">
                  operates with you.
                </span>
              </h2>
              <p className="mt-8 max-w-2xl text-base leading-8 text-white/48 lg:text-lg lg:leading-9">
                Synthetic Intelligence combines enterprise context, specialised reasoning, policy, memory, live business data and controlled execution. It does not only answer questions. It understands the operating reality and helps move the business forward.
              </p>

              <div className="mt-10 space-y-3">
                {orchestration.map((item, index) => (
                  <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/[0.065] bg-white/[0.02] px-5 py-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#D6A66A]/25 bg-[#D6A66A]/[0.055] text-[9px] text-[#E7C47F]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-white/58">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[590px] overflow-hidden rounded-[36px] border border-white/[0.08] bg-[radial-gradient(circle_at_50%_45%,rgba(214,166,106,.15),transparent_30%),linear-gradient(145deg,#0e0c0b,#050609)] p-6 sm:p-10">
              <div className="absolute inset-0 opacity-[0.065] [background-image:radial-gradient(circle,rgba(255,255,255,.9)_1px,transparent_1px)] [background-size:18px_18px]" />
              <div className="relative flex min-h-[510px] items-center justify-center">
                <div className="absolute h-[330px] w-[330px] rounded-full border border-[#D6A66A]/10 sm:h-[430px] sm:w-[430px]" />
                <div className="absolute h-[235px] w-[235px] rounded-full border border-[#D6A66A]/16 sm:h-[310px] sm:w-[310px]" />
                <div className="absolute h-[145px] w-[145px] rounded-full border border-[#D6A66A]/25 bg-[#D6A66A]/[0.035] shadow-[0_0_90px_rgba(214,166,106,.12)] sm:h-[190px] sm:w-[190px]" />

                <div className="relative z-10 text-center">
                  <img src="/avantiqo-logo.png" alt="Avantiqo" className="mx-auto h-12 w-auto opacity-90 sm:h-16" />
                  <p className="mt-5 text-[9px] uppercase tracking-[0.32em] text-[#E9CA88]/75">
                    Intelligence core
                  </p>
                </div>

                {[
                  ["Finance", "left-[3%] top-[14%] sm:left-[8%]"],
                  ["Commercial", "right-[1%] top-[14%] sm:right-[7%]"],
                  ["Operations", "left-[0%] bottom-[13%] sm:left-[6%]"],
                  ["Creative", "right-[3%] bottom-[13%] sm:right-[8%]"],
                  ["People", "left-1/2 top-[3%] -translate-x-1/2"],
                  ["Projects", "bottom-[2%] left-1/2 -translate-x-1/2"],
                ].map(([label, position]) => (
                  <div key={label} className={`absolute ${position} rounded-full border border-white/[0.09] bg-black/70 px-4 py-2 text-[8px] uppercase tracking-[0.18em] text-white/50 backdrop-blur-xl sm:px-5 sm:py-3 sm:text-[9px]`}>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-y border-white/[0.06] bg-white/[0.018] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-[1500px]">
            <div className="rounded-[38px] border border-[#D6A66A]/20 bg-[linear-gradient(135deg,rgba(42,29,16,.72),rgba(8,8,11,.96)_48%,rgba(33,20,35,.7))] px-6 py-16 text-center shadow-[0_40px_150px_rgba(0,0,0,.5)] sm:px-10 lg:px-16 lg:py-24">
              <p className="text-[10px] uppercase tracking-[0.42em] text-[#D6A66A]/78">The next operating standard</p>
              <h2 className="mx-auto mt-7 max-w-5xl text-5xl font-extralight leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                One organisation.
                <br />
                <span className="text-white/34">One intelligence layer.</span>
              </h2>
              <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/46 lg:text-lg lg:leading-9">
                Avantiqo is being built to help organisations create, operate, govern and scale from one connected environment—across industries, countries and business models.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/login"
                  className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-[#F1D28D] bg-[linear-gradient(105deg,#8B591F,#D5A34D,#F2D68B,#AA6C25)] px-9 text-[11px] font-semibold uppercase tracking-[0.2em] text-black transition hover:brightness-110"
                >
                  Login to Avantiqo
                </Link>
                <span className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-white/[0.1] bg-black/25 px-9 text-[10px] uppercase tracking-[0.25em] text-white/45">
                  Coming soon
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
