"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TourRouteView } from "@/components/tours/TourRouteView";
import { FooterSection } from "@/components/sections/FooterSection";

export default function RocinhaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 overflow-x-hidden relative">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Narrative Sections */}
      <main className="flex-1 w-full relative z-20">
        <HeroSection
          tourId="rocinha"
          bookingHref="/agendar?tour=rocinha"
          itineraryHref="#roteiro-paradas"
        />
        <StatsSection />
        <TourRouteView tourId="rocinha" />
      </main>

      {/* Footer & FAQ */}
      <FooterSection />

      {/* Floating WhatsApp CTA */}
      <WhatsAppButton />
    </div>
  );
}
