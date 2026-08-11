"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { HeroSection } from "@/components/sections/HeroSection";
import { MioloSection } from "@/components/sections/MioloSection";
import { ArteSection } from "@/components/sections/ArteSection";
import { BaseSection } from "@/components/sections/BaseSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 overflow-x-hidden">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Narrative Sections */}
      <main className="flex-1 w-full">
        <HeroSection />
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
