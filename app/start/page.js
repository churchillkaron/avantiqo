"use client";

import { useMemo, useState } from "react";
import SiteTopNav from "../components/SiteTopNav";
import LanguageSwitcher from "../components/LanguageSwitcher";

const COUNTRIES = [
  {
    code: "TH",
    name: "Thailand",
    currency: "THB",
    symbol: "฿",
    locale: "th-TH",
    timezone: "Asia/Bangkok",
    taxName: "VAT",
    taxRate: 7,
  },
  {
    code: "US",
    name: "United States",
    currency: "USD",
    symbol: "$",
    locale: "en-US",
    timezone: "America/New_York",
    taxName: "Sales Tax",
    taxRate: 0,
  },
];

export default function StartPage() {
  const [step, setStep] = useState(1);

  const [countryCode, setCountryCode] =
    useState("TH");

  const [legalCompanyName, setLegalCompanyName] =
    useState("");

  const [operatingName, setOperatingName] =
    useState("");

  const [contactName, setContactName] =
    useState("");

  const [businessEmail, setBusinessEmail] =
    useState("");

  const [phoneNumber, setPhoneNumber] =
    useState("");

  const [industry, setIndustry] =
    useState("Technology");

  const [companySize, setCompanySize] =
    useState("1-5");

  const [billingCycle, setBillingCycle] =
    useState("yearly");

  const [saving, setSaving] =
    useState(false);

  const [showSuccessModal, setShowSuccessModal] =
    useState(false);

  const country = useMemo(() => {
    return (
      COUNTRIES.find(
        (item) => item.code === countryCode
      ) || COUNTRIES[0]
    );
  }, [countryCode]);

  function nextStep() {
    setStep((current) =>
      Math.min(current + 1, 6)
    );
  }

  function previousStep() {
    setStep((current) =>
      Math.max(current - 1, 1)
    );
  }

  async function finishSetup() {
    try {
      setSaving(true);

      await new Promise((resolve) =>
        setTimeout(resolve, 1200)
      );

      setShowSuccessModal(true);
    } catch (error) {
      console.error(error);
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      <SiteTopNav />

      <main className="relative min-h-screen overflow-hidden bg-[#02030A] pt-[190px] text-white">

        <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(170,103,255,0.22),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(255,190,96,0.18),transparent_30%),radial-gradient(circle_at_60%_90%,rgba(78,54,255,0.18),transparent_34%)]" />

        <div className="relative z-10 grid min-h-screen grid-cols-1 lg:grid-cols-[420px_1fr]">

          <aside className="hidden lg:flex flex-col justify-between border-r border-white/[0.08] bg-black/30 p-8 backdrop-blur-lg">

            <div>

              <div className="mb-10">
                <div className="text-4xl font-black tracking-[0.22em]">
                  VORTIQA
                </div>

                <div className="mt-3 text-xs uppercase tracking-[0.38em] text-[#d7b66a]">
                  Create. Operate. Scale.
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/[0.05] bg-white/[0.06] p-6">

                <div className="mb-4 text-sm uppercase tracking-[0.24em] text-zinc-400">
                  Infrastructure Preview
                </div>

                <div className="space-y-3">

                  {[
                    "Organization Identity",
                    "Business Verification",
                    "Global Currency Engine",
                    "Tenant Administration",
                    "Security & Audit Layer",
                    "AI Business Context",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-zinc-200"
                    >
                      <span className="h-2 w-2 rounded-full bg-[#d7b66a]" />

                      {item}
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </aside>

          <section className="flex min-h-screen flex-col p-5 md:p-8">

            <header className="mb-6 flex items-center justify-between">

              <div>

                <div className="text-xs uppercase tracking-[0.35em] text-[#d7b66a]">
                  Onboarding Engine
                </div>

                <h1 className="mt-3 text-4xl font-bold">
                  Enterprise Setup
                </h1>

              </div>

              <div className="flex items-center gap-4">

                <LanguageSwitcher />

                <div className="rounded-3xl border border-white/[0.05] bg-white/[0.06] px-6 py-4">

                  <div className="text-xs text-zinc-400">
                    Currency
                  </div>

                  <div className="text-2xl font-bold">
                    {country.currency}
                  </div>

                </div>

              </div>

            </header>

            <div className="flex-1 rounded-[2rem] border border-white/[0.05] bg-black/40 p-6 backdrop-blur-lg">

              {step === 1 && (
                <StepBlock
                  title="Business Verification"
                  subtitle="Verify and save organization identity."
                >

                  <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

                    <Field label="Country">

                      <select
                        className="input"
                        value={countryCode}
                        onChange={(e) =>
                          setCountryCode(
                            e.target.value
                          )
                        }
                      >

                        {COUNTRIES.map((country) => (
                          <option
                            key={country.code}
                            value={country.code}
                          >
                            {country.name}
                          </option>
                        ))}

                      </select>

                    </Field>

                    <Field label="Legal Company Name">

                      <input
                        className="input"
                        value={legalCompanyName}
                        onChange={(e) =>
                          setLegalCompanyName(
                            e.target.value
                          )
                        }
                      />

                    </Field>

                    <Field label="Operating Name">

                      <input
                        className="input"
                        value={operatingName}
                        onChange={(e) =>
                          setOperatingName(
                            e.target.value
                          )
                        }
                      />

                    </Field>

                    <Field label="Contact Name">

                      <input
                        className="input"
                        value={contactName}
                        onChange={(e) =>
                          setContactName(
                            e.target.value
                          )
                        }
                      />

                    </Field>

                    <Field label="Business Email">

                      <input
                        className="input"
                        value={businessEmail}
                        onChange={(e) =>
                          setBusinessEmail(
                            e.target.value
                          )
                        }
                      />

                    </Field>

                    <Field label="Phone Number">

                      <input
                        className="input"
                        value={phoneNumber}
                        onChange={(e) =>
                          setPhoneNumber(
                            e.target.value
                          )
                        }
                      />

                    </Field>

                  </div>

                </StepBlock>
              )}

              {step === 2 && (
                <StepBlock
                  title="Company Infrastructure"
                  subtitle="Configure company profile."
                >

                  <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

                    <Field label="Industry">

                      <select
                        className="input"
                        value={industry}
                        onChange={(e) =>
                          setIndustry(
                            e.target.value
                          )
                        }
                      >
                        <option>
                          Technology
                        </option>

                        <option>
                          Hospitality
                        </option>

                        <option>
                          Retail
                        </option>

                      </select>

                    </Field>

                    <Field label="Company Size">

                      <select
                        className="input"
                        value={companySize}
                        onChange={(e) =>
                          setCompanySize(
                            e.target.value
                          )
                        }
                      >
                        <option>
                          1-5
                        </option>

                        <option>
                          6-20
                        </option>

                        <option>
                          21-50
                        </option>

                      </select>

                    </Field>

                  </div>

                </StepBlock>
              )}

              {step === 3 && (
                <StepBlock
                  title="Administration & Security"
                  subtitle="Configure administration controls."
                >
                  <div className="text-zinc-400">
                    Administration configuration ready.
                  </div>
                </StepBlock>
              )}

              {step === 4 && (
                <StepBlock
                  title="Global Configuration"
                  subtitle="Configure currency, tax and locale."
                >
                  <div className="text-zinc-400">
                    Currency: {country.currency}
                  </div>
                </StepBlock>
              )}

              {step === 5 && (
                <StepBlock
                  title="Platform Modules"
                  subtitle="Select modules."
                >
                  <div className="text-zinc-400">
                    Module selection restored.
                  </div>
                </StepBlock>
              )}

              {step === 6 && (
                <StepBlock
                  title="Billing & Final Review"
                  subtitle="Finalize onboarding."
                >

                  <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

                    <Field label="Billing Cycle">

                      <select
                        className="input"
                        value={billingCycle}
                        onChange={(e) =>
                          setBillingCycle(
                            e.target.value
                          )
                        }
                      >
                        <option value="monthly">
                          Monthly
                        </option>

                        <option value="yearly">
                          Yearly
                        </option>

                      </select>

                    </Field>

                  </div>

                </StepBlock>
              )}

              <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-5">

                <button
                  onClick={previousStep}
                  disabled={step === 1}
                  className="secondaryButton"
                >
                  Back
                </button>

                <div className="text-sm text-zinc-500">
                  {saving
                    ? "Saving..."
                    : `Step ${step} of 6`}
                </div>

                {step < 6 ? (

                  <button
                    onClick={nextStep}
                    className="goldButton"
                  >
                    Continue
                  </button>

                ) : (

                  <button
                    onClick={finishSetup}
                    disabled={saving}
                    className="goldButton"
                  >
                    Save & Notify
                  </button>

                )}

              </div>

            </div>

          </section>

        </div>

        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">

            <div className="w-full max-w-md rounded-[2rem] border border-white/[0.08] bg-[#09090F] p-8 text-center">

              <div className="mb-4 text-3xl font-bold">
                Setup Complete
              </div>

              <div className="mb-6 text-zinc-400">
                Enterprise onboarding saved successfully.
              </div>

              <button
                onClick={() =>
                  setShowSuccessModal(false)
                }
                className="goldButton"
              >
                Close
              </button>

            </div>

          </div>
        )}

      </main>

      <style jsx global>{`
        .input {
          width: 100%;
          border-radius: 1rem;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(0,0,0,0.45);
          padding: 1rem 1.1rem;
          color: white;
          outline: none;
        }

        .input:focus {
          border-color: #d7b66a;
        }

        option {
          background: #050407;
          color: white;
        }

        .goldButton {
          border-radius: 1rem;
          background: linear-gradient(
            135deg,
            #f7e7b0,
            #d7b66a,
            #9d6b2f
          );
          padding: 0.95rem 1.5rem;
          color: black;
          font-weight: 800;
        }

        .secondaryButton {
          border-radius: 1rem;
          border: 1px solid rgba(255,255,255,0.12);
          padding: 0.95rem 1.5rem;
          color: rgb(212 212 216);
        }
      `}</style>

    </>
  );
}

function StepBlock({
  title,
  subtitle,
  children,
}) {
  return (
    <div>

      <div className="mb-8">

        <h2 className="text-3xl font-bold">
          {title}
        </h2>

        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
          {subtitle}
        </p>

      </div>

      {children}

    </div>
  );
}

function Field({
  label,
  children,
}) {
  return (
    <div>

      <div className="mb-2 text-sm font-medium text-zinc-300">
        {label}
      </div>

      {children}

    </div>
  );
}