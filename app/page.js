const LOGIN_URL = "https://app.churchillkaron.com/login?brand=avantiqo";

const workRows = [
  ["Finance", "Approve supplier payments", "Today", "Ready"],
  ["Operations", "Resolve service delay", "14:30", "Priority"],
  ["Commercial", "Publish campaign", "16:00", "Approved"],
  ["People", "Confirm August staffing", "Tomorrow", "Review"],
];

const roleCards = [
  ["Leadership", "A single view of performance, priorities and risk."],
  ["Finance", "Cash, revenue, cost, control and reporting."],
  ["Operations", "Work, service, inventory and delivery."],
  ["Growth", "Customers, campaigns, websites and publishing."],
];

function Logo() {
  return (
    <div className="flex items-center gap-4">
      <img src="/avantiqo-logo.png" alt="Avantiqo" className="h-10 w-auto sm:h-11" />
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-[0.46em] text-[#D9B36A]">Avantiqo</div>
        <div className="mt-1 hidden text-[7px] uppercase tracking-[0.24em] text-white/38 sm:block">
          Synthetic Intelligence Operating System
        </div>
      </div>
    </div>
  );
}

function ProductWindow() {
  return (
    <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#0B0B0C] shadow-[0_45px_140px_rgba(0,0,0,.55)]">
      <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 sm:px-7">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/10" />
            <span className="h-2 w-2 rounded-full bg-white/10" />
          </div>
          <span className="text-[8px] uppercase tracking-[0.2em] text-white/28">Avantiqo Business Command</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/[0.04] px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
          <span className="text-[7px] uppercase tracking-[0.18em] text-emerald-200/70">Live</span>
        </div>
      </div>

      <div className="grid min-h-[590px] lg:grid-cols-[150px_1fr]">
        <aside className="hidden border-r border-white/[0.07] bg-black/25 p-4 lg:block">
          <img src="/avantiqo-logo.png" alt="" className="h-8 w-auto" />
          <div className="mt-9 space-y-2">
            {["Overview", "Finance", "Operations", "Commercial", "People", "Projects", "Documents"].map((item, index) => (
              <div
                key={item}
                className={`rounded-xl px-3 py-3 text-[8px] uppercase tracking-[0.13em] ${
                  index === 0
                    ? "border border-[#D6A66A]/20 bg-[#D6A66A]/[0.06] text-[#E7C07A]"
                    : "text-white/24"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </aside>

        <div className="p-5 sm:p-7 lg:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[8px] uppercase tracking-[0.22em] text-[#D6A66A]/75">Good afternoon</p>
              <h3 className="mt-3 text-3xl font-light tracking-[-0.045em] text-white/90 sm:text-4xl">What needs attention today.</h3>
            </div>
            <div className="rounded-full border border-white/[0.07] px-4 py-2 text-[8px] uppercase tracking-[0.16em] text-white/30">
              All organisations
            </div>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 xl:grid-cols-4">
            {[
              ["Business health", "91", "Stable"],
              ["Cash position", "THB 1.94M", "+8.1%"],
              ["Open work", "128", "17 priority"],
              ["Growth", "+14.6%", "This period"],
            ].map(([label, value, note], index) => (
              <div key={label} className={`rounded-2xl border p-4 ${index === 0 ? "border-[#D6A66A]/22 bg-[#D6A66A]/[0.055]" : "border-white/[0.065] bg-white/[0.022]"}`}>
                <p className="text-[7px] uppercase tracking-[0.16em] text-white/30">{label}</p>
                <p className="mt-4 text-xl font-light text-white/85">{value}</p>
                <p className="mt-2 text-[8px] text-[#D6A66A]/65">{note}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-[1.15fr_.85fr]">
            <div className="rounded-[22px] border border-white/[0.065] bg-black/22 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.18em] text-white/28">Priority work</p>
                  <p className="mt-2 text-sm text-white/50">Owned, timed and ready to move.</p>
                </div>
                <span className="text-[8px] text-[#D6A66A]/60">4 active</span>
              </div>
              <div className="mt-5 space-y-2.5">
                {workRows.map(([area, task, time, state], index) => (
                  <div key={task} className="grid grid-cols-[36px_1fr_auto] items-center gap-3 rounded-xl border border-white/[0.055] bg-white/[0.02] p-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#D6A66A]/16 bg-[#D6A66A]/[0.045] text-[8px] text-[#E2B96E]">0{index + 1}</span>
                    <div className="min-w-0">
                      <p className="text-[7px] uppercase tracking-[0.14em] text-[#D6A66A]/55">{area}</p>
                      <p className="mt-1 truncate text-[11px] text-white/58">{task}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[8px] text-white/35">{time}</p>
                      <p className="mt-1 text-[7px] uppercase tracking-[0.12em] text-white/22">{state}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[22px] border border-white/[0.065] bg-[linear-gradient(145deg,rgba(214,166,106,.055),rgba(255,255,255,.015))] p-5">
              <p className="text-[8px] uppercase tracking-[0.18em] text-white/28">Avantiqo prepared</p>
              <div className="mt-5 rounded-2xl border border-[#D6A66A]/18 bg-black/25 p-5">
                <p className="text-[8px] uppercase tracking-[0.18em] text-[#D6A66A]/70">Next action</p>
                <p className="mt-4 text-xl font-light leading-7 text-white/78">Approve the supplier payment run before 16:00.</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-[8px] text-white/28">Finance · 12 payments</span>
                  <span className="rounded-lg border border-[#D6A66A]/25 bg-[#D6A66A]/[0.07] px-3 py-2 text-[7px] uppercase tracking-[0.14em] text-[#E5BC73]">Review</span>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {["Campaign ready", "Risk resolved"].map((item, index) => (
                  <div key={item} className="rounded-xl border border-white/[0.055] bg-white/[0.018] p-3">
                    <span className={`block h-1.5 w-1.5 rounded-full ${index ? "bg-emerald-300" : "bg-[#D6A66A]"}`} />
                    <p className="mt-3 text-[10px] text-white/48">{item}</p>
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

function CreativeStudio() {
  return (
    <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0B0D] shadow-[0_35px_110px_rgba(0,0,0,.45)]">
      <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-4">
        <p className="text-[8px] uppercase tracking-[0.22em] text-[#D6A66A]/75">Creative Studio</p>
        <p className="text-[8px] text-white/26">From brief to publication</p>
      </div>
      <div className="grid gap-px bg-white/[0.06] lg:grid-cols-[1.1fr_.9fr]">
        <div className="bg-[#0B0B0D] p-5 sm:p-7">
          <div className="relative min-h-[430px] overflow-hidden rounded-[24px] border border-[#D6A66A]/18 bg-[radial-gradient(circle_at_72%_18%,rgba(229,178,87,.42),transparent_27%),linear-gradient(145deg,#2B170B,#0B0B10_64%)] p-7">
            <p className="text-[8px] uppercase tracking-[0.28em] text-[#F1C97B]/82">Master campaign</p>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="max-w-md text-5xl font-extralight leading-[.96] tracking-[-0.055em] text-white">Build the moment.<br /><span className="text-[#E1B56A]">Own the market.</span></p>
              <p className="mt-5 max-w-sm text-[12px] leading-6 text-white/38">Strategy, offer, creative direction and every channel prepared as one launch.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Film", "Social", "Display", "Landing page", "Publish"].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-[7px] uppercase tracking-[0.13em] text-white/38">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-px bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-1">
          <div className="bg-[#0A0A0C] p-5">
            <div className="h-full min-h-[205px] overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#0E0E12] p-4">
              <div className="flex h-8 items-center justify-between border-b border-white/[0.06] px-2">
                <div className="flex gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-white/15" /><span className="h-1.5 w-1.5 rounded-full bg-white/10" /><span className="h-1.5 w-1.5 rounded-full bg-white/10" /></div>
                <span className="text-[6px] uppercase tracking-[0.18em] text-white/18">Website</span>
              </div>
              <div className="mt-4 grid h-[135px] grid-cols-[.82fr_1.18fr] gap-3">
                <div className="flex flex-col justify-center">
                  <div className="h-1.5 w-14 rounded-full bg-[#D6A66A]/35" />
                  <div className="mt-3 h-4 w-full rounded bg-white/[0.075]" />
                  <div className="mt-2 h-4 w-4/5 rounded bg-white/[0.045]" />
                  <div className="mt-4 h-7 w-20 rounded-lg bg-[#D6A66A]/18" />
                </div>
                <div className="rounded-xl bg-[radial-gradient(circle_at_70%_20%,rgba(214,166,106,.34),transparent_30%),linear-gradient(145deg,#1B1410,#14121B)]" />
              </div>
            </div>
          </div>

          <div className="bg-[#0A0A0C] p-5">
            <div className="min-h-[205px] rounded-[20px] border border-white/[0.07] bg-[#111014] p-4">
              <div className="grid grid-cols-3 gap-2">
                {[0, 1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className={`relative aspect-video rounded-lg border border-white/[0.055] ${item === 1 || item === 4 ? "bg-[radial-gradient(circle_at_60%_40%,rgba(214,166,106,.28),transparent_42%),#17100C]" : "bg-white/[0.025]"}`}>
                    {item === 2 && <span className="absolute inset-0 flex items-center justify-center text-[#D6A66A]/55">▶</span>}
                  </div>
                ))}
              </div>
              <div className="mt-4 space-y-2">
                {[74, 48, 89].map((width, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="w-8 text-[6px] text-white/18">0{index + 1}</span>
                    <div className="h-4 flex-1 rounded bg-white/[0.035]"><div className="h-full rounded bg-[#D6A66A]/22" style={{ width: `${width}%` }} /></div>
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

function ReportPreview() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-black/10 bg-[#EFE7DA] text-[#17120F] shadow-[0_30px_90px_rgba(0,0,0,.22)]">
      <div className="flex items-center justify-between border-b border-black/10 px-6 py-5">
        <img src="/avantiqo-logo.png" alt="" className="h-7 w-auto brightness-0" />
        <span className="text-[7px] uppercase tracking-[0.22em] text-black/35">Executive brief</span>
      </div>
      <div className="p-6 sm:p-8">
        <p className="text-[8px] uppercase tracking-[0.24em] text-[#8B642D]">August outlook</p>
        <h3 className="mt-4 text-4xl font-light leading-tight tracking-[-0.045em]">What changed.<br />What matters next.</h3>
        <div className="mt-7 grid grid-cols-3 gap-3">
          {[["Revenue", "+14%"], ["Cash", "92"], ["Delivery", "87%"]].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-black/10 bg-white/30 p-4">
              <p className="text-[7px] uppercase tracking-[0.14em] text-black/40">{label}</p>
              <p className="mt-3 text-xl">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border border-black/10 bg-white/25 p-5">
          <p className="text-[8px] uppercase tracking-[0.16em] text-black/38">Recommended focus</p>
          <p className="mt-3 text-lg leading-7">Protect cash, accelerate the approved campaign and resolve the three delayed commitments.</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#050505] text-white">
      <style>{`
        @keyframes glowShift {
          0%,100% { opacity:.35; transform:translate3d(0,0,0); }
          50% { opacity:.65; transform:translate3d(-18px,12px,0); }
        }
        .ambient-glow { animation: glowShift 12s ease-in-out infinite; }
      `}</style>

      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_78%_10%,rgba(214,166,106,.08),transparent_28%),radial-gradient(circle_at_12%_48%,rgba(126,86,118,.055),transparent_30%)]" />

      <header className="relative z-50 mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
        <Logo />
        <a href={LOGIN_URL} className="rounded-xl border border-[#D6A66A]/45 bg-black/35 px-6 py-3 text-[10px] uppercase tracking-[0.24em] text-[#F0CC83] transition hover:border-[#E6C17B]/75 hover:bg-[#D6A66A]/10">Login</a>
      </header>

      <section className="relative mx-auto grid min-h-[calc(100vh-92px)] w-full max-w-[1600px] items-center gap-14 px-6 pb-20 pt-8 sm:px-10 lg:grid-cols-[.7fr_1.3fr] lg:px-14 lg:pb-24 lg:pt-10">
        <div className="relative z-20 max-w-[610px]">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#D6A66A]/22 bg-[#D6A66A]/[0.045] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D6A66A] shadow-[0_0_14px_rgba(214,166,106,.9)]" />
            <span className="text-[8px] uppercase tracking-[0.3em] text-[#E4BD74]">Coming soon</span>
          </div>
          <p className="mt-9 text-[9px] uppercase tracking-[0.4em] text-[#D6A66A]/62">Synthetic Intelligence Operating System</p>
          <h1 className="mt-6 text-[clamp(3.5rem,5.7vw,6.25rem)] font-extralight leading-[0.96] tracking-[-0.06em] text-[#F5F1EA]">
            Run the whole company from one place.
          </h1>
          <p className="mt-7 max-w-[590px] text-[16px] leading-8 text-white/50 sm:text-[18px] sm:leading-9">
            Avantiqo brings finance, operations, customers, people, projects and creative execution into one clear operating environment.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            {["Understand", "Coordinate", "Execute"].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-full border border-white/[0.075] bg-white/[0.02] px-4 py-2.5">
                <span className="text-[8px] text-[#D6A66A]/60">0{index + 1}</span>
                <span className="text-[8px] uppercase tracking-[0.18em] text-white/42">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="ambient-glow absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#D6A66A]/12 blur-[110px]" />
          <ProductWindow />
        </div>
      </section>

      <section className="relative border-y border-white/[0.06] bg-[#F0E8DC] px-6 py-24 text-[#17120F] sm:px-10 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[0.34em] text-[#8C642C]">One company view</p>
              <h2 className="mt-6 text-5xl font-light leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">Every team works from the same reality.</h2>
            </div>
            <p className="max-w-2xl text-[15px] leading-8 text-black/55 sm:text-[17px]">
              No disconnected tools, duplicate information or hidden decisions. The work, numbers, customers and priorities stay connected from planning to completion.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
            <div className="overflow-hidden rounded-[30px] border border-black/10 bg-[#171413] text-white shadow-[0_30px_90px_rgba(31,20,10,.18)]">
              <div className="grid min-h-[520px] md:grid-cols-[.72fr_1.28fr]">
                <div className="border-b border-white/[0.07] p-7 md:border-b-0 md:border-r sm:p-8">
                  <p className="text-[8px] uppercase tracking-[0.22em] text-[#D6A66A]/75">Company today</p>
                  <h3 className="mt-5 text-4xl font-extralight leading-tight tracking-[-0.045em]">One plan.<br />Clear ownership.<br />Visible progress.</h3>
                  <p className="mt-6 text-[13px] leading-7 text-white/42">Avantiqo keeps every important action attached to the company context, owner, deadline and evidence.</p>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="space-y-3">
                    {[
                      ["09:00", "Finance", "Payment run approved"],
                      ["11:30", "Operations", "Delivery issue assigned"],
                      ["14:00", "Commercial", "Campaign ready to publish"],
                      ["16:00", "Leadership", "Daily brief prepared"],
                    ].map(([time, area, item], index) => (
                      <div key={item} className="grid grid-cols-[54px_1fr] gap-4 rounded-2xl border border-white/[0.065] bg-white/[0.022] p-4">
                        <span className="text-[9px] text-[#D6A66A]/65">{time}</span>
                        <div>
                          <p className="text-[7px] uppercase tracking-[0.16em] text-white/25">{area}</p>
                          <p className="mt-2 text-[13px] text-white/66">{item}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <ReportPreview />
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {roleCards.map(([title, text], index) => (
              <div key={title} className="rounded-[24px] border border-black/10 bg-white/35 p-6">
                <span className="text-[8px] text-[#8C642C]">0{index + 1}</span>
                <h3 className="mt-7 text-2xl font-light">{title}</h3>
                <p className="mt-4 text-[13px] leading-7 text-black/48">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24 sm:px-10 lg:px-14 lg:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[0.34em] text-[#D6A66A]/75">Create and grow</p>
              <h2 className="mt-6 text-5xl font-extralight leading-[1.02] tracking-[-0.055em] text-[#F3EFE8] sm:text-6xl lg:text-7xl">Business goals become finished work.</h2>
            </div>
            <p className="max-w-2xl text-[15px] leading-8 text-white/42 sm:text-[17px]">
              Campaigns, films, websites, reports and customer experiences move from strategy to approved delivery inside the same operating system.
            </p>
          </div>
          <div className="mt-14"><CreativeStudio /></div>
        </div>
      </section>

      <section className="relative border-t border-white/[0.06] px-6 py-28 sm:px-10 lg:px-14 lg:py-36">
        <div className="mx-auto max-w-[1300px] overflow-hidden rounded-[38px] border border-[#D6A66A]/18 bg-[linear-gradient(135deg,rgba(44,29,15,.75),rgba(8,8,9,.97)_48%,rgba(35,22,37,.7))] px-7 py-16 text-center shadow-[0_45px_130px_rgba(0,0,0,.4)] sm:px-12 lg:px-20 lg:py-24">
          <img src="/avantiqo-logo.png" alt="Avantiqo" className="mx-auto h-14 w-auto" />
          <p className="mt-8 text-[9px] uppercase tracking-[0.36em] text-[#D6A66A]/72">Coming soon</p>
          <h2 className="mx-auto mt-7 max-w-4xl text-5xl font-extralight leading-[1.03] tracking-[-0.055em] text-[#F3EFE8] sm:text-6xl lg:text-7xl">One system that understands and operates the whole company.</h2>
          <div className="mt-10">
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
