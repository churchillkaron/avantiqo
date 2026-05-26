"use client";

import { useEffect, useState } from "react";

import { translations } from "./translations";

export function useTranslation() {

  const [locale, setLocale] = useState("en");

  useEffect(() => {

    const savedLocale = localStorage.getItem("locale");

    if (savedLocale) {
      setLocale(savedLocale);
    }

  }, []);

  function changeLocale(newLocale) {

    localStorage.setItem("locale", newLocale);

    setLocale(newLocale);

    window.dispatchEvent(
      new CustomEvent("localeChange", {
        detail: newLocale,
      })
    );

  }

  useEffect(() => {

    const handler = (event) => {
      setLocale(event.detail);
    };

    window.addEventListener("localeChange", handler);

    return () => {
      window.removeEventListener("localeChange", handler);
    };

  }, []);

  const t = translations[locale] || translations.en;

  return {
    locale,
    setLocale: changeLocale,
    t,
  };
}
