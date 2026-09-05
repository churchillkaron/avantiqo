import Link from "next/link";

const focusAreas = [
  {
    title: "Understand the objective",
    text: "Frame the business result, constraint and urgency before selecting a tool or implementation path.",
  },
  {
    title: "Connect the company context",
    text: "Keep the recommendation attached to the organization, business area and governed operating context.",
  },
  {
    title: "Choose the next action",
    text: "Move work into the correct Avantiqo workspace instead of leaving the answer trapped in a chat response.",
  },
];

const actions = [
  {
    label: "Build or improve software",
    description: "Hand the business objective to Code Intelligence and continue in Code Studio.",
    href: "/workspace/studio?source=business-partner&intent=build",
    action: "Open Code Studio",
  },
  {
    label: "Analyze the business",
    description: "Use enterprise intelligence and analytics to investigate performance, risk and opportunity.",
    href: "/workspace/ai",
    action: "Open Intelligence",
  },
  {
    label: "Run operational work",
    description: "Move from recommendation into the governed operational workspace that owns execution.",
    href: "/workspace/operations",
    action: "Open Operations",
  },
];

export default async function BusinessPartnerPage({ searchParams }) {
  const params = await searchParams;
  const codeFocus = params?.focus === "code";

  return (
    <div className="mx-auto max-w-7xl pb-16">
      <section className="relative overflow-hidden rounded-[32px] border border-white/[0.07] bg-[#070707] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(214,166,106,.13),transparent_34%),radial-gradient(circle_at_15%_88%,rgba(105,74,112,.12),transparent_35%)]" />
        <div className="relative grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#D6A66A]">Avantiqo Business Partner</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-extralight tracking-[-0.055em] text-[#F7F3EB] sm:text-5xl lg:text-6xl">
              Think with the business. Then move the work forward.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/52">
              Business Partner is the front door to Avantiqo intelligence: understand the goal, connect it to company context and move the next action into the workspace that can actually execute it.
            </p>
          </div>

          <div className="rounded-2xl border border-[#D6A66A]/20 bg-[#D6A66A]/[0.045] p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#D6A66A]">Code Intelligence</p>
                <h2 className="mt-2 text-xl font-medium text-white/90">Connected to Code Studio</h2>
              </div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-300">Ready</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/46">
              {codeFocus
                ? "You arrived from Code Studio. Refine the business objective here, then return to engineering with the source of the mission preserved."
                : "When the solution requires software work, Business Partner hands the objective directly to Code Intelligence and Code Studio instead of starting a disconnected developer task."}
            </p>
            <Link href="/workspace/studio?source=business-partner&intent=build" className="mt-5 inline-flex rounded-xl bg-[#D6A66A] px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-[#E2BF79]">
              Continue in Code Studio
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        {focusAreas.map((item) => (
          <article key={item.title} className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
            <h2 className="text-base font-medium text-white/88">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-white/43">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="mt-6 rounded-[28px] border border-white/[0.07] bg-[#080808] p-6 sm:p-8">
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D6A66A]">Next best action</p>
          <h2 className="mt-4 text-3xl font-light tracking-[-0.04em] text-white">The answer should lead somewhere.</h2>
          <p className="mt-4 text-sm leading-7 text-white/45">
            Business Partner is designed around handoff, not another isolated assistant window. Select the type of work and continue in the workspace that owns the next step.
          </p>
        </div>

        <div className="mt-7 grid gap-4 lg:grid-cols-3">
          {actions.map((item) => (
            <Link key={item.label} href={item.href} className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition hover:border-[#D6A66A]/28 hover:bg-[#D6A66A]/[0.03]">
              <h3 className="text-lg font-medium text-white/88">{item.label}</h3>
              <p className="mt-3 text-sm leading-6 text-white/43">{item.description}</p>
              <p className="mt-5 text-sm font-medium text-[#E7C67F]">{item.action} →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-[1.15fr_.85fr]">
        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
          <p className="text-[10px] uppercase tracking-[0.22em] text-white/35">Operating principle</p>
          <h2 className="mt-4 text-2xl font-light tracking-[-0.035em] text-white">Context before execution.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/44">
            The partner should understand what the company is trying to accomplish, identify the correct domain, expose important constraints and then route the work. That keeps intelligence useful to a human operator instead of producing advice with no accountable next step.
          </p>
        </div>
        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
          <p className="text-[10px] uppercase tracking-[0.22em] text-white/35">Engineering handoff</p>
          <h2 className="mt-4 text-2xl font-light tracking-[-0.035em] text-white">Business Partner → Code Intelligence → Code Studio</h2>
          <p className="mt-3 text-sm leading-7 text-white/44">The code path is now explicit and bidirectional, so a software mission can move between business reasoning and engineering execution without losing its origin.</p>
        </div>
      </section>
    </div>
  );
}
