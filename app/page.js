const LOGIN_URL = "https://app.churchillkaron.com/login?brand=avantiqo";

const platformFunctions = [
  ["Finance", "Control cash, accounting, billing and performance.", "finance"],
  ["Operations", "Coordinate work, service, delivery and evidence.", "operations"],
  ["Supply Chain", "Buy, store, move and fulfil with full visibility.", "supply"],
  ["Commercial", "Connect customers, sales, offers and growth.", "commercial"],
  ["People", "Align responsibility, capacity and performance.", "people"],
  ["Projects", "Plan, deliver, approve and close every initiative.", "projects"],
  ["Documents", "Create, govern, approve and share business evidence.", "documents"],
  ["Compliance", "Keep controls, obligations and risk visible.", "compliance"],
  ["Analytics", "Turn company activity into clear decisions.", "analytics"],
  ["Creative Studio", "Produce campaigns, film, design and websites.", "creative"],
  ["Administration", "Manage context, access, services and governance.", "administration"],
  ["Solutions", "Adapt one platform to every company and role.", "solutions"],
];

const experiences = [
  ["Website", "Launch complete public experiences."],
  ["Customer Portal", "Give customers one clear place to act."],
  ["Mobile", "Put work and approvals in every hand."],
  ["POS + Kiosk", "Connect physical operations to the same system."],
  ["API + Integrations", "Connect services without fragmenting the company."],
  ["Channels", "Publish and communicate everywhere from one source."],
];

function LogoLockup() {
  return (
    <div className="flex items-center gap-4">
      <img src="/avantiqo-logo.png" alt="Avantiqo" className="h-11 w-auto sm:h-12" />
      <div className="hidden sm:block">
        <div className="text-[11px] font-semibold uppercase tracking-[0.44em] text-[#DDBA74]">Avantiqo</div>
        <div className="mt-1 text-[7px] uppercase tracking-[0.23em] text-white/34">Synthetic Intelligence Operating System</div>
      </div>
    </div>
  );
}

function MiniChart() {
  return (
    <div className="flex h-20 items-end gap-1.5">
      {[30, 46, 40, 58, 52, 72, 66, 82, 76, 96].map((height, index) => (
        <span
          key={index}
          className="flex-1 rounded-t-sm bg-gradient-to-t from-[#61411f] to-[#E4BC72]"
          style={{ height: `${height}%`, opacity: 0.35 + index * 0.055 }}
        />
      ))}
    </div>
  );
}

function MainMonitor() {
  return (
    <div className="relative mx-auto w-[91%] max-w-[760px]">
      <div className="overflow-hidden rounded-[24px] border border-[#D6A66A]/22 bg-[#09090A] shadow-[0_50px_150px_rgba(0,0,0,.72),0_0_70px_rgba(214,166,106,.06)]">
        <div className="flex h-10 items-center justify-between border-b border-white/[0.06] px-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
          </div>
          <span className="text-[6px] uppercase tracking-[0.2em] text-white/18">Avantiqo business command</span>
        </div>

        <div className="grid min-h-[400px] grid-cols-[112px_1fr] sm:min-h-[450px] sm:grid-cols-[145px_1fr]">
          <aside className="border-r border-white/[0.06] bg-black/25 p-3 sm:p-4">
            <img src="/avantiqo-logo.png" alt="" className="h-7 w-auto" />
            <div className="mt-8 space-y-1.5">
              {["Overview", "Finance", "Operations", "Supply Chain", "Commercial", "People", "Projects", "Documents"].map((item, index) => (
                <div
                  key={item}
                  className={`rounded-lg px-2.5 py-2 text-[6px] uppercase tracking-[0.13em] sm:text-[7px] ${
                    index === 0
                      ? "border border-[#D6A66A]/22 bg-[#D6A66A]/[0.065] text-[#E4BC74]"
                      : "text-white/22"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>

          <div className="relative overflow-hidden p-4 sm:p-6">
            <div className="pointer-events-none absolute right-[10%] top-[16%] h-44 w-44 rounded-full bg-[#D6A66A]/10 blur-[55px]" />
            <p className="text-[7px] uppercase tracking-[0.22em] text-[#D6A66A]/67">Good afternoon</p>
            <h3 className="mt-3 text-2xl font-light tracking-[-0.045em] text-white/86 sm:text-3xl">Your company, in one view.</h3>

            <div className="mt-5 grid grid-cols-3 gap-2.5">
              {[["Health", "91"], ["Work", "128"], ["Growth", "+14%"]].map(([label, value], index) => (
                <div key={label} className={`rounded-xl border p-3 ${index === 0 ? "border-[#D6A66A]/22 bg-[#D6A66A]/[0.055]" : "border-white/[0.06] bg-white/[0.02]"}`}>
                  <p className="text-[6px] uppercase tracking-[0.14em] text-white/27">{label}</p>
                  <p className="mt-3 text-lg font-light text-white/75">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-[1.1fr_.9fr]">
              <div className="rounded-xl border border-white/[0.06] bg-black/25 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-[6px] uppercase tracking-[0.16em] text-white/24">Company performance</p>
                  <span className="text-[7px] text-emerald-300/65">On track</span>
                </div>
                <div className="mt-4"><MiniChart /></div>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-black/25 p-3.5">
                <p className="text-[6px] uppercase tracking-[0.16em] text-white/24">Now</p>
                <div className="mt-3 space-y-2">
                  {["Approve payment run", "Resolve delivery risk", "Publish campaign"].map((item, index) => (
                    <div key={item} className="rounded-lg border border-white/[0.05] bg-white/[0.018] px-3 py-2.5">
                      <div className="flex items-center gap-2">
                        <span className={`h-1.5 w-1.5 rounded-full ${index === 2 ? "bg-emerald-300" : "bg-[#D6A66A]"}`} />
                        <span className="text-[7px] text-white/45 sm:text-[8px]">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto h-5 w-1/3 rounded-b-[50%] bg-gradient-to-b from-[#29231c] to-[#080808]" />
      <div className="mx-auto h-2 w-1/2 rounded-full bg-black/70 blur-sm" />
    </div>
  );
}

function Laptop() {
  return (
    <div className="absolute bottom-[2%] left-[9%] z-30 w-[49%] max-w-[530px] -rotate-[1.5deg]">
      <div className="overflow-hidden rounded-[18px] border border-[#D6A66A]/24 bg-[#0A0A0B] shadow-[0_35px_90px_rgba(0,0,0,.72)]">
        <div className="flex h-8 items-center justify-between border-b border-white/[0.06] px-3">
          <span className="text-[6px] uppercase tracking-[0.17em] text-[#D6A66A]/68">Creative Studio</span>
          <span className="text-[6px] text-white/18">Campaign ready</span>
        </div>
        <div className="grid min-h-[185px] grid-cols-[.95fr_1.05fr] gap-2 p-3 sm:min-h-[225px]">
          <div className="relative overflow-hidden rounded-xl border border-[#D6A66A]/16 bg-[radial-gradient(circle_at_70%_15%,rgba(214,166,106,.35),transparent_28%),linear-gradient(145deg,#28170B,#0A0A0F_68%)] p-4">
            <p className="text-[6px] uppercase tracking-[0.2em] text-[#EAC37B]/72">Launch campaign</p>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-lg font-light leading-tight text-white sm:text-2xl">Ideas become<br /><span className="text-[#E4B86C]">complete campaigns.</span></p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {["Poster", "Film", "Website", "Social"].map((item, index) => (
              <div key={item} className={`relative rounded-xl border border-white/[0.055] p-3 ${index === 1 ? "bg-[radial-gradient(circle_at_50%_45%,rgba(214,166,106,.22),transparent_40%),#111015]" : "bg-white/[0.02]"}`}>
                <span className="text-[6px] uppercase tracking-[0.13em] text-white/32">{item}</span>
                {index === 1 && <span className="absolute inset-0 flex items-center justify-center text-xl text-[#D6A66A]/55">▶</span>}
                <span className="absolute bottom-3 left-3 right-3 h-1 rounded-full bg-[#D6A66A]/16" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto h-3 w-[112%] -translate-x-[5%] rounded-b-[60%] bg-gradient-to-b from-[#3A3229] to-[#080808]" />
    </div>
  );
}

function Tablet() {
  return (
    <div className="absolute bottom-[7%] right-[4%] z-20 w-[37%] max-w-[390px] rotate-[2deg] overflow-hidden rounded-[24px] border-[5px] border-[#1A1816] bg-[#09090A] shadow-[0_35px_90px_rgba(0,0,0,.75)]">
      <div className="border-b border-white/[0.06] px-4 py-3">
        <p className="text-[6px] uppercase tracking-[0.18em] text-[#D6A66A]/70">Operations</p>
      </div>
      <div className="grid grid-cols-2 gap-2 p-3">
        {[["Active work", "48"], ["On time", "93%"], ["Review", "7"], ["Complete", "84"]].map(([label, value], index) => (
          <div key={label} className="rounded-xl border border-white/[0.055] bg-white/[0.02] p-3">
            <p className="text-[6px] uppercase tracking-[0.12em] text-white/24">{label}</p>
            <p className="mt-2 text-base font-light text-white/67">{value}</p>
            <div className="mt-3 h-1 rounded-full bg-white/[0.045]"><div className="h-full rounded-full bg-[#D6A66A]/50" style={{ width: `${[72,93,44,88][index]}%` }} /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Phone() {
  return (
    <div className="absolute right-[0%] top-[9%] z-40 hidden w-[17%] max-w-[175px] rotate-[1deg] overflow-hidden rounded-[30px] border-[6px] border-[#191816] bg-[#080809] shadow-[0_38px_110px_rgba(0,0,0,.78)] sm:block">
      <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-white/10" />
      <div className="p-3">
        <img src="/avantiqo-logo.png" alt="" className="mx-auto h-8 w-auto" />
        <p className="mt-5 text-center text-[7px] uppercase tracking-[0.17em] text-white/28">Welcome back</p>
        <div className="mt-3 space-y-2">
          {["Approvals", "My work", "Messages", "Reports"].map((item, index) => (
            <div key={item} className={`rounded-xl border p-3 ${index === 0 ? "border-[#D6A66A]/20 bg-[#D6A66A]/[0.055]" : "border-white/[0.055] bg-white/[0.018]"}`}>
              <span className="text-[6px] uppercase tracking-[0.13em] text-white/38">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl bg-gradient-to-r from-[#8B571F] via-[#E0B45E] to-[#9F6828] py-2.5 text-center text-[7px] font-semibold uppercase tracking-[0.14em] text-black">Open</div>
      </div>
    </div>
  );
}

function HeroProductScene() {
  return (
    <div className="relative min-h-[560px] lg:min-h-[700px]">
      <div className="absolute inset-[4%] rounded-full border border-[#D6A66A]/8" />
      <div className="absolute inset-[14%] rounded-full border border-[#D6A66A]/10" />
      <div className="absolute right-[8%] top-[4%] h-72 w-72 rounded-full bg-[#D6A66A]/10 blur-[105px]" />
      <div className="absolute inset-x-[4%] top-[8%]"><MainMonitor /></div>
      <Laptop />
      <Tablet />
      <Phone />
    </div>
  );
}

function FunctionVisual({ type }) {
  if (type === "finance") {
    return <div className="relative mx-auto h-20 w-28"><div className="absolute bottom-2 left-3 h-12 w-20 rounded-xl border border-[#D6A66A]/20 bg-[#D6A66A]/[0.06]" /><div className="absolute bottom-6 right-0 h-10 w-14 rounded-lg border border-white/10 bg-[#111]" /><span className="absolute bottom-8 right-5 text-xl text-[#D6A66A]">●</span></div>;
  }
  if (type === "operations") {
    return <div className="mx-auto w-28 space-y-2 pt-2">{[80, 62, 88].map((w, i) => <div key={i} className="flex items-center gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#D6A66A]/30 text-[9px] text-[#D6A66A]">✓</span><span className="h-2 rounded-full bg-white/[0.075]" style={{ width: `${w}%` }} /></div>)}</div>;
  }
  if (type === "supply") {
    return <div className="relative mx-auto h-20 w-32"><div className="absolute bottom-5 left-3 h-9 w-20 rounded-md border border-[#D6A66A]/22 bg-[#D6A66A]/[0.05]" /><div className="absolute bottom-5 right-2 h-7 w-8 rounded-r-lg border border-[#D6A66A]/22 bg-[#D6A66A]/[0.05]" /><span className="absolute bottom-2 left-7 h-4 w-4 rounded-full border border-[#D6A66A]/35" /><span className="absolute bottom-2 right-6 h-4 w-4 rounded-full border border-[#D6A66A]/35" /></div>;
  }
  if (type === "commercial") {
    return <div className="mx-auto grid w-32 grid-cols-[42px_1fr] gap-3"><div className="h-14 w-14 rounded-full border border-[#D6A66A]/24 bg-[radial-gradient(circle,rgba(214,166,106,.2),transparent_65%)]" /><div className="flex items-end gap-1">{[35,55,45,70,82].map((h,i)=><span key={i} className="w-2 rounded-t bg-[#D6A66A]/45" style={{height:`${h}%`}} />)}</div></div>;
  }
  if (type === "people") {
    return <div className="mx-auto flex w-36 items-center justify-center -space-x-3">{[0,1,2,3].map((i)=><div key={i} className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#0B0B0C] bg-[radial-gradient(circle_at_50%_38%,rgba(214,166,106,.22),transparent_28%),#171719] text-xl text-white/35">●</div>)}</div>;
  }
  if (type === "projects") {
    return <div className="mx-auto w-36 space-y-2 pt-2">{[72,45,90,60].map((w,i)=><div key={i} className="flex items-center gap-2"><span className="w-4 text-[7px] text-white/20">0{i+1}</span><span className="h-2 rounded-full bg-gradient-to-r from-[#6E4C2A] to-[#D6A66A]" style={{width:`${w}%`}} /></div>)}</div>;
  }
  if (type === "documents") {
    return <div className="relative mx-auto h-20 w-24">{[0,1,2].map(i=><div key={i} className="absolute h-14 w-16 rounded-lg border border-[#D6A66A]/18 bg-[#121213]" style={{left:`${i*10}px`,top:`${14-i*5}px`}} />)}<span className="absolute bottom-1 right-0 text-xl text-[#D6A66A]/65">▣</span></div>;
  }
  if (type === "compliance") {
    return <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[28px] border border-[#D6A66A]/25 bg-[radial-gradient(circle,rgba(214,166,106,.15),transparent_68%)] text-3xl text-[#D6A66A]">✓</div>;
  }
  if (type === "analytics") {
    return <div className="relative mx-auto h-20 w-36 overflow-hidden">{[0,1,2].map(i=><div key={i} className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D6A66A]/55 to-transparent" style={{top:`${25+i*12}px`,transform:`rotate(${i===1?5:-4}deg)`}} />)}<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(214,166,106,.18),transparent_45%)]" /></div>;
  }
  if (type === "creative") {
    return <div className="relative mx-auto h-20 w-32 overflow-hidden rounded-xl border border-[#D6A66A]/20 bg-[linear-gradient(145deg,#29180C,#0C0C10)]"><span className="absolute inset-0 flex items-center justify-center text-2xl text-[#D6A66A]">▶</span><span className="absolute bottom-2 left-3 right-3 h-1 rounded-full bg-[#D6A66A]/28" /></div>;
  }
  if (type === "administration") {
    return <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#D6A66A]/20"><div className="h-9 w-9 rotate-45 rounded-lg border border-[#D6A66A]/28 bg-[#D6A66A]/[0.06]" /><div className="absolute inset-2 rounded-full border border-white/[0.05]" /></div>;
  }
  return <div className="mx-auto flex h-20 w-20 items-center justify-center"><img src="/avantiqo-logo.png" alt="" className="h-16 w-auto opacity-80" /></div>;
}

function PlatformCard({ title, description, type }) {
  return (
    <article className="group rounded-[22px] border border-white/[0.075] bg-[linear-gradient(145deg,rgba(255,255,255,.025),rgba(255,255,255,.008))] p-5 transition duration-500 hover:-translate-y-1 hover:border-[#D6A66A]/28 hover:bg-[#D6A66A]/[0.025]">
      <div className="flex h-28 items-center justify-center"><FunctionVisual type={type} /></div>
      <h3 className="text-lg font-light text-white/82">{title}</h3>
      <p className="mt-3 text-[11px] leading-5 text-white/30">{description}</p>
    </article>
  );
}

function ExperienceVisual({ index }) {
  if (index === 0) return <div className="h-full rounded-2xl border border-white/[0.07] bg-[#0E0E10] p-3"><div className="h-7 border-b border-white/[0.06]" /><div className="mt-3 grid h-[100px] grid-cols-[.75fr_1.25fr] gap-3"><div className="space-y-2 pt-4"><div className="h-1.5 w-12 rounded bg-[#D6A66A]/34" /><div className="h-3 w-full rounded bg-white/[0.07]" /><div className="h-3 w-4/5 rounded bg-white/[0.045]" /><div className="h-6 w-20 rounded-lg bg-[#D6A66A]/16" /></div><div className="rounded-xl bg-[radial-gradient(circle_at_70%_20%,rgba(214,166,106,.3),transparent_28%),#17131A]" /></div></div>;
  if (index === 1) return <div className="grid h-full grid-cols-2 gap-2">{[0,1,2,3].map(i=><div key={i} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"><div className="h-1.5 w-9 rounded bg-[#D6A66A]/25" /><div className="mt-4 h-4 w-2/3 rounded bg-white/[0.055]" /></div>)}</div>;
  if (index === 2) return <div className="mx-auto h-full w-[44%] rounded-[22px] border-[4px] border-[#1A1918] bg-[#09090A] p-2"><div className="mx-auto h-1 w-7 rounded bg-white/10" /><div className="mt-3 space-y-2">{[0,1,2,3].map(i=><div key={i} className={`h-8 rounded-lg border ${i===0?"border-[#D6A66A]/20 bg-[#D6A66A]/[0.055]":"border-white/[0.055] bg-white/[0.02]"}`} />)}</div></div>;
  if (index === 3) return <div className="flex h-full items-end justify-center gap-3"><div className="h-[72%] w-[52%] rounded-t-2xl border border-white/[0.07] bg-[#101012] p-3"><div className="grid grid-cols-2 gap-2">{[0,1,2,3].map(i=><div key={i} className="aspect-square rounded-lg bg-white/[0.035]" />)}</div></div><div className="h-[86%] w-[24%] rounded-t-xl border border-[#D6A66A]/18 bg-[#111]" /></div>;
  if (index === 4) return <div className="h-full overflow-hidden rounded-xl border border-white/[0.06] bg-[#0B0B0D] p-3 font-mono text-[6px] leading-4 text-white/24"><span className="text-[#D6A66A]/65">POST</span> /business/actions<br />{"{"}<br />&nbsp;&nbsp;"capability": "execute",<br />&nbsp;&nbsp;"context": "organisation",<br />&nbsp;&nbsp;"status": "approved"<br />{"}"}</div>;
  return <div className="grid h-full grid-cols-4 gap-2">{[0,1,2,3,4,5,6,7].map(i=><div key={i} className="flex items-center justify-center rounded-xl border border-white/[0.055] bg-white/[0.02] text-sm text-[#D6A66A]/55">●</div>)}</div>;
}

function CreativeShowcase() {
  const tiles = [
    ["NEW COLLECTION", "Launch campaign", "bg-[radial-gradient(circle_at_70%_18%,rgba(214,166,106,.35),transparent_30%),linear-gradient(145deg,#2C1A0D,#0B0B10)]"],
    ["BEYOND POSSIBLE", "Brand film", "bg-[radial-gradient(circle_at_50%_75%,rgba(214,166,106,.22),transparent_35%),linear-gradient(145deg,#17100B,#09090D)]"],
    ["ELEVATE EVERY MOMENT", "Product campaign", "bg-[radial-gradient(circle_at_55%_35%,rgba(214,166,106,.3),transparent_24%),linear-gradient(145deg,#201409,#0A0A0C)]"],
    ["A NEW STANDARD", "Website launch", "bg-[radial-gradient(circle_at_80%_20%,rgba(145,103,130,.25),transparent_28%),linear-gradient(145deg,#131119,#0A0A0C)]"],
  ];

  return (
    <div className="grid gap-4 lg:grid-cols-[.58fr_1.42fr]">
      <div className="flex flex-col justify-center rounded-[28px] border border-white/[0.075] bg-white/[0.015] p-7 sm:p-9">
        <p className="text-[9px] uppercase tracking-[0.3em] text-[#D6A66A]/74">Creative Studio</p>
        <h3 className="mt-6 text-4xl font-extralight leading-tight tracking-[-0.045em] text-white/88 sm:text-5xl">Ideas become impact.</h3>
        <p className="mt-5 text-[13px] leading-7 text-white/36">Plan, produce, approve and publish campaigns that move the business forward.</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {["Campaigns", "Ads", "Film", "Websites", "Brand systems"].map(item=><span key={item} className="rounded-full border border-white/[0.07] px-3 py-2 text-[7px] uppercase tracking-[0.14em] text-white/30">{item}</span>)}
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {tiles.map(([title, subtitle, background], index) => (
          <article key={title} className={`group relative min-h-[310px] overflow-hidden rounded-[24px] border border-white/[0.075] ${background}`}>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/55 to-transparent" />
            {index === 1 && <span className="absolute inset-0 flex items-center justify-center text-4xl text-[#D6A66A]/70">▶</span>}
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-2xl font-light leading-tight text-white/84">{title}</p>
              <p className="mt-3 text-[8px] uppercase tracking-[0.18em] text-[#D6A66A]/67">{subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#030303] text-white">
      <style>{`
        @keyframes ambientPulse { 0%,100% { opacity:.28; transform:translate3d(0,0,0); } 50% { opacity:.58; transform:translate3d(-16px,10px,0); } }
        .ambient-pulse { animation:ambientPulse 12s ease-in-out infinite; }
      `}</style>

      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_76%_8%,rgba(214,166,106,.08),transparent_28%),radial-gradient(circle_at_12%_48%,rgba(120,84,112,.055),transparent_31%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.11] [background-image:linear-gradient(rgba(255,255,255,.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.022)_1px,transparent_1px)] [background-size:58px_58px] [mask-image:radial-gradient(circle_at_50%_22%,black,transparent_62%)]" />

      <header className="relative z-50 mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
        <LogoLockup />
        <a href={LOGIN_URL} className="rounded-xl border border-[#D6A66A]/48 bg-black/40 px-6 py-3 text-[10px] uppercase tracking-[0.24em] text-[#F0CC83] transition hover:border-[#E6C17B]/80 hover:bg-[#D6A66A]/10">Login</a>
      </header>

      <section className="relative mx-auto grid min-h-[calc(100vh-92px)] w-full max-w-[1600px] items-center gap-12 px-6 pb-20 pt-8 sm:px-10 lg:grid-cols-[.64fr_1.36fr] lg:px-14 lg:pb-24 lg:pt-6">
        <div className="relative z-30 max-w-[590px]">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#D6A66A]/22 bg-[#D6A66A]/[0.045] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D6A66A] shadow-[0_0_14px_rgba(214,166,106,.85)]" />
            <span className="text-[8px] uppercase tracking-[0.3em] text-[#E4BD74]">Coming soon</span>
          </div>
          <h1 className="mt-9 text-[clamp(3.8rem,6.2vw,7.1rem)] font-extralight leading-[0.92] tracking-[-0.067em] text-[#F4F0E9]">
            Run the entire business
            <span className="block bg-gradient-to-r from-[#F2D28A] via-[#D6A66A] to-[#9B7389] bg-clip-text text-transparent">as one.</span>
          </h1>
          <p className="mt-8 max-w-[560px] text-[16px] leading-8 text-white/48 sm:text-[18px] sm:leading-9">
            Finance, operations, supply chain, commercial, people, projects, documents, compliance, analytics and creative—all connected through one Synthetic Intelligence Operating System.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            {["Understand", "Coordinate", "Create", "Execute"].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-full border border-white/[0.075] bg-white/[0.018] px-4 py-2.5">
                <span className="text-[8px] text-[#D6A66A]/58">0{index + 1}</span>
                <span className="text-[8px] uppercase tracking-[0.18em] text-white/38">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="ambient-pulse absolute -right-20 top-10 h-80 w-80 rounded-full bg-[#D6A66A]/12 blur-[120px]" />
          <HeroProductScene />
        </div>
      </section>

      <section className="relative border-y border-white/[0.06] bg-white/[0.012] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="text-center">
            <p className="text-[9px] uppercase tracking-[0.34em] text-[#D6A66A]/72">Platform overview</p>
            <h2 className="mt-5 text-4xl font-extralight tracking-[-0.045em] text-white/88 sm:text-5xl">One platform. Every function.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-7 text-white/35">Avantiqo connects the entire company without turning the experience into technical complexity.</p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {platformFunctions.map(([title, description, type]) => <PlatformCard key={title} title={title} description={description} type={type} />)}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="text-center">
            <p className="text-[9px] uppercase tracking-[0.34em] text-[#D6A66A]/72">Connected experiences</p>
            <h2 className="mt-5 text-4xl font-extralight tracking-[-0.045em] text-white/88 sm:text-5xl">Every channel. One experience.</h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {experiences.map(([title, description], index) => (
              <article key={title} className="min-h-[330px] rounded-[26px] border border-white/[0.075] bg-white/[0.015] p-5">
                <div className="h-[205px]"><ExperienceVisual index={index} /></div>
                <div className="mt-5 border-t border-white/[0.055] pt-5">
                  <h3 className="text-xl font-light text-white/78">{title}</h3>
                  <p className="mt-3 text-[12px] leading-6 text-white/31">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/[0.06] bg-white/[0.012] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <CreativeShowcase />
        </div>
      </section>

      <section className="relative px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[36px] border border-[#D6A66A]/18 bg-[linear-gradient(145deg,rgba(43,29,16,.78),rgba(7,7,8,.97)_45%,rgba(31,20,34,.72))] px-7 py-14 sm:px-12 lg:px-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
            <div>
              <p className="text-[9px] uppercase tracking-[0.32em] text-[#D6A66A]/72">Powered by</p>
              <h2 className="mt-5 text-4xl font-extralight leading-tight tracking-[-0.045em] text-white/88 sm:text-5xl">Synthetic Intelligence.<br />Working behind everything.</h2>
              <p className="mt-6 max-w-lg text-[14px] leading-7 text-white/36">Avantiqo understands context, predicts what matters, recommends the next move and coordinates approved execution.</p>
            </div>
            <div className="relative flex min-h-[280px] items-center justify-center">
              <div className="absolute h-56 w-56 rounded-full border border-[#D6A66A]/16" />
              <div className="absolute h-40 w-40 rounded-full border border-[#D6A66A]/22 bg-[#D6A66A]/[0.035] shadow-[0_0_80px_rgba(214,166,106,.12)]" />
              <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border border-[#D6A66A]/32 bg-black/45">
                <img src="/avantiqo-logo.png" alt="Avantiqo" className="h-16 w-auto" />
              </div>
              {[["Understand","left-[2%] top-[18%]"],["Predict","right-[5%] top-[18%]"],["Recommend","left-[2%] bottom-[18%]"],["Automate","right-[5%] bottom-[18%]"]].map(([label,pos])=><span key={label} className={`absolute ${pos} rounded-full border border-white/[0.075] bg-black/35 px-5 py-2.5 text-[8px] uppercase tracking-[0.18em] text-white/38`}>{label}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/[0.06] px-6 py-28 sm:px-10 lg:px-14 lg:py-36">
        <div className="mx-auto max-w-[1400px] rounded-[38px] border border-[#D6A66A]/18 bg-[linear-gradient(135deg,rgba(44,29,15,.75),rgba(8,8,9,.97)_48%,rgba(35,22,37,.7))] px-7 py-16 text-center shadow-[0_45px_130px_rgba(0,0,0,.4)] sm:px-12 lg:px-20 lg:py-24">
          <p className="text-[9px] uppercase tracking-[0.36em] text-[#D6A66A]/72">The future is almost here</p>
          <h2 className="mx-auto mt-7 max-w-5xl text-5xl font-extralight leading-[1.03] tracking-[-0.055em] text-[#F3EFE8] sm:text-6xl lg:text-7xl">Avantiqo is coming soon.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-white/38">Be ready for a new era of business—one company, one operating system, one accountable source of execution.</p>
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
