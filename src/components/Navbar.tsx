"use client";

import React, { useState, useEffect } from "react";
import { useLanguage, Language } from "@/context/LanguageContext";
import { useTheme } from "next-themes";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Sun, Moon, Globe, Menu, X, MessageCircle } from "lucide-react";

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
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-color)] shadow-lg"
          : "bg-[var(--bg-primary)]/60 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center group" aria-label="Tour Cactus - Início">
          <div className="flex flex-col">
            <span className="font-black text-lg sm:text-xl tracking-tight text-emerald-700 dark:text-emerald-400 group-hover:opacity-90 transition-opacity">
              Tour Cactus
            </span>
            <span className="text-xs uppercase font-extrabold tracking-wider text-blue-900 dark:text-blue-300">
              Turismo pela Rocinha • Rio
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-base font-bold text-[var(--text-secondary)]" aria-label="Navegação Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[var(--brand-blue)] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Controls: Language Selector, Theme Switcher, CTA */}
        <div className="hidden md:flex items-center space-x-4">
          
          {/* Language Selector with Azul Rio highlights */}
          <div className="flex items-center bg-[var(--bg-surface-hover)] border border-[var(--border-color)] rounded-xl p-1 text-xs" role="group" aria-label="Seletor de idioma">
            <Globe className="w-4 h-4 ml-2 mr-1 text-[var(--brand-blue)]" aria-hidden="true" />
            {(["pt", "en", "es", "de"] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                aria-label={`Selecionar idioma ${lang.toUpperCase()}`}
                className={`px-2.5 py-1 rounded-lg font-extrabold uppercase transition-all ${
                  language === lang
                    ? "bg-[var(--brand-blue)] text-white shadow-sm"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
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
              className="p-2.5 rounded-xl bg-[var(--bg-surface-hover)] border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--brand-blue)] transition-all flex items-center justify-center"
              aria-label={t("nav.toggleTheme")}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-[var(--brand-yellow)]" aria-hidden="true" />
              ) : (
                <Moon className="w-4 h-4 text-[var(--brand-blue)]" aria-hidden="true" />
              )}
            </button>
          )}

          {/* Header WhatsApp Direct CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md"
            aria-label="Agendar passeio via WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
            <span>{t("nav.bookNow")}</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-xl bg-[var(--bg-surface-hover)] border border-[var(--border-color)] text-[var(--text-primary)]"
              aria-label={t("nav.toggleTheme")}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-[var(--brand-yellow)]" aria-hidden="true" />
              ) : (
                <Moon className="w-4 h-4 text-[var(--brand-blue)]" aria-hidden="true" />
              )}
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[var(--bg-surface-hover)] border border-[var(--border-color)] text-[var(--text-primary)]"
            aria-label={mobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--border-color)] bg-[var(--bg-primary)]/95 backdrop-blur-xl px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3" aria-label="Menu Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-base font-bold text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-[var(--border-color)] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-[var(--text-secondary)]">{t("nav.selectLanguage")}</span>
              <div className="flex items-center bg-[var(--bg-surface-hover)] border border-[var(--border-color)] rounded-xl p-1 text-xs">
                {(["pt", "en", "es", "de"] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setMobileMenuOpen(false);
                    }}
                    aria-label={`Selecionar idioma ${lang.toUpperCase()}`}
                    className={`px-2.5 py-1 rounded-lg font-bold uppercase ${
                      language === lang
                        ? "bg-[var(--brand-blue)] text-white"
                        : "text-[var(--text-secondary)]"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm flex items-center justify-center space-x-2"
              aria-label="Agendar passeio via WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
              <span>{t("nav.bookNow")}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
