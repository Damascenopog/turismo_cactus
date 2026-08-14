"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ShoeFootprint } from "@/components/ui/ShoeFootprint";

export function FootprintTrail() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [pathLength, setPathLength] = useState(1000);
  const strokeDashoffset = useTransform(smoothProgress, [0.05, 0.9], [pathLength, 0]);
  const footprintProgress = useTransform(smoothProgress, [0.05, 0.9], [0, 1]);

  useEffect(() => {
    // Measure actual SVG path length on client mount
    const desktopPath = document.getElementById("trail-path-desktop") as SVGPathElement | null;
    if (desktopPath) {
      setPathLength(desktopPath.getTotalLength());
    }
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      
      {/* Desktop Curved S-Path (Hidden on Mobile) */}
      <svg
        className="hidden md:block w-full h-full absolute inset-0"
        viewBox="0 0 1200 2400"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Background Guide Line (Dashed) */}
        <path
          d="M 600 120 C 1100 600, 100 1100, 600 1600 C 1100 2100, 100 2300, 600 2500"
          stroke="var(--border-color)"
          strokeWidth="3"
          strokeDasharray="8 8"
          opacity="0.4"
        />

        {/* Dynamic Animated Path (Fills on Scroll) */}
        <motion.path
          id="trail-path-desktop"
          d="M 600 120 C 1100 600, 100 1100, 600 1600 C 1100 2100, 100 2300, 600 2500"
          stroke="var(--brand-yellow)"
          strokeWidth="4"
          strokeDasharray={pathLength}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
        />
      </svg>

      {/* Mobile Straight Vertical Line (Visible on Mobile Only) */}
      <svg
        className="block md:hidden w-full h-full absolute inset-0"
        viewBox="0 0 400 2400"
        fill="none"
        preserveAspectRatio="none"
      >
        <line
          x1="28"
          y1="100"
          x2="28"
          y2="2400"
          stroke="var(--border-color)"
          strokeWidth="2"
          strokeDasharray="6 6"
          opacity="0.5"
        />

        <motion.line
          x1="28"
          y1="100"
          x2="28"
          y2="2400"
          stroke="var(--brand-yellow)"
          strokeWidth="3"
          strokeDasharray={2300}
          style={{
            strokeDashoffset: useTransform(smoothProgress, [0.05, 0.9], [2300, 0]),
          }}
          strokeLinecap="round"
        />
      </svg>

      {/* Floating Animated Shoe Footprints at Key Waypoints */}
      <div className="relative w-full h-full max-w-6xl mx-auto">
        {/* Footprint Waypoint 1 (Top Hero / Miolo) */}
        <motion.div
          style={{ opacity: useTransform(smoothProgress, [0.1, 0.25], [0.3, 1]) }}
          className="absolute top-[20%] left-5 md:left-[80%] -translate-x-1/2 text-[var(--brand-yellow)]"
        >
          <ShoeFootprint size={24} className="sm:hidden" flip={false} />
          <ShoeFootprint size={32} className="hidden sm:block" flip={false} />
        </motion.div>

        {/* Footprint Waypoint 2 (Miolo / Arte) */}
        <motion.div
          style={{ opacity: useTransform(smoothProgress, [0.35, 0.55], [0.3, 1]) }}
          className="absolute top-[48%] left-5 md:left-[18%] -translate-x-1/2 text-[var(--brand-blue)]"
        >
          <ShoeFootprint size={24} className="sm:hidden" flip={true} />
          <ShoeFootprint size={32} className="hidden sm:block" flip={true} />
        </motion.div>

        {/* Footprint Waypoint 3 (Arte / Base) */}
        <motion.div
          style={{ opacity: useTransform(smoothProgress, [0.65, 0.85], [0.3, 1]) }}
          className="absolute top-[78%] left-5 md:left-[78%] -translate-x-1/2 text-emerald-500"
        >
          <ShoeFootprint size={24} className="sm:hidden" flip={false} />
          <ShoeFootprint size={32} className="hidden sm:block" flip={false} />
        </motion.div>
      </div>

    </div>
  );
}
