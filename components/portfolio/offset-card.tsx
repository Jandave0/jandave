"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

interface OffsetCardProps {
  imageSrc: string;
  alt: string;
  priority?: boolean;
  className?: string;
  badgeText?: string;
}

export function OffsetCard({
  imageSrc,
  alt,
  priority = false,
  className = "",
  badgeText,
}: OffsetCardProps) {
  return (
    <div className={`relative group w-full max-w-[320px] mx-auto ${className}`}>
      {/* Background Layer 2 (Offset paper border shadow) */}
      <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-xl border-2 border-[#415a77]/50 bg-[#0d1b2a]/40 transition-transform duration-300 group-hover:translate-x-5 group-hover:translate-y-5" />

      {/* Background Layer 1 (Subtle intermediate frame) */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-xl border border-[#778da9]/30 bg-[#1b263b]/70" />

      {/* Foreground Image Container */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative z-10 overflow-hidden rounded-xl border-2 border-[#415a77] bg-[#1b263b] shadow-2xl aspect-[3/4]"
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
        />

        {/* Subtle gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/80 via-transparent to-transparent opacity-60 pointer-events-none" />

        {badgeText && (
          <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 rounded-lg bg-[#0d1b2a]/90 backdrop-blur-md border border-[#415a77]/60 text-center">
            <span className="text-xs font-semibold tracking-wider text-[#e0e1dd] uppercase">
              {badgeText}
            </span>
          </div>
        )}
      </motion.div>
    </div>
  );
}
