"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { HeroSection } from "@/components/sections/HeroSection";
import { TourRouteView } from "@/components/tours/TourRouteView";
import { toursData } from "@/data/toursData";
import { FooterSection } from "@/components/sections/FooterSection";

export default function VidigalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 overflow-x-hidden relative">
      <Navbar />

      <main className="flex-1 w-full relative z-20">
        <HeroSection
          titlePrefix="Descubra o Vidigal com "
          titleHighlight="Quem Vive Aqui"
          subtitle="Do mar ao topo do morro: prainha, mirantes icônicos e a melhor vista do litoral carioca."
          bookingHref="#agendamento"
          itineraryHref="#roteiro-paradas"
        />
        <TourRouteView tour={toursData.vidigal} />
      </main>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
}
