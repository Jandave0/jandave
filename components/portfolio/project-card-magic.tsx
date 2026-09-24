"use client";

import React from "react";
import { ExternalLink, Globe, Sun, Database } from "lucide-react";
import { GithubIcon } from "./icons";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "@/components/core/morphing-dialog";

export interface MagicProject {
  id: string;
  title: string;
  subtitle?: string;
  linkDomain?: string;
  period: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  isFlagship?: boolean;
  image?: string;
}

/* =========================================================================
   1. LAPTOP MOCKUP SCREENS (Fallback Vector Previews)
   ========================================================================= */

function SolarXScreen() {
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

function CloudSuiteScreen() {
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

export function LaptopMockup({
  id,
  image,
  isEnlarged = false,
}: {
  id: string;
  image?: string;
  isEnlarged?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col items-center select-none ${
        isEnlarged
          ? "w-full max-w-[440px] sm:max-w-[500px] mx-auto"
          : "w-full max-w-[280px] sm:max-w-[320px]"
      }`}
    >
      {/* Laptop Screen Bezel */}
      <div className="relative w-full rounded-t-xl bg-[#202024] p-1.5 pb-0 border border-neutral-700/80 shadow-2xl overflow-hidden">
        {/* Webcam */}
        <div className="absolute top-0.5 left-1/2 -translate-x-1/2 size-1 rounded-full bg-neutral-600 z-10" />

        {/* Display Content */}
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-sm shadow-inner bg-neutral-900">
          {image ? (
            <img
              src={image}
              alt={id}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-left-top"
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
      <div className="relative w-[108%] h-2 sm:h-2.5 bg-gradient-to-b from-neutral-600 to-neutral-800 rounded-b-lg border-t border-neutral-500/50 shadow-md flex justify-center">
        <div className="w-10 sm:w-14 h-1 bg-neutral-900/80 rounded-b-xs" />
      </div>
    </div>
  );
}

/* =========================================================================
   2. MAIN PROJECT CARD (Collapsed State matches user's reference image)
   ========================================================================= */

export function ProjectCardMagic({
  project,
  onMouseEnter,
  onMouseLeave,
}: {
  project: MagicProject;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <MorphingDialog
      transition={{
        type: "spring",
        bounce: 0.05,
        duration: 0.28,
      }}
    >
      {/* Collapsed Card Trigger: Minimized content matching reference image */}
      <MorphingDialogTrigger
        style={{ borderRadius: "20px" }}
        className="group relative w-full text-left overflow-hidden border border-[#E5E5E7] dark:border-[#27272A] bg-[#FFFFFF] dark:bg-[#141416] hover:border-neutral-400 dark:hover:border-neutral-600 shadow-sm transition-all duration-300"
      >
        <div
          data-project-card="true"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="w-full p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          {/* Left Column: Clean Title, Subtitle, and Link Pill */}
          <div className="flex flex-col items-start justify-center flex-1 max-w-sm">
            <MorphingDialogTitle className="text-2xl sm:text-3xl font-bold tracking-tight text-[#18181B] dark:text-[#FFFFFF]">
              {project.title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 mt-1 font-normal">
              {project.subtitle}
            </MorphingDialogSubtitle>

            {project.linkDomain && (
              <div className="mt-5 inline-flex items-center px-3.5 py-1.5 rounded-lg bg-[#F0F0F2] dark:bg-[#1E1E22] text-xs font-mono text-neutral-700 dark:text-neutral-300 border border-neutral-300/70 dark:border-neutral-700/60 shadow-xs">
                <span>{project.linkDomain}</span>
              </div>
            )}
          </div>

          {/* Right Column: Sleek Laptop Mockup */}
          <div className="w-full md:w-auto md:shrink-0 flex justify-center items-center">
            <LaptopMockup id={project.id} image={project.image} />
          </div>
        </div>
      </MorphingDialogTrigger>

      {/* Enlarged Dialog Modal (Reveals full architecture & details on click) */}
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{ borderRadius: "24px" }}
          className="pointer-events-auto relative flex max-h-[85vh] w-full max-w-xl flex-col overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-[#FFFFFF] dark:bg-[#18181B] shadow-2xl text-left"
        >
          {/* Top Visual */}
          <div className="p-6 pb-2 bg-[#F9F9FA] dark:bg-[#121214] border-b border-neutral-200/80 dark:border-neutral-800">
            <LaptopMockup id={project.id} image={project.image} isEnlarged />
          </div>

          {/* Body Content with Scroll */}
          <div className="p-6 overflow-y-auto space-y-4">
            <div className="flex items-baseline justify-between gap-2">
              <MorphingDialogTitle className="text-2xl font-bold tracking-tight text-[#18181B] dark:text-[#FFFFFF]">
                {project.title}
              </MorphingDialogTitle>
              <span className="text-xs font-mono text-[#707070] dark:text-[#B0B0B0] shrink-0">
                {project.period}
              </span>
            </div>

            {project.subtitle && (
              <MorphingDialogSubtitle className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
                {project.subtitle}
              </MorphingDialogSubtitle>
            )}

            <MorphingDialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, y: 15 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 15 },
              }}
              className="space-y-4 pt-1"
            >
              <p className="text-sm text-[#707070] dark:text-[#B0B0B0] leading-relaxed">
                {project.description}
              </p>

              {/* Extended Architecture & Highlights */}
              <div className="space-y-2 pt-2 border-t border-neutral-200 dark:border-neutral-800">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
                  Engineering Architecture &amp; Implementation
                </h4>

                {project.id === "dormeats" && (
                  <ul className="space-y-1.5 text-xs text-[#707070] dark:text-[#B0B0B0]">
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-900 dark:text-neutral-100 mt-0.5">•</span>
                      <span><strong>Interactive Meal Matcher:</strong> Dynamic multi-filter engine allowing dormers to discover recipes based on available appliances (Rice Cooker, Kettle, Microwave) and pocket budgets (₱30–₱100+).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-900 dark:text-neutral-100 mt-0.5">•</span>
                      <span><strong>Appliance-Restricted Recipe Engineering:</strong> Specialized recipe database tailored to strict flame-free dorm safety rules with localized sari-sari store portioning (*tingi*) and zero food waste.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-900 dark:text-neutral-100 mt-0.5">•</span>
                      <span><strong>Organic Artisan Design System:</strong> Built with Next.js App Router (React 19) and Tailwind CSS v4, featuring GSAP and Framer Motion spring-based interactions and responsive bento layouts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-900 dark:text-neutral-100 mt-0.5">•</span>
                      <span><strong>Safety &amp; Legal Portal:</strong> Comprehensive campus food hygiene and dorm electrical load documentation hub for safe student living.</span>
                    </li>
                  </ul>
                )}

                {project.id === "solarx" && (
                  <ul className="space-y-1.5 text-xs text-[#707070] dark:text-[#B0B0B0]">
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-900 dark:text-neutral-100 mt-0.5">•</span>
                      <span><strong>Live Telemetry &amp; Metrics:</strong> Real-time monitoring of voltage, current, and power output across the entire solar array.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-900 dark:text-neutral-100 mt-0.5">•</span>
                      <span><strong>Single-Axis Tracking Control:</strong> AI-driven single-axis solar tracking algorithms optimizing daily energy yield.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-900 dark:text-neutral-100 mt-0.5">•</span>
                      <span><strong>Emergency Hardware Overrides:</strong> Instant panel stowing to safe angles during high winds and extreme weather conditions.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-900 dark:text-neutral-100 mt-0.5">•</span>
                      <span><strong>IoT &amp; Cloud Platform:</strong> ESP32 microcontroller with dual-core FreeRTOS firmware integrated with Next.js web dashboard, Google OAuth sign-in, and Prisma ORM telemetry database.</span>
                    </li>
                  </ul>
                )}

                {project.id === "fullstack-mobile" && (
                  <ul className="space-y-1.5 text-xs text-[#707070] dark:text-[#B0B0B0]">
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-900 dark:text-neutral-100 mt-0.5">•</span>
                      <span><strong>Realtime Channels:</strong> Supabase event stream listeners syncing mobile push notifications and live client state.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-900 dark:text-neutral-100 mt-0.5">•</span>
                      <span><strong>Automated Pipelines:</strong> n8n orchestration engines transforming and writing webhook payloads into MS SQL Server.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-900 dark:text-neutral-100 mt-0.5">•</span>
                      <span><strong>Cross-Platform Client:</strong> React Native universal bundle optimized for smooth touch gesture workflows.</span>
                    </li>
                  </ul>
                )}
              </div>

              {/* Technologies */}
              <div className="pt-2">
                <div className="text-[11px] font-mono text-neutral-500 mb-1.5">Technologies Used:</div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F0F0F0] dark:bg-[#27272A] text-[#333333] dark:text-[#E0E1DD] border border-[#B0B0B0]/30 dark:border-[#3F3F46]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-[#18181B] text-white dark:bg-[#F0F0F0] dark:text-[#18181B] hover:opacity-90 transition-opacity"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </MorphingDialogDescription>
          </div>

          <MorphingDialogClose className="top-4 right-4 bg-neutral-200/80 dark:bg-neutral-800/80 p-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
