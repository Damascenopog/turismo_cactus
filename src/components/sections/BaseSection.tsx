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
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-[var(--brand-blue-light)] text-[var(--brand-blue)] text-xs font-bold uppercase tracking-wider border border-[var(--brand-blue)]/20">
              <Heart className="w-4 h-4 text-[var(--brand-blue)]" />
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
              <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-[var(--brand-blue)] bg-[var(--bg-surface)] px-3 py-1 rounded-full border border-[var(--border-color)]">
                <Store className="w-4 h-4 text-[var(--brand-blue)]" />
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
                className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-emerald-500/30 transition-all flex items-center justify-center space-x-2.5 sm:space-x-3"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                <span>{t("base.whatsappBtn")}</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>

          </div>
        </FadeInScroll>

      </div>
    </section>
  );
}
