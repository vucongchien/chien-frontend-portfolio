"use client";

import React, { useEffect, useRef, useState } from "react";

interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issuedDate: string;
  credentialId?: string;
  verifyUrl?: string;
  skills?: string[];
}

const CERTIFICATES: CertificateItem[] = [
  {
    id: "nvidia-ai-anomaly",
    title: "Applications of AI for Anomaly Detection",
    issuer: "NVIDIA",
    issuedDate: "01/2026",
    credentialId: "tsySqX7jSfWy5q22OMI6hw",
    verifyUrl: "https://learn.nvidia.com/certificates?id=sjCkmytJQ3O9flJumRlXOA",
    skills: ["Deep Learning", "Anomaly Detection", "AI Architecture"],
  },
  {
    id: "gemini-faculty",
    title: "Gemini Certified Faculty",
    issuer: "Google / United Latino Students Association",
    issuedDate: "01/2026 — 01/2029",
    credentialId: "172555865",
    verifyUrl: "https://edu.google.accredible.com/696948c1-34bc-4187-a48a-9dfdb0864ba2",
    skills: ["Gemini AI", "Prompt Engineering", "AI Workflows"],
  },
  {
    id: "gemini-student",
    title: "Gemini Certified University Student",
    issuer: "Google / United Latino Students Association",
    issuedDate: "01/2026 — 01/2029",
    credentialId: "172551049",
    verifyUrl: "https://edu.google.accredible.com/302ac464-4a6c-46eb-b35d-f8e88ddecc2e",
    skills: ["Multimodal AI", "AI Agents", "Problem Solving"],
  },
  {
    id: "nextjs-fundamentals",
    title: "Next.js App Router Fundamentals",
    issuer: "Vercel",
    issuedDate: "10/2025",
    credentialId: "dashboard-app",
    verifyUrl: "https://nextjs.org/learn/certificate?course=dashboard-app&user=102054&certId=dashboard-app-102054-1760182512603",
    skills: ["Next.js App Router", "Tailwind CSS", "Full-Stack Development"],
  },
  {
    id: "toeic",
    title: "TOEIC Certificate",
    issuer: "IIG / ETS",
    issuedDate: "Language Proficiency",
    skills: ["English Communication", "Technical Documentation"],
  },
];

export function CredentialsSection2026() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05, rootMargin: "60px 0px 0px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white text-black py-10 md:py-16 select-text"
    >
      {/* 
        GRID 6 KHÚC (6-COLUMN SYSTEM):
        - Khúc 1: Bỏ trống (offset đầu)
        - Khúc 2, 3, 4, 5: Nội dung Certifications & Activities (chiếm 4 khúc giữa)
        - Khúc 6: Bỏ trống (offset đuôi)
      */}
      <div className="w-full grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8 px-6 sm:px-10 md:px-0 items-start">
        <div className="md:col-start-2 md:col-span-4 flex flex-col items-start text-left space-y-12 md:space-y-14">
          {/* Tiêu đề Section to, in đậm, phong cách Editorial, không gạch chân */}
          <div className="w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black uppercase font-serif">
              CERTIFICATIONS & ACTIVITIES
            </h2>
          </div>

          {/* Bố cục Hàng Dọc (Vertical Flow) tối giản, tuần tự, chuẩn phong cách Editorial */}
          <div
            className={`w-full flex flex-col space-y-8 sm:space-y-10 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {/* DANH SÁCH CHỨNG CHỈ */}
            <div className="space-y-4 w-full">
              {CERTIFICATES.map((cert) => (
                <div
                  key={cert.id}
                  className="flex flex-col space-y-0.5"
                >
                  <div className="flex items-baseline gap-2">
                    {cert.verifyUrl ? (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/cert inline-flex items-baseline gap-1.5 focus:outline-none"
                        aria-label={`Xác thực chứng chỉ ${cert.title}`}
                      >
                        <span className="font-serif text-base sm:text-lg font-bold text-neutral-900 group-hover/cert:text-palette-1 transition-colors">
                          {cert.title}
                        </span>
                        <span className="font-mono text-xs text-neutral-400 group-hover/cert:text-palette-1 group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5 transition-all">
                          ↗
                        </span>
                      </a>
                    ) : (
                      <span className="font-serif text-base sm:text-lg font-bold text-neutral-900">
                        {cert.title}
                      </span>
                    )}
                  </div>

                  <p className="font-mono text-xs text-neutral-400">
                    {cert.issuer} · {cert.issuedDate}
                  </p>
                </div>
              ))}
            </div>

            {/* HOẠT ĐỘNG CLB */}
            <div className="w-full flex flex-col space-y-0.5">
              <div className="flex items-baseline gap-2">
                <h3 className="font-serif text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                  BCN CLB Cờ vua PTIT
                </h3>
                <span className="font-mono text-xs text-neutral-400">
                  (2024 — 2025)
                </span>
              </div>
              <p className="font-mono text-xs text-neutral-400">
                Dẫn dắt, quản lý đội nhóm CLB, tham gia nhiều hoạt động liên quan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
