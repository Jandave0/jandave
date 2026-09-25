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
    "Third-year Information Technology student bridging hardware telemetry with scalable cloud backends, modern web applications, and structured AI context engineering.",
  status: "Available for Internships",
  location: "Calauag, Quezon, Philippines",
  avatarUrl: "/babid.jpg",
  resumePdfUrl: "/Salas_resumee.pdf",
  githubUrl: "https://github.com/Jandave0",
  email: "jankingdavesalas@gmail.com",
  phone: "09272056612",
  phoneDisplay: "+63 927 205 6612",
  aboutParagraphs: [
    "I am a third-year Information Technology student at the Polytechnic University of the Philippines (PUP Lopez Campus) with hands-on experience in full-stack web development, IoT systems architecture, and mobile applications.",
    "My engineering work bridges hardware telemetry with scalable cloud backends, such as designing single-axis solar tracking algorithms on ESP32 microcontrollers and automating data pipelines. I apply deliberate, context-driven engineering with AI coding tools (Gemini CLI, Antigravity) to produce reliable, production-ready software.",
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
  ],
};
