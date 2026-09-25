export interface ProjectFeature {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  linkDomain?: string;
  liveUrl?: string;
  githubUrl?: string;
  period: string;
  image?: string;
  description: string;
  tags: string[];
  features?: ProjectFeature[];
  isFlagship?: boolean;
}

export const personalProjects: Project[] = [
  {
    id: "dormeats",
    title: "DormEats",
    subtitle: "Student Meal Discovery & Recipe Platform",
    linkDomain: "dormeats.vercel.app",
    liveUrl: "https://dormeats.vercel.app/",
    githubUrl: "https://github.com/Jandave0",
    period: "2026",
    image: "/dormeats.png",
    description:
      "A student-first web platform and recipe engine tailored specifically for Filipino college students, dormers, and boarding house tenants cooking in compact spaces with limited budgets and appliances. Features interactive appliance-based meal matching and sub-₱50 recipes.",
    tags: ["Next.js", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Vercel"],
    isFlagship: true,
    features: [
      {
        title: "Sub-₱50 Recipes & Appliance Filter",
        description:
          "Specially curated meals designed for rice cookers, electric kettles, and microwaves with itemized pricing.",
      },
      {
        title: "Organic Artisan Design System",
        description:
          "Built with Next.js App Router (React 19) and Tailwind CSS v4, featuring GSAP and Framer Motion spring-based interactions and responsive bento layouts.",
      },
      {
        title: "Safety & Legal Portal",
        description:
          "Comprehensive campus food hygiene and dorm electrical load documentation hub for safe student living.",
      },
    ],
  },
  {
    id: "solarx",
    title: "SolarX",
    subtitle: "Solar Monitoring & Tracking Dashboard",
    linkDomain: "solarx.it.com/sign-in",
    liveUrl: "https://www.solarx.it.com/sign-in",
    githubUrl: "https://github.com/Jandave0",
    period: "2025 – 2026",
    image: "/solarx.webp",
    description:
      "Solar Monitoring & Tracking Dashboard providing real-time telemetry, AI yield analysis, and emergency hardware controls. Engineered with ESP32 microcontroller, Next.js / TypeScript web dashboard, and automated single-axis tracking mechanisms.",
    tags: ["Next.js", "TypeScript", "ESP32", "Prisma ORM", "Telemetry", "Tailwind CSS"],
    isFlagship: true,
    features: [
      {
        title: "Live Telemetry & Metrics",
        description:
          "Real-time monitoring of voltage, current, and power output across the entire solar array.",
      },
      {
        title: "Single-Axis Tracking Control",
        description:
          "AI-driven single-axis solar tracking algorithms optimizing daily energy yield.",
      },
      {
        title: "Emergency Hardware Overrides",
        description:
          "Instant panel stowing to safe angles during high winds and extreme weather conditions.",
      },
      {
        title: "ESP32 Microcontroller Architecture",
        description:
          "Direct sensor integration over I2C (INA219 current sensor) and PWM servo control.",
      },
    ],
  },
  {
    id: "fullstack-mobile",
    title: "Cloud Automation Suite",
    subtitle: "Cross-Platform Client & Webhook Sync",
    linkDomain: "cloud-sync.app",
    liveUrl: "https://github.com/Jandave0",
    githubUrl: "https://github.com/Jandave0",
    period: "2025",
    description:
      "Cross-platform client integrated with Supabase realtime channels and n8n background workflows for automated task orchestration and MS SQL Server syncing.",
    tags: ["React Native", "Supabase", "n8n Automation", "MS SQL Server", "REST APIs"],
    features: [
      {
        title: "Cross-Platform Realtime Sync",
        description:
          "Built with React Native and Supabase realtime channels for instant bidirectional record propagation.",
      },
      {
        title: "n8n Background Task Automation",
        description:
          "Self-hosted webhook pipelines triggering automated data transformations and SLA monitoring alerts.",
      },
      {
        title: "Enterprise Database Integration",
        description:
          "Seamless connectivity and replication with on-premise MS SQL Server instances.",
      },
    ],
  },
];
