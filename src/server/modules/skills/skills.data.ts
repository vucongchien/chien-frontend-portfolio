import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    emoji: "🎨",
    skills: [
      { name: "TypeScript", icon: "TS", level: 4 },
      { name: "React", icon: "⚛️", level: 4 },
      { name: "Next.js", icon: "▲", level: 4 },
      { name: "TailwindCSS", icon: "🎐", level: 4 },
      { name: "HTML/CSS", icon: "🌐", level: 5 },
    ],
  },
  {
    title: "Backend",
    emoji: "⚙️",
    skills: [
      { name: "Python", icon: "🐍", level: 4 },
      { name: "FastAPI", icon: "⚡", level: 3 },
      { name: "Node.js", icon: "🟢", level: 3 },
      { name: "PostgreSQL", icon: "🐘", level: 3 },
      { name: "Redis", icon: "🧠", level: 2 },
    ],
  },
  {
    title: "Infra & DevOps",
    emoji: "☁️",
    skills: [
      { name: "AWS", icon: "☁️", level: 2 },
      { name: "GCP", icon: "🌐", level: 2 },
      { name: "Docker", icon: "🐳", level: 3 },
      { name: "Vercel", icon: "▲", level: 4 },
    ],
  },
  {
    title: "Tools",
    emoji: "🛠️",
    skills: [
      { name: "Git", icon: "🔀", level: 4 },
      { name: "Postman", icon: "📮", level: 4 },
      { name: "Figma", icon: "🎨", level: 3 },
      { name: "VS Code", icon: "💻", level: 5 },
      { name: "Code with Agent", icon: "🤖", level: 5 },
    ],
  },
  {
    title: "AI / LLM",
    emoji: "🧠",
    skills: [
      { name: "LangChain", icon: "🦜", level: 4 },
      { name: "Google ADK", icon: "✨", level: 4 },
      { name: "MCP", icon: "🔌", level: 4 },
      { name: "CopilotKit", icon: "🤖", level: 4 },
      { name: "Claude / LLMs", icon: "💡", level: 4 },
      { name: "Vector Databases", icon: "📦", level: 3 },
      { name: "RAG & Agents", icon: "🔎", level: 4 },
    ],
  },
];
