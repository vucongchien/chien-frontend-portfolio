export type Skill = {
  name: string;
  icon: string;
  level: 1 | 2 | 3 | 4 | 5;
};

export type SkillCategory = {
  title: string;
  emoji: string;
  skills: Skill[];
};

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
      { name: "Claude", icon: "🤖", level: 4 },
      { name: "Vector Databases", icon: "📦", level: 2 },
      { name: "RAG (basic)", icon: "🔎", level: 2 },
    ],
  },
];