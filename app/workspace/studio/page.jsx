import Link from "next/link";

const capabilityCards = [
  {
    title: "Understand the codebase",
    text: "Start from the business objective, identify the affected product surface, dependencies and constraints before implementation.",
  },
  {
    title: "Plan the change",
    text: "Turn the objective into a bounded implementation plan with files, interfaces, acceptance criteria and verification steps.",
  },
  {
    title: "Review the change",
    text: "Inspect implementation risk, regressions, security boundaries and product logic before the work is treated as complete.",
  },
  {
    title: "Verify the result",
    text: "Keep build, test, runtime and human-workflow verification attached to the same implementation mission.",
  },
];

const flow = [
  ["01", "Business intent", "Business Partner captures what needs to change and why."],
  ["02", "Code Intelligence", "Translate the intent into repository-aware implementation scope."],
  ["03", "Code Studio", "Implement, inspect and iterate inside one engineering workspace."],
  ["04", "Evidence", "Finish with explicit verification instead of an unproven code change."],
];

export default async function CodeStudioPage({ searchParams }) {
  const params = await searchParams;
  const source = params?.source === "business-partner" ? "Business Partner" : null;
  const intent = typeof params?.intent === "string" ? params.intent : null;

  return (
    <div className="mx-auto max-w-7xl pb-16">
      <section className="relative overflow-hidden rounded-[32px] border border-white/[0.07] bg-[#070707] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(214,166,106,.13),transparent_34%),radial-gradient(circle_at_18%_82%,rgba(105,74,112,.11),transparent_36%)]" />
        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#D6A66A]">Avantiqo Code Intelligence</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-extralight tracking-[-0.055em] text-[#F7F3EB] sm:text-5xl lg:text-6xl">
              Code Studio
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/52">
              One engineering surface for turning a business objective into scoped implementation, review and verification. Code Intelligence is the reasoning layer between the business request and the code change.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/workspace/business-partner" className="rounded-xl bg-[#D6A66A] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#E2BF79]">
                Open Business Partner
              </Link>
              <Link href="/workspace/ai" className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white/70 transition hover:border-white/20 hover:text-white">
                Open Intelligence
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-black/35 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/35">Mission intake</p>
                <p className="mt-2 text-lg font-medium text-white/88">{source || "Code Studio"}</p>
              </div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-300">Connected</span>
            </div>
            <div className="mt-5 border-t border-white/[0.07] pt-5 text-sm leading-6 text-white/45">
              {source
                ? `This Code Studio session was opened from ${source}${intent ? ` for a ${intent} mission` : ""}. The source context stays explicit so engineering work remains connected to the business objective.`
                : "Start directly in Code Studio or arrive from Business Partner. The source of the mission remains visible so implementation does not lose the business reason behind it."}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {capabilityCards.map((item) => (
          <article key={item.title} className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
            <h2 className="text-base font-medium text-white/88">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-white/43">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="mt-6 rounded-[28px] border border-white/[0.07] bg-[#080808] p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D6A66A]">Human work logic</p>
            <h2 className="mt-4 text-3xl font-light tracking-[-0.04em] text-white">Business request to verified code.</h2>
            <p className="mt-4 text-sm leading-7 text-white/45">
              The workflow keeps intent, implementation and evidence together. Code Studio is not a disconnected prompt box; it is the engineering execution surface for work initiated by Business Partner or directly by a developer.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {flow.map(([number, title, text]) => (
              <div key={number} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                <p className="text-[10px] font-semibold text-[#D6A66A]">{number}</p>
                <h3 className="mt-3 text-base font-medium text-white/85">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/42">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 lg:col-span-2">
          <p className="text-[10px] uppercase tracking-[0.22em] text-white/35">Engineering guardrails</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {["Repository scope before edits", "Acceptance criteria before completion", "Security and regression review", "Build and runtime evidence"].map((item) => (
              <div key={item} className="rounded-xl border border-white/[0.06] bg-black/25 px-4 py-3 text-sm text-white/57">{item}</div>
            ))}
          </div>
        </div>
        <Link href="/workspace/business-partner?focus=code" className="group rounded-2xl border border-[#D6A66A]/20 bg-[#D6A66A]/[0.045] p-5 transition hover:border-[#D6A66A]/40">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D6A66A]">Business Partner</p>
          <h2 className="mt-4 text-xl font-medium text-white/90">Start from the business problem.</h2>
          <p className="mt-3 text-sm leading-6 text-white/46">Define the outcome first, then hand the mission to Code Intelligence and Code Studio.</p>
          <p className="mt-5 text-sm font-medium text-[#E7C67F]">Open partner →</p>
        </Link>
      </section>
    </div>
  );
}
