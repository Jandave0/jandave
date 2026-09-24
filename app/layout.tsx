import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const interHeading = Inter({subsets:['latin'],variable:'--font-heading'});

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jan King Dave F. Salas | Full-Stack Developer & IoT Engineer",
  description: "Portfolio of Jan King Dave F. Salas — Full-Stack Web Developer, IoT Architect, and 3rd-year IT student at PUP Lopez.",
  keywords: ["Jan King Dave Salas", "Portfolio", "Full-Stack Developer", "IoT", "ESP32", "TypeScript", "Next.js"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("dark h-full scroll-smooth antialiased", geistSans.variable, geistMono.variable, geist.variable, interHeading.variable)}
    >
      <body className="min-h-full flex flex-col bg-[#0d1b2a] text-[#e0e1dd] selection:bg-[#415a77]/50 selection:text-[#e0e1dd]">{children}</body>
    </html>
  );
}
