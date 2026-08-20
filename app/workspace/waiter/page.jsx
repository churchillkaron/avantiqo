"use client";

import { useState } from "react";
import {
  Check,
  ChevronRight,
  Clock3,
  Minus,
  Plus,
  Send,
  Smartphone,
  Users,
  Wifi,
} from "lucide-react";
import { useTranslation } from "@/app/providers/I18nProvider";
import {
  calculateOrderTotals,
  formatBaht,
  POS_CATALOG,
  POS_TABLES,
} from "@/lib/operations/posCatalog";

const VIEWS = [
  { id: "tables", label: "Tables" },
  { id: "menu", label: "Menu" },
  { id: "order", label: "Order" },
];

export default function WaiterPage() {
  const { t } = useTranslation();
  const [activeView, setActiveView] = useState("tables");
  const [selectedTable, setSelectedTable] = useState("T4");
  const [ordersByTable, setOrdersByTable] = useState(() =>
    Object.fromEntries(POS_TABLES.map((table) => [table.id, []])),
  );
  const [sentTable, setSentTable] = useState("");

  const catalog = POS_CATALOG.map((item) => ({
    ...item,
    name: t(item.nameKey),
    category: t(item.categoryKey),
  }));
  const currentOrder = ordersByTable[selectedTable] ?? [];
  const totals = calculateOrderTotals(currentOrder);

  function handleSelectTable(tableId) {
    setSelectedTable(tableId);
    setSentTable("");
    setActiveView("menu");
  }

  function handleAddItem(itemId) {
    setOrdersByTable((current) => {
      const order = current[selectedTable] ?? [];
      const existing = order.find((line) => line.itemId === itemId);
      const nextOrder = existing
        ? order.map((line) =>
            line.itemId === itemId
              ? { ...line, quantity: line.quantity + 1 }
              : line,
          )
        : [...order, { itemId, quantity: 1 }];

      return { ...current, [selectedTable]: nextOrder };
    });
    setSentTable("");
  }

  function handleQuantityChange(itemId, change) {
    setOrdersByTable((current) => ({
      ...current,
      [selectedTable]: (current[selectedTable] ?? [])
        .map((line) =>
          line.itemId === itemId
            ? { ...line, quantity: line.quantity + change }
            : line,
        )
        .filter((line) => line.quantity > 0),
    }));
    setSentTable("");
  }

  function handleSendOrder() {
    if (currentOrder.length === 0) {
      return;
    }

    setSentTable(selectedTable);
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-8 xl:grid-cols-[0.8fr_1.2fr] xl:items-center">
      <section className="hidden xl:block">
        <p className="text-xs tracking-[0.3em] text-[#D6A66A]">MOBILE OPERATIONS</p>
        <h1 className="mt-4 text-6xl font-extralight tracking-[-0.055em]">
          Waiter is the phone experience.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
          Staff can open a table, build an order, and route it to kitchen and bar without carrying the full desktop POS around the floor.
        </p>

        <div className="mt-8 grid grid-cols-3 gap-3">
          {["Choose table", "Take order", "Send to stations"].map((step, index) => (
            <div
              key={step}
              className="rounded-3xl border border-white/[0.06] bg-white/[0.03] p-4"
            >
              <span className="text-xs text-purple-300">0{index + 1}</span>
              <p className="mt-3 text-sm text-white/65">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        aria-label="Waiter mobile workspace"
        className="mx-auto w-full max-w-[480px] overflow-hidden rounded-[36px] border border-white/10 bg-[#050713] shadow-[0_35px_100px_rgba(0,0,0,0.55)] xl:rounded-[48px]"
      >
        <header className="border-b border-white/[0.06] bg-gradient-to-br from-purple-500/15 via-transparent to-amber-500/10 px-5 pb-5 pt-4">
          <div className="flex items-center justify-between text-[11px] text-white/65">
            <span className="flex items-center gap-1.5">
              <Clock3 aria-hidden="true" size={13} />
              18:42
            </span>
            <span className="flex items-center gap-1.5">
              <Wifi aria-hidden="true" size={13} />
              LIVE
            </span>
          </div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.22em] text-[#D6A66A]">WAITER SHIFT</p>
              <h1 className="mt-2 text-3xl font-extralight">Good evening, Alex</h1>
              <p className="mt-2 text-sm text-white/60">Main floor · 6 assigned tables</p>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-500/15 text-purple-200">
              <Smartphone aria-hidden="true" size={22} />
            </div>
          </div>
        </header>

        <div className="p-4 pb-6">
          <nav aria-label="Waiter order steps" className="grid grid-cols-3 rounded-2xl bg-white/[0.04] p-1">
            {VIEWS.map((view) => {
              const active = activeView === view.id;

              return (
                <button
                  key={view.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveView(view.id)}
                  className={`rounded-xl px-3 py-2.5 text-xs transition ${
                    active
                      ? "bg-white/[0.09] text-white shadow-sm"
                      : "text-white/60"
                  }`}
                >
                  {view.label}
                  {view.id === "order" && currentOrder.length > 0 && (
                    <span className="ml-1.5 rounded-full bg-purple-500/25 px-1.5 py-0.5 text-[10px] text-purple-200">
                      {currentOrder.reduce((sum, line) => sum + line.quantity, 0)}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {activeView === "tables" && (
            <div className="mt-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs tracking-[0.2em] text-[#D6A66A]">MY FLOOR</p>
                  <h2 className="mt-2 text-2xl font-extralight">Choose a table</h2>
                </div>
                <span className="text-xs text-green-300">14 active</span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {POS_TABLES.map((table) => {
                  const active = selectedTable === table.id;
                  const itemCount = (ordersByTable[table.id] ?? []).reduce(
                    (sum, line) => sum + line.quantity,
                    0,
                  );

                  return (
                    <button
                      key={table.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => handleSelectTable(table.id)}
                      className={`rounded-3xl border p-4 text-left transition ${
                        active
                          ? "border-purple-400/50 bg-purple-500/15"
                          : "border-white/[0.06] bg-white/[0.025]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-2xl font-extralight">{table.id}</span>
                        <ChevronRight aria-hidden="true" className="text-white/25" size={17} />
                      </div>
                      <div className="mt-4 flex items-center justify-between text-[11px] text-white/60">
                        <span className="flex items-center gap-1">
                          <Users aria-hidden="true" size={12} />
                          {table.guests}
                        </span>
                        <span>{itemCount > 0 ? `${itemCount} items` : table.status}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {activeView === "menu" && (
            <div className="mt-5">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs tracking-[0.2em] text-[#D6A66A]">TABLE {selectedTable}</p>
                  <h2 className="mt-2 text-2xl font-extralight">Add to order</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveView("tables")}
                  className="text-xs text-purple-300"
                >
                  Change table
                </button>
              </div>

              <div className="mt-4 space-y-3">
                {catalog.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleAddItem(item.id)}
                    className="flex w-full items-center justify-between gap-4 rounded-3xl border border-white/[0.06] bg-white/[0.025] p-4 text-left transition active:scale-[0.99] active:bg-white/[0.05]"
                  >
                    <div>
                      <p className="text-base text-white/85">{item.name}</p>
                      <p className="mt-1 text-xs text-white/60">
                        {item.category} · {item.station}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-green-300">{formatBaht(item.price)}</span>
                      <span className="rounded-xl bg-green-500/10 p-2 text-green-300">
                        <Plus aria-hidden="true" size={15} />
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <button
                type="button"
                disabled={currentOrder.length === 0}
                onClick={() => setActiveView("order")}
                className="mt-5 w-full rounded-2xl bg-purple-500/20 px-4 py-3.5 text-sm text-purple-100 disabled:opacity-35"
              >
                Review order · {formatBaht(totals.total)}
              </button>
            </div>
          )}

          {activeView === "order" && (
            <div className="mt-5">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs tracking-[0.2em] text-[#D6A66A]">TABLE {selectedTable}</p>
                  <h2 className="mt-2 text-2xl font-extralight">Review order</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveView("menu")}
                  className="text-xs text-purple-300"
                >
                  Add items
                </button>
              </div>

              <div className="mt-4 space-y-3">
                {currentOrder.length === 0 ? (
                  <div className="rounded-3xl border border-dashed border-white/10 p-8 text-center text-sm text-white/60">
                    No items yet. Open the menu to start the order.
                  </div>
                ) : (
                  currentOrder.map((line) => {
                    const item = catalog.find((catalogItem) => catalogItem.id === line.itemId);

                    return (
                      <div
                        key={line.itemId}
                        className="rounded-3xl border border-white/[0.06] bg-white/[0.025] p-4"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p>{item?.name}</p>
                            <p className="mt-1 text-xs text-white/60">Route to {item?.station}</p>
                          </div>
                          <span className="text-sm text-green-300">
                            {formatBaht((item?.price ?? 0) * line.quantity)}
                          </span>
                        </div>
                        <div className="mt-3 flex items-center gap-2">
                          <button
                            type="button"
                            aria-label={`Remove one ${item?.name}`}
                            onClick={() => handleQuantityChange(line.itemId, -1)}
                            className="rounded-xl border border-white/10 p-2 text-white/50"
                          >
                            <Minus aria-hidden="true" size={14} />
                          </button>
                          <span className="min-w-7 text-center text-sm">{line.quantity}</span>
                          <button
                            type="button"
                            aria-label={`Add one ${item?.name}`}
                            onClick={() => handleQuantityChange(line.itemId, 1)}
                            className="rounded-xl border border-white/10 p-2 text-white/50"
                          >
                            <Plus aria-hidden="true" size={14} />
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              <div className="mt-5 rounded-3xl bg-white/[0.04] p-4">
                <div className="flex justify-between text-xs text-white/60">
                  <span>Subtotal + service</span>
                  <span>POS calculates payment</span>
                </div>
                <div className="mt-3 flex items-end justify-between">
                  <span className="text-sm text-white/60">Order total</span>
                  <span className="text-3xl font-extralight text-green-300">
                    {formatBaht(totals.total)}
                  </span>
                </div>
              </div>

              {sentTable === selectedTable && (
                <div role="status" className="mt-4 rounded-2xl border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-200">
                  <div className="flex items-center gap-2">
                    <Check aria-hidden="true" size={17} />
                    Order sent to kitchen and bar
                  </div>
                </div>
              )}

              <button
                type="button"
                disabled={currentOrder.length === 0}
                onClick={handleSendOrder}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#D6A66A] via-[#C084FC] to-[#7C5CFA] px-4 py-4 text-sm font-medium text-white disabled:opacity-35"
              >
                <Send aria-hidden="true" size={16} />
                Send to kitchen + bar
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
