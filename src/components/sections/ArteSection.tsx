"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { FadeInScroll } from "@/components/animations/FadeInScroll";
import { Palette, Music, Utensils, Sparkles } from "lucide-react";

export function ArteSection() {
  const { t } = useLanguage();
  const [activePin, setActivePin] = useState(0);

  const pins = [
    {
      id: 0,
      icon: Palette,
      title: t("arte.pin1Title"),
      desc: "Murais vibrantes e intervenções artísticas no asfalto e becos tradicionais da favela.",
      image: "/image/hexa.jpg",
      color: "bg-[var(--brand-blue)]",
      textColor: "text-[var(--brand-blue)]",
    },
    {
      id: 1,
      icon: Music,
      title: t("arte.pin2Title"),
      desc: "O futebol de rua, ritmos e a alegria contagiante da rotina comunitária.",
      image: "/image/crianca_futebol.jpg",
      color: "bg-emerald-500",
      textColor: "text-emerald-500",
    },
    {
      id: 2,
      icon: Utensils,
      title: t("arte.pin3Title"),
      desc: "Prove a gastronomia autêntica e aprecie as esquinas e comércios locais.",
      image: "/image/esquina_casas.jpg",
      color: "bg-amber-500",
      textColor: "text-amber-500",
    },
  ];

  return (
    <section id="arte" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[var(--border-color)] bg-[var(--bg-surface)]/40 scroll-mt-20">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <FadeInScroll direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-[var(--brand-blue-light)] text-[var(--brand-blue)] text-xs font-bold uppercase tracking-wider border border-[var(--brand-blue)]/20">
              <Sparkles className="w-4 h-4 text-[var(--brand-blue)]" />
              <span>{t("arte.tag")}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              {t("arte.title")}
            </h2>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              {t("arte.description")}
            </p>
          </div>
        </FadeInScroll>

        {/* Zig-Zag Grid Block 2: Text Left, Large Mural Right (Desktop) / Stacked (Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Content Block Left */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-4">
            {pins.map((pin, idx) => {
              const Icon = pin.icon;
              const isSelected = activePin === pin.id;
              return (
                <FadeInScroll key={pin.id} direction="left" delay={0.2 + idx * 0.1}>
                  <div
                    onClick={() => setActivePin(pin.id)}
                    className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[var(--bg-surface)] border-[var(--brand-blue)] shadow-xl scale-[1.02]"
                        : "bg-[var(--bg-surface)]/50 border-[var(--border-color)] opacity-75 hover:opacity-100"
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl bg-slate-900 text-white flex-shrink-0 ${pin.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <h3 className={`font-bold text-lg text-[var(--text-primary)] ${isSelected ? pin.textColor : ""}`}>
                          {pin.title}
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                          {pin.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeInScroll>
              );
            })}
          </div>

          {/* Mural Showcase Canvas Right with Real Photos (Expanded & Clean) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <FadeInScroll direction="right" delay={0.2}>
              <div className="relative w-full h-[460px] sm:h-[520px] lg:h-[580px] rounded-3xl border border-[var(--border-color)] overflow-hidden shadow-2xl p-6 sm:p-8 flex flex-col justify-between group">
                
                {/* Dynamic Background Photos according to selected Pin */}
                {pins.map((pin) => (
                  <div
                    key={pin.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      activePin === pin.id ? "opacity-100 z-0" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={pin.image}
                      alt={pin.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/20"></div>
                  </div>
                ))}

                {/* Top Info Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest text-amber-300 bg-slate-950/70 backdrop-blur-md px-4 py-2 rounded-full border border-amber-500/30 shadow-lg">
                    Passo 02 • Circuito Cultural
                  </span>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="relative z-10 space-y-1.5 bg-slate-950/85 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/10 w-full max-w-md shadow-2xl">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span className="text-xs sm:text-sm font-black text-amber-300 uppercase tracking-wider block">
                      {pins[activePin].title}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                    {pins[activePin].desc}
                  </p>
                </div>

              </div>
            </FadeInScroll>
          </div>

        </div>

      </div>
    </section>
  );
}
