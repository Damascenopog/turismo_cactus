"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { MioloSection } from "@/components/sections/MioloSection";
import { ArteSection } from "@/components/sections/ArteSection";
import { BaseSection } from "@/components/sections/BaseSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { FootprintTrail } from "@/components/animations/FootprintTrail";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 overflow-x-hidden relative">
      {/* Navigation Header */}
      <Navbar />

      {/* Dynamic Animated Footprint SVG Trail (Curved on Desktop, Vertical on Mobile) */}
      <FootprintTrail />

      {/* Main Narrative Sections in Zig-Zag Pattern */}
      <main className="flex-1 w-full relative z-20">
        <HeroSection />
        <StatsSection />
        <MioloSection />
        <ArteSection />
        <BaseSection />
      </main>

      {/* Footer & FAQ */}
      <FooterSection />

      {/* Floating WhatsApp CTA */}
      <WhatsAppButton />
    </div>
  );
}
