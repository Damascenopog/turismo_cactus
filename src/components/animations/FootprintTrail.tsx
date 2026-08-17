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
  const strokeDashoffset = useTransform(smoothProgress, [0.05, 0.95], [pathLength, 0]);

  useEffect(() => {
    // Measure actual SVG path length on client mount
    const desktopPath = document.getElementById("trail-path-desktop") as SVGPathElement | null;
    if (desktopPath) {
      setPathLength(desktopPath.getTotalLength());
    }
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* Desktop Curved S-Path in background margins (Hidden on Mobile) */}
      <svg
        className="hidden md:block w-full h-full absolute inset-0 opacity-40 dark:opacity-30"
        viewBox="0 0 1200 3200"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Background Guide Line (Dashed) */}
        <path
          d="M 600 200 C 1050 700, 150 1400, 600 2000 C 1050 2500, 150 2800, 600 3200"
          stroke="var(--border-color)"
          strokeWidth="3"
          strokeDasharray="10 10"
        />

        {/* Dynamic Animated Path (Fills on Scroll) */}
        <motion.path
          id="trail-path-desktop"
          d="M 600 200 C 1050 700, 150 1400, 600 2000 C 1050 2500, 150 2800, 600 3200"
          stroke="var(--brand-yellow)"
          strokeWidth="4"
          strokeDasharray={pathLength}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
        />
      </svg>

      {/* Mobile Subtle Vertical Trail on far left margin (Visible on Mobile Only) */}
      <svg
        className="block md:hidden w-full h-full absolute inset-0 opacity-25"
        viewBox="0 0 400 3200"
        fill="none"
        preserveAspectRatio="none"
      >
        <line
          x1="12"
          y1="100"
          x2="12"
          y2="3200"
          stroke="var(--border-color)"
          strokeWidth="2"
          strokeDasharray="6 6"
        />

        <motion.line
          x1="12"
          y1="100"
          x2="12"
          y2="3200"
          stroke="var(--brand-yellow)"
          strokeWidth="3"
          strokeDasharray={3100}
          style={{
            strokeDashoffset: useTransform(smoothProgress, [0.05, 0.95], [3100, 0]),
          }}
          strokeLinecap="round"
        />
      </svg>

      {/* Floating Animated Shoe Footprints strictly in Side Gutters */}
      <div className="relative w-full h-full max-w-7xl mx-auto hidden xl:block">
        {/* Footprint Gutter Top */}
        <motion.div
          style={{ opacity: useTransform(smoothProgress, [0.1, 0.25], [0.15, 0.7]) }}
          className="absolute top-[22%] right-4 text-[var(--brand-yellow)]"
        >
          <ShoeFootprint size={28} flip={false} />
        </motion.div>

        {/* Footprint Gutter Middle */}
        <motion.div
          style={{ opacity: useTransform(smoothProgress, [0.4, 0.6], [0.15, 0.7]) }}
          className="absolute top-[52%] left-4 text-[var(--brand-blue)]"
        >
          <ShoeFootprint size={28} flip={true} />
        </motion.div>

        {/* Footprint Gutter Bottom */}
        <motion.div
          style={{ opacity: useTransform(smoothProgress, [0.7, 0.9], [0.15, 0.7]) }}
          className="absolute top-[82%] right-4 text-emerald-500"
        >
          <ShoeFootprint size={28} flip={false} />
        </motion.div>
      </div>

    </div>
  );
}
