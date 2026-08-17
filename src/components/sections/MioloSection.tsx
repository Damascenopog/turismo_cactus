"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { FadeInScroll } from "@/components/animations/FadeInScroll";
import { Compass, Footprints, Eye, Users, ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function MioloSection() {
  const { language, t } = useLanguage();
  const whatsappUrl = getWhatsAppLink(language);

  const cards = [
    {
      icon: Footprints,
      title: t("miolo.card1Title"),
      desc: t("miolo.card1Desc"),
      accent: "from-amber-500/20 to-amber-500/5 text-amber-500",
    },
    {
      icon: Eye,
      title: t("miolo.card2Title"),
      desc: t("miolo.card2Desc"),
      accent: "from-[var(--brand-blue)]/20 to-[var(--brand-blue)]/5 text-[var(--brand-blue)]",
    },
    {
      icon: Users,
      title: t("miolo.card3Title"),
      desc: t("miolo.card3Desc"),
      accent: "from-rose-500/20 to-rose-500/5 text-rose-500",
    },
  ];

  return (
    <section id="roteiro" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[var(--border-color)] relative scroll-mt-20">
      <span id="miolo" className="absolute -top-20"></span>
      <div className="max-w-6xl mx-auto space-y-16">
        
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

        {/* Zig-Zag Grid Block 1: Image Left, Text Right (Desktop) / Stacked (Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Image Block with Real Photo & Negative Space */}
          <div className="md:col-span-6">
            <FadeInScroll direction="left" delay={0.2}>
              <div className="relative w-full h-80 sm:h-96 rounded-3xl border border-[var(--border-color)] overflow-hidden shadow-xl p-8 flex flex-col justify-between group">
                <Image
                  src="/image/esquina_casas.jpg"
                  alt="Esquina e vielas da Rocinha"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-black/20 z-0"></div>
                
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest text-[var(--brand-yellow)] bg-slate-950/60 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/30">
                    Passo 01 • Vielas & Mirante
                  </span>
                  <span className="w-3 h-3 rounded-full bg-amber-500 animate-pulse"></span>
                </div>

                <div className="relative z-10 space-y-2 max-w-xs">
                  <h4 className="text-2xl font-black text-white leading-snug drop-shadow-md">
                    Vistas Espectaculares 360°
                  </h4>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium drop-shadow-sm">
                    Caminhada guiada pelas vielas históricas e arquitetura popular única da favela.
                  </p>
                </div>
              </div>
            </FadeInScroll>
          </div>

          {/* Content Block Right */}
          <div className="md:col-span-6 space-y-6">
            <FadeInScroll direction="right" delay={0.3}>
              <div className="space-y-4">
                {cards.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-sm hover:shadow-md hover:border-[var(--brand-blue)]/40 transition-all flex items-start space-x-4"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.accent} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-base text-[var(--text-primary)]">
                          {card.title}
                        </h3>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[var(--brand-blue)] text-white font-bold text-xs uppercase tracking-wider hover:bg-[var(--brand-blue-hover)] transition-all shadow-md"
                >
                  <span>Agendar Passeio pelas Vielas</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeInScroll>
          </div>

        </div>

      </div>
    </section>
  );
}
