"use client";

import Link from "next/link";
import SiteTopNav from "@/app/components/SiteTopNav";
import Footer from "@/components/layout/Footer";
import { useTranslation } from "@/app/providers/I18nProvider";

export default function HospitalityPage() {
  const { translations } = useTranslation();
  const h = translations.home?.hospitality || {};
  const flow = h.flow || [];

  const challenges = [
    {
      title: "Guest experience is fragmented",
      text: "Guest history, preferences, reviews, loyalty, table activity and marketing data are usually spread across different systems. Avantiqo brings the full guest picture into one operating layer."
    },
    {
      title: "Staff performance is invisible",
      text: "Managers often know who is working, but not who is performing, who is late, who creates value and where service quality is dropping. Avantiqo connects staff activity to accountability."
    },
    {
      title: "POS is disconnected from control",
      text: "Traditional POS systems record sales. Avantiqo connects sales to kitchen flow, stock, customer profiles, staff performance, revenue control and management decisions."
    },
    {
      title: "Kitchen and production lose margin",
      text: "Without connected production, recipe costing, waste tracking and stock visibility, hospitality businesses lose money quietly every day."
    },
    {
      title: "Marketing happens too late",
      text: "Most venues post randomly. Avantiqo can turn slow days, guest behavior, events, campaigns and business goals into automatic ads and social posts."
    },
    {
      title: "Owners lack one source of truth",
      text: "Restaurants, hotels, beach clubs, spas and multi-location groups need one operating system that shows what is happening now and what should happen next."
    }
  ];

  const whyCards = [
    {
      title: "Customer Portal",
      text: "Give guests access to loyalty, rewards, bookings, preferences, history and personalized offers. Every interaction becomes part of the customer intelligence layer."
    },
    {
      title: "Staff Portal",
      text: "Staff can manage attendance, tasks, confirmations, salary visibility and performance. Managers can see accountability and approve exceptions before they affect payroll."
    },
    {
      title: "POS Control",
      text: "Sales are not isolated. Every order can connect to customer data, kitchen operations, staff performance, stock usage, financial reporting and management dashboards."
    },
    {
      title: "Kitchen Flow",
      text: "Orders move from POS to kitchen with clear status, preparation flow, completion tracking and operational visibility for service teams and managers."
    },
    {
      title: "Stock & Production",
      text: "Connect recipes, inventory, cost control, production usage and waste so food and beverage margins are visible before month-end."
    },
    {
      title: "AI Marketing Engine",
      text: "Generate ads, captions, campaign ideas, event promotions and social media posts automatically from business context, slow days, guest behavior and revenue targets."
    }
  ];

  const operatingSystem = [
    {
      title: "Guest Intelligence",
      text: "Profiles, loyalty, visit history, favorite items, reviews, VIP status, marketing consent and customer value in one view."
    },
    {
      title: "Reservations & Tables",
      text: "Bookings, tables, guest flow, service timing and operational planning connected with the rest of the business."
    },
    {
      title: "POS & Orders",
      text: "Fast sales flow connected to kitchen, customer history, staff accountability, revenue reporting and daily control."
    },
    {
      title: "Kitchen & Production",
      text: "Live order status, preparation control, recipe costing, stock impact, waste visibility and production accountability."
    },
    {
      title: "Staff & Payroll",
      text: "Attendance, lateness, approvals, task completion, salary confirmation, performance and payroll-ready control."
    },
    {
      title: "Inventory & Cost",
      text: "Stock usage, purchasing, transfers, product costing, food cost, waste and profitability connected to operations."
    },
    {
      title: "Reviews & Reputation",
      text: "Google reviews, guest feedback, service issues and response opportunities connected to customer and staff intelligence."
    },
    {
      title: "Marketing & Design Studio",
      text: "Create campaigns, posters, ads, social posts, promotions and branded content directly from the operating system."
    },
    {
      title: "Synthetic Intelligence",
      text: "Predict slow days, staffing pressure, stock issues, customer churn, marketing opportunities and operational risk."
    }
  ];

  const syntheticActions = [
    {
      title: "Predict slow days",
      text: "When revenue patterns show a coming quiet period, Avantiqo can recommend offers, campaigns, events and staffing adjustments."
    },
    {
      title: "Recommend promotions",
      text: "The system can suggest what to promote based on guest behavior, stock levels, margin, weather, seasonality and historical sales."
    },
    {
      title: "Generate ads and posts",
      text: "Turn business goals into ready-to-use social captions, campaign concepts, visuals, event promotions and offer messaging."
    },
    {
      title: "Detect service risk",
      text: "If reviews, delays, staff behavior or operational exceptions indicate a problem, management can act before it damages reputation."
    },
    {
      title: "Optimize staffing",
      text: "Use revenue, bookings, order volume and guest flow to understand staffing pressure before service quality drops."
    },
    {
      title: "Protect margin",
      text: "Connect POS, kitchen, recipes, stock and waste so owners can see where profit is leaking."
    }
  ];

  const propertyTypes = [
    "Restaurants",
    "Hotels",
    "Beach Clubs",
    "Bars",
    "Cafes",
    "Resorts",
    "Spas",
    "Event Venues",
    "Multi-Location Groups",
    "Hospitality Brands"
  ];

  return (
    <>
      <SiteTopNav />

      <main className="min-h-screen overflow-hidden bg-[#03050B] text-white">
        <section className="relative min-h-[94vh] overflow-hidden border-b border-white/10">
          <div className="absolute inset-0">
            <img
              src="/images/hospitality-hero.png"
              alt="Luxury hospitality operating system"
              className="h-full w-full object-cover opacity-100 brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#03050B]/80 via-[#03050B]/42 to-[#03050B]/8" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#03050B] via-[#03050B]/20 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[94vh] max-w-7xl flex-col justify-center px-6 pt-24">
            <div className="max-w-5xl rounded-[42px] border border-white/10 bg-white/[0.045] p-8 shadow-[0_30px_120px_rgba(0,0,0,0.5)] backdrop-blur-3xl md:p-12">
              <div className="mb-8 w-fit rounded-full border border-[#D6A66A]/30 bg-[#D6A66A]/10 px-6 py-2 text-xs font-medium uppercase tracking-[0.45em] text-[#D6A66A]">
                {h.hero?.badge || "Hospitality Operating System"}
              </div>

              <h1 className="max-w-5xl text-[58px] font-light leading-[0.94] tracking-[-0.065em] text-white md:text-[92px]">
                {h.hero?.title1 || "Hospitality"}
                <br />
                <span className="bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#24495C] bg-clip-text text-transparent">
                  {h.hero?.title2 || "Without Blind Spots"}
                </span>
              </h1>

              <p className="mt-9 max-w-3xl text-xl leading-9 text-white/78">
                {h.hero?.description || "Avantiqo connects customer portals, staff portals, POS, kitchen operations, inventory, reviews, accounting, marketing, design and synthetic intelligence into one operating system for hospitality businesses."}
              </p>

              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  href="/demo"
                  className="rounded-2xl bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#C9974D] px-9 py-5 text-sm font-semibold text-black shadow-[0_0_45px_rgba(214,166,106,0.42)] transition hover:brightness-110"
                >
                  {h.hero?.primary || "Book Demo"}
                </Link>

                <Link
                  href="/workspace"
                  className="rounded-2xl border border-white/15 bg-white/[0.06] px-9 py-5 text-sm font-semibold text-white/80 transition hover:border-[#D6A66A]/40 hover:bg-white/[0.1]"
                >
                  {h.hero?.secondary || "Explore Platform"}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-28">
          <div className="mb-16 max-w-5xl">
            <p className="mb-6 text-sm uppercase tracking-[0.45em] text-[#D6A66A]">
              Hospitality Reality
            </p>
            <h2 className="text-5xl font-light leading-tight tracking-[-0.055em] md:text-7xl">
              Hospitality is no longer only service.
              <br />
              <span className="text-white/45">It is data, timing, control and experience.</span>
            </h2>
            <p className="mt-8 max-w-4xl text-xl leading-9 text-white/60">
              Modern hospitality businesses must control every detail: customer relationships, staff performance, POS flow, kitchen execution, stock usage, reviews, campaigns and owner reporting. Avantiqo connects these moving parts into one intelligent operating system.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((card) => (
              <div
                key={card.title}
                className="rounded-[34px] border border-white/10 bg-white/[0.045] p-7 shadow-[0_25px_100px_rgba(0,0,0,0.38)] backdrop-blur-2xl transition hover:border-[#D6A66A]/30 hover:bg-white/[0.065]"
              >
                <div className="mb-6 h-1 w-14 rounded-full bg-gradient-to-r from-[#D6A66A] to-[#14364D]" />
                <h3 className="text-2xl font-light tracking-[-0.04em]">{card.title}</h3>
                <p className="mt-5 leading-8 text-white/58">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02] px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 max-w-5xl">
              <p className="mb-6 text-sm uppercase tracking-[0.45em] text-[#D6A66A]">
                Why Hospitality Businesses Choose Avantiqo
              </p>
              <h2 className="text-5xl font-light leading-tight tracking-[-0.055em] md:text-7xl">
                From guest experience to profit control.
              </h2>
              <p className="mt-8 max-w-4xl text-xl leading-9 text-white/60">
                Avantiqo is not just another POS, booking tool or marketing app. It is the layer that connects the front of house, back of house, management, ownership and marketing into one source of truth.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {whyCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[34px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-7 shadow-[0_25px_100px_rgba(0,0,0,0.38)] backdrop-blur-2xl transition hover:border-[#D6A66A]/30"
                >
                  <h3 className="text-2xl font-light tracking-[-0.04em]">{card.title}</h3>
                  <p className="mt-5 leading-8 text-white/60">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-28">
          <div className="mb-16 max-w-5xl">
            <p className="mb-6 text-sm uppercase tracking-[0.45em] text-[#D6A66A]">
              Hospitality Operating System
            </p>
            <h2 className="text-5xl font-light leading-tight tracking-[-0.055em] md:text-7xl">
              One platform for guests, staff, operations and growth.
            </h2>
            <p className="mt-8 max-w-4xl text-xl leading-9 text-white/60">
              Avantiqo gives hospitality teams a connected operating flow from customer touchpoint to staff execution, POS order, kitchen production, inventory control, financial reporting and marketing automation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {operatingSystem.map((card) => (
              <div
                key={card.title}
                className="rounded-[34px] border border-white/10 bg-white/[0.045] p-8 shadow-[0_25px_100px_rgba(0,0,0,0.38)] backdrop-blur-2xl"
              >
                <h3 className="text-3xl font-light tracking-[-0.05em]">{card.title}</h3>
                <p className="mt-5 leading-8 text-white/60">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02] px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 max-w-5xl">
              <p className="mb-6 text-sm uppercase tracking-[0.45em] text-[#D6A66A]">
                Operating Flow
              </p>
              <h2 className="text-5xl font-light leading-tight tracking-[-0.055em] md:text-7xl">
                From guest action to business decision.
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[40px] border border-white/10 bg-white/[0.045] p-8 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-3xl">
                <p className="text-xl leading-9 text-white/65">
                  {h.runtimeContent || "Every order, booking, review, staff action, stock movement and campaign result becomes part of the operating system. Management can see what happened, why it happened and what action should happen next."}
                </p>
              </div>

              <div className="rounded-[40px] border border-[#D6A66A]/20 bg-[#D6A66A]/[0.04] p-8 backdrop-blur-3xl">
                <div className="space-y-4">
                  {(flow.length ? flow : [
                    "Customer books, visits or orders",
                    "POS captures revenue and item data",
                    "Kitchen receives and completes production",
                    "Inventory and cost impact is recorded",
                    "Staff performance is connected",
                    "Synthetic intelligence recommends action",
                    "Marketing engine creates next campaign"
                  ]).map((item, index, arr) => (
                    <div key={item}>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.055] px-6 py-4 text-white/82">
                        {item}
                      </div>
                      {index !== arr.length - 1 && (
                        <div className="py-2 text-center text-[#D6A66A]">↓</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-28">
          <div className="mb-16 max-w-5xl">
            <p className="mb-6 text-sm uppercase tracking-[0.45em] text-[#D6A66A]">
              Customer and Staff Portals
            </p>
            <h2 className="text-5xl font-light leading-tight tracking-[-0.055em] md:text-7xl">
              Hospitality becomes personal and accountable.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[40px] border border-white/10 bg-white/[0.045] p-8 shadow-[0_30px_120px_rgba(0,0,0,0.4)] backdrop-blur-3xl">
              <p className="text-xs uppercase tracking-[0.35em] text-[#D6A66A]">Customer Portal</p>
              <h3 className="mt-5 text-4xl font-light tracking-[-0.05em]">Know every guest.</h3>
              <p className="mt-6 text-lg leading-9 text-white/60">
                Guests can be connected through loyalty, visit history, favorites, VIP status, birthday offers, marketing consent, reviews and personalized campaigns. The result is better retention, better upselling and stronger guest relationships.
              </p>
            </div>

            <div className="rounded-[40px] border border-white/10 bg-white/[0.045] p-8 shadow-[0_30px_120px_rgba(0,0,0,0.4)] backdrop-blur-3xl">
              <p className="text-xs uppercase tracking-[0.35em] text-[#D6A66A]">Staff Portal</p>
              <h3 className="mt-5 text-4xl font-light tracking-[-0.05em]">Make performance visible.</h3>
              <p className="mt-6 text-lg leading-9 text-white/60">
                Staff can confirm shifts, tasks and salary information while managers review lateness, approvals, responsibilities and performance. This creates accountability without relying on manual control.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-28">
          <div className="mx-auto max-w-7xl rounded-[46px] border border-purple-400/20 bg-gradient-to-br from-[#0B1020] via-[#070A12] to-[#120A18] p-8 shadow-[0_35px_140px_rgba(0,0,0,0.5)] backdrop-blur-3xl md:p-12">
            <div className="mb-14 max-w-5xl">
              <p className="mb-6 text-sm uppercase tracking-[0.45em] text-[#D6A66A]">
                Synthetic Intelligence
              </p>
              <h2 className="text-5xl font-light leading-tight tracking-[-0.055em] md:text-7xl">
                The system does not only report.
                <br />
                <span className="text-[#D6A66A]">It recommends what to do next.</span>
              </h2>
              <p className="mt-8 max-w-4xl text-xl leading-9 text-white/60">
                Avantiqo synthetic intelligence understands guests, sales, staff, stock, reviews, kitchen activity and marketing performance. It helps hospitality businesses predict, recommend, generate and execute.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {syntheticActions.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[30px] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-2xl"
                >
                  <h3 className="text-2xl font-light tracking-[-0.04em]">{card.title}</h3>
                  <p className="mt-5 leading-8 text-white/60">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-28">
          <div className="mb-16 max-w-5xl">
            <p className="mb-6 text-sm uppercase tracking-[0.45em] text-[#D6A66A]">
              Marketing and Design Studio
            </p>
            <h2 className="text-5xl font-light leading-tight tracking-[-0.055em] md:text-7xl">
              From operational data to automatic ads and posts.
            </h2>
            <p className="mt-8 max-w-4xl text-xl leading-9 text-white/60">
              A slow Tuesday, a new menu item, a pool party, a happy hour, a room package, a spa offer or a special event should not wait for manual marketing. Avantiqo can use business context to generate campaign ideas, captions, offers, visuals and publishing-ready content.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[34px] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-2xl">
              <h3 className="text-3xl font-light tracking-[-0.05em]">Campaign Generation</h3>
              <p className="mt-5 leading-8 text-white/60">
                Generate promotions, event campaigns, captions, ads and content ideas from revenue goals and guest behavior.
              </p>
            </div>
            <div className="rounded-[34px] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-2xl">
              <h3 className="text-3xl font-light tracking-[-0.05em]">Design Studio</h3>
              <p className="mt-5 leading-8 text-white/60">
                Create branded campaign visuals, menu promotions, social assets, posters and content for hospitality marketing.
              </p>
            </div>
            <div className="rounded-[34px] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-2xl">
              <h3 className="text-3xl font-light tracking-[-0.05em]">Publishing Queue</h3>
              <p className="mt-5 leading-8 text-white/60">
                Prepare, schedule and track marketing posts so the venue can move from idea to execution faster.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02] px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 max-w-5xl">
              <p className="mb-6 text-sm uppercase tracking-[0.45em] text-[#D6A66A]">
                Multi-Property Control
              </p>
              <h2 className="text-5xl font-light leading-tight tracking-[-0.055em] md:text-7xl">
                One system for every hospitality format.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-5">
              {propertyTypes.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 text-center text-white/85 backdrop-blur-2xl"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-gradient-to-b from-[#03050B] to-[#0B0D16] px-6 py-28">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-8 text-sm uppercase tracking-[0.45em] text-[#D6A66A]">
              Hospitality Without Blind Spots
            </p>

            <h2 className="mx-auto max-w-5xl text-5xl font-light leading-tight tracking-[-0.055em] md:text-7xl">
              Operate.
              <br />
              <span className="text-[#D6A66A]">Control.</span>
              <br />
              Grow.
            </h2>

            <p className="mx-auto mt-12 max-w-3xl text-xl leading-9 text-white/60">
              Avantiqo connects customers, staff, POS, kitchen, inventory, finance, reviews, marketing and synthetic intelligence into one hospitality operating system.
            </p>

            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/demo"
                className="inline-flex justify-center rounded-2xl bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#C9974D] px-10 py-5 text-sm font-semibold text-black shadow-[0_0_45px_rgba(214,166,106,0.42)] transition hover:brightness-110"
              >
                {h.cta?.primary || "Book Demo"}
              </Link>
              <Link
                href="/workspace"
                className="inline-flex justify-center rounded-2xl border border-white/15 bg-white/[0.05] px-10 py-5 text-sm font-semibold text-white/80 transition hover:border-[#D6A66A]/40 hover:bg-white/[0.09]"
              >
                Explore Platform
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
