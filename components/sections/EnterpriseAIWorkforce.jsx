"use client";
import Image from "next/image"
export default function EnterpriseAIWorkforce() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      {/* BACKGROUND */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[140px] md:h-[900px] md:w-[900px] md:blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mb-16 max-w-5xl md:mb-24">
          <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8] md:mb-8">
            ENTERPRISE AI WORKFORCE
          </p>

          <h2
            className="text-5xl text-white sm:text-6xl md:text-7xl"
            style={{
              fontWeight: 300,
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
            }}
          >
            AI workforce
            <br />

            <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
              intelligence layer
            </span>

            <br />
            for modern operations.
          </h2>

          <p
            className="mt-8 max-w-4xl text-white/50 md:mt-10"
            style={{
              fontSize: "18px",
              lineHeight: 1.9,
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Avantiqo connects attendance, payroll,
            approvals, department accountability,
            operational scoring and AI workforce
            intelligence into one synchronized
            enterprise management infrastructure.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT SIDE */}
          <div className="space-y-5 md:space-y-6">
            {[
              {
                title: "AI Attendance Monitoring",
                text: "Track shifts, lateness, attendance behavior and operational compliance in real time.",
              },
              {
                title: "Payroll Intelligence",
                text: "Automated salary calculations, service charge distribution and AI payroll validation.",
              },
              {
                title: "Department Accountability",
                text: "Monitor kitchen, FOH, finance and operational performance through live AI scoring.",
              },
              {
                title: "AI Approval Systems",
                text: "Control approvals, salary confirmations, invoices and operational governance centrally.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[26px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-3xl md:rounded-[32px] md:p-8"
              >
                <h3
                  className="text-2xl text-white md:text-[32px]"
                  style={{
                    lineHeight: 1.08,
                    fontWeight: 300,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="mt-4 text-white/45 md:mt-5"
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.9,
                    fontWeight: 400,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-3xl md:rounded-[42px] md:p-8">
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 md:rounded-[32px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8B5CF6]/10 via-transparent to-[#D6A66A]/10" />
              <Image
                src="/showcase/ai-workforce-dashboard.png"
                alt="AI Workforce Dashboard"
                loading="lazy"
                className="relative z-10 h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* METRICS */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 md:mt-12 md:gap-6">
          {[
            {
              title: "98%",
              text: "Attendance Accuracy",
            },
            {
              title: "24/7",
              text: "AI Shift Monitoring",
            },
            {
              title: "Live",
              text: "Payroll Intelligence",
            },
            {
              title: "Multi",
              text: "Department Oversight",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[26px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-3xl md:rounded-[30px] md:p-8"
            >
              <h4
                className="text-4xl text-white md:text-[52px]"
                style={{
                  lineHeight: 1.05,
                  fontWeight: 300,
                  letterSpacing: "-0.03em",
                }}
              >
                {item.title}
              </h4>

              <p
                className="mt-4 text-white/45"
                style={{
                  fontSize: "16px",
                  lineHeight: 1.8,
                  fontWeight: 400,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}