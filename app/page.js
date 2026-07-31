import Link from "next/link";
import SiteTopNav from "@/app/components/SiteTopNav";
import Footer from "@/components/layout/Footer";

const domains = [
  ["Finance", "Ledger · Cash · Billing", "THB 4.82M"],
  ["Operations", "Work · Service · Evidence", "93% on time"],
  ["Supply Chain", "Buy · Store · Fulfil", "5,324 units"],
  ["Commercial", "Customers · Sales · Channels", "4.9x ROAS"],
  ["People", "Workforce · Learning · Performance", "94% covered"],
  ["Projects", "Plan · Deliver · Control", "18 active"],
  ["Documents", "Create · Approve · Govern", "142 records"],
  ["Analytics", "Measure · Forecast · Decide", "+11.8%"],
  ["Compliance", "Controls · Risk · Audit", "92% effective"],
  ["Creative Studio", "Campaigns · Film · Web", "37 assets"],
  ["Administration", "Context · Access · Services", "Governed"],
  ["Solutions", "Industry · Role · Extension", "Composable"],
];

const trustItems = [
  ["Business context", "Organisation, entity, period and authority are resolved before work begins."],
  ["Role-based access", "Every user sees only the capabilities and records their responsibility permits."],
  ["Approval gates", "Important financial, operational and creative decisions remain controlled."],
  ["Execution evidence", "Every action creates ownership, status, timestamps and completion proof."],
  ["Auditability", "The system preserves how decisions were made, approved and executed."],
  ["Managed services", "Providers, usage, pricing and wallet controls remain inside Avantiqo."],
];

const industries = [
  "Professional services", "Accounting firms", "Hospitality", "Retail",
  "Construction", "Healthcare", "Hotels and travel", "Agencies",
  "Manufacturing", "Property and facilities", "Multi-company groups", "New business models",
];

const financeRows = [
  ["4000", "Sales revenue", "THB 1,284,900", "+12.8%"],
  ["5100", "Cost of sales", "THB 492,240", "38.3%"],
  ["6100", "Operating expenses", "THB 311,800", "24.3%"],
  ["1000", "Cash and bank", "THB 928,410", "+8.1%"],
];

const workColumns = [
  ["New", ["Customer onboarding", "Site inspection", "Supplier review"]],
  ["In progress", ["Month-end close", "Campaign launch", "Warehouse count"]],
  ["Review", ["Project variation", "Policy evidence"]],
  ["Completed", ["Bank reconciliation", "Training cycle"]],
];

function Dot({ active = false }) {
  return <span className={`inline-block h-1.5 w-1.5 rounded-full ${active ? "bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,.7)]" : "bg-[#D6A66A] shadow-[0_0_12px_rgba(214,166,106,.55)]"}`} />;
}

function Frame({ label, right, children }) {
  return (
    <div className="overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#070709] shadow-[0_35px_120px_rgba(0,0,0,.52)]">
      <div className="flex items-center justify-between border-b border-white/[0.07] bg-white/[0.018] px-5 py-4 sm:px-7">
        <div className="flex items-center gap-3"><Dot active /><span className="text-[8px] uppercase tracking-[0.28em] text-white/38">{label}</span></div>
        <span className="text-[9px] text-white/24">{right}</span>
      </div>
      {children}
    </div>
  );
}

function Heading({ number, eyebrow, title, accent, text }) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-4"><span className="text-[9px] text-[#D6A66A]/52">{number}</span><span className="h-px w-12 bg-[#D6A66A]/28"/><span className="text-[10px] uppercase tracking-[0.38em] text-[#D6A66A]/78">{eyebrow}</span></div>
      <h2 className="mt-6 text-5xl font-extralight leading-[1.01] tracking-[-0.055em] sm:text-6xl lg:text-7xl">{title}<br/><span className="bg-gradient-to-r from-[#F3DFB3] via-[#D6A66A] to-[#9B738C] bg-clip-text text-transparent">{accent}</span></h2>
      {text ? <p className="mt-7 max-w-2xl text-sm leading-8 text-white/43 sm:text-base">{text}</p> : null}
    </div>
  );
}

function HeroDashboard() {
  const bars = [42,56,49,68,62,77,71,86,82,94,90,100];
  return (
    <Frame label="Avantiqo business command" right="Live organisation">
      <div className="grid min-h-[520px] lg:grid-cols-[150px_1fr]">
        <aside className="hidden border-r border-white/[0.07] bg-black/30 p-4 lg:block">
          <div className="mb-7 h-8 rounded-lg border border-[#D6A66A]/18 bg-[#D6A66A]/[0.055]" />
          {domains.slice(0,9).map(([name], index) => <div key={name} className={`mb-2 flex items-center gap-3 rounded-lg px-3 py-2.5 ${index===0?"bg-white/[0.055] text-white/72":"text-white/25"}`}><span className={`h-1.5 w-1.5 rounded-full ${index===0?"bg-[#D6A66A]":"bg-white/15"}`}/><span className="text-[8px] uppercase tracking-[0.13em]">{name}</span></div>)}
        </aside>
        <div className="p-5 sm:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-[8px] uppercase tracking-[0.28em] text-[#D6A66A]/65">Executive overview</p><p className="mt-3 text-3xl font-extralight tracking-[-0.045em] text-white/88">Good afternoon, Patric.</p></div><div className="rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-2 text-[8px] uppercase tracking-[0.17em] text-white/32">All organisations · Current period</div></div>
          <div className="mt-7 grid grid-cols-2 gap-3 xl:grid-cols-4">{[["Revenue","THB 4.82M","+14.6%"],["Cash","THB 1.94M","+8.1%"],["Open work","128","17 priority"],["Business health","91.4","Stable"]].map(([label,value,note],index)=><div key={label} className="rounded-2xl border border-white/[0.065] bg-white/[0.025] p-4"><div className="flex items-center justify-between"><p className="text-[8px] uppercase tracking-[0.18em] text-white/30">{label}</p><Dot active={index===3}/></div><p className="mt-4 text-xl font-light text-white/84">{value}</p><p className="mt-2 text-[9px] text-[#D6A66A]/62">{note}</p></div>)}</div>
          <div className="mt-4 grid gap-4 xl:grid-cols-[1.35fr_.65fr]">
            <div className="rounded-[22px] border border-white/[0.065] bg-black/25 p-5"><div className="flex items-center justify-between"><p className="text-[8px] uppercase tracking-[0.2em] text-white/30">Performance across the organisation</p><span className="text-[9px] text-emerald-300/70">+11.8%</span></div><div className="mt-7 flex h-40 items-end gap-2">{bars.map((height,index)=><div key={index} className="flex-1 rounded-t-md bg-gradient-to-t from-[#76502c]/65 via-[#D6A66A]/70 to-[#F4DC9E]" style={{height:`${height}%`,opacity:.42+index*.045}}/>)}</div></div>
            <div className="rounded-[22px] border border-white/[0.065] bg-black/25 p-5"><p className="text-[8px] uppercase tracking-[0.2em] text-white/30">Today</p><div className="mt-5 space-y-3">{[["Approve payment run","Finance"],["Review service risk","Operations"],["Launch campaign","Creative"],["Confirm hiring plan","People"]].map(([item,area],index)=><div key={item} className="rounded-xl border border-white/[0.055] bg-white/[0.018] p-3"><div className="flex items-start gap-3"><span className="mt-1 text-[8px] text-[#D6A66A]/58">0{index+1}</span><div><p className="text-[10px] text-white/58">{item}</p><p className="mt-1 text-[8px] uppercase tracking-[0.15em] text-white/22">{area}</p></div></div></div>)}</div></div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

function FinanceScreen() {
  return (
    <Frame label="Finance workspace" right="July 2026">
      <div className="p-5 sm:p-7">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">{[["Revenue","THB 1.28M"],["Gross margin","61.7%"],["Cash position","THB 928K"],["Receivables","THB 184K"]].map(([label,value])=><div key={label} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4"><p className="text-[8px] uppercase tracking-[0.18em] text-white/28">{label}</p><p className="mt-3 text-lg font-light text-white/80">{value}</p></div>)}</div>
        <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_.9fr]">
          <div className="rounded-[22px] border border-white/[0.06] bg-black/25 p-5"><div className="flex items-center justify-between"><p className="text-[8px] uppercase tracking-[0.2em] text-white/30">Cash and profitability</p><span className="text-[9px] text-emerald-300/70">Forecast on track</span></div><div className="mt-7 flex h-44 items-end gap-2">{[28,38,34,52,49,63,58,74,70,84,78,93].map((value,index)=><div key={index} className="flex-1 rounded-t-sm bg-gradient-to-t from-[#4f3825] to-[#D6A66A]" style={{height:`${value}%`,opacity:.38+index*.04}}/>)}</div></div>
          <div className="overflow-hidden rounded-[22px] border border-white/[0.06] bg-black/25"><div className="grid grid-cols-[55px_1fr_1fr_60px] border-b border-white/[0.06] px-4 py-3 text-[7px] uppercase tracking-[0.16em] text-white/22"><span>Code</span><span>Account</span><span>Balance</span><span>Trend</span></div>{financeRows.map(row=><div key={row[0]} className="grid grid-cols-[55px_1fr_1fr_60px] items-center border-b border-white/[0.045] px-4 py-4 text-[9px]"><span className="text-[#D6A66A]/55">{row[0]}</span><span className="text-white/45">{row[1]}</span><span className="text-white/70">{row[2]}</span><span className="text-emerald-300/65">{row[3]}</span></div>)}</div>
        </div>
      </div>
    </Frame>
  );
}

function OperationsScreen() {
  return (
    <Frame label="Operations control" right="Live execution"><div className="p-5 sm:p-7"><div className="flex flex-wrap gap-3">{[["Active work","48"],["On time","93%"],["Incidents","3"],["Evidence due","7"]].map(([label,value])=><div key={label} className="min-w-[130px] flex-1 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4"><p className="text-[8px] uppercase tracking-[0.16em] text-white/26">{label}</p><p className="mt-3 text-xl font-light text-white/78">{value}</p></div>)}</div><div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">{workColumns.map(([title,cards],columnIndex)=><div key={title} className="rounded-[20px] border border-white/[0.06] bg-black/25 p-3"><div className="flex items-center justify-between px-1 py-2"><p className="text-[8px] uppercase tracking-[0.18em] text-white/34">{title}</p><span className="rounded-full bg-white/[0.045] px-2 py-1 text-[7px] text-white/25">{cards.length}</span></div><div className="mt-2 space-y-2">{cards.map((card,index)=><div key={card} className="rounded-xl border border-white/[0.055] bg-white/[0.025] p-3"><div className="flex items-start justify-between"><p className="text-[10px] leading-5 text-white/55">{card}</p><span className={`mt-1 h-1.5 w-1.5 rounded-full ${columnIndex===3?"bg-emerald-300":index===0?"bg-[#D6A66A]":"bg-white/18"}`}/></div><div className="mt-4 flex items-center justify-between text-[7px] uppercase tracking-[0.12em] text-white/20"><span>Owner assigned</span><span>Today</span></div></div>)}</div></div>)}</div></div></Frame>
  );
}

function GridVisual({ type }) {
  const labels = type === "supply" ? ["Central warehouse","Regional hub","Field inventory","In transit"] : type === "people" ? ["Operations","Commercial","Finance","Projects"] : ["New market launch","Platform rollout","Warehouse expansion","Customer portal"];
  return (
    <Frame label={type === "supply" ? "Supply chain" : type === "people" ? "People" : "Projects · Documents · Compliance"} right={type === "supply" ? "Inventory network" : type === "people" ? "Workforce command" : "Accountable delivery"}>
      <div className="grid gap-px bg-white/[0.06] lg:grid-cols-[1.05fr_.95fr]">
        <div className="bg-[#08080a] p-5 sm:p-7"><p className="text-[8px] uppercase tracking-[0.2em] text-white/30">{type === "supply" ? "Network map" : type === "people" ? "Weekly capacity" : "Portfolio timeline"}</p><div className="mt-5 grid grid-cols-6 gap-2 rounded-[24px] border border-white/[0.06] bg-black/30 p-4 sm:p-5">{Array.from({length:36}).map((_,index)=><div key={index} className={`aspect-square rounded-md border ${[4,5,10,17,18,24,31].includes(index)?"border-[#D6A66A]/40 bg-[#D6A66A]/15":[8,20,28].includes(index)?"border-emerald-300/20 bg-emerald-300/[0.06]":"border-white/[0.055] bg-white/[0.025]"}`}/>)}</div><div className="mt-4 grid grid-cols-3 gap-3">{[["Available","5,324"],["Performance","94%"],["Priority","18"]].map(([label,value])=><div key={label} className="rounded-xl border border-white/[0.055] bg-white/[0.018] p-3"><p className="text-[7px] uppercase tracking-[0.15em] text-white/24">{label}</p><p className="mt-2 text-sm text-white/67">{value}</p></div>)}</div></div>
        <div className="bg-[#09090b] p-5 sm:p-7"><p className="text-[8px] uppercase tracking-[0.2em] text-white/30">Live status</p><div className="mt-5 space-y-3">{labels.map((name,index)=><div key={name} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4"><div className="flex items-center justify-between"><div><p className="text-[10px] text-white/58">{name}</p><p className="mt-1 text-[8px] uppercase tracking-[0.13em] text-white/22">Connected record</p></div><p className="text-sm text-white/72">{["96%","88%","91%","74%"][index]}</p></div><div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.055]"><div className="h-full rounded-full bg-gradient-to-r from-[#805a34] to-[#E4C17C]" style={{width:["96%","88%","91%","74%"][index]}}/></div></div>)}</div></div>
      </div>
    </Frame>
  );
}

function CommercialScreen() {
  return (
    <Frame label="Commercial" right="Customer and revenue"><div className="p-5 sm:p-7"><div className="grid gap-4 lg:grid-cols-[.72fr_1.28fr]"><div className="rounded-[22px] border border-white/[0.06] bg-black/25 p-5"><p className="text-[8px] uppercase tracking-[0.2em] text-white/30">Sales pipeline</p><div className="mt-6 space-y-3">{[["Qualified",100,"THB 1.8M"],["Proposal",78,"THB 1.2M"],["Negotiation",54,"THB 780K"],["Commit",32,"THB 460K"]].map(([label,width,value],index)=><div key={label}><div className="mb-2 flex justify-between text-[8px]"><span className="text-white/32">{label}</span><span className="text-white/54">{value}</span></div><div className="h-8 overflow-hidden rounded-lg bg-white/[0.04]"><div className="flex h-full items-center rounded-lg bg-gradient-to-r from-[#6a4a2b]/65 to-[#D6A66A]/75 px-3" style={{width:`${width}%`}}><span className="text-[8px] text-black/70">{index+7} opportunities</span></div></div></div>)}</div></div><div className="grid gap-4 sm:grid-cols-2"><div className="rounded-[22px] border border-white/[0.06] bg-black/25 p-5"><div className="flex items-center justify-between"><p className="text-[8px] uppercase tracking-[0.2em] text-white/30">Campaign performance</p><span className="text-[9px] text-emerald-300/65">4.9x ROAS</span></div><div className="mt-7 flex h-36 items-end gap-2">{[30,48,44,63,58,72,69,86,78,95].map((height,index)=><div key={index} className="flex-1 rounded-t-sm bg-gradient-to-t from-[#64442b] to-[#D6A66A]" style={{height:`${height}%`,opacity:.38+index*.05}}/>)}</div></div><div className="rounded-[22px] border border-white/[0.06] bg-black/25 p-5"><p className="text-[8px] uppercase tracking-[0.2em] text-white/30">Customer signals</p><div className="mt-5 space-y-3">{["Renewal opportunity","Service recovery","Cross-sell match","Loyalty milestone"].map((label,index)=><div key={label} className="flex items-center justify-between rounded-xl border border-white/[0.055] bg-white/[0.02] p-3"><div className="flex items-center gap-3"><Dot active={index===3}/><span className="text-[9px] text-white/48">{label}</span></div><span className="text-[8px] text-[#D6A66A]/55">Live</span></div>)}</div></div></div></div></div></Frame>
  );
}

function CreativeScreen() {
  return (
    <Frame label="Creative Studio" right="Campaign production"><div className="p-5 sm:p-7"><div className="grid gap-4 lg:grid-cols-[1.15fr_.85fr]"><div className="relative min-h-[360px] overflow-hidden rounded-[24px] border border-[#D6A66A]/18 bg-[radial-gradient(circle_at_72%_24%,rgba(214,166,106,.28),transparent_28%),linear-gradient(145deg,#211409,#07080c)] p-6 sm:p-8"><p className="text-[8px] uppercase tracking-[0.25em] text-[#D6A66A]/62">Master campaign</p><div className="mt-12 max-w-md text-5xl font-extralight leading-[.98] tracking-[-0.055em] text-white/88 sm:text-6xl">Ideas become<br/><span className="text-[#D6A66A]">complete campaigns.</span></div><div className="absolute bottom-6 left-6 right-6 grid grid-cols-4 gap-2">{["Strategy","Film","Design","Publish"].map((item,index)=><div key={item} className={`rounded-xl border p-3 ${index===1?"border-[#D6A66A]/25 bg-[#D6A66A]/10":"border-white/[0.06] bg-black/25"}`}><p className="text-[7px] uppercase tracking-[0.13em] text-white/35">{item}</p></div>)}</div></div><div className="grid gap-4"><div className="rounded-[22px] border border-white/[0.06] bg-black/25 p-5"><div className="flex items-center justify-between"><p className="text-[8px] uppercase tracking-[0.2em] text-white/30">Assets</p><span className="text-[8px] text-emerald-300/60">37 verified</span></div><div className="mt-4 grid grid-cols-3 gap-2">{Array.from({length:6}).map((_,index)=><div key={index} className={`aspect-square rounded-xl border border-white/[0.055] ${index===0?"bg-[radial-gradient(circle_at_70%_20%,rgba(214,166,106,.35),transparent_32%),#15100b]":index===4?"bg-[linear-gradient(145deg,#14121b,#25130e)]":"bg-white/[0.025]"}`}/>)}</div></div><div className="rounded-[22px] border border-white/[0.06] bg-black/25 p-5"><p className="text-[8px] uppercase tracking-[0.2em] text-white/30">Production timeline</p><div className="mt-5 space-y-2">{[82,64,91,48].map((width,index)=><div key={index} className="flex items-center gap-3"><span className="w-12 text-[7px] uppercase tracking-[0.12em] text-white/20">Track {index+1}</span><div className="h-7 flex-1 overflow-hidden rounded-lg bg-white/[0.035]"><div className="h-full rounded-lg bg-[#D6A66A]/24" style={{width:`${width}%`}}/></div></div>)}</div></div></div></div></div></Frame>
  );
}

function ChannelsScreen() {
  return (
    <div className="relative min-h-[580px] overflow-hidden rounded-[38px] border border-white/[0.08] bg-[radial-gradient(circle_at_50%_48%,rgba(214,166,106,.14),transparent_30%),linear-gradient(145deg,#0d0b0a,#050507)] p-5 sm:p-9"><div className="absolute left-[4%] top-[18%] w-[62%] rounded-[24px] border border-white/[0.1] bg-[#09090b] p-3 shadow-[0_30px_90px_rgba(0,0,0,.55)] sm:left-[7%] sm:w-[58%]"><div className="flex h-7 items-center gap-2 border-b border-white/[0.06] px-2"><Dot active/><span className="text-[7px] uppercase tracking-[0.17em] text-white/25">Public website</span></div><div className="grid min-h-[270px] grid-cols-[.8fr_1.2fr] gap-3 p-4"><div className="py-6"><div className="h-2 w-1/2 rounded-full bg-[#D6A66A]/28"/><div className="mt-4 h-7 w-4/5 rounded-lg bg-white/[0.07]"/><div className="mt-2 h-7 w-3/5 rounded-lg bg-white/[0.045]"/><div className="mt-6 h-8 w-28 rounded-xl bg-[#D6A66A]/18"/></div><div className="rounded-2xl bg-[radial-gradient(circle_at_70%_25%,rgba(214,166,106,.28),transparent_30%),#111017]"/></div></div><div className="absolute bottom-[8%] right-[10%] w-[46%] rounded-[25px] border border-white/[0.1] bg-[#0b0b0d] p-3 shadow-[0_30px_90px_rgba(0,0,0,.65)] sm:w-[40%]"><div className="flex h-7 items-center gap-2 border-b border-white/[0.06] px-2"><Dot/><span className="text-[7px] uppercase tracking-[0.17em] text-white/25">Customer portal</span></div><div className="grid grid-cols-2 gap-3 p-4">{Array.from({length:4}).map((_,index)=><div key={index} className="aspect-[1.4] rounded-xl border border-white/[0.055] bg-white/[0.025] p-3"><div className="h-1.5 w-1/3 rounded-full bg-[#D6A66A]/25"/><div className="mt-4 h-4 w-2/3 rounded bg-white/[0.06]"/></div>)}</div></div><div className="absolute right-[2%] top-[10%] w-[23%] rounded-[26px] border-[5px] border-[#17171a] bg-[#08080a] p-3 shadow-[0_28px_80px_rgba(0,0,0,.65)] sm:right-[4%] sm:w-[18%]"><div className="mx-auto mb-3 h-1 w-8 rounded-full bg-white/10"/><div className="space-y-3">{Array.from({length:5}).map((_,index)=><div key={index} className={`rounded-xl border border-white/[0.055] p-3 ${index===0?"bg-[#D6A66A]/10":"bg-white/[0.02]"}`}><div className="h-1.5 w-2/5 rounded-full bg-white/10"/><div className="mt-2 h-3 w-4/5 rounded bg-white/[0.05]"/></div>)}</div></div></div>
  );
}

function IntelligenceScreen() {
  const nodes=["Finance","Operations","Supply","Commercial","People","Projects","Documents","Creative"];
  const positions=["left-[5%] top-[18%]","right-[4%] top-[18%]","left-[1%] top-1/2","right-[1%] top-1/2","left-[7%] bottom-[14%]","right-[6%] bottom-[14%]","left-1/2 top-[3%] -translate-x-1/2","bottom-[3%] left-1/2 -translate-x-1/2"];
  return <div className="relative min-h-[500px] overflow-hidden rounded-[36px] border border-white/[0.08] bg-[radial-gradient(circle_at_50%_48%,rgba(214,166,106,.14),transparent_28%),linear-gradient(145deg,#0d0b0a,#050507)] p-6"><div className="relative flex min-h-[448px] items-center justify-center"><div className="absolute h-[330px] w-[330px] rounded-full border border-[#D6A66A]/10 sm:h-[390px] sm:w-[390px]"/><div className="absolute h-[225px] w-[225px] rounded-full border border-[#D6A66A]/16 sm:h-[270px] sm:w-[270px]"/><div className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full border border-[#D6A66A]/25 bg-[#D6A66A]/[0.04]"><div className="text-center"><img src="/avantiqo-logo.png" alt="Avantiqo" className="mx-auto h-10 w-auto"/><p className="mt-4 text-[7px] uppercase tracking-[0.24em] text-[#D6A66A]/65">Intelligence layer</p></div></div>{nodes.map((node,index)=><div key={node} className={`absolute ${positions[index]} rounded-full border border-white/[0.08] bg-black/70 px-4 py-2 text-[8px] uppercase tracking-[0.16em] text-white/38`}>{node}</div>)}</div></div>;
}

export default function Home() {
  return (
    <><SiteTopNav/><main className="min-h-screen overflow-hidden bg-[#030303] pt-[84px] text-white"><div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,166,106,.11),transparent_34%),radial-gradient(circle_at_90%_28%,rgba(129,87,123,.08),transparent_26%)]"/>
      <section id="overview" className="relative px-5 pb-24 pt-16 sm:px-8 lg:px-10 lg:pb-32 lg:pt-24"><div className="mx-auto grid max-w-[1500px] items-center gap-16 xl:grid-cols-[.82fr_1.18fr]"><div><div className="inline-flex items-center gap-3 rounded-full border border-[#D6A66A]/25 bg-[#D6A66A]/[0.055] px-4 py-2"><Dot/><span className="text-[9px] uppercase tracking-[0.28em] text-[#E8C887]/80">Coming soon</span></div><p className="mt-8 text-[10px] uppercase tracking-[0.42em] text-[#D6A66A]/72">Avantiqo business operating system</p><h1 className="mt-7 text-[54px] font-extralight leading-[.94] tracking-[-0.065em] sm:text-[76px] lg:text-[96px]">Run the entire<br/><span className="bg-gradient-to-r from-[#F7E6BD] via-[#D6A66A] to-[#9C738D] bg-clip-text text-transparent">business as one.</span></h1><p className="mt-8 max-w-[660px] text-base leading-8 text-white/48 sm:text-lg">Finance, operations, supply chain, commercial, people, projects, documents, compliance, analytics, creative production and every connected experience.</p><div className="mt-10 flex flex-col gap-4 sm:flex-row"><a href="#platform" className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-[#F1D28D] bg-[linear-gradient(105deg,#8B591F,#D5A34D,#F2D68B,#AA6C25)] px-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-black">Explore the platform</a><Link href="/login" className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-white/[0.11] bg-white/[0.035] px-8 text-[11px] uppercase tracking-[0.2em] text-white/68">Avantiqo login</Link></div></div><HeroDashboard/></div></section>
      <section id="platform" className="relative border-y border-white/[0.06] bg-white/[0.018] px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="mx-auto max-w-[1500px]"><Heading number="01" eyebrow="THE COMPLETE PLATFORM" title="Every business function." accent="One operating system."/><div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{domains.map(([title,detail,value],index)=><div key={title} className="min-h-[190px] rounded-[26px] border border-white/[0.075] bg-white/[0.02] p-6"><div className="flex justify-between"><span className="text-[8px] text-[#D6A66A]/52">{String(index+1).padStart(2,"0")}</span><span className="text-[9px] text-white/25">{value}</span></div><h3 className="mt-10 text-2xl font-light text-white/84">{title}</h3><p className="mt-4 text-[9px] uppercase tracking-[0.15em] text-white/25">{detail}</p></div>)}</div></div></section>
      <section className="relative px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="mx-auto grid max-w-[1500px] gap-14 xl:grid-cols-[.65fr_1.35fr] xl:items-center"><Heading number="02" eyebrow="FINANCE" title="Financial control" accent="connected to the work."/><FinanceScreen/></div></section>
      <section className="relative border-y border-white/[0.06] bg-white/[0.018] px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="mx-auto max-w-[1500px]"><Heading number="03" eyebrow="OPERATIONS" title="See the work." accent="Control the outcome."/><div className="mt-14"><OperationsScreen/></div></div></section>
      <section className="relative px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="mx-auto grid max-w-[1500px] gap-14 xl:grid-cols-[.68fr_1.32fr] xl:items-center"><Heading number="04" eyebrow="SUPPLY CHAIN" title="Know what exists," accent="where it is and what it costs."/><GridVisual type="supply"/></div></section>
      <section className="relative border-y border-white/[0.06] bg-white/[0.018] px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="mx-auto max-w-[1500px]"><Heading number="05" eyebrow="COMMERCIAL" title="Every customer." accent="Every revenue signal."/><div className="mt-14"><CommercialScreen/></div></div></section>
      <section className="relative px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="mx-auto grid max-w-[1500px] gap-14 xl:grid-cols-[.68fr_1.32fr] xl:items-center"><Heading number="06" eyebrow="PEOPLE" title="A working environment" accent="for every employee."/><GridVisual type="people"/></div></section>
      <section className="relative border-y border-white/[0.06] bg-white/[0.018] px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="mx-auto max-w-[1500px]"><Heading number="07" eyebrow="PROJECTS · DOCUMENTS · COMPLIANCE" title="Plans become delivery." accent="Delivery becomes evidence."/><div className="mt-14"><GridVisual type="projects"/></div></div></section>
      <section className="relative px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="mx-auto grid max-w-[1500px] gap-14 xl:grid-cols-[.65fr_1.35fr] xl:items-center"><Heading number="08" eyebrow="CREATIVE STUDIO" title="A complete agency" accent="inside the platform."/><CreativeScreen/></div></section>
      <section className="relative border-y border-white/[0.06] bg-white/[0.018] px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="mx-auto grid max-w-[1500px] gap-14 xl:grid-cols-[.62fr_1.38fr] xl:items-center"><Heading number="09" eyebrow="CONNECTED EXPERIENCES" title="One system." accent="Every channel."/><ChannelsScreen/></div></section>
      <section className="relative px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="mx-auto grid max-w-[1500px] gap-14 xl:grid-cols-[.7fr_1.3fr] xl:items-center"><Heading number="10" eyebrow="SYNTHETIC INTELLIGENCE" title="A supporting layer" accent="across the whole system."/><IntelligenceScreen/></div></section>
      <section className="relative border-y border-white/[0.06] bg-white/[0.018] px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="mx-auto max-w-[1500px]"><Heading number="11" eyebrow="TRUST + GOVERNANCE" title="Control built into" accent="every action."/><div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{trustItems.map(([title,text],index)=><div key={title} className="rounded-[26px] border border-white/[0.075] bg-white/[0.02] p-6"><div className="flex justify-between"><span className="text-[8px] text-[#D6A66A]/52">0{index+1}</span><Dot active={index===3}/></div><h3 className="mt-8 text-xl font-light text-white/80">{title}</h3><p className="mt-4 text-sm leading-7 text-white/35">{text}</p></div>)}</div></div></section>
      <section className="relative px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[.72fr_1.28fr] lg:items-center"><Heading number="12" eyebrow="UNIVERSAL BY DESIGN" title="Industry-aware." accent="Never industry-restricted."/><div className="flex flex-wrap gap-3 lg:justify-end">{industries.map((industry,index)=><span key={industry} className={`rounded-full border px-5 py-3 text-[9px] uppercase tracking-[0.16em] ${index%4===0?"border-[#D6A66A]/28 bg-[#D6A66A]/[0.05] text-[#E3BF78]/72":"border-white/[0.08] bg-white/[0.02] text-white/34"}`}>{industry}</span>)}</div></div></section>
      <section className="relative border-t border-white/[0.06] bg-white/[0.018] px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="mx-auto max-w-[1500px]"><div className="rounded-[40px] border border-[#D6A66A]/20 bg-[linear-gradient(135deg,rgba(42,29,16,.72),rgba(8,8,11,.96)_48%,rgba(33,20,35,.7))] px-6 py-16 text-center sm:px-10 lg:px-16 lg:py-24"><p className="text-[10px] uppercase tracking-[0.42em] text-[#D6A66A]/78">Coming soon</p><h2 className="mx-auto mt-7 max-w-5xl text-5xl font-extralight leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-8xl">The complete business.<br/><span className="text-white/32">One operating system.</span></h2><div className="mt-10"><Link href="/login" className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-[#F1D28D] bg-[linear-gradient(105deg,#8B591F,#D5A34D,#F2D68B,#AA6C25)] px-9 text-[11px] font-semibold uppercase tracking-[0.2em] text-black">Login to Avantiqo</Link></div></div></div></section>
    </main><Footer/></>
  );
}
