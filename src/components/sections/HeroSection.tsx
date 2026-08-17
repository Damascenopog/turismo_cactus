"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { FadeInScroll } from "@/components/animations/FadeInScroll";
import { DiaTextReveal, BRAZIL_COLORS } from "@/components/ui/dia-text-reveal";
import { ArrowRight, MessageCircle } from "lucide-react";

export function HeroSection() {
  const { language, t } = useLanguage();
  const whatsappUrl = getWhatsAppLink(language);
  const heroFullTitle = `${t("hero.titlePrefix")}${t("hero.titleHighlight")}`.trim();

  return (
    <section id="hero" className="relative min-h-[75vh] sm:min-h-[85vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20 scroll-mt-20 overflow-hidden">
      {/* Background Hero Image - Dynamic Day/Night Mode */}
      <div className="absolute inset-0 z-0">
        {/* Day Photograph (Light Mode) */}
        <Image
          src="/image/hero_rocinha_hd.jpg"
          alt="Vista panorâmica da Rocinha de dia"
          fill
          priority
          quality={100}
          unoptimized
          sizes="100vw"
          className="dark:hidden block object-cover object-center transition-opacity duration-700"
        />
        {/* Night Photograph (Dark Mode) */}
        <Image
          src="/image/hero_rocinha_night_hd.jpg"
          alt="Vista panorâmica da Rocinha à noite"
          fill
          priority
          quality={100}
          unoptimized
          sizes="100vw"
          className="hidden dark:block object-cover object-center transition-opacity duration-700"
        />
        {/* Dark Tint Overlay for High Legibility (No white bleed in Light mode) */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/20 to-slate-950/40 dark:from-slate-950/70 dark:via-slate-950/40 dark:to-[var(--bg-primary)]"></div>
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto space-y-6 sm:space-y-8">

        {/* Title with DiaTextReveal Animation in Brazilian Flag Colors (Executes once and settles with yellow highlight) */}
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
              {t("hero.titlePrefix")}
              <span className="text-[var(--brand-yellow)] font-black drop-shadow-sm block sm:inline sm:ml-2 mt-1 sm:mt-0">
                {t("hero.titleHighlight")}
              </span>
            </DiaTextReveal>
          </h1>
        </FadeInScroll>

        {/* Subtitle */}
        <FadeInScroll direction="up" delay={0.3}>
          <p className="text-base sm:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-sm px-2">
            {t("hero.subtitle")}
          </p>
        </FadeInScroll>

        {/* CTAs */}
        <FadeInScroll direction="up" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-2 w-full max-w-md sm:max-w-none mx-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-emerald-500/30 transition-all flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{t("hero.ctaWhatsApp")}</span>
            </a>

            <a
              href="#miolo"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 text-white font-bold text-sm sm:text-base hover:bg-white/25 active:scale-95 transition-all shadow-lg flex items-center justify-center space-x-2"
            >
              <span>{t("hero.ctaExplore")}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </FadeInScroll>

      </div>
    </section>
  );
}
