"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { FadeInScroll } from "@/components/animations/FadeInScroll";
import { ArrowRight, ShieldCheck, HeartHandshake, MapPin, MessageCircle, Star, Compass } from "lucide-react";

export function HeroSection() {
  const { language, t } = useLanguage();
  const whatsappUrl = getWhatsAppLink(language);

  return (
    <section id="hero" className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--brand-blue)]/15 dark:bg-[var(--brand-blue)]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[var(--brand-yellow)]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl w-full mx-auto space-y-8">
        
        {/* Badges Bar */}
        <FadeInScroll direction="down" delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[var(--brand-blue-light)] border border-[var(--brand-blue)]/30 text-xs font-extrabold uppercase tracking-wider text-[var(--brand-blue)] shadow-sm">
              <Compass className="w-3.5 h-3.5 text-[var(--brand-blue)]" />
              <span>Rio de Janeiro • Favela Tour</span>
            </div>

            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[var(--bg-surface)] border border-[var(--border-color)] text-xs font-extrabold uppercase tracking-wider text-[var(--brand-yellow)] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              <span>{t("hero.badge")}</span>
            </div>
          </div>
        </FadeInScroll>

        {/* Title with Ocean Blue Highlight */}
        <FadeInScroll direction="up" delay={0.2}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[var(--text-primary)] leading-[1.1]">
            Descubra a Rocinha com{" "}
            <span className="text-[var(--brand-blue)] font-black">
              Quem Vive Aqui
            </span>
          </h1>
        </FadeInScroll>

        {/* Subtitle */}
        <FadeInScroll direction="up" delay={0.3}>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto font-medium">
            {t("hero.subtitle")}
          </p>
        </FadeInScroll>

        {/* CTAs */}
        <FadeInScroll direction="up" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-extrabold text-base shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{t("hero.ctaWhatsApp")}</span>
            </a>

            <a
              href="#miolo"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--brand-blue)]/40 text-[var(--brand-blue)] font-bold text-base hover:bg-[var(--brand-blue-light)] active:scale-95 transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <span>{t("hero.ctaExplore")}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </FadeInScroll>

        {/* Trust & Social Proof Bar */}
        <FadeInScroll direction="up" delay={0.5}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 border-t border-[var(--border-color)] max-w-3xl mx-auto">
            
            <div className="p-5 rounded-2xl bg-[var(--bg-surface)]/80 backdrop-blur-sm border border-[var(--border-color)] flex items-center space-x-4 text-left shadow-sm hover:border-[var(--brand-blue)] transition-all">
              <div className="p-3 rounded-xl bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] flex-shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-sm font-bold text-[var(--text-primary)]">{t("hero.statTourists")}</span>
                <span className="text-xs text-[var(--text-secondary)]">Experiência nota máxima</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[var(--bg-surface)]/80 backdrop-blur-sm border border-[var(--border-color)] flex items-center space-x-4 text-left shadow-sm hover:border-[var(--brand-yellow)] transition-all">
              <div className="p-3 rounded-xl bg-[var(--brand-yellow)]/10 text-[var(--brand-yellow)] flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-sm font-bold text-[var(--text-primary)]">{t("hero.statGuides")}</span>
                <span className="text-xs text-[var(--text-secondary)]">Moradores de nascença</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[var(--bg-surface)]/80 backdrop-blur-sm border border-[var(--border-color)] flex items-center space-x-4 text-left shadow-sm hover:border-emerald-500 transition-all">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 flex-shrink-0">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <div>
                <span className="block text-sm font-bold text-[var(--text-primary)]">{t("hero.statRating")}</span>
                <span className="text-xs text-[var(--text-secondary)]">Avaliação de clientes</span>
              </div>
            </div>

          </div>
        </FadeInScroll>

      </div>
    </section>
  );
}
