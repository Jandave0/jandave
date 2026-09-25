import { Briefcase, GraduationCap, LucideIcon } from "lucide-react";

export interface TimelineEntry {
  title: string;
  subtitle: string;
  period: string;
  badge?: string;
  bullets?: string[];
  description?: string;
  icon?: LucideIcon;
  iconText?: string;
  href?: string;
}

export const workExperience: TimelineEntry[] = [
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

export const educationExperience: TimelineEntry[] = [
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
