"use client";

import React, { useRef, useState } from "react";
import { ChevronRight, PlusIcon } from "lucide-react";
import { Cursor } from "@/components/motion/cursor";
import { ProjectCard } from "@/components/portfolio/project-card";
import { personalProjects } from "@/data/projects";

export function ProjectsSection() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isHoveringProject, setIsHoveringProject] = useState(false);
  const leaveTimerRef = useRef<NodeJS.Timeout | null>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);

  const displayedProjects = showAllProjects
    ? personalProjects
    : [personalProjects[0]];

  const handleProjectEnter = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setIsHoveringProject(true);
  };

  const handleProjectLeave = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
    }
    // Small buffer prevents cursor badge from flickering when transitioning across card margins
    leaveTimerRef.current = setTimeout(() => {
      setIsHoveringProject(false);
    }, 60);
  };

  return (
    <section id="projects" className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#18181B] dark:text-[#FFFFFF]">
          Recent Projects
        </h2>

        {/* View All / Show Less Toggle Button */}
        <button
          type="button"
          onClick={() => setShowAllProjects(!showAllProjects)}
          className="inline-flex items-center gap-0.5 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          aria-expanded={showAllProjects}
          aria-label={showAllProjects ? "Show less projects" : "View all projects"}
        >
          <span>{showAllProjects ? "Show Less" : "View All"}</span>
          <ChevronRight
            className={`w-4 h-4 transition-transform duration-200 ${
              showAllProjects ? "rotate-90" : ""
            }`}
          />
        </button>
      </div>

      {/* Project cards wrapper with Motion Cursor */}
      <div ref={projectsContainerRef} className="relative">
        <Cursor
          attachToParent
          variants={{
            initial: { scale: 0.4, opacity: 0 },
            animate: {
              scale: isHoveringProject ? 1 : 0,
              opacity: isHoveringProject ? 1 : 0,
            },
            exit: { scale: 0.4, opacity: 0 },
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 26,
            mass: 0.1,
          }}
        >
          <div className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-neutral-900/85 dark:bg-neutral-100/90 text-white dark:text-neutral-900 text-xs font-semibold shadow-lg backdrop-blur-md border border-white/20 dark:border-black/10 select-none whitespace-nowrap pointer-events-none">
            <span>More</span>
            <PlusIcon className="w-3.5 h-3.5" />
          </div>
        </Cursor>

        <div className="space-y-4">
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onMouseEnter={handleProjectEnter}
              onMouseLeave={handleProjectLeave}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
