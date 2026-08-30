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

export interface BlogAuthor {
  name: string;
  role: string;
  avatar?: string;
}

export interface BlogTocItem {
  id: string;
  text: string;
  level: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readingTime?: number;
  tags: string[];
  coverImage?: string;
  featured?: boolean;
  author: BlogAuthor;
}

