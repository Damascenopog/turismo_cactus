"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getTourWhatsAppLink } from "@/lib/whatsapp";
import { FadeInScroll } from "@/components/animations/FadeInScroll";
import {
  Compass,
  Mountain,
  Landmark,
  Music,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export function PortalServices() {
  const { language, t } = useLanguage();

  const services = [
    {
      id: "rocinha",
      icon: Compass,
      tag: t("portal.services.rocinha.tag"),
      title: t("portal.services.rocinha.title"),
      desc: t("portal.services.rocinha.desc"),
      image: "/image/esquina_casas.jpg",
      badges: [
        t("portal.services.rocinha.badge1"),
        t("portal.services.rocinha.badge2"),
        t("portal.services.rocinha.badge3"),
        t("portal.services.rocinha.badge4"),
      ],
      tagColor: "bg-amber-500/15 text-amber-900 dark:text-amber-300 border-amber-500/30",
      accentBg: "from-amber-500/10 to-transparent",
      accentBorder: "hover:border-amber-500/50",
      isFeatured: true,
      hasPage: true,
      pageHref: "/rocinha",
      pageCtaText: t("portal.services.rocinha.ctaPage"),
      bookCtaText: t("portal.services.rocinha.ctaBook"),
      whatsappUrl: getTourWhatsAppLink("rocinha", language),
    },
    {
      id: "vidigal",
      icon: Mountain,
      tag: t("portal.services.vidigal.tag"),
      title: t("portal.services.vidigal.title"),
      desc: t("portal.services.vidigal.desc"),
      image: "/image/vistacristo-light.jpg",
      badges: [
        t("portal.services.vidigal.badge1"),
        t("portal.services.vidigal.badge2"),
        t("portal.services.vidigal.badge3"),
        t("portal.services.vidigal.badge4"),
      ],
      tagColor: "bg-emerald-500/15 text-emerald-900 dark:text-emerald-300 border-emerald-500/30",
      accentBg: "from-emerald-500/10 to-transparent",
      accentBorder: "hover:border-emerald-500/50",
      isFeatured: false,
      hasPage: false,
      bookCtaText: t("portal.services.vidigal.ctaBook"),
      whatsappUrl: getTourWhatsAppLink("vidigal", language),
    },
    {
      id: "rioTour",
      icon: Landmark,
      tag: t("portal.services.rioTour.tag"),
      title: t("portal.services.rioTour.title"),
      desc: t("portal.services.rioTour.desc"),
      image: "/image/topo_light.jpg",
      badges: [
        t("portal.services.rioTour.badge1"),
        t("portal.services.rioTour.badge2"),
        t("portal.services.rioTour.badge3"),
        t("portal.services.rioTour.badge4"),
      ],
      tagColor: "bg-blue-500/15 text-blue-900 dark:text-blue-300 border-blue-500/30",
      accentBg: "from-blue-500/10 to-transparent",
      accentBorder: "hover:border-blue-500/50",
      isFeatured: false,
      hasPage: false,
      bookCtaText: t("portal.services.rioTour.ctaBook"),
      whatsappUrl: getTourWhatsAppLink("rioTour", language),
    },
    {
      id: "baileFunk",
      icon: Music,
      tag: t("portal.services.baileFunk.tag"),
      title: t("portal.services.baileFunk.title"),
      desc: t("portal.services.baileFunk.desc"),
      image: "/image/casasmorro-dark.jpg",
      badges: [
        t("portal.services.baileFunk.badge1"),
        t("portal.services.baileFunk.badge2"),
        t("portal.services.baileFunk.badge3"),
        t("portal.services.baileFunk.badge4"),
      ],
      tagColor: "bg-rose-500/15 text-rose-900 dark:text-rose-300 border-rose-500/30",
      accentBg: "from-rose-500/10 to-transparent",
      accentBorder: "hover:border-rose-500/50",
      isFeatured: false,
      hasPage: false,
      bookCtaText: t("portal.services.baileFunk.ctaBook"),
      whatsappUrl: getTourWhatsAppLink("baileFunk", language),
    },
  ];

  return (
    <section id="servicos" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--border-color)] bg-[var(--bg-surface)]/40 scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <FadeInScroll direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-blue-500/10 text-blue-900 dark:text-blue-300 text-xs font-black uppercase tracking-wider border border-blue-500/30">
              <Sparkles className="w-4 h-4 text-blue-700 dark:text-blue-400" aria-hidden="true" />
              <span>{t("portal.services.tag")}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[var(--text-primary)]">
              {t("portal.services.title")}
            </h2>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              {t("portal.services.subtitle")}
            </p>
          </div>
        </FadeInScroll>

        {/* Services Grid (2x2 on Desktop, 1 Column on Mobile for Immediate Readability) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <FadeInScroll key={service.id} direction="up" delay={0.15 + idx * 0.1}>
                <div
                  className={`h-full rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] ${service.accentBorder} shadow-xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl`}
                >
                  {/* Card Media Header */}
                  <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/20"></div>

                    {/* Top Tag Badge */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className={`text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border backdrop-blur-md shadow-md ${service.tagColor}`}>
                        {service.tag}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-lg">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <h3 className="text-xl sm:text-2xl font-black text-white leading-snug drop-shadow-md">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content & Features */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                    <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-medium">
                      {service.desc}
                    </p>

                    {/* Quick Feature Badges Grid */}
                    <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-[var(--border-color)]">
                      {service.badges.map((badge, bIdx) => (
                        <div key={bIdx} className="flex items-center space-x-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" aria-hidden="true" />
                          <span className="truncate">{badge}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                      {service.hasPage && service.pageHref ? (
                        <>
                          <Link
                            href={service.pageHref}
                            className="w-full sm:flex-1 py-3.5 px-4 rounded-xl bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-hover)] text-white font-extrabold text-xs uppercase tracking-wider text-center flex items-center justify-center space-x-2 shadow-md transition-all active:scale-95"
                          >
                            <span>{service.pageCtaText}</span>
                            <ArrowRight className="w-4 h-4" aria-hidden="true" />
                          </Link>

                          <a
                            href={service.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md transition-all active:scale-95"
                            aria-label={`Agendar ${service.title} no WhatsApp`}
                          >
                            <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
                            <span>WhatsApp</span>
                          </a>
                        </>
                      ) : (
                        <a
                          href={service.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center space-x-2.5 shadow-lg shadow-emerald-600/25 transition-all active:scale-95"
                          aria-label={`Agendar ${service.title} no WhatsApp`}
                        >
                          <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
                          <span>{service.bookCtaText}</span>
                        </a>
                      )}
                    </div>

                  </div>
                </div>
              </FadeInScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}
