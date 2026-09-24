"use client";

import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Sparkles, Activity, Sun, ShieldCheck, Database } from "lucide-react";
import { GithubIcon } from "./icons";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  role?: string;
  githubUrl?: string;
  liveUrl?: string;
  isFlagship?: boolean;
  metrics?: string;
  imagePlaceholderText?: string;
}

function ProjectGraphic({ id }: { id: string }) {
  if (id === "solarx") {
    return (
      <div className="w-full h-full flex flex-col justify-between p-3.5 bg-gradient-to-b from-[#1b263b]/90 to-[#0d1b2a] rounded-lg border border-[#415a77]/50 font-mono">
        <div className="flex items-center justify-between text-[11px] text-[#778da9]">
          <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
            ESP32 TELEMETRY ONLINE
          </span>
          <span className="flex items-center gap-1 text-[#e0e1dd]">
            <Sun className="w-3.5 h-3.5 text-amber-400" /> Single-Axis
          </span>
        </div>

        {/* PV Harvest Curve simulation */}
        <div className="my-2 h-10 w-full flex items-end gap-1 px-1 border-b border-[#415a77]/40">
          {[20, 35, 55, 78, 92, 98, 94, 86, 68, 48, 25].map((val, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-[#415a77] to-[#778da9] rounded-t-sm transition-all duration-300 group-hover:to-amber-300"
              style={{ height: `${val}%` }}
            />
          ))}
        </div>

        <div className="flex items-center justify-between text-[10px] text-[#778da9]">
          <span>I2C ADDR: 0x48</span>
          <span className="text-emerald-400 font-semibold">HARVEST: 98.4%</span>
          <span>PREDICTIVE ML</span>
        </div>
      </div>
    );
  }

  if (id === "umonics") {
    return (
      <div className="w-full h-full flex flex-col justify-between p-3.5 bg-[#0d1b2a] rounded-lg border border-[#415a77]/50 font-mono">
        <div className="flex items-center justify-between text-[11px] text-[#778da9]">
          <span className="flex items-center gap-1 text-[#e0e1dd]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> WEB AUDIT ENGINE
          </span>
          <span className="text-emerald-400">PASSED</span>
        </div>

        <div className="grid grid-cols-3 gap-2 my-2 text-center">
          <div className="p-1.5 rounded bg-[#1b263b] border border-[#415a77]/40">
            <div className="text-sm font-bold text-emerald-400">99</div>
            <div className="text-[9px] text-[#778da9]">PERFORMANCE</div>
          </div>
          <div className="p-1.5 rounded bg-[#1b263b] border border-[#415a77]/40">
            <div className="text-sm font-bold text-emerald-400">&lt;0.7s</div>
            <div className="text-[9px] text-[#778da9]">LCP LATENCY</div>
          </div>
          <div className="p-1.5 rounded bg-[#1b263b] border border-[#415a77]/40">
            <div className="text-sm font-bold text-emerald-400">100%</div>
            <div className="text-[9px] text-[#778da9]">MOBILE READY</div>
          </div>
        </div>

        <div className="text-[10px] text-[#778da9] flex justify-between">
          <span>RESPONSIVE UI OPTIMIZED</span>
          <span>CROSS-DEVICE</span>
        </div>
      </div>
    );
  }

  if (id === "stellarsat") {
    return (
      <div className="w-full h-full flex flex-col justify-between p-3.5 bg-[#0d1b2a] rounded-lg border border-[#415a77]/50 font-mono">
        <div className="flex items-center justify-between text-[11px] text-[#778da9]">
          <span className="flex items-center gap-1 text-[#e0e1dd]">
            <Activity className="w-3.5 h-3.5 text-cyan-400" /> GEOSPATIAL STREAM
          </span>
          <span className="text-cyan-400 font-bold">300 HR INTERNSHIP</span>
        </div>

        <div className="my-2 space-y-1.5">
          <div className="flex justify-between text-[10px] text-[#778da9]">
            <span>SLA COMPLIANCE</span>
            <span className="text-[#e0e1dd] font-semibold">99.8%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-[#1b263b] overflow-hidden border border-[#415a77]/40">
            <div className="h-full bg-gradient-to-r from-[#415a77] via-[#778da9] to-cyan-400 w-[99.8%]" />
          </div>
          <div className="flex justify-between text-[9px] text-[#778da9]">
            <span>MIR STREAMING</span>
            <span>MAPPING OPS</span>
          </div>
        </div>

        <div className="text-[10px] text-[#778da9] flex justify-between">
          <span>DATA INTEGRITY: VERIFIED</span>
          <span className="text-cyan-400">ONLINE</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col justify-between p-3.5 bg-[#0d1b2a] rounded-lg border border-[#415a77]/50 font-mono">
      <div className="flex items-center justify-between text-[11px] text-[#778da9]">
        <span className="flex items-center gap-1 text-[#e0e1dd]">
          <Database className="w-3.5 h-3.5 text-indigo-400" /> CLOUD &amp; AUTOMATION
        </span>
        <span className="text-indigo-400">ACTIVE</span>
      </div>

      <div className="my-2 p-2 rounded bg-[#1b263b] border border-[#415a77]/40 flex items-center justify-between text-[11px]">
        <span className="text-[#e0e1dd]">React Native</span>
        <span className="text-[#778da9]">──►</span>
        <span className="text-[#e0e1dd]">Supabase</span>
        <span className="text-[#778da9]">──►</span>
        <span className="text-[#e0e1dd]">n8n Hook</span>
      </div>

      <div className="text-[10px] text-[#778da9] flex justify-between">
        <span>MS SQL SYNC PIPELINE</span>
        <span className="text-emerald-400">REST APIS</span>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`group relative flex flex-col rounded-xl overflow-hidden border transition-all duration-300 ${
        project.isFlagship
          ? "border-[#778da9] bg-[#1b263b] shadow-[0_0_30px_rgba(119,141,169,0.15)]"
          : "border-[#415a77]/50 bg-[#1b263b]/70 hover:border-[#778da9]/80 shadow-lg"
      }`}
    >
      {/* Flagship Animated Accent Beam */}
      {project.isFlagship && (
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#778da9] to-transparent animate-pulse" />
      )}

      {/* Visual Header / Graphic Preview */}
      <div className="relative w-full h-44 bg-[#0d1b2a] border-b border-[#415a77]/40 p-3 overflow-hidden group-hover:bg-[#0d1b2a]/80 transition-colors">
        {project.isFlagship && (
          <div className="absolute top-2 right-2 z-20 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#778da9]/20 text-[#e0e1dd] border border-[#778da9]/40 backdrop-blur-md">
            <Sparkles className="w-3 h-3 text-[#778da9]" />
            Flagship
          </div>
        )}

        <ProjectGraphic id={project.id} />
      </div>

      {/* Content Details */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-bold text-base text-[#e0e1dd] tracking-tight group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-1.5 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-[#778da9] hover:text-[#e0e1dd] hover:bg-[#415a77]/30 transition-colors"
                aria-label="GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-[#778da9] hover:text-[#e0e1dd] hover:bg-[#415a77]/30 transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {project.role && (
          <p className="text-xs font-mono text-[#778da9] mb-3">
            {project.role}
          </p>
        )}

        <p className="text-xs sm:text-sm text-[#e0e1dd]/80 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#415a77]/30">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0d1b2a]/80 text-[#778da9] border border-[#415a77]/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
