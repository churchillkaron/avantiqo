"use client";
import Image from "next/image"
export default function AIChallengeEngine() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      {/* BACKGROUND */}
      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[140px] md:h-[1000px] md:w-[1000px] md:blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-5xl text-center md:mb-24">
          <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8]">
            AI CHALLENGE ENGINE
          </p>

          <h2
            className="text-5xl text-white sm:text-6xl md:text-[76px]"
            style={{
              lineHeight: 1,
              fontWeight: 300,
              letterSpacing: "-0.05em",
            }}
          >
            Transform staff into
            <br />

            <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
              performance drivers.
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
            Avantiqo turns operational execution into a live AI-powered
            competition system where staff complete challenges, increase
            revenue, improve guest engagement and unlock higher payout
            opportunities through measurable performance.
          </p>
        </div>

        {/* MAIN IMAGE */}
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-3xl md:rounded-[42px] md:p-8">
          <Image
  src="/showcase/staff-challenge-phone.png"
  alt="AI Challenge Engine"
  width={900}
  height={1800}
  className="w-full"
/>
        </div>

        {/* FEATURE GRID */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4 md:mt-14 md:gap-6">
          {[
            {
              title: "AI-generated challenges",
              text: "Dynamic daily and weekly missions generated automatically from live operational conditions.",
            },
            {
              title: "Revenue competition",
              text: "Sales performance, upselling and guest engagement tracked in real time.",
            },
            {
              title: "Review driver system",
              text: "Google review competitions increase visibility, traffic and customer trust.",
            },
            {
              title: "Performance-linked payout",
              text: "Higher performance unlocks stronger service charge and bonus opportunities.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[26px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-3xl md:rounded-[30px] md:p-8"
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

        {/* METRICS */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 md:mt-12 md:gap-6">
          {[
            {
              title: "+32%",
              text: "Revenue Increase",
            },
            {
              title: "24/7",
              text: "Live Performance Tracking",
            },
            {
              title: "AI",
              text: "Dynamic Workforce Challenges",
            },
            {
              title: "100%",
              text: "Operational Accountability",
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