import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const interHeading = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
});

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jan King Dave F. Salas | Full-Stack Developer & IoT Engineer",
  description:
    "Portfolio of Jan King Dave F. Salas — Full-Stack Web Developer, IoT Architect, and 3rd-year IT student at PUP Lopez.",
  keywords: [
    "Jan King Dave Salas",
    "Portfolio",
    "Full-Stack Developer",
    "IoT",
    "ESP32",
    "TypeScript",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "dark h-full scroll-smooth antialiased",
        geistSans.variable,
        geistMono.variable,
        interHeading.variable
      )}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-[#121212] text-[#333333] dark:text-[#F0F0F0] selection:bg-[#333333] selection:text-[#FFFFFF] dark:selection:bg-[#F0F0F0] dark:selection:text-[#121212] transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
