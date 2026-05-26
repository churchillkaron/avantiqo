"use client";

import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const industries = [
  {
    title: "Accounting Firms",
    description:
      "Live financial visibility, document automation, audit trails and multi-company operational control.",
    href: "/industries/accounting-firms",
    image: "/images/industry-accounting.png",
  },
  {
    title: "Hotels & Hospitality",
    description:
      "Reservations, housekeeping, procurement, payroll and hospitality operations connected live.",
    href: "/industries/hotels",
    image: "/images/industry-hotels.png",
  },
  {
    title: "Restaurants & Nightlife",
    description:
      "POS, kitchen, inventory, staff, service charge and venue operations connected in real time.",
    href: "/industries/restaurants",
    image: "/images/industry-restaurants.png",
  },
  {
    title: "Construction",
    description:
      "Site reporting, procurement, workforce, budgets and project approvals connected live.",
    href: "/industries/construction",
    image: "/images/industry-construction.png",
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#04050B] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative px-6 py-32">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#241237_0%,#070B16_40%,#02030A_100%)]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-5xl">

            <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
              INDUSTRY OPERATING RUNTIMES
            </p>

            <h1 className="text-6xl font-light leading-[0.92] tracking-[-0.07em] md:text-[92px]">
              One operational runtime.
              <br />
              Multiple industries.
              <br />
              Complete visibility.
            </h1>

            <p className="mt-8 max-w-[760px] text-lg leading-8 text-white/60">
              Avantiqo connects operations, approvals, finance,
              documents, payroll, procurement, marketing and live
              business visibility into one connected enterprise runtime.
            </p>

          </div>

        </div>

      </section>

      {/* INDUSTRY GRID */}
      <section className="px-6 pb-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

            {industries.map((industry) => (

              <Link
                key={industry.title}
                href={industry.href}
                className="group overflow-hidden rounded-[36px] border border-white/10 bg-[#070B16] transition-all duration-500 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_60px_rgba(120,80,255,0.12)]"
              >

                <div className="relative overflow-hidden">

                  <Image
                    src={industry.image}
                    alt={industry.title}
                    width={1400}
                    height={900}
                    quality={100}
                    className="h-[420px] w-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#04050B] via-transparent to-transparent" />

                </div>

                <div className="p-10">

                  <div className="mb-5 flex items-center gap-3">

                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#D6A66A] to-purple-500" />

                    <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                      Operational Runtime
                    </div>

                  </div>

                  <h2 className="text-4xl font-light tracking-[-0.03em]">
                    {industry.title}
                  </h2>

                  <p className="mt-6 max-w-[580px] text-[16px] leading-8 text-white/60">
                    {industry.description}
                  </p>

                  <div className="mt-8 flex items-center gap-3 text-sm text-[#D6A66A]">

                    Explore Industry Runtime

                    <span className="transition-transform duration-500 group-hover:translate-x-2">
                      →
                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="border-t border-white/5 px-6 py-32">

        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
            ENTERPRISE OPERATIONS
          </p>

          <h2 className="text-5xl font-light leading-[1.02] tracking-[-0.05em] md:text-7xl">
            Everything connected.
            <br />
            Everything visible.
            <br />
            One runtime.
          </h2>

          <p className="mx-auto mt-8 max-w-[760px] text-lg leading-8 text-white/60">
            Replace fragmented software, disconnected teams and delayed reporting
            with one connected operational system built for modern businesses.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="/demo"
              className="rounded-[20px] bg-gradient-to-r from-[#D6A66A] to-[#8B5CF6] px-8 py-4 text-sm font-medium transition-all duration-500 hover:-translate-y-1"
            >
              Book Enterprise Demo
            </Link>

            <Link
              href="/platform"
              className="rounded-[20px] border border-white/10 bg-white/[0.04] px-8 py-4 text-sm text-white/70 transition-all duration-500 hover:border-purple-500/30"
            >
              Explore Platform
            </Link>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}
