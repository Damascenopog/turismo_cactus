"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown, ShieldCheck, HelpCircle, Lock, Award } from "lucide-react";

export function PortalFooter() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: t("portal.faq.q1"),
      a: t("portal.faq.a1"),
    },
    {
      q: t("portal.faq.q2"),
      a: t("portal.faq.a2"),
    },
    {
      q: t("portal.faq.q3"),
      a: t("portal.faq.a3"),
    },
    {
      q: t("portal.faq.q4"),
      a: t("portal.faq.a4"),
    },
  ];

  return (
    <footer id="faq" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--border-color)] bg-[var(--bg-surface)]/60 scroll-mt-20">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* FAQ Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-blue-500/10 text-blue-800 dark:text-blue-300 text-xs font-black uppercase tracking-wider border border-blue-500/30">
            <HelpCircle className="w-4 h-4 text-blue-700 dark:text-blue-400" aria-hidden="true" />
            <span>{t("portal.faq.tag")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
            {t("portal.faq.title")}
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
                  isOpen ? "border-blue-600 dark:border-blue-400 shadow-md" : "border-[var(--border-color)]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`portal-faq-answer-${idx}`}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-base sm:text-lg text-[var(--text-primary)] hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-600 dark:text-blue-400" : "text-[var(--text-secondary)]"
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div
                    id={`portal-faq-answer-${idx}`}
                    className="px-6 pb-6 text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-color)]/50 pt-4 animate-in fade-in duration-200 font-medium"
                  >
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
            <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            <span className="font-extrabold text-[var(--text-primary)]">Condutores Nativos</span>
            <span className="font-medium text-slate-700 dark:text-slate-300">Moradores experientes que nasceram e vivem na cidade e nas comunidades.</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            <span className="font-extrabold text-[var(--text-primary)]">Reserva Segura</span>
            <span className="font-medium text-slate-700 dark:text-slate-300">Sem taxas ocultas, confirmação direta pelo WhatsApp.</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Award className="w-6 h-6 text-amber-600 dark:text-amber-400" aria-hidden="true" />
            <span className="font-extrabold text-[var(--text-primary)]">Turismo Consciente</span>
            <span className="font-medium text-slate-700 dark:text-slate-300">Respeito à rotina, privacidade e cultura dos moradores.</span>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="pt-8 border-t border-[var(--border-color)] text-center text-xs text-[var(--text-secondary)] space-y-2">
          <p className="font-extrabold text-[var(--text-primary)] flex items-center justify-center space-x-1">
            <span>🌵 Cactus Turismo</span>
            <span className="text-blue-700 dark:text-blue-400">• Rio de Janeiro</span>
          </p>
          <p className="text-slate-600 dark:text-slate-400 font-medium">{t("footer.rights")}</p>
        </div>

      </div>
    </footer>
  );
}
