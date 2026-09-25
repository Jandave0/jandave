import React from "react";
import { TimelineItem } from "@/components/portfolio/timeline-item";
import { educationExperience } from "@/data/experience";

export function EducationSection() {
  return (
    <section id="education" className="space-y-4">
      <div className="space-y-1">
        <h2 className="text-xl font-bold tracking-tight text-[#18181B] dark:text-[#FFFFFF]">
          Education
        </h2>
        <p className="text-xs sm:text-sm text-[#707070] dark:text-[#B0B0B0]">
          Academic training and university qualifications.
        </p>
      </div>

      <div className="pt-2">
        {educationExperience.map((entry, index) => (
          <TimelineItem key={entry.title} entry={entry} index={index} />
        ))}
      </div>
    </section>
  );
}
