"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { MapPin, FileDown, Mail } from "lucide-react";
import { GithubIcon } from "@/components/portfolio/icons";
import { profileData } from "@/data/profile";

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-8 pt-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-1 space-y-3"
      >
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#18181B] dark:text-[#FFFFFF] leading-tight">
          Hi, I&apos;m {profileData.name.split(" ")[0]} {profileData.name.split(" ")[1]} {profileData.name.split(" ")[2]}{" "}
          <span className="inline-block hover:rotate-12 transition-transform cursor-default">👋</span>
        </h1>

        <p className="text-sm sm:text-base text-[#707070] dark:text-[#B0B0B0] leading-relaxed max-w-[520px]">
          {profileData.headline}
        </p>

        {/* Live Status Indicator & Location */}
        <div className="flex items-center gap-2 pt-1 text-xs text-[#707070] dark:text-[#B0B0B0]">
          <span className="size-1.5 rounded-full bg-emerald-500 inline-block shrink-0" />
          <span className="font-medium text-[#333333] dark:text-[#E0E1DD]">{profileData.status}</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#707070] dark:text-[#B0B0B0]" />
            {profileData.location}
          </span>
        </div>

        {/* Quick Action Links */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
          <a
            href={profileData.resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#333333] dark:bg-[#F0F0F0] text-[#FFFFFF] dark:text-[#18181B] hover:opacity-90 transition-opacity shadow-sm"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume PDF</span>
          </a>
          <a
            href={profileData.githubUrl}
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

      {/* Profile Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="shrink-0"
      >
        <div className="relative size-28 sm:size-32 rounded-full overflow-hidden border-2 border-[#B0B0B0]/30 dark:border-[#333333] shadow-md group">
          <Image
            src={profileData.avatarUrl}
            alt={profileData.name}
            fill
            priority
            sizes="128px"
            className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </motion.div>
    </section>
  );
}
