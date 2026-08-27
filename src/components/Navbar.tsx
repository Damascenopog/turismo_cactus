import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage, Language, languageDetails } from "@/context/LanguageContext";
import { useTheme } from "next-themes";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Sun, Moon, Globe, Menu, X, MessageCircle, ChevronRight, ChevronDown, Check, Sparkles } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const { language, detectedLang, showLangNotification, dismissLangNotification, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const langContainerRef = useRef<HTMLDivElement>(null);
  const mobileLangContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langContainerRef.current &&
        !langContainerRef.current.contains(event.target as Node) &&
        mobileLangContainerRef.current &&
        !mobileLangContainerRef.current.contains(event.target as Node)
      ) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const whatsappUrl = getWhatsAppLink(language);

  const navLinks = [
    { href: "/", label: "Rocinha" },
    { href: "/vidigal", label: "Vidigal" },
    { href: "/rio-tour", label: "Rio Tour" },
    { href: "/bailes", label: "Bailes RJ" },
  ];

  return (
    <header className="sticky top-3 sm:top-5 z-40 w-full px-3 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300">
      {/* Floating iPhone / Dynamic Island Capsule Bar */}
      <div
        className={`pointer-events-auto max-w-6xl mx-auto rounded-full transition-all duration-300 border ${
          scrolled
            ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border-black/10 dark:border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.5)] py-2 sm:py-2.5 px-4 sm:px-6"
            : "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-black/5 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)] py-2.5 sm:py-3 px-4 sm:px-6"
        } grid grid-cols-2 md:grid-cols-3 items-center`}
      >
        
        {/* Left Column: Brand Logo */}
        <div className="flex items-center justify-start">
          <a
            href="#hero"
            className="flex items-center space-x-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-full py-0.5 pr-2 pl-0.5"
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
            <div className="flex flex-col">
              <span className="font-black text-xs sm:text-sm tracking-tight text-emerald-700 dark:text-emerald-400 group-hover:opacity-90 transition-opacity leading-tight">
                Tour Cactus
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase font-extrabold tracking-wider text-slate-500 dark:text-slate-400 hidden xs:inline leading-tight">
                Turismo pela Rocinha • Rio
              </span>
            </div>
          </a>
        </div>

        {/* Center Column: Perfectly Centered Segmented Capsule Navigation */}
        <div className="hidden md:flex items-center justify-center">
          <nav
            className="flex items-center p-1 rounded-full bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/60 dark:border-slate-700/60 shadow-inner"
            aria-label="Navegação Principal"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-extrabold transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                    isActive
                      ? "bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 shadow-sm"
                      : "text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Column: Controls & Expandable Language Capsule */}
        <div className="flex items-center justify-end space-x-2 sm:space-x-2.5">
          
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

            {/* Expandable Popover Menu */}
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-black/10 dark:border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.18)] p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 space-y-1">
                {(["pt", "en", "es", "de"] as Language[]).map((lang) => {
                  const isSelected = language === lang;
                  const item = languageDetails[lang];
                  return (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                        isSelected
                          ? "bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300"
                          : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-base">{item.flag}</span>
                        <span>{item.nativeName}</span>
                      </div>
                      {isSelected && <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Single System Language Detection Notification Bubble */}
            {showLangNotification && (
              <div
                className="absolute right-0 top-full mt-3 w-72 sm:w-80 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-emerald-500/30 dark:border-emerald-400/30 shadow-[0_16px_40px_rgba(0,0,0,0.2)] p-3.5 z-50 animate-in fade-in slide-in-from-top-2 duration-300"
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
                        {t("nav.langDetected")}{" "}
                        <span className="font-extrabold text-emerald-600 dark:text-emerald-400">
                          {languageDetails[detectedLang]?.nativeName || detectedLang.toUpperCase()}
                        </span>
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        {t("nav.langChangePrompt")}
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
                    className="px-3 py-1 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full transition-colors"
                  >
                    {t("nav.langKeepBtn")}
                  </button>
                  <button
                    onClick={() => {
                      setLangMenuOpen(true);
                      dismissLangNotification();
                    }}
                    className="px-3 py-1 text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 rounded-full shadow-sm active:scale-95 transition-all"
                  >
                    {t("nav.langChangeBtn")}
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

          {/* Header WhatsApp CTA Capsule */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md shadow-emerald-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="Agendar passeio via WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
            <span>{t("nav.bookNow")}</span>
          </a>

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

      {/* Mobile iOS Capsule Sheet Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto max-w-md mx-auto mt-2 rounded-3xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-black/10 dark:border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.2)] p-4 space-y-3 animate-in slide-in-from-top-3 duration-200 md:hidden">
          {/* Navigation Links as iOS Capsule List Items */}
          <nav className="flex flex-col space-y-1.5" aria-label="Menu Mobile">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-2xl font-extrabold text-sm flex items-center justify-between transition-colors ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "bg-slate-100/80 dark:bg-slate-800/80 text-slate-800 dark:text-slate-100 hover:bg-emerald-500/10 dark:hover:bg-emerald-500/20"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} aria-hidden="true" />
                </Link>
              );
            })}
          </nav>

          {/* Language Selector in Mobile Drawer */}
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
