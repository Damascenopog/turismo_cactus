"use client";

import React, { useState, useEffect } from "react";
import { useLanguage, Language } from "@/context/LanguageContext";
import { useTheme } from "next-themes";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Sun, Moon, Globe, Menu, X, MessageCircle, ChevronRight } from "lucide-react";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = getWhatsAppLink(language);

  const navLinks = [
    { href: "#hero", label: "Rocinha" },
    { href: "#booking", label: "Vidigal" },
    { href: "#base", label: "Rio Tour" },
  ];

  return (
    <header className="sticky top-3 sm:top-5 z-40 w-full px-3 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300">
      {/* Floating iPhone / Dynamic Island Capsule Bar */}
      <div
        className={`pointer-events-auto max-w-6xl mx-auto rounded-full transition-all duration-300 border ${
          scrolled
            ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border-black/10 dark:border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.5)] py-2 sm:py-2.5 px-4 sm:px-6"
            : "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-black/5 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)] py-2.5 sm:py-3 px-4 sm:px-6"
        } flex items-center justify-between gap-2`}
      >
        
        {/* Brand Logo (Left) */}
        <a
          href="#hero"
          className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-full px-1"
          aria-label="Tour Cactus - Início"
        >
          <div className="flex flex-col">
            <span className="font-black text-sm sm:text-base tracking-tight text-emerald-600 dark:text-emerald-400 group-hover:opacity-90 transition-opacity">
              Tour Cactus
            </span>
            <span className="text-[10px] uppercase font-extrabold tracking-wider text-slate-500 dark:text-slate-400 hidden xs:inline">
              Turismo pela Rocinha • Rio
            </span>
          </div>
        </a>

        {/* Center Navigation: iPhone Segmented Capsule Pills */}
        <nav
          className="hidden md:flex items-center p-1 rounded-full bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/60 dark:border-slate-700/60 shadow-inner"
          aria-label="Navegação Principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 rounded-full text-xs font-extrabold text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:bg-white dark:hover:bg-slate-700/90 transition-all duration-200 shadow-none hover:shadow-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Controls: Language Selector Capsule, Theme Toggle, CTA Capsule */}
        <div className="hidden md:flex items-center space-x-2.5">
          
          {/* Mini Language Capsule Selector */}
          <div
            className="flex items-center bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/60 dark:border-slate-700/60 rounded-full p-0.5 text-xs shadow-inner"
            role="group"
            aria-label="Seletor de idioma"
          >
            <Globe className="w-3.5 h-3.5 ml-1.5 mr-1 text-slate-500 dark:text-slate-400" aria-hidden="true" />
            {(["pt", "en", "es", "de"] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                aria-label={`Selecionar idioma ${lang.toUpperCase()}`}
                className={`px-2 py-0.5 rounded-full text-[11px] font-extrabold uppercase transition-all ${
                  language === lang
                    ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Theme Switcher Button */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-slate-100/90 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-200 transition-transform active:scale-90 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label={t("nav.toggleTheme")}
            >
              {theme === "dark" ? (
                <Sun className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-slate-700" aria-hidden="true" />
              )}
            </button>
          )}

          {/* Header WhatsApp CTA Capsule */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md shadow-emerald-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="Agendar passeio via WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
            <span>{t("nav.bookNow")}</span>
          </a>
        </div>

        {/* Mobile Controls & Hamburger (Capsule Style) */}
        <div className="flex items-center space-x-1.5 md:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-200"
              aria-label={t("nav.toggleTheme")}
            >
              {theme === "dark" ? (
                <Sun className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-slate-700" aria-hidden="true" />
              )}
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/60 dark:border-slate-700/60 text-slate-800 dark:text-slate-100 active:scale-95 transition-transform"
            aria-label={mobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>

      </div>

      {/* Mobile iOS Capsule Sheet Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto max-w-md mx-auto mt-2 rounded-3xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-black/10 dark:border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.2)] p-4 space-y-3 animate-in slide-in-from-top-3 duration-200 md:hidden">
          {/* Navigation Links as iOS Capsule List Items */}
          <nav className="flex flex-col space-y-1.5" aria-label="Menu Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-2xl bg-slate-100/80 dark:bg-slate-800/80 hover:bg-emerald-500/10 dark:hover:bg-emerald-500/20 text-slate-800 dark:text-slate-100 font-extrabold text-sm flex items-center justify-between transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" aria-hidden="true" />
              </a>
            ))}
          </nav>

          {/* Language Selector Capsule (Mobile) */}
          <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 space-y-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-extrabold text-slate-500 dark:text-slate-400">{t("nav.selectLanguage")}</span>
              <div className="flex items-center bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/60 dark:border-slate-700/60 rounded-full p-0.5 text-xs">
                {(["pt", "en", "es", "de"] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setMobileMenuOpen(false);
                    }}
                    aria-label={`Selecionar idioma ${lang.toUpperCase()}`}
                    className={`px-2.5 py-1 rounded-full font-bold uppercase transition-all ${
                      language === lang
                        ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile WhatsApp CTA Capsule */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm flex items-center justify-center space-x-2 shadow-md shadow-emerald-600/20 active:scale-95 transition-all"
              aria-label="Agendar passeio via WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
              <span>{t("nav.bookNow")}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
