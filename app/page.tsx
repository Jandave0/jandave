"use client";

import React from "react";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { EducationSection } from "@/components/sections/education-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FloatingDock } from "@/components/portfolio/floating-dock";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#121212] text-[#333333] dark:text-[#F0F0F0] selection:bg-[#333333] selection:text-[#FFFFFF] dark:selection:bg-[#F0F0F0] dark:selection:text-[#121212] transition-colors duration-300">
      <ScrollProgress />

      {/* Centered Single Column Container */}
      <main className="max-w-2xl mx-auto px-6 py-16 sm:py-24 space-y-16">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Floating Bottom Navigation Dock */}
      <FloatingDock />
    </div>
  );
}
