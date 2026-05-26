"use client";

import { useEffect, useState } from "react";

export default function BillingPage() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBilling();
  }, []);

  async function loadBilling() {
    try {
      const response = await fetch("/api/platform/billing");
      const result = await response.json();

      if (result.success) {
        setSubscriptions(result.subscriptions || []);
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
        <div className="text-5xl font-bold">Billing Engine</div>
        <div className="mt-3 text-zinc-400">
          Subscriptions, invoices, and SaaS activation control
        </div>
      </div>

      {loading ? (
        <div className="text-zinc-500">Loading billing...</div>
      ) : subscriptions.length === 0 ? (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-zinc-400">
          No subscriptions created yet.
        </div>
      ) : (
        <div className="grid gap-6">
          {subscriptions.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-2xl font-bold">
                    {item.company || "Unnamed Organization"}
                  </div>
                  <div className="mt-2 text-zinc-400">{item.email}</div>
                </div>

                <div className="rounded-full border border-[#d7b66a]/30 bg-[#d7b66a]/10 px-4 py-2 text-sm text-[#f4dfaa]">
                  {item.status}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
                <Info label="Billing Cycle" value={item.billing_cycle} />
                <Info label="Currency" value={item.currency} />
                <Info label="Monthly" value={item.final_monthly_total} />
                <Info label="Yearly" value={item.final_yearly_total} />
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                <Info label="Subtotal" value={item.subtotal} />
                <Info label="Discount" value={item.discount_total} />
                <Info
                  label="Modules"
                  value={
                    Array.isArray(item.selected_modules)
                      ? item.selected_modules.length
                      : 0
                  }
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

function Info({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-black/30 p-4">
      <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </div>
      <div className="mt-2 text-white">{value || "-"}</div>
    </div>
  );
}
