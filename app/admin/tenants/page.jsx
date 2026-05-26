"use client";

import { useEffect, useState } from "react";

export default function TenantsPage() {
  const [tenants, setTenants] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadTenants();
  }, []);

  async function loadTenants() {
    try {
      const response = await fetch(
        "/api/platform/tenants"
      );

      const result =
        await response.json();

      if (result.success) {
        setTenants(
          result.tenants || []
        );
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#050407] p-4 md:p-8 text-white">

      <div className="mb-10">

        <div className="text-5xl font-bold">
          Tenant Infrastructure
        </div>

        <div className="mt-3 text-zinc-400">
          Active organization
          management and platform
          operations
        </div>

      </div>

      {loading ? (
        <div className="text-zinc-500">
          Loading tenants...
        </div>
      ) : tenants.length === 0 ? (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-10 text-zinc-400">
          No tenants provisioned.
        </div>
      ) : (
        <div className="grid gap-6">

          {tenants.map((tenant) => (
            <div
              key={tenant.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >

              <div className="flex items-start justify-between">

                <div>

                  <div className="text-2xl font-bold">
                    {tenant.name}
                  </div>

                  <div className="mt-2 text-zinc-400">
                    {tenant.tenant_id}
                  </div>

                </div>

                <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
                  {tenant.subscription_status}
                </div>

              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">

                <Info
                  label="Plan"
                  value={tenant.plan}
                />

                <Info
                  label="Setup Step"
                  value={tenant.setup_step}
                />

                <Info
                  label="Setup Complete"
                  value={
                    tenant.setup_complete
                      ? "Yes"
                      : "No"
                  }
                />

                <Info
                  label="Created"
                  value={new Date(
                    tenant.created_at
                  ).toLocaleDateString()}
                />

              </div>

            </div>
          ))}

        </div>
      )}

    </main>
  );
}

function Info({
  label,
  value,
}) {
  return (
    <div className="rounded-2xl border border-white/5 bg-black/30 p-4">

      <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </div>

      <div className="mt-2 text-white">
        {String(value || "-")}
      </div>

    </div>
  );
}
