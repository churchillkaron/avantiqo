"use client";

const tables = [
  { table: "T1", status: "OPEN" },
  { table: "T2", status: "WAITING" },
  { table: "T3", status: "SERVED" },
  { table: "T4", status: "ORDERING" },
  { table: "T5", status: "OPEN" },
  { table: "T6", status: "WAITING" },
];

export default function TablesPage() {
  return (
    <main className="min-h-screen bg-[#02040A] p-8 text-white">

      <p className="mb-3 text-xs tracking-[0.24em] text-[#D6A66A]">
        TABLE RUNTIME
      </p>

      <h1 className="mb-10 text-6xl font-extralight tracking-[-0.06em]">
        Live Restaurant Floor
      </h1>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3">

        {tables.map((table) => (

          <div
            key={table.table}
            className="rounded-[40px] border border-white/[0.05] bg-white/[0.03] p-10 text-center"
          >

            <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full border border-purple-500/20 bg-purple-500/10">

              <h2 className="text-4xl font-extralight">
                {table.table}
              </h2>

            </div>

            <p className="text-white/70">
              {table.status}
            </p>

          </div>

        ))}

      </div>

    </main>
  );
}
