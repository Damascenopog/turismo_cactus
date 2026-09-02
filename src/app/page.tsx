"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PortalHero } from "@/components/portal/PortalHero";
import { PortalServices } from "@/components/portal/PortalServices";
import { PortalWhyUs } from "@/components/portal/PortalWhyUs";
import { PortalFooter } from "@/components/portal/PortalFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 overflow-x-hidden relative">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Portal Sections */}
      <main className="flex-1 w-full relative z-20">
        <PortalHero />
        <PortalServices />
        <PortalWhyUs />
      </main>

      {/* Portal Footer & Global FAQ */}
      <PortalFooter />

      {/* Floating WhatsApp Quick Contact Button */}
      <WhatsAppButton />
    </div>
  );
}
