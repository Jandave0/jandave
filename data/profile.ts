export interface ProfileData {
  name: string;
  headline: string;
  status: string;
  location: string;
  avatarUrl: string;
  resumePdfUrl: string;
  githubUrl: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  aboutParagraphs: string[];
  skills: string[];
}

export const profileData: ProfileData = {
  name: "Jan King Dave F. Salas",
  headline:
    "Full-Stack Developer / Mobile App Developer / IT Student",
  status: "Available for Work or Freelance",
  location: "Calauag, Quezon, Philippines",
  avatarUrl: "/babid.jpg",
  resumePdfUrl: "/Salas_resumee.pdf",
  githubUrl: "https://github.com/Jandave0",
  email: "jankingdavesalas@gmail.com",
  phone: "09272056612",
  phoneDisplay: "+63 927 205 6612",
  aboutParagraphs: [
    "I am a third-year Information Technology student at the Polytechnic University of the Philippines (PUP Lopez Campus) specializing in full-stack web development and cross-platform mobile applications. I design and engineer end-to-end digital products from responsive, accessible web interfaces in Next.js and React to fluid mobile experiences with React Native.",
    "My development workflow focuses on clean component architecture, intuitive UI interactions, and robust backend integrations with modern databases, ORMs, and REST APIs. I combine deliberate software engineering principles with AI-augmented workflows to rapidly build and ship polished, production-grade applications across web and mobile platforms.",
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "Java",
    "C++ (ESP32)",
    "React",
    "Next.js",
    "React Native",
    "Express",
    "Prisma ORM",
    "Drizzle ORM",
    "Tailwind CSS",
    "Neon Postgres",
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
  ],
};
