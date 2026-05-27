"use client";

import { useEffect, useState } from "react";

export default function AuditPage() {
  const [logs, setLogs] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadLogs();
  }, []);

  async function loadLogs() {
    try {
      const response = await fetch(
        "/api/platform/audit"
      );

      const result =
        await response.json();

      if (result.success) {
        setLogs(
          result.logs || []
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
          Audit Infrastructure
        </div>

        <div className="mt-3 text-zinc-400">
          Enterprise operational
          traceability and activity
          logging
        </div>

      </div>

      {loading ? (
        <div className="text-zinc-500">
          Loading audit logs...
        </div>
      ) : logs.length === 0 ? (
        <div className="rounded-3xl border border-white/[0.05] bg-white/5 p-6 md:p-10 text-zinc-400">
          No audit events found.
        </div>
      ) : (
        <div className="grid gap-4">

          {logs.map((log) => (
            <div
              key={log.id}
              className="rounded-2xl border border-white/[0.05] bg-white/5 p-5"
            >

              <div className="flex items-start justify-between gap-6">

                <div>

                  <div className="text-lg font-semibold">
                    {log.action}
                  </div>

                  <div className="mt-2 text-sm text-zinc-400">
                    {log.entity_type}
                    {" • "}
                    {log.entity_id}
                  </div>

                </div>

                <div className="text-sm text-zinc-500">
                  {new Date(
                    log.created_at
                  ).toLocaleString()}
                </div>

              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">

                <Info
                  label="Tenant"
                  value={log.tenant_id}
                />

                <Info
                  label="Actor"
                  value={log.actor_email}
                />

                <Info
                  label="Severity"
                  value={log.severity}
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
    <div className="rounded-xl border border-white/5 bg-black/30 p-4">

      <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </div>

      <div className="mt-2 text-white break-all">
        {String(value || "-")}
      </div>

    </div>
  );
}
