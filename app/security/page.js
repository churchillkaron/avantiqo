"use client";

import Link from "next/link";
import SiteTopNav from "@/app/components/SiteTopNav";
import Footer from "@/components/layout/Footer";
import { useTranslation } from "@/app/providers/I18nProvider";

export default function SecurityPage() {
  const { translations } = useTranslation();
  const sec = translations.security || {};

  const pillars = [
    {
      title: sec.pillar_1_title || "",
      text: sec.pillar_1_text || "",
    },
    {
      title: sec.pillar_2_title || "",
      text: sec.pillar_2_text || "",
    },
    {
      title: sec.pillar_3_title || "",
      text: sec.pillar_3_text || "",
    },
    {
      title: sec.pillar_4_title || "",
      text: sec.pillar_4_text || "",
    },
    {
      title: sec.pillar_5_title || "",
      text: sec.pillar_5_text || "",
    },
    {
      title: sec.pillar_6_title || "",
      text: sec.pillar_6_text || "",
    },
  ];

  const layers = [
    sec.layer_1,
    sec.layer_2,
    sec.layer_3,
    sec.layer_4,
    sec.layer_5,
    sec.layer_6,
    sec.layer_7,
    sec.layer_8,
    sec.layer_9,
    sec.layer_10,
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#02030A] text-white">
      <SiteTopNav />

      <section className="relative px-6 py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1B1230_0%,#070B16_42%,#02030A_100%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="rounded-[46px] border border-white/10 bg-white/[0.035] p-8 shadow-[0_35px_140px_rgba(0,0,0,0.6)] backdrop-blur-3xl md:p-14">
            <p className="mb-6 text-xs uppercase tracking-[0.45em] text-[#D6A66A]">
              {sec.hero_label || "SECURITY & TRUST"}
            </p>

            <h1 className="max-w-5xl text-6xl font-extralight leading-tight tracking-[-0.06em] md:text-8xl">
              {sec.hero_title || "Security Is Not A Feature."}
              <br />
              <span className="bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#8C6BFF] bg-clip-text text-transparent">
                {sec.hero_title_highlight || "It Is The Foundation."}
              </span>
            </h1>

            <p className="mt-8 max-w-4xl text-xl leading-10 text-white/66">
              {sec.hero_subtitle || "Avantiqo is designed for businesses that manage sensitive operational, financial, customer, staff and organizational data. Security must exist across every layer: access, approvals, visibility, audit trails, portals, integrations and data separation."}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/demo" className="rounded-2xl bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#C9974D] px-9 py-4 text-center text-sm font-semibold text-black shadow-[0_0_45px_rgba(214,166,106,0.42)]">
                {sec.request_briefing || "Request Security Briefing"}
              </Link>

              <Link href="/industries" className="rounded-2xl border border-white/15 bg-white/[0.04] px-9 py-4 text-center text-sm font-semibold text-white/80">
                {sec.explore_platform || "Explore Platform"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
              {sec.model_label || "SECURITY MODEL"}
            </p>
            <h2 className="text-5xl font-extralight leading-tight tracking-[-0.06em] md:text-7xl">
              {sec.model_title || "Protect The Business. Protect The Data. Protect The Decisions."}
            </h2>
          </div>

          <div className="space-y-7 text-xl leading-10 text-white/64">
            <p>
              Avantiqo is not built as a simple website or single-purpose application.
              It is an operating system for organizations. That means security must protect
              more than login access.
            </p>

            <p>
              It must protect financial decisions, payroll records, client visibility,
              customer information, approval flows, staff actions, accounting records,
              marketing assets, operational reports and executive intelligence.
            </p>

            <p>
              The security model is designed around one principle: every user should only
              access the information and actions required for their role, organization and responsibility.
            </p>

            <p className="text-white/86">
              The result is controlled visibility, stronger accountability and safer business execution.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-28 bg-white/[0.018]">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div
              key={`${pillar.title}-${index}`}
              className="rounded-[34px] border border-white/10 bg-white/[0.035] p-8 shadow-[0_30px_110px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            >
              <div className="mb-5 h-1 w-14 rounded-full bg-gradient-to-r from-[#D6A66A] to-[#8C6BFF]" />
              <h3 className="mb-5 text-2xl font-light text-white">
                {pillar.title}
              </h3>
              <p className="text-lg leading-8 text-white/62">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[46px] border border-[#D6A66A]/20 bg-gradient-to-br from-[#D6A66A]/10 via-white/[0.03] to-transparent p-10 shadow-[0_35px_140px_rgba(214,166,106,0.12)] backdrop-blur-3xl">
            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
              {sec.why_label || "WHY IT MATTERS"}
            </p>

            <h2 className="mb-8 text-5xl font-extralight leading-tight tracking-[-0.06em]">
              {sec.why_title || "Security Creates Trust. Trust Creates Adoption."}
            </h2>

            <div className="space-y-6 text-lg leading-9 text-white/66">
              <p>
                Businesses cannot move operations, finance, customers, staff and leadership
                intelligence into one platform unless the platform is designed to protect access
                and responsibility.
              </p>

              <p>
                Accounting firms need confidence that one client cannot see another client.
                Hospitality groups need confidence that staff cannot access financial controls.
                Healthcare organizations need controlled visibility across sensitive operations.
                Enterprise teams need approval governance before important actions are executed.
              </p>

              <p>
                Avantiqo is designed so growth does not create uncontrolled access.
                As organizations expand, permissions, approvals and visibility can scale with them.
              </p>
            </div>
          </div>

          <div className="rounded-[46px] border border-white/10 bg-white/[0.035] p-10 shadow-[0_35px_140px_rgba(0,0,0,0.45)] backdrop-blur-3xl">
            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
              {sec.layers_label || "SECURITY LAYERS"}
            </p>

            <div className="grid gap-4">
              {layers.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="rounded-2xl border border-white/10 bg-black/25 p-5 text-white/72"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-28 bg-white/[0.018]">
        <div className="mx-auto max-w-7xl rounded-[46px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-10 shadow-[0_35px_140px_rgba(0,0,0,0.45)] backdrop-blur-3xl md:p-14">
          <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
            {sec.data_label || "DATA RESPONSIBILITY"}
          </p>

          <h2 className="mb-10 max-w-5xl text-5xl font-extralight leading-tight tracking-[-0.06em] md:text-7xl">
            {sec.data_title || "A Platform That Understands Sensitive Business Data."}
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6 text-lg leading-9 text-white/66">
              <p>
                Avantiqo connects many parts of a company: operations, finance,
                customers, payroll, documents, staff, marketing, approvals and intelligence.
                Because these areas are connected, security must be designed into the structure
                of the platform instead of being added later.
              </p>

              <p>
                Access should be intentional. A customer should see their project and documents,
                but not internal finance logic. A staff member should see their tasks and payroll,
                but not executive reporting. A manager should approve work, but not necessarily control
                platform-wide settings.
              </p>
            </div>

            <div className="space-y-6 text-lg leading-9 text-white/66">
              <p>
                This separation of responsibility allows organizations to use Avantiqo across
                departments without exposing unnecessary information.
              </p>

              <p>
                The goal is simple: every person receives the visibility they need,
                and nothing more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl rounded-[46px] border border-[#D6A66A]/20 bg-gradient-to-br from-[#120E08] via-[#060713] to-[#120A1E] p-8 text-center shadow-[0_35px_140px_rgba(214,166,106,0.12)] backdrop-blur-3xl md:p-14">
          <p className="mb-8 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
            BUILT FOR CONTROLLED GROWTH
          </p>

          <h2 className="mx-auto max-w-5xl text-5xl font-extralight leading-tight tracking-[-0.06em] md:text-7xl">
            Security That Supports
            <br />
            <span className="bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#8C6BFF] bg-clip-text text-transparent">
              Scale, Trust And Control.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-white/64">
            Avantiqo is designed for organizations that need operational power without losing control.
            The platform brings people, customers, finance, approvals and intelligence together while
            maintaining the separation, accountability and visibility required by serious businesses.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/demo" className="rounded-2xl bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#C9974D] px-10 py-5 text-sm font-semibold text-black shadow-[0_0_45px_rgba(214,166,106,0.42)]">
              Request Demo
            </Link>

            <Link href="/what-is-synthetic-intelligence" className="rounded-2xl border border-white/15 bg-white/[0.05] px-10 py-5 text-sm font-semibold text-white/80">
              Explore Intelligence Runtime
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
