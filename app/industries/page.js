"use client";

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#02030A] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-40 md:pb-32 md:pt-52">

        {/* GLOW */}
        <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[200px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-5xl">

            <p className="mb-8 text-xs tracking-[0.35em] text-[#B58AF8]">
              INDUSTRY INFRASTRUCTURE
            </p>

            <h1
              className="text-5xl text-white sm:text-6xl md:text-[96px]"
              style={{
                lineHeight: 0.95,
                fontWeight: 300,
                letterSpacing: "-0.06em",
              }}
            >
              One operational system.
              <br />

              <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
                Multiple industries.
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
              Avantiqo adapts across hospitality,
              restaurants, retail, construction,
              nightlife, agencies and enterprise groups
              through one unified AI operational infrastructure.
            </p>

          </div>

        </div>

      </section>

      {/* INDUSTRY GRID */}
      <section className="relative overflow-hidden px-6 py-24 md:py-36">

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            {
              title: "Hotels",
              text: "Reservations, housekeeping, finance and guest operations synchronized in one platform.",
              image: "/industries/hotel-checkin.png",
            },
            {
              title: "Restaurants",
              text: "POS, production, workforce and inventory management connected live.",
              image: "/industries/restaurant-order.png",
            },
            {
              title: "Retail",
              text: "Inventory, sales analytics, procurement and customer infrastructure unified.",
              image: "/industries/retail-inventory.png",
            },
            {
              title: "Construction",
              text: "Projects, procurement, approvals and financial workflows managed centrally.",
              image: "/industries/construction-project.png",
            },
            {
              title: "Nightlife",
              text: "Beach clubs, bars and entertainment operations connected through live intelligence.",
              image: "/industries/beachclub.png",
            },
            {
              title: "Coffee Shops",
              text: "Multi-location café operations optimized with AI forecasting and automation.",
              image: "/industries/coffeeshop.png",
            },
            {
              title: "Agencies",
              text: "Clients, contracts, invoicing and operational performance managed together.",
              image: "/industries/agency-advertise.png",
            },
            {
              title: "Enterprise Groups",
              text: "Multi-company infrastructure connected through one operational intelligence layer.",
              image: "/industries/enterprise-groups.png",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-3xl"
            >

              {/* BACKGROUND IMAGE */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-[0.70] transition duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-[#02030A]/20" />

              {/* HOVER GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 via-transparent to-[#D6A66A]/5 opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* CONTENT */}
              <div className="relative z-10">

                <div className="mb-8 h-[1px] w-16 bg-gradient-to-r from-[#8B5CF6] to-transparent" />

                <h3
                  className="text-white"
                  style={{
                    fontSize: "32px",
                    lineHeight: 1.05,
                    fontWeight: 300,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="mt-5 text-white/45"
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

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}