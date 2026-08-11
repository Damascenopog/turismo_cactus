"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FadeInScroll } from "@/components/animations/FadeInScroll";
import { Compass, Footprints, Eye, Users } from "lucide-react";

export function MioloSection() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: Footprints,
      title: t("miolo.card1Title"),
      desc: t("miolo.card1Desc"),
      accent: "from-amber-500/20 to-amber-500/5 text-amber-500",
      borderColor: "hover:border-amber-500/50",
    },
    {
      icon: Eye,
      title: t("miolo.card2Title"),
      desc: t("miolo.card2Desc"),
      accent: "from-[var(--brand-blue)]/20 to-[var(--brand-blue)]/5 text-[var(--brand-blue)]",
      borderColor: "hover:border-[var(--brand-blue)] border-[var(--brand-blue)]/30",
    },
    {
      icon: Users,
      title: t("miolo.card3Title"),
      desc: t("miolo.card3Desc"),
      accent: "from-rose-500/20 to-rose-500/5 text-rose-500",
      borderColor: "hover:border-rose-500/50",
    },
  ];

  return (
    <section id="miolo" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--border-color)] relative scroll-mt-20">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <FadeInScroll direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-[var(--brand-blue-light)] text-[var(--brand-blue)] text-xs font-bold uppercase tracking-wider border border-[var(--brand-blue)]/20">
              <Compass className="w-4 h-4 text-[var(--brand-blue)]" />
              <span>{t("miolo.tag")}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              {t("miolo.title")}
            </h2>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              {t("miolo.description")}
            </p>
          </div>
        </FadeInScroll>

        {/* 3 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <FadeInScroll key={idx} direction="up" delay={0.2 + idx * 0.15}>
                <div className={`group relative p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-lg hover:shadow-2xl ${card.borderColor} transition-all duration-300 flex flex-col justify-between h-full`}>
                  <div className="space-y-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.accent} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-xl font-bold text-[var(--text-primary)]">
                      {card.title}
                    </h3>

                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[var(--border-color)]/60 flex items-center text-xs font-bold text-[var(--brand-blue)] group-hover:translate-x-1 transition-transform">
                    <span>Explorar trecho</span>
                    <span className="ml-1">→</span>
                  </div>
                </div>
              </FadeInScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}
