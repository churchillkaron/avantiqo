"use client";

import { useState } from "react";

const sampleText = `
Avantiqo connects departments, workflows, approvals,
operations, payroll, procurement, accounting,
marketing and live business visibility into one
enterprise operational runtime.
`;

export default function LocalizationPage() {

  const [locale, setLocale] = useState("th");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {

    try {

      setLoading(true);

      const response = await fetch("/api/localize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locale,
          page: "platform",
          sourceText: sampleText,
        }),
      });

      const data = await response.json();

      setResult(data.prompt);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }

  }

  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">

      <div className="mx-auto max-w-5xl">

        <p className="mb-4 text-xs tracking-[0.35em] text-[#D6A66A]">
          AI LOCALIZATION ENGINE
        </p>

        <h1 className="text-6xl font-light tracking-[-0.06em]">
          Dynamic enterprise localization
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
          AI rewrites operational content, terminology,
          examples, currencies and business positioning
          based on country and industry context.
        </p>

        <div className="mt-12 flex gap-4">

          <button
            onClick={() => setLocale("th")}
            className={`rounded-xl px-5 py-3 ${
              locale === "th"
                ? "bg-[#D6A66A] text-black"
                : "border border-white/10 bg-white/5"
            }`}
          >
            Thai
          </button>

          <button
            onClick={() => setLocale("ru")}
            className={`rounded-xl px-5 py-3 ${
              locale === "ru"
                ? "bg-[#D6A66A] text-black"
                : "border border-white/10 bg-white/5"
            }`}
          >
            Russian
          </button>

          <button
            onClick={() => setLocale("zh")}
            className={`rounded-xl px-5 py-3 ${
              locale === "zh"
                ? "bg-[#D6A66A] text-black"
                : "border border-white/10 bg-white/5"
            }`}
          >
            Chinese
          </button>

        </div>

        <div className="mt-10">

          <button
            onClick={handleGenerate}
            className="rounded-2xl bg-gradient-to-r from-[#D6A66A] to-[#8B5CF6] px-8 py-4"
          >
            {loading ? "Generating..." : "Generate Localization"}
          </button>

        </div>

        <div className="mt-14 rounded-[30px] border border-white/10 bg-white/[0.03] p-8">

          <pre className="whitespace-pre-wrap text-sm leading-8 text-white/70">
            {result}
          </pre>

        </div>

      </div>

    </main>
  );
}
