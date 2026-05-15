"use client";

import Image from "next/image"

import Navbar from "@/components/layout/Navbar"
import OperationsShowcase from "@/components/sections/OperationsShowcase"
import AIIntelligence from "@/components/sections/AIIntelligence"
import Footer from "@/components/layout/Footer"
import EnterpriseIntelligence from "@/components/sections/EnterpriseIntelligence"
import FinancialInfrastructure from "@/components/sections/FinancialInfrastructure"
import EnterpriseAIWorkforce from "@/components/sections/EnterpriseAIWorkforce"
import EnterpriseInfrastructure from "@/components/sections/EnterpriseInfrastructure"
import AIChallengeEngine from "@/components/sections/AIChallengeEngine"
import MultiLocationOperations from "@/components/sections/MultiLocationOperations"
import MultiBusinessPlatform from "@/components/sections/MultiBusinessPlatform"
import AIMarketingAutomation from "@/components/sections/AIMarketingAutomation"
import CustomerIntelligence from "@/components/sections/CustomerIntelligence"
import MultiLocationCommand from "@/components/sections/MultiLocationCommand"
import SecurityGovernance from "@/components/sections/SecurityGovernance"
import FinalCTA from "@/components/sections/FinalCTA"

import {
  Sparkles,
  Megaphone,
  Briefcase,
  Wallet,
  Users,
  LineChart,
  Wand2,
  Layers3,
  Play,
} from "lucide-react";

const modules = [
  {
    title: "AI Studio",
    desc: "Create premium images, video, campaigns and brand content with AI.",
    icon: Sparkles,
  },
  {
    title: "Marketing & Growth",
    desc: "Plan, publish and optimize campaigns across every customer channel.",
    icon: Megaphone,
  },
  {
    title: "Operations",
    desc: "Connect workflows, tasks, approvals and daily business execution.",
    icon: Briefcase,
  },
  {
    title: "Finance",
    desc: "Control invoices, payments, cash flow, reporting and approvals.",
    icon: Wallet,
  },
  {
    title: "People & Payroll",
    desc: "Manage teams, roles, attendance, salary and performance.",
    icon: Users,
  },
  {
    title: "Analytics & Automation",
    desc: "Turn business data into insights, forecasts, alerts and AI actions.",
    icon: LineChart,
  },
];

const studio = [
  {
    title: "AI Render",
    desc: "Generate cinematic, ultra-premium AI visuals for campaigns, products, luxury brands and enterprise content at production quality.",
    icon: Sparkles,
    image: "/studio/render2.png",
  },
  {
    title: "AI Enhance",
    desc: "Transform low-quality images into polished, high-end visuals with AI upscaling, lighting correction, facial refinement and cinematic enhancement.",
    icon: Wand2,
    image: "/studio/enhance.png",
  },
  {
    title: "AI Composite",
    desc: "Combine products, environments, models and visual elements into seamless AI-generated compositions built for premium campaigns and brand storytelling.",
    icon: Layers3,
    image: "/studio/composite2.png",
  },
  {
    title: "AI Video",
    desc: "Create cinematic AI videos, motion campaigns and dynamic visual storytelling optimized for social media, advertising and modern digital brands.",
    icon: Play,
    image: "/studio/vortiqa-video.png",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#02030A] text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#231133_0%,#090B13_35%,#02030A_100%)]" />

      <div className="absolute left-[-10%] top-[-10%] h-[700px] w-[700px] rounded-full bg-[#8B5CF6]/10 blur-[160px]" />

      <div className="absolute right-[-10%] top-[10%] h-[700px] w-[700px] rounded-full bg-[#D6A66A]/10 blur-[180px]" />

      <div className="absolute bottom-[-20%] left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-[#6D42F5]/10 blur-[220px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

    <section
      id="studio"
       className="relative mx-auto max-w-7xl px-6 pb-32 pt-28"
    ><Navbar />
        {/* HERO */}
        <div className="grid min-h-[780px] grid-cols-1 items-start gap-12 lg:gap-20 lg:grid-cols-[0.85fr_1.15fr]">
          {/* LEFT */}
          <div className="relative z-10 pt-8">

            <div className="mb-10 text-xs tracking-[0.35em] text-[#C89B65]">
              AI-POWERED BUSINESS PLATFORM
            </div>

          <h1 className="max-w-3xl text-5xl font-light leading-[0.95] tracking-[-0.06em] sm:text-6xl md:text-[110px]">
              <span className="text-white">
                Create.
              </span>

              <br />

              <span className="text-white">
                Operate.
              </span>

              <br />

              <span className="bg-gradient-to-r from-[#E7C38A] via-[#F3F4FF] to-[#8B5CF6] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.28)]">
                Scale.
              </span>

            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-white/42">
           Avantiqo unifies AI automation, operations,
             finance, workforce intelligence, customer
              engagement and enterprise infrastructure
            into one operating system for modern businesses.
            </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <button className="rounded-2xl bg-gradient-to-r from-[#D6A66A] via-[#B98B57] to-[#8B5CF6] px-8 py-4 text-sm font-medium text-white shadow-[0_0_90px_rgba(168,85,247,.22)] transition hover:scale-[1.02]">
                Book a Demo
              </button>

              <button className="rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 text-sm text-white/70 backdrop-blur-xl transition hover:border-[#8B5CF6]/30 hover:bg-[#8B5CF6]/10">
                Explore Platform
              </button>
           <div className="mt-10 flex flex-col gap-4 text-sm text-white/30 sm:flex-row sm:flex-wrap sm:items-center">
       <span>Enterprise AI Infrastructure</span>

      <div className="h-1 w-1 rounded-full bg-white/20" />

        <span>Multi-Location Operations</span>

         <div className="h-1 w-1 rounded-full bg-white/20" />

         <span>Finance + Workforce + Marketing</span>

          </div>
            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">
          <div className="absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-[#02030A] to-transparent" />

            <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-[140px]" />

            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6A66A]/10 blur-[140px]" />

            {/* PANEL */}
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-4 sm:p-6 backdrop-blur-3xl">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />

              <div className="relative z-10 mb-6 flex items-center justify-between">

                <div>

                  <p className="text-xs tracking-[0.35em] text-[#B58AF8]">
                    DESIGN STUDIO
                  </p>

                  <h2 className="mt-3 text-4xl font-light text-white">
                    AI Creation Engine
                  </h2>

                </div>

                <div className="rounded-2xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/10 px-4 py-2 text-xs text-[#DCCBFF] backdrop-blur-xl">
                  LIVE AI
                </div>

              </div>

             <div className="grid gap-5 md:grid-cols-2">

                {studio.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-[#06070F]/95 transition duration-500 hover:border-[#8B5CF6]/30 hover:shadow-[0_0_60px_rgba(168,85,247,0.12)]"
                    >

                      <div className="relative h-52 overflow-hidden">

                        <Image
                       src={item.image}
                        alt={item.title}
                          fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                          />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#05060D] via-transparent to-transparent" />

                        <div className="absolute left-4 top-4 rounded-2xl border border-white/10 bg-black/40 p-3 backdrop-blur-xl">
                          <Icon className="h-5 w-5 text-[#E7C38A]" />
                        </div>

                      </div>

                      <div className="p-5">

                        <h3 className="text-lg font-light text-white">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-white/40">
                          {item.desc}
                        </p>

                      </div>
                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>

        {/* ENTERPRISE */}
       <section
  id="platform"
  className="relative mt-20"
>

          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-3xl">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.08),transparent_35%)]" />

            <div className="mb-16 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

              <div>

                <p className="text-xs tracking-[0.35em] text-[#B58AF8]">
                  ENTERPRISE PLATFORM
                </p>

                <h2 className="mt-6 max-w-3xl text-5xl font-light leading-[1.05] tracking-tight text-white md:text-6xl">
                  Everything your
                  <br />
                  business needs.
                  <br />
                  <span className="bg-gradient-to-r from-[#E7C38A] to-[#8B5CF6] bg-clip-text text-transparent">
                    Unified by AI.
                  </span>
                </h2>

              </div>

              <p className="max-w-xl text-lg leading-8 text-white/40">
                Avantiqo connects operations, finance,
                automation, analytics, payroll and AI
                into one intelligent enterprise ecosystem
                designed for modern scalable businesses.
              </p>

            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

              {modules.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-[28px] border border-white/[0.06] bg-white/[0.02] p-6 transition duration-500 hover:border-[#D6A66A]/20 hover:bg-white/[0.04]"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03]">
                      <Icon className="h-5 w-5 text-[#E7C38A]" />
                    </div>

                    <h3 className="mt-6 text-lg font-light text-white/90">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/40">
                      {item.desc}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </section>


<OperationsShowcase />
<AIIntelligence />
<FinancialInfrastructure />
<EnterpriseIntelligence />
<EnterpriseAIWorkforce />
<AIChallengeEngine />
<MultiLocationOperations />
<MultiBusinessPlatform />
<AIMarketingAutomation />
<CustomerIntelligence />
<MultiLocationCommand />
<SecurityGovernance />
<EnterpriseInfrastructure />
<FinalCTA />



</section>
      

    </main>
  );
}