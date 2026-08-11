"use client";

import React from "react";

interface ShoeFootprintProps {
  className?: string;
  size?: number;
  flip?: boolean;
  color?: string;
}

export function ShoeFootprint({
  className = "",
  size = 28,
  flip = false,
  color = "currentColor",
}: ShoeFootprintProps) {
  return (
    <svg
      width={size}
      height={size * 1.6}
      viewBox="0 0 24 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-300 ${flip ? "scale-x-[-1]" : ""} ${className}`}
      style={{ color }}
    >
      {/* Minimalist Sole Outer Outline */}
      <path
        d="M12 2C7.5 2 4 5.5 4 10C4 13.5 5.5 16 7 19C8.5 22 9 24.5 9 27C9 30.5 10 35 12 36C14 35 15 30.5 15 27C15 24.5 15.5 22 17 19C18.5 16 20 13.5 20 10C20 5.5 16.5 2 12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.15"
      />

      {/* Heel Divider */}
      <path
        d="M8.5 25H15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Minimalist Tread Marks */}
      <path
        d="M8 8H16M7.5 12H16.5M8 16H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Heel Cushion */}
      <circle cx="12" cy="30" r="1.5" fill="currentColor" />
    </svg>
  );
}
