"use client";

import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const hotelFeatures = [
  {
    title: "LIVE HOTEL CONTROL",
    description:
      "Monitor occupancy, labor cost, procurement, departments and hotel operations in real time.",
    image: "/images/hotel-live-control.png",
  },
  {
    title: "BOOKING CHANNEL CONNECTION",
    description:
      "Connect Booking.com, Agoda, Airbnb, Expedia and direct bookings into one operational runtime.",
    image: "/images/hotel-booking-runtime.png",
  },
  {
    title: "HOUSEKEEPING & OPERATIONS",
    description:
      "Track room status, cleaning tasks, maintenance and operational workflows live.",
    image: "/images/hotel-housekeeping.png",
  },
  {
    title: "STAFF PORTAL",
    description:
      "Announcements, schedules, approvals, payroll visibility and department communication.",
    image: "/images/hotel-staff-portal.png",
  },
  {
    title: "PROCUREMENT & APPROVALS",
    description:
      "Monitor purchasing, suppliers, inventory and operational approvals across departments.",
    image: "/images/hotel-procurement.png",
  },
  {
    title: "OWNER VISIBILITY",
    description:
      "Hotel owners gain live operational visibility from anywhere in the world.",
    image: "/images/hotel-owner-dashboard.png",
  },
];

const hotelBenefits = [
  {
    title: "Connected Hospitality Operations",
    description:
      "Reservations, operations, procurement, payroll, accounting and guest services connected into one live system.",
  },
  {
    title: "Reduce Operational Chaos",
    description:
      "Replace disconnected hotel systems, paperwork and messaging chaos with live operational visibility.",
  },
  {
    title: "Live Financial Visibility",
    description:
      "Monitor occupancy revenue, labor cost, purchasing and operational profitability in real time.",
  },
  {
    title: "Operational Accountability",
    description:
      "Track approvals, maintenance, housekeeping and procurement with full operational accountability.",
  },
  {
    title: "Multi-Property Control",
    description:
      "Hotel groups manage multiple properties and departments from one connected runtime.",
  },
  {
    title: "Better Guest Experience",
    description:
      "Operational coordination improves guest response time, room readiness and service quality.",
  },
];

export default function HotelsIndustryPage() {

  return (

    <main className="min-h-screen overflow-hidden bg-[#04050B] text-white">

      <Navbar />

      {/* HERO */}
      <section className="relative px-6 py-32">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#241237_0%,#070B16_40%,#02030A_100%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">

          <div>

            <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
              HOSPITALITY OPERATIONS
            </p>

            <h1 className="text-6xl font-extralight leading-[1.02] tracking-[-0.06em] md:text-[92px]">

              Run hospitality
              <br />
              from one live
              <br />
              control center.

            </h1>

            <p className="mt-8 max-w-[620px] text-[17px] leading-[1.9] text-white/50">

              Reservations, operations, accounting,
              housekeeping, procurement, payroll,
              approvals and guest services —
              connected in one hospitality runtime.

            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/demo"
                className="rounded-[22px] bg-gradient-to-r from-[#D6A66A] via-[#C084FC] to-[#7C5CFA] px-6 py-3 md:px-8 md:py-4 text-sm font-extralight transition-all duration-300 ease-out hover:-translate-y-[2px]"
              >
                Book Hospitality Demo
              </Link>

              <Link
                href="/contact"
                className="rounded-[22px] border border-white/[0.05] bg-white/[0.025] px-6 py-3 md:px-8 md:py-4 text-sm text-white/50 transition-all duration-300 ease-out hover:border-purple-500/30"
              >
                Talk To Enterprise Team
              </Link>

            </div>

          </div>

          <div className="relative overflow-hidden rounded-[36px] border border-white/[0.05] bg-[#050714] shadow-[0_0_50px_rgba(120,80,255,0.08)]">

            <Image
              src="/images/hotel-hero.png"
              alt="Hotel Runtime"
              width={1600}
              height={1000}
              quality={75}
              priority
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
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

            <h2 className="max-w-5xl text-5xl font-extralight leading-[1.02] tracking-[-0.05em] md:text-7xl">
              Replace disconnected hospitality operations with live visibility.
            </h2>

          </div>

          <div className="grid gap-6 md:gap-8 lg:grid-cols-2">

            <div className="overflow-hidden rounded-[32px] border border-red-500/10 bg-[#0A0A12]">

              <Image
                src="/images/hotel-before-chaos.png"
                alt="Before"
                width={1200}
                height={800}
                quality={75}
                className="h-[520px] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />

              <div className="p-6 md:p-10">

                <p className="mb-5 text-sm tracking-[0.3em] text-red-400">
                  BEFORE
                </p>

                <h3 className="text-4xl font-extralight">
                  Operational chaos
                </h3>

                <ul className="mt-8 space-y-4 text-white/50">

                  <li>• Disconnected booking systems</li>
                  <li>• Paper approvals and manual reporting</li>
                  <li>• No live operational visibility</li>
                  <li>• Staff communication problems</li>
                  <li>• Procurement and inventory confusion</li>
                  <li>• Delayed owner reporting</li>

                </ul>

              </div>

            </div>

            <div className="overflow-hidden rounded-[32px] border border-emerald-500/10 bg-[#0A0A12]">

              <Image
                src="/images/hotel-after-control.png"
                alt="After"
                width={1200}
                height={800}
                quality={75}
                className="h-[520px] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />

              <div className="p-6 md:p-10">

                <p className="mb-5 text-sm tracking-[0.3em] text-emerald-400">
                  AFTER
                </p>

                <h3 className="text-4xl font-extralight">
                  Live hospitality control
                </h3>

                <ul className="mt-8 space-y-4 text-white/50">

                  <li>• Connected booking channels</li>
                  <li>• Live occupancy and financial visibility</li>
                  <li>• Department accountability</li>
                  <li>• Real-time approvals and operations</li>
                  <li>• Multi-property management</li>
                  <li>• Better guest experience and coordination</li>

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
              HOSPITALITY RUNTIME
            </p>

            <h2 className="max-w-5xl text-5xl font-extralight leading-[1.02] tracking-[-0.05em] md:text-7xl">
              Everything connected.
              <br />
              Everything visible.
            </h2>

          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2">

            {hotelFeatures.map((item) => (

              <div
                key={item.title}
                className="overflow-hidden rounded-[32px] border border-white/[0.05] bg-[#050714] shadow-[0_0_40px_rgba(120,80,255,0.05)]"
              >

                <Image
                  src={item.image}
                  alt={item.title}
                  width={1200}
                  height={800}
                  quality={75}
                  className="h-[380px] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />

                <div className="p-8">

                  <h3 className="text-3xl font-extralight">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/50">
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* BENEFITS */}
      <section className="px-6 py-32 border-t border-white/5">

        <div className="mx-auto max-w-7xl">

          <div className="mb-20">

            <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8]">
              WHY HOTEL GROUPS CHOOSE AVANTIQO
            </p>

            <h2 className="max-w-5xl text-5xl font-extralight leading-[1.02] tracking-[-0.05em] md:text-7xl">
              Hospitality should operate live —
              not through disconnected systems.
            </h2>

          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {hotelBenefits.map((item) => (

              <div
                key={item.title}
                className="rounded-[32px] border border-white/[0.05] bg-[#050714]/90 p-6 md:p-10 transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-purple-500/30"
              >

                <div className="mb-6 flex items-center gap-3">

                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#D6A66A] to-purple-500" />

                  <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                    Hospitality Runtime
                  </div>

                </div>

                <h3 className="mb-5 text-3xl font-extralight leading-tight text-white">
                  {item.title}
                </h3>

                <p className="text-[16px] leading-8 text-white/50">
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
            LIVE HOSPITALITY CONTROL
          </p>

          <h2 className="text-5xl font-extralight leading-[1.02] tracking-[-0.05em] md:text-7xl">

            One runtime.
            <br />
            Every department.
            <br />
            Real-time hospitality visibility.

          </h2>

          <p className="mx-auto mt-8 max-w-[820px] text-[17px] leading-[1.9] text-white/50">

            Replace fragmented hotel operations with one connected operational runtime.

          </p>

          <div className="mt-12">

            <Link
              href="/demo"
              className="rounded-[22px] bg-gradient-to-r from-[#D6A66A] via-[#C084FC] to-[#7C5CFA] px-6 py-3 md:px-8 md:py-4 text-sm font-extralight transition-all duration-300 ease-out hover:-translate-y-[2px]"
            >
              Book Hospitality Demo
            </Link>

          </div>

        </div>

      </section>

      <Footer />

    </main>

  );

}
