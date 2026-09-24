"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  FileDown,
  Briefcase,
  GraduationCap,
  ChevronRight,
  PlusIcon,
} from "lucide-react";

import { TimelineItem, TimelineEntry } from "@/components/portfolio/timeline-item";
import { ProjectCardMagic, MagicProject } from "@/components/portfolio/project-card-magic";
import { CopyButton } from "@/components/portfolio/contact-toast";
import { FloatingDockMagic } from "@/components/portfolio/floating-dock-magic";
import { GithubIcon } from "@/components/portfolio/icons";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Cursor } from "@/components/core/cursor";

const workExperience: TimelineEntry[] = [
  {
    title: "The Umonics Method",
    subtitle: "Technical Intern",
    period: "March 2026 – May 2026",
    badge: "Internship",
    icon: Briefcase,
    bullets: [
      "Developed and customized responsive web pages, optimizing layout designs and user interfaces to guarantee seamless cross-device compatibility.",
      "Managed plugin configurations and core content updates, auditing site assets to reduce page load latency and maintain platform security.",
    ],
  },
  {
    title: "Stellarsat Solutions Inc.",
    subtitle: "Data Operations & SLA Intern",
    period: "July 2025 – August 2025",
    badge: "300 Hours",
    icon: Briefcase,
    bullets: [
      "Completed a 300-hour technical internship specializing in mapping, MIR, service level agreements (SLA), and data operations.",
      "Analyzed and processed geographical data streams, ensuring high accuracy and compliance with operational service level agreements.",
    ],
  },
];

const educationExperience: TimelineEntry[] = [
  {
    title: "Polytechnic University of the Philippines (PUP)",
    subtitle: "Diploma in Information Technology — Lopez Campus",
    period: "2023 – 2026 (Expected)",
    badge: "3rd-Year Student",
    icon: GraduationCap,
    description:
      "Core Coursework: Software Engineering, Advanced Database Management, Mobile Application Development, IoT & Embedded Systems.",
  },
];

const skillsList = [
  "TypeScript",
  "JavaScript",
  "Java",
  "C++ (ESP32)",
  "React",
  "Next.js",
  "React Native",
  "Express",
  "Prisma ORM",
  "Tailwind CSS",
  "Supabase",
  "MS SQL Server",
  "n8n Automation",
  "REST APIs",
  "Git",
  "GitHub",
  "Vercel",
  "Gemini CLI",
  "Antigravity CLI",
  "Context Engineering",
];

const personalProjects: MagicProject[] = [
  {
    id: "dormeats",
    title: "DormEats",
    subtitle: "Student Meal Discovery & Recipe Platform",
    linkDomain: "dormeats.vercel.app",
    liveUrl: "https://dormeats.vercel.app/",
    period: "2026",
    image: "/dormeats.png",
    description:
      "A student-first web platform and recipe engine tailored specifically for Filipino college students, dormers, and boarding house tenants cooking in compact spaces with limited budgets and appliances. Features interactive appliance-based meal matching and sub-₱50 recipes.",
    tags: ["Next.js", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Vercel"],
    githubUrl: "https://github.com/Jandave0",
  },
  {
    id: "solarx",
    title: "SolarX",
    subtitle: "Solar Monitoring & Tracking Dashboard",
    linkDomain: "solarx.it.com/sign-in",
    liveUrl: "https://www.solarx.it.com/sign-in",
    period: "2025 – 2026",
    image: "/solarx.webp",
    description:
      "Solar Monitoring & Tracking Dashboard providing real-time telemetry, AI yield analysis, and emergency hardware controls. Engineered with ESP32 microcontroller, Next.js / TypeScript web dashboard, and automated single-axis tracking mechanisms.",
    tags: ["Next.js", "TypeScript", "ESP32", "Prisma ORM", "Telemetry", "Tailwind CSS"],
    githubUrl: "https://github.com/Jandave0",
  },
  {
    id: "fullstack-mobile",
    title: "Cloud Automation Suite",
    subtitle: "Cross-Platform Client & Webhook Sync",
    linkDomain: "cloud-sync.app",
    liveUrl: "https://github.com/Jandave0",
    period: "2025",
    description:
      "Cross-platform client integrated with Supabase realtime channels and n8n background workflows for automated task orchestration and MS SQL Server syncing.",
    tags: ["React Native", "Supabase", "n8n Automation", "MS SQL Server", "REST APIs"],
    githubUrl: "https://github.com/Jandave0",
  },
];

export default function MagicUIPortfolioPage() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isHoveringProject, setIsHoveringProject] = useState(false);
  const projectsContainerRef = useRef<HTMLDivElement>(null);

  const displayedProjects = showAllProjects ? personalProjects : [personalProjects[0]];

  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#121212] text-[#333333] dark:text-[#F0F0F0] selection:bg-[#333333] selection:text-[#FFFFFF] dark:selection:bg-[#F0F0F0] dark:selection:text-[#121212] transition-colors duration-300">
      <ScrollProgress />
      {/* Centered Single Column matching portfolio-magicui.vercel.app (max-w-2xl) */}
      <main className="max-w-2xl mx-auto px-6 py-16 sm:py-24 space-y-16">
        
        {/* 1. HERO SECTION (Classic MagicUI Avatar-Right Layout) */}
        <section id="home" className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-8 pt-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex-1 space-y-3"
          >
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#18181B] dark:text-[#FFFFFF] leading-tight">
              Hi, I&apos;m Jan King Dave <span className="inline-block hover:rotate-12 transition-transform cursor-default">👋</span>
            </h1>

            <p className="text-sm sm:text-base text-[#707070] dark:text-[#B0B0B0] leading-relaxed max-w-[520px]">
              Third-year Information Technology student bridging hardware telemetry with scalable cloud backends, modern web applications, and structured AI context engineering.
            </p>

            {/* Live Status Indicator & Location */}
            <div className="flex items-center gap-2 pt-1 text-xs text-[#707070] dark:text-[#B0B0B0]">
              <span className="size-1.5 rounded-full bg-emerald-500 inline-block shrink-0" />
              <span className="font-medium text-[#333333] dark:text-[#E0E1DD]">Available for Internships</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#707070] dark:text-[#B0B0B0]" />
                Calauag, Quezon, Philippines
              </span>
            </div>

            {/* Quick Action Links */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
              <a
                href="/Salas_resumee.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#333333] dark:bg-[#F0F0F0] text-[#FFFFFF] dark:text-[#18181B] hover:opacity-90 transition-opacity shadow-sm"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </a>
              <a
                href="https://github.com/Jandave0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold border border-[#B0B0B0]/40 dark:border-[#333333] hover:bg-[#F0F0F0] dark:hover:bg-[#202022] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#707070] dark:text-[#B0B0B0] hover:text-[#333333] dark:hover:text-[#FFFFFF] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Circular Profile Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="shrink-0"
          >
            <div className="relative size-28 sm:size-32 rounded-full overflow-hidden border-2 border-[#B0B0B0]/30 dark:border-[#333333] shadow-md group">
              <Image
                src="/babid.jpg"
                alt="Jan King Dave F. Salas"
                fill
                priority
                sizes="128px"
                className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </motion.div>
        </section>

        {/* 2. ABOUT SECTION */}
        <section id="about" className="space-y-3">
          <h2 className="text-xl font-bold tracking-tight text-[#18181B] dark:text-[#FFFFFF]">
            About
          </h2>
          <p className="text-sm sm:text-base text-[#707070] dark:text-[#B0B0B0] leading-relaxed">
            I am a third-year Information Technology student at the Polytechnic University of the Philippines (PUP Lopez Campus) with hands-on experience in full-stack web development, IoT systems architecture, and mobile applications.
          </p>
          <p className="text-sm sm:text-base text-[#707070] dark:text-[#B0B0B0] leading-relaxed">
            My engineering work bridges hardware telemetry with scalable cloud backends, such as designing single-axis solar tracking algorithms on ESP32 microcontrollers and automating data pipelines. I apply deliberate, context-driven engineering with AI coding tools (Gemini CLI, Antigravity) to produce reliable, production-ready software.
          </p>
        </section>

        {/* 3. WORK EXPERIENCE SECTION */}
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

        {/* 4. EDUCATION SECTION */}
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

        {/* 5. SKILLS SECTION */}
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
            {skillsList.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[#F0F0F0] dark:bg-[#1E1E20] text-[#333333] dark:text-[#E0E1DD] border border-[#B0B0B0]/40 dark:border-[#333333] hover:border-neutral-500 dark:hover:border-neutral-600 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* 6. PROJECTS SECTION (Exact match to reference image) */}
        <section id="projects" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#18181B] dark:text-[#FFFFFF]">
              Recent Projects
            </h2>

            {/* Top Right "View All >" Button */}
            <button
              type="button"
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="inline-flex items-center gap-0.5 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            >
              <span>{showAllProjects ? "Show Less" : "View All"}</span>
              <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${showAllProjects ? "rotate-90" : ""}`} />
            </button>
          </div>

          {/* Project cards wrapper with Motion Primitives Cursor */}
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
                <ProjectCardMagic
                  key={project.id}
                  project={project}
                  onMouseEnter={() => setIsHoveringProject(true)}
                  onMouseLeave={() => setIsHoveringProject(false)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 7. CONTACT SECTION */}
        <section id="contact" className="space-y-6 pt-6 pb-12 border-t border-[#B0B0B0]/20 dark:border-[#333333] text-center">
          <div className="space-y-2 max-w-[480px] mx-auto">
            <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-mono font-medium uppercase tracking-wider bg-transparent text-neutral-600 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-700">
              Contact
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#18181B] dark:text-[#FFFFFF]">
              Get in Touch
            </h2>
            <p className="text-xs sm:text-sm text-[#707070] dark:text-[#B0B0B0] leading-relaxed">
              Want to chat? Just shoot me an email or reach out on GitHub. I&apos;m always open to discussing new internship opportunities, IoT projects, or engineering collaborations.
            </p>
          </div>

          {/* Contact Actions with One-Click Copy */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {/* Email Pill */}
            <div className="inline-flex items-center gap-2.5 h-10 px-3.5 rounded-lg border border-[#B0B0B0]/40 dark:border-[#333333] bg-[#F0F0F0] dark:bg-[#1C1C1E] text-xs whitespace-nowrap">
              <Mail className="w-3.5 h-3.5 text-[#707070] dark:text-[#B0B0B0] shrink-0" />
              <a
                href="mailto:jankingdavesalas@gmail.com"
                className="font-mono text-[#333333] dark:text-[#E0E1DD] hover:underline"
              >
                jankingdavesalas@gmail.com
              </a>
              <CopyButton textToCopy="jankingdavesalas@gmail.com" />
            </div>

            {/* Phone Pill */}
            <div className="inline-flex items-center gap-2.5 h-10 px-3.5 rounded-lg border border-[#B0B0B0]/40 dark:border-[#333333] bg-[#F0F0F0] dark:bg-[#1C1C1E] text-xs whitespace-nowrap">
              <Phone className="w-3.5 h-3.5 text-[#707070] dark:text-[#B0B0B0] shrink-0" />
              <a
                href="tel:09272056612"
                className="font-mono text-[#333333] dark:text-[#E0E1DD] hover:underline"
              >
                +63 927 205 6612
              </a>
              <CopyButton textToCopy="09272056612" />
            </div>

            {/* GitHub Pill */}
            <a
              href="https://github.com/Jandave0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-10 px-3.5 rounded-lg border border-[#B0B0B0]/40 dark:border-[#333333] bg-[#F0F0F0] dark:bg-[#1C1C1E] text-xs font-mono text-[#333333] dark:text-[#E0E1DD] hover:border-neutral-500 transition-colors whitespace-nowrap"
            >
              <GithubIcon className="w-3.5 h-3.5 shrink-0" />
              <span>github.com/Jandave0</span>
              <ExternalLink className="w-3 h-3 text-[#707070] dark:text-[#B0B0B0] shrink-0" />
            </a>
          </div>

          <div className="pt-8 text-xs font-mono text-[#707070] dark:text-[#707070]">
            &copy; 2026 Jan King Dave F. Salas. Built with Next.js, Motion &amp; Magic UI.
          </div>
        </section>
      </main>

      {/* MagicUI Bottom Floating Dock with Magnification & Theme Toggle */}
      <FloatingDockMagic />
    </div>
  );
}
