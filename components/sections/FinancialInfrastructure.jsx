"use client";
import Image from "next/image"
export default function FinancialInfrastructure() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      {/* BACKGROUND */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[140px] md:h-[900px] md:w-[900px] md:blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mb-16 max-w-5xl md:mb-28">
          <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8] md:mb-8">
            AI FINANCIAL INFRASTRUCTURE
          </p>

          <h2
            className="text-5xl text-white sm:text-6xl md:text-[92px]"
            style={{
              lineHeight: 0.95,
              fontWeight: 300,
              letterSpacing: "-0.06em",
            }}
          >
            From invoice
            <br />

            <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
              to accounting,
            </span>

            <br />
            stock and control.
          </h2>

          <p
            className="mt-8 max-w-4xl text-white/50 md:mt-10"
            style={{
              fontSize: "20px",
              lineHeight: 1.9,
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Avantiqo transforms supplier invoices into live operational
            financial data. AI extracts every item, translates foreign invoices,
            updates inventory, syncs accounting and powers production control
            automatically.
          </p>
        </div>

        {/* PHONE SECTION */}
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-3xl md:rounded-[42px] md:p-12">
          <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-[0.9fr_1.1fr]">
            {/* LEFT SIDE */}
            <div className="max-w-[560px]">
              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#B58AF8]">
                MOBILE FINANCE WORKFLOW
              </p>

              <h3
                className="text-4xl text-white sm:text-5xl md:text-[58px]"
                style={{
                  lineHeight: 0.98,
                  fontWeight: 300,
                  letterSpacing: "-0.05em",
                }}
              >
                Upload from staff.
                <br />

                <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
                  Control with AI.
                </span>
              </h3>

              <p
                className="mt-6 max-w-xl text-white/50 md:mt-8"
                style={{
                  fontSize: "18px",
                  lineHeight: 1.9,
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                }}
              >
                Staff upload supplier invoices, receipts and delivery bills directly
                from mobile. AI reads the invoice automatically, translates Thai and
                foreign invoices into English and routes approved data directly into
                accounting, inventory and production systems.
              </p>

              <div className="mt-8 space-y-4 max-w-[520px] md:mt-10 md:space-y-5">
                {[
                  {
                    title: "Invoice upload",
                    text: "Supplier bills and receipts uploaded directly from mobile.",
                  },
                  {
                    title: "AI extraction",
                    text: "Vendor, quantities, taxes and totals extracted automatically.",
                  },
                  {
                    title: "Automatic translation",
                    text: "Thai and foreign invoices become readable English data.",
                  },
                  {
                    title: "Inventory sync",
                    text: "Approved invoice items update stock and production inventory.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl md:rounded-[26px] md:p-7"
                  >
                    <h4
                      className="text-2xl text-white md:text-[24px]"
                      style={{
                        lineHeight: 1.1,
                        fontWeight: 300,
                        letterSpacing: "-0.04em",
                      }}
                    >
                      {item.title}
                    </h4>

                    <p
                      className="mt-3 text-white/45 md:mt-4"
                      style={{
                        fontSize: "15px",
                        lineHeight: 1.8,
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

            {/* RIGHT SIDE */}
            <div className="flex items-center justify-center lg:min-h-[920px]">
              <Image
  src="/finance/invoice-mobile.png"
  alt="Staff invoice upload"
  width={900}
  height={1800}
  className="h-auto w-full max-w-[420px]"
/>
            </div>
          </div>
        </div>

        {/* MANAGER APPROVAL */}
        <section className="relative z-10 mt-28 md:mt-40">
          {/* HEADER */}
          <div className="mx-auto mb-16 max-w-5xl text-center md:mb-24">
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#B58AF8]">
              AI APPROVAL ENGINE
            </p>

            <h3
              className="text-5xl text-white sm:text-6xl md:text-[72px]"
              style={{
                lineHeight: 0.98,
                fontWeight: 300,
                letterSpacing: "-0.05em",
              }}
            >
              Approve once.
              <br />

              <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
                Update everything.
              </span>
            </h3>

            <p
              className="mx-auto mt-8 max-w-4xl text-white/55 md:mt-10"
              style={{
                fontSize: "20px",
                lineHeight: 1.9,
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              AI translates invoices into English, extracts line items and
              instantly updates accounting, inventory, supplier history,
              ingredient costs, purchasing analytics and production systems.
            </p>
          </div>

          {/* COMPUTER IMAGE */}
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-3xl md:rounded-[42px] md:p-8">
            <Image
  src="/finance/invoice-approval.png"
  alt="Invoice approval"
  width={1600}
  height={900}
  className="w-full rounded-[24px]"
/>
          </div>

          {/* ENTERPRISE FLOW */}
          <div className="mt-10 grid gap-5 lg:mt-20 lg:grid-cols-2 lg:gap-6">
            {[
              {
                title: "AI Translation",
                text: "Thai and foreign invoices automatically translated into readable English operational data.",
              },
              {
                title: "Line Item Extraction",
                text: "Vendor names, taxes, totals, quantities and ingredient purchases extracted automatically.",
              },
              {
                title: "Inventory & Production Sync",
                text: "Approved invoice items instantly update stock, ingredient costs and production inventory.",
              },
              {
                title: "Accounting & Purchasing Automation",
                text: "COGS, supplier history, purchasing analytics and accounting workflows updated in real time.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[26px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl md:rounded-[32px] md:p-10"
              >
                <h4
                  className="text-2xl text-white md:text-[32px]"
                  style={{
                    lineHeight: 1.05,
                    fontWeight: 300,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {item.title}
                </h4>

                <p
                  className="mt-4 max-w-full text-white/50 md:mt-5 md:max-w-[90%]"
                  style={{
                    fontSize: "17px",
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
        </section>
      </div>
    </section>
  )
}