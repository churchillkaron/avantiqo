"use client";
import Image from "next/image"
export default function MultiLocationCommand() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      {/* BACKGROUND */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[140px] md:h-[1200px] md:w-[1200px] md:blur-[220px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-5xl text-center md:mb-24">
          <p className="mb-6 text-xs tracking-[0.28em] text-[#B58AF8]">
            MULTI-LOCATION COMMAND
          </p>

          <h2
            className="text-5xl text-white sm:text-6xl md:text-[76px]"
            style={{
              lineHeight: 1,
              fontWeight: 300,
              letterSpacing: "-0.05em",
            }}
          >
            Control every
            <br />

            <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
              business from one place.
            </span>
          </h2>

          <p
            className="mx-auto mt-8 max-w-4xl text-white/55 md:mt-10"
            style={{
              fontSize: "20px",
              lineHeight: 1.9,
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Avantiqo gives owners and enterprise groups real-time operational
            visibility across multiple companies, locations, departments,
            staff teams and financial systems from one unified AI infrastructure.
          </p>
        </div>

        {/* MAIN IMAGE */}
        <div className="overflow-hidden rounded-[28px] border border-white/[0.05] bg-white/[0.025] p-4 backdrop-blur-3xl md:rounded-[42px] md:p-8">
          <Image
  src="/showcase/multi-location-command.png"
  alt="Multi location command center"
  width={1600}
  height={900}
  className="w-full rounded-[24px] border border-white/[0.05]"
 />
        </div>

        {/* INFO GRID */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4 md:mt-14 md:gap-6">
          {[
            {
              title: "Global Visibility",
              text: "Monitor every branch, venue, project and department from one centralized intelligence layer.",
            },
            {
              title: "Live Financial Control",
              text: "Track revenue, costs, approvals, payroll and operational performance in real time.",
            },
            {
              title: "AI Operational Alerts",
              text: "Receive automatic AI warnings for margin pressure, unusual spending and operational risks.",
            },
            {
              title: "Enterprise Synchronization",
              text: "Operations, finance, workforce, inventory and customer systems remain fully connected.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[26px] border border-white/[0.05] bg-white/[0.025] p-6 backdrop-blur-3xl md:rounded-[30px] md:p-8"
            >
              <h4
                className="text-2xl text-white md:text-[28px]"
                style={{
                  lineHeight: 1.15,
                  fontWeight: 300,
                  letterSpacing: "-0.03em",
                }}
              >
                {item.title}
              </h4>

              <p
                className="mt-4 text-white/45 md:mt-5"
                style={{
                  fontSize: "16px",
                  lineHeight: 1.9,
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}