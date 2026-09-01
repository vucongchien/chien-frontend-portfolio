"use client";

import React, { useEffect, useRef, useState } from "react";
import { TechPipes2026 } from "./TechPipes2026";

interface AboutMeSection2026Props {
  bioParagraph1?: string;
  bioParagraph2?: string;
}

export function AboutMeSection2026({
  bioParagraph1 = "Tôi là Vũ Công Chiến, một Software Engineer tập trung phát triển các sản phẩm web hiện đại với trải nghiệm mượt mà và kiến trúc giao diện sạch.",
  bioParagraph2 = "Tôi đam mê nghiên cứu và ứng dụng AI Agents, phát triển Frontend với React, Next.js và Backend với Node.js, FastAPI, luôn ưu tiên tối ưu hiệu năng và thiết kế hệ thống bền vững. Hiện là sinh viên Kỹ thuật Phần mềm tại Học viện Công nghệ Bưu chính Viễn thông (PTIT).",
}: AboutMeSection2026Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [internshipMonths, setInternshipMonths] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  /* Kích hoạt IntersectionObserver khi cuộn tới section */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* Hiệu ứng đếm số tăng dần mượt mà khi isVisible = true */
  useEffect(() => {
    if (!isVisible) {
      return;
    }

    /* Thời lượng đếm 1.2 giây */
    const duration = 1200;
    const startTime = performance.now();

    const updateCounters = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      /* Easing cubic-out */
      const easeProgress = 1 - (1 - progress) ** 3;

      setInternshipMonths(Math.floor(easeProgress * 6));
      setProjectsCount(Math.floor(easeProgress * 12));

      if (progress < 1) {
        requestAnimationFrame(updateCounters);
      } else {
        setInternshipMonths(6);
        setProjectsCount(12);
      }
    };

    requestAnimationFrame(updateCounters);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white text-black py-10 md:py-16 select-text"
    >
      {/* 
        GRID 6 KHÚC (6-COLUMN SYSTEM):
        - Khúc 1: Bỏ trống (offset đầu)
        - Khúc 2 & 3: Cột giới thiệu About + 2 Mini Cards (chiếm 2 khúc)
        - Khúc 4, 5 & 6: Cột Tech Pipes (chiếm 3 khúc, hiệu ứng ống nổi căn giữa)
      */}
      <div className="w-full grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8 px-6 sm:px-10 md:px-0 items-start">
        {/* ══════════════════════════════════════════════════════════════════
            CỘT TRÁI: KHÚC 2 VÀ 3 (ABOUT CHỮ TO + BỘ 2 CARD CHỈ SỐ NHỎ GỌN)
            ══════════════════════════════════════════════════════════════════ */}
        <div className="md:col-start-2 md:col-span-2 flex flex-col items-start text-left space-y-10 md:space-y-12">
          {/* Tiêu đề Section to, in đậm, phong cách Editorial */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black uppercase font-serif">
            ABOUT
          </h2>

          {/* Đoạn văn giới thiệu bản thân nổi bật, chữ to phong cách báo chí */}
          <div className="space-y-4 font-sans text-left">
            <p className="font-serif text-base sm:text-lg md:text-xl text-neutral-900 font-normal leading-relaxed tracking-tight">
              {bioParagraph1}
            </p>
            <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
              {bioParagraph2}
            </p>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              BỘ 2 CHỈ SỐ THỰC CHIẾN DẠNG CARD NHỎ GỌN
              ══════════════════════════════════════════════════════════════ */}
          <div className="w-full grid grid-cols-2 gap-3 pt-2">
            {/* Card 1: Tháng thực tập (Điểm nhấn Champagne Gold - Palette 4) */}
            <div className="bg-neutral-50/80 border border-neutral-200/60 rounded-md p-3 flex flex-col items-start transition-all hover:bg-neutral-100/60">
              <div className="flex items-baseline font-mono text-lg sm:text-xl font-bold text-black">
                <span>{internshipMonths}</span>
                <span className="text-palette-4 text-base font-normal ml-0.5">+</span>
              </div>
              <span className="font-mono text-3xs sm:text-2xs text-neutral-500 mt-0.5 leading-tight">
                Tháng thực tập
              </span>
            </div>

            {/* Card 2: Dự án đã build (Điểm nhấn Deep Teal - Palette 1) */}
            <div className="bg-neutral-50/80 border border-neutral-200/60 rounded-md p-3 flex flex-col items-start transition-all hover:bg-neutral-100/60">
              <div className="flex items-baseline font-mono text-lg sm:text-xl font-bold text-black">
                <span>{projectsCount}</span>
                <span className="text-palette-1 text-base font-normal ml-0.5">+</span>
              </div>
              <span className="font-mono text-3xs sm:text-2xs text-neutral-500 mt-0.5 leading-tight">
                Dự án đã build
              </span>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            CỘT PHẢI: KHÚC 4, 5, 6 (TECH PIPES CHIẾM TRỌN 3 KHÚC CÒN LẠI)
            ══════════════════════════════════════════════════════════════════ */}
        <div className="md:col-start-4 md:col-span-3 flex justify-center items-center w-full pt-6 sm:pt-8 md:pt-10">
          <TechPipes2026 />
        </div>
      </div>
    </section>
  );
}
