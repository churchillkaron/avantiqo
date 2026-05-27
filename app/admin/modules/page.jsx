"use client";

import { useEffect, useState } from "react";

export default function ModulesPage() {
  const [modules, setModules] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadModules();
  }, []);

  async function loadModules() {
    try {
      const response = await fetch(
        "/api/platform/modules"
      );

      const result =
        await response.json();

      if (result.success) {
        setModules(
          result.modules || []
        );
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#050407] p-8 text-white">

      <div className="mb-10">

        <div className="text-5xl font-bold">
          Tenant Modules
        </div>

        <div className="mt-3 text-zinc-400">
          SaaS entitlement and
          feature activation control
        </div>

      </div>

      {loading ? (
        <div className="text-zinc-500">
          Loading modules...
        </div>
      ) : modules.length === 0 ? (
        <div className="rounded-3xl border border-white/[0.06] bg-white/5 p-6 md:p-10 text-zinc-400">
          No modules found.
        </div>
      ) : (
        <div className="grid gap-6">

          {modules.map((module) => (
            <div
              key={module.id}
              className="rounded-3xl border border-white/[0.06] bg-white/5 p-6 backdrop-blur-md"
            >

              <div className="flex items-start justify-between">

                <div>

                  <div className="text-2xl font-bold">
                    {module.module_id}
                  </div>

                  <div className="mt-2 text-zinc-400">
                    Tenant:
                    {" "}
                    {module.tenant_id}
                  </div>

                </div>

                <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
                  {module.status}
                </div>

              </div>

            </div>
          ))}

        </div>
      )}

    </main>
  );
}
