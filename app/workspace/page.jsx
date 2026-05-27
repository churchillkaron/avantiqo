"use client";

import MobileBottomNav from "@/components/workspace/MobileBottomNav";

export default function WorkspacePage() {
  return (
    <main className="min-h-screen bg-[#02040A] p-5 xl:p-4 xl:p-8 text-white">

      <div className="mx-auto max-w-7xl">

        <div className="mb-8 xl:mb-12">

          <p className="mb-4 text-xs tracking-[0.3em] text-[#D6A66A]">
            LIVE RESTAURANT OPERATION
          </p>

          <h1 className="max-w-5xl text-xl xl:text-xl xl:text-2xl xl:text-xl xl:text-2xl xl:text-4xl xl:text-xl xl:text-2xl xl:text-4xl xl:text-7xl font-extralight tracking-[-0.06em]">
            One order affects the entire operation in real time.
          </h1>

        </div>

        <div className="space-y-4 xl:space-y-8">

          <div className="rounded-[28px] xl:rounded-[28px] xl:rounded-[36px] border border-purple-500/10 bg-gradient-to-br from-[#12091F] to-[#050816] p-5 xl:p-4 xl:p-8">

            <div className="mb-8 flex items-center justify-between">

              <div>

                <p className="mb-3 text-xs tracking-[0.24em] text-[#D6A66A]">
                  ORDER RECEIVED
                </p>

                <h2 className="text-xl xl:text-xl xl:text-2xl xl:text-xl xl:text-2xl xl:text-3xl xl:text-xl xl:text-2xl xl:text-3xl xl:text-5xl font-extralight">
                  Table T1
                </h2>

              </div>

              <div className="rounded-full border border-green-500/20 bg-green-500/10 px-5 py-3 text-sm text-green-300">
                ROUTING ORDER
              </div>

            </div>

            <div className="grid gap-4 md:grid-cols-2">

              <div className="rounded-3xl border border-white/[0.05] bg-black/20 p-4 xl:p-6">

                <p className="text-xl xl:text-xl xl:text-2xl xl:text-xl xl:text-2xl xl:text-3xl font-extralight">
                  2 Wagyu Burger
                </p>

                <p className="mt-3 text-white/40">
                  Routed to Kitchen
                </p>

              </div>

              <div className="rounded-3xl border border-white/[0.05] bg-black/20 p-4 xl:p-6">

                <p className="text-xl xl:text-xl xl:text-2xl xl:text-xl xl:text-2xl xl:text-3xl font-extralight">
                  1 Wine
                </p>

                <p className="mt-3 text-white/40">
                  Routed to Bar
                </p>

              </div>

            </div>

          </div>

          <div className="rounded-[28px] xl:rounded-[28px] xl:rounded-[36px] border border-white/[0.05] bg-white/[0.03] p-5 xl:p-4 xl:p-8">

            <div className="mb-8 flex items-center justify-between">

              <div>

                <p className="mb-3 text-xs tracking-[0.24em] text-[#D6A66A]">
                  LIVE OPERATION TIMELINE
                </p>

                <h2 className="text-xl xl:text-xl xl:text-2xl xl:text-xl xl:text-2xl xl:text-3xl xl:text-xl xl:text-2xl xl:text-3xl xl:text-5xl font-extralight">
                  Real-Time Coordination
                </h2>

              </div>

              <div className="rounded-full border border-green-500/20 bg-green-500/10 px-5 py-3 text-sm text-green-300">
                LIVE
              </div>

            </div>

            <div className="space-y-4">

              <div className="flex gap-5 rounded-3xl border border-white/[0.05] bg-black/20 p-5">

                <div className="text-sm text-white/35">
                  12:01
                </div>

                <div>

                  <p className="text-xl font-extralight">
                    Order received from Table T1
                  </p>

                  <p className="mt-2 text-white/40">
                    2 Wagyu Burger + 1 Wine
                  </p>

                </div>

              </div>

              <div className="flex gap-5 rounded-3xl border border-white/[0.05] bg-black/20 p-5">

                <div className="text-sm text-white/35">
                  12:01
                </div>

                <div>

                  <p className="text-xl font-extralight">
                    Routing engine activated
                  </p>

                  <p className="mt-2 text-white/40">
                    Kitchen + Bar synchronization started
                  </p>

                </div>

              </div>

              <div className="flex gap-5 rounded-3xl border border-amber-500/20 bg-amber-500/10 p-5">

                <div className="text-sm text-amber-300">
                  12:02
                </div>

                <div>

                  <p className="text-xl font-extralight">
                    Kitchen production started
                  </p>

                  <p className="mt-2 text-white/70">
                    Grill station preparing Wagyu burgers
                  </p>

                </div>

              </div>

              <div className="flex gap-5 rounded-3xl border border-purple-500/20 bg-purple-500/10 p-5">

                <div className="text-sm text-purple-300">
                  12:03
                </div>

                <div>

                  <p className="text-xl font-extralight">
                    Bar preparation started
                  </p>

                  <p className="mt-2 text-white/70">
                    Wine preparation routed to bar station
                  </p>

                </div>

              </div>

              <div className="flex gap-5 rounded-3xl border border-white/[0.05] bg-black/20 p-5">

                <div className="text-sm text-white/35">
                  12:04
                </div>

                <div>

                  <p className="text-xl font-extralight">
                    Fries fryer activated
                  </p>

                  <p className="mt-2 text-white/40">
                    Potato inventory transformed during live cooking
                  </p>

                </div>

              </div>

              <div className="flex gap-5 rounded-3xl border border-red-500/20 bg-red-500/10 p-5">

                <div className="text-sm text-red-300">
                  12:05
                </div>

                <div>

                  <p className="text-xl font-extralight">
                    Dependency synchronization detected
                  </p>

                  <p className="mt-2 text-white/70">
                    Service waiting for kitchen completion before dispatch
                  </p>

                </div>

              </div>

              <div className="flex gap-5 rounded-3xl border border-green-500/20 bg-green-500/10 p-5">

                <div className="text-sm text-green-300">
                  12:07
                </div>

                <div>

                  <p className="text-xl font-extralight">
                    Service dispatched
                  </p>

                  <p className="mt-2 text-white/70">
                    Kitchen + Bar synchronization completed successfully
                  </p>

                </div>

              </div>

            </div>

          </div>

          <div className="rounded-[28px] xl:rounded-[28px] xl:rounded-[36px] border border-white/[0.05] bg-white/[0.03] p-5 xl:p-4 xl:p-8">

            <div className="mb-8 flex items-center justify-between">

              <div>

                <p className="mb-3 text-xs tracking-[0.24em] text-[#D6A66A]">
                  LIVE FINANCIAL IMPACT
                </p>

                <h2 className="text-xl xl:text-xl xl:text-2xl xl:text-xl xl:text-2xl xl:text-3xl xl:text-xl xl:text-2xl xl:text-3xl xl:text-5xl font-extralight">
                  Operational Profitability
                </h2>

              </div>

              <div className="rounded-full border border-green-500/20 bg-green-500/10 px-5 py-3 text-sm text-green-300">
                PROFITABLE
              </div>

            </div>

            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2 xl:gap-4 xl:p-6">

              <div className="space-y-4">

                <div className="flex items-center justify-between rounded-3xl border border-white/[0.05] bg-black/20 p-5">

                  <span className="text-white/70">
                    Order Value
                  </span>

                  <span className="text-xl xl:text-xl xl:text-2xl xl:text-xl xl:text-2xl xl:text-4xl font-extralight text-green-400">
                    ฿1,130
                  </span>

                </div>

                <div className="flex items-center justify-between rounded-3xl border border-white/[0.05] bg-black/20 p-5">

                  <span className="text-white/70">
                    Food Cost
                  </span>

                  <span className="text-xl xl:text-xl xl:text-2xl xl:text-xl xl:text-2xl xl:text-4xl font-extralight text-amber-300">
                    ฿312
                  </span>

                </div>

                <div className="flex items-center justify-between rounded-3xl border border-white/[0.05] bg-black/20 p-5">

                  <span className="text-white/70">
                    Gross Margin
                  </span>

                  <span className="text-xl xl:text-xl xl:text-2xl xl:text-xl xl:text-2xl xl:text-4xl font-extralight text-purple-400">
                    72%
                  </span>

                </div>

                <div className="flex items-center justify-between rounded-3xl border border-white/[0.05] bg-black/20 p-5">

                  <span className="text-white/70">
                    Service Charge
                  </span>

                  <span className="text-xl xl:text-xl xl:text-2xl xl:text-xl xl:text-2xl xl:text-4xl font-extralight text-green-400">
                    +฿113
                  </span>

                </div>

              </div>

              <div className="space-y-4">

                <div className="rounded-3xl border border-purple-500/20 bg-purple-500/10 p-5">

                  <div className="mb-4 flex items-center justify-between">

                    <p className="text-xl xl:text-xl xl:text-2xl font-extralight">
                      Operational Cost Breakdown
                    </p>

                    <div className="rounded-full bg-purple-500/20 px-3 py-1 text-xs text-purple-300">
                      LIVE
                    </div>

                  </div>

                  <div className="space-y-3 text-white/70">

                    <div className="flex items-center justify-between">
                      <span>Wagyu Patties</span>
                      <span>฿180</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Fresh Ingredients</span>
                      <span>฿42</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Fries</span>
                      <span>฿28</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Wine</span>
                      <span>฿160</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Kitchen Labor Allocation</span>
                      <span>฿42</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Bar Labor Allocation</span>
                      <span>฿18</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Service Labor</span>
                      <span>฿35</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Energy Cost</span>
                      <span>฿12</span>
                    </div>

                  </div>

                </div>

                <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-5">

                  <div className="mb-5 flex items-center justify-between">

                    <p className="text-xl xl:text-xl xl:text-2xl font-extralight">
                      Net Profitability
                    </p>

                    <div className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-300">
                      LIVE PROFIT
                    </div>

                  </div>

                  <div className="space-y-4">

                    <div className="flex items-center justify-between">

                      <span className="text-white/70">
                        Total Revenue
                      </span>

                      <span className="text-xl xl:text-xl xl:text-2xl font-extralight text-green-400">
                        ฿1,130
                      </span>

                    </div>

                    <div className="flex items-center justify-between">

                      <span className="text-white/70">
                        Total Operational Cost
                      </span>

                      <span className="text-xl xl:text-xl xl:text-2xl font-extralight text-red-300">
                        -฿419
                      </span>

                    </div>

                    <div className="h-px bg-white/[0.06]" />

                    <div className="flex items-center justify-between">

                      <span className="text-white">
                        Net Profit
                      </span>

                      <span className="text-xl xl:text-xl xl:text-2xl xl:text-xl xl:text-2xl xl:text-4xl font-extralight text-emerald-400">
                        ฿711
                      </span>

                    </div>

                    <div className="flex items-center justify-between">

                      <span className="text-white/70">
                        Net Margin
                      </span>

                      <span className="text-xl xl:text-xl xl:text-2xl font-extralight text-emerald-300">
                        62.9%
                      </span>

                    </div>

                  </div>

                </div>


                <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-5">

                  <div className="mb-4 flex items-center justify-between">

                    <p className="text-xl xl:text-xl xl:text-2xl font-extralight">
                      AI Profitability Intelligence
                    </p>

                    <div className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-300">
                      AI ACTIVE
                    </div>

                  </div>

                  <p className="text-white/75">
                    Wagyu Burger profitability performing 18% above operational average tonight.
                  </p>

                  <div className="mt-5 rounded-2xl bg-black/20 p-4 text-sm text-green-300">

                    Recommended:
                    Increase premium burger + wine pairing promotion during evening peak hours.

                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="grid gap-5 xl:p-4 xl:p-8 xl:grid-cols-2">

            <div className="rounded-[28px] xl:rounded-[28px] xl:rounded-[36px] border border-white/[0.05] bg-white/[0.03] p-5 xl:p-4 xl:p-8">

              <div className="mb-8 flex items-center justify-between">

                <div>

                  <p className="mb-3 text-xs tracking-[0.24em] text-[#D6A66A]">
                    KITCHEN
                  </p>

                  <h2 className="text-xl xl:text-xl xl:text-2xl xl:text-xl xl:text-2xl xl:text-3xl xl:text-xl xl:text-2xl xl:text-3xl xl:text-5xl font-extralight">
                    Cooking
                  </h2>

                </div>

                <div className="text-right">

                  <div className="text-xl xl:text-xl xl:text-2xl xl:text-xl xl:text-2xl xl:text-4xl font-extralight text-amber-400">
                    04:22
                  </div>

                  <div className="mt-2 text-sm text-white/35">
                    Active Ticket
                  </div>

                </div>

              </div>

              <div className="rounded-3xl border border-amber-500/20 bg-amber-500/10 p-4 xl:p-6">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xl xl:text-xl xl:text-2xl xl:text-xl xl:text-2xl xl:text-3xl font-extralight">
                      2 Wagyu Burger
                    </p>

                    <p className="mt-3 text-white/45">
                      Grill Station
                    </p>

                  </div>

                  <div className="rounded-full bg-amber-500/20 px-4 py-2 text-sm text-amber-300">
                    COOKING
                  </div>

                </div>

              </div>

            </div>

            <div className="rounded-[28px] xl:rounded-[28px] xl:rounded-[36px] border border-white/[0.05] bg-white/[0.03] p-5 xl:p-4 xl:p-8">

              <div className="mb-8 flex items-center justify-between">

                <div>

                  <p className="mb-3 text-xs tracking-[0.24em] text-[#D6A66A]">
                    BAR
                  </p>

                  <h2 className="text-xl xl:text-xl xl:text-2xl xl:text-xl xl:text-2xl xl:text-3xl xl:text-xl xl:text-2xl xl:text-3xl xl:text-5xl font-extralight">
                    Preparing
                  </h2>

                </div>

                <div className="text-right">

                  <div className="text-xl xl:text-xl xl:text-2xl xl:text-xl xl:text-2xl xl:text-4xl font-extralight text-purple-400">
                    01:14
                  </div>

                  <div className="mt-2 text-sm text-white/35">
                    Drink Queue
                  </div>

                </div>

              </div>

              <div className="rounded-3xl border border-purple-500/20 bg-purple-500/10 p-4 xl:p-6">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xl xl:text-xl xl:text-2xl xl:text-xl xl:text-2xl xl:text-3xl font-extralight">
                      1 Wine
                    </p>

                    <p className="mt-3 text-white/45">
                      Bar Station
                    </p>

                  </div>

                  <div className="rounded-full bg-purple-500/20 px-4 py-2 text-sm text-purple-300">
                    PREPARING
                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="grid gap-5 xl:p-4 xl:p-8 xl:grid-cols-2">

            <div className="rounded-[28px] xl:rounded-[28px] xl:rounded-[36px] border border-white/[0.05] bg-white/[0.03] p-5 xl:p-4 xl:p-8">

              <div className="mb-4 xl:mb-8">

                <p className="mb-3 text-xs tracking-[0.24em] text-[#D6A66A]">
                  PRODUCTION + INVENTORY IMPACT
                </p>

                <h2 className="text-xl xl:text-xl xl:text-2xl xl:text-xl xl:text-2xl xl:text-3xl xl:text-xl xl:text-2xl xl:text-3xl xl:text-5xl font-extralight">
                  One Order Changes Everything
                </h2>

              </div>

              <div className="space-y-4 xl:space-y-6">

                <div className="rounded-3xl border border-purple-500/20 bg-purple-500/10 p-4 xl:p-6">

                  <div className="mb-5 flex items-center justify-between">

                    <div>

                      <p className="text-xl xl:text-xl xl:text-2xl font-extralight">
                        Batch Production
                      </p>

                      <p className="mt-2 text-white/40">
                        Prepared this morning
                      </p>

                      <div className="mt-6 space-y-4">

                        <div className="rounded-2xl border border-white/[0.05] bg-black/20 p-4">

                          <div className="mb-3 flex items-center justify-between">

                            <div>

                              <p className="text-xl font-extralight">
                                20 Wagyu Patties Prepared
                              </p>

                              <p className="mt-1 text-sm text-white/35">
                                Production transformation
                              </p>

                            </div>

                            <div className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-300">
                              COMPLETED
                            </div>

                          </div>

                          <div className="space-y-2 text-sm text-white/60">

                            <div className="flex items-center justify-between">
                              <span>Raw Wagyu Beef</span>
                              <span>8kg → 4kg</span>
                            </div>

                            <div className="flex items-center justify-between">
                              <span>Salt</span>
                              <span>400g → 360g</span>
                            </div>

                            <div className="flex items-center justify-between">
                              <span>Pepper</span>
                              <span>250g → 230g</span>
                            </div>

                          </div>

                        </div>

                        <div className="rounded-2xl border border-white/[0.05] bg-black/20 p-4">

                          <div className="mb-3 flex items-center justify-between">

                            <div>

                              <p className="text-xl font-extralight">
                                30 Burger Buns Prepared
                              </p>

                              <p className="mt-1 text-sm text-white/35">
                                Bakery production
                              </p>

                            </div>

                            <div className="rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-300">
                              READY
                            </div>

                          </div>

                          <div className="space-y-2 text-sm text-white/60">

                            <div className="flex items-center justify-between">
                              <span>Flour</span>
                              <span>12kg → 8kg</span>
                            </div>

                            <div className="flex items-center justify-between">
                              <span>Butter</span>
                              <span>3kg → 2.4kg</span>
                            </div>

                            <div className="flex items-center justify-between">
                              <span>Yeast</span>
                              <span>900g → 820g</span>
                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                    <div className="rounded-full bg-purple-500/20 px-4 py-2 text-sm text-purple-300">
                      PREP KITCHEN
                    </div>

                  </div>

                  <div className="space-y-4">

                    <div className="flex items-center justify-between rounded-2xl bg-black/20 p-4">

                      <div>

                        <p className="text-xl font-extralight">
                          Wagyu Patties
                        </p>

                        <p className="mt-1 text-sm text-white/35">
                          Raw beef consumed during prep
                        </p>

                      </div>

                      <div className="text-xl xl:text-xl xl:text-2xl xl:text-xl xl:text-2xl xl:text-3xl font-extralight text-green-400">
                        20 → 18
                      </div>

                    </div>

                    <div className="flex items-center justify-between rounded-2xl bg-black/20 p-4">

                      <div>

                        <p className="text-xl font-extralight">
                          Burger Buns
                        </p>

                        <p className="mt-1 text-sm text-white/35">
                          Bakery production batch
                        </p>

                      </div>

                      <div className="text-xl xl:text-xl xl:text-2xl xl:text-xl xl:text-2xl xl:text-3xl font-extralight text-amber-400">
                        30 → 28
                      </div>

                    </div>

                  </div>

                </div>

                <div className="rounded-3xl border border-white/[0.05] bg-black/20 p-4 xl:p-6">

                  <div className="mb-5 flex items-center justify-between">

                    <div>

                      <p className="text-xl xl:text-xl xl:text-2xl font-extralight">
                        Fresh Ingredient Usage
                      </p>

                      <p className="mt-2 text-white/40">
                        Real-time assembly consumption
                      </p>

                    </div>

                    <div className="rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-300">
                      GRAM BASED
                    </div>

                  </div>

                  <div className="space-y-4">

                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Tomato</span>
                      <span className="text-green-400">
                        2400g → 2330g
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Lettuce</span>
                      <span className="text-green-400">
                        1800g → 1760g
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Ketchup</span>
                      <span className="text-green-400">
                        1200g → 1170g
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Onion</span>
                      <span className="text-green-400">
                        900g → 880g
                      </span>
                    </div>

                  </div>

                </div>

                <div className="rounded-3xl border border-amber-500/20 bg-amber-500/10 p-4 xl:p-6">

                  <div className="mb-5 flex items-center justify-between">

                    <div>

                      <p className="text-xl xl:text-xl xl:text-2xl font-extralight">
                        Live Cooking Runtime
                      </p>

                      <p className="mt-2 text-white/40">
                        Fries cooked during service
                      </p>

                    </div>

                    <div className="rounded-full bg-amber-500/20 px-4 py-2 text-sm text-amber-300">
                      FRYER ACTIVE
                    </div>

                  </div>

                  <div className="space-y-4">

                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Potatoes</span>
                      <span className="text-amber-300">
                        12kg → 11.7kg
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Fryer Oil Usage</span>
                      <span className="text-amber-300">
                        +0.2%
                      </span>
                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div className="rounded-[28px] xl:rounded-[28px] xl:rounded-[36px] border border-white/[0.05] bg-white/[0.03] p-5 xl:p-4 xl:p-8">

              <div className="mb-4 xl:mb-8">

                <p className="mb-3 text-xs tracking-[0.24em] text-[#D6A66A]">
                  AI + PROCUREMENT
                </p>

                <h2 className="text-xl xl:text-xl xl:text-2xl xl:text-xl xl:text-2xl xl:text-3xl xl:text-xl xl:text-2xl xl:text-3xl xl:text-5xl font-extralight">
                  Operational Intelligence
                </h2>

              </div>

              <div className="space-y-4 xl:space-y-5">

                <div className="rounded-3xl border border-purple-500/20 bg-purple-500/10 p-4 xl:p-6">

                  <p className="text-xl xl:text-xl xl:text-2xl font-extralight">
                    High Wagyu Demand
                  </p>

                  <p className="mt-3 text-white/70">
                    AI predicts burger demand spike between 19:00–21:00.
                  </p>

                </div>

                <div className="rounded-3xl border border-amber-500/20 bg-amber-500/10 p-4 xl:p-6">

                  <p className="text-xl xl:text-xl xl:text-2xl font-extralight">
                    Tomato Usage Alert
                  </p>

                  <p className="mt-3 text-white/70">
                    Fresh tomato stock consumption accelerating faster than forecast.
                  </p>

                </div>

                <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-4 xl:p-6">

                  <p className="text-xl xl:text-xl xl:text-2xl font-extralight">
                    Procurement Runtime
                  </p>

                  <p className="mt-3 text-white/70">
                    Supplier recommendation prepared for tomorrow purchasing.
                  </p>

                </div>

                <div className="rounded-3xl border border-white/[0.05] bg-black/20 p-4 xl:p-6">

                  <p className="text-xl xl:text-xl xl:text-2xl font-extralight">
                    Production Forecast
                  </p>

                  <p className="mt-3 text-white/70">
                    AI recommends preparing 12 additional Wagyu patties before evening peak.
                  </p>

                </div>

              </div>

            </div>

          </div>


          <div className="grid gap-5 xl:p-4 xl:p-8 xl:grid-cols-2">

            <div className="rounded-[28px] xl:rounded-[28px] xl:rounded-[36px] border border-white/[0.05] bg-white/[0.03] p-5 xl:p-4 xl:p-8">

              <div className="mb-8 flex items-center justify-between">

                <div>

                  <p className="mb-3 text-xs tracking-[0.24em] text-[#D6A66A]">
                    AI MANAGER DECISIONS
                  </p>

                  <h2 className="text-xl xl:text-xl xl:text-2xl xl:text-xl xl:text-2xl xl:text-3xl xl:text-xl xl:text-2xl xl:text-3xl xl:text-5xl font-extralight">
                    Operational Command Center
                  </h2>

                </div>

                <div className="rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-3 text-sm text-purple-300">
                  AI ACTIVE
                </div>

              </div>

              <div className="space-y-4 xl:space-y-5">

                <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-4 xl:p-6">

                  <div className="mb-4 flex items-center justify-between">

                    <p className="text-xl xl:text-xl xl:text-2xl font-extralight">
                      Tomato Stock Alert
                    </p>

                    <div className="rounded-full bg-red-500/20 px-3 py-1 text-xs text-red-300">
                      RISK
                    </div>

                  </div>

                  <p className="text-white/70">
                    AI predicts tomato inventory shortage within 4 operational hours.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">

                    <div className="rounded-full border border-white/[0.06] bg-black/20 px-4 py-2 text-sm text-white/70">
                      Prepare Tomato Sauce
                    </div>

                    <div className="rounded-full border border-white/[0.06] bg-black/20 px-4 py-2 text-sm text-white/70">
                      Order Tomatoes
                    </div>

                  </div>

                </div>

                <div className="rounded-3xl border border-amber-500/20 bg-amber-500/10 p-4 xl:p-6">

                  <div className="mb-4 flex items-center justify-between">

                    <p className="text-xl xl:text-xl xl:text-2xl font-extralight">
                      Kitchen Load Forecast
                    </p>

                    <div className="rounded-full bg-amber-500/20 px-3 py-1 text-xs text-amber-300">
                      HIGH LOAD
                    </div>

                  </div>

                  <p className="text-white/70">
                    Fryer utilization projected to exceed 85% during evening peak.
                  </p>

                  <div className="mt-5 rounded-2xl bg-black/20 p-4 text-sm text-amber-300">

                    AI recommends opening secondary fryer station.

                  </div>

                </div>

                <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-4 xl:p-6">

                  <div className="mb-4 flex items-center justify-between">

                    <p className="text-xl xl:text-xl xl:text-2xl font-extralight">
                      Staff Runtime
                    </p>

                    <div className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-300">
                      LIVE
                    </div>

                  </div>

                  <div className="space-y-3 text-white/70">

                    <div className="flex items-center justify-between">
                      <span>Kitchen Chefs Active</span>
                      <span>2</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Bar Staff Active</span>
                      <span>1</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Service Runners Active</span>
                      <span>2</span>
                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div className="rounded-[28px] xl:rounded-[28px] xl:rounded-[36px] border border-white/[0.05] bg-white/[0.03] p-5 xl:p-4 xl:p-8">

              <div className="mb-8 flex items-center justify-between">

                <div>

                  <p className="mb-3 text-xs tracking-[0.24em] text-[#D6A66A]">
                    PROCUREMENT → ACCOUNTING FLOW
                  </p>

                  <h2 className="text-xl xl:text-xl xl:text-2xl xl:text-xl xl:text-2xl xl:text-3xl xl:text-xl xl:text-2xl xl:text-3xl xl:text-5xl font-extralight">
                    Purchase Synchronization
                  </h2>

                </div>

                <div className="rounded-full border border-green-500/20 bg-green-500/10 px-5 py-3 text-sm text-green-300">
                  SYNCHRONIZED
                </div>

              </div>

              <div className="space-y-4 xl:space-y-5">

                <div className="rounded-3xl border border-white/[0.05] bg-black/20 p-4 xl:p-6">

                  <p className="text-xl xl:text-xl xl:text-2xl font-extralight">
                    Procurement Request Created
                  </p>

                  <p className="mt-3 text-white/40">
                    AI generated tomato replenishment recommendation.
                  </p>

                </div>

                <div className="rounded-3xl border border-purple-500/20 bg-purple-500/10 p-4 xl:p-6">

                  <div className="mb-4 flex items-center justify-between">

                    <p className="text-xl xl:text-xl xl:text-2xl font-extralight">
                      Supplier Delivery Arrived
                    </p>

                    <div className="rounded-full bg-purple-500/20 px-3 py-1 text-xs text-purple-300">
                      GOODS RECEIVED
                    </div>

                  </div>

                  <div className="space-y-3 text-white/70">

                    <div className="flex items-center justify-between">
                      <span>Tomatoes</span>
                      <span>+16kg</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Wagyu Beef</span>
                      <span>+20kg</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Wine Bottles</span>
                      <span>+24</span>
                    </div>

                  </div>

                </div>

                <div className="rounded-3xl border border-amber-500/20 bg-amber-500/10 p-4 xl:p-6">

                  <div className="mb-4 flex items-center justify-between">

                    <p className="text-xl xl:text-xl xl:text-2xl font-extralight">
                      Invoice AI Processing
                    </p>

                    <div className="rounded-full bg-amber-500/20 px-3 py-1 text-xs text-amber-300">
                      OCR ACTIVE
                    </div>

                  </div>

                  <p className="text-white/70">
                    Staff photographed supplier invoice. AI extracted supplier, quantities, VAT, and pricing automatically.
                  </p>

                </div>

                <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-4 xl:p-6">

                  <div className="mb-4 flex items-center justify-between">

                    <p className="text-xl xl:text-xl xl:text-2xl font-extralight">
                      Accounting Updated
                    </p>

                    <div className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-300">
                      POSTED
                    </div>

                  </div>

                  <div className="space-y-3 text-white/70">

                    <div className="flex items-center justify-between">
                      <span>Accounts Payable</span>
                      <span>Created</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>VAT Registered</span>
                      <span>Updated</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Inventory Ledger</span>
                      <span>Synchronized</span>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>


        </div>

      </div>

      <MobileBottomNav />
    </main>
  );
}
