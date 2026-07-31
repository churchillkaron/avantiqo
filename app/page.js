const LOGIN_URL = "https://app.churchillkaron.com/login?brand=avantiqo";

const priorities = [
  ["Finance", "Payment run ready for approval", "Review"],
  ["Operations", "Three service commitments need attention", "Open"],
  ["Commercial", "New campaign approved and ready to publish", "Ready"],
  ["People", "August workforce plan is complete", "Done"],
];

const operatingAreas = [
  ["Finance", "Cash, revenue, cost, billing and reporting"],
  ["Operations", "Work, service, inventory and delivery"],
  ["Commercial", "Customers, sales, marketing and growth"],
  ["People", "Responsibility, capacity and performance"],
  ["Projects", "Plan, deliver, control and close"],
  ["Governance", "Approvals, compliance and evidence"],
];

const outcomes = [
  ["Campaign", "A complete launch, ready for every channel", "campaign"],
  ["Website", "A premium customer experience, ready to publish", "website"],
  ["Film", "A finished brand story, planned scene by scene", "film"],
  ["Report", "A clear executive view, ready for decision", "report"],
];

function Brand() {
  return (
    <div className="flex items-center gap-4">
      <img src="/avantiqo-logo.png" alt="Avantiqo" className="h-10 w-auto sm:h-11" />
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.46em] text-[#E2BA72]">Avantiqo</p>
        <p className="mt-1 hidden text-[7px] uppercase tracking-[0.24em] text-white/35 sm:block">
          Synthetic Intelligence Operating System
        </p>
      </div>
    </div>
  );
}

function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-4 text-[9px] uppercase tracking-[0.34em] text-[#D6A66A]/80">
      <span className="h-px w-10 bg-[#D6A66A]/45" />
      {children}
    </div>
  );
}

function CompanyCommand() {
  return (
    <div className="relative overflow-hidden rounded-[34px] border border-white/[0.09] bg-[#0A0A0B] shadow-[0_45px_140px_rgba(0,0,0,.58)]">
      <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 sm:px-7">
        <div>
          <p className="text-[8px] uppercase tracking-[0.24em] text-[#D6A66A]/75">Company command</p>
          <p className="mt-2 text-[12px] text-white/38">Everything that needs attention, in one place.</p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/[0.04] px-3 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,.65)]" />
          <span className="text-[7px] uppercase tracking-[0.18em] text-emerald-200/65">Live</span>
        </div>
      </div>

      <div className="grid gap-px bg-white/[0.06] md:grid-cols-[1fr_.42fr]">
        <div className="bg-[#09090A] p-5 sm:p-7">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[8px] uppercase tracking-[0.2em] text-white/28">Today</p>
              <h3 className="mt-3 text-3xl font-light tracking-[-0.04em] text-white/88">The company is moving.</h3>
            </div>
            <p className="text-right text-[9px] leading-5 text-white/28">4 decisions<br />12 actions</p>
          </div>

          <div className="mt-7 space-y-3">
            {priorities.map(([area, title, status], index) => (
              <div key={title} className="group flex items-center gap-4 rounded-2xl border border-white/[0.065] bg-white/[0.022] p-4 transition hover:border-[#D6A66A]/22 hover:bg-[#D6A66A]/[0.035]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#D6A66A]/18 bg-[#D6A66A]/[0.055] text-[9px] text-[#E6C17B]">
                  0{index + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[8px] uppercase tracking-[0.17em] text-[#D6A66A]/60">{area}</p>
                  <p className="mt-1 truncate text-[12px] text-white/64 sm:text-[13px]">{title}</p>
                </div>
                <span className="rounded-full border border-white/[0.07] px-3 py-1.5 text-[7px] uppercase tracking-[0.13em] text-white/32">
                  {status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0C0C0D] p-5 sm:p-7">
          <p className="text-[8px] uppercase tracking-[0.2em] text-white/28">Business health</p>
          <div className="mt-6 flex aspect-square items-center justify-center rounded-full border border-[#D6A66A]/18 bg-[radial-gradient(circle,rgba(214,166,106,.11),rgba(214,166,106,.015)_58%,transparent_60%)]">
            <div className="text-center">
              <p className="text-5xl font-extralight text-[#F2D595]">91</p>
              <p className="mt-2 text-[7px] uppercase tracking-[0.2em] text-white/30">Healthy</p>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            {["Cash position", "Delivery", "Customer growth"].map((label, index) => (
              <div key={label}>
                <div className="mb-2 flex justify-between text-[8px] text-white/30">
                  <span>{label}</span>
                  <span>{[94, 87, 92][index]}%</span>
                </div>
                <div className="h-1 rounded-full bg-white/[0.055]">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#7D542D] to-[#E4BE77]" style={{ width: `${[94, 87, 92][index]}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function OperatingWorkspace() {
  return (
    <div className="overflow-hidden rounded-[36px] border border-white/[0.09] bg-[#080809] shadow-[0_40px_130px_rgba(0,0,0,.5)]">
      <div className="grid min-h-[620px] lg:grid-cols-[180px_1fr]">
        <aside className="hidden border-r border-white/[0.07] bg-black/28 p-5 lg:block">
          <img src="/avantiqo-logo.png" alt="" className="h-8 w-auto" />
          <div className="mt-10 space-y-2">
            {operatingAreas.map(([area], index) => (
              <div key={area} className={`rounded-xl px-3 py-3 text-[8px] uppercase tracking-[0.15em] ${index === 0 ? "border border-[#D6A66A]/18 bg-[#D6A66A]/[0.055] text-[#E4BD74]" : "text-white/26"}`}>
                {area}
              </div>
            ))}
          </div>
        </aside>

        <div className="p-5 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[8px] uppercase tracking-[0.24em] text-[#D6A66A]/70">One operating workspace</p>
              <h3 className="mt-4 text-4xl font-extralight tracking-[-0.05em] text-white/90 sm:text-5xl">The work behind the company.</h3>
            </div>
            <div className="rounded-full border border-white/[0.07] px-4 py-2 text-[8px] uppercase tracking-[0.16em] text-white/28">Current organisation</div>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {operatingAreas.map(([area, text], index) => (
              <article key={area} className={`min-h-[185px] rounded-[22px] border p-5 ${index === 0 || index === 3 ? "border-[#D6A66A]/20 bg-[#D6A66A]/[0.045]" : "border-white/[0.065] bg-white/[0.018]"}`}>
                <div className="flex items-center justify-between">
                  <span className="text-[8px] text-[#D6A66A]/52">0{index + 1}</span>
                  <span className={`h-1.5 w-1.5 rounded-full ${index < 4 ? "bg-emerald-300/75" : "bg-[#D6A66A]/70"}`} />
                </div>
                <h4 className="mt-8 text-xl font-light text-white/80">{area}</h4>
                <p className="mt-4 text-[12px] leading-6 text-white/34">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-5 rounded-[24px] border border-white/[0.065] bg-black/25 p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[8px] uppercase tracking-[0.2em] text-white/28">Next best action</p>
                <p className="mt-3 text-lg font-light text-white/72">Approve the supplier payment run before 16:00.</p>
              </div>
              <span className="rounded-xl border border-[#D6A66A]/25 bg-[#D6A66A]/[0.06] px-5 py-3 text-[8px] uppercase tracking-[0.18em] text-[#E4BD74]">Review decision</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OutputVisual({ type }) {
  if (type === "campaign") {
    return (
      <div className="relative h-full overflow-hidden bg-[radial-gradient(circle_at_72%_20%,rgba(225,171,82,.42),transparent_28%),linear-gradient(145deg,#28170B,#0C0B10_62%)] p-6">
        <p className="text-[8px] uppercase tracking-[0.28em] text-[#F0C97C]/80">New market campaign</p>
        <div className="absolute bottom-6 left-6 right-6">
          <p className="max-w-xs text-4xl font-extralight leading-[.98] tracking-[-0.05em] text-white">Move first.<br /><span className="text-[#E4B76C]">Own the moment.</span></p>
          <div className="mt-5 flex gap-2">
            {["Social", "Display", "Launch"].map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-[7px] uppercase tracking-[0.14em] text-white/40">{item}</span>)}
          </div>
        </div>
      </div>
    );
  }

  if (type === "website") {
    return (
      <div className="h-full bg-[#0B0B0D] p-4">
        <div className="h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[linear-gradient(145deg,#17100A,#0B0B0E)]">
          <div className="flex h-9 items-center justify-between border-b border-white/[0.06] px-4">
            <div className="flex gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-white/15" /><span className="h-1.5 w-1.5 rounded-full bg-white/15" /><span className="h-1.5 w-1.5 rounded-full bg-white/15" /></div>
            <span className="text-[6px] uppercase tracking-[0.2em] text-white/20">Customer experience</span>
          </div>
          <div className="grid h-[calc(100%-36px)] grid-cols-[.8fr_1.2fr]">
            <div className="flex flex-col justify-center p-5">
              <div className="h-1.5 w-16 rounded-full bg-[#D6A66A]/35" />
              <div className="mt-4 h-5 w-full rounded bg-white/[0.075]" />
              <div className="mt-2 h-5 w-4/5 rounded bg-white/[0.045]" />
              <div className="mt-5 h-8 w-24 rounded-lg bg-[#D6A66A]/18" />
            </div>
            <div className="m-4 rounded-xl bg-[radial-gradient(circle_at_70%_20%,rgba(214,166,106,.34),transparent_30%),linear-gradient(145deg,#1B1410,#11121A)]" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "film") {
    return (
      <div className="relative h-full bg-[linear-gradient(145deg,#171217,#08080A)] p-5">
        <div className="grid h-full grid-cols-3 gap-2">
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <div key={item} className={`relative overflow-hidden rounded-xl border border-white/[0.06] ${item === 1 || item === 4 ? "bg-[radial-gradient(circle_at_60%_40%,rgba(214,166,106,.28),transparent_42%),#17100C]" : "bg-white/[0.025]"}`}>
              <span className="absolute left-2 top-2 text-[6px] text-white/18">0{item + 1}</span>
              {item === 2 && <span className="absolute inset-0 flex items-center justify-center text-2xl text-[#D6A66A]/55">▶</span>}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-[#F0E9DD] p-6 text-[#16110E]">
      <div className="flex items-center justify-between border-b border-black/10 pb-4">
        <img src="/avantiqo-logo.png" alt="" className="h-7 w-auto brightness-0" />
        <span className="text-[7px] uppercase tracking-[0.2em] text-black/40">Executive report</span>
      </div>
      <p className="mt-7 text-3xl font-light leading-tight tracking-[-0.04em]">Business performance<br />and priorities</p>
      <div className="mt-7 grid grid-cols-3 gap-3">
        {["Revenue", "Cash", "Delivery"].map((item, index) => (
          <div key={item} className="rounded-lg border border-black/10 p-3">
            <p className="text-[6px] uppercase tracking-[0.14em] text-black/40">{item}</p>
            <p className="mt-3 text-lg">{["+14%", "92", "87%"][index]}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 h-16 rounded-xl bg-[linear-gradient(90deg,rgba(83,53,28,.18),rgba(214,166,106,.48))]" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#030303] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_78%_8%,rgba(214,166,106,.08),transparent_27%),radial-gradient(circle_at_16%_48%,rgba(128,87,119,.055),transparent_30%)]" />

      <header className="relative z-50 mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
        <Brand />
        <a href={LOGIN_URL} className="rounded-xl border border-[#D6A66A]/45 bg-black/35 px-6 py-3 text-[10px] uppercase tracking-[0.24em] text-[#F0CC83] transition hover:border-[#E6C17B]/75 hover:bg-[#D6A66A]/10">Login</a>
      </header>

      <section className="relative mx-auto grid min-h-[calc(100vh-92px)] w-full max-w-[1600px] items-center gap-14 px-6 pb-20 pt-8 sm:px-10 lg:grid-cols-[.78fr_1.22fr] lg:px-14 lg:pb-24 lg:pt-10">
        <div className="relative z-20 max-w-[680px]">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#D6A66A]/22 bg-[#D6A66A]/[0.045] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D6A66A] shadow-[0_0_14px_rgba(214,166,106,.9)]" />
            <span className="text-[8px] uppercase tracking-[0.3em] text-[#E4BD74]">Coming soon</span>
          </div>
          <p className="mt-9 text-[9px] uppercase tracking-[0.4em] text-[#D6A66A]/62">Synthetic Intelligence Operating System</p>
          <h1 className="mt-6 max-w-[670px] text-[clamp(3.6rem,6.4vw,6.9rem)] font-extralight leading-[0.93] tracking-[-0.065em] text-[#F4F0E9]">
            The complete company.
            <span className="mt-2 block bg-gradient-to-r from-[#F3D895] via-[#D6A66A] to-[#9B7389] bg-clip-text text-transparent">One operating system.</span>
          </h1>
          <p className="mt-8 max-w-[610px] text-[16px] leading-8 text-white/48 sm:text-[18px] sm:leading-9">
            Avantiqo understands the business, coordinates the work and turns decisions into outcomes across the whole company.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            {["Understand", "Coordinate", "Execute"].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-full border border-white/[0.07] bg-white/[0.018] px-4 py-2.5">
                <span className="text-[8px] text-[#D6A66A]/55">0{index + 1}</span>
                <span className="text-[8px] uppercase tracking-[0.19em] text-white/38">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <CompanyCommand />
      </section>

      <section className="relative border-y border-white/[0.06] bg-white/[0.012] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <Eyebrow>Simple by design</Eyebrow>
          <div className="mt-8 grid gap-7 lg:grid-cols-3">
            {[
              ["Understand", "Avantiqo keeps the company context together, so leadership sees what is happening and what matters now."],
              ["Coordinate", "Priorities become owned work with responsibility, approvals, timing and evidence."],
              ["Execute", "Approved decisions move into finance, operations, campaigns, publishing and connected services."],
            ].map(([title, text], index) => (
              <article key={title} className="rounded-[28px] border border-white/[0.07] bg-[#080809] p-7 sm:p-8">
                <span className="text-[8px] text-[#D6A66A]/55">0{index + 1}</span>
                <h2 className="mt-10 text-4xl font-extralight tracking-[-0.045em] text-white/88">{title}</h2>
                <p className="mt-5 text-[14px] leading-7 text-white/38">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24 sm:px-10 lg:px-14 lg:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div>
              <Eyebrow>Operate the company</Eyebrow>
              <h2 className="mt-7 text-5xl font-extralight leading-[1.02] tracking-[-0.055em] text-[#F3EFE8] sm:text-6xl lg:text-7xl">
                One place for the work behind the business.
              </h2>
            </div>
            <p className="max-w-2xl text-[15px] leading-8 text-white/40 sm:text-[17px]">
              Finance, operations, supply chain, commercial, people, projects and governance remain connected without turning the experience into technical complexity.
            </p>
          </div>
          <div className="mt-14"><OperatingWorkspace /></div>
        </div>
      </section>

      <section className="relative border-y border-white/[0.06] bg-white/[0.012] px-6 py-24 sm:px-10 lg:px-14 lg:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="max-w-4xl">
            <Eyebrow>Create and grow</Eyebrow>
            <h2 className="mt-7 text-5xl font-extralight leading-[1.02] tracking-[-0.055em] text-[#F3EFE8] sm:text-6xl lg:text-7xl">
              Ideas become finished work.
              <span className="block text-white/28">Not another list of recommendations.</span>
            </h2>
            <p className="mt-7 max-w-2xl text-[15px] leading-8 text-white/40 sm:text-[17px]">
              Avantiqo can turn a business goal into a complete campaign, website, film, report, presentation or customer experience—ready for approval and delivery.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {outcomes.map(([title, text, type], index) => (
              <article key={title} className={`overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#080809] ${index === 0 || index === 3 ? "md:translate-y-8" : ""}`}>
                <div className="h-[320px]"><OutputVisual type={type} /></div>
                <div className="border-t border-white/[0.06] p-6 sm:p-7">
                  <p className="text-[8px] uppercase tracking-[0.24em] text-[#D6A66A]/68">{title}</p>
                  <p className="mt-3 text-lg font-light text-white/70">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-28 sm:px-10 lg:px-14 lg:py-40">
        <div className="mx-auto max-w-[1400px] text-center">
          <Eyebrow>One connected experience</Eyebrow>
          <h2 className="mx-auto mt-8 max-w-5xl text-[clamp(3.2rem,6vw,6.7rem)] font-extralight leading-[.98] tracking-[-0.06em] text-[#F3EFE8]">
            Your company does not need more disconnected software.
            <span className="mt-3 block bg-gradient-to-r from-[#F1D38F] via-[#D6A66A] to-[#967087] bg-clip-text text-transparent">It needs one system that understands the whole business.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-[16px] leading-8 text-white/40 sm:text-[18px] sm:leading-9">
            Avantiqo is being built as the operating layer between strategy, people, information and execution—universal across companies, roles and industries.
          </p>
          <div className="mt-12">
            <a href={LOGIN_URL} className="inline-flex min-h-14 items-center justify-center rounded-xl border border-[#F0CB7C] bg-[linear-gradient(105deg,#83511D,#D8A64F,#F1D184,#A66B27)] px-9 text-[10px] font-semibold uppercase tracking-[0.22em] text-black shadow-[0_18px_55px_rgba(179,116,38,.17)] transition hover:brightness-110">Login to Avantiqo</a>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-white/[0.05] px-6 py-8 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-3 text-[8px] uppercase tracking-[0.25em] text-white/20 sm:flex-row">
          <span>Avantiqo</span>
          <span>Synthetic Intelligence Operating System</span>
          <span>Coming Soon</span>
        </div>
      </footer>
    </main>
  );
}
