"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import pt from "@/locales/pt.json";
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import de from "@/locales/de.json";

export type Language = "pt" | "en" | "es" | "de";

type Translations = typeof pt;

const translationsMap: Record<Language, Translations> = {
  pt,
  en,
  es,
  de,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (keyPath: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");

  useEffect(() => {
    const savedLang = localStorage.getItem("tour_rocinha_lang") as Language;
    if (savedLang && ["pt", "en", "es", "de"].includes(savedLang)) {
      setLanguageState(savedLang);
    } else {
      const userLang = navigator.language.slice(0, 2).toLowerCase();
      if (userLang === "en") setLanguageState("en");
      else if (userLang === "es") setLanguageState("es");
      else if (userLang === "de") setLanguageState("de");
      else setLanguageState("pt");
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("tour_rocinha_lang", lang);
  };

  const t = (keyPath: string): string => {
    const keys = keyPath.split(".");
    let current: any = translationsMap[language] || pt;

    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = current[key];
      } else {
        // Fallback to Portuguese if missing
        let fallback: any = pt;
        for (const fKey of keys) {
          if (fallback && typeof fallback === "object" && fKey in fallback) {
            fallback = fallback[fKey];
          } else {
            return keyPath;
          }
        }
        return typeof fallback === "string" ? fallback : keyPath;
      }
    }

    return typeof current === "string" ? current : keyPath;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
