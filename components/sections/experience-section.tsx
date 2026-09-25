import React from "react";
import { TimelineItem } from "@/components/portfolio/timeline-item";
import { workExperience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="space-y-4">
      <div className="space-y-1">
        <h2 className="text-xl font-bold tracking-tight text-[#18181B] dark:text-[#FFFFFF]">
          Work Experience
        </h2>
        <p className="text-xs sm:text-sm text-[#707070] dark:text-[#B0B0B0]">
          My professional internships and industry experience.
        </p>
      </div>

      <div className="pt-2">
        {workExperience.map((entry, index) => (
          <TimelineItem key={entry.title} entry={entry} index={index} />
        ))}
      </div>
    </section>
  );
}
