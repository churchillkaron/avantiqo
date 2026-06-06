"use client";

import Image from "next/image";
import Link from "next/link";
import SiteTopNav from "@/app/components/SiteTopNav";
import Footer from "@/components/layout/Footer";

export default function IndustriesPage() {
  const industries = [
    {
      title: "Accounting Firms",
      image: "/images/hero-accounting.png",
      description:
        "Manage clients, compliance, advisory services, reporting and financial intelligence with real-time operational visibility.",
      href: "/industries/accounting-firms",
    },
    {
      title: "Healthcare",
      image: "/images/hero-healthcare.png",
      description:
        "Connect patients, clinicians, operations, compliance and financial performance inside a unified intelligence environment.",
      href: "/industries/healthcare",
    },
    {
      title: "Hospitality",
      image: "/images/hero-hospitality.png",
      description:
        "Manage guests, reservations, staff, operations, marketing and profitability from one connected platform.",
      href: "/industries/hospitality",
    },
    {
      title: "Construction",
      image: "/images/hero-construction.png",
      description:
        "Control projects, budgets, procurement, workforce and site execution with complete visibility.",
      href: "/industries/distribution-manufacturing",
    },
    {
      title: "Retail & Commerce",
      image: "/images/hero-retail.png",
      description:
        "Connect inventory, customers, staff, marketing and financial performance in real time.",
      href: "/industries/retail-commerce",
    },
    {
      title: "Professional Services",
      image: "/images/professional-services-hero.png",
      description:
        "Manage projects, teams, billing, delivery and customer relationships with operational intelligence.",
      href: "/industries/professional-services",
    },
    {
      title: "Distribution & Manufacturing",
      image: "/images/distribution-hero.png",
      description:
        "Control production, inventory, procurement, quality and profitability from one intelligence layer.",
      href: "/industries/construction",
    },
  ];

  return (
    <main className="min-h-screen bg-[#02030A] text-white overflow-hidden">
      <SiteTopNav />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-20 text-center">
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#D6A66A]">
              INDUSTRIES
            </p>

            <h1 className="text-6xl font-extralight tracking-[-0.05em] md:text-8xl">
              Explore By Industry
            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-xl leading-10 text-white/60">
              Avantiqo adapts to each industry while maintaining a single
              intelligence layer across operations, customers, finance,
              compliance and leadership.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            {industries.map((industry) => (
              <Link key={industry.title} href={industry.href}>
                <div className="group overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.025] shadow-[0_25px_100px_rgba(0,0,0,0.35)] transition duration-500 hover:border-[#D6A66A]/40 hover:shadow-[0_25px_120px_rgba(214,166,106,0.18)]">

                  <div className="relative h-[320px] overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#02030A] via-[#02030A]/30 to-transparent" />
                  </div>

                  <div className="p-8">

                    <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#D6A66A]">
                      Industry
                    </p>

                    <h2 className="mb-5 text-3xl font-light">
                      {industry.title}
                    </h2>

                    <p className="leading-8 text-white/65">
                      {industry.description}
                    </p>

                  </div>

                </div>
              </Link>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
