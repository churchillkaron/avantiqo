"use client";

import { useEffect, useMemo, useState } from "react";

const FILTERS = [
  "all",
  "started",
  "billing_created",
  "provisioned",
  "archived",
];

export default function LeadsPage() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filter, setFilter] =
    useState("all");

  useEffect(() => {
    loadLeads();
  }, []);

  async function loadLeads() {
    try {
      const response = await fetch(
        "/api/platform/leads"
      );

      const result =
        await response.json();

      if (result.success) {
        setLeads(result.leads || []);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const filteredLeads =
    useMemo(() => {
      if (filter === "all") {
        return leads;
      }

      return leads.filter(
        (lead) =>
          lead.status === filter
      );
    }, [leads, filter]);

  return (
    <main className="min-h-screen bg-[#050407] p-8 text-white">

      <div className="mb-10">

        <div className="text-5xl font-bold">
          Organization Leads
        </div>

        <div className="mt-3 text-zinc-400">
          Enterprise onboarding pipeline
          and provisioning control
        </div>

      </div>

      <div className="mb-8 flex flex-wrap gap-3">

        {FILTERS.map((item) => (
          <button
            key={item}
            onClick={() =>
              setFilter(item)
            }
            className={`rounded-2xl px-5 py-3 text-sm font-semibold transition ${
              filter === item
                ? "bg-gradient-to-r from-[#d7b66a] to-[#7c3aed] text-black"
                : "border border-white/[0.06] bg-white/5 text-zinc-300 hover:bg-white/10"
            }`}
          >
            {item}
          </button>
        ))}

      </div>

      {loading ? (
        <div className="text-zinc-500">
          Loading leads...
        </div>
      ) : filteredLeads.length === 0 ? (
        <div className="rounded-3xl border border-white/[0.06] bg-white/5 p-6 md:p-10 text-zinc-400">
          No leads found.
        </div>
      ) : (
        <div className="grid gap-6">

          {filteredLeads.map(
            (lead) => (
              <div
                key={lead.id}
                className="rounded-3xl border border-white/[0.06] bg-white/5 p-6 backdrop-blur-md"
              >

                <div className="flex items-start justify-between">

                  <div>

                    <div className="text-2xl font-bold">
                      {lead.company ||
                        "Unnamed Organization"}
                    </div>

                    <div className="mt-2 text-zinc-400">
                      {lead.contact}
                    </div>

                  </div>

                  <div className="rounded-full border border-[#d7b66a]/30 bg-[#d7b66a]/10 px-4 py-2 text-sm text-[#f4dfaa]">
                    {lead.status}
                  </div>

                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">

                  <Info
                    label="Email"
                    value={lead.email}
                  />

                  <Info
                    label="Phone"
                    value={lead.phone}
                  />

                  <Info
                    label="Country"
                    value={lead.country}
                  />

                  <Info
                    label="Industry"
                    value={lead.industry}
                  />

                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">

                  <Info
                    label="Billing"
                    value={
                      lead.billing_cycle
                    }
                  />

                  <Info
                    label="Monthly Value"
                    value={
                      lead.final_monthly_total
                    }
                  />

                  <Info
                    label="Created"
                    value={new Date(
                      lead.created_at
                    ).toLocaleDateString()}
                  />

                </div>

                <div className="mt-6 flex flex-wrap gap-3">

                  <button
                    onClick={async () => {
                      try {
                        const response =
                          await fetch(
                            "/api/platform/billing",
                            {
                              method:
                                "POST",

                              headers:
                                {
                                  "Content-Type":
                                    "application/json",
                                },

                              body: JSON.stringify(
                                {
                                  lead_id:
                                    lead.id,
                                }
                              ),
                            }
                          );

                        const result =
                          await response.json();

                        alert(
                          result.message ||
                            "Billing created."
                        );

                        loadLeads();
                      } catch (error) {
                        console.error(
                          error
                        );
                      }
                    }}
                    className="rounded-2xl bg-gradient-to-r from-[#d7b66a] to-[#7c3aed] px-5 py-3 font-semibold text-black transition hover:opacity-90"
                  >
                    Create Billing
                  </button>

                  <button
                    onClick={async () => {
                      try {
                        const response =
                          await fetch(
                            "/api/platform/provision",
                            {
                              method:
                                "POST",

                              headers:
                                {
                                  "Content-Type":
                                    "application/json",
                                },

                              body: JSON.stringify(
                                {
                                  lead_id:
                                    lead.id,
                                }
                              ),
                            }
                          );

                        const result =
                          await response.json();

                        alert(
                          result.message ||
                            "Provisioned."
                        );

                        loadLeads();
                      } catch (error) {
                        console.error(
                          error
                        );
                      }
                    }}
                    className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
                  >
                    Provision Tenant
                  </button>

                  <button
                    onClick={async () => {
                      try {
                        const response =
                          await fetch(
                            "/api/platform/leads/archive",
                            {
                              method:
                                "POST",

                              headers:
                                {
                                  "Content-Type":
                                    "application/json",
                                },

                              body: JSON.stringify(
                                {
                                  lead_id:
                                    lead.id,
                                }
                              ),
                            }
                          );

                        const result =
                          await response.json();

                        alert(
                          result.message ||
                            "Archived."
                        );

                        loadLeads();
                      } catch (error) {
                        console.error(
                          error
                        );
                      }
                    }}
                    className="rounded-2xl border border-red-500/30 bg-red-500/10 px-5 py-3 font-semibold text-red-300 transition hover:bg-red-500/20"
                  >
                    Archive
                  </button>

                </div>

              </div>
            )
          )}

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
        {value || "-"}
      </div>

    </div>
  );
}
