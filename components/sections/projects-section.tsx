"use client";

import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronRight, PlusIcon } from "lucide-react";
import { Cursor } from "@/components/motion/cursor";
import { ProjectCard } from "@/components/portfolio/project-card";
import { personalProjects } from "@/data/projects";

export function ProjectsSection() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isHoveringProject, setIsHoveringProject] = useState(false);
  const projectsContainerRef = useRef<HTMLDivElement>(null);

  const displayedProjects = showAllProjects
    ? personalProjects
    : [personalProjects[0]];

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
            initial: { scale: 0.3, opacity: 0 },
            animate: {
              scale: isHoveringProject ? 1 : 0,
              opacity: isHoveringProject ? 1 : 0,
            },
            exit: { scale: 0.3, opacity: 0 },
          }}
          springConfig={{
            bounce: 0.001,
          }}
          transition={{
            ease: "easeInOut",
            duration: 0.15,
          }}
        >
          <motion.div
            animate={{
              width: isHoveringProject ? 80 : 16,
              height: isHoveringProject ? 32 : 16,
            }}
            className="flex items-center justify-center rounded-[24px] bg-gray-500/40 backdrop-blur-md dark:bg-gray-300/40"
          >
            <AnimatePresence>
              {isHoveringProject ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className="inline-flex w-full items-center justify-center"
                >
                  <div className="inline-flex items-center text-sm font-medium text-white dark:text-black">
                    More <PlusIcon className="ml-1 h-4 w-4" />
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        </Cursor>

        <div className="space-y-4">
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onMouseEnter={() => setIsHoveringProject(true)}
              onMouseLeave={() => setIsHoveringProject(false)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
