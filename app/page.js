"use client";

import SiteTopNav from "@/app/components/SiteTopNav";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const showcaseSections = [
    {
      eyebrow: "STAFF PORTAL",
      title: "One Workspace For Every Employee. One Source Of Truth For Leadership.",
      intro:
        "Most organizations believe they have a workforce management system. In reality, they have a collection of disconnected tools that force employees and managers to constantly switch between platforms.",
      paragraphs: [
        "Attendance is tracked in one system. Scheduling is managed somewhere else. Payroll calculations happen in spreadsheets. Training records are stored in folders. Performance reviews depend on manual supervision, memory and disconnected reports.",
        "As organizations grow, this fragmentation creates complexity. Managers spend more time gathering information than leading people. Employees become frustrated because expectations are unclear. Leadership loses visibility into workforce performance.",
        "The Avantiqo Staff Portal creates a dedicated operational workspace for every employee. Instead of navigating multiple systems, employees interact with a single environment where they can manage attendance, schedules, responsibilities, payroll, training, communication and performance.",
        "Managers gain real-time visibility into who is present, who is late, who is productive, who requires support and who is exceeding expectations. This transforms workforce management from a reactive process into a proactive discipline.",
        "The result is accountability, clarity and control. Every action becomes measurable. Every responsibility becomes visible. Every employee becomes part of the operational intelligence layer."
      ],
      points: [
        "Attendance, clock-in, lateness and absence tracking",
        "Schedules, shifts, task assignment and daily execution",
        "Payroll visibility, bonuses, deductions and approvals",
        "Performance reviews, training progress and compliance records"
      ],
    },
    {
      eyebrow: "CUSTOMER PORTAL",
      title: "Customers Should Never Need To Ask For An Update.",
      intro:
        "One of the biggest sources of friction in business is uncertainty. Customers often have no visibility into what is happening after they purchase a product, approve a service or begin a project.",
      paragraphs: [
        "They send emails requesting updates. They call for project status. They ask for documents that should already be available. They follow up on approvals. They chase invoices. Every interaction consumes time and creates unnecessary pressure for both the customer and the business.",
        "The Avantiqo Customer Portal removes this uncertainty by creating a transparent relationship between the organization and its customers. Every customer receives access to a dedicated workspace that provides complete visibility into their relationship with the business.",
        "Projects can be monitored in real time. Documents can be accessed instantly. Invoices and quotations remain available at all times. Approvals become structured and traceable. Communication becomes centralized instead of scattered across emails, phone calls and messaging applications.",
        "Instead of relying on fragmented conversations, every interaction becomes part of a documented operational process. This improves trust, reduces administrative workload and creates a more professional customer experience.",
        "Customers feel informed. Businesses appear organized. Relationships become stronger."
      ],
      points: [
        "Project progress, milestones and service status",
        "Quotation approval, document access and request tracking",
        "Invoices, balances, payment status and customer history",
        "Structured communication between customer and business"
      ],
    },
    {
      eyebrow: "OPERATIONS PLATFORM",
      title: "The Difference Between Growth And Chaos Is Operational Visibility.",
      intro:
        "Most organizations do not fail because of a lack of ambition. They fail because operational complexity eventually exceeds their ability to manage it.",
      paragraphs: [
        "Projects become difficult to track. Responsibilities become unclear. Approvals create bottlenecks. Departments become disconnected. Resources become misallocated. Deadlines are missed. Costs increase. Managers spend more time responding to problems than preventing them.",
        "The Avantiqo Operations Platform provides a real-time view of how work moves through the organization. Every task, workflow, project, approval and department becomes part of a connected operational environment.",
        "Leadership gains the ability to see problems before they become failures. Teams gain clarity regarding responsibilities. Managers gain confidence that execution is happening as expected. Operations become measurable rather than assumed.",
        "Instead of waiting for reports, leadership can understand execution as it happens. Instead of discovering delays late, managers can intervene early. Instead of relying on individual memory, the organization runs on structured visibility.",
        "The result is a business that scales through systems rather than constant supervision."
      ],
      points: [
        "Tasks, projects, approvals and workflow automation",
        "Department performance and resource allocation",
        "Operational reporting and execution visibility",
        "Early warning signals before delays become failures"
      ],
    },
    {
      eyebrow: "FINANCE PLATFORM",
      title: "Every Operational Decision Has A Financial Consequence.",
      intro:
        "Finance should not exist separately from operations. Every decision inside a business eventually becomes a financial outcome.",
      paragraphs: [
        "A delayed project becomes lost margin. Poor scheduling becomes unnecessary labor cost. Weak procurement becomes cash flow pressure. Missed invoices become revenue leakage. Operational mistakes become financial consequences.",
        "Traditional accounting systems show what happened after the fact. Avantiqo connects financial intelligence directly to operational activity so leadership can understand financial reality while decisions are still being made.",
        "Revenue, costs, budgets, margins, cash flow, profitability and forecasting become connected to the work happening inside the organization. Finance becomes a live control layer rather than a historical reporting function.",
        "Leadership no longer waits until month-end to discover performance issues. Financial exposure becomes visible earlier. Profitability becomes easier to protect. Cash flow becomes easier to understand.",
        "The result is financial control connected directly to operational execution."
      ],
      points: [
        "Revenue, costs, margins and profitability",
        "Budgets, cash flow and forecasting",
        "Operational activity connected to financial outcomes",
        "Revenue leakage and financial exposure detection"
      ],
    },
    {
      eyebrow: "CRM",
      title: "Every Relationship. One Intelligence Layer.",
      intro:
        "Customer relationships are among the most valuable assets inside any organization. But relationship information is often scattered across emails, spreadsheets, messaging applications and disconnected systems.",
      paragraphs: [
        "Sales teams track leads in one place. Operations tracks delivery somewhere else. Finance manages invoices separately. Customer service handles communication through different channels. Leadership never sees the full customer relationship in one view.",
        "Avantiqo CRM centralizes the entire customer lifecycle into a single intelligence layer. Leads, prospects, customers, contracts, communications, quotations, projects and support history become connected.",
        "Every interaction becomes visible. Every opportunity becomes measurable. Every customer becomes part of a larger intelligence model.",
        "This gives organizations a deeper understanding of customer value, relationship health, sales potential and retention risk. Instead of managing contacts, businesses understand relationships.",
        "The CRM becomes more than a sales tool. It becomes the connection between customer activity, operational execution and business growth."
      ],
      points: [
        "Leads, prospects, customers and opportunities",
        "Contracts, quotations and communication history",
        "Relationship value, retention risk and growth potential",
        "Customer activity connected to operations and finance"
      ],
    },
    {
      eyebrow: "MARKETING STUDIO",
      title: "Marketing Should Be Measured. Not Guessed.",
      intro:
        "Marketing is often treated as a creative activity instead of a business function. Campaigns are launched without clear objectives. Content is published without understanding impact. Performance is reviewed after opportunities have already been lost.",
      paragraphs: [
        "The Avantiqo Marketing Studio transforms marketing into a measurable operational process. Campaign planning, content creation, publishing, engagement monitoring and performance analysis become part of one connected workflow.",
        "Teams can generate campaigns, create content, schedule communications, manage social media, monitor engagement and evaluate results from a single environment.",
        "Synthetic Intelligence continuously evaluates campaign performance and identifies patterns that humans would otherwise miss. Which campaigns generate revenue. Which channels perform best. Which audiences engage most effectively. Which opportunities deserve additional investment.",
        "Marketing becomes accountable because every action can be connected to engagement, conversions, customer behavior and business outcomes.",
        "The result is marketing that learns, improves and contributes directly to growth."
      ],
      points: [
        "Campaign planning, scheduling and publishing",
        "Social media content and engagement monitoring",
        "Conversion tracking and performance analytics",
        "AI recommendations based on real campaign results"
      ],
    },
    {
      eyebrow: "DESIGN STUDIO",
      title: "The Creative Operating System For Modern Organizations.",
      intro:
        "Modern businesses produce enormous amounts of content. Images, videos, campaign assets, sales presentations, brand material, training documents and customer-facing visuals are now part of daily operations.",
      paragraphs: [
        "Most organizations manage these assets across disconnected design tools, file storage systems, video editors and approval channels. Files become scattered. Versions become confused. Teams duplicate work. Brand consistency suffers.",
        "The Avantiqo Design Studio centralizes the entire creative workflow into a single environment connected to marketing, operations and customer engagement.",
        "Teams can generate AI-powered images, create AI-powered video, build composite campaign assets, manage presentations, exchange assets between departments and maintain centralized brand libraries.",
        "The Design Studio is not simply a creative tool. It is a creative operating system. It allows businesses to produce content faster, collaborate more clearly and maintain consistency across every channel.",
        "Design becomes faster. Collaboration becomes easier. Brand consistency becomes automatic."
      ],
      points: [
        "AI image generation for campaigns, products and brand content",
        "AI video generation for advertising, social media and presentations",
        "Composite Studio for advanced multi-asset creative production",
        "Asset Exchange, brand libraries, templates and version control"
      ],
    },
    {
      eyebrow: "INTEGRATIONS",
      title: "Connect Everything. Replace Nothing.",
      intro:
        "Most organizations have already invested heavily in software. Replacing every system is rarely practical, and forcing teams to abandon tools they already depend on creates resistance and operational risk.",
      paragraphs: [
        "Avantiqo is designed to become the intelligence layer that connects the systems already being used across the organization.",
        "Google, Meta, payment providers, accounting platforms, government systems, communication tools, industry-specific software and third-party APIs can be connected into a single operational intelligence environment.",
        "Instead of creating another isolated platform, Avantiqo unifies information across systems so it can be analyzed, connected and acted upon.",
        "This gives leadership a complete view without disrupting the workflows that already support the business.",
        "The result is greater visibility, stronger automation and better decision-making without forcing the organization to start from zero."
      ],
      points: [
        "Google, Meta and communication platforms",
        "Accounting, payments and finance systems",
        "Government systems and compliance platforms",
        "Industry software, APIs and future integrations"
      ],
    },
    {
      eyebrow: "SYNTHETIC INTELLIGENCE",
      title: "Traditional Software Records Events. Synthetic Intelligence Understands Events.",
      intro:
        "Every business generates enormous amounts of data. Sales data, financial data, operational data, employee data, customer data and compliance data all exist somewhere inside the organization.",
      paragraphs: [
        "Most software stores this information but does very little with it. Leadership is left with dashboards, reports and spreadsheets that require manual interpretation.",
        "Synthetic Intelligence changes this model. Instead of simply recording events, it continuously analyzes the relationships between events.",
        "It understands how workforce performance impacts profitability. How customer behavior impacts revenue. How operational inefficiencies impact growth. How compliance risks impact stability. How marketing performance impacts customer acquisition.",
        "Most importantly, it identifies patterns before they become problems. It can detect revenue leakage, operational bottlenecks, staffing risks, customer churn, compliance exposure, project delays, cash flow pressure and growth opportunities.",
        "Traditional software helps organizations ask what happened. Synthetic Intelligence helps leadership understand why it happened, what is likely to happen next and what should be done about it."
      ],
      points: [
        "Operational, workforce, customer and financial intelligence",
        "Revenue leakage, bottleneck and risk detection",
        "Predictive recommendations before problems escalate",
        "A decision layer across the entire organization"
      ],
    },
  ];

  return (
    <>
      <SiteTopNav />

      <main className="min-h-screen overflow-hidden bg-[#02030A] text-white">
        <section className="relative px-6 py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#241237_0%,#070B16_42%,#02030A_100%)]" />

          <div className="relative mx-auto max-w-[1800px]">
            <div className="relative min-h-[760px] overflow-hidden rounded-[46px] border border-white/[0.08] bg-[#050714] shadow-[0_0_90px_rgba(214,166,106,0.12)]">
              <Image
                src="/images/hero-hero.png"
                alt=""
                width={2200}
                height={1400}
                quality={80}
                priority
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#02030A]/96 via-[#02030A]/78 to-[#02030A]/18" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(214,166,106,0.18),transparent_28%),radial-gradient(circle_at_70%_10%,rgba(140,107,255,0.2),transparent_32%)]" />

              <div className="relative z-10 flex min-h-[760px] items-center px-8 py-16 md:px-14 lg:px-20">
                <div className="max-w-[880px] rounded-[42px] border border-white/10 bg-black/30 p-8 shadow-[0_35px_140px_rgba(0,0,0,0.65)] backdrop-blur-3xl md:p-12">
                  <p className="mb-7 text-xs uppercase tracking-[0.45em] text-[#D6A66A]">
                    AVANTIQO OPERATING SYSTEM
                  </p>

                  <h1 className="text-5xl font-extralight leading-[1] tracking-[-0.07em] md:text-7xl lg:text-[92px]">
                    Control The Entire Business.
                    <br />
                    <span className="bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#8C6BFF] bg-clip-text text-transparent">
                      Before Problems Happen.
                    </span>
                  </h1>

                  <p className="mt-8 max-w-[760px] text-[18px] leading-9 text-white/66">
                    Avantiqo connects staff, customers, operations, finance, CRM, marketing, design, integrations and Synthetic Intelligence into one enterprise operating system. It does not simply store information. It connects the organization so leadership can understand what is happening, why it is happening and what should happen next.
                  </p>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <Link href="/demo" className="rounded-2xl bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#C9974D] px-9 py-4 text-center text-sm font-semibold text-black shadow-[0_0_45px_rgba(214,166,106,0.42)] transition hover:brightness-110">
                      Book Demo
                    </Link>

                    <Link href="/industries" className="rounded-2xl border border-white/15 bg-white/[0.04] px-9 py-4 text-center text-sm font-semibold text-white/80 transition hover:border-[#D6A66A]/40 hover:bg-white/[0.08]">
                      Explore Platform
                    </Link>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.25em] text-[#D6A66A]">
                  One platform. Every department. One intelligence layer.
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="px-6 py-32">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
                WHAT IS AVANTIQO
              </p>
              <h2 className="text-5xl font-extralight leading-tight tracking-[-0.06em] md:text-7xl">
                Most Businesses Have Data.
                <br />
                <span className="text-white/42">Very Few Have Intelligence.</span>
              </h2>
            </div>

            <div className="space-y-7 text-xl leading-10 text-white/64">
              <p>
                Most organizations operate through a collection of disconnected systems, spreadsheets, emails, chat applications and department-specific software. Each team sees only a small part of the business while leadership attempts to make decisions without understanding the complete picture.
              </p>
              <p>
                Sales operates separately from finance. Operations operates separately from customer service. Marketing operates separately from execution. Employees use one set of tools while management relies on another.
              </p>
              <p>
                The result is delays, duplicated work, missed opportunities and decisions based on incomplete information. The challenge is not a lack of data. The challenge is that nobody can see how the data connects.
              </p>
              <p className="text-white/86">
                Avantiqo becomes the operational intelligence layer that connects every part of the organization into a single environment.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-32 bg-white/[0.018]">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">

            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
                WHY AVANTIQO IS DIFFERENT
              </p>

              <h2 className="text-5xl font-extralight leading-tight tracking-[-0.06em] md:text-7xl">
                Most Software Creates
                <br />
                More Systems.
                <br />
                <span className="text-white/50">
                  Avantiqo Creates One Intelligence Layer.
                </span>
              </h2>

              <div className="mt-10 rounded-[34px] border border-white/10 bg-white/[0.045] p-7 shadow-[0_25px_100px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
                <p className="text-lg leading-9 text-white/72">
                  Modern businesses don't suffer from a lack of software. They suffer from a lack of connection between software.
                </p>
              </div>
            </div>

            <div className="rounded-[46px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-8 shadow-[0_35px_140px_rgba(0,0,0,0.5)] backdrop-blur-3xl md:p-10">

              <div className="space-y-6 text-lg leading-9 text-white/66">

                <p>
                  Modern organizations have become trapped inside a growing collection of software.
                </p>

                <p>
                  A CRM for customers. An accounting system for finance. A project management platform for operations. Separate tools for payroll. Separate tools for marketing. Separate tools for communication. Separate tools for reporting.
                </p>

                <p>
                  Every new problem creates another system. Every new system creates another source of information. Every new source of information creates another layer of complexity.
                </p>

                <p>
                  Over time, organizations become surrounded by software but increasingly disconnected from understanding what is actually happening inside the business.
                </p>

                <p>
                  Departments begin operating independently. Information becomes fragmented. Reports become inconsistent. Leadership spends more time gathering information than making decisions.
                </p>

                <p>
                  The problem is not that organizations lack technology. The problem is that technology is disconnected.
                </p>

                <p>
                  Most software solves a single problem. Very little software understands how problems connect.
                </p>

                <p>
                  A customer issue eventually becomes an operational issue. An operational issue eventually becomes a financial issue. A staffing issue eventually becomes a customer issue. A marketing decision eventually becomes a profitability decision.
                </p>

                <p>
                  Everything inside a business is connected. Traditional software rarely reflects this reality.
                </p>

                <p>
                  Avantiqo was built on a different philosophy. Instead of creating another isolated application, Avantiqo creates a unified intelligence layer across the entire organization.
                </p>

                <p>
                  Staff. Customers. Operations. Finance. Marketing. Projects. Compliance. Reporting. Leadership.
                </p>

                <p>
                  All connected inside a single environment.
                </p>

                <p>
                  This means leadership no longer sees disconnected reports from separate departments. Leadership sees relationships.
                </p>

                <p>
                  How workforce performance affects profitability. How operational execution affects customer satisfaction. How marketing performance affects revenue. How project delivery affects cash flow. How compliance affects organizational risk.
                </p>

                <p>
                  Instead of managing software systems, organizations manage the business itself.
                </p>

                <p className="text-white/86">
                  One organization. One intelligence layer. One operational reality. One source of truth.
                </p>

                <p className="text-white/86">
                  Most software helps organizations store information. Avantiqo helps organizations understand information.
                </p>

              </div>
            </div>

          </div>
        </section>

        <section className="px-6 py-32 bg-white/[0.018]">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
                ACCOUNTING FIRMS
              </p>

              <h2 className="text-5xl font-extralight leading-tight tracking-[-0.06em] md:text-7xl">
                Traditional Accounting Explains The Past.
                <br />
                Modern Advisory Requires Understanding The Present.
              </h2>

              <div className="mt-10 rounded-[34px] border border-white/10 bg-white/[0.045] p-7 shadow-[0_25px_100px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
                <p className="text-lg leading-9 text-white/72">
                  Most accounting firms receive information after the important decisions have already been made. Avantiqo gives accountants visibility into the business while it is operating, not weeks after the fact.
                </p>
              </div>
            </div>

            <div className="rounded-[46px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-8 shadow-[0_35px_140px_rgba(0,0,0,0.5)] backdrop-blur-3xl md:p-10">

              <div className="space-y-6 text-lg leading-9 text-white/66">

                <p>
                  Most accounting firms receive information after the important decisions have already been made.
                </p>

                <p>
                  Invoices arrive after work has been completed. Payroll is processed after labor has been spent. Financial reports are produced after operational decisions have already impacted profitability.
                </p>

                <p>
                  By the time an accountant identifies a problem, the problem has often existed for weeks or months. They can explain what happened, but they often cannot see why it happened.
                </p>

                <p>
                  A decline in profitability may be caused by staffing inefficiencies. Cash flow pressure may be caused by operational delays. Margin erosion may be caused by project overruns. Customer churn may be caused by service failures. Marketing spend may be increasing while conversion performance is declining.
                </p>

                <p>
                  Avantiqo changes this by connecting operational activity directly to financial intelligence. Instead of waiting until month-end, accounting firms can understand how a business is performing while the business is operating.
                </p>

                <p>
                  They can see workforce performance. They can see operational bottlenecks. They can see project execution. They can see customer activity. They can see marketing effectiveness. Most importantly, they can understand how these factors influence financial performance in real time.
                </p>

                <p>
                  This transforms the role of the accountant. Instead of acting primarily as a compliance provider, the accounting firm becomes a strategic business advisor.
                </p>

                <p>
                  Client conversations become more valuable. Recommendations become more accurate. Problems can be identified before they become financial damage. Opportunities can be identified before they are missed.
                </p>

                <p>
                  This creates stronger client relationships because the accountant is no longer simply reporting results. The accountant is helping influence results.
                </p>

                <p>
                  For accounting firms, this creates a significant competitive advantage. Clients remain longer. Advisory revenue increases. Relationships become deeper. The firm becomes more difficult to replace.
                </p>

                <p className="text-white/86">
                  Traditional accounting explains the past. Avantiqo helps accounting firms understand the business while it is happening. The result is better advice, stronger client relationships and greater long-term growth.
                </p>

              </div>
            </div>
          </div>
        </section>


        {showcaseSections.map((section, index) => (
          <section
            key={section.eyebrow}
            className={`px-6 py-32 ${index % 2 === 0 ? "bg-white/[0.018]" : ""}`}
          >
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
                  {section.eyebrow}
                </p>
                <h2 className="text-5xl font-extralight leading-tight tracking-[-0.06em] md:text-7xl">
                  {section.title}
                </h2>

                <div className="mt-10 rounded-[34px] border border-white/10 bg-white/[0.045] p-7 shadow-[0_25px_100px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
                  <p className="text-lg leading-9 text-white/72">{section.intro}</p>
                </div>
              </div>

              <div className="rounded-[46px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-8 shadow-[0_35px_140px_rgba(0,0,0,0.5)] backdrop-blur-3xl md:p-10">
                <div className="space-y-6 text-lg leading-9 text-white/66">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                  {section.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-white/10 bg-black/25 p-5 text-white/78"
                    >
                      <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-[#D6A66A] to-[#8C6BFF]" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="px-6 py-32 bg-white/[0.018]">
          <div className="mx-auto max-w-7xl">

            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
              INDUSTRIES
            </p>

            <h2 className="max-w-5xl text-5xl font-extralight leading-tight tracking-[-0.06em] md:text-7xl">
              One Intelligence Layer.
              <br />
              Multiple Industries.
            </h2>

            <p className="mt-8 max-w-4xl text-xl leading-10 text-white/64">
              Every industry has different workflows, regulations, customers and operational challenges.
              However, every successful organization depends on the same foundations:
              people, customers, operations, finance, visibility and decision-making.
              Avantiqo adapts to the industry while maintaining a unified intelligence architecture.
            </p>

            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

              {[
                {
                  title: "Accounting Firms",
                  description: "Manage clients, compliance, advisory services, reporting and financial intelligence with real-time operational visibility."
                },
                {
                  title: "Healthcare",
                  description: "Connect patients, clinicians, operations, compliance and financial performance inside a single operational environment."
                },
                {
                  title: "Hospitality",
                  description: "Manage guests, reservations, staff, operations, marketing and profitability with complete visibility."
                },
                {
                  title: "Construction",
                  description: "Control projects, budgets, procurement, contractors and execution from one connected platform."
                },
                {
                  title: "Retail",
                  description: "Connect inventory, customers, staff, marketing and financial performance across the entire operation."
                },
                {
                  title: "Professional Services",
                  description: "Manage projects, teams, billing, delivery and customer relationships with operational intelligence."
                },
                {
                  title: "Manufacturing",
                  description: "Control production, inventory, procurement, quality and profitability with real-time visibility."
                },
                {
                  title: "Real Estate",
                  description: "Manage properties, tenants, maintenance, finance and customer relationships from one system."
                }
              ].map((industry) => (
                <div
                  key={industry.title}
                  className="rounded-[32px] border border-white/[0.06] bg-white/[0.025] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)]"
                >
                  <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#D6A66A]">
                    {industry.title}
                  </p>

                  <p className="leading-8 text-white/62">
                    {industry.description}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </section>


        <section className="px-6 py-32">
          <div className="mx-auto max-w-7xl rounded-[46px] border border-[#D6A66A]/20 bg-gradient-to-br from-[#120E08] via-[#060713] to-[#120A1E] p-8 text-center shadow-[0_35px_140px_rgba(214,166,106,0.12)] backdrop-blur-3xl md:p-14">
            <p className="mb-8 text-xs uppercase tracking-[0.42em] text-[#D6A66A]">
              BUILT FOR EVERY MODERN ORGANIZATION
            </p>

            <h2 className="mx-auto max-w-5xl text-5xl font-extralight leading-tight tracking-[-0.06em] md:text-7xl">
              Operate With Visibility.
              <br />
              <span className="bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#8C6BFF] bg-clip-text text-transparent">
                Control With Intelligence.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-white/64">
              Avantiqo gives leadership a connected view of people, customers, operations, finance, marketing, design and strategic intelligence. It replaces fragmented visibility with one operating system designed for control, accountability and growth.
            </p>

            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/demo" className="rounded-2xl bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#C9974D] px-10 py-5 text-sm font-semibold text-black shadow-[0_0_45px_rgba(214,166,106,0.42)] transition hover:brightness-110">
                Book Demo
              </Link>

              <Link href="/industries" className="rounded-2xl border border-white/15 bg-white/[0.05] px-10 py-5 text-sm font-semibold text-white/80 transition hover:border-[#D6A66A]/40 hover:bg-white/[0.1]">
                Explore Industries
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
