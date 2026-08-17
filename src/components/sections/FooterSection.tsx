"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown, ShieldCheck, HelpCircle, Lock, Award } from "lucide-react";

export function FooterSection() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: t("footer.faqQ1"),
      a: t("footer.faqA1"),
    },
    {
      q: t("footer.faqQ2"),
      a: t("footer.faqA2"),
    },
    {
      q: t("footer.faqQ3"),
      a: t("footer.faqA3"),
    },
  ];

  return (
    <footer id="faq" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--border-color)] bg-[var(--bg-surface)]/60 scroll-mt-20">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* FAQ Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-[var(--brand-blue-light)] text-[var(--brand-blue)] text-xs font-bold uppercase tracking-wider border border-[var(--brand-blue)]/20">
            <HelpCircle className="w-4 h-4 text-[var(--brand-blue)]" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
            {t("footer.faqTitle")}
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl bg-[var(--bg-surface)] border transition-all shadow-sm ${
                  isOpen ? "border-[var(--brand-blue)] shadow-md" : "border-[var(--border-color)]"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-base sm:text-lg text-[var(--text-primary)] hover:text-[var(--brand-blue)] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[var(--brand-blue)]" : "text-[var(--text-secondary)]"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-color)]/50 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Trust & Safety Badges */}
        <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-xs text-[var(--text-secondary)]">
          <div className="flex flex-col items-center space-y-2">
            <ShieldCheck className="w-6 h-6 text-emerald-500" />
            <span className="font-bold text-[var(--text-primary)]">Condutores Nativos</span>
            <span>Moradores experientes que nasceram e vivem na Rocinha.</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Lock className="w-6 h-6 text-[var(--brand-blue)]" />
            <span className="font-bold text-[var(--text-primary)]">Reserva Segura</span>
            <span>Sem taxas ocultas, confirmação direta pelo WhatsApp.</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Award className="w-6 h-6 text-[var(--brand-yellow)]" />
            <span className="font-bold text-[var(--text-primary)]">Turismo Consciente</span>
            <span>Respeito à rotina, privacidade e cultura da favela.</span>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="pt-8 border-t border-[var(--border-color)] text-center text-xs text-[var(--text-secondary)] space-y-2">
          <p className="font-bold text-[var(--text-primary)] flex items-center justify-center space-x-1">
            <span>🌵 Cactus Turismo</span>
            <span className="text-[var(--brand-blue)]">• Tour Rocinha</span>
          </p>
          <p>{t("footer.rights")}</p>
        </div>

      </div>
    </footer>
  );
}
