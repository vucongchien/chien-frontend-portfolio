"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  category: string;
  period?: string;
  image?: string;
  description: string | string[];
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  githubBackendUrl?: string;
}

const DEFAULT_PROJECTS: ProjectItem[] = [
  {
    id: "fitness-ai-website",
    index: "01",
    title: "Fitness AI Website",
    category: "Full-stack Developer (Backend + Frontend)",
    period: "06/2026 — 08/2026 · Team of 3",
    image: "/project3.png",
    description: [
      "Designed and implemented a modular monolith in Go for Coaching and Exercise service decomposition.",
      "Built an agentic coaching system using the Gemini API for 4-week workout plan generation, with business-rule constraints, exercise management, and reference-backed guardrails.",
      "Built a frontend with BFF architecture, strategic caching, optimized rendering strategies, and Web Workers for camera and AI processing.",
    ],
    techStack: ["Go", "Protobuf/gRPC", "DDD", "Kafka", "PostgreSQL", "Agentic AI", "Next.js", "Playwright", "Docker", "Vercel", "Railway"],
    githubUrl: "https://github.com/vucongchien/fitai-web",
    githubBackendUrl: "https://github.com/viethung213/gym-companion",
  },
  {
    id: "rent-a-gf",
    index: "02",
    title: "Rent-a-GF Platform",
    category: "Full-stack Developer (Microservices + Frontend)",
    period: "10/2025 — 12/2025 · Team of 3",
    image: "/project2.png",
    description: [
      "Authored BRD and PRD specifications for a microservices architecture, defining Protobuf contracts and service boundaries.",
      "Built the Java-based Notification Service, leveraging Redis for state caching to deliver multi-channel alerts across Gmail, Web Push, and FCM.",
      "Designed and built frontend UX flows with BFF architecture, strategic caching, and Progressive Web features, deploying the client on Vercel.",
    ],
    techStack: ["Java", "Spring Boot", "Microservices", "Protobuf/gRPC", "Redis", "Kafka", "FCM", "Helm", "Next.js", "Vercel"],
    githubUrl: "https://github.com/vucongchien/rent-a-gf-fe",
    githubBackendUrl: "https://github.com/tianshi04/rent-a-girlfriend",
  },
  {
    id: "ecommerce-ai-agent",
    index: "03",
    title: "E-commerce AI Agent",
    category: "Full-stack Developer",
    period: "08/2025 — 01/2026",
    image: "/project1.png",
    description: [
      "Modern culinary e-commerce platform built with Next.js, FastAPI & Supabase.",
      "Integrated conversational AI Agents, MCP Server, and automated workflow tooling with AgUI.",
    ],
    techStack: ["Next.js", "TypeScript", "FastAPI", "Supabase", "MCP Server", "AgUI", "TailwindCSS"],
    demoUrl: "https://copilot-chan-fe-v2.vercel.app/",
    githubUrl: "https://github.com/copilot-chan/copilot-chan-fe-v2",
  },
  {
    id: "interactive-novel",
    index: "04",
    title: "Interactive Novel",
    category: "Full-stack Developer",
    period: "03/2025 — 05/2025",
    image: "/project2.png",
    description: [
      "Built the interactive visual novel frontend in React, delivering immersive visual storytelling flows.",
      "FastAPI backend integrated with Gemini API for dynamic storytelling generation.",
    ],
    techStack: ["React", "FastAPI", "Gemini API", "TailwindCSS", "Docker", "Fly.io"],
    demoUrl: "https://visual-story.vercel.app/",
    githubUrl: "https://github.com/vucongchien/visual-story",
  },
];

interface ProjectsSection2026Props {
  projects?: ProjectItem[];
}

export function ProjectsSection2026({
  projects = DEFAULT_PROJECTS,
}: ProjectsSection2026Props) {
  const [visibleItems, setVisibleItems] = useState<Record<string, boolean>>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const id = el.dataset.projId;
            if (id) {
              setVisibleItems((prev) => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.02, rootMargin: "80px 0px 0px 0px" }
    );

    const items = sectionRef.current?.querySelectorAll("[data-proj-id]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="w-full bg-white text-black py-10 md:py-16 select-text scroll-mt-6"
    >
      {/* 
        GRID 6 KHÚC (6-COLUMN SYSTEM):
        - Khúc 1: Bỏ trống (offset đầu)
        - Khúc 2, 3, 4, 5: Nội dung Projects (chiếm 4 khúc giữa)
        - Khúc 6: Bỏ trống (offset đuôi)
      */}
      <div className="w-full grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8 px-6 sm:px-10 md:px-0 items-start">
        <div className="md:col-start-2 md:col-span-4 flex flex-col items-start text-left space-y-12 md:space-y-14">
          {/* Tiêu đề Section to, in đậm, phong cách Editorial, không gạch chân */}
          <div className="w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black uppercase font-serif">
              PROJECTS
            </h2>
          </div>

          {/* Danh sách Dự án tiêu biểu (Bố cục thoáng đãng, khoảng thở rộng rãi chuẩn Editorial) */}
          <div className="w-full space-y-14 sm:space-y-16 md:space-y-20">
            {projects.map((project, index) => {
              const isVisible = visibleItems[project.id];

              return (
                <article
                  key={project.id}
                  data-proj-id={project.id}
                  style={{
                    transitionDelay: `${index * 90}ms`,
                  }}
                  className={`w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-start group transition-all duration-500 ease-out will-change-transform border-b border-neutral-100/80 pb-12 sm:pb-14 md:pb-16 last:border-b-0 last:pb-0 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  }`}
                >
                  {/* CỘT TRÁI (7 PHẦN): THÔNG TIN DỰ ÁN TINH GỌN (CANH TRÊN CÙNG) */}
                  <div className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-5">
                    {/* Header: Số thứ tự + Tên */}
                    <div className="flex flex-col space-y-1.5">
                      <div className="flex items-baseline gap-2.5">
                        <span className="font-serif text-xs text-neutral-400">
                          {project.index}.
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-black">
                          {project.title}
                        </h3>
                      </div>

                      {/* Subtitle: Vai trò & Thời gian */}
                      <p className="font-serif text-xs text-neutral-500">
                        {project.category} · {project.period}
                      </p>
                    </div>

                    {/* Mô tả ngắn gọn súc tích dạng gạch đầu dòng */}
                    <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                      {Array.isArray(project.description) ? (
                        project.description.map((desc) => (
                          <li key={desc.slice(0, 30)} className="flex items-start gap-2">
                            <span className="text-neutral-400 select-none">-</span>
                            <span>{desc}</span>
                          </li>
                        ))
                      ) : (
                        <li className="flex items-start gap-2">
                          <span className="text-neutral-400 select-none">-</span>
                          <span>{project.description}</span>
                        </li>
                      )}
                    </ul>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 pt-2 sm:pt-3">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="font-serif text-xs text-neutral-600 bg-neutral-100/70 px-2.5 py-0.5 rounded-none"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CỘT PHẢI (5 PHẦN): KHUNG HÌNH ẢNH PREVIEW GIAO DIỆN + NÚT ACTION CANH PHẢI DƯỚI HÌNH */}
                  {project.image && (
                    <div className="lg:col-span-5 w-full flex flex-col space-y-3">
                      <a
                        href={project.demoUrl || project.githubUrl || "#"}
                        target={project.demoUrl || project.githubUrl ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="group/img block w-full relative rounded-md overflow-hidden border border-neutral-200 bg-white shadow-xs hover:shadow-sm hover:border-neutral-400 transition-all duration-300 focus:outline-none"
                        aria-label={`View details for ${project.title}`}
                      >
                        {/* Top Browser Bar Minimalist */}
                        <div className="w-full h-5 bg-neutral-50 border-b border-neutral-200/70 px-2 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                          <span className="font-serif text-nano text-neutral-400 ml-1 truncate">
                            {project.demoUrl ? project.demoUrl.replace("https://", "") : project.title}
                          </span>
                        </div>

                        {/* Image Frame */}
                        <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 380px"
                            className="object-cover object-top transition-transform duration-500 ease-out group-hover/img:scale-[1.03]"
                          />
                        </div>
                      </a>

                      {/* Action Buttons: Đặt sát hình, canh trái và dưới, có hiệu ứng xoay laser beam */}
                      <div className="flex items-center justify-start gap-2.5 pt-1 font-serif text-xs">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative p-[1.5px] rounded overflow-hidden inline-flex items-center group/btn focus:outline-none"
                            aria-label={`View live demo for ${project.title}`}
                          >
                            <span className="absolute inset-[-150%] opacity-0 group-hover:opacity-100 animate-border-beam-slow transition-opacity duration-300 pointer-events-none bg-laser-beam" />
                            <span className="absolute inset-0 rounded border border-neutral-200 pointer-events-none" />
                            <span className="relative px-2.5 py-1 bg-white text-neutral-700 group-hover/btn:text-black rounded-xs flex items-center gap-1 transition-colors z-10">
                              Live Demo
                              <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                                ↗
                              </span>
                            </span>
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative p-[1.5px] rounded overflow-hidden inline-flex items-center group/btn focus:outline-none"
                            aria-label={`View frontend source code for ${project.title}`}
                          >
                            <span className="absolute inset-[-150%] opacity-0 group-hover:opacity-100 animate-border-beam-slow transition-opacity duration-300 pointer-events-none bg-laser-beam" />
                            <span className="absolute inset-0 rounded border border-neutral-200 pointer-events-none" />
                            <span className="relative px-2.5 py-1 bg-white text-neutral-700 group-hover/btn:text-black rounded-xs flex items-center gap-1 transition-colors z-10">
                              {project.githubBackendUrl ? "FE Source" : "Source"}
                              <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                                ↗
                              </span>
                            </span>
                          </a>
                        )}

                        {project.githubBackendUrl && (
                          <a
                            href={project.githubBackendUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative p-[1.5px] rounded overflow-hidden inline-flex items-center group/btn focus:outline-none"
                            aria-label={`View backend source code for ${project.title}`}
                          >
                            <span className="absolute inset-[-150%] opacity-0 group-hover:opacity-100 animate-border-beam-slow transition-opacity duration-300 pointer-events-none bg-laser-beam" />
                            <span className="absolute inset-0 rounded border border-neutral-200 pointer-events-none" />
                            <span className="relative px-2.5 py-1 bg-white text-neutral-700 group-hover/btn:text-black rounded-xs flex items-center gap-1 transition-colors z-10">
                              BE Source
                              <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                                ↗
                              </span>
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
