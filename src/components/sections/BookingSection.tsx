"use client";

import React, { useState, useMemo } from "react";
import { useLanguage, Language } from "@/context/LanguageContext";
import { getBookingWhatsAppLink } from "@/lib/whatsapp";
import { FadeInScroll } from "@/components/animations/FadeInScroll";
import {
  Calendar as CalendarIcon,
  User,
  Users,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Sparkles,
  CheckCircle,
  Clock,
} from "lucide-react";

export function BookingSection() {
  const { language, t } = useLanguage();

  // State
  const [userName, setUserName] = useState("");
  const [peopleCount, setPeopleCount] = useState(2);

  // Initialize selected date as tomorrow
  const tomorrow = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d;
  }, []);

  const [selectedDate, setSelectedDate] = useState<Date>(tomorrow);
  const [viewDate, setViewDate] = useState<Date>(tomorrow);

  // Month navigation
  const prevMonth = () => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  // Quick Date Helpers
  const setQuickDate = (type: "tomorrow" | "saturday" | "sunday") => {
    const today = new Date();
    if (type === "tomorrow") {
      const d = new Date();
      d.setDate(today.getDate() + 1);
      setSelectedDate(d);
      setViewDate(d);
    } else if (type === "saturday") {
      const d = new Date();
      const day = today.getDay();
      const diff = (6 - day + 7) % 7 || 7;
      d.setDate(today.getDate() + diff);
      setSelectedDate(d);
      setViewDate(d);
    } else if (type === "sunday") {
      const d = new Date();
      const day = today.getDay();
      const diff = (7 - day + 7) % 7 || 7;
      d.setDate(today.getDate() + diff);
      setSelectedDate(d);
      setViewDate(d);
    }
  };

  // Calendar calculations
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const monthName = useMemo(() => {
    const localeMap: Record<Language, string> = {
      pt: "pt-BR",
      en: "en-US",
      es: "es-ES",
      de: "de-DE",
    };
    return new Intl.DateTimeFormat(localeMap[language], {
      month: "long",
      year: "numeric",
    }).format(viewDate);
  }, [viewDate, language]);

  const daysOfWeek = useMemo(() => {
    const labels: Record<Language, string[]> = {
      pt: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
      en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      es: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
      de: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    };
    return labels[language] || labels.pt;
  }, [language]);

  const calendarDays = useMemo(() => {
    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const days: Array<{ day: number; date: Date; isCurrentMonth: boolean }> = [];

    // Prev month padding
    const prevMonthTotalDays = new Date(year, month, 0).getDate();
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const d = new Date(year, month - 1, prevMonthTotalDays - i);
      days.push({ day: prevMonthTotalDays - i, date: d, isCurrentMonth: false });
    }

    // Current month days
    for (let i = 1; i <= totalDays; i++) {
      const d = new Date(year, month, i);
      days.push({ day: i, date: d, isCurrentMonth: true });
    }

    // Next month padding to fill 35 or 42 grid cells
    const remaining = 35 - days.length >= 0 ? 35 - days.length : 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      const d = new Date(year, month + 1, i);
      days.push({ day: i, date: d, isCurrentMonth: false });
    }

    return days;
  }, [year, month]);

  const isToday = (d: Date) => {
    const today = new Date();
    return (
      d.getDate() === today.getDate() &&
      d.getMonth() === today.getMonth() &&
      d.getFullYear() === today.getFullYear()
    );
  };

  const isPastDate = (d: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const target = new Date(d);
    target.setHours(0, 0, 0, 0);
    return target < today;
  };

  const isSelectedDate = (d: Date) => {
    return (
      d.getDate() === selectedDate.getDate() &&
      d.getMonth() === selectedDate.getMonth() &&
      d.getFullYear() === selectedDate.getFullYear()
    );
  };

  const formattedSelectedDate = useMemo(() => {
    const localeMap: Record<Language, string> = {
      pt: "pt-BR",
      en: "en-US",
      es: "es-ES",
      de: "de-DE",
    };
    return new Intl.DateTimeFormat(localeMap[language], {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(selectedDate);
  }, [selectedDate, language]);

  const whatsappUrl = getBookingWhatsAppLink(
    language,
    userName,
    formattedSelectedDate,
    peopleCount
  );

  return (
    <section id="booking" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[var(--border-color)] relative scroll-mt-20">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-[var(--brand-yellow)]/10 dark:bg-[var(--brand-yellow)]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <FadeInScroll direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-[var(--brand-yellow)]/10 text-[var(--brand-yellow)] text-xs font-bold uppercase tracking-wider border border-[var(--brand-yellow)]/20">
              <CalendarIcon className="w-4 h-4 text-[var(--brand-yellow)]" />
              <span>{t("booking.tag")}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              {t("booking.title")}
            </h2>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              {t("booking.subtitle")}
            </p>
          </div>
        </FadeInScroll>

        {/* Main Booking Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Calendar & Inputs */}
          <div className="lg:col-span-7 space-y-6">
            <FadeInScroll direction="left" delay={0.2}>
              <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xl space-y-6">
                
                {/* Tourist Name Input */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                    {t("booking.nameLabel")}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[var(--text-secondary)]">
                      <User className="w-5 h-5 text-[var(--brand-blue)]" />
                    </div>
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder={t("booking.namePlaceholder")}
                      className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[var(--bg-surface-hover)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm font-semibold placeholder:text-[var(--text-secondary)]/60 focus:outline-none focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[var(--brand-blue)]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Number of Guests Counter */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[var(--bg-surface-hover)] border border-[var(--border-color)]">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-[var(--brand-blue-light)] text-[var(--brand-blue)]">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase text-[var(--text-secondary)]">
                        {t("booking.peopleLabel")}
                      </span>
                      <span className="text-sm font-extrabold text-[var(--text-primary)]">
                        {peopleCount} {t("booking.peopleUnit")}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 self-end sm:self-center">
                    <button
                      type="button"
                      onClick={() => setPeopleCount((prev) => Math.max(1, prev - 1))}
                      className="w-9 h-9 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)] font-bold hover:bg-[var(--border-color)]/30 active:scale-95 transition-all flex items-center justify-center text-base"
                      aria-label="Diminuir pessoas"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-sm font-black text-[var(--text-primary)]">
                      {peopleCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => setPeopleCount((prev) => Math.min(20, prev + 1))}
                      className="w-9 h-9 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)] font-bold hover:bg-[var(--border-color)]/30 active:scale-95 transition-all flex items-center justify-center text-base"
                      aria-label="Aumentar pessoas"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Calendar View Header */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                        {t("booking.dateLabel")}
                      </span>
                      <h4 className="text-lg font-black text-[var(--text-primary)] capitalize">
                        {monthName}
                      </h4>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={prevMonth}
                        className="p-2 rounded-xl bg-[var(--bg-surface-hover)] border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--brand-blue)] active:scale-95 transition-all"
                        aria-label="Mês anterior"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={nextMonth}
                        className="p-2 rounded-xl bg-[var(--bg-surface-hover)] border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--brand-blue)] active:scale-95 transition-all"
                        aria-label="Próximo mês"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Quick Select Buttons */}
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setQuickDate("tomorrow")}
                      className="px-3 py-1.5 rounded-lg bg-[var(--bg-surface-hover)] border border-[var(--border-color)] text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--brand-blue)] hover:border-[var(--brand-blue)]/50 transition-all"
                    >
                      ⚡ {t("booking.quickTomorrow")}
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuickDate("saturday")}
                      className="px-3 py-1.5 rounded-lg bg-[var(--bg-surface-hover)] border border-[var(--border-color)] text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--brand-blue)] hover:border-[var(--brand-blue)]/50 transition-all"
                    >
                      🏖️ {t("booking.quickSaturday")}
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuickDate("sunday")}
                      className="px-3 py-1.5 rounded-lg bg-[var(--bg-surface-hover)] border border-[var(--border-color)] text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--brand-blue)] hover:border-[var(--brand-blue)]/50 transition-all"
                    >
                      ☀️ {t("booking.quickSunday")}
                    </button>
                  </div>

                  {/* Days of Week Header */}
                  <div className="grid grid-cols-7 gap-1 text-center text-xs font-extrabold text-[var(--text-secondary)] py-2 border-b border-[var(--border-color)]/60">
                    {daysOfWeek.map((dayLabel, idx) => (
                      <div key={idx}>{dayLabel}</div>
                    ))}
                  </div>

                  {/* Calendar Days Grid */}
                  <div className="grid grid-cols-7 gap-1 sm:gap-2">
                    {calendarDays.map((item, idx) => {
                      const isPast = isPastDate(item.date);
                      const isSelected = isSelectedDate(item.date);
                      const isTodayDate = isToday(item.date);

                      return (
                        <button
                          key={idx}
                          type="button"
                          disabled={isPast}
                          onClick={() => {
                            if (!isPast) {
                              setSelectedDate(item.date);
                            }
                          }}
                          className={`h-10 sm:h-12 rounded-xl text-xs sm:text-sm font-bold flex flex-col items-center justify-center relative transition-all duration-200 ${
                            isSelected
                              ? "bg-[var(--brand-yellow)] text-slate-950 shadow-lg scale-105 z-10"
                              : isPast
                              ? "text-[var(--text-secondary)]/30 cursor-not-allowed"
                              : item.isCurrentMonth
                              ? "text-[var(--text-primary)] hover:bg-[var(--brand-blue-light)] hover:text-[var(--brand-blue)]"
                              : "text-[var(--text-secondary)]/40 hover:bg-[var(--border-color)]/30"
                          } ${isTodayDate && !isSelected ? "border border-[var(--brand-blue)]" : ""}`}
                        >
                          <span>{item.day}</span>
                          {isTodayDate && !isSelected && (
                            <span className="w-1 h-1 rounded-full bg-[var(--brand-blue)] mt-0.5"></span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                </div>

              </div>
            </FadeInScroll>
          </div>

          {/* Right Column: Live Booking Summary & WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-6">
            <FadeInScroll direction="right" delay={0.3}>
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[var(--bg-surface)] via-[var(--bg-surface-hover)] to-[var(--brand-blue-light)] border border-[var(--brand-blue)]/30 shadow-2xl space-y-6">
                
                <div className="flex items-center justify-between pb-4 border-b border-[var(--border-color)]">
                  <div className="flex items-center space-x-2 text-[var(--brand-blue)] font-black text-sm uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>{t("booking.selectedSummary")}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-extrabold flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    <span>Guia Disponível</span>
                  </span>
                </div>

                {/* Selected Details Box */}
                <div className="space-y-4">
                  
                  {/* Name Info */}
                  <div className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] flex-shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase text-[var(--text-secondary)]">
                        {t("booking.forText")}
                      </span>
                      <span className="text-sm sm:text-base font-extrabold text-[var(--text-primary)]">
                        {userName.trim() ? userName.trim() : "— (Informe seu nome)"}
                      </span>
                    </div>
                  </div>

                  {/* Date Info */}
                  <div className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-[var(--brand-yellow)]/10 text-[var(--brand-yellow)] flex-shrink-0">
                      <CalendarIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase text-[var(--text-secondary)]">
                        Data Escolhida
                      </span>
                      <span className="text-sm sm:text-base font-extrabold text-[var(--text-primary)] capitalize">
                        {formattedSelectedDate}
                      </span>
                    </div>
                  </div>

                  {/* Guests & Schedule Info */}
                  <div className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase text-[var(--text-secondary)]">
                        Grupo & Duração
                      </span>
                      <span className="text-sm font-extrabold text-[var(--text-primary)]">
                        {peopleCount} {t("booking.peopleUnit")} • ~3 a 4 horas
                      </span>
                    </div>
                  </div>

                </div>

                {/* Direct WhatsApp CTA Button */}
                <div className="pt-2 space-y-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-black text-base shadow-xl shadow-emerald-500/30 transition-all flex items-center justify-center space-x-3 text-center"
                  >
                    <MessageCircle className="w-6 h-6 fill-current" />
                    <span>{t("booking.ctaBtn")}</span>
                  </a>

                  <p className="text-[11px] text-[var(--text-secondary)] text-center leading-relaxed">
                    {t("booking.helperNote")}
                  </p>
                </div>

                {/* Features Checkpoints */}
                <div className="pt-4 border-t border-[var(--border-color)] grid grid-cols-2 gap-2 text-xs text-[var(--text-secondary)]">
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    <span>Guia Local Nativo</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    <span>Horário Flexível</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    <span>Passeio 100% Seguro</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    <span>Impacto Social Direto</span>
                  </div>
                </div>

              </div>
            </FadeInScroll>
          </div>

        </div>

        {/* Secondary Itinerary Anchor Banner */}
        <FadeInScroll direction="up" delay={0.4}>
          <div className="text-center pt-2">
            <a
              href="#roteiro"
              className="inline-flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold text-[var(--text-secondary)] hover:text-[var(--brand-blue)] transition-colors py-2.5 px-5 rounded-2xl hover:bg-[var(--bg-surface)] border border-transparent hover:border-[var(--border-color)] group"
            >
              <span>{t("booking.seeItineraryPrompt")}</span>
              <span className="text-[var(--brand-blue)] underline underline-offset-4 flex items-center space-x-1 font-extrabold">
                <span>{t("booking.seeItineraryBtn")}</span>
                <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
              </span>
            </a>
          </div>
        </FadeInScroll>

      </div>
    </section>
  );
}
