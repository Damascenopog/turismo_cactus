"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getTourWhatsAppLink } from "@/lib/whatsapp";
import { FadeInScroll } from "@/components/animations/FadeInScroll";
import {
  Users,
  ShieldCheck,
  HeartHandshake,
  MessageSquare,
  Sparkles,
  Compass,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export function PortalWhyUs() {
  const { language, t } = useLanguage();
  const customWhatsAppUrl = getTourWhatsAppLink("custom", language);

  const pillars = [
    {
      icon: Users,
      title: t("portal.whyUs.pillar1Title"),
      desc: t("portal.whyUs.pillar1Desc"),
      color: "text-amber-700 dark:text-amber-300 bg-amber-500/15 dark:bg-amber-400/20",
    },
    {
      icon: ShieldCheck,
      title: t("portal.whyUs.pillar2Title"),
      desc: t("portal.whyUs.pillar2Desc"),
      color: "text-emerald-700 dark:text-emerald-300 bg-emerald-500/15 dark:bg-emerald-400/20",
    },
    {
      icon: HeartHandshake,
      title: t("portal.whyUs.pillar3Title"),
      desc: t("portal.whyUs.pillar3Desc"),
      color: "text-rose-700 dark:text-rose-300 bg-rose-500/15 dark:bg-rose-400/20",
    },
    {
      icon: MessageSquare,
      title: t("portal.whyUs.pillar4Title"),
      desc: t("portal.whyUs.pillar4Desc"),
      color: "text-blue-800 dark:text-blue-300 bg-blue-500/15 dark:bg-blue-400/20",
    },
  ];

  return (
    <section id="diferenciais" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--border-color)] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <FadeInScroll direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-900 dark:text-emerald-300 text-xs font-black uppercase tracking-wider border border-emerald-500/30">
              <Sparkles className="w-4 h-4 text-emerald-700 dark:text-emerald-400" aria-hidden="true" />
              <span>{t("portal.whyUs.tag")}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[var(--text-primary)]">
              {t("portal.whyUs.title")}
            </h2>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              {t("portal.whyUs.subtitle")}
            </p>
          </div>
        </FadeInScroll>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <FadeInScroll key={idx} direction="up" delay={0.15 + idx * 0.1}>
                <div className="h-full p-6 sm:p-7 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-md hover:shadow-xl hover:border-[var(--brand-blue)]/40 transition-all flex flex-col justify-start space-y-4 group">
                  <div className={`w-12 h-12 rounded-2xl ${pillar.color} flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 shadow-sm`}>
                    <Icon className="w-6 h-6 stroke-[2.25]" aria-hidden="true" />
                  </div>

                  <h3 className="font-extrabold text-lg text-[var(--text-primary)] leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </div>
              </FadeInScroll>
            );
          })}
        </div>

        {/* Custom Tour CTA Banner */}
        <FadeInScroll direction="up" delay={0.4}>
          <div className="rounded-3xl bg-gradient-to-br from-[var(--bg-surface)] via-[var(--bg-surface-hover)] to-[var(--brand-blue-light)] border-2 border-[var(--brand-blue)]/30 dark:border-[var(--brand-blue)]/50 p-6 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[var(--brand-blue)]/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex items-start sm:items-center space-x-4 text-left z-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-700 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-700/30">
                <Compass className="w-8 h-8" aria-hidden="true" />
              </div>
              <div className="space-y-1">
                <span className="inline-flex items-center space-x-1.5 text-xs font-black uppercase tracking-wider text-blue-800 dark:text-blue-300">
                  <span>{t("portal.custom.tag")}</span>
                </span>
                <h3 className="text-lg sm:text-2xl font-black text-[var(--text-primary)] leading-snug">
                  {t("portal.custom.title")}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-xl">
                  {t("portal.custom.desc")}
                </p>
              </div>
            </div>

            <a
              href={customWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-black text-sm sm:text-base shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center space-x-2.5 flex-shrink-0 z-10"
              aria-label="Montar roteiro sob medida no WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
              <span>{t("portal.custom.btn")}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </FadeInScroll>

      </div>
    </section>
  );
}
