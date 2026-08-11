"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FadeInScroll } from "@/components/animations/FadeInScroll";
import { Palette, Music, Utensils, Sparkles, MapPin } from "lucide-react";

export function ArteSection() {
  const { t } = useLanguage();
  const [activePin, setActivePin] = useState(0);

  const pins = [
    {
      id: 0,
      icon: Palette,
      title: t("arte.pin1Title"),
      desc: t("arte.pin1Desc"),
      color: "bg-[var(--brand-blue)]",
      textColor: "text-[var(--brand-blue)]",
      top: "30%",
      left: "25%",
    },
    {
      id: 1,
      icon: Music,
      title: t("arte.pin2Title"),
      desc: t("arte.pin2Desc"),
      color: "bg-emerald-500",
      textColor: "text-emerald-500",
      top: "45%",
      left: "65%",
    },
    {
      id: 2,
      icon: Utensils,
      title: t("arte.pin3Title"),
      desc: t("arte.pin3Desc"),
      color: "bg-amber-500",
      textColor: "text-amber-500",
      top: "70%",
      left: "40%",
    },
  ];

  return (
    <section id="arte" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--border-color)] bg-[var(--bg-surface)]/40 scroll-mt-20">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <FadeInScroll direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-[var(--brand-blue-light)] text-[var(--brand-blue)] text-xs font-bold uppercase tracking-wider border border-[var(--brand-blue)]/20">
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

        {/* Interactive Hotspot Map / Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Interactive Canvas / Map Simulator */}
          <div className="lg:col-span-7">
            <FadeInScroll direction="left" delay={0.2}>
              <div className="relative w-full h-80 sm:h-96 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] overflow-hidden shadow-xl p-6 flex flex-col justify-between">
                <div className="absolute inset-0 opacity-15 dark:opacity-25 bg-[radial-gradient(#1E40AF_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">
                    Mapa de Experiências Culturais
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-[var(--brand-blue)] text-white font-bold shadow-sm flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>Toque nos Pins 📍</span>
                  </span>
                </div>

                {pins.map((pin) => {
                  const Icon = pin.icon;
                  const isSelected = activePin === pin.id;
                  return (
                    <button
                      key={pin.id}
                      onClick={() => setActivePin(pin.id)}
                      style={{ top: pin.top, left: pin.left }}
                      aria-label={pin.title}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group flex items-center justify-center transition-all ${
                        isSelected ? "scale-125 z-30" : "hover:scale-110"
                      }`}
                    >
                      <span className={`absolute -inset-2 rounded-full ${pin.color} opacity-40 ${isSelected ? "animate-ping" : ""}`}></span>
                      <div className={`w-12 h-12 rounded-2xl ${pin.color} text-white shadow-xl flex items-center justify-center font-bold`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </button>
                  );
                })}

                <div className="relative z-10 text-xs text-[var(--text-secondary)] font-medium">
                  Rocinha • Zona Sul • Rio de Janeiro
                </div>
              </div>
            </FadeInScroll>
          </div>

          {/* Right Detail Card for Selected Pin */}
          <div className="lg:col-span-5 space-y-4">
            {pins.map((pin, idx) => {
              const Icon = pin.icon;
              const isSelected = activePin === pin.id;
              return (
                <FadeInScroll key={pin.id} direction="right" delay={0.2 + idx * 0.1}>
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

        </div>

      </div>
    </section>
  );
}
