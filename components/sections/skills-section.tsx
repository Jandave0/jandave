import React from "react";
import { profileData } from "@/data/profile";

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-3">
      <div className="space-y-1">
        <h2 className="text-xl font-bold tracking-tight text-[#18181B] dark:text-[#FFFFFF]">
          Skills
        </h2>
        <p className="text-xs sm:text-sm text-[#707070] dark:text-[#B0B0B0]">
          Languages, libraries, cloud infrastructure, and AI engineering tools I build with.
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-2">
        {profileData.skills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[#F0F0F0] dark:bg-[#1E1E20] text-[#333333] dark:text-[#E0E1DD] border border-[#B0B0B0]/40 dark:border-[#333333] hover:border-neutral-500 dark:hover:border-neutral-600 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
