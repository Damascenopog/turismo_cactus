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
} from "lucide-react";

export function PortalHero() {
  const { language, t } = useLanguage();
  const whatsappUrl = getWhatsAppLink(language);

  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 overflow-hidden">
      {/* Background Hero Image - Dynamic Day/Night Mode */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/hero_rocinha_hd.jpg"
          alt="Vista panorâmica da Rocinha e Rio de Janeiro"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.75] contrast-[1.08] dark:hidden transition-all duration-700"
        />
        <Image
          src="/image/hero_rocinha_night_hd.jpg"
          alt="Vista noturna panorâmica da Rocinha"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.65] contrast-[1.12] hidden dark:block transition-all duration-700"
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-black/40 to-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[var(--bg-primary)] z-10" />
      </div>

      {/* Floating Accent Glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none z-10"
        aria-hidden="true"
      />

      <div className="relative z-20 max-w-4xl mx-auto space-y-6 sm:space-y-8">
        
        {/* Portal Highlight Tag Badge */}
        <FadeInScroll direction="down" delay={0.1}>
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/40 text-emerald-300 text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-lg">
            <Sparkles className="w-4 h-4 text-[var(--brand-yellow)]" aria-hidden="true" />
            <span>{t("portal.hero.tag")}</span>
          </div>
        </FadeInScroll>

        {/* Dynamic Brazil DiaTextReveal Title */}
        <FadeInScroll direction="up" delay={0.2}>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] drop-shadow-lg">
            <DiaTextReveal
              colors={BRAZIL_COLORS}
              duration={2.5}
              className="inline"
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

        {/* CTAs */}
        <FadeInScroll direction="up" delay={0.35}>
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
        <FadeInScroll direction="up" delay={0.4}>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-extrabold text-slate-300">
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>Condutores Nativos</span>
            </span>
            <span className="text-white/40 hidden xs:inline">•</span>
            <span>+10.000 Turistas</span>
            <span className="text-white/40 hidden xs:inline">•</span>
            <span className="text-amber-300">★ 4.9/5</span>
          </div>
        </FadeInScroll>

      </div>
    </section>
  );
}
