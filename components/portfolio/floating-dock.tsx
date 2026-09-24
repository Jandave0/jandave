"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Home,
  User,
  Briefcase,
  Code2,
  Cpu,
  Mail,
  FileText,
} from "lucide-react";
import { GithubIcon } from "./icons";

interface DockItem {
  title: string;
  icon: React.ReactNode;
  href: string;
  external?: boolean;
}

const items: DockItem[] = [
  { title: "Home", icon: <Home className="w-5 h-5" />, href: "#home" },
  { title: "What I Do", icon: <Cpu className="w-5 h-5" />, href: "#what-i-do" },
  { title: "About Me", icon: <User className="w-5 h-5" />, href: "#about" },
  { title: "Projects", icon: <Briefcase className="w-5 h-5" />, href: "#portfolio" },
  { title: "Skills", icon: <Code2 className="w-5 h-5" />, href: "#skills" },
  { title: "Contact", icon: <Mail className="w-5 h-5" />, href: "#contact" },
  {
    title: "Resume PDF",
    icon: <FileText className="w-5 h-5" />,
    href: "/Salas_resumee.pdf",
    external: true,
  },
  {
    title: "GitHub",
    icon: <GithubIcon className="w-5 h-5" />,
    href: "https://github.com/Jandave0",
    external: true,
  },
];

export function FloatingDock() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="fixed bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
      <motion.nav
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="pointer-events-auto flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-full bg-[#1b263b]/85 backdrop-blur-xl border border-[#415a77]/60 shadow-[0_8px_32px_rgba(13,27,42,0.6)]"
      >
        {items.map((item, idx) => {
          const isHovered = hoveredIdx === idx;
          return (
            <div key={item.title} className="relative flex items-center justify-center">
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    initial={{ opacity: 0, y: 10, scale: 0.85 }}
                    animate={{ opacity: 1, y: -38, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.85 }}
                    transition={{ duration: 0.15 }}
                    className="absolute whitespace-nowrap px-2.5 py-1 rounded-md text-xs font-medium tracking-wide bg-[#0d1b2a] text-[#e0e1dd] border border-[#415a77]/80 shadow-lg pointer-events-none"
                  >
                    {item.title}
                  </motion.span>
                )}
              </AnimatePresence>
              <motion.a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                whileHover={{ scale: 1.25, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-10 h-10 rounded-full text-[#778da9] hover:text-[#e0e1dd] hover:bg-[#415a77]/30 transition-colors"
                aria-label={item.title}
              >
                {item.icon}
              </motion.a>
            </div>
          );
        })}
      </motion.nav>
    </div>
  );
}
