import { ReactNode } from "react";

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
      { name: "HTML/CSS", icon: "🌐", level: 5 },
      { name: "Tailwind", icon: "🎐", level: 4 },
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
    ],
  },
  {
    title: "Tools & Others",
    emoji: "🛠️",
    skills: [
      { name: "Git", icon: "🔀", level: 4 },
      { name: "Docker", icon: "🐳", level: 3 },
      { name: "AI", icon: "🤖", level: 4 },
      { name: "VS Code", icon: "💻", level: 5 },
      { name: "Figma", icon: "🎨", level: 3 },
    ],
  },
];
