export default function ReservationsPage() {
  return (
    <main className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-5 md:p-10 backdrop-blur-3xl">

      <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 via-transparent to-[#D6A66A]/10" />

      <div className="relative z-10">

        <div className="mb-6 text-xs tracking-[0.35em] text-[#B58AF8]">
          RESERVATION INFRASTRUCTURE
        </div>

        <h1
          className="text-4xl md:text-6xl"
          style={{
            lineHeight: 0.95,
            fontWeight: 250,
            letterSpacing: "-0.06em",
          }}
        >
          Intelligent
          <br />

          <span className="bg-gradient-to-r from-[#E7C38A] via-white to-[#8B5CF6] bg-clip-text text-transparent">
            booking operations.
          </span>

        </h1>

        <p
          className="mt-8 max-w-3xl text-white/45"
          style={{
            fontSize: "20px",
            lineHeight: 1.9,
          }}
        >
          Unified reservations,
          guest management,
          tables, room allocation,
          event bookings and hospitality
          forecasting connected through
          one operational intelligence layer.
        </p>

        <div className="mt-16 grid gap-6 xl:grid-cols-4">

          {[
            "Table Reservations",
            "Hotel Bookings",
            "Events",
            "Guest Intelligence",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[30px] border border-white/10 bg-black/30 p-4 md:p-8 backdrop-blur-3xl"
            >

              <div className="mb-8 h-[1px] w-16 bg-gradient-to-r from-[#8B5CF6] to-transparent" />

              <div
                className="text-3xl"
                style={{
                  fontWeight: 250,
                  letterSpacing: "-0.04em",
                }}
              >
                {item}
              </div>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}
