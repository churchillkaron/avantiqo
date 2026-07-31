import Link from "next/link";

const LOGIN_URL = "https://app.churchillkaron.com/login";

const orbitNodes = [
  ["Finance", "left-[1%] top-[46%]"],
  ["Operations", "right-[1%] top-[46%]"],
  ["Commercial", "left-[18%] top-[8%]"],
  ["Creative", "right-[18%] top-[8%]"],
  ["People", "left-[18%] bottom-[8%]"],
  ["Analytics", "right-[18%] bottom-[8%]"],
];

const creative = ["ADS", "POSTERS", "VIDEO", "WEB", "CAMPAIGNS"];
const intelligence = ["Forecasting", "Scheduling", "Risk detection", "Workflow orchestration"];

function Bars() {
  return (
    <div className="flex h-20 items-end gap-1.5">
      {[36, 52, 47, 64, 59, 76, 71, 88, 82, 98].map((height, index) => (
        <span
          key={index}
          className="flex-1 rounded-t-sm bg-gradient-to-t from-[#6b4326]/45 to-[#E4BA70]/80"
          style={{ height: `${height}%`, opacity: 0.44 + index * 0.05 }}
        />
      ))}
    </div>
  );
}

function FinanceVisual() {
  return (
    <div className="panel left-[3%] top-[18%] hidden w-[26%] -rotate-2 xl:block">
      <div className="panel-head"><span>FINANCE + ANALYTICS</span><b>LIVE</b></div>
      <div className="grid grid-cols-3 gap-2 p-4">
        {[["Revenue", "4.82M"], ["Cash", "1.94M"], ["Margin", "61.7%"]].map(([label, value]) => (
          <div key={label} className="metric"><small>{label}</small><strong>{value}</strong></div>
        ))}
      </div>
      <div className="px-5 pb-5"><Bars /></div>
    </div>
  );
}

function OperationsVisual() {
  return (
    <div className="panel right-[3%] top-[18%] hidden w-[26%] rotate-2 xl:block">
      <div className="panel-head"><span>OPERATIONS</span><b>REAL TIME</b></div>
      <div className="grid grid-cols-2 gap-2 p-4">
        {[["New", 12], ["In progress", 28], ["Review", 7], ["Complete", 84]].map(([label, value]) => (
          <div key={label} className="metric">
            <div className="flex items-center justify-between"><small>{label}</small><strong>{value}</strong></div>
            <i className="mt-3 block h-1 rounded-full bg-gradient-to-r from-[#76502d] to-[#E3B66D]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function IntelligenceVisual() {
  return (
    <div className="panel bottom-[5%] left-[3%] hidden w-[29%] xl:block">
      <div className="panel-head"><span>SYNTHETIC INTELLIGENCE</span><b>ACTIVE</b></div>
      <div className="space-y-2 p-4">
        {intelligence.map((item, index) => (
          <div key={item} className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
            <span className="text-[9px] text-white/48">0{index + 1} &nbsp; {item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,.8)]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function CreativeVisual() {
  return (
    <div className="panel bottom-[5%] right-[3%] hidden w-[39%] xl:block">
      <div className="panel-head"><span>CREATIVE STUDIO</span><b>STRATEGY TO PUBLISH</b></div>
      <div className="grid grid-cols-5 gap-2 p-4">
        {creative.map((item, index) => (
          <div
            key={item}
            className={`relative aspect-[.78] overflow-hidden rounded-xl border border-white/[0.07] p-3 ${
              index === 0
                ? "bg-[radial-gradient(circle_at_70%_18%,rgba(214,166,106,.4),transparent_38%),#211207]"
                : index === 2
                  ? "bg-[radial-gradient(circle_at_48%_45%,rgba(134,90,124,.3),transparent_45%),#101015]"
                  : "bg-white/[0.025]"
            }`}
          >
            <span className="text-[7px] tracking-[0.13em] text-white/50">{item}</span>
            <span className="absolute bottom-3 left-3 right-3 h-1 rounded-full bg-[#D6A66A]/24" />
          </div>
        ))}
      </div>
    </div>
  );
}

function SystemCore() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[640px]">
      <div className="absolute inset-[4%] animate-[spin_70s_linear_infinite] rounded-full border border-[#D6A66A]/10" />
      <div className="absolute inset-[14%] animate-[spin_48s_linear_infinite_reverse] rounded-full border border-[#D6A66A]/14" />
      <div className="absolute inset-[25%] rounded-full border border-[#D6A66A]/20" />
      <div className="absolute inset-[35%] rounded-full border border-[#D6A66A]/34 shadow-[0_0_100px_rgba(214,166,106,.13)]" />

      <div className="absolute inset-[35%] flex items-center justify-center rounded-full bg-[radial-gradient(circle_at_38%_28%,rgba(243,202,119,.25),rgba(4,4,4,.98)_64%)]">
        <div className="text-center">
          <img src="/avantiqo-logo.png" alt="Avantiqo" className="mx-auto h-16 w-auto drop-shadow-[0_0_24px_rgba(214,166,106,.4)]" />
          <p className="mt-3 text-[7px] uppercase tracking-[0.36em] text-[#D6A66A]/72">Synthetic Core</p>
        </div>
      </div>

      {orbitNodes.map(([name, position]) => (
        <div key={name} className={`absolute ${position} min-w-[112px] rounded-2xl border border-white/[0.085] bg-black/72 px-4 py-3 text-center shadow-[0_15px_45px_rgba(0,0,0,.7)] backdrop-blur-xl sm:min-w-[138px]`}>
          <p className="text-[8px] uppercase tracking-[0.18em] text-white/58">{name}</p>
          <p className="mt-2 text-[7px] text-[#D6A66A]/52">CONNECTED</p>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#020202] text-white xl:h-screen xl:overflow-hidden">
      <style>{`
        .panel{position:absolute;z-index:30;overflow:hidden;border:1px solid rgba(214,166,106,.22);border-radius:24px;background:rgba(3,3,3,.76);box-shadow:0 28px 90px rgba(0,0,0,.75);backdrop-filter:blur(22px)}
        .panel-head{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,.07);padding:14px 18px;font-size:8px;letter-spacing:.22em;color:rgba(230,190,118,.85)}
        .panel-head b{font-size:7px;font-weight:400;color:rgba(255,255,255,.28)}
        .metric{border:1px solid rgba(255,255,255,.06);border-radius:12px;background:rgba(255,255,255,.02);padding:12px}
        .metric small{display:block;font-size:7px;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.25)}
        .metric strong{display:block;margin-top:8px;font-size:14px;font-weight:300;color:rgba(255,255,255,.75)}
      `}</style>

      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(214,166,106,.14),transparent_25%),radial-gradient(circle_at_8%_8%,rgba(116,76,106,.08),transparent_28%),radial-gradient(circle_at_94%_12%,rgba(214,166,106,.07),transparent_26%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.11] [background-image:linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] [background-size:54px_54px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />

      <header className="relative z-50 flex items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
        <div className="flex items-center gap-4">
          <img src="/avantiqo-logo.png" alt="Avantiqo" className="h-9 w-auto" />
          <div>
            <p className="text-[11px] uppercase tracking-[0.45em] text-[#E2B969]">Avantiqo</p>
            <p className="mt-1 hidden text-[7px] uppercase tracking-[0.24em] text-white/28 sm:block">Synthetic Intelligence Operating System</p>
          </div>
        </div>
        <Link href={LOGIN_URL} className="rounded-xl border border-[#D6A66A]/55 bg-black/45 px-6 py-3 text-[10px] uppercase tracking-[0.23em] text-[#F0CB82] transition hover:bg-[#D6A66A]/10">
          Login
        </Link>
      </header>

      <section className="relative z-20 mx-auto grid min-h-[calc(100vh-88px)] max-w-[1600px] items-center gap-10 px-6 pb-16 sm:px-10 lg:px-14 xl:grid-cols-[.78fr_1.22fr] xl:pb-8">
        <div className="relative z-40 max-w-[650px] pt-8 xl:pt-0">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#D6A66A]/24 bg-[#D6A66A]/[0.045] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D6A66A] shadow-[0_0_14px_rgba(214,166,106,.9)]" />
            <span className="text-[8px] uppercase tracking-[0.3em] text-[#E6BE76]">Coming soon</span>
          </div>

          <p className="mt-8 text-[9px] uppercase tracking-[0.42em] text-[#D6A66A]/58">One intelligence layer across the whole company</p>
          <h1 className="mt-5 text-[clamp(3.7rem,7vw,7.4rem)] font-extralight leading-[0.88] tracking-[-0.065em] text-[#F4F0E8]">
            The Synthetic<br />
            <span className="bg-gradient-to-r from-[#F5D99A] via-[#D6A66A] to-[#9C728B] bg-clip-text text-transparent">Intelligence</span><br />
            Operating System
          </h1>

          <p className="mt-7 max-w-[570px] text-[14px] leading-7 text-white/42 sm:text-[16px] sm:leading-8">
            One connected environment to understand, create, operate and scale the entire business.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["FINANCE", "OPERATIONS", "SUPPLY", "COMMERCIAL", "PEOPLE", "PROJECTS", "ANALYTICS", "COMPLIANCE", "CREATIVE", "ADS", "WEB", "AUTOMATION"].map((item) => (
              <span key={item} className="rounded-full border border-white/[0.07] bg-white/[0.018] px-3 py-2 text-[7px] tracking-[0.17em] text-white/32">{item}</span>
            ))}
          </div>

          <div className="mt-9 flex items-center gap-5">
            <Link href={LOGIN_URL} className="inline-flex min-h-13 items-center justify-center rounded-xl border border-[#F0CB7C] bg-[linear-gradient(105deg,#83511d,#D8A64F,#F1D184,#A66B27)] px-8 text-[10px] font-semibold uppercase tracking-[0.22em] text-black shadow-[0_16px_46px_rgba(179,116,38,.16)] transition hover:brightness-110">
              Enter Avantiqo
            </Link>
            <span className="text-[7px] uppercase tracking-[0.2em] text-white/22">Secure system access</span>
          </div>
        </div>

        <div className="relative z-20 mx-auto w-full max-w-[720px] xl:max-w-none"><SystemCore /></div>
      </section>

      <FinanceVisual />
      <OperationsVisual />
      <IntelligenceVisual />
      <CreativeVisual />

      <div className="relative z-30 grid gap-3 px-6 pb-10 sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:px-14 xl:hidden">
        {["Finance + Analytics", "Operations + Supply", "People + Projects", "Creative, Ads + Web"].map((title, index) => (
          <div key={title} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
            <p className="text-[8px] uppercase tracking-[0.18em] text-[#D6A66A]/70">0{index + 1}</p>
            <p className="mt-3 text-[12px] text-white/56">{title}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
