"use client";

import React from "react";
import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  subtext?: string;
  index: number;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  subtext,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group flex flex-col rounded-xl overflow-hidden border border-[#415a77]/50 bg-[#0d1b2a]/60 hover:border-[#778da9]/80 transition-all duration-300"
    >
      {/* Top Graphic Placeholder matching wireframe grey box */}
      <div className="relative w-full h-36 bg-[#0d1b2a] border-b border-[#415a77]/40 flex items-center justify-center p-4 overflow-hidden">
        {/* Ambient subtle grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(#778da9 1px, transparent 1px)`,
            backgroundSize: "14px 14px",
          }}
        />

        <div className="relative z-10 w-12 h-12 rounded-xl bg-[#1b263b] border border-[#415a77] flex items-center justify-center text-[#778da9] group-hover:text-[#e0e1dd] group-hover:border-[#778da9] group-hover:scale-110 transition-all duration-300 shadow-md">
          <Icon className="w-6 h-6" />
        </div>

        {subtext && (
          <span className="absolute bottom-2 text-[10px] font-mono tracking-widest text-[#778da9]/70 uppercase">
            {subtext}
          </span>
        )}
      </div>

      {/* Content description */}
      <div className="p-5 flex flex-col flex-1 text-center">
        <h3 className="font-bold text-sm tracking-wider text-[#e0e1dd] uppercase mb-2 group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="text-xs text-[#e0e1dd]/80 leading-relaxed flex-1">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
