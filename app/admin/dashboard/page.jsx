"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [stats, setStats] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const response = await fetch(
        "/api/platform/dashboard"
      );

      const result =
        await response.json();

      if (result.success) {
        setStats(result.stats);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#050407] p-8 text-white">

      <div className="mb-12">

        <div className="text-5xl font-bold">
          Platform Command Center
        </div>

        <div className="mt-3 text-zinc-400">
          Enterprise SaaS operations
          and infrastructure overview
        </div>

      </div>

      {loading ? (
        <div className="text-zinc-500">
          Loading dashboard...
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          <Card
            title="Leads"
            value={stats?.leads}
          />

          <Card
            title="Tenants"
            value={stats?.tenants}
          />

          <Card
            title="Users"
            value={stats?.users}
          />

          <Card
            title="Modules"
            value={stats?.modules}
          />

          <Card
            title="Subscriptions"
            value={
              stats?.subscriptions
            }
          />

          <Card
  title="MRR"
  value={`${stats?.currencySymbol || "฿"}${stats?.monthlyRevenue || 0}`}
/>

        </div>
      )}

    </main>
  );
}

function Card({
  title,
  value,
}) {
  return (
    <div className="rounded-3xl border border-white/[0.06] bg-white/5 p-8 backdrop-blur-md">

      <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
        {title}
      </div>

      <div className="mt-5 text-5xl font-bold">
        {value}
      </div>

    </div>
  );
}
