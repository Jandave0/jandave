import React from "react";
import { profileData } from "@/data/profile";

export function AboutSection() {
  return (
    <section id="about" className="space-y-3">
      <h2 className="text-xl font-bold tracking-tight text-[#18181B] dark:text-[#FFFFFF]">
        About
      </h2>
      {profileData.aboutParagraphs.map((paragraph, index) => (
        <p
          key={index}
          className="text-sm sm:text-base text-[#707070] dark:text-[#B0B0B0] leading-relaxed"
        >
          {paragraph}
        </p>
      ))}
    </section>
  );
}
