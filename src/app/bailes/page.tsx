"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { HeroSection } from "@/components/sections/HeroSection";
import { TourRouteView } from "@/components/tours/TourRouteView";
import { toursData } from "@/data/toursData";
import { FooterSection } from "@/components/sections/FooterSection";

export default function BailesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 overflow-x-hidden relative">
      <Navbar />

      <main className="flex-1 w-full relative z-20">
        <HeroSection
          titlePrefix="Viva a Noite Carioca no "
          titleHighlight="Baile Funk"
          subtitle="Acompanhamento exclusivo com moradores para curtir a noite carioca e os tradicionais bailes com segurança, respeito e acolhimento."
          imageDay="/image/hero_rocinha_night_hd.jpg"
          imageNight="/image/hero_rocinha_night_hd.jpg"
          bookingHref="#agendamento"
          itineraryHref="#roteiro-paradas"
        />
        <TourRouteView tour={toursData.bailes} />
      </main>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
}
