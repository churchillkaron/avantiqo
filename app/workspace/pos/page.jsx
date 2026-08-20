"use client";

import { useState } from "react";
import {
  Banknote,
  Check,
  ChefHat,
  CreditCard,
  Minus,
  Plus,
  QrCode,
  ReceiptText,
  Send,
  Users,
} from "lucide-react";
import { useTranslation } from "@/app/providers/I18nProvider";
import {
  calculateOrderTotals,
  formatBaht,
  POS_CATALOG,
  POS_INITIAL_ORDERS,
  POS_TABLES,
} from "@/lib/operations/posCatalog";

const PAYMENT_METHODS = [
  { id: "card", label: "Card", icon: CreditCard },
  { id: "cash", label: "Cash", icon: Banknote },
  { id: "qr", label: "QR pay", icon: QrCode },
  { id: "account", label: "Guest account", icon: ReceiptText },
];

function cloneInitialOrders() {
  return Object.fromEntries(
    Object.entries(POS_INITIAL_ORDERS).map(([tableId, lines]) => [
      tableId,
      lines.map((line) => ({ ...line })),
    ]),
  );
}

function getStatusClasses(status) {
  if (status === "PAID") {
    return "bg-emerald-500/15 text-emerald-300";
  }

  if (status === "PAYMENT") {
    return "bg-amber-500/15 text-amber-300";
  }

  if (status === "SENT" || status === "WAITING") {
    return "bg-cyan-500/15 text-cyan-300";
  }

  return "bg-purple-500/15 text-purple-300";
}

export default function POSPage() {
  const { t } = useTranslation();
  const [selectedTable, setSelectedTable] = useState("T1");
  const [ordersByTable, setOrdersByTable] = useState(cloneInitialOrders);
  const [tableStatuses, setTableStatuses] = useState(() =>
    Object.fromEntries(POS_TABLES.map((table) => [table.id, table.status])),
  );
  const [paymentMethod, setPaymentMethod] = useState("");
  const [lastPayment, setLastPayment] = useState(null);
  const [receiptSequence, setReceiptSequence] = useState(1842);

  const catalog = POS_CATALOG.map((item) => ({
    ...item,
    name: t(item.nameKey),
    category: t(item.categoryKey),
    status: t(item.statusKey),
  }));
  const currentOrder = ordersByTable[selectedTable] ?? [];
  const currentLines = currentOrder.map((line) => ({
    ...line,
    item: catalog.find((catalogItem) => catalogItem.id === line.itemId),
  }));
  const totals = calculateOrderTotals(currentOrder);
  const selectedTableDetails = POS_TABLES.find((table) => table.id === selectedTable);

  function resetSettlement() {
    setPaymentMethod("");
    setLastPayment(null);
  }

  function handleSelectTable(tableId) {
    setSelectedTable(tableId);
    resetSettlement();
  }

  function handleAddItem(itemId) {
    setOrdersByTable((current) => {
      const order = current[selectedTable] ?? [];
      const existingLine = order.find((line) => line.itemId === itemId);
      const nextOrder = existingLine
        ? order.map((line) =>
            line.itemId === itemId
              ? { ...line, quantity: line.quantity + 1 }
              : line,
          )
        : [...order, { itemId, quantity: 1 }];

      return { ...current, [selectedTable]: nextOrder };
    });
    setTableStatuses((current) => ({ ...current, [selectedTable]: "ORDERING" }));
    resetSettlement();
  }

  function handleQuantityChange(itemId, change) {
    setOrdersByTable((current) => {
      const order = current[selectedTable] ?? [];
      const nextOrder = order
        .map((line) =>
          line.itemId === itemId
            ? { ...line, quantity: line.quantity + change }
            : line,
        )
        .filter((line) => line.quantity > 0);

      return { ...current, [selectedTable]: nextOrder };
    });
    setTableStatuses((current) => ({ ...current, [selectedTable]: "ORDERING" }));
    resetSettlement();
  }

  function handleSendOrder() {
    if (currentOrder.length === 0) {
      return;
    }

    setTableStatuses((current) => ({ ...current, [selectedTable]: "SENT" }));
    setLastPayment(null);
  }

  function handleCompletePayment() {
    if (!paymentMethod || totals.total === 0) {
      return;
    }

    setLastPayment({
      amount: totals.total,
      method: PAYMENT_METHODS.find((method) => method.id === paymentMethod)?.label,
      reference: `POS-${selectedTable}-${String(receiptSequence).padStart(6, "0")}`,
      table: selectedTable,
    });
    setReceiptSequence((current) => current + 1);
    setTableStatuses((current) => ({ ...current, [selectedTable]: "PAID" }));
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[32px] border border-white/[0.06] bg-gradient-to-br from-[#12091F] to-[#050816] p-6 xl:p-10">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <p className="mb-3 text-xs tracking-[0.3em] text-[#D6A66A]">
              {t("pos.hero.badge")}
            </p>
            <h1 className="text-4xl font-extralight tracking-[-0.05em] xl:text-7xl">
              Complete POS
            </h1>
            <p className="mt-4 max-w-3xl text-white/50">
              Tables, ordering, kitchen routing, service charge, and payment now run in one sale flow.
            </p>
          </div>

          <nav aria-label="POS sections" className="flex flex-wrap gap-2">
            {[
              ["Tables", "#tables"],
              ["Menu", "#menu"],
              ["Order", "#order"],
              ["Payment", "#payment"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/65 transition hover:border-purple-400/40 hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          ["Open tables", "14", "text-cyan-300"],
          ["Guests", "48", "text-purple-300"],
          ["Payment queue", "3", "text-amber-300"],
          ["Sales today", "฿201K", "text-emerald-300"],
        ].map(([label, value, color]) => (
          <div
            key={label}
            className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-4 xl:p-6"
          >
            <p className="text-xs text-white/65 xl:text-sm">{label}</p>
            <p className={`mt-3 text-3xl font-extralight xl:text-5xl ${color}`}>
              {value}
            </p>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1.2fr)_minmax(380px,0.8fr)]">
        <div className="space-y-5">
          <section
            id="tables"
            className="scroll-mt-8 rounded-[32px] border border-white/[0.05] bg-white/[0.03] p-5 xl:p-6"
          >
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
                  FLOOR + TABLES
                </p>
                <h2 className="text-3xl font-extralight">Select a table</h2>
              </div>
              <p className="text-sm text-white/65">All table activity stays inside POS</p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {POS_TABLES.map((table) => {
                const active = selectedTable === table.id;
                const tableTotal = calculateOrderTotals(ordersByTable[table.id] ?? []).total;
                const status = tableStatuses[table.id];

                return (
                  <button
                    key={table.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => handleSelectTable(table.id)}
                    className={`rounded-3xl border p-4 text-left transition xl:p-5 ${
                      active
                        ? "border-purple-400/50 bg-purple-500/15 shadow-[0_0_35px_rgba(139,92,246,0.16)]"
                        : "border-white/[0.06] bg-black/20 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-3xl font-extralight">{table.id}</span>
                      <span className={`rounded-full px-2.5 py-1 text-[10px] ${getStatusClasses(status)}`}>
                        {status}
                      </span>
                    </div>
                    <div className="mt-5 flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1.5 text-white/65">
                        <Users aria-hidden="true" size={14} />
                        {table.guests}
                      </span>
                      <span className="text-white/75">{formatBaht(tableTotal)}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          <section
            id="menu"
            className="scroll-mt-8 rounded-[32px] border border-white/[0.05] bg-white/[0.03] p-5 xl:p-6"
          >
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
                  {t("pos.menu.badge")}
                </p>
                <h2 className="text-3xl font-extralight">{t("pos.menu.title")}</h2>
              </div>
              <span className="rounded-full bg-amber-500/10 px-3 py-2 text-xs text-amber-300">
                {t("pos.menu.aiPricing")}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {catalog.map((item) => (
                <article
                  key={item.id}
                  className="rounded-3xl border border-white/[0.05] bg-black/20 p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xl font-extralight">{item.name}</p>
                      <p className="mt-2 text-xs text-white/60">
                        {item.category} · {item.station}
                      </p>
                    </div>
                    <p className="text-xl font-extralight text-green-300">
                      {formatBaht(item.price)}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="text-[11px] text-purple-300">{item.status}</span>
                    <button
                      type="button"
                      onClick={() => handleAddItem(item.id)}
                      className="flex items-center gap-2 rounded-2xl border border-green-500/20 bg-green-500/10 px-4 py-2.5 text-sm text-green-300 transition hover:bg-green-500/20"
                    >
                      <Plus aria-hidden="true" size={16} />
                      {t("pos.menu.add")}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-5">
          <section
            id="order"
            className="scroll-mt-8 rounded-[32px] border border-green-500/20 bg-green-500/10 p-5 xl:p-6"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
                  {t("pos.order.badge")}
                </p>
                <h2 className="text-3xl font-extralight">Table {selectedTable}</h2>
                <p className="mt-2 text-sm text-white/60">
                  {selectedTableDetails?.guests ?? 0} guests
                </p>
              </div>
              <span className={`rounded-full px-3 py-2 text-xs ${getStatusClasses(tableStatuses[selectedTable])}`}>
                {tableStatuses[selectedTable]}
              </span>
            </div>

            <div className="space-y-3">
              {currentLines.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-white/10 bg-black/15 p-8 text-center text-sm text-white/60">
                  Select an item from the menu to start this table.
                </div>
              ) : (
                currentLines.map((line) => (
                  <div key={line.itemId} className="rounded-2xl bg-black/20 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-lg font-extralight">{line.item?.name}</p>
                        <p className="mt-1 text-xs text-white/60">
                          {line.item?.station} routing · {formatBaht(line.item?.price ?? 0)} each
                        </p>
                      </div>
                      <p className="text-lg text-green-300">
                        {formatBaht((line.item?.price ?? 0) * line.quantity)}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <button
                        type="button"
                        aria-label={`Remove one ${line.item?.name}`}
                        onClick={() => handleQuantityChange(line.itemId, -1)}
                        className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-white/60 hover:text-white"
                      >
                        <Minus aria-hidden="true" size={15} />
                      </button>
                      <span className="min-w-8 text-center">{line.quantity}</span>
                      <button
                        type="button"
                        aria-label={`Add one ${line.item?.name}`}
                        onClick={() => handleQuantityChange(line.itemId, 1)}
                        className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-white/60 hover:text-white"
                      >
                        <Plus aria-hidden="true" size={15} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center justify-between text-white/60">
                <span>{t("pos.order.subtotal")}</span>
                <span>{formatBaht(totals.subtotal)}</span>
              </div>
              <div className="flex items-center justify-between text-white/60">
                <span>{t("pos.order.serviceCharge")} (10%)</span>
                <span>{formatBaht(totals.serviceCharge)}</span>
              </div>
              <div className="h-px bg-white/[0.08]" />
              <div className="flex items-center justify-between">
                <span className="text-lg">{t("pos.order.total")}</span>
                <span className="text-3xl font-extralight text-green-300">
                  {formatBaht(totals.total)}
                </span>
              </div>
            </div>

            <button
              type="button"
              disabled={currentOrder.length === 0}
              onClick={handleSendOrder}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-4 text-cyan-300 transition hover:bg-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChefHat aria-hidden="true" size={18} />
              {t("pos.order.send")} · Kitchen + bar
            </button>
          </section>

          <section
            id="payment"
            className="scroll-mt-8 rounded-[32px] border border-purple-500/20 bg-purple-500/10 p-5 xl:p-6"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
                  PAYMENT + RECEIPT
                </p>
                <h2 className="text-3xl font-extralight">Settle in POS</h2>
              </div>
              <ReceiptText aria-hidden="true" className="text-purple-300" size={26} />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {PAYMENT_METHODS.map((method) => {
                const Icon = method.icon;
                const active = paymentMethod === method.id;

                return (
                  <button
                    key={method.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => {
                      setPaymentMethod(method.id);
                      setLastPayment(null);
                    }}
                    className={`flex items-center gap-2 rounded-2xl border p-3 text-left text-sm transition ${
                      active
                        ? "border-purple-300/50 bg-purple-500/20 text-white"
                        : "border-white/[0.06] bg-black/20 text-white/55 hover:text-white"
                    }`}
                  >
                    <Icon aria-hidden="true" size={17} />
                    {method.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 rounded-2xl bg-black/20 p-4">
              <div className="flex items-center justify-between text-sm text-white/50">
                <span>Amount due · Table {selectedTable}</span>
                <span>VAT included</span>
              </div>
              <p className="mt-3 text-4xl font-extralight text-white">
                {formatBaht(totals.total)}
              </p>
            </div>

            {lastPayment?.table === selectedTable && (
              <div role="status" className="mt-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-emerald-200">
                <div className="flex items-center gap-2">
                  <Check aria-hidden="true" size={18} />
                  <span>Payment complete · {lastPayment.method}</span>
                </div>
                <p className="mt-2 text-xs text-emerald-200/60">
                  {lastPayment.reference} · {formatBaht(lastPayment.amount)}
                </p>
              </div>
            )}

            <button
              type="button"
              disabled={!paymentMethod || totals.total === 0}
              onClick={handleCompletePayment}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#D6A66A] via-[#C084FC] to-[#7C5CFA] px-4 py-4 text-sm font-medium text-white shadow-[0_0_35px_rgba(139,92,246,0.22)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send aria-hidden="true" size={17} />
              Complete payment + issue receipt
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
