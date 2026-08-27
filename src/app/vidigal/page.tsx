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
          tourId="vidigal"
          bookingHref="#agendamento"
          itineraryHref="#roteiro-paradas"
        />
        <TourRouteView tourId="vidigal" />
      </main>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
}
