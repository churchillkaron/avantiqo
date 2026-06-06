"use client";

import Image from "next/image";
import Link from "next/link";
import SiteTopNav from "@/app/components/SiteTopNav";
import Footer from "@/components/layout/Footer";
import { useTranslation } from "@/app/providers/I18nProvider";
import { Users, ShoppingCart, Boxes, LineChart, Brain, Palette } from "lucide-react";

export default function RetailCommercePage() {
  const { t } = useTranslation();

  const sections = [
    {
      title: t("Retail Challenges"),
      cards: [
        { title: t("Inventory Inaccuracies"), desc: t("Stock visibility is fragmented across locations, causing overstock and lost sales."), icon: Boxes },
        { title: t("Disconnected Systems"), desc: t("Different software across stores leads to data silos and slow operations."), icon: LineChart },
        { title: t("Customer Churn"), desc: t("Lack of real-time customer insights leads to missed opportunities."), icon: Users },
        { title: t("Delayed Financial Insights"), desc: t("Manual reporting and fragmented finance data delay decision-making."), icon: LineChart },
        { title: t("Manual Stock Tracking"), desc: t("Limited automation increases errors and operational burden."), icon: ShoppingCart },
        { title: t("Limited Marketing Intelligence"), desc: t("Campaigns are hard to optimize without a unified system."), icon: Brain },
      ],
    },
    {
      title: t("Retail Operating System"),
      cards: [
        { title: t("Customer Intelligence"), desc: t("Detailed customer profiles, loyalty tracking, AI-driven insights."), icon: Users },
        { title: t("Point of Sale"), desc: t("Modern POS with returns, discounts, gift cards, multi-location support."), icon: ShoppingCart },
        { title: t("Inventory & Supply Chain"), desc: t("Stock levels, warehouses, transfers, purchase orders, automation."), icon: Boxes },
        { title: t("Finance & Accounting"), desc: t("Revenue, expenses, profitability, cash flow, integrated reporting."), icon: LineChart },
        { title: t("Marketing Automation"), desc: t("Campaign creation, social publishing, AI-generated content."), icon: Brain },
        { title: t("Synthetic Intelligence"), desc: t("Predictive analytics, operational intelligence, automated decisions."), icon: Brain },
        { title: t("Design Studio"), desc: t("Visual campaign design, social media graphics, product mockups."), icon: Palette },
        { title: t("Business Intelligence"), desc: t("Sales dashboards, KPIs, multi-store analytics, AI forecasting."), icon: LineChart },
      ],
    },
    {
      title: t("Retail Without Blind Spots"),
      cards: [
        { title: t("Complete Visibility"), desc: t("End-to-end view of operations, inventory, and customer behavior."), icon: LineChart },
        { title: t("Data-Driven Decisions"), desc: t("AI-powered insights to optimize sales, marketing, and operations."), icon: Brain },
        { title: t("Seamless Integration"), desc: t("All systems connected for real-time, actionable intelligence."), icon: Boxes },
      ],
    },
  ];

  return (
    <>
      <SiteTopNav />

      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6">
        <Image
          src="/images/retail-hero.png"
          alt="Retail Hero"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="z-10 max-w-5xl bg-white/5 backdrop-blur-3xl p-12 rounded-3xl shadow-lg">
          <h1 className="text-6xl md:text-7xl font-light mb-6">
            {t("From Point of Sale to Complete Retail Intelligence & Design")}
          </h1>
          <p className="text-lg text-white/80 mb-8">
            {t("Manage sales, inventory, customers, marketing, finance, synthetic intelligence, and design from one unified platform.")}
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
        <h2 className="text-5xl font-light mb-6">{t("Ready To Transform Retail?")}</h2>
        <p className="max-w-3xl mx-auto mb-12 text-lg text-white/70 leading-relaxed">
          {t("Connect sales, inventory, customers, finance, marketing and AI into one operating system.")}
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
