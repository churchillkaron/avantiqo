"use client";

import { useCallback, useSyncExternalStore } from "react";

import { translations } from "./translations";

function getLocaleSnapshot() {
  const savedLocale = localStorage.getItem("locale");
  return savedLocale && translations[savedLocale] ? savedLocale : "en";
}

function subscribeToLocale(callback) {
  window.addEventListener("localeChange", callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener("localeChange", callback);
    window.removeEventListener("storage", callback);
  };
}

export function useTranslation() {
  const locale = useSyncExternalStore(
    subscribeToLocale,
    getLocaleSnapshot,
    () => "en",
  );

  const changeLocale = useCallback((newLocale) => {
    if (!translations[newLocale]) {
      return;
    }

    localStorage.setItem("locale", newLocale);
    window.dispatchEvent(new Event("localeChange"));
  }, []);

  const t = translations[locale] || translations.en;

  return {
    locale,
    setLocale: changeLocale,
    t,
  };
}
