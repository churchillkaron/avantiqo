"use client";


import Image from "next/image"
export default function MultiBusinessPlatform() {
  const industries = [
    {
      title: "Hotels",
      image: "/business/hotel.png",
      text: "Reservations, housekeeping, finance and guest operations unified in one system.",
    },
    {
      title: "Restaurants",
      image: "/business/restaurant.png",
      text: "POS, kitchen, inventory, payroll and AI workforce connected live.",
    },
    {
      title: "Retail",
      image: "/business/retail.png",
      text: "Inventory, suppliers, sales analytics and customer management synchronized.",
    },
    {
      title: "Construction",
      image: "/business/construction.png",
      text: "Projects, invoices, procurement and operational approvals managed centrally.",
    },
    {
      title: "Coffee Shops",
      image: "/business/cafe.png",
      text: "Multi-location café operations with AI sales and inventory intelligence.",
    },
    {
      title: "Agencies",
      image: "/business/agency.png",
      text: "Clients, contracts, invoicing and team performance managed in one workflow.",
    },
    {
      title: "Nightlife",
      image: "/business/nightlife.png",
      text: "Bars, beach clubs and entertainment operations connected live across locations.",
    },
    {
      title: "Enterprise Groups",
      image: "/business/enterprise.png",
      text: "Multi-company organizations connected through one unified intelligence layer.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      {/* BACKGROUND */}
      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[140px] md:h-[1000px] md:w-[1000px] md:blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-5xl text-center md:mb-24">
          <p className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8]">
            ONE PLATFORM. ANY BUSINESS.
          </p>

          <h2
            className="text-5xl text-white sm:text-6xl md:text-[76px]"
            style={{
              lineHeight: 1,
              fontWeight: 300,
              letterSpacing: "-0.05em",
            }}
          >
            One operational system.
            <br />

            <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
              Unlimited business models.
            </span>
          </h2>

          <p
            className="mx-auto mt-8 max-w-4xl text-white/55 md:mt-10"
            style={{
              fontSize: "20px",
              lineHeight: 1.9,
              fontWeight: 400,
            }}
          >
            Avantiqo synchronizes operations,
            finance, AI automation, workforce,
            customer management and enterprise
            intelligence into one scalable
            infrastructure for modern organizations.
          </p>
        </div>

        {/* INDUSTRY GRID */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 md:gap-6">
          {industries.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl md:rounded-[34px]"
            >
              {/* IMAGE */}
              <div className="relative h-[240px] overflow-hidden md:h-[260px]">
               <Image
  src={item.image}
  alt={item.title}
  fill
  className="object-cover transition duration-700 group-hover:scale-105"
/>

                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6 md:p-8">
                <h3
                  className="text-2xl text-white md:text-[34px]"
                  style={{
                    lineHeight: 1.05,
                    fontWeight: 300,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="mt-4 text-white/45 md:mt-5"
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.9,
                    fontWeight: 400,
                  }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* MAP */}
        <div className="mt-10 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-3xl md:mt-16 md:rounded-[42px] md:p-8">
          <Image
  src="/showcase/global-enterprise.png"
  alt="Global infrastructure"
  width={1600}
  height={900}
  className="w-full rounded-[24px] border border-white/10 md:rounded-[34px]"
/>
        </div>
      </div>
    </section>
  );
}