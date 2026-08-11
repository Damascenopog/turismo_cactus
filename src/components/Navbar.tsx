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
    { href: "#hero", label: t("nav.hero") },
    { href: "#miolo", label: t("nav.miolo") },
    { href: "#arte", label: t("nav.arte") },
    { href: "#base", label: t("nav.base") },
    { href: "#faq", label: t("nav.faq") },
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
        <a href="#hero" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[var(--brand-blue)] via-[var(--brand-yellow)] to-emerald-500 flex items-center justify-center text-slate-950 font-black shadow-md group-hover:scale-105 transition-transform">
            🌵
          </div>
          <div className="flex flex-col">
            <span className="font-black text-lg tracking-tight text-[var(--text-primary)] group-hover:text-[var(--brand-blue)] transition-colors">
              Tour Rocinha
            </span>
            <span className="text-[10px] uppercase font-extrabold tracking-widest text-[var(--brand-blue)]">
              Cactus Turismo • Rio
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold text-[var(--text-secondary)]">
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
          <div className="flex items-center bg-[var(--bg-surface-hover)] border border-[var(--border-color)] rounded-xl p-1 text-xs">
            <Globe className="w-4 h-4 ml-2 mr-1 text-[var(--brand-blue)]" />
            {(["pt", "en", "es", "de"] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2.5 py-1 font-bold rounded-lg uppercase transition-all ${
                  language === lang
                    ? "bg-[var(--brand-blue)] text-white shadow-md"
                    : "text-[var(--text-secondary)] hover:text-[var(--brand-blue)]"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-xl bg-[var(--bg-surface-hover)] border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--brand-blue)] hover:scale-105 transition-all"
              title={t("nav.toggleTheme")}
              aria-label={t("nav.toggleTheme")}
            >
              {theme === "dark" ? (
                <Sun className="w-4.5 h-4.5 text-amber-400" />
              ) : (
                <Moon className="w-4.5 h-4.5 text-[var(--brand-blue)]" />
              )}
            </button>
          )}

          {/* Book Now WhatsApp CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[var(--brand-yellow)] text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-[var(--brand-yellow-hover)] active:scale-95 transition-all shadow-md flex items-center space-x-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>{t("nav.bookNow")}</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center space-x-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-xl bg-[var(--bg-surface-hover)] border border-[var(--border-color)] text-[var(--text-primary)]"
              aria-label={t("nav.toggleTheme")}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-[var(--brand-blue)]" />
              )}
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-[var(--bg-surface-hover)] border border-[var(--border-color)] text-[var(--text-primary)]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[var(--brand-blue)]" /> : <Menu className="w-6 h-6 text-[var(--brand-blue)]" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg-surface)] border-b border-[var(--border-color)] px-6 py-6 space-y-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-4 text-base font-semibold text-[var(--text-primary)]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[var(--brand-blue)] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-[var(--border-color)] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-[var(--text-secondary)]">
                {t("nav.selectLanguage")}:
              </span>
              <div className="flex items-center bg-[var(--bg-surface-hover)] border border-[var(--border-color)] rounded-xl p-1 text-xs">
                {(["pt", "en", "es", "de"] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-3 py-1 font-bold rounded-lg uppercase transition-all ${
                      language === lang
                        ? "bg-[var(--brand-blue)] text-white shadow-sm"
                        : "text-[var(--text-secondary)] hover:text-[var(--brand-blue)]"
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
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-center block shadow-lg flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{t("nav.bookNow")}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
