"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const { language, t } = useLanguage();
  const [hovered, setHovered] = useState(false);

  const whatsappUrl = getWhatsAppLink(language);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip / Badge on Hover & Mobile Focus */}
      <div
        className={`mr-3 px-3 py-1.5 bg-[var(--bg-surface)] text-[var(--text-primary)] text-xs font-semibold rounded-xl border border-[var(--border-color)] shadow-xl transition-all duration-300 pointer-events-none ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        <span className="flex items-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>{t("hero.ctaWhatsApp")}</span>
        </span>
      </div>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={t("hero.ctaWhatsApp")}
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Pulse Glow Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none"></span>

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-current relative z-10" />
      </a>
    </div>
  );
}
