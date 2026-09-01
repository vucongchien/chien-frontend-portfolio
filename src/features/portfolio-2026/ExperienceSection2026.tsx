"use client";

import React, { useEffect, useRef, useState } from "react";

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location?: string;
  description: string[];
  techStack: string[];
}

const DEFAULT_EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-got-it",
    period: "05/2026 — Present",
    role: "AI-Native Software Engineer Intern",
    company: "Got It",
    description: [
      "Integrated Claude Code into the SDLC to analyze feature specs, author documentation, and deliver assigned tasks—collaborating closely with Mentors, BO, and QC while enforcing strict code quality.",
      "Evolved core backend workflows within a large, complex production architecture—adapting the voucher system and delivery operations to changing business requirements, state transitions, and asynchronous processing.",
      "Improved enterprise web portal UI/UX across internal domains, resolving complex display issues and ensuring accurate information and real-time state rendering.",
      "Prototyped a Zalo Mini App MVP in React with the intern team to demonstrate P2P voucher gifting flows.",
    ],
    techStack: ["Claude Code", "Voucher System", "Zalo Mini App", "Design System", "Design Document"],
  },
  {
    id: "exp-ads-agency",
    period: "03/2026 — 04/2026",
    role: "Frontend Developer Intern",
    company: "AdsAgency",
    description: [
      "Built and customized e-commerce websites using WordPress and WooCommerce.",
      "Improved user experience by optimizing layout, responsiveness, and product pages.",
    ],
    techStack: ["WordPress", "WooCommerce", "Frontend", "UI/UX Optimization", "Responsive Design"],
  },
];

interface ExperienceSection2026Props {
  experiences?: ExperienceItem[];
}

export function ExperienceSection2026({
  experiences = DEFAULT_EXPERIENCES,
}: ExperienceSection2026Props) {
  const [visibleItems, setVisibleItems] = useState<Record<string, boolean>>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Khởi tạo kích hoạt sớm với rootMargin để không bị khựng khi cuộn
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const id = el.dataset.expId;
            if (id) {
              setVisibleItems((prev) => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.02, rootMargin: "80px 0px 0px 0px" }
    );

    const items = sectionRef.current?.querySelectorAll("[data-exp-id]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FAFAFA] border-y border-neutral-200/50 text-black py-12 md:py-18 select-text"
    >
      {/* 
        GRID 6 KHÚC (6-COLUMN SYSTEM):
        - Khúc 1: Bỏ trống (offset đầu)
        - Khúc 2, 3, 4, 5: Nội dung Experience (chiếm 4 khúc giữa)
        - Khúc 6: Bỏ trống (offset đuôi)
      */}
      <div className="w-full grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8 px-6 sm:px-10 md:px-0 items-start">
        <div className="md:col-start-2 md:col-span-4 flex flex-col items-start text-left space-y-12 md:space-y-14">
          {/* Tiêu đề Section to, in đậm, phong cách Editorial, không gạch chân */}
          <div className="w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black uppercase font-serif">
              EXPERIENCE
            </h2>
          </div>

          {/* Danh sách Kinh nghiệm làm việc */}
          <div className="w-full space-y-10">
            {experiences.map((exp, index) => {
              const isVisible = visibleItems[exp.id];

              return (
                <div
                  key={exp.id}
                  data-exp-id={exp.id}
                  style={{
                    transitionDelay: `${index * 80}ms`,
                  }}
                  className={`w-full flex flex-col md:flex-row gap-2 md:gap-8 items-start group transition-all duration-500 ease-out will-change-transform ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  }`}
                >
                  {/* Thời gian + Điểm Node Gradient */}
                  <div className="w-full md:w-36 flex-shrink-0 pt-0.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-gradient-palette transition-all duration-300 flex-shrink-0" />
                    <span className="font-mono text-xs text-neutral-500 group-hover:text-black tracking-wider transition-colors">
                      {exp.period}
                    </span>
                  </div>

                  {/* Chi tiết công việc (Không đổi màu chữ khi hover) */}
                  <div className="flex-1 space-y-2.5">
                    {/* Chức danh & Công ty: In đậm, phân cách bằng dấu gạch ngang thanh lịch */}
                    <div className="flex flex-wrap items-baseline gap-x-2 sm:gap-x-2.5 gap-y-0.5">
                      <h3 className="font-serif text-base sm:text-lg font-bold text-black">
                        {exp.role}
                      </h3>
                      <span className="text-neutral-400 font-light select-none">—</span>
                      <span className="font-serif text-base sm:text-lg font-bold text-black">
                        {exp.company}
                      </span>
                      {exp.location && (
                        <span className="font-mono text-xs text-neutral-400 font-normal ml-1">
                          ({exp.location})
                        </span>
                      )}
                    </div>

                    {/* Mô tả thành tựu */}
                    <div className="space-y-1.5 pt-1">
                      {exp.description.map((desc) => (
                        <p
                          key={desc.slice(0, 30)}
                          className="text-sm text-neutral-700 font-light leading-relaxed tracking-normal"
                        >
                          — {desc}
                        </p>
                      ))}
                    </div>

                    {/* Tech Stack sử dụng */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="font-serif text-xs text-neutral-700 bg-white border border-neutral-200/80 px-2.5 py-0.5 rounded-none shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
