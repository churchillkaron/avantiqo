"use client";

import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const restaurantFeatures = [
  {
    title: "LIVE VENUE CONTROL",
    description:
      "Monitor revenue, tables, labor cost, approvals, stock, service charge and venue performance in real time.",
    image: "/images/restaurant-live-control.png",
  },
  {
    title: "POS & KITCHEN OPERATIONS",
    description:
      "Connect orders, kitchen workflow, bar preparation, table status and service operations live.",
    image: "/images/restaurant-pos-kitchen.png",
  },
  {
    title: "INVENTORY & BAR CONTROL",
    description:
      "Track bottles, ingredients, supplier orders, waste, stock movement and purchasing approvals.",
    image: "/images/restaurant-inventory-bar.png",
  },
  {
    title: "STAFF & PAYROLL",
    description:
      "Manage shifts, attendance, service charge, payroll visibility, approvals and staff accountability.",
    image: "/images/restaurant-staff-payroll.png",
  },
  {
    title: "MULTI-VENUE CONTROL",
    description:
      "Control multiple restaurants, bars, clubs and outlets from one connected operational runtime.",
    image: "/images/restaurant-multi-venue.png",
  },
  {
    title: "MARKETING & DESIGN ENGINE",
    description:
      "Create campaigns, design promotions, publish content and connect every venue to social media from one live marketing runtime.",
    image: "/images/restaurant-marketing-engine.png",
  },
];

const restaurantBenefits = [
  {
    title: "Control Revenue Live",
    description:
      "See sales, table performance, payment activity, service charge and daily revenue in real time.",
  },
  {
    title: "Reduce Stock Leakage",
    description:
      "Track inventory, bottles, ingredients, waste and purchasing to reduce loss and operational leakage.",
  },
  {
    title: "Improve Staff Accountability",
    description:
      "Connect shifts, attendance, payroll, service charge and performance into one operational workflow.",
  },
  {
    title: "Connect Front & Back Of House",
    description:
      "POS, kitchen, bar, service team, management and finance work from one connected runtime.",
  },
  {
    title: "Speed Up Approvals",
    description:
      "Purchase requests, stock orders, expenses, payroll and operational approvals are tracked clearly.",
  },
  {
    title: "Multi-Outlet Visibility",
    description:
      "Restaurant groups and nightlife operators monitor every outlet from one live control center.",
  },
];

export default function RestaurantsIndustryPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#04050B] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative px-6 py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#241237_0%,#070B16_40%,#02030A_100%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
              RESTAURANT / BAR / NIGHTLIFE OPERATIONS
            </p>

            <h1 className="text-6xl font-light leading-[0.92] tracking-[-0.07em] md:text-[92px]">
              Control the venue
              <br />
              while service
              <br />
              is happening.
            </h1>

            <p className="mt-8 max-w-[640px] text-lg leading-8 text-white/60">
              POS, kitchen, bar, inventory, payroll, service charge,
              procurement, approvals, staff and finance connected in one
              live hospitality runtime.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/demo"
                className="rounded-[20px] bg-gradient-to-r from-[#D6A66A] to-[#8B5CF6] px-8 py-4 text-sm font-medium transition-all duration-500 hover:-translate-y-1"
              >
                Book Venue Demo
              </Link>

              <Link
                href="/contact"
                className="rounded-[20px] border border-white/10 bg-white/[0.04] px-8 py-4 text-sm text-white/70 transition-all duration-500 hover:border-purple-500/30"
              >
                Talk To Enterprise Team
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#070B16] shadow-[0_0_50px_rgba(120,80,255,0.08)]">
            <Image
              src="/images/restaurant-hero.png"
              alt="Restaurant Runtime"
              width={1600}
              height={1000}
              quality={100}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* BEFORE AFTER */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8]">
              BEFORE VS AFTER
            </p>

            <h2 className="max-w-5xl text-5xl font-light leading-[1.02] tracking-[-0.05em] md:text-7xl">
              Replace restaurant chaos with live operational control.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[32px] border border-red-500/10 bg-[#0A0A12]">
              <Image
                src="/images/restaurant-before-chaos.png"
                alt="Before"
                width={1200}
                height={800}
                quality={100}
                className="h-[520px] w-full object-cover"
              />

              <div className="p-10">
                <p className="mb-5 text-sm tracking-[0.3em] text-red-400">
                  BEFORE
                </p>

                <h3 className="text-4xl font-light">
                  Service-time chaos
                </h3>

                <ul className="mt-8 space-y-4 text-white/60">
                  <li>• Disconnected POS, kitchen and bar operations</li>
                  <li>• Stock movement and bottle leakage unclear</li>
                  <li>• Staff cost and payroll visibility delayed</li>
                  <li>• Purchase approvals handled manually</li>
                  <li>• Owners waiting for daily reports</li>
                  <li>• No live view of venue performance</li>
                </ul>
              </div>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-emerald-500/10 bg-[#0A0A12]">
              <Image
                src="/images/restaurant-after-control.png"
                alt="After"
                width={1200}
                height={800}
                quality={100}
                className="h-[520px] w-full object-cover"
              />

              <div className="p-10">
                <p className="mb-5 text-sm tracking-[0.3em] text-emerald-400">
                  AFTER
                </p>

                <h3 className="text-4xl font-light">
                  Live venue control
                </h3>

                <ul className="mt-8 space-y-4 text-white/60">
                  <li>• POS, kitchen, bar and finance connected</li>
                  <li>• Live revenue, labor cost and service charge</li>
                  <li>• Inventory and purchasing tracked clearly</li>
                  <li>• Staff attendance and payroll visibility</li>
                  <li>• Approval workflows recorded live</li>
                  <li>• Owners see performance from anywhere</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
              HOSPITALITY VENUE RUNTIME
            </p>

            <h2 className="max-w-5xl text-5xl font-light leading-[1.02] tracking-[-0.05em] md:text-7xl">
              Front of house, back of house
              <br />
              and finance connected live.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {restaurantFeatures.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[32px] border border-white/10 bg-[#070B16] shadow-[0_0_40px_rgba(120,80,255,0.05)]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1200}
                  height={800}
                  quality={100}
                  className="h-[380px] w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-3xl font-light">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/60">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-t border-white/5 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20">
            <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8]">
              WHY RESTAURANTS, BARS & NIGHTLIFE CHOOSE AVANTIQO
            </p>

            <h2 className="max-w-5xl text-5xl font-light leading-[1.02] tracking-[-0.05em] md:text-7xl">
              Venue problems become expensive when control arrives too late.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {restaurantBenefits.map((item) => (
              <div
                key={item.title}
                className="rounded-[32px] border border-white/10 bg-[#070B16]/90 p-10 transition-all duration-500 hover:-translate-y-1 hover:border-purple-500/30"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#D6A66A] to-purple-500" />

                  <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                    Venue Runtime
                  </div>
                </div>

                <h3 className="mb-5 text-3xl font-light leading-tight text-white">
                  {item.title}
                </h3>

                <p className="text-[16px] leading-8 text-white/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
            LIVE VENUE CONTROL
          </p>

          <h2 className="text-5xl font-light leading-[1.02] tracking-[-0.05em] md:text-7xl">
            One runtime.
            <br />
            Every table, order,
            <br />
            staff member and cost.
          </h2>

          <p className="mx-auto mt-8 max-w-[760px] text-lg leading-8 text-white/60">
            Replace disconnected venue operations with one connected restaurant, bar and nightlife operating system.
          </p>

          <div className="mt-12">
            <Link
              href="/demo"
              className="rounded-[20px] bg-gradient-to-r from-[#D6A66A] to-[#8B5CF6] px-8 py-4 text-sm font-medium transition-all duration-500 hover:-translate-y-1"
            >
              Book Venue Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
