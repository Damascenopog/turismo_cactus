"use client";

import React from "react";
import Link from "next/link";
import { TourDetail, getTourData } from "@/data/toursData";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { useLanguage } from "@/context/LanguageContext";
import { Clock, MapPin, CheckCircle2, Calendar, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

interface TourRouteViewProps {
  tourId?: string;
  tour?: TourDetail;
}

export function TourRouteView({ tourId, tour: initialTour }: TourRouteViewProps) {
  const { language, t } = useLanguage();

  const targetId = tourId || initialTour?.id || "rocinha";
  const tour = getTourData(targetId, language);
  const englishTour = getTourData(targetId, "en");
  const portugueseTour = getTourData(targetId, "pt");

  return (
    <div className="w-full pb-20">
      {/* Quick Summary Capsule Strip */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex flex-wrap items-center justify-center gap-3 p-3 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-sm">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-bold">
            <Clock className="w-4 h-4 text-amber-500" />
            <span>{t("route.duration")}: {tour.duration}</span>
          </div>

          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-bold">
            <MapPin className="w-4 h-4 text-emerald-500" />
            <span>{t("route.meetingPoint")}: {tour.meetingPoint}</span>
          </div>

          <Link
            href={`/agendar?tour=${tour.id}`}
            className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-extrabold shadow-sm active:scale-95 transition-all"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{t("route.bookThisTour")}</span>
          </Link>
        </div>
      </section>

      {/* Ordered Route Timeline & Stop Details */}
      <section id="roteiro-paradas" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-extrabold uppercase tracking-wider">
            <span>{t("route.stepByStepTag")}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {t("route.orderOfStopsTitle")}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {t("route.orderOfStopsSubtitle")}
          </p>
        </div>

        {/* Stops List */}
        <div className="space-y-12 sm:space-y-16">
          {tour.stops.map((stop, index) => {
            const isEven = index % 2 === 0;
            const englishStop = englishTour?.stops?.[index];
            const portugueseStop = portugueseTour?.stops?.[index];

            // Show English counterpart for non-English locales; Show Portuguese original for English locale
            const secondaryTitle =
              language !== "en"
                ? englishStop?.title && englishStop.title.toLowerCase() !== stop.title.toLowerCase()
                  ? englishStop.title
                  : null
                : portugueseStop?.title && portugueseStop.title.toLowerCase() !== stop.title.toLowerCase()
                ? portugueseStop.title
                : null;

            const secondarySubtitle =
              language !== "en"
                ? englishStop?.subtitle && englishStop.subtitle.toLowerCase() !== stop.subtitle.toLowerCase()
                  ? englishStop.subtitle
                  : null
                : portugueseStop?.subtitle && portugueseStop.subtitle.toLowerCase() !== stop.subtitle.toLowerCase()
                ? portugueseStop.subtitle
                : null;

            return (
              <div
                key={stop.id}
                className="relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg transition-all hover:shadow-xl"
              >
                {/* Number Badge & Bilingual Spot Titles */}
                <div className="flex items-start space-x-3 sm:space-x-4 mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-600 text-white font-black text-lg sm:text-xl flex items-center justify-center shadow-md shadow-emerald-600/30 flex-shrink-0 mt-0.5">
                    {String(stop.number).padStart(2, "0")}
                  </div>
                  <div className="space-y-1 min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                        {stop.title}
                      </h3>
                      {secondaryTitle && (
                        <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] sm:text-xs font-bold text-slate-600 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/70">
                          <span className="opacity-70">{language !== "en" ? "🇺🇸 EN:" : "🇧🇷 PT:"}</span>
                          <span className="font-extrabold">{secondaryTitle}</span>
                        </span>
                      )}
                    </div>

                    <div className="text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400 flex flex-wrap items-baseline gap-x-2">
                      <span>{stop.subtitle}</span>
                      {secondarySubtitle && (
                        <span className="text-slate-500 dark:text-slate-400 font-normal text-[11px] sm:text-xs">
                          • {secondarySubtitle}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Grid: Description + Carousel */}
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}>
                  
                  {/* Text & Highlights */}
                  <div className={`lg:col-span-6 space-y-4 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                      {stop.description}
                    </p>

                    {/* Highlights Pills */}
                    <div className="pt-2">
                      <span className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                        {t("route.experienceHighlight")}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {stop.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold border border-slate-200/60 dark:border-slate-700/60"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span>{h}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Interactive Image Carousel */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <ImageCarousel images={stop.images} />
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* What is Included Card */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-6">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-2xl bg-emerald-500/20 text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight">{t("route.whatIncludedTitle")}</h3>
              <p className="text-xs text-slate-400">{t("route.whatIncludedSubtitle")}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {tour.included.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Card - Direct link to /agendar */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="rounded-3xl bg-gradient-to-br from-white/90 via-slate-50/90 to-emerald-50/40 dark:from-slate-900/90 dark:via-slate-900/90 dark:to-emerald-950/30 backdrop-blur-2xl border-2 border-emerald-500/30 dark:border-emerald-500/40 p-8 sm:p-12 shadow-2xl text-center space-y-6">
          <div className="space-y-3 max-w-xl mx-auto">
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Reserva Direta</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Quer fazer o {tour.title}?
            </h3>
            <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Escolha a data no nosso calendário e combine os detalhes com o guia pelo WhatsApp.
            </p>
          </div>

          <div className="flex items-center justify-center pt-2">
            <Link
              href={`/agendar?tour=${tour.id}`}
              className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Ir para o Agendamento</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
