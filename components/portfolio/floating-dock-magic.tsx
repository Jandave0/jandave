"use client";

import React from "react";
import {
  Home,
  User,
  Briefcase,
  GraduationCap,
  Code2,
  FolderGit2,
  Mail,
  FileDown,
} from "lucide-react";
import { GithubIcon } from "./icons";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/core/dock";

interface NavigationItem {
  title: string;
  icon: React.ReactNode;
  href: string;
  external?: boolean;
}

const navigationData: NavigationItem[] = [
  {
    title: "Home",
    icon: <Home className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "#home",
  },
  {
    title: "About",
    icon: <User className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "#about",
  },
  {
    title: "Experience",
    icon: <Briefcase className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "#experience",
  },
  {
    title: "Education",
    icon: <GraduationCap className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "#education",
  },
  {
    title: "Skills",
    icon: <Code2 className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "#skills",
  },
  {
    title: "Projects",
    icon: <FolderGit2 className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "#projects",
  },
  {
    title: "Contact",
    icon: <Mail className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "#contact",
  },
  {
    title: "Resume",
    icon: <FileDown className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "/Salas_resumee.pdf",
    external: true,
  },
  {
    title: "GitHub",
    icon: <GithubIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "https://github.com/Jandave0",
    external: true,
  },
];

export function FloatingDockMagic() {
  return (
    <div className="fixed bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-1rem)] px-1 sm:px-2 pointer-events-auto">
      <Dock
        className="items-end pb-2 sm:pb-2.5"
        panelHeight={54}
        magnification={68}
        distance={130}
      >
        {navigationData.map((item) => (
          <DockItem
            key={item.title}
            href={item.href}
            external={item.external}
            aria-label={item.title}
            className="aspect-square rounded-full bg-neutral-200/70 hover:bg-neutral-300/80 dark:bg-neutral-800/80 dark:hover:bg-neutral-700/80 text-neutral-600 dark:text-neutral-300 transition-colors"
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}

        {/* Vertical Divider */}
        <div className="w-[1px] h-5 sm:h-6 bg-neutral-300/80 dark:bg-neutral-700/80 mx-0.5 sm:mx-1 self-center shrink-0 mb-1" />

        {/* Theme Toggler Dock Item */}
        <DockItem
          aria-label="Toggle Theme"
          className="aspect-square rounded-full bg-neutral-200/70 hover:bg-neutral-300/80 dark:bg-neutral-800/80 dark:hover:bg-neutral-700/80 text-neutral-600 dark:text-neutral-300 transition-colors"
        >
          <DockLabel>Theme</DockLabel>
          <DockIcon>
            <AnimatedThemeToggler
              variant="circle"
              className="flex items-center justify-center w-full h-full rounded-full border-0 p-0 text-inherit hover:text-inherit bg-transparent hover:bg-transparent [&_svg]:w-full [&_svg]:h-full"
            />
          </DockIcon>
        </DockItem>
      </Dock>
    </div>
  );
}

// Re-export AppleStyleDock for compatibility
export { FloatingDockMagic as AppleStyleDock };
