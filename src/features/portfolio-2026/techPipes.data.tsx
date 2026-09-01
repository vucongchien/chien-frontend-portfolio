import React, { ReactNode } from "react";
import {
  PythonIcon,
  LangChainIcon,
  GoogleADKIcon,
  MCPIcon,
  CopilotKitIcon,
  ClaudeIcon,
  TypeScriptIcon,
  NextJSIcon,
  ReactIcon,
  TailwindIcon,
  PlaywrightIcon,
  VitestIcon,
  NodeJSIcon,
  PostgreSQLIcon,
  DockerIcon,
  RedisIcon,
  FastAPIIcon,
  AWSIcon,
  GCPIcon,
  VercelIcon,
  GitIcon,
  PostmanIcon,
  FigmaIcon,
  VectorDBIcon,
  RAGIcon,
} from "./TechIcons";

export interface TechLogo {
  id: string;
  name: string;
  icon: ReactNode;
}

/* ══════════════════════════════════════════════════════════════════
   DANH SÁCH LOGO THEO 3 CỘT ĐẦY ĐỦ 100% KỸ NĂNG
   ══════════════════════════════════════════════════════════════════ */

// Ống 1: AI / LLM & Agents
export const AI_LOGOS: TechLogo[] = [
  { id: "python", name: "Python", icon: <PythonIcon /> },
  { id: "langchain", name: "LangChain", icon: <LangChainIcon /> },
  { id: "google-adk", name: "Google ADK", icon: <GoogleADKIcon /> },
  { id: "mcp", name: "MCP", icon: <MCPIcon /> },
  { id: "copilotkit", name: "CopilotKit", icon: <CopilotKitIcon /> },
  { id: "claude", name: "Claude / LLMs", icon: <ClaudeIcon /> },
  { id: "vectordb", name: "Vector DBs", icon: <VectorDBIcon /> },
  { id: "rag-agents", name: "RAG & Agents", icon: <RAGIcon /> },
];

// Ống 2: Frontend & Tools
export const FRONTEND_LOGOS: TechLogo[] = [
  { id: "typescript", name: "TypeScript", icon: <TypeScriptIcon /> },
  { id: "nextjs", name: "Next.js", icon: <NextJSIcon /> },
  { id: "react", name: "React", icon: <ReactIcon /> },
  { id: "tailwind", name: "TailwindCSS", icon: <TailwindIcon /> },
  { id: "figma", name: "Figma", icon: <FigmaIcon /> },
  { id: "playwright", name: "Playwright", icon: <PlaywrightIcon /> },
  { id: "vitest", name: "Vitest", icon: <VitestIcon /> },
];

// Ống 3: Backend, Infra & DevOps
export const BACKEND_LOGOS: TechLogo[] = [
  { id: "fastapi", name: "FastAPI", icon: <FastAPIIcon /> },
  { id: "nodejs", name: "Node.js", icon: <NodeJSIcon /> },
  { id: "postgresql", name: "PostgreSQL", icon: <PostgreSQLIcon /> },
  { id: "redis", name: "Redis", icon: <RedisIcon /> },
  { id: "docker", name: "Docker", icon: <DockerIcon /> },
  { id: "aws", name: "AWS", icon: <AWSIcon /> },
  { id: "gcp", name: "GCP", icon: <GCPIcon /> },
  { id: "vercel", name: "Vercel", icon: <VercelIcon /> },
  { id: "git", name: "Git", icon: <GitIcon /> },
  { id: "postman", name: "Postman", icon: <PostmanIcon /> },
];
