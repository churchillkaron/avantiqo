const LOGIN_URL = "https://app.churchillkaron.com/login?brand=avantiqo";

const operatingAreas = [
  {
    number: "01",
    title: "Run the company",
    text: "Finance, operations, supply chain, people, projects, documents and compliance work together in one accountable environment.",
    image: "/images/professional-services-hero.png",
  },
  {
    number: "02",
    title: "Grow the business",
    text: "Customers, offers, campaigns, websites, sales channels and service experiences are planned and executed as one connected growth system.",
    image: "/images/hero-retail.png",
  },
  {
    number: "03",
    title: "See what matters",
    text: "Leadership gets a clear view of performance, risk, priorities and next actions without searching across disconnected software.",
    image: "/images/hero-accounting.png",
  },
];

const creativeOutputs = [
  ["Campaigns", "Strategy, offers and complete launch systems"],
  ["Advertising", "Channel-ready creative and paid media execution"],
  ["Film + video", "Brand films, promotions and social content"],
  ["Web experiences", "Websites, landing pages, portals and applications"],
  ["Brand systems", "Identity, content, presentations and documents"],
  ["Publishing", "Approval, scheduling, distribution and monitoring"],
];

const companyViews = [
  ["Leadership", "Direction, priorities, performance and business health."],
  ["Finance", "Control, cash, revenue, cost, reporting and governance."],
  ["Operations", "Work, service, inventory, delivery and evidence."],
  ["People", "Responsibility, capacity, learning and performance."],
];

function Brand() {
  return (
    <div className="flex items-center gap-4">
      <img
        src="/avantiqo-logo.png"
        alt="Avantiqo"
        className="h-10 w-auto drop-shadow-[0_0_24px_rgba(214,166,106,.2)] sm:h-11"
      />
      <div>
        <div className="text-[11px] font-medium uppercase tracking-[0.46em] text-[#E2BA72] sm:text-[12px]">
          Avantiqo
        </div>
        <div className="mt-1 hidden text-[7px] uppercase tracking-[0.23em] text-white/30 sm:block">
          Synthetic Intelligence Operating System
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-4 text-[9px] uppercase tracking-[0.34em] text-[#D6A66A]/72">
      <span className="h-px w-10 bg-[#D6A66A]/35" />
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#030303] text-white">
      <style>{`
        @keyframes slowFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -10px, 0); }
        }
        @keyframes softPulse {
          0%, 100% { opacity: .42; }
          50% { opacity: .72; }
        }
        .slow-float { animation: slowFloat 9s ease-in-out infinite; }
        .soft-pulse { animation: softPulse 7s ease-in-out infinite; }
      `}</style>

      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_72%_10%,rgba(214,166,106,.09),transparent_28%),radial-gradient(circle_at_18%_38%,rgba(126,86,117,.06),transparent_30%)]" />

      <header className="relative z-50 mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
        <Brand />
        <a
          href={LOGIN_URL}
          className="rounded-xl border border-[#D6A66A]/45 bg-black/35 px-6 py-3 text-[10px] uppercase tracking-[0.24em] text-[#F0CC83] transition hover:border-[#E6C17B]/75 hover:bg-[#D6A66A]/10"
        >
          Login
        </a>
      </header>

      <section className="relative mx-auto grid min-h-[calc(100vh-92px)] w-full max-w-[1600px] items-center gap-14 px-6 pb-20 pt-10 sm:px-10 lg:grid-cols-[.86fr_1.14fr] lg:px-14 lg:pb-24 lg:pt-12">
        <div className="relative z-20 max-w-[720px]">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#D6A66A]/22 bg-[#D6A66A]/[0.045] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D6A66A] shadow-[0_0_14px_rgba(214,166,106,.9)]" />
            <span className="text-[8px] uppercase tracking-[0.3em] text-[#E4BD74]">Coming soon</span>
          </div>

          <p className="mt-9 text-[9px] uppercase tracking-[0.42em] text-[#D6A66A]/60">
            Synthetic Intelligence Operating System
          </p>

          <h1 className="mt-6 text-[clamp(4rem,7.3vw,8rem)] font-extralight leading-[0.88] tracking-[-0.07em] text-[#F4F0E9]">
            One system to
            <br />
            <span className="bg-gradient-to-r from-[#F4D99B] via-[#D6A66A] to-[#9D748B] bg-clip-text text-transparent">
              run, understand
            </span>
            <br />
            and grow your company.
          </h1>

          <p className="mt-8 max-w-[650px] text-[16px] leading-8 text-white/46 sm:text-[18px] sm:leading-9">
            Avantiqo connects people, finance, operations, customers, projects and creative execution so the entire business can move as one.
          </p>

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-[9px] uppercase tracking-[0.21em] text-white/30">
            <span>Understand the business</span>
            <span>Coordinate the work</span>
            <span>Create growth</span>
          </div>
        </div>

        <div className="relative min-h-[560px] lg:min-h-[690px]">
          <div className="absolute inset-0 rounded-[46px] border border-white/[0.06] bg-[linear-gradient(145deg,rgba(255,255,255,.025),rgba(255,255,255,.005))]" />
          <div className="soft-pulse absolute -right-24 top-14 h-72 w-72 rounded-full bg-[#D6A66A]/10 blur-[100px]" />

          <div className="absolute inset-x-[7%] top-[4%] h-[58%] overflow-hidden rounded-[34px] border border-white/[0.08] shadow-[0_35px_100px_rgba(0,0,0,.5)]">
            <img src="/images/professional-services-hero.png" alt="Modern business environment" className="h-full w-full object-cover opacity-78" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/10 to-transparent" />
            <div className="absolute bottom-7 left-7 right-7">
              <p className="text-[8px] uppercase tracking-[0.3em] text-[#E4BD74]/85">One operating environment</p>
              <p className="mt-3 max-w-lg text-2xl font-light leading-tight text-white/88 sm:text-3xl">
                A complete view of the company, from strategy to daily execution.
              </p>
            </div>
          </div>

          <div className="slow-float absolute bottom-[4%] left-[2%] h-[40%] w-[42%] overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#090909] shadow-[0_28px_80px_rgba(0,0,0,.65)]">
            <img src="/images/hero-construction.png" alt="Project and field operations" className="h-full w-full object-cover opacity-65" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <p className="text-[8px] uppercase tracking-[0.22em] text-[#D6A66A]/75">Operate</p>
              <p className="mt-2 text-lg font-light text-white/82">Work becomes visible and accountable.</p>
            </div>
          </div>

          <div className="absolute bottom-[8%] right-[1%] h-[34%] w-[48%] overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#090909] shadow-[0_28px_80px_rgba(0,0,0,.65)]">
            <img src="/images/hero-retail.png" alt="Customer and commercial experience" className="h-full w-full object-cover opacity-62" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-[8px] uppercase tracking-[0.22em] text-[#D6A66A]/75">Grow</p>
              <p className="mt-2 text-lg font-light text-white/82">Ideas become customer experiences.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/[0.06] bg-white/[0.012] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <SectionLabel>What Avantiqo does</SectionLabel>
          <div className="mt-7 grid gap-8 lg:grid-cols-[.88fr_1.12fr] lg:items-end">
            <h2 className="max-w-3xl text-5xl font-extralight leading-[1.02] tracking-[-0.055em] text-[#F3EFE8] sm:text-6xl lg:text-7xl">
              The whole company,
              <span className="block text-white/27">working from the same reality.</span>
            </h2>
            <p className="max-w-2xl text-[15px] leading-8 text-white/40 sm:text-[17px]">
              Instead of adding another disconnected tool, Avantiqo brings the work, information, decisions and execution together in one operating system.
            </p>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {operatingAreas.map((item) => (
              <article key={item.title} className="group overflow-hidden rounded-[30px] border border-white/[0.07] bg-[#080808]">
                <div className="relative h-[270px] overflow-hidden">
                  <img src={item.image} alt="" className="h-full w-full object-cover opacity-58 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/10" />
                  <span className="absolute left-6 top-6 text-[8px] uppercase tracking-[0.26em] text-[#D6A66A]/78">{item.number}</span>
                </div>
                <div className="p-7 sm:p-8">
                  <h3 className="text-3xl font-light tracking-[-0.035em] text-white/88">{item.title}</h3>
                  <p className="mt-5 text-[14px] leading-7 text-white/38">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24 sm:px-10 lg:px-14 lg:py-36">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <SectionLabel>Creative + growth</SectionLabel>
            <h2 className="mt-7 text-5xl font-extralight leading-[1.01] tracking-[-0.055em] text-[#F3EFE8] sm:text-6xl lg:text-7xl">
              A complete agency
              <span className="block bg-gradient-to-r from-[#F1D391] via-[#D6A66A] to-[#9B738A] bg-clip-text text-transparent">
                inside the operating system.
              </span>
            </h2>
            <p className="mt-8 max-w-xl text-[15px] leading-8 text-white/40 sm:text-[17px]">
              Avantiqo does not stop at analysis. It turns business goals into campaigns, content, websites, film, customer experiences and coordinated execution.
            </p>
          </div>

          <div className="relative min-h-[650px] overflow-hidden rounded-[38px] border border-[#D6A66A]/15 bg-[linear-gradient(145deg,#171008,#080808_52%,#111017)] p-6 shadow-[0_40px_120px_rgba(0,0,0,.45)] sm:p-9">
            <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#D6A66A]/14 blur-[90px]" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08]">
              <img src="/images/hero-hospitality.png" alt="Creative campaign experience" className="h-[330px] w-full object-cover opacity-62" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
              <div className="absolute bottom-7 left-7 right-7">
                <p className="text-[8px] uppercase tracking-[0.28em] text-[#E4BC74]">From strategy to market</p>
                <p className="mt-3 max-w-xl text-3xl font-light leading-tight text-white/88">
                  One idea becomes a complete, coordinated customer experience.
                </p>
              </div>
            </div>

            <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
              {creativeOutputs.map(([title, text], index) => (
                <div
                  key={title}
                  className={`rounded-2xl border p-5 ${
                    index === 0 || index === 3
                      ? "border-[#D6A66A]/20 bg-[#D6A66A]/[0.055]"
                      : "border-white/[0.065] bg-black/25"
                  }`}
                >
                  <p className="text-[10px] uppercase tracking-[0.21em] text-[#E3BC76]/78">{title}</p>
                  <p className="mt-3 text-[12px] leading-6 text-white/34">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/[0.06] bg-white/[0.012] px-6 py-24 sm:px-10 lg:px-14 lg:py-36">
        <div className="mx-auto max-w-[1500px]">
          <SectionLabel>One company view</SectionLabel>
          <div className="mt-7 grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div className="relative min-h-[560px] overflow-hidden rounded-[36px] border border-white/[0.07]">
              <img src="/images/distribution-hero.png" alt="Connected company operations" className="absolute inset-0 h-full w-full object-cover opacity-52" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/48 to-black/20" />
              <div className="relative flex min-h-[560px] max-w-xl flex-col justify-end p-8 sm:p-11">
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#D6A66A]/78">Shared context</p>
                <h2 className="mt-5 text-5xl font-extralight leading-[1.01] tracking-[-0.055em] text-[#F3EFE8] sm:text-6xl">
                  Every team sees the same company.
                </h2>
                <p className="mt-7 text-[15px] leading-8 text-white/42">
                  The numbers, the work, the customers, the priorities and the evidence remain connected—so decisions can move directly into action.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {companyViews.map(([title, text], index) => (
                <div key={title} className="min-h-[230px] rounded-[26px] border border-white/[0.07] bg-[#080808] p-7">
                  <span className="text-[8px] uppercase tracking-[0.24em] text-[#D6A66A]/52">0{index + 1}</span>
                  <h3 className="mt-9 text-2xl font-light text-white/84">{title}</h3>
                  <p className="mt-4 text-[13px] leading-7 text-white/35">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-28 sm:px-10 lg:px-14 lg:py-40">
        <div className="mx-auto max-w-[1400px] text-center">
          <p className="text-[9px] uppercase tracking-[0.4em] text-[#D6A66A]/68">Universal by design</p>
          <h2 className="mx-auto mt-8 max-w-6xl text-[clamp(3.4rem,7vw,7.6rem)] font-extralight leading-[0.93] tracking-[-0.065em] text-[#F3EFE8]">
            Built around your company.
            <span className="block bg-gradient-to-r from-[#F0D28E] via-[#D6A66A] to-[#967087] bg-clip-text text-transparent">
              Never restricted by industry.
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-[16px] leading-8 text-white/40 sm:text-[18px] sm:leading-9">
            Avantiqo adapts to the way the business is structured, governed and operated—without forcing every company into the same template.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-[1500px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "/images/hero-healthcare.png",
            "/images/hero-construction.png",
            "/images/hero-retail.png",
            "/images/professional-services-hero.png",
          ].map((image, index) => (
            <div key={image} className={`overflow-hidden rounded-[26px] border border-white/[0.07] ${index % 2 ? "lg:translate-y-10" : ""}`}>
              <img src={image} alt="" className="h-[300px] w-full object-cover opacity-58 transition duration-700 hover:scale-[1.04] hover:opacity-72" />
            </div>
          ))}
        </div>
      </section>

      <section className="relative border-t border-white/[0.06] px-6 py-28 sm:px-10 lg:px-14 lg:py-36">
        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[42px] border border-[#D6A66A]/18 bg-[linear-gradient(135deg,rgba(49,33,17,.72),rgba(8,8,8,.97)_48%,rgba(37,23,39,.68))] px-7 py-16 text-center shadow-[0_45px_130px_rgba(0,0,0,.42)] sm:px-12 lg:px-20 lg:py-24">
          <img src="/avantiqo-logo.png" alt="Avantiqo" className="mx-auto h-16 w-auto drop-shadow-[0_0_28px_rgba(214,166,106,.25)]" />
          <p className="mt-8 text-[9px] uppercase tracking-[0.38em] text-[#D6A66A]/70">Coming soon</p>
          <h2 className="mx-auto mt-7 max-w-5xl text-5xl font-extralight leading-[1.02] tracking-[-0.055em] text-[#F3EFE8] sm:text-6xl lg:text-8xl">
            Your company will not simply use Avantiqo.
            <span className="block text-white/31">It will operate through it.</span>
          </h2>
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
