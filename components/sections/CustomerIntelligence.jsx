"use client";
import Image from "next/image"
export default function CustomerIntelligence() {
  return (
    <section className="relative overflow-hidden py-40">

      <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="mx-auto mb-24 max-w-5xl text-center">

          <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8]">
            CUSTOMER INTELLIGENCE
          </p>

          <h2
            className="text-white"
            style={{
              fontSize: "76px",
              lineHeight: 1,
              fontWeight: 300,
              letterSpacing: "-0.05em",
            }}
          >
            Turn customers into
            <br />

            <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
              long-term relationships.
            </span>

          </h2>

          <p
            className="mx-auto mt-10 max-w-4xl text-white/55"
            style={{
              fontSize: "22px",
              lineHeight: 1.9,
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Avantiqo connects customer profiles, loyalty,
            communication history, reservations, spending,
            preferences and AI engagement into one unified
            relationship intelligence platform.
          </p>

        </div>

        {/* IMAGE */}
        <div className="overflow-hidden rounded-[42px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-3xl">

          <Image
  src="/showcase/customer-intelligence.png"
  alt="Customer intelligence"
  width={1600}
  height={900}
  className="w-full rounded-[24px] border border-white/10 md:rounded-[34px]"
/>

        </div>

        {/* FEATURE CARDS */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            {
              title: "VIP Profiles",
              text: "Track guest preferences, birthdays, visit history, spending patterns and loyalty behavior.",
            },
            {
              title: "AI Engagement",
              text: "AI recommends offers, campaigns and personalized communication based on customer activity.",
            },
            {
              title: "Unified Communication",
              text: "Manage WhatsApp, LINE, email and customer messaging from one operational workflow.",
            },
            {
              title: "Retention Intelligence",
              text: "Identify repeat customers, high-value guests and customer churn before revenue is lost.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-3xl"
            >

              <h4
                className="text-white"
                style={{
                  fontSize: "28px",
                  lineHeight: 1.15,
                  fontWeight: 300,
                  letterSpacing: "-0.03em",
                }}
              >
                {item.title}
              </h4>

              <p
                className="mt-5 text-white/45"
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