"use client";

import Image from "next/image";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { restaurantTranslations } from "@/lib/i18n/pages/restaurants";

export default function RestaurantsPage() {

  const { locale } = useTranslation();

  const t =
    restaurantTranslations[locale] ||
    restaurantTranslations.en;

  const runtimeCards = t.runtimeCards || [];
  const features = t.features || [];

  return (
    <main className="min-h-screen bg-[#04050B] text-white">

      <Navbar />

      <section className="px-6 py-20 md:py-32">

        <div className="mx-auto max-w-7xl">

          <p className="text-xs tracking-[0.35em] text-[#D6A66A]">
            {t.heroLabel}
          </p>

          <h1 className="mt-6 text-4xl font-light md:text-[92px]">
            {t.heroTitle}
          </h1>

          <p className="mt-8 max-w-3xl text-lg text-white/60">
            {t.heroDescription}
          </p>

        </div>

      </section>

      <section className="px-6 pb-20 md:pb-32">

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">

          {runtimeCards.map((card, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-[24px] md:rounded-[36px] border border-white/10 bg-[#070B16]"
            >

              <Image
                src={card.image || "/images/restaurant-marketing-runtime.png"}
                alt={card.title}
                width={1200}
                height={700}
                quality={75}
                className="h-[240px] md:h-[420px] w-full object-cover"
              />

              <div className="p-5 md:p-10">

                <h3 className="text-2xl font-light">
                  {card.title}
                </h3>

                <p className="mt-4 text-white/60">
                  {card.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      <Footer />

    </main>
  );
}
