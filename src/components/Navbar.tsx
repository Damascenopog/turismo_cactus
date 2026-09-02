"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage, Language, languageDetails } from "@/context/LanguageContext";
import { useTheme } from "next-themes";
import {
  Sun,
  Moon,
  Globe,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Check,
  Calendar as CalendarIcon,
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const {
    language,
    detectedLang,
    showLangNotification,
    dismissLangNotification,
    setLanguage,
    t,
  } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const langContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu overlay is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langContainerRef.current &&
        !langContainerRef.current.contains(event.target as Node)
      ) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fixed navigation links across all pages
  const navLinks = [
    { href: "/", label: t("nav.home") || "Início" },
    { href: "/rocinha", label: t("nav.rocinha") || "Rocinha" },
    { href: "/vidigal", label: t("nav.vidigal") || "Vidigal" },
    { href: "/rio-tour", label: t("nav.rioTour") || "Rio Tour" },
    { href: "/bailes", label: t("nav.baileFunk") || "Baile Funk" },
  ];

  return (
    <>
      <header className="sticky top-3 sm:top-5 z-40 w-full px-3 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300">
        {/* Floating Dynamic Island Capsule Bar */}
        <div
          className={`pointer-events-auto max-w-7xl mx-auto rounded-full transition-all duration-300 border ${
            scrolled
              ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border-black/10 dark:border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.5)] py-2 sm:py-2.5 px-3.5 sm:px-6"
              : "bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border-black/5 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)] py-2.5 sm:py-3 px-3.5 sm:px-6"
          } flex items-center justify-between gap-2 sm:gap-4`}
        >
          
          {/* Left: Brand Logo Pill */}
          <div className="flex items-center justify-start flex-shrink-0 min-w-0">
            <Link
              href="/"
              className="flex items-center space-x-2 sm:space-x-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-full py-0.5 pr-2 pl-0.5"
              aria-label="Tour Cactus - Início"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-emerald-600/20 dark:border-emerald-400/30 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform bg-white">
                <Image
                  src="/logo.png"
                  alt="Tour Cactus Logo"
                  fill
                  sizes="36px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-black text-xs sm:text-sm tracking-tight text-emerald-700 dark:text-emerald-400 group-hover:opacity-90 transition-opacity leading-tight truncate">
                  Tour Cactus
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase font-extrabold tracking-wider text-slate-500 dark:text-slate-400 hidden xs:inline leading-tight truncate">
                  Turismo pela Rocinha • Rio
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Individual Pill Buttons for Each Destination */}
          <nav
            className="hidden md:flex items-center space-x-1.5 lg:space-x-2.5"
            aria-label="Navegação Principal"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-black tracking-wide whitespace-nowrap transition-all duration-200 active:scale-95 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                    isActive
                      ? "bg-slate-900 text-emerald-400 dark:bg-emerald-600 dark:text-white border-slate-700 dark:border-emerald-500 shadow-sm"
                      : "bg-slate-100/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/60 dark:border-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-950 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Controls & Expandable Language Capsule */}
          <div className="flex items-center justify-end space-x-1.5 sm:space-x-2 flex-shrink-0">
            
            {/* Expandable Language Capsule Menu Button with Notification Trigger */}
            <div className="relative" ref={langContainerRef}>
              <button
                onClick={() => {
                  setLangMenuOpen(!langMenuOpen);
                  if (showLangNotification) dismissLangNotification();
                }}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60 text-xs font-extrabold text-slate-800 dark:text-slate-100 transition-all shadow-inner active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                aria-expanded={langMenuOpen}
                aria-label={t("nav.selectLanguage")}
              >
                <span className="text-sm leading-none" aria-hidden="true">
                  {languageDetails[language]?.flag || "🌐"}
                </span>
                <span className="uppercase text-[11px] font-black">{language}</span>
                <ChevronDown
                  className={`w-3 h-3 text-slate-500 dark:text-slate-400 transition-transform duration-200 ${
                    langMenuOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {/* Language Selection Popover Dropdown */}
              {langMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-black/10 dark:border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.18)] p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {(["pt", "en", "es", "de"] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full px-3 py-2 rounded-xl text-xs font-extrabold flex items-center justify-between transition-colors ${
                        language === lang
                          ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 font-black"
                          : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <span className="text-base">{languageDetails[lang].flag}</span>
                        <span>{languageDetails[lang].label}</span>
                      </div>
                      {language === lang && <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                    </button>
                  ))}
                </div>
              )}

              {/* Single System Language Detection Notification Bubble */}
              {showLangNotification && (
                <div
                  className="absolute right-0 top-full mt-3 w-72 sm:w-80 max-w-[calc(100vw-2rem)] rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-emerald-500/30 dark:border-emerald-400/30 shadow-[0_16px_40px_rgba(0,0,0,0.2)] p-3.5 z-50 animate-in fade-in slide-in-from-top-2 duration-300"
                  role="status"
                  aria-live="polite"
                >
                  {/* Speech Bubble Pointer pointing to the Language Icon */}
                  <div className="absolute -top-1.5 right-6 w-3 h-3 bg-white dark:bg-slate-900 rotate-45 border-t border-l border-emerald-500/30 dark:border-emerald-400/30" />
                  
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center space-x-2.5">
                      <div className="p-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800 dark:text-slate-100 leading-snug">
                          {t("nav.langDetected") || "Idioma detectado:"}{" "}
                          <span className="font-extrabold text-emerald-600 dark:text-emerald-400">
                            {languageDetails[detectedLang]?.nativeName || detectedLang.toUpperCase()}
                          </span>
                        </p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {t("nav.langChangePrompt") || "Deseja alternar para seu idioma nativo?"}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={dismissLangNotification}
                      className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5 rounded-full"
                      aria-label="Fechar notificação"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="mt-3 flex items-center justify-end space-x-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <button
                      onClick={dismissLangNotification}
                      className="px-3 py-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full transition-colors active:scale-95"
                    >
                      {t("nav.langKeepBtn") || "Manter"}
                    </button>
                    <button
                      onClick={() => {
                        setLangMenuOpen(true);
                        dismissLangNotification();
                      }}
                      className="px-3 py-1.5 text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 rounded-full shadow-sm active:scale-95 transition-all flex items-center space-x-1"
                    >
                      <span>{t("nav.langChangeBtn") || "Alterar"}</span>
                    </button>
                  </div>
                </div>
              )}
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

            {/* Header Booking CTA Pill */}
            <Link
              href="/agendar"
              className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md shadow-emerald-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label="Agendar passeio"
            >
              <CalendarIcon className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{t("nav.bookNow") || "Agendar"}</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/60 dark:border-slate-700/60 text-slate-800 dark:text-slate-100 active:scale-95 transition-transform md:hidden"
              aria-label={mobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" aria-hidden="true" /> : <Menu className="w-4 h-4" aria-hidden="true" />}
            </button>
          </div>

        </div>
      </header>

      {/* Floating Mobile Overlay Drawer (Completely overlays content without expanding page layout) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden pointer-events-auto flex flex-col justify-start items-center p-3 sm:p-4">
          
          {/* Backdrop Blur Overlay covering the content underneath */}
          <div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Floating Card Sheet */}
          <div className="relative z-10 w-full max-w-md mt-16 rounded-3xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-black/10 dark:border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.35)] p-5 space-y-4 animate-in slide-in-from-top-4 zoom-in-95 duration-200 max-h-[calc(100vh-5.5rem)] overflow-y-auto">
            
            {/* Drawer Top Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/70 dark:border-slate-800">
              <div className="flex items-center space-x-2">
                <div className="relative w-6 h-6 rounded-full overflow-hidden border border-emerald-600/30 bg-white">
                  <Image src="/logo.png" alt="Tour Cactus" fill sizes="24px" className="object-cover" />
                </div>
                <span className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Menu de Navegação
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95 transition-all"
                aria-label="Fechar menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Navigation Links as Large Touch Target Cards */}
            <nav className="flex flex-col space-y-2" aria-label="Menu Mobile">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-2xl font-extrabold text-sm flex items-center justify-between border transition-all active:scale-[0.98] ${
                      isActive
                        ? "bg-slate-900 text-emerald-400 dark:bg-emerald-600 dark:text-white border-slate-700 dark:border-emerald-500 shadow-sm"
                        : "bg-slate-100/80 dark:bg-slate-800/80 text-slate-800 dark:text-slate-100 border-slate-200/60 dark:border-slate-700/60 hover:bg-emerald-500/10 dark:hover:bg-emerald-500/20"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? "text-emerald-400 dark:text-white" : "text-slate-400"}`} aria-hidden="true" />
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Booking CTA Button */}
            <div className="pt-2 border-t border-slate-200/70 dark:border-slate-800">
              <Link
                href="/agendar"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md shadow-emerald-600/20 active:scale-95 transition-all"
                aria-label="Agendar passeio"
              >
                <CalendarIcon className="w-4 h-4" aria-hidden="true" />
                <span>{t("nav.bookNow") || "Agendar"}</span>
              </Link>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
