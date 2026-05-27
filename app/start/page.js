"use client";

import SetupCompleteModal from "@/components/modals/SetupCompleteModal";
import { useMemo, useState } from "react";

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
  {
    code: "GB",
    name: "United Kingdom",
    currency: "GBP",
    symbol: "£",
    locale: "en-GB",
    timezone: "Europe/London",
    taxName: "VAT",
    taxRate: 20,
  },
  {
    code: "EU",
    name: "European Union",
    currency: "EUR",
    symbol: "€",
    locale: "en-IE",
    timezone: "Europe/Amsterdam",
    taxName: "VAT",
    taxRate: 21,
  },
  {
    code: "SE",
    name: "Sweden",
    currency: "SEK",
    symbol: "kr",
    locale: "sv-SE",
    timezone: "Europe/Stockholm",
    taxName: "VAT",
    taxRate: 25,
  },
  {
    code: "AE",
    name: "United Arab Emirates",
    currency: "AED",
    symbol: "د.إ",
    locale: "en-AE",
    timezone: "Asia/Dubai",
    taxName: "VAT",
    taxRate: 5,
  },
  {
    code: "SG",
    name: "Singapore",
    currency: "SGD",
    symbol: "S$",
    locale: "en-SG",
    timezone: "Asia/Singapore",
    taxName: "GST",
    taxRate: 9,
  },
  {
    code: "AU",
    name: "Australia",
    currency: "AUD",
    symbol: "A$",
    locale: "en-AU",
    timezone: "Australia/Sydney",
    taxName: "GST",
    taxRate: 10,
  },
];

const INDUSTRIES = [
  "Technology",
  "Hospitality",
  "Retail",
  "Construction",
  "Real Estate",
  "Healthcare",
  "Education",
  "Manufacturing",
  "Logistics",
  "Finance",
  "Consulting",
  "Marketing Agency",
  "Entertainment",
  "Other",
];

const COMPANY_SIZES = [
  "1-5",
  "6-20",
  "21-50",
  "51-200",
  "201-500",
  "500+",
];

const REVENUE_RANGES = [
  "Under 50k / month",
  "50k - 250k / month",
  "250k - 1M / month",
  "1M - 5M / month",
  "5M+ / month",
];

const CORE_PLATFORM = [
  "Authentication",
  "Tenant Isolation",
  "Administration",
  "User Management",
  "RBAC Permissions",
  "Audit Logs",
  "Security Layer",
  "Localization",
  "Currency Engine",
  "Tax Engine",
  "Notifications",
  "Settings",
];

const MODULES = [
  {
    id: "crm",
    category: "Customer",
    name: "CRM",
    description: "Customer records, pipeline, relationships and segmentation.",
    prices: { THB: 3900, USD: 119, EUR: 109, GBP: 99, SEK: 1190, AED: 449, SGD: 159, AUD: 179 },
  },
  {
    id: "customer_portal",
    category: "Customer",
    name: "Customer Portal",
    description: "Customer access, bookings, orders, support and documents.",
    prices: { THB: 5900, USD: 179, EUR: 169, GBP: 149, SEK: 1790, AED: 659, SGD: 239, AUD: 269 },
  },
  {
    id: "projects",
    category: "Management",
    name: "Projects",
    description: "Tasks, timelines, approvals, accountability and execution.",
    prices: { THB: 2900, USD: 89, EUR: 79, GBP: 69, SEK: 890, AED: 329, SGD: 119, AUD: 139 },
  },
  {
    id: "operations",
    category: "Operations",
    name: "Operations",
    description: "Daily workflows, checklists, approvals and activity control.",
    prices: { THB: 4900, USD: 149, EUR: 139, GBP: 119, SEK: 1490, AED: 549, SGD: 199, AUD: 229 },
  },
  {
    id: "pos",
    category: "Operations",
    name: "POS",
    description: "Sales, orders, tables, receipts and service workflows.",
    prices: { THB: 4900, USD: 149, EUR: 139, GBP: 119, SEK: 1490, AED: 549, SGD: 199, AUD: 229 },
  },
  {
    id: "inventory",
    category: "Operations",
    name: "Inventory",
    description: "Stock, movements, transfers and warehouse control.",
    prices: { THB: 3900, USD: 119, EUR: 109, GBP: 99, SEK: 1190, AED: 449, SGD: 159, AUD: 179 },
  },
  {
    id: "finance",
    category: "Finance",
    name: "Finance",
    description: "Financial controls, approvals, reports and company finance.",
    prices: { THB: 7900, USD: 249, EUR: 229, GBP: 199, SEK: 2490, AED: 899, SGD: 329, AUD: 379 },
  },
  {
    id: "accounting",
    category: "Finance",
    name: "Accounting",
    description: "Chart of accounts, journals, close, tax and reporting.",
    prices: { THB: 7900, USD: 249, EUR: 229, GBP: 199, SEK: 2490, AED: 899, SGD: 329, AUD: 379 },
  },
  {
    id: "procurement",
    category: "Finance",
    name: "Procurement",
    description: "Purchasing, suppliers, purchase orders and goods receipts.",
    prices: { THB: 4900, USD: 149, EUR: 139, GBP: 119, SEK: 1490, AED: 549, SGD: 199, AUD: 229 },
  },
  {
    id: "hr",
    category: "People",
    name: "HR",
    description: "Staff profiles, contracts, structure and organization control.",
    prices: { THB: 2900, USD: 89, EUR: 79, GBP: 69, SEK: 890, AED: 329, SGD: 119, AUD: 139 },
  },
  {
    id: "payroll",
    category: "People",
    name: "Payroll",
    description: "Salary, attendance, deductions, service charge and payouts.",
    prices: { THB: 5900, USD: 179, EUR: 169, GBP: 149, SEK: 1790, AED: 659, SGD: 239, AUD: 269 },
  },
  {
    id: "marketing_ai",
    category: "AI",
    name: "Marketing AI",
    description: "AI campaigns, content, publishing queue and optimization.",
    prices: { THB: 6900, USD: 219, EUR: 199, GBP: 179, SEK: 2190, AED: 799, SGD: 289, AUD: 329 },
  },
  {
    id: "owner_ai",
    category: "AI",
    name: "Owner AI",
    description: "Executive AI assistant, insights, alerts and recommendations.",
    prices: { THB: 9900, USD: 299, EUR: 279, GBP: 249, SEK: 2990, AED: 1099, SGD: 399, AUD: 449 },
  },
  {
    id: "analytics",
    category: "AI",
    name: "Analytics & BI",
    description: "Dashboards, KPIs, forecasting and performance intelligence.",
    prices: { THB: 4900, USD: 149, EUR: 139, GBP: 119, SEK: 1490, AED: 549, SGD: 199, AUD: 229 },
  },
];

const DISCOUNTS = {
  yearly: 20,
  bundle5: 10,
  bundle8: 15,
  enterprise: 20,
};

export default function StartPage() {
  const [step, setStep] = useState(1);
  const [leadId, setLeadId] = useState(null);

  const [countryCode, setCountryCode] = useState("TH");
  const [taxId, setTaxId] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [legalCompanyName, setLegalCompanyName] = useState("");
  const [operatingName, setOperatingName] = useState("");
  const [stateRegion, setStateRegion] = useState("");
  const [legalAddress, setLegalAddress] = useState("");
  const [website, setWebsite] = useState("");

  const [industry, setIndustry] = useState("Technology");
  const [companySize, setCompanySize] = useState("1-5");
  const [employeeCount, setEmployeeCount] = useState("1-5");
  const [locationCount, setLocationCount] = useState("1");
  const [revenueRange, setRevenueRange] = useState("Under 50k / month");

  const [contactName, setContactName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPhone, setAdminPhone] = useState("");
  const [adminRole, setAdminRole] = useState("Owner");
  const [mfaRequired, setMfaRequired] = useState(true);
  const [domainVerification, setDomainVerification] = useState(false);

  const [billingCycle, setBillingCycle] = useState("yearly");
  const [discountCode, setDiscountCode] = useState("");
  const [selectedModules, setSelectedModules] = useState([
    "crm",
    "projects",
    "finance",
    "analytics",
  ]);

  const [verificationStatus, setVerificationStatus] = useState("not_started");
  const [otpCode, setOtpCode] = useState("");
const [smsVerified, setSmsVerified] = useState(false);
const [sendingOtp, setSendingOtp] = useState(false);
const [verifyingOtp, setVerifyingOtp] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const [verifying, setVerifying] = useState(false);

  const [emailOtp, setEmailOtp] = useState("");
const [emailVerified, setEmailVerified] =
  useState(false);

const [sendingEmailOtp, setSendingEmailOtp] =
  useState(false);

const [verifyingEmailOtp, setVerifyingEmailOtp] =
  useState(false);

  const [showSuccessModal, setShowSuccessModal] = useState(false);


  const country = useMemo(() => {
    return COUNTRIES.find((item) => item.code === countryCode) || COUNTRIES[0];
  }, [countryCode]);

  const categories = useMemo(() => {
    return [...new Set(MODULES.map((module) => module.category))];
  }, []);

  const selectedModuleObjects = useMemo(() => {
    return MODULES.filter((module) => selectedModules.includes(module.id));
  }, [selectedModules]);

  const subtotal = useMemo(() => {
    return selectedModuleObjects.reduce((total, module) => {
      return total + (module.prices[country.currency] || 0);
    }, 0);
  }, [selectedModuleObjects, country]);

  const discountPercent = useMemo(() => {
    let value = 0;

    if (billingCycle === "yearly") value += DISCOUNTS.yearly;
    if (selectedModules.length >= 5) value += DISCOUNTS.bundle5;
    if (selectedModules.length >= 8) value += DISCOUNTS.bundle8;

    const code = discountCode.trim().toUpperCase();
    if (code === "ENTERPRISE20") value += DISCOUNTS.enterprise;
    if (code === "LAUNCH25") value += 25;

    return Math.min(value, 50);
  }, [billingCycle, selectedModules, discountCode]);

  const discountTotal = useMemo(() => {
    return Math.round(subtotal * (discountPercent / 100));
  }, [subtotal, discountPercent]);

  const finalMonthlyTotal = useMemo(() => {
    return Math.max(subtotal - discountTotal, 0);
  }, [subtotal, discountTotal]);

  const finalYearlyTotal = useMemo(() => {
    return finalMonthlyTotal * 12;
  }, [finalMonthlyTotal]);

  function formatMoney(amount) {
    try {
      return new Intl.NumberFormat(country.locale, {
        style: "currency",
        currency: country.currency,
        maximumFractionDigits: 0,
      }).format(amount);
    } catch {
      return `${country.symbol}${Number(amount || 0).toLocaleString()}`;
    }
  }

  function buildPayload(currentStep = step, status = verificationStatus) {
    return {
      lead_id: leadId,
      lead_status: currentStep >= 6 ? "ready_to_provision" : "started",
      verification_status: status,
      setup_step: currentStep,

      legal_company_name: legalCompanyName,
      operating_name: operatingName,
      registration_number: registrationNumber,
      tax_id: taxId,
      country_code: country.code,
      country_name: country.name,
      state_region: stateRegion,
      legal_address: legalAddress,

      industry,
      company_size: companySize,
      employee_count: employeeCount,
      location_count: locationCount,
      revenue_range: revenueRange,
      website,

      contact_name: contactName,
      business_email: businessEmail,
      phone_number: phoneNumber,

      currency_code: country.currency,
      currency_symbol: country.symbol,
      locale: country.locale,
      timezone: country.timezone,
      tax_name: country.taxName,
      tax_rate: country.taxRate,

      admin_name: adminName,
      admin_email: adminEmail,
      admin_phone: adminPhone,
      admin_role: adminRole,
      mfa_required: mfaRequired,
      sms_verified: smsVerified,
      email_verified: emailVerified,
      domain_verification: domainVerification,

      billing_cycle: billingCycle,
      discount_code: discountCode,
      subtotal,
      discount_total: discountTotal,
      final_monthly_total: finalMonthlyTotal,
      final_yearly_total: finalYearlyTotal,

      selected_modules: selectedModuleObjects.map((module) => ({
        id: module.id,
        name: module.name,
        category: module.category,
        monthly_price: module.prices[country.currency],
        currency: country.currency,
      })),
    };
  }

  async function saveLead(currentStep = step, status = verificationStatus) {
    try {
      setSaving(true);

      const response = await fetch("/api/onboarding/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(buildPayload(currentStep, status)),
      });

      const result = await response.json();

      if (result.success && result.lead?.id) {
        setLeadId(result.lead.id);
      }

      return result;
    } catch (error) {
      console.error(error);
      return { success: false, message: error.message };
    } finally {
      setSaving(false);
    }
  }
async function sendOtp() {
  try {
    setSendingOtp(true);

    const response = await fetch(
      "/api/onboarding/send-otp",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          phoneNumber,
        }),
      }
    );

    const result =
      await response.json();

    if (result.success) {
      alert(
        "Verification code sent."
      );
    } else {
      alert(
        result.message ||
          "Could not send OTP."
      );
    }
  } catch (error) {
    console.error(error);

    alert("OTP failed.");
  } finally {
    setSendingOtp(false);
  }
}
async function verifyOtp() {
  try {
    setVerifyingOtp(true);

    const response = await fetch(
      "/api/onboarding/verify-otp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         phoneNumber:
  phoneNumber.startsWith("+")
    ? phoneNumber
    : `+${phoneNumber}`,
          code: otpCode,
        }),
      }
    );

    const result = await response.json();

    if (result.success) {
      setSmsVerified(true);

      await saveLead(
        step,
        "sms_verified"
      );

      alert("Phone verified.");
    } else {
      alert("Invalid code.");
    }
  } catch (error) {
    console.error(error);
  } finally {
    setVerifyingOtp(false);
  }
}

async function sendEmailOtp() {
  try {
    setSendingEmailOtp(true);

    const response = await fetch(
      "/api/onboarding/send-email-otp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: businessEmail,
        }),
      }
    );

    const result = await response.json();

    if (result.success) {
      alert("Email verification sent.");
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.error(error);
  } finally {
    setSendingEmailOtp(false);
  }
}

async function verifyEmailOtp() {
  try {
    setVerifyingEmailOtp(true);

    const response = await fetch(
      "/api/onboarding/verify-email-otp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: businessEmail,
          token: emailOtp.trim(),
        }),
      }
    );

    const result = await response.json();

    if (result.success) {
      setEmailVerified(true);

      await saveLead(
        step,
        "email_verified"
      );

      alert("Email verified.");
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.error(error);
  } finally {
    setVerifyingEmailOtp(false);
  }
}
async function verifyBusiness() {
 
    try {
      setVerifying(true);
      setVerificationMessage("");

      const response = await fetch("/api/onboarding/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          countryCode: country.code,
          taxId,
          registrationNumber,
          legalCompanyName,
        }),
      });

      const result = await response.json();

      if (result.success && result.verified) {
        setVerificationStatus("pending_review");
        setVerificationMessage(result.message || "Business accepted for verification review.");

        if (result.company?.legalCompanyName && !legalCompanyName) {
          setLegalCompanyName(result.company.legalCompanyName);
        }

        await saveLead(1, "pending_review");
      } else {
        setVerificationStatus("manual_review_required");
        setVerificationMessage(result.message || "Manual verification required.");
        await saveLead(1, "manual_review_required");
      }
    } catch (error) {
      console.error(error);
      setVerificationStatus("manual_review_required");
      setVerificationMessage("Verification failed. Manual review required.");
    } finally {
      setVerifying(false);
    }
  }

  function toggleModule(moduleId) {
    setSelectedModules((current) => {
      if (current.includes(moduleId)) {
        return current.filter((item) => item !== moduleId);
      }

      return [...current, moduleId];
    });
  }

  function canContinue() {
 if (step === 1) {
  return (
    countryCode &&
    taxId.trim().length >= 3 &&
    legalCompanyName.trim().length >= 2 &&
    operatingName.trim().length >= 2 &&
    contactName.trim().length >= 2 &&
    businessEmail.trim().length >= 5 &&
    smsVerified &&
    emailVerified
  );

  }


    if (step === 2) {
      return industry && companySize && employeeCount && locationCount;
    }

    if (step === 3) {
      return adminName.trim().length >= 2 && adminEmail.trim().length >= 5;
    }

    if (step === 4) {
      return countryCode;
    }

    if (step === 5) {
      return selectedModules.length > 0;
    }

    return true;
  }

  async function nextStep() {
    if (!canContinue()) return;

    const next = Math.min(step + 1, 6);
    await saveLead(next, verificationStatus);
    setStep(next);
  }

  function previousStep() {
    setStep((current) => Math.max(current - 1, 1));
  }

  async function finishSetup() {
    const result = await saveLead(6, verificationStatus);

    if (result.success) {
setShowSuccessModal(true);
      } else {
      alert(result.message || "Setup could not be saved.");
    }
  }

  return (
   <main className="relative min-h-screen overflow-hidden bg-[#02030A] pt-[120px] text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(170,103,255,0.22),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(255,190,96,0.18),transparent_30%),radial-gradient(circle_at_60%_90%,rgba(78,54,255,0.18),transparent_34%)]" />
      <div className="fixed inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06),transparent_25%,rgba(255,255,255,0.03))]" />

      <div className="relative z-10 grid min-h-screen grid-cols-1 lg:grid-cols-[420px_1fr]">
        <aside className="hidden border-r border-white/[0.08] bg-black/30 p-8 backdrop-blur-lg lg:flex lg:flex-col lg:justify-between">
          <div>
            <div className="mb-10">
              <div className="text-4xl font-black tracking-[0.22em] text-white">
                AVANTIQO
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.38em] text-[#d7b66a]">
                Create. Operate. Scale.
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/[0.05] bg-white/[0.06] p-6 shadow-2xl">
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
                  <div key={item} className="flex items-center gap-3 text-sm text-zinc-200">
                    <span className="h-2 w-2 rounded-full bg-[#d7b66a]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-[2rem] border border-white/[0.05] bg-black/40 p-6">
              <div className="text-sm text-zinc-500">Organization</div>
              <div className="mt-2 text-xl font-semibold">
                {operatingName || legalCompanyName || "Not set"}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <SummaryMini title="Country" value={country.name} />
                <SummaryMini title="Currency" value={country.currency} />
                <SummaryMini title="Modules" value={selectedModules.length} />
                <SummaryMini title="Monthly" value={formatMoney(finalMonthlyTotal)} />
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d7b66a]/20 bg-[#d7b66a]/10 p-5 text-sm text-[#f4dfaa]">
            Every setup attempt is saved as a lead, even if the company does not finish onboarding.
          </div>
        </aside>

        <section className="flex min-h-screen flex-col p-5 md:p-8">
          <header className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-[#d7b66a]">
                Avantiqo Setup Engine
              </div>
              <h1 className="mt-3 text-3xl font-bold md:text-5xl">
                Organization Infrastructure Setup
              </h1>
            </div>

            <div className="rounded-3xl border border-white/[0.05] bg-white/[0.06] px-6 py-4 backdrop-blur-lg">
              <div className="text-xs text-zinc-400">Estimated Monthly</div>
              <div className="text-2xl font-bold">{formatMoney(finalMonthlyTotal)}</div>
              <div className="text-xs text-[#d7b66a]">
                {discountPercent}% discount applied
              </div>
            </div>
          </header>

          <div className="mb-5 grid grid-cols-6 gap-2">
            {["Verify", "Company", "Admin", "Global", "Modules", "Billing"].map((label, index) => {
              const number = index + 1;
              const active = step === number;
              const done = step > number;

              return (
                <button
                  key={label}
                  onClick={() => setStep(number)}
                  className={`rounded-2xl border px-3 py-3 text-left text-xs transition ${
                    active
                      ? "border-[#d7b66a] bg-[#d7b66a] text-black"
                      : done
                      ? "border-emerald-400/40 bg-emerald-400/10 text-white"
                      : "border-white/[0.08] bg-white/[0.025] text-zinc-400"
                  }`}
                >
                  <div className="font-bold">0{number}</div>
                  <div>{label}</div>
                </button>
              );
            })}
          </div>

          <div className="flex-1 rounded-[2rem] border border-white/[0.05] bg-black/40 p-5 shadow-2xl backdrop-blur-lg md:p-8">
            {step === 1 && (
  <StepBlock
    title="Business Verification"
    subtitle="Collect the legal company, operating name, tax identity and contact immediately. This saves to Supabase even if they leave."
  >
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

      <Field label="Country">
        <select
          className="input"
          value={countryCode}
          onChange={(e) =>
            setCountryCode(e.target.value)
          }
        >
          {COUNTRIES.map((item) => (
            <option
              key={item.code}
              value={item.code}
            >
              {item.name}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Tax / VAT ID">
        <input
          className="input"
          value={taxId}
          onChange={(e) =>
            setTaxId(e.target.value)
          }
          placeholder="Tax ID / VAT number"
        />
      </Field>

      <Field label="Registration Number">
        <input
          className="input"
          value={registrationNumber}
          onChange={(e) =>
            setRegistrationNumber(
              e.target.value
            )
          }
          placeholder="Company registration number"
        />
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
          placeholder="Registered legal entity"
        />
      </Field>

      <Field label="Operating / Brand Name">
        <input
          className="input"
          value={operatingName}
          onChange={(e) =>
            setOperatingName(
              e.target.value
            )
          }
          placeholder="Public operating name"
        />
      </Field>

      <Field label="Website">
        <input
          className="input"
          value={website}
          onChange={(e) =>
            setWebsite(e.target.value)
          }
          placeholder="https://company.com"
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
          placeholder="Main contact person"
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
          placeholder="contact@company.com"
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
          placeholder="+66619067927"
        />
      </Field>

      <Field label="Legal Address">
        <input
          className="input"
          value={legalAddress}
          onChange={(e) =>
            setLegalAddress(
              e.target.value
            )
          }
          placeholder="Company registered address"
        />
      </Field>

    </div>

    <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center">
      <button
        onClick={verifyBusiness}
        disabled={verifying}
        className="goldButton"
      >
        {verifying
          ? "Verifying..."
          : "Verify & Save Lead"}
      </button>

      <div className="text-sm text-zinc-400">
        Status:
        <span className="text-[#d7b66a] ml-2">
          {verificationStatus}
        </span>
      </div>
    </div>

    {verificationMessage && (
      <div className="mt-4 rounded-2xl border border-[#d7b66a]/30 bg-[#d7b66a]/10 p-4 text-sm text-[#f4dfaa]">
        {verificationMessage}
      </div>
    )}

    <div className="mt-6 rounded-3xl border border-white/[0.05] bg-black/40 p-6">

  <div className="mb-4">
    <div className="text-xl font-bold text-white">
      SMS Verification
    </div>

    <div className="mt-1 text-sm text-zinc-400">
      Verify your business phone number before continuing
    </div>
  </div>

  {!smsVerified ? (
    <div className="space-y-4">

      <button
        onClick={sendOtp}
        disabled={sendingOtp}
        className="goldButton w-full"
      >
        {sendingOtp
          ? "Sending..."
          : "Send SMS Verification Code"}
      </button>

      <input
        className="input"
        placeholder="Enter SMS verification code"
        value={otpCode}
        onChange={(e) =>
          setOtpCode(e.target.value)
        }
      />

      <button
        onClick={verifyOtp}
        disabled={verifyingOtp}
        className="secondaryButton w-full"
      >
        {verifyingOtp
          ? "Verifying..."
          : "Verify Phone"}
      </button>

    </div>
  ) : (
    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-300">
      ✓ Phone Number Verified
    </div>
  )}

</div>

    <div className="mt-6 rounded-3xl border border-white/[0.05] bg-black/40 p-6">

      <div className="mb-4">
        <div className="text-xl font-bold text-white">
          Email Verification
        </div>

        <div className="mt-1 text-sm text-zinc-400">
          Verify your business email before continuing
        </div>
      </div>

      {!emailVerified ? (
        <div className="space-y-4">

          <button
            onClick={sendEmailOtp}
            disabled={sendingEmailOtp}
            className="goldButton w-full"
          >
            {sendingEmailOtp
              ? "Sending..."
              : "Send Email Verification Code"}
          </button>

          <input
            className="input"
            placeholder="Enter email verification code"
            value={emailOtp}
            onChange={(e) =>
              setEmailOtp(
                e.target.value
              )
            }
          />

          <button
            onClick={verifyEmailOtp}
            disabled={verifyingEmailOtp}
            className="secondaryButton w-full"
          >
            {verifyingEmailOtp
              ? "Verifying..."
              : "Verify Email"}
          </button>

        </div>
      ) : (
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-300">
          ✓ Business Email Verified
        </div>
      )}

    </div>

  </StepBlock>
)}

            {step === 2 && (
              <StepBlock
                title="Company Infrastructure"
                subtitle="This creates the business profile Avantiqo will use for AI, billing, modules, reporting and automation."
              >
                <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                  <Field label="Industry">
                    <select className="input" value={industry} onChange={(e) => setIndustry(e.target.value)}>
                      {INDUSTRIES.map((item) => <option key={item}>{item}</option>)}
                    </select>
                  </Field>

                  <Field label="Company Size">
                    <select className="input" value={companySize} onChange={(e) => setCompanySize(e.target.value)}>
                      {COMPANY_SIZES.map((item) => <option key={item}>{item}</option>)}
                    </select>
                  </Field>

                  <Field label="Employee Count">
                    <select className="input" value={employeeCount} onChange={(e) => setEmployeeCount(e.target.value)}>
                      {COMPANY_SIZES.map((item) => <option key={item}>{item}</option>)}
                    </select>
                  </Field>

                  <Field label="Number of Locations / Branches">
                    <input className="input" value={locationCount} onChange={(e) => setLocationCount(e.target.value)} placeholder="1" />
                  </Field>

                  <Field label="Revenue Range">
                    <select className="input" value={revenueRange} onChange={(e) => setRevenueRange(e.target.value)}>
                      {REVENUE_RANGES.map((item) => <option key={item}>{item}</option>)}
                    </select>
                  </Field>

                  <Field label="State / Region">
                    <input className="input" value={stateRegion} onChange={(e) => setStateRegion(e.target.value)} placeholder="Province / state / region" />
                  </Field>
                </div>
              </StepBlock>
            )}

            {step === 3 && (
              <StepBlock
                title="Administration & Security"
                subtitle="Administration is core infrastructure and is always included. It is not a paid module."
              >
                <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                  <Field label="Admin Name">
                    <input className="input" value={adminName} onChange={(e) => setAdminName(e.target.value)} placeholder="Owner / administrator" />
                  </Field>

                  <Field label="Admin Email">
                    <input className="input" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} placeholder="admin@company.com" />
                  </Field>

                  <Field label="Admin Phone">
                    <input className="input" value={adminPhone} onChange={(e) => setAdminPhone(e.target.value)} placeholder="+66..." />
                  </Field>

                  <Field label="Admin Role">
                    <select className="input" value={adminRole} onChange={(e) => setAdminRole(e.target.value)}>
                      <option>Owner</option>
                      <option>CEO</option>
                      <option>Managing Director</option>
                      <option>General Manager</option>
                      <option>Finance Manager</option>
                      <option>Operations Manager</option>
                    </select>
                  </Field>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <ToggleCard title="Require MFA" active={mfaRequired} onClick={() => setMfaRequired(!mfaRequired)} />
                  <ToggleCard title="Domain Verification" active={domainVerification} onClick={() => setDomainVerification(!domainVerification)} />
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
                  {CORE_PLATFORM.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/[0.05] bg-white/[0.025] p-4 text-sm text-zinc-300">
                      {item}
                    </div>
                  ))}
                </div>
              </StepBlock>
            )}

            {step === 4 && (
              <StepBlock
                title="Global Configuration"
                subtitle="Country controls currency, tax, locale, timezone and billing formatting automatically."
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <InfoCard title="Country" value={country.name} />
                  <InfoCard title="Currency" value={`${country.currency} ${country.symbol}`} />
                  <InfoCard title="Timezone" value={country.timezone} />
                  <InfoCard title="Tax" value={`${country.taxName} ${country.taxRate}%`} />
                  <InfoCard title="Locale" value={country.locale} />
                  <InfoCard title="Sample Price" value={formatMoney(1500)} />
                </div>
              </StepBlock>
            )}

            {step === 5 && (
              <StepBlock
                title="Platform Modules"
                subtitle="Compact category setup. No long scrolling marketplace. Customers choose business capability modules only."
              >
                <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-4">
                  <InfoCard title="Selected" value={`${selectedModules.length} modules`} />
                  <InfoCard title="Subtotal" value={formatMoney(subtotal)} />
                  <InfoCard title="Discount" value={`${discountPercent}%`} />
                  <InfoCard title="Final Monthly" value={formatMoney(finalMonthlyTotal)} />
                </div>

                <div className="grid grid-cols-1 gap-5 xl:grid-cols-[220px_1fr]">
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="rounded-2xl border border-white/[0.05] bg-white/[0.025] px-4 py-3 text-sm">
                        {category}
                      </div>
                    ))}
                  </div>

                  <div className="max-h-[430px] overflow-y-auto pr-2">
                    {categories.map((category) => (
                      <div key={category} className="mb-6">
                        <h3 className="mb-3 text-lg font-semibold text-[#d7b66a]">{category}</h3>

                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                          {MODULES.filter((module) => module.category === category).map((module) => {
                            const active = selectedModules.includes(module.id);
                            const price = module.prices[country.currency] || 0;

                            return (
                              <button
                                key={module.id}
                                onClick={() => toggleModule(module.id)}
                                className={`rounded-2xl border p-4 text-left transition ${
                                  active
                                    ? "border-[#d7b66a] bg-[#d7b66a] text-black"
                                    : "border-white/[0.08] bg-black/40 hover:border-[#d7b66a]/60"
                                }`}
                              >
                                <div className="flex items-start justify-between gap-3">
                                  <div>
                                    <div className="font-bold">{module.name}</div>
                                    <div className={`mt-2 text-xs leading-relaxed ${active ? "text-black/70" : "text-zinc-400"}`}>
                                      {module.description}
                                    </div>
                                  </div>

                                  <div className={`h-4 w-4 rounded-full border ${active ? "border-black bg-black" : "border-white/30"}`} />
                                </div>

                                <div className="mt-4 text-right font-bold">
                                  {formatMoney(price)}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </StepBlock>
            )}

            {step === 6 && (
              <StepBlock
                title="Billing & Final Review"
                subtitle="This saves billing intent, discount structure, selected modules and organization value."
              >
                <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                  <Field label="Billing Cycle">
                    <select className="input" value={billingCycle} onChange={(e) => setBillingCycle(e.target.value)}>
                      <option value="monthly">Monthly</option>
                      <option value="yearly">Yearly - 20% discount</option>
                    </select>
                  </Field>

                  <Field label="Discount Code">
                    <input className="input" value={discountCode} onChange={(e) => setDiscountCode(e.target.value)} placeholder="ENTERPRISE20 / LAUNCH25" />
                  </Field>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
                  <InfoCard title="Subtotal" value={formatMoney(subtotal)} />
                  <InfoCard title="Discount" value={`-${formatMoney(discountTotal)}`} />
                  <InfoCard title="Monthly" value={formatMoney(finalMonthlyTotal)} />
                  <InfoCard title="Yearly" value={formatMoney(finalYearlyTotal)} />
                </div>

                <div className="mt-6 rounded-3xl border border-white/[0.05] bg-black/40 p-6">
                  <div className="mb-4 text-lg font-bold">Final Setup Summary</div>
                  <div className="grid grid-cols-1 gap-3 text-sm text-zinc-300 md:grid-cols-2">
                    <div>Legal Company: {legalCompanyName || "-"}</div>
                    <div>Operating Name: {operatingName || "-"}</div>
                    <div>Country: {country.name}</div>
                    <div>Contact: {contactName || "-"}</div>
                    <div>Email: {businessEmail || "-"}</div>
                    <div>Verification: {verificationStatus}</div>
                    <div>Modules: {selectedModules.length}</div>
                    <div>Billing: {billingCycle}</div>
                  </div>
                </div>
              </StepBlock>
            )}

            <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-5">
              <button onClick={previousStep} disabled={step === 1} className="secondaryButton">
                Back
              </button>

              <div className="text-sm text-zinc-500">
                {saving ? "Saving lead..." : `Step ${step} of 6`}
              </div>

              {step < 6 ? (
                <button onClick={nextStep} disabled={!canContinue() || saving} className="goldButton">
                  Continue
                </button>
              ) : (
                <button onClick={finishSetup} disabled={saving} className="goldButton">
                  Save & Notify
                </button>
              )}
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        .input {
          width: 100%;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(0, 0, 0, 0.45);
          padding: 1rem 1.1rem;
          color: white;
          outline: none;
        }

        .input:focus {
          border-color: #d7b66a;
        }

        .input::placeholder {
          color: rgb(113 113 122);
        }

        option {
          background: #050407;
          color: white;
        }

        .goldButton {
          border-radius: 1rem;
          background: linear-gradient(135deg, #f7e7b0, #d7b66a, #9d6b2f);
          padding: 0.95rem 1.5rem;
          color: black;
          font-weight: 800;
          transition: opacity 0.2s ease;
        }

        .goldButton:disabled {
          cursor: not-allowed;
          opacity: 0.45;
        }

        .secondaryButton {
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 0.95rem 1.5rem;
          color: rgb(212 212 216);
        }

        .secondaryButton:disabled {
          cursor: not-allowed;
          opacity: 0.35;
        }
      `}</style>

      <SetupCompleteModal
  open={showSuccessModal}
  onClose={() =>
    setShowSuccessModal(false)
  }
/>
    </main>
  );
}

function StepBlock({ title, subtitle, children }) {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
          {subtitle}
        </p>
      </div>

      {children}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="mb-2 block text-sm text-zinc-500">{label}</label>
      {children}
    </div>
  );
}

function InfoCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-white/[0.05] bg-white/[0.025] p-5">
      <div className="mb-2 text-xs uppercase tracking-[0.18em] text-zinc-500">
        {title}
      </div>
      <div className="break-words text-lg font-bold">{value}</div>
    </div>
  );
}

function SummaryMini({ title, value }) {
  return (
    <div className="rounded-2xl border border-white/[0.05] bg-white/[0.025] p-3">
      <div className="text-xs text-zinc-500">{title}</div>
      <div className="mt-1 truncate text-sm font-semibold">{value}</div>
    </div>
  );
}

function ToggleCard({ title, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl border p-5 text-left transition ${
        active
          ? "border-[#d7b66a] bg-[#d7b66a] text-black"
          : "border-white/[0.08] bg-white/[0.025] text-white"
      }`}
    >
      <div className="font-bold">{title}</div>
      <div className="mt-2 text-sm opacity-70">
        {active ? "Enabled" : "Disabled"}
      </div>
    </button>
  );
}