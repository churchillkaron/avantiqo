"use client";
import Image from "next/image"
export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32 md:py-48"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/showcase/final-cta-bg.png"
          alt="Avantiqo enterprise future"
          loading="lazy"
          className="h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-[#020617]/90" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-[#020617]/30" />
      </div>

      {/* GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[140px] md:h-[1200px] md:w-[1200px] md:blur-[220px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8] md:mb-8">
            THE FUTURE OF BUSINESS OPERATIONS
          </p>

          <h2
            className="text-5xl text-white sm:text-6xl md:text-[92px]"
            style={{
              lineHeight: 0.95,
              fontWeight: 300,
              letterSpacing: "-0.06em",
            }}
          >
            Operate the future
            <br />

            <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
              of your business.
            </span>
          </h2>

          <p
            className="mx-auto mt-8 max-w-4xl text-white/55 md:mt-12"
            style={{
              fontSize: "20px",
              lineHeight: 1.9,
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Avantiqo combines operations, AI automation,
            workforce intelligence, finance, customer engagement,
            enterprise infrastructure and multi-location control
            into one unified operating system designed for
            modern scalable organizations.
          </p>

          {/* BUTTONS */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:mt-16 sm:flex-row sm:gap-6">
            <button className="w-full rounded-full bg-gradient-to-r from-[#D6A66A] to-[#8B5CF6] px-8 py-4 text-base font-medium text-white shadow-[0_20px_80px_rgba(139,92,246,0.35)] transition-all duration-300 hover:scale-[1.03] sm:w-auto sm:px-10 sm:py-5 sm:text-lg">
              Book Enterprise Demo
            </button>

            <button className="w-full rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-base font-medium text-white backdrop-blur-3xl transition-all duration-300 hover:bg-white/[0.06] sm:w-auto sm:px-10 sm:py-5 sm:text-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}