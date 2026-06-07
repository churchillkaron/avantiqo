"use client";

import Image from "next/image";
import Link from "next/link";
import SiteTopNav from "@/app/components/SiteTopNav";
import Footer from "@/components/layout/Footer";
import { useTranslation } from "@/app/providers/I18nProvider";
import { Users, LineChart, Brain, ClipboardType, Palette } from "lucide-react";

export default function ProfessionalServicesPage() {
  const { translations } = useTranslation();
  const ps = translations.home?.professionalServices || {};
  const sections = ps.sections || [];

  

  return (
    <>
      <SiteTopNav />

      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6">
        <Image
          src="/images/professional-services-hero.png"
          alt="Professional Services Hero"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="z-10 max-w-5xl bg-white/5 backdrop-blur-3xl p-12 rounded-3xl shadow-lg">
          <h1 className="text-6xl md:text-7xl font-light mb-6">
            {ps.hero?.title || ""}
          </h1>
          <p className="text-lg text-white/80 mb-8">
            {ps.hero?.description || ""}
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/demo" className="bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#C9974D] text-black px-6 py-3 rounded-lg font-semibold shadow-[0_0_30px_rgba(214,166,106,0.35)] hover:brightness-105 transition-all">
              {ps.hero?.primary || ""}
            </Link>
            <Link href="/explore" className="border border-white/30 px-6 py-3 rounded-lg hover:bg-white/10 font-semibold">
              {ps.hero?.secondary || ""}
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
                  {Icon && <Icon className="w-8 h-8 mb-3 text-[#D6A66A]" />}
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
        <h2 className="text-5xl font-light mb-6">{ps.cta?.title || ""}</h2>
        <p className="max-w-3xl mx-auto mb-12 text-lg text-white/70 leading-relaxed">
          {ps.cta?.description || ""}
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/demo" className="bg-gradient-to-r from-[#D6A66A] via-[#E7C78A] to-[#C9974D] text-black px-8 py-4 rounded-2xl font-semibold shadow-[0_0_40px_rgba(214,166,106,0.4)] hover:brightness-105 transition-all">
            {ps.hero?.primary || ""}
          </Link>
          <Link href="/explore" className="border border-white/30 px-8 py-4 rounded-2xl hover:bg-white/10 font-semibold">
            {ps.hero?.secondary || ""}
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
