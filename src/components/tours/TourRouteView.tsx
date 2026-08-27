"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TourDetail, getTourData } from "@/data/toursData";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { useLanguage } from "@/context/LanguageContext";
import { Clock, MapPin, CheckCircle2, MessageCircle, Calendar, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";

interface TourRouteViewProps {
  tourId?: string;
  tour?: TourDetail;
}

export function TourRouteView({ tourId, tour: initialTour }: TourRouteViewProps) {
  const { language, t } = useLanguage();
  const [selectedDate, setSelectedDate] = useState("");
  const [peopleCount, setPeopleCount] = useState(2);
  const [clientName, setClientName] = useState("");

  const targetId = tourId || initialTour?.id || "rocinha";
  const tour = getTourData(targetId, language);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "5521990422998";
    
    let msg = "";
    if (language === "en") {
      msg = `Hello! My name is ${clientName || "Visitor"}. I would like to book the ${tour.title} for ${peopleCount} person(s)${selectedDate ? ` on ${selectedDate}` : ""}. Could you give me more details?`;
    } else if (language === "es") {
      msg = `¡Hola! Mi nombre es ${clientName || "Visitante"}. Quisiera reservar el ${tour.title} para ${peopleCount} persona(s)${selectedDate ? ` el día ${selectedDate}` : ""}. ¿Podrías darme más información?`;
    } else if (language === "de") {
      msg = `Hallo! Mein Name ist ${clientName || "Besucher"}. Ich möchte die ${tour.title} für ${peopleCount} Person(en)${selectedDate ? ` am ${selectedDate}` : ""} buchen. Können Sie mir weitere Informationen geben?`;
    } else {
      msg = `Olá! Meu nome é ${clientName || "Visitante"}. Gostaria de agendar o ${tour.title} para ${peopleCount} pessoa(s)${selectedDate ? ` no dia ${selectedDate}` : ""}. Poderia me passar mais informações?`;
    }

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

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
            return (
              <div
                key={stop.id}
                className="relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg transition-all hover:shadow-xl"
              >
                {/* Number Badge */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-600 text-white font-black text-lg sm:text-xl flex items-center justify-center shadow-md shadow-emerald-600/30 flex-shrink-0">
                    {String(stop.number).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                      {stop.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                      {stop.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content Grid: Description + Carousel */}
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}>
                  
                  {/* Left Column: Text & Highlights */}
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

                  {/* Right Column: Interactive Image Carousel */}
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

      {/* Booking Form Card Anchor */}
      <section id="agendamento" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-black/10 dark:border-white/10 p-6 sm:p-10 shadow-xl space-y-6">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-extrabold uppercase tracking-wider">
              <span>{t("route.bookingTag")}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {t("route.bookingTitlePrefix")} {tour.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {t("route.bookingSubtitle")}
            </p>
          </div>

          <form onSubmit={handleBookingSubmit} className="space-y-4 max-w-lg mx-auto pt-2">
            <div>
              <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                {t("route.nameLabel")}
              </label>
              <input
                type="text"
                required
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder={t("route.namePlaceholder")}
                className="w-full px-4 py-3.5 rounded-2xl bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 text-slate-900 dark:text-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  {t("route.dateLabel")}
                </label>
                <input
                  type="date"
                  required
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-2xl bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 text-slate-900 dark:text-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  {t("route.peopleLabel")}
                </label>
                <select
                  value={peopleCount}
                  onChange={(e) => setPeopleCount(Number(e.target.value))}
                  className="w-full px-4 py-3.5 rounded-2xl bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 text-slate-900 dark:text-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? t("route.peopleUnitSingular") : t("route.peopleUnitPlural")}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base flex items-center justify-center space-x-2 shadow-lg shadow-emerald-600/25 active:scale-95 transition-all cursor-pointer mt-4"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{t("route.confirmWhatsAppBtn")}</span>
            </button>
          </form>

          {/* Multi-Tour Upsell Box */}
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 text-center space-y-2">
            <p className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
              Deseja agendar mais de um passeio no mesmo pacote?
            </p>
            <a
              href={`/agendar?tour=${tour.id}`}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-emerald-500/10 dark:hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-extrabold border border-emerald-500/30 transition-all active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Montar Pacote com Múltiplos Tours no Rio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
