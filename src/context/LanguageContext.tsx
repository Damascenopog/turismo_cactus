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

export const languageDetails: Record<Language, { label: string; flag: string; nativeName: string }> = {
  pt: { label: "Português", flag: "🇧🇷", nativeName: "Português (BR)" },
  en: { label: "English", flag: "🇺🇸", nativeName: "English (US)" },
  es: { label: "Español", flag: "🇪🇸", nativeName: "Español" },
  de: { label: "Deutsch", flag: "🇩🇪", nativeName: "Deutsch" },
};

interface LanguageContextType {
  language: Language;
  detectedLang: Language;
  showLangNotification: boolean;
  dismissLangNotification: () => void;
  setLanguage: (lang: Language) => void;
  t: (keyPath: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");
  const [detectedLang, setDetectedLang] = useState<Language>("pt");
  const [showLangNotification, setShowLangNotification] = useState(false);

  useEffect(() => {
    let initialLang: Language = "pt";
    const userLang = typeof navigator !== "undefined" ? navigator.language.slice(0, 2).toLowerCase() : "pt";
    
    if (userLang === "en") initialLang = "en";
    else if (userLang === "es") initialLang = "es";
    else if (userLang === "de") initialLang = "de";
    else initialLang = "pt";

    setDetectedLang(initialLang);

    const savedLang = localStorage.getItem("tour_rocinha_lang") as Language;
    if (savedLang && ["pt", "en", "es", "de"].includes(savedLang)) {
      setLanguageState(savedLang);
    } else {
      setLanguageState(initialLang);
    }

    // Check if notification was already dismissed in this session
    try {
      const hasNotifiedSession = sessionStorage.getItem("tour_cactus_lang_notified");
      if (!hasNotifiedSession) {
        const timer = setTimeout(() => {
          setShowLangNotification(true);
        }, 800);
        return () => clearTimeout(timer);
      }
    } catch {
      setShowLangNotification(true);
    }
  }, []);

  const dismissLangNotification = () => {
    setShowLangNotification(false);
    try {
      sessionStorage.setItem("tour_cactus_lang_notified", "true");
      localStorage.setItem("tour_cactus_lang_notified", "true");
    } catch {}
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("tour_rocinha_lang", lang);
      sessionStorage.setItem("tour_cactus_lang_notified", "true");
    } catch {}
    setShowLangNotification(false);
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
    <LanguageContext.Provider
      value={{
        language,
        detectedLang,
        showLangNotification,
        dismissLangNotification,
        setLanguage,
        t,
      }}
    >
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
