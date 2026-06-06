"use client";

import Image from "next/image";
import Link from "next/link";
import SiteTopNav from "@/app/components/SiteTopNav";
import Footer from "@/components/layout/Footer";
import { useTranslation } from "@/app/providers/I18nProvider";
import { Boxes, ShoppingCart, Truck, LineChart, Brain, Palette } from "lucide-react";

export default function DistributionManufacturingPage() {
  const { t } = useTranslation();

  const sections = [
    {
      title: t("Industry Challenges"),
      cards: [
        { title: t("Inventory Inaccuracy"), desc: t("Stock discrepancies cause overstock and lost sales."), icon: Boxes },
        { title: t("Production Delays"), desc: t("Manufacturing bottlenecks delay order fulfillment."), icon: LineChart },
        { title: t("Supply Chain Disruption"), desc: t("Uncoordinated logistics increase lead times."), icon: Truck },
        { title: t("Disconnected Warehouses"), desc: t("Multiple locations without centralized control."), icon: Boxes },
        { title: t("Poor Forecasting"), desc: t("Limited analytics prevent accurate production planning."), icon: Brain },
        { title: t("Lack Of Visibility"), desc: t("Limited insight into operations and inventory performance."), icon: LineChart },
      ],
    },
    {
      title: t("Manufacturing Operating System"),
      cards: [
        { title: t("Procurement"), desc: t("Purchase requests, orders, supplier management, approvals, receiving."), icon: ShoppingCart },
        { title: t("Inventory & Warehousing"), desc: t("Stock levels, locations, transfers, batch tracking, cycle counts."), icon: Boxes },
        { title: t("Production"), desc: t("Recipes, BOM, production orders, costing, yield tracking."), icon: LineChart },
        { title: t("Logistics"), desc: t("Deliveries, fleet management, shipping, tracking, distribution."), icon: Truck },
        { title: t("Finance & Accounting"), desc: t("AP, AR, ledger, cost accounting, reporting."), icon: LineChart },
        { title: t("Synthetic Intelligence"), desc: t("Predict demand, forecast inventory, identify bottlenecks, reduce waste, automate decisions."), icon: Brain },
        { title: t("Design Studio"), desc: t("Product design, packaging, labels, marketing assets, product launches."), icon: Palette },
      ],
    },
    {
      title: t("Distribution Without Blind Spots"),
      cards: [
        { title: t("Complete Visibility"), desc: t("Full end-to-end visibility across production and distribution."), icon: LineChart },
        { title: t("Data-Driven Decisions"), desc: t("AI-powered insights to optimize operations, inventory and logistics."), icon: Brain },
        { title: t("Seamless Integration"), desc: t("All modules connected for real-time actionable intelligence."), icon: Boxes },
      ],
    },
  ];

  return (
    <>
      <SiteTopNav />

      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6">
        <Image
          src="/images/distribution-hero.png"
          alt="Distribution & Manufacturing Hero"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="z-10 max-w-5xl bg-white/5 backdrop-blur-3xl p-12 rounded-3xl shadow-lg">
          <h1 className="text-6xl md:text-7xl font-light mb-6">
            {t("From Raw Materials To Delivered Products")}
          </h1>
          <p className="text-lg text-white/80 mb-8">
            {t("Control procurement, inventory, production, warehousing, logistics, finance, and operational intelligence from one unified platform.")}
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/demo" className="bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#C9974D] text-black px-6 py-3 rounded-lg font-semibold shadow-[0_0_30px_rgba(214,166,106,0.35)] hover:brightness-105 transition-all">
              {t("Book Demo")}
            </Link>
            <Link href="/explore" className="border border-white/30 px-6 py-3 rounded-lg hover:bg-white/10 font-semibold">
              {t("Explore Platform")}
            </Link>
          </div>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, i) => (
        <section key={i} className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">{section.title}</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {section.cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="w-full sm:w-[300px] md:w-[320px] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all flex flex-col items-center text-center shadow-lg">
                  <Icon className="w-8 h-8 mb-3 text-[#D6A66A]" />
                  <h3 className="font-semibold text-xl mb-2">{card.title}</h3>
                  <p className="text-white/70">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </section>
      ))}

      {/* Final CTA Section */}
      <section className="bg-black/20 py-24 text-center">
        <h2 className="text-5xl font-light mb-6">{t("Operate. Control. Produce. Deliver.")}</h2>
        <p className="max-w-3xl mx-auto mb-12 text-lg text-white/70 leading-relaxed">
          {t("Modern manufacturing requires visibility across every step of the supply chain. Avantiqo connects procurement, inventory, production, logistics, finance, synthetic intelligence, and design into one operating system.")}
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/demo" className="bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#C9974D] text-black px-8 py-4 rounded-2xl font-semibold shadow-[0_0_40px_rgba(214,166,106,0.4)] hover:brightness-105 transition-all">
            {t("Book Demo")}
          </Link>
          <Link href="/explore" className="border border-white/30 px-8 py-4 rounded-2xl hover:bg-white/10 font-semibold">
            {t("Explore Platform")}
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
