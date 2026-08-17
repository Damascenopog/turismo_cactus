"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { FadeInScroll } from "@/components/animations/FadeInScroll";
import { Heart, Store, MessageCircle, ArrowUpRight } from "lucide-react";

export function BaseSection() {
  const { language, t } = useLanguage();
  const whatsappUrl = getWhatsAppLink(language);

  return (
    <section id="base" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--border-color)] scroll-mt-20">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <FadeInScroll direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-xs font-black uppercase tracking-wider border border-emerald-500/30">
              <Heart className="w-4 h-4 text-emerald-700 dark:text-emerald-400" aria-hidden="true" />
              <span>{t("base.tag")}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              {t("base.title")}
            </h2>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              {t("base.description")}
            </p>
          </div>
        </FadeInScroll>

        {/* Impact CTA Banner Card */}
        <FadeInScroll direction="up" delay={0.2}>
          <div className="relative rounded-3xl bg-gradient-to-br from-[var(--bg-surface)] via-[var(--bg-surface-hover)] to-[var(--brand-blue-light)] border border-[var(--brand-blue)]/30 p-6 sm:p-12 shadow-2xl overflow-hidden text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            
            <div className="space-y-3.5 sm:space-y-4 max-w-xl">
              <div className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-wider text-blue-900 dark:text-blue-300 bg-[var(--bg-surface)] px-3.5 py-1.5 rounded-full border border-[var(--border-color)]">
                <Store className="w-4 h-4 text-blue-700 dark:text-blue-400" aria-hidden="true" />
                <span>100% Impacto Direto na Comunidade</span>
              </div>

              <h3 className="text-xl sm:text-4xl font-extrabold text-[var(--text-primary)] leading-tight">
                {t("base.ctaTitle")}
              </h3>

              <p className="text-xs sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {t("base.ctaDesc")}
              </p>
            </div>

            <div className="w-full lg:w-auto flex-shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-black text-sm sm:text-base shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center space-x-2.5 sm:space-x-3"
                aria-label="Falar com o guia local no WhatsApp"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current" aria-hidden="true" />
                <span>{t("base.whatsappBtn")}</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              </a>
            </div>

          </div>
        </FadeInScroll>

      </div>
    </section>
  );
}
