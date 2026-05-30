"use client";

import { useTranslation } from "@/app/providers/I18nProvider";

const customers = [
  {
    name: "Michael Carter",
    visits: 28,
    spend: "฿184K",
    favorite: "Wagyu + Wine",
  },
  {
    name: "Sophia Lee",
    visits: 16,
    spend: "฿62K",
    favorite: "Cocktails",
  },
  {
    name: "Daniel Ross",
    visits: 42,
    spend: "฿240K",
    favorite: "Private Events",
  },
];

const aiInsights = [
  "VIP guests increasing premium wine demand",
  "Returning customers respond strongly to tasting menus",
  "High-spend guests prefer reservation personalization",
  "Beach club events driving multi-location traffic",
];

export default function CustomersPage() {

  const { t } = useTranslation();

  const customers = [
    {
      name: "Michael Carter",
      visits: 28,
      spend: "฿184K",
      favorite: t("customers.favorites.wagyuWine"),
    },
    {
      name: "Sophia Lee",
      visits: 16,
      spend: "฿62K",
      favorite: t("customers.favorites.cocktails"),
    },
    {
      name: "Daniel Ross",
      visits: 42,
      spend: "฿240K",
      favorite: t("customers.favorites.privateEvents"),
    },
  ];

  const aiInsights = [
    t("customers.insights.wineDemand"),
    t("customers.insights.tastingMenus"),
    t("customers.insights.personalization"),
    t("customers.insights.multilocation"),
  ];

  return (
    <div className="space-y-6">

      <div className="rounded-[40px] border border-white/[0.06] bg-gradient-to-br from-[#140C1F] to-[#050816] p-6 xl:p-12">

        <div className="max-w-5xl">

          <div className="mb-4 inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-xs tracking-[0.24em] text-purple-300">
            {t("customers.hero.badge")}
          </div>

          <h1 className="text-4xl font-extralight leading-none tracking-[-0.06em] xl:text-8xl">
            {t("customers.hero.title1")}
            <br />
            {t("customers.hero.title2")}
          </h1>

          <p className="mt-6 max-w-3xl text-white/50">
            {t("customers.hero.description")}
          </p>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1fr_0.8fr]">

        <div className="space-y-5">

          {customers.map((customer) => (
            <div
              key={customer.name}
              className="rounded-[36px] border border-white/[0.05] bg-white/[0.03] p-6"
            >

              <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

                <div>

                  <div className="text-4xl font-extralight tracking-[-0.04em]">
                    {customer.name}
                  </div>

                  <div className="mt-3 text-white/50">
                    {t("customers.labels.favorite")}: {customer.favorite}
                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="rounded-3xl bg-black/20 px-5 py-4">

                    <div className="text-xs text-white/40">
                      {t("customers.labels.visits")}
                    </div>

                    <div className="mt-2 text-3xl font-extralight text-cyan-300">
                      {customer.visits}
                    </div>

                  </div>

                  <div className="rounded-3xl bg-black/20 px-5 py-4">

                    <div className="text-xs text-white/40">
                      {t("customers.labels.spend")}
                    </div>

                    <div className="mt-2 text-3xl font-extralight text-green-400">
                      {customer.spend}
                    </div>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

        <div className="rounded-[36px] border border-purple-500/10 bg-purple-500/5 p-6">

          <div className="mb-6">

            <p className="text-xs tracking-[0.24em] text-[#D6A66A]">
              {t("customers.signals.badge")}
            </p>

            <h2 className="mt-3 text-5xl font-extralight tracking-[-0.05em]">
              {t("customers.signals.title")}
            </h2>

          </div>

          <div className="space-y-4">

            {aiInsights.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/[0.05] bg-black/20 p-5"
              >

                <div className="text-xl font-extralight">
                  {item}
                </div>

                <div className="mt-3 text-white/40">
                  {t("customers.signals.description")}
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}
