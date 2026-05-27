"use client";

const procurement = [
  {
    vendor: "Ocean Seafood",
    item: "Sea Bass",
    status: "APPROVED",
  },
  {
    vendor: "Wine Supplier",
    item: "Red Wine",
    status: "PENDING",
  },
  {
    vendor: "Farm Fresh",
    item: "Vegetables",
    status: "RECEIVED",
  },
];

export default function ProcurementPage() {
  return (
    <main className="min-h-screen bg-[#02040A] p-8 text-white">

      <p className="mb-3 text-xs tracking-[0.24em] text-[#D6A66A]">
        PROCUREMENT RUNTIME
      </p>

      <h1 className="mb-10 text-6xl font-extralight tracking-[-0.06em]">
        Procurement Flow
      </h1>

      <div className="space-y-4">

        {procurement.map((row) => (

          <div
            key={row.vendor}
            className="flex items-center justify-between rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6"
          >

            <div>

              <p className="text-2xl text-white/80">
                {row.vendor}
              </p>

              <p className="text-sm text-white/40">
                {row.item}
              </p>

            </div>

            <span className="text-sm text-purple-300">
              {row.status}
            </span>

          </div>

        ))}

      </div>

    </main>
  );
}
