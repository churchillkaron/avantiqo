"use client";

import {
  useCallback,
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";

import { translations } from "@/app/lib/i18n/translations";

const I18nContext = createContext();

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

export function I18nProvider({ children }) {
  const locale = useSyncExternalStore(
    subscribeToLocale,
    getLocaleSnapshot,
    () => "en",
  );

  const setLocale = useCallback((newLocale) => {
    if (!translations[newLocale]) {
      return;
    }

    localStorage.setItem("locale", newLocale);
    window.dispatchEvent(new Event("localeChange"));
  }, []);

  const t = useCallback((key) => {
    const keys = key.split(".");

    let value = translations[locale];
    let fallback = translations.en;

    for (const k of keys) {
      value = value?.[k];
      fallback = fallback?.[k];
    }

    return value || fallback || key;
  }, [locale]);

  const value = useMemo(() => {
    return {
      locale,
      setLocale,
      t,
      translations: translations?.[locale] || {},
    };
  }, [locale, setLocale, t]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  return useContext(I18nContext);
}
