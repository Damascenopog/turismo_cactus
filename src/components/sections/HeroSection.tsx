import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { TourDetail, getTourData } from "@/data/toursData";
import { FadeInScroll } from "@/components/animations/FadeInScroll";
import { DiaTextReveal, BRAZIL_COLORS } from "@/components/ui/dia-text-reveal";
import { ArrowRight, MessageCircle, Calendar as CalendarIcon } from "lucide-react";

interface HeroSectionProps {
  tourId?: "rocinha" | "vidigal" | "rio-tour" | "bailes";
  titlePrefix?: string;
  titleHighlight?: string;
  subtitle?: string;
  imageDay?: string;
  imageNight?: string;
  altDay?: string;
  altNight?: string;
  bookingHref?: string;
  itineraryHref?: string;
}

export function HeroSection({
  tourId,
  titlePrefix,
  titleHighlight,
  subtitle,
  imageDay = "/image/hero_rocinha_hd.jpg",
  imageNight = "/image/hero_rocinha_night_hd.jpg",
  altDay = "Vista panorâmica da comunidade de dia",
  altNight = "Vista panorâmica da comunidade à noite",
  bookingHref,
  itineraryHref = "#roteiro-paradas",
}: HeroSectionProps = {}) {
  const { language, t } = useLanguage();
  const whatsappUrl = getWhatsAppLink(language);

  const defaultBookingUrl = tourId ? `/agendar?tour=${tourId}` : "/agendar";
  const finalBookingHref = bookingHref || defaultBookingUrl;

  const localizedTour = tourId ? getTourData(tourId, language) : null;
  const displayTitlePrefix = titlePrefix || localizedTour?.heroTitlePrefix || t("hero.titlePrefix");
  const displayTitleHighlight = titleHighlight || localizedTour?.heroTitleHighlight || t("hero.titleHighlight");
  const displaySubtitle = subtitle || localizedTour?.heroSubtitle || t("hero.subtitle");
  const heroFullTitle = `${displayTitlePrefix}${displayTitleHighlight}`.trim();

  return (
    <section id="hero" className="relative min-h-[75vh] sm:min-h-[85vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20 scroll-mt-20 overflow-hidden">
      {/* Background Hero Image - Dynamic Day/Night Mode */}
      <div className="absolute inset-0 z-0">
        {/* Day Photograph (Light Mode) */}
        <Image
          src={imageDay}
          alt={altDay}
          fill
          priority
          quality={100}
          unoptimized
          sizes="100vw"
          className="dark:hidden block object-cover object-center transition-opacity duration-700"
        />
        {/* Night Photograph (Dark Mode) */}
        <Image
          src={imageNight}
          alt={altNight}
          fill
          priority
          quality={100}
          unoptimized
          sizes="100vw"
          className="hidden dark:block object-cover object-center transition-opacity duration-700"
        />
        {/* Dark Tint Overlay for High Legibility (No white bleed in Light mode) */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/20 to-slate-950/40 dark:from-slate-950/70 dark:via-slate-950/40 dark:to-[var(--bg-primary)]"></div>
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto space-y-6 sm:space-y-8">

        {/* Title with DiaTextReveal Animation in Brazilian Flag Colors (Executes once and settles with yellow highlight) */}
        <FadeInScroll direction="up" delay={0.2}>
          <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.15] sm:leading-[1.1] drop-shadow-md">
            <DiaTextReveal
              key={heroFullTitle}
              text={heroFullTitle}
              colors={BRAZIL_COLORS}
              textColor="#ffffff"
              duration={2.4}
              delay={0.2}
              repeat={false}
            >
              {displayTitlePrefix}
              <span className="text-[var(--brand-yellow)] font-black drop-shadow-sm block sm:inline sm:ml-2 mt-1 sm:mt-0">
                {displayTitleHighlight}
              </span>
            </DiaTextReveal>
          </h1>
        </FadeInScroll>

        {/* Subtitle */}
        <FadeInScroll direction="up" delay={0.3}>
          <p className="text-base sm:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-sm px-2">
            {displaySubtitle}
          </p>
        </FadeInScroll>

        {/* CTAs */}
        <FadeInScroll direction="up" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-2 w-full max-w-md sm:max-w-none mx-auto">
            <Link
              href={finalBookingHref}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center space-x-2"
              aria-label="Agendar passeio"
            >
              <CalendarIcon className="w-5 h-5" aria-hidden="true" />
              <span>{t("hero.ctaBooking")}</span>
            </Link>

            <a
              href={itineraryHref}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 text-white font-extrabold text-sm sm:text-base hover:bg-white/30 active:scale-95 transition-all shadow-lg flex items-center justify-center space-x-2 group"
              aria-label="Conhecer o roteiro completo"
            >
              <span>{t("hero.ctaItinerary")}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </div>
        </FadeInScroll>

      </div>
    </section>
  );
}
