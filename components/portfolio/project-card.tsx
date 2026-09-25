"use client";

import React from "react";
import { ExternalLink, Globe } from "lucide-react";
import { GithubIcon } from "./icons";
import { LaptopMockup } from "./laptop-mockup";
import { Project } from "@/data/projects";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "@/components/motion/morphing-dialog";

export interface ProjectCardProps {
  project: Project;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function ProjectCard({
  project,
  onMouseEnter,
  onMouseLeave,
}: ProjectCardProps) {
  return (
    <MorphingDialog
      transition={{
        type: "spring",
        bounce: 0.05,
        duration: 0.28,
      }}
    >
      {/* Collapsed Card Trigger */}
      <MorphingDialogTrigger
        style={{ borderRadius: "20px" }}
        className="group relative w-full text-left overflow-hidden border border-[#E5E5E7] dark:border-[#27272A] bg-[#FFFFFF] dark:bg-[#141416] hover:border-neutral-400 dark:hover:border-neutral-600 shadow-sm transition-colors duration-200"
      >
        <div
          data-project-card="true"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="w-full p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Left Column: Clean Title, Subtitle, and Link Pill */}
          <div className="flex flex-col items-start justify-center flex-1 min-w-0 w-full sm:w-auto">
            <MorphingDialogTitle className="text-2xl sm:text-3xl font-bold tracking-tight text-[#18181B] dark:text-[#FFFFFF]">
              {project.title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 mt-1 font-normal">
              {project.subtitle}
            </MorphingDialogSubtitle>

            {project.linkDomain && (
              <div className="mt-4 sm:mt-5 inline-flex items-center px-3.5 py-1.5 rounded-lg bg-[#F0F0F2] dark:bg-[#1E1E22] text-xs font-mono text-neutral-700 dark:text-neutral-300 border border-neutral-300/70 dark:border-neutral-700/60 shadow-xs">
                <span>{project.linkDomain}</span>
              </div>
            )}
          </div>

          {/* Right Column: Prominent Laptop Mockup with guaranteed width */}
          <div className="w-full sm:w-[270px] md:w-[300px] shrink-0 flex justify-center sm:justify-end items-center">
            <LaptopMockup id={project.id} title={project.title} image={project.image} />
          </div>
        </div>
      </MorphingDialogTrigger>

      {/* Enlarged Dialog Modal */}
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{ borderRadius: "24px" }}
          className="pointer-events-auto relative flex max-h-[85vh] w-full max-w-xl flex-col overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-[#FFFFFF] dark:bg-[#18181B] shadow-2xl text-left"
        >
          {/* Top Visual Preview */}
          <div className="p-6 pb-2 bg-[#F9F9FA] dark:bg-[#121214] border-b border-neutral-200/80 dark:border-neutral-800">
            <LaptopMockup id={project.id} title={project.title} image={project.image} isEnlarged />
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
              {project.features && project.features.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-neutral-200 dark:border-neutral-800">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
                    Engineering Architecture &amp; Implementation
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#707070] dark:text-[#B0B0B0]">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-neutral-900 dark:text-neutral-100 mt-0.5">•</span>
                        <span>
                          <strong>{feature.title}:</strong> {feature.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technology Stack Tags */}
              <div className="space-y-2 pt-2 border-t border-neutral-200 dark:border-neutral-800">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
                  Technologies &amp; Libraries
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[#F0F0F0] dark:bg-[#1E1E20] text-[#333333] dark:text-[#E0E1DD] border border-[#B0B0B0]/40 dark:border-[#333333]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-[#18181B] dark:bg-[#F0F0F0] text-white dark:text-[#18181B] hover:opacity-90 transition-opacity"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Live Preview</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </MorphingDialogDescription>
          </div>

          <MorphingDialogClose className="top-5 right-5 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
