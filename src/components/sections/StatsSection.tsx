"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FadeInScroll } from "@/components/animations/FadeInScroll";
import { HeartHandshake, ShieldCheck, Star } from "lucide-react";

export function StatsSection() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: HeartHandshake,
      title: t("hero.statTourists"),
      sub: t("hero.statTouristsSub"),
      accent: "text-amber-500 bg-amber-500/10 dark:bg-amber-400/20 dark:text-amber-300",
      borderHover: "hover:border-amber-500/50",
    },
    {
      icon: ShieldCheck,
      title: t("hero.statGuides"),
      sub: t("hero.statGuidesSub"),
      accent: "text-[var(--brand-blue)] bg-[var(--brand-blue)]/10 dark:bg-blue-400/20 dark:text-blue-300",
      borderHover: "hover:border-[var(--brand-blue)]/50",
    },
    {
      icon: Star,
      title: t("hero.statRating"),
      sub: t("hero.statRatingSub"),
      accent: "text-emerald-500 bg-emerald-500/10 dark:bg-emerald-400/20 dark:text-emerald-300",
      borderHover: "hover:border-emerald-500/50",
    },
  ];

  return (
    <section id="stats" className="w-full bg-[var(--bg-surface)] border-y border-[var(--border-color)] py-8 relative z-20 shadow-sm scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInScroll direction="up" delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--border-color)]">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="py-3.5 md:py-2 px-2 md:px-8 flex items-center justify-start space-x-3.5 sm:space-x-4 group transition-colors"
                >
                  <div className={`p-2.5 sm:p-3.5 rounded-2xl ${item.accent} flex-shrink-0 transition-transform group-hover:scale-110`}>
                    <Icon className="w-5 h-5 sm:w-7 sm:h-7 stroke-[2.25]" />
                  </div>
                  <div className="text-left">
                    <span className="block font-black text-sm sm:text-lg text-[var(--text-primary)] leading-tight tracking-tight">
                      {item.title}
                    </span>
                    <span className="block text-xs sm:text-sm font-medium text-[var(--text-secondary)] mt-0.5">
                      {item.sub}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeInScroll>
      </div>
    </section>
  );
}
