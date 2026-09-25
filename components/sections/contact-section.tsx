"use client";

import React from "react";
import { Mail, Phone, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/portfolio/icons";
import { CopyButton } from "@/components/portfolio/copy-button";
import { profileData } from "@/data/profile";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="space-y-6 pt-6 pb-12 border-t border-[#B0B0B0]/20 dark:border-[#333333] text-center"
    >
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
            href={`mailto:${profileData.email}`}
            className="font-mono text-[#333333] dark:text-[#E0E1DD] hover:underline"
          >
            {profileData.email}
          </a>
          <CopyButton textToCopy={profileData.email} label="email address" />
        </div>

        {/* Phone Pill */}
        <div className="inline-flex items-center gap-2.5 h-10 px-3.5 rounded-lg border border-[#B0B0B0]/40 dark:border-[#333333] bg-[#F0F0F0] dark:bg-[#1C1C1E] text-xs whitespace-nowrap">
          <Phone className="w-3.5 h-3.5 text-[#707070] dark:text-[#B0B0B0] shrink-0" />
          <a
            href={`tel:${profileData.phone}`}
            className="font-mono text-[#333333] dark:text-[#E0E1DD] hover:underline"
          >
            {profileData.phoneDisplay}
          </a>
          <CopyButton textToCopy={profileData.phone} label="phone number" />
        </div>

        {/* GitHub Pill */}
        <a
          href={profileData.githubUrl}
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
        &copy; {new Date().getFullYear()} {profileData.name}.
      </div>
    </section>
  );
}
