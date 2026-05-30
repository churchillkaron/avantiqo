"use client";

import { useTranslation } from "@/app/providers/I18nProvider";

const languages = [
  { code: "en", label: "🇺🇸 EN" },
  { code: "th", label: "🇹🇭 TH" },
  { code: "ru", label: "🇷🇺 RU" },
  { code: "zh", label: "🇨🇳 中文" },
  { code: "fr", label: "🇫🇷 FR" },
  { code: "it", label: "🇮🇹 IT" },
  { code: "sv", label: "🇸🇪 SV" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } =
    useTranslation();

  return (
    <select
      value={locale}
      onChange={(event) =>
        setLocale(event.target.value)
      }
      className="
        rounded-2xl
        border
        border-white/10
        bg-black/40
        px-4
        py-2
        text-sm
        text-white
        backdrop-blur-xl
        outline-none
      "
    >
      {languages.map((lang) => (
        <option
          key={lang.code}
          value={lang.code}
          className="bg-black text-white"
        >
          {lang.label}
        </option>
      ))}
    </select>
  );
}
