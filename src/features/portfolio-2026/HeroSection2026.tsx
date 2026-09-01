"use client";

import React, { useEffect, useState } from "react";
import { LineArtPortrait } from "./LineArtPortrait";
import { ContactList2026 } from "./ContactList2026";

interface HeroSection2026Props {
  name?: string;
  role?: string;
  imageSrc?: string;
}

export function HeroSection2026({
  name = "VŨ CÔNG CHIẾN",
  role = "A software engineer",
  imageSrc = "/avatar.png",
}: HeroSection2026Props) {
  // Hiệu ứng Typewriter gõ từng chữ mượt mà tuân thủ React Compiler
  const [displayedCount, setDisplayedCount] = useState(0);

  useEffect(() => {
    if (displayedCount < role.length) {
      const timer = setTimeout(() => {
        setDisplayedCount((prev) => prev + 1);
      }, 75);
      return () => clearTimeout(timer);
    }
  }, [displayedCount, role.length]);

  const displayedRole = role.slice(0, displayedCount);
  const isTypingDone = displayedCount >= role.length;

  return (
    <section className="relative w-full h-screen min-h-screen bg-white text-black flex flex-col md:flex-row overflow-hidden select-text">
      {/* ══════════════════════════════════════════════════════════════════
          CỘT TRÁI: HÌNH ẢNH MINH HỌA NGHỆ THUẬT (FULL HEIGHT)
          ══════════════════════════════════════════════════════════════════ */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center bg-white p-0 m-0 overflow-hidden">
        <LineArtPortrait imageSrc={imageSrc} />
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          CỘT PHẢI: THÔNG TIN SÁT TRÁI, TÊN & ROLE Ở GIỮA, LIÊN HỆ Ở DƯỚI CÙNG
          ══════════════════════════════════════════════════════════════════ */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-between bg-white px-6 sm:px-10 md:px-0 md:pl-4 lg:pl-8 py-6 md:py-12 lg:py-16">
        {/* MIDDLE: TÊN & ROLE VỚI TYPEWRITER ANIMATION */}
        <div className="my-auto flex flex-col items-start text-left space-y-2">
          <h1
            id="hero-name-placeholder"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black uppercase font-serif whitespace-nowrap opacity-0 select-none pointer-events-none"
            aria-hidden="true"
          >
            {name}
          </h1>

          <div className="flex items-center gap-1.5 min-h-[32px] pl-1.5 sm:pl-2">
            <p className="text-base sm:text-lg md:text-xl text-neutral-700 font-light tracking-wide font-sans">
              {displayedRole}
            </p>
            {/* Con trỏ nhấp nháy chuyển màu gradient 4 màu */}
            <span
              className={`inline-block w-[2px] h-5 bg-gradient-palette ${
                isTypingDone ? "animate-type-cursor" : "opacity-100"
              }`}
            />
          </div>
        </div>

        {/* BOTTOM: CTA NĂNG LƯỢNG BỐC LỬA + LIÊN HỆ HIỆN TỪ PHẢI QUA TRÁI */}
        <div className="w-full flex flex-col items-start text-left space-y-5 pt-4">
          {/* CTA BUTTONS: SAO VÀNG NHẤP NHÁY Ở IDLE, BỐC LỬA ANIME ENERGY Ở HOVER */}
          <div className="flex items-center flex-wrap gap-3">
            {/* NÚT 1: VIEW PROJECTS */}
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                animationDelay: "0ms",
              }}
              className="group relative inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xs border border-neutral-200 bg-white text-neutral-900 font-mono text-xs overflow-hidden transition-all duration-300 hover:border-transparent hover:text-black focus:outline-none cursor-pointer animate-slide-in-right"
              aria-label="Scroll down to view projects"
            >
              {/* LỚP 1: BỐC LỬA NĂNG LƯỢNG ANIME CYAN/MINT/TEAL (FLAME AURA) KHI HOVER */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 animate-flame-energy bg-flame-cyan" />

              {/* LỚP 2: CÁC VỆT CHÉM NĂNG LƯỢNG ANIME (ENERGY SLASHES) PHÓNG LÊN */}
              <span className="absolute inset-0 overflow-hidden pointer-events-none -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="absolute -bottom-8 left-2 w-1.5 h-16 bg-gradient-to-t from-transparent via-palette-2 to-palette-3 -rotate-45 translate-y-8 group-hover:-translate-y-12 transition-transform duration-700 ease-out" />
                <span className="absolute -bottom-8 left-8 w-1 h-20 bg-gradient-to-t from-transparent via-palette-3 to-palette-4 -rotate-35 translate-y-8 group-hover:-translate-y-14 transition-transform duration-500 delay-75 ease-out" />
                <span className="absolute -bottom-8 right-4 w-1.5 h-14 bg-gradient-to-t from-transparent via-palette-2 to-white -rotate-25 translate-y-8 group-hover:-translate-y-10 transition-transform duration-600 delay-100 ease-out" />
              </span>

              {/* LỚP 3: TIA SÁNG LASER RAY CHẠY QUANH VIỀN */}
              <span className="absolute inset-[-150%] opacity-0 group-hover:opacity-100 animate-border-beam transition-opacity duration-300 pointer-events-none -z-20 bg-laser-beam" />

              {/* ICON SAO VÀNG 4 CÁNH (IDLE: NHẤP NHÁY VÀNG NHẸ; HOVER: RỰC RỠ BÙNG NĂNG LƯỢNG) */}
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5 text-palette-star animate-golden-twinkle group-hover:text-palette-2 transition-all duration-500 group-hover:rotate-45 group-hover:scale-125 shrink-0"
                fill="currentColor"
              >
                <path d="M12 0 C12 7 17 12 24 12 C17 12 12 17 12 24 C12 17 7 12 0 12 C7 12 12 7 12 0 Z" />
              </svg>

              <span className="font-semibold tracking-tight">View Projects</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-y-0.5 text-neutral-400 group-hover:text-black font-bold">
                ↓
              </span>
            </a>

            {/* NÚT 2: GET IN TOUCH */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vucongchien204@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://mail.google.com/mail/?view=cm&fs=1&to=vucongchien204@gmail.com", "_blank", "noopener,noreferrer");
              }}
              style={{
                animationDelay: "120ms",
              }}
              className="group relative inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xs border border-neutral-200 bg-white text-neutral-900 font-mono text-xs overflow-hidden transition-all duration-300 hover:border-transparent hover:text-black focus:outline-none cursor-pointer animate-slide-in-right"
              aria-label="Send email"
            >
              {/* LỚP 1: BỐC LỬA NĂNG LƯỢNG ANIME (FLAME AURA) KHI HOVER */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 animate-flame-energy bg-flame-mint" />

              {/* LỚP 2: CÁC VỆT CHÉM NĂNG LƯỢNG ANIME PHÓNG LÊN */}
              <span className="absolute inset-0 overflow-hidden pointer-events-none -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="absolute -bottom-8 left-3 w-1.5 h-16 bg-gradient-to-t from-transparent via-palette-3 to-palette-4 -rotate-40 translate-y-8 group-hover:-translate-y-12 transition-transform duration-700 ease-out" />
                <span className="absolute -bottom-8 right-6 w-1 h-18 bg-gradient-to-t from-transparent via-palette-2 to-white -rotate-30 translate-y-8 group-hover:-translate-y-14 transition-transform duration-500 delay-75 ease-out" />
              </span>

              {/* LỚP 3: TIA SÁNG LASER RAY CHẠY QUANH VIỀN */}
              <span className="absolute inset-[-150%] opacity-0 group-hover:opacity-100 animate-border-beam transition-opacity duration-300 pointer-events-none -z-20 bg-laser-beam" />

              {/* ICON SAO VÀNG 4 CÁNH (IDLE: NHẤP NHÁY VÀNG NHẸ; HOVER: RỰC RỠ BÙNG NĂNG LƯỢNG) */}
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5 text-palette-star animate-golden-twinkle group-hover:text-palette-1 transition-all duration-500 group-hover:rotate-45 group-hover:scale-125 shrink-0"
                fill="currentColor"
              >
                <path d="M12 0 C12 7 17 12 24 12 C17 12 12 17 12 24 C12 17 7 12 0 12 C7 12 12 7 12 0 Z" />
              </svg>

              <span className="font-semibold tracking-tight">Get in Touch</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-neutral-400 group-hover:text-black font-bold">
                ↗
              </span>
            </a>
          </div>

          <ContactList2026 />
        </div>
      </div>
    </section>
  );
}
