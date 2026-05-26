"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#02030A] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-40 md:pb-32 md:pt-52">

        {/* GLOW */}
        <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[220px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-5xl">

            <p className="mb-8 text-xs tracking-[0.35em] text-[#B58AF8]">
              ENTERPRISE CONSULTATION
            </p>

            <h1
              className="text-5xl text-white sm:text-4xl md:text-6xl md:text-[96px]"
              style={{
                lineHeight: 0.95,
                fontWeight: 300,
                letterSpacing: "-0.06em",
              }}
            >
              Enterprise operational
              <br />

              <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
                infrastructure consultation.
              </span>

            </h1>

            <p
              className="mt-10 max-w-3xl text-white/55"
              style={{
                fontSize: "22px",
                lineHeight: 1.9,
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              Discuss operational workflows,
              AI automation infrastructure,
              enterprise governance and
              scalable multi-location systems
              with the Avantiqo team.
            </p>

          </div>

        </div>

      </section>

      {/* CONTACT GRID */}
      <section className="relative overflow-hidden px-6 pb-24 md:pb-36">

        <div className="mx-auto grid max-w-7xl gap-4 md:p-8 lg:grid-cols-[0.85fr_1.15fr]">

          {/* LEFT */}
          <div className="overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.03] p-5 md:p-10 backdrop-blur-3xl">

            <p className="mb-8 text-xs tracking-[0.35em] text-[#B58AF8]">
              CONSULTATION AREAS
            </p>

            <div className="space-y-10">

              {[
                {
                  title: "Operational Infrastructure",
                  text: "Multi-location operational systems, workflow orchestration and enterprise synchronization.",
                },
                {
                  title: "AI Automation",
                  text: "AI forecasting, optimization systems, automation engines and operational intelligence.",
                },
                {
                  title: "Enterprise Governance",
                  text: "Permissions, approvals, audit visibility and scalable organizational infrastructure.",
                },
                {
                  title: "Financial Systems",
                  text: "Accounting, payroll, procurement and enterprise financial intelligence.",
                },
                {
                  title: "Deployment Planning",
                  text: "Operational onboarding, infrastructure setup and enterprise implementation strategy.",
                },
              ].map((item) => (
                <div key={item.title}>

                  <div className="mb-5 h-[1px] w-16 bg-gradient-to-r from-[#8B5CF6] to-transparent" />

                  <h3
                    className="text-white"
                    style={{
                      fontSize: "30px",
                      lineHeight: 1.05,
                      fontWeight: 300,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="mt-4 text-white/45"
                    style={{
                      fontSize: "16px",
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

          </div>

          {/* RIGHT */}
          <div className="overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.03] p-5 md:p-10 backdrop-blur-3xl">

            <p className="mb-10 text-xs tracking-[0.35em] text-[#B58AF8]">
              REQUEST CONSULTATION
            </p>

            <div className="grid gap-6">

              <input
                type="text"
                placeholder="Full Name"
                className="rounded-[22px] border border-white/10 bg-[#02030A]/80 px-6 py-5 text-white outline-none placeholder:text-white/30"
              />

              <input
                type="text"
                placeholder="Company"
                className="rounded-[22px] border border-white/10 bg-[#02030A]/80 px-6 py-5 text-white outline-none placeholder:text-white/30"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-[22px] border border-white/10 bg-[#02030A]/80 px-6 py-5 text-white outline-none placeholder:text-white/30"
              />

              <select className="rounded-[22px] border border-white/10 bg-[#02030A]/80 px-6 py-5 text-white outline-none">

                <option>Organization Size</option>
                <option>1 - 10 Employees</option>
                <option>10 - 50 Employees</option>
                <option>50 - 250 Employees</option>
                <option>250+ Employees</option>

              </select>

              <select className="rounded-[22px] border border-white/10 bg-[#02030A]/80 px-6 py-5 text-white outline-none">

                <option>Industry</option>
                <option>Hospitality</option>
                <option>Restaurants</option>
                <option>Retail</option>
                <option>Construction</option>
                <option>Enterprise Groups</option>
                <option>Marketing Agencies</option>

              </select>

              <textarea
                rows={6}
                placeholder="Describe your operational challenges or infrastructure requirements..."
                className="rounded-[22px] border border-white/10 bg-[#02030A]/80 px-6 py-5 text-white outline-none placeholder:text-white/30"
              />

              <button className="mt-4 rounded-full bg-gradient-to-r from-[#D6A66A] to-[#8B5CF6] px-4 md:px-10 py-5 text-lg font-medium text-white shadow-[0_20px_80px_rgba(139,92,246,0.35)] transition duration-300 hover:scale-[1.02]">
                Request Enterprise Consultation
              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}