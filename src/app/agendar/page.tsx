"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MultiTourBookingPage } from "@/components/booking/MultiTourBookingPage";
import { FooterSection } from "@/components/sections/FooterSection";

export default function AgendarRoutePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 overflow-x-hidden relative">
      <Navbar />

      <main className="flex-1 w-full relative z-20">
        <MultiTourBookingPage />
      </main>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
}
