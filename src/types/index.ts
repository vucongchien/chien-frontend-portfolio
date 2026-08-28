export interface Project {
  id: string;
  title: string;
  period: string;
  team: string;
  image: string;
  tech: string[];
  description: string;
  roles: string[];
  learnings: string;
  liveUrl?: string;
  githubUrl?: string;
  reverse?: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  level: 1 | 2 | 3 | 4 | 5;
}

export interface SkillCategory {
  title: string;
  emoji: string;
  skills: Skill[];
}

export interface ChangelogItem {
  version: string;
  releaseDate: string;
  changes: string[];
}

export interface SocialLink {
  name: string;
  href: string;
  iconType: "gmail" | "github" | "facebook";
}
