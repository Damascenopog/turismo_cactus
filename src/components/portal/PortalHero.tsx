"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { FadeInScroll } from "@/components/animations/FadeInScroll";
import { DiaTextReveal, BRAZIL_COLORS } from "@/components/ui/dia-text-reveal";
import {
  Sparkles,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Compass,
  Mountain,
  Music,
  Landmark,
} from "lucide-react";

export function PortalHero() {
  const { language, t } = useLanguage();
  const whatsappUrl = getWhatsAppLink(language);
  const heroFullTitle = `${t("portal.hero.titlePrefix")}${t("portal.hero.titleHighlight")}`.trim();

  return (
    <section className="relative min-h-[75vh] sm:min-h-[85vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20 overflow-hidden">
      {/* Background Hero Image - Dynamic Day/Night Mode */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/hero_rocinha_hd.jpg"
          alt="Vista panorâmica do Rio de Janeiro"
          fill
          priority
          quality={100}
          unoptimized
          sizes="100vw"
          className="dark:hidden block object-cover object-center"
        />
        <Image
          src="/image/hero_rocinha_night_hd.jpg"
          alt="Vista noturna panorâmica do Rio de Janeiro"
          fill
          priority
          quality={100}
          unoptimized
          sizes="100vw"
          className="hidden dark:block object-cover object-center"
        />
        {/* Dark Tint Overlay for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/70 dark:from-slate-950/80 dark:via-slate-950/50 dark:to-[var(--bg-primary)]"></div>
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto space-y-6 sm:space-y-8">
        
        {/* Top Tag */}
        <FadeInScroll direction="up" delay={0.1}>
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30 text-xs font-black uppercase tracking-wider shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
            <span>{t("portal.hero.tag")}</span>
          </div>
        </FadeInScroll>

        {/* Main Title with DiaTextReveal */}
        <FadeInScroll direction="up" delay={0.2}>
          <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.15] sm:leading-[1.1] drop-shadow-md">
            <DiaTextReveal
              key={heroFullTitle}
              text={heroFullTitle}
              colors={BRAZIL_COLORS}
              textColor="#ffffff"
              duration={2.4}
              delay={0.2}
              repeat={false}
            >
              {t("portal.hero.titlePrefix")}
              <span className="text-[var(--brand-yellow)] font-black drop-shadow-sm block sm:inline sm:ml-2 mt-1 sm:mt-0">
                {t("portal.hero.titleHighlight")}
              </span>
            </DiaTextReveal>
          </h1>
        </FadeInScroll>

        {/* Subtitle */}
        <FadeInScroll direction="up" delay={0.3}>
          <p className="text-base sm:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-sm px-2">
            {t("portal.hero.subtitle")}
          </p>
        </FadeInScroll>

        {/* Quick Category Chips for Fast Mobile Scanning */}
        <FadeInScroll direction="up" delay={0.35}>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 max-w-lg mx-auto">
            <a
              href="#servicos"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white text-xs font-bold border border-white/15 backdrop-blur-md transition-all active:scale-95"
            >
              <Compass className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
              <span>{t("portal.hero.chipFavela")}</span>
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white text-xs font-bold border border-white/15 backdrop-blur-md transition-all active:scale-95"
            >
              <Mountain className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              <span>{t("portal.hero.chipTrails")}</span>
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white text-xs font-bold border border-white/15 backdrop-blur-md transition-all active:scale-95"
            >
              <Landmark className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
              <span>{t("portal.hero.chipCity")}</span>
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white text-xs font-bold border border-white/15 backdrop-blur-md transition-all active:scale-95"
            >
              <Music className="w-3.5 h-3.5 text-rose-400" aria-hidden="true" />
              <span>{t("portal.hero.chipNight")}</span>
            </a>
          </div>
        </FadeInScroll>

        {/* CTAs */}
        <FadeInScroll direction="up" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-2 w-full max-w-md sm:max-w-none mx-auto">
            <a
              href="#servicos"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-black text-sm sm:text-base shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center space-x-2.5"
              aria-label="Ver todos os passeios"
            >
              <span>{t("portal.hero.ctaExplore")}</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white font-black text-sm sm:text-base hover:bg-white/30 active:scale-95 transition-all shadow-lg flex items-center justify-center space-x-2.5"
              aria-label="Montar roteiro personalizado no WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
              <span>{t("portal.hero.ctaCustom")}</span>
            </a>
          </div>
        </FadeInScroll>

        {/* Quick Social Trust Metrics */}
        <FadeInScroll direction="up" delay={0.45}>
          <div className="pt-4 flex items-center justify-center space-x-4 text-xs font-extrabold text-slate-300">
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>Condutores Nativos</span>
            </span>
            <span className="text-white/40">•</span>
            <span>+10.000 Turistas</span>
            <span className="text-white/40">•</span>
            <span className="text-amber-300">★ 4.9/5</span>
          </div>
        </FadeInScroll>

      </div>
    </section>
  );
}
