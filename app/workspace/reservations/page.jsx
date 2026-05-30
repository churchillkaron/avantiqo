"use client";

import { useTranslation } from "@/app/providers/I18nProvider";



export default function ReservationsPage() {

  const { t } = useTranslation();

  const reservations = [
    {
      name: "Michael Carter",
      guests: 4,
      time: "19:30",
      table: "T12",
      status: "CONFIRMED",
    },
    {
      name: "Sophia Lee",
      guests: 2,
      time: "20:00",
      table: "T7",
      status: "VIP",
    },
    {
      name: "Yona Events",
      guests: 8,
      time: "21:00",
      table: "Private Room",
      status: "GROUP",
    },
  ];




    return (
    <div className="space-y-6">

      <div className="rounded-[32px] border border-indigo-500/10 bg-gradient-to-br from-[#0B1020] to-[#050816] p-6 xl:p-10">

        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

          <div>

            <p className="mb-3 text-xs tracking-[0.3em] text-[#D6A66A]">
              {t("reservations.hero.badge")}
            </p>

            <h1 className="text-3xl font-extralight tracking-[-0.05em] xl:text-7xl">
              {t("reservations.hero.title")}
            </h1>

            <p className="mt-4 max-w-3xl text-white/50">
              {t("reservations.hero.description")}
            </p>

          </div>

          <div className="rounded-3xl border border-green-500/20 bg-green-500/10 px-6 py-5">

            <div className="text-sm text-green-300">
              {t("reservations.hero.statusLabel")}
            </div>

            <div className="mt-2 text-3xl font-extralight text-white">
              {t("reservations.status.live")}
            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-4">

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("reservations.cards.today.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-cyan-300">
            42
          </div>

          <p className="mt-3 text-sm text-cyan-300">
            {t("reservations.cards.today.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("reservations.cards.guests.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-green-400">
            128
          </div>

          <p className="mt-3 text-sm text-green-300">
            {t("reservations.cards.guests.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("reservations.cards.spend.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-purple-300">
            ฿2.4K
          </div>

          <p className="mt-3 text-sm text-purple-300">
            {t("reservations.cards.spend.description")}
          </p>

        </div>

        <div className="rounded-3xl border border-white/[0.05] bg-white/[0.03] p-6">

          <p className="text-sm text-white/40">
            {t("reservations.cards.waitlist.title")}
          </p>

          <div className="mt-4 text-5xl font-extralight text-amber-300">
            6
          </div>

          <p className="mt-3 text-sm text-amber-300">
            {t("reservations.cards.waitlist.description")}
          </p>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">

        {reservations.map((reservation) => (
          <div
            key={reservation.name}
            className="rounded-[32px] border border-white/[0.05] bg-white/[0.03] p-6"
          >

            <div className="mb-6 flex items-center justify-between">

              <div>

                <p className="mb-2 text-xs tracking-[0.24em] text-[#D6A66A]">
                  {t("reservations.status.live")} RESERVATION
                </p>

                <h2 className="text-3xl font-extralight">
                  {reservation.name}
                </h2>

              </div>

              <div className="rounded-full bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
                {reservation.status}
              </div>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-black/20 p-4">

                <p className="text-sm text-white/40">
                  {t("reservations.runtime.table")}
                </p>

                <div className="mt-2 text-2xl font-extralight">
                  {reservation.table}
                </div>

              </div>

              <div className="rounded-2xl bg-black/20 p-4">

                <p className="text-sm text-white/40">
                  {t("reservations.runtime.guests")}
                </p>

                <div className="mt-2 text-2xl font-extralight">
                  {reservation.guests}
                </div>

              </div>

            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-black/20 p-4">

                <p className="text-sm text-white/40">
                  {t("reservations.runtime.arrival")}
                </p>

                <div className="mt-2 text-2xl font-extralight text-cyan-300">
                  {reservation.time}
                </div>

              </div>

              <div className="rounded-2xl bg-black/20 p-4">

                <p className="text-sm text-white/40">
                  {t("reservations.runtime.spend")}
                </p>

                <div className="mt-2 text-lg font-extralight text-green-400">
                  {reservation.spending}
                </div>

              </div>

            </div>

            <div className="mt-6 rounded-2xl border border-purple-500/20 bg-purple-500/10 p-4">

              <p className="text-lg font-extralight text-purple-300">
                {t("reservations.runtime.aiTitle")}
              </p>

              <p className="mt-2 text-sm text-white/50">
                {t("reservations.runtime.aiDescription")}
              </p>

            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">

              <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4 text-center">

                <div className="text-lg font-extralight text-cyan-300">
                  {t("reservations.actions.checkin")}
                </div>

                <p className="mt-2 text-xs text-white/40">
                  {t("reservations.actions.start")}
                </p>

              </div>

              <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-4 text-center">

                <div className="text-lg font-extralight text-green-300">
                  {t("reservations.actions.view")}
                </div>

                <p className="mt-2 text-xs text-white/40">
                  {t("reservations.actions.status")}
                </p>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}
