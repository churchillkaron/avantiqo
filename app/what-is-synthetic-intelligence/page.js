"use client";

import SiteTopNav from "@/app/components/SiteTopNav";

export default function Page() {
  return (
    <>
      <SiteTopNav />

      <main className="min-h-screen bg-[#02030A] text-white px-6 pt-40">

        <div className="mx-auto max-w-7xl">

          <p className="text-xs tracking-[0.35em] text-[#D6A66A]">
            SYNTHETIC INTELLIGENCE
          </p>

          <h1 className="mt-8 text-7xl font-extralight tracking-[-0.06em]">
            Software Stores Information.
            <br />
            AI Generates Information.
            <br />
            Synthetic Intelligence
            <br />
            Operates Businesses.
          </h1>

          <p className="mt-10 max-w-4xl text-xl leading-10 text-white/60">
            Synthetic Intelligence connects
            Business Reality,
            Financial Intelligence,
            Enterprise Memory,
            Governance,
            Accounting,
            Operations,
            Workforce,
            Documents
            and Execution into one
            continuously learning system.
          </p>

        </div>

      </main>

    </>
  );
}
