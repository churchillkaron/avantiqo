"use client";

import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const platformSections = [
  {
    title: "CONNECTED RUNTIME",
    description:
      "Hotels, restaurants, accounting, procurement, payroll, approvals and operations connected in one live system.",
    image: "/images/platform-connected-runtime.png",
  },
  {
    title: "ROLE & PERMISSION CONTROL",
    description:
      "Control visibility, approvals and access across owners, managers, accounting, HR and operations teams.",
    image: "/images/platform-role-control.png",
  },
  {
    title: "LIVE OPERATIONAL EVENTS",
    description:
      "Track approvals, alerts, operational risks, tasks and business events live across the organization.",
    image: "/images/platform-live-events.png",
  },
  {
    title: "MOBILE OPERATIONS",
    description:
      "Run approvals, reporting, communication and operational workflows directly from mobile devices.",
    image: "/images/platform-mobile.png",
  },
  {
    title: "MULTI-COMPANY STRUCTURE",
    description:
      "Manage multiple companies, projects, venues and departments from one connected runtime.",
    image: "/images/platform-multicompany.png",
  },
  {
    title: "INTEGRATIONS & ECOSYSTEM",
    description:
      "Connect Booking.com, POS, Meta, banks, payroll, suppliers, Google and operational systems.",
    image: "/images/platform-integrations.png",
  },
];

export default function PlatformPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#04050B] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative px-6 py-32">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#241237_0%,#070B16_40%,#02030A_100%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[0.9fr_1.1fr]">

          <div>

            <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
              ENTERPRISE OPERATIONAL PLATFORM
            </p>

            <h1 className="text-6xl font-extralight leading-[1.02] tracking-[-0.06em] md:text-[92px]">
              The connected
              <br />
              operating system
              <br />
              for modern business.
            </h1>

            <p className="mt-8 max-w-[820px] text-[17px] leading-[1.9] text-white/50">
              Avantiqo connects departments, workflows,
              approvals, operations, payroll, procurement,
              accounting, marketing and live business visibility
              into one enterprise operational runtime.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/demo"
                className="rounded-[22px] bg-gradient-to-r from-[#D6A66A] via-[#C084FC] to-[#7C5CFA] px-6 py-3 md:px-8 md:py-4 text-sm font-extralight transition-all duration-300 ease-out hover:-translate-y-[2px]"
              >
                Book Platform Demo
              </Link>

              <Link
                href="/industries"
                className="rounded-[22px] border border-white/[0.05] bg-white/[0.025] px-6 py-3 md:px-8 md:py-4 text-sm text-white/50 transition-all duration-300 ease-out hover:border-purple-500/30"
              >
                Explore Industries
              </Link>

            </div>

          </div>

          <div className="overflow-hidden rounded-[36px] border border-white/[0.05] bg-[#050714] shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

            <Image
              src="/images/platform-hero.png"
              alt="Platform Runtime"
              width={1600}
              height={1000}
              quality={75}
              priority
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />

          </div>

        </div>

      </section>

      {/* PLATFORM CORE */}
      <section className="px-6 py-28">

        <div className="mx-auto max-w-6xl text-center">

          <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8]">
            CONNECTED BUSINESS INFRASTRUCTURE
          </p>

          <h2 className="text-5xl font-extralight leading-[1.02] tracking-[-0.05em] md:text-7xl">
            Replace disconnected
            <br />
            software and fragmented
            <br />
            operations.
          </h2>

          <p className="mx-auto mt-10 max-w-[900px] text-lg leading-9 text-white/50">
            Most businesses operate through disconnected systems,
            manual approvals, delayed reporting and fragmented
            communication. Avantiqo connects the business into one
            live operational environment.
          </p>

        </div>

      </section>

      {/* PLATFORM GRID */}
      <section className="px-6 pb-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-6 md:gap-8 md:grid-cols-2">

            {platformSections.map((section) => (

              <div
                key={section.title}
                className="overflow-hidden rounded-[36px] border border-white/[0.05] bg-[#050714] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-purple-500/30 hover:shadow-[0_0_60px_rgba(120,80,255,0.10)]"
              >

                <Image
                  src={section.image}
                  alt={section.title}
                  width={1400}
                  height={900}
                  quality={75}
                  className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />

                <div className="p-6 md:p-10">

                  <div className="mb-5 flex items-center gap-3">

                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#D6A66A] to-purple-500" />

                    <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                      Enterprise Runtime
                    </div>

                  </div>

                  <h3 className="text-4xl font-extralight tracking-[-0.02em]">
                    {section.title}
                  </h3>

                  <p className="mt-6 text-[16px] leading-8 text-white/50">
                    {section.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* SECURITY */}
      <section className="border-t border-white/5 px-6 py-32">

        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-[0.9fr_1.1fr] items-center">

          <div>

            <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
              SECURITY & GOVERNANCE
            </p>

            <h2 className="text-5xl font-extralight leading-[1.02] tracking-[-0.05em] md:text-7xl">
              Enterprise visibility
              <br />
              with controlled access.
            </h2>

            <p className="mt-8 max-w-[680px] text-[17px] leading-[1.9] text-white/50">
              Avantiqo includes role-based permissions,
              audit visibility, approval tracking,
              operational accountability and secure
              multi-company access management.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              {[
                "Role-Based Permissions",
                "Approval Audit Trails",
                "Department Visibility",
                "Operational Logs",
                "Multi-Company Access",
                "Live Activity Tracking",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-[22px] border border-white/[0.05] bg-white/[0.025] px-5 py-4 text-sm text-white/50"
                >
                  {item}
                </div>

              ))}

            </div>

          </div>

          <div className="overflow-hidden rounded-[36px] border border-white/[0.05] bg-[#050714]">

            <Image
              src="/images/platform-security.png"
              alt="Platform Security"
              width={1400}
              height={1000}
              quality={75}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />

          </div>

        </div>

      </section>

      {/* OPERATIONAL FLOW */}
      <section className="px-6 py-32">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="mb-6 text-xs tracking-[0.35em] text-[#D6A66A]">
              CROSS-MODULE OPERATIONAL FLOW
            </p>

            <h2 className="text-5xl font-extralight leading-[1.02] tracking-[-0.05em] md:text-7xl">
              Every action
              <br />
              connected across
              <br />
              the business.
            </h2>

          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-5">

            {[
              "Operations",
              "Inventory",
              "Approvals",
              "Accounting",
              "Visibility",
            ].map((step, index) => (

              <div
                key={step}
                className="rounded-[30px] border border-white/[0.05] bg-[#050714] p-8"
              >

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-lg">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-extralight">
                  {step}
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/50">
                  Connected automatically through the runtime.
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
            ENTERPRISE OPERATIONAL PLATFORM
          </p>

          <h2 className="text-5xl font-extralight leading-[1.02] tracking-[-0.05em] md:text-7xl">
            One platform.
            <br />
            One operational runtime.
            <br />
            Total visibility.
          </h2>

          <p className="mx-auto mt-8 max-w-[820px] text-[17px] leading-[1.9] text-white/50">
            Connect departments, workflows, teams,
            approvals and operations into one intelligent
            enterprise operating system.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="/demo"
              className="rounded-[22px] bg-gradient-to-r from-[#D6A66A] via-[#C084FC] to-[#7C5CFA] px-6 py-3 md:px-8 md:py-4 text-sm font-extralight transition-all duration-300 ease-out hover:-translate-y-[2px]"
            >
              Book Enterprise Demo
            </Link>

            <Link
              href="/ai"
              className="rounded-[22px] border border-white/[0.05] bg-white/[0.025] px-6 py-3 md:px-8 md:py-4 text-sm text-white/50 transition-all duration-300 ease-out hover:border-purple-500/30"
            >
              Explore AI Runtime
            </Link>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}
