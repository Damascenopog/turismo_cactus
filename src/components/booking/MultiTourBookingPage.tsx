"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useLanguage, Language } from "@/context/LanguageContext";
import { getAllTours, TourDetail } from "@/data/toursData";
import { getMultiTourBookingWhatsAppLink } from "@/lib/whatsapp";
import {
  Calendar as CalendarIcon,
  User,
  Users,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Clock,
  MapPin,
  Check,
} from "lucide-react";

export function MultiTourBookingContent() {
  const { language, t } = useLanguage();
  const searchParams = useSearchParams();
  const allTours = useMemo(() => getAllTours(language), [language]);

  // Selected tour IDs (array of strings, e.g. ["rocinha", "vidigal"])
  const [selectedTourIds, setSelectedTourIds] = useState<string[]>(["rocinha"]);
  const [userName, setUserName] = useState("");
  const [peopleCount, setPeopleCount] = useState(2);
  const [specialNotes, setSpecialNotes] = useState("");

  // Pre-select tour from URL param on load
  useEffect(() => {
    const tourParam = searchParams.get("tour");
    if (tourParam && ["rocinha", "vidigal", "rio-tour", "bailes"].includes(tourParam)) {
      setSelectedTourIds([tourParam]);
    }
  }, [searchParams]);

  // Initialize selected date as tomorrow
  const tomorrow = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d;
  }, []);

  const [selectedDate, setSelectedDate] = useState<Date>(tomorrow);
  const [viewDate, setViewDate] = useState<Date>(tomorrow);

  const toggleTourSelection = (tourId: string) => {
    setSelectedTourIds((prev) => {
      if (prev.includes(tourId)) {
        if (prev.length === 1) return prev; // Keep at least one selected
        return prev.filter((id) => id !== tourId);
      } else {
        return [...prev, tourId];
      }
    });
  };

  const selectAllTours = () => {
    const allIds = ["rocinha", "vidigal", "rio-tour", "bailes"];
    if (selectedTourIds.length === allIds.length) {
      setSelectedTourIds(["rocinha"]);
    } else {
      setSelectedTourIds(allIds);
    }
  };

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

  const selectedTourObjects = useMemo(() => {
    return selectedTourIds.map((id) => allTours[id]).filter(Boolean);
  }, [selectedTourIds, allTours]);

  const selectedTourTitles = useMemo(() => {
    return selectedTourObjects.map((t) => t.title);
  }, [selectedTourObjects]);

  const whatsappUrl = useMemo(() => {
    return getMultiTourBookingWhatsAppLink(
      language,
      userName,
      formattedSelectedDate,
      peopleCount,
      selectedTourTitles,
      specialNotes
    );
  }, [language, userName, formattedSelectedDate, peopleCount, selectedTourTitles, specialNotes]);

  const availableTourList = ["rocinha", "vidigal", "rio-tour", "bailes"];

  return (
    <div className="w-full min-h-screen pt-20 sm:pt-24 pb-16 sm:pb-20 px-3.5 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8 sm:space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-[11px] sm:text-xs font-black uppercase tracking-wider border border-emerald-500/20">
          <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
          <span>{t("bookingPage.badge")}</span>
        </div>

        <h1 className="text-2xl xs:text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          {t("bookingPage.title")}
        </h1>

        <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {t("bookingPage.subtitle")}
        </p>
      </div>

      {/* Step 1: Tour Selection Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-black flex items-center justify-center">
              1
            </span>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
              {t("bookingPage.step1Title")}
            </h2>
          </div>

          <button
            type="button"
            onClick={selectAllTours}
            className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 hover:underline px-2 py-1 rounded-lg"
          >
            {selectedTourIds.length === availableTourList.length
              ? t("bookingPage.deselectAll")
              : t("bookingPage.selectAll")}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {availableTourList.map((tourId) => {
            const tour = allTours[tourId];
            if (!tour) return null;
            const isSelected = selectedTourIds.includes(tourId);

            return (
              <div
                key={tourId}
                onClick={() => toggleTourSelection(tourId)}
                className={`relative rounded-3xl p-5 cursor-pointer transition-all duration-200 border text-left flex flex-col justify-between ${
                  isSelected
                    ? "bg-emerald-500/10 dark:bg-emerald-500/15 border-emerald-500/60 shadow-lg shadow-emerald-500/10 ring-2 ring-emerald-500"
                    : "bg-white/80 dark:bg-slate-900/80 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 opacity-80 hover:opacity-100"
                }`}
              >
                {/* Checkbox indicator */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-sm flex-shrink-0 bg-slate-200">
                    <Image
                      src={tour.heroImage}
                      alt={tour.title}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>

                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center transition-all ${
                      isSelected
                        ? "bg-emerald-600 text-white shadow-sm"
                        : "bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-transparent"
                    }`}
                  >
                    <Check className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1.5 flex-1">
                  <h3 className="text-base font-black text-slate-900 dark:text-white tracking-tight">
                    {tour.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                    {tour.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-bold text-slate-500 dark:text-slate-400">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    <span>{tour.duration}</span>
                  </span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-extrabold">
                    {isSelected ? t("bookingPage.selectedStatus") : t("bookingPage.addStatus")}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Step 2: Date, Guest count, and Summary Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start pt-2 sm:pt-4">
        
        {/* Left Column: Calendar & Details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-xl space-y-5 sm:space-y-6">
            
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-black flex items-center justify-center">
                2
              </span>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                {t("bookingPage.step2Title")}
              </h2>
            </div>

            {/* Tourist Name */}
            <div className="space-y-1.5">
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                {t("bookingPage.nameLabel")}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <User className="w-5 h-5 text-emerald-600" />
                </div>
                <input
                  type="text"
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder={t("bookingPage.namePlaceholder")}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 text-slate-900 dark:text-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
              </div>
            </div>

            {/* Number of Guests Counter */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-extrabold uppercase text-slate-700 dark:text-slate-300">
                    {t("bookingPage.peopleLabel")}
                  </span>
                  <span className="text-sm font-extrabold text-slate-900 dark:text-white">
                    {peopleCount} {peopleCount === 1 ? t("bookingPage.peopleSingular") : t("bookingPage.peoplePlural")}
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2 self-end sm:self-center">
                <button
                  type="button"
                  onClick={() => setPeopleCount((prev) => Math.max(1, prev - 1))}
                  className="w-9 h-9 rounded-xl bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-slate-600 active:scale-95 transition-all flex items-center justify-center text-base"
                >
                  -
                </button>
                <span className="w-8 text-center text-sm font-black text-slate-900 dark:text-white">
                  {peopleCount}
                </span>
                <button
                  type="button"
                  onClick={() => setPeopleCount((prev) => Math.min(20, prev + 1))}
                  className="w-9 h-9 rounded-xl bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-slate-600 active:scale-95 transition-all flex items-center justify-center text-base"
                >
                  +
                </button>
              </div>
            </div>

            {/* Calendar View Header */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {t("bookingPage.dateHeader")}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white capitalize">
                    {monthName}
                  </h3>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={prevMonth}
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:border-emerald-500 active:scale-95 transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextMonth}
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:border-emerald-500 active:scale-95 transition-all"
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
                  className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-extrabold text-slate-800 dark:text-slate-200 hover:border-emerald-500 transition-all"
                >
                  ⚡ {t("bookingPage.quickTomorrow")}
                </button>
                <button
                  type="button"
                  onClick={() => setQuickDate("saturday")}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-extrabold text-slate-800 dark:text-slate-200 hover:border-emerald-500 transition-all"
                >
                  🏖️ {t("bookingPage.quickSaturday")}
                </button>
                <button
                  type="button"
                  onClick={() => setQuickDate("sunday")}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-extrabold text-slate-800 dark:text-slate-200 hover:border-emerald-500 transition-all"
                >
                  ☀️ {t("bookingPage.quickSunday")}
                </button>
              </div>

              {/* Days of Week Header */}
              <div className="grid grid-cols-7 gap-1 text-center text-xs font-black text-slate-500 dark:text-slate-400 py-2 border-b border-slate-200/60 dark:border-slate-800">
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
                        if (!isPast) setSelectedDate(item.date);
                      }}
                      className={`h-10 sm:h-12 rounded-xl text-xs sm:text-sm font-bold flex flex-col items-center justify-center relative transition-all duration-200 ${
                        isSelected
                          ? "bg-emerald-600 text-white shadow-lg scale-105 z-10 font-black"
                          : isPast
                          ? "text-slate-300 dark:text-slate-700 cursor-not-allowed opacity-40"
                          : item.isCurrentMonth
                          ? "text-slate-800 dark:text-slate-200 hover:bg-emerald-500/10 hover:text-emerald-700 dark:hover:text-emerald-300"
                          : "text-slate-400 dark:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800"
                      } ${isTodayDate && !isSelected ? "border-2 border-emerald-500" : ""}`}
                    >
                      <span>{item.day}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Optional Notes */}
            <div className="space-y-1.5 pt-2">
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                {t("bookingPage.notesLabel")}
              </label>
              <textarea
                value={specialNotes}
                onChange={(e) => setSpecialNotes(e.target.value)}
                placeholder={t("bookingPage.notesPlaceholder")}
                rows={2}
                className="w-full px-4 py-3 rounded-2xl bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 text-slate-900 dark:text-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              />
            </div>

          </div>
        </div>

        {/* Right Column: Live Multi-Tour Summary & WhatsApp CTA */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-black/10 dark:border-white/15 shadow-2xl space-y-5 sm:space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center space-x-2 text-emerald-700 dark:text-emerald-400 font-black text-sm uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>{t("bookingPage.summaryTitle")}</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 text-xs font-black flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>
                  {selectedTourIds.length}{" "}
                  {selectedTourIds.length === 1
                    ? t("bookingPage.tourSelectedSingular")
                    : t("bookingPage.tourSelectedPlural")}
                </span>
              </span>
            </div>

            {/* Selected Tours List */}
            <div className="space-y-2">
              <span className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {t("bookingPage.includedToursLabel")}
              </span>
              <div className="space-y-2">
                {selectedTourObjects.map((tour) => (
                  <div
                    key={tour.id}
                    className="flex items-center justify-between p-3 rounded-2xl bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/60 dark:border-slate-700/60"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                          {tour.title}
                        </h4>
                        <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                          {tour.duration} • {tour.meetingPoint}
                        </span>
                      </div>
                    </div>

                    {selectedTourIds.length > 1 && (
                      <button
                        type="button"
                        onClick={() => toggleTourSelection(tour.id)}
                        className="text-xs text-rose-500 hover:text-rose-600 font-bold p-1"
                        title="Remover"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Details Box */}
            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-100/70 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 flex items-center space-x-3">
                <User className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <div className="text-xs">
                  <span className="text-slate-500 dark:text-slate-400 block font-bold">{t("bookingPage.leadGuestLabel")}</span>
                  <span className="font-extrabold text-slate-900 dark:text-white">
                    {userName.trim() ? userName.trim() : t("bookingPage.noNamePlaceholder")}
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-100/70 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 flex items-center space-x-3">
                <CalendarIcon className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <div className="text-xs">
                  <span className="text-slate-500 dark:text-slate-400 block font-bold">{t("bookingPage.startDateLabel")}</span>
                  <span className="font-extrabold text-slate-900 dark:text-white capitalize">
                    {formattedSelectedDate}
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-100/70 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 flex items-center space-x-3">
                <Users className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <div className="text-xs">
                  <span className="text-slate-500 dark:text-slate-400 block font-bold">{t("bookingPage.groupLabel")}</span>
                  <span className="font-extrabold text-slate-900 dark:text-white">
                    {peopleCount} {peopleCount === 1 ? t("bookingPage.peopleSingular") : t("bookingPage.peoplePlural")}
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
                className="w-full py-4 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-extrabold text-base shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center space-x-3 text-center cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{t("bookingPage.whatsappBtn")}</span>
              </a>

              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 text-center leading-relaxed">
                {t("bookingPage.footerNote")}
              </p>
            </div>

            {/* Features Checkpoints */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>{t("bookingPage.featGuides")}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>{t("bookingPage.featFlex")}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>{t("bookingPage.featSafe")}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>{t("bookingPage.featImpact")}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export function MultiTourBookingPage() {
  return (
    <React.Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center">Carregando...</div>}>
      <MultiTourBookingContent />
    </React.Suspense>
  );
}
