"use client";

import React from "react";
import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

export interface TimelineEntry {
  title: string;
  subtitle: string;
  period: string;
  badge?: string;
  bullets?: string[];
  description?: string;
  icon?: LucideIcon;
  iconText?: string;
  href?: string;
}

export function TimelineItem({ entry, index }: { entry: TimelineEntry; index: number }) {
  const Icon = entry.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="group relative flex gap-4 sm:gap-6 pb-8 last:pb-2"
    >
      {/* Vertical Timeline Guide Line */}
      <div className="absolute left-5 sm:left-6 top-11 bottom-0 w-[1px] bg-[#B0B0B0]/30 dark:bg-[#333333] group-last:hidden" />

      {/* Circle Icon Badge */}
      <div className="relative z-10 flex items-center justify-center size-10 sm:size-12 rounded-full bg-[#F0F0F0] dark:bg-[#202022] border border-[#B0B0B0]/40 dark:border-[#333333] text-[#333333] dark:text-[#F0F0F0] shadow-sm shrink-0 group-hover:scale-105 group-hover:border-[#707070] transition-all">
        {Icon ? (
          <Icon className="w-5 h-5 text-[#333333] dark:text-[#E0E1DD]" />
        ) : (
          <span className="font-mono text-xs font-bold uppercase">
            {entry.iconText || entry.title.slice(0, 2)}
          </span>
        )}
      </div>

      {/* Content Details */}
      <div className="flex-1 pt-1">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="font-bold text-base text-[#333333] dark:text-[#FFFFFF] tracking-tight group-hover:text-blue-500 dark:group-hover:text-neutral-200 transition-colors">
              {entry.title}
            </h4>
            {entry.badge && (
              <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-transparent border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400">
                {entry.badge}
              </span>
            )}
          </div>
          <span className="text-xs font-mono text-[#707070] dark:text-[#B0B0B0] shrink-0">
            {entry.period}
          </span>
        </div>

        <p className="text-xs sm:text-sm font-medium text-[#707070] dark:text-[#B0B0B0] mb-2">
          {entry.subtitle}
        </p>

        {entry.description && (
          <p className="text-xs sm:text-sm text-[#707070] dark:text-[#B0B0B0]/90 leading-relaxed mb-2">
            {entry.description}
          </p>
        )}

        {entry.bullets && entry.bullets.length > 0 && (
          <ul className="space-y-1.5 mt-2">
            {entry.bullets.map((bullet, i) => (
              <li
                key={i}
                className="text-xs sm:text-sm text-[#707070] dark:text-[#B0B0B0]/90 flex items-start gap-2 leading-relaxed"
              >
                <span className="text-[#333333] dark:text-[#F0F0F0] mt-1 shrink-0">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
