"use client";

import React from "react";
import Image from "next/image";
import { Sun, Database } from "lucide-react";

/* =========================================================================
   1. LAPTOP MOCKUP SCREENS (Vector UI for projects without static screenshots)
   ========================================================================= */

export function SolarXScreen() {
  return (
    <div className="w-full h-full bg-[#121214] flex flex-col justify-between text-[#F0F0F0] select-none p-2 sm:p-3 font-mono overflow-hidden">
      {/* Telemetry Bar */}
      <div className="flex items-center justify-between border-b border-neutral-800 pb-1.5 text-[9px]">
        <div className="flex items-center gap-1.5 font-bold text-emerald-400">
          <span className="size-1.5 rounded-full bg-emerald-400" />
          <span>SOLARX · ESP32</span>
        </div>
        <div className="flex items-center gap-1 text-neutral-400 text-[8px]">
          <Sun className="w-2.5 h-2.5 text-amber-400" />
          <span>AZIMUTH: 142°</span>
        </div>
      </div>

      {/* Main Curve Display */}
      <div className="my-1.5">
        <div className="flex items-center justify-between text-[8px] text-neutral-400 mb-1">
          <span>PV VOLTAGE HARVEST</span>
          <span className="text-emerald-400 font-bold">14.8V · 98.4%</span>
        </div>
        <div className="h-10 w-full flex items-end gap-1 px-1 border-b border-neutral-800">
          {[20, 35, 55, 78, 92, 100, 96, 85, 68, 45, 22].map((v, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-neutral-700 to-emerald-400 rounded-t-xs"
              style={{ height: `${v}%` }}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between text-[7px] text-neutral-400">
        <span>BUS: I2C (INA219)</span>
        <span className="text-amber-400">SERVO TRACKING: ACTIVE</span>
      </div>
    </div>
  );
}

export function CloudSuiteScreen() {
  return (
    <div className="w-full h-full bg-[#121214] flex flex-col justify-between text-[#F0F0F0] select-none p-2 sm:p-3 font-mono overflow-hidden">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-1.5 text-[9px]">
        <div className="flex items-center gap-1.5 font-bold text-indigo-400">
          <Database className="w-2.5 h-2.5 text-indigo-400" />
          <span>CLOUD PIPELINE</span>
        </div>
        <span className="text-emerald-400 text-[8px]">SYNC 200 OK</span>
      </div>

      <div className="my-2 p-1.5 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-between text-[8px]">
        <span className="text-white">React Native</span>
        <span className="text-neutral-500">→</span>
        <span className="text-white">Supabase</span>
        <span className="text-neutral-500">→</span>
        <span className="text-white">n8n Hook</span>
      </div>

      <div className="flex items-center justify-between text-[7px] text-neutral-400">
        <span>MS SQL SYNC</span>
        <span className="text-emerald-400">LATENCY 42ms</span>
      </div>
    </div>
  );
}

/* =========================================================================
   2. LAPTOP FRAME MOCKUP (Optimized with Next.js Image & Exact Screen Fit)
   ========================================================================= */

export function LaptopMockup({
  id,
  title,
  image,
  isEnlarged = false,
}: {
  id: string;
  title: string;
  image?: string;
  isEnlarged?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col items-center select-none w-full ${
        isEnlarged
          ? "max-w-[480px] sm:max-w-[520px] mx-auto"
          : "max-w-[280px] sm:max-w-[300px]"
      }`}
    >
      {/* Laptop Screen Bezel */}
      <div className="relative w-full rounded-t-xl bg-[#1e1e22] dark:bg-[#18181b] p-1.5 sm:p-2 pb-0 border border-neutral-700/80 shadow-2xl overflow-hidden">
        {/* Webcam */}
        <div className="absolute top-0.5 sm:top-1 left-1/2 -translate-x-1/2 size-1 rounded-full bg-neutral-600 z-10" />

        {/* Display Content: 16:9.5 aspect ratio fitting full web viewport */}
        <div className="relative w-full aspect-[16/9.5] overflow-hidden rounded-t-xs shadow-inner bg-[#0d0d11]">
          {image ? (
            <Image
              src={image}
              alt={`${title} project preview`}
              fill
              sizes={isEnlarged ? "(max-width: 768px) 100vw, 520px" : "300px"}
              className="object-contain object-top"
              priority={isEnlarged}
            />
          ) : (
            <>
              {id === "solarx" && <SolarXScreen />}
              {id === "fullstack-mobile" && <CloudSuiteScreen />}
            </>
          )}
        </div>
      </div>

      {/* Laptop Lower Base & Notch */}
      <div className="relative w-[108%] h-2.5 sm:h-3 bg-gradient-to-b from-neutral-500 via-neutral-600 to-neutral-800 rounded-b-lg border-t border-neutral-400/40 shadow-md flex justify-center">
        <div className="w-12 sm:w-16 h-1 bg-neutral-900/90 rounded-b-xs" />
      </div>
    </div>
  );
}
