"use client";
import Image from "next/image"
export default function AIMarketingAutomation() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      {/* BACKGROUND */}
      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[140px] md:h-[1000px] md:w-[1000px] md:blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-5xl text-center md:mb-24">
          <p className="mb-6 text-xs tracking-[0.28em] text-[#B58AF8]">
            AI MARKETING AUTOMATION
          </p>

          <h2
            className="text-5xl text-white sm:text-6xl md:text-[76px]"
            style={{
              lineHeight: 1,
              fontWeight: 300,
              letterSpacing: "-0.05em",
            }}
          >
            Growth campaigns
            <br />

            <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
              powered by AI.
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
            Avantiqo connects campaign creation, AI visuals, content generation,
            scheduling, publishing, customer communication and performance
            optimization across Meta, Instagram, Google, LINE, WhatsApp and email.
          </p>
        </div>

        {/* IMAGE */}
        <div className="overflow-hidden rounded-[28px] border border-white/[0.05] bg-white/[0.025] p-4 backdrop-blur-3xl md:rounded-[42px] md:p-8">
         <Image
  src="/showcase/ai-marketing-automation.png"
  alt="AI marketing automation system"
  width={1600}
  height={900}
  className="w-full rounded-[22px] border border-white/[0.05] shadow-[0_40px_120px_rgba(0,0,0,0.9)] md:rounded-[34px]"
/>
        </div>

        {/* FEATURE GRID */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4 md:mt-14 md:gap-6">
          {[
            {
              title: "AI Campaign Builder",
              text: "Generate campaigns, offers, captions, creative briefs and publishing plans from business goals.",
            },
            {
              title: "Creative Studio",
              text: "Produce AI render, enhance, composite and video content directly inside the operating system.",
            },
            {
              title: "Multi-Channel Publishing",
              text: "Schedule and publish content across Meta, Instagram, Google, LINE, WhatsApp and email.",
            },
            {
              title: "Performance Optimization",
              text: "AI tracks engagement, conversions and revenue impact to improve future campaigns automatically.",
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
  );
}