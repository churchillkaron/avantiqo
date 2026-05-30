"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";

import { translations } from "@/app/lib/i18n/translations";

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState("en");

  useEffect(() => {
    const savedLocale =
      typeof window !== "undefined"
        ? localStorage.getItem("locale")
        : null;

    if (
      savedLocale &&
      translations[savedLocale]
    ) {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale) => {
    setLocaleState(newLocale);

    if (typeof window !== "undefined") {
      localStorage.setItem(
        "locale",
        newLocale
      );
    }
  };

  const t = (key) => {
    const keys = key.split(".");

    let value =
      translations?.[locale];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  const value = useMemo(() => {
    return {
      locale,
      setLocale,
      t,
    };
  }, [locale]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  return useContext(I18nContext);
}
