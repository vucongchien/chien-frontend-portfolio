"use client";

import React, { useEffect, useRef } from "react";
import {
  AI_LOGOS,
  FRONTEND_LOGOS,
  BACKEND_LOGOS,
  TechLogo,
} from "./techPipes.data";

function PipeItem({ item }: { item: TechLogo }) {
  return (
    <div
      title={item.name}
      className="flex flex-col items-center justify-center gap-1 group/item py-1 w-full hover:scale-110 transition-transform cursor-pointer select-none"
    >
      {item.icon}
      <span className="font-serif text-xs font-normal text-neutral-800 tracking-tight text-center leading-tight">
        {item.name}
      </span>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   ỐNG DÒNG CHẢY LOGO CÓ THỂ CUỘN CHUỘT / TOUCH (INTERACTIVE SCROLLABLE PIPE)
   ══════════════════════════════════════════════════════════════════ */
function InteractiveStreamPipe({
  items,
  direction = "up",
}: {
  items: TechLogo[];
  direction?: "up" | "down";
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);
  const isInteractingRef = useRef(false);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) {
      return;
    }

    // Khởi tạo vị trí cuộn ban đầu
    if (direction === "down" && el.scrollTop === 0) {
      el.scrollTop = el.scrollHeight / 2;
    }

    let animationFrameId = 0;
    const speed = direction === "up" ? 0.5 : -0.5;

    const tick = () => {
      if (!isHoveredRef.current && !isInteractingRef.current && el) {
        el.scrollTop += speed;

        const halfHeight = el.scrollHeight / 2;
        if (direction === "up" && el.scrollTop >= halfHeight) {
          el.scrollTop -= halfHeight;
        } else if (direction === "down" && el.scrollTop <= 0) {
          el.scrollTop += halfHeight;
        }
      }
      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, [direction]);

  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) {
      return;
    }
    const halfHeight = el.scrollHeight / 2;
    if (el.scrollTop >= halfHeight) {
      el.scrollTop -= halfHeight;
    } else if (el.scrollTop <= 0) {
      el.scrollTop += halfHeight;
    }
  };

  // Nhân đôi mảng với key theo lượt để tạo luồng cuộn vô tận mượt mà
  const streamItems = [
    ...items.map((item) => ({ ...item, streamKey: `round1-${item.id}` })),
    ...items.map((item) => ({ ...item, streamKey: `round2-${item.id}` })),
  ];

  return (
    <div
      ref={scrollContainerRef}
      onScroll={handleScroll}
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
      onTouchStart={() => {
        isInteractingRef.current = true;
      }}
      onTouchEnd={() => {
        isInteractingRef.current = false;
      }}
      className="relative flex-1 h-full overflow-y-auto rounded-2xl border border-neutral-200/80 bg-neutral-50/50 py-3 flex justify-center [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden mask-pipe-fade cursor-grab active:cursor-grabbing"
    >
      <div className="flex flex-col items-center gap-3.5 w-full">
        {streamItems.map((item) => (
          <PipeItem key={item.streamKey} item={item} />
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   MAIN COMPONENT: 3 ỐNG LOGO CÓ CHỮ SUB VÀ CHO PHÉP SCROLL (TECH PIPES 2026)
   ══════════════════════════════════════════════════════════════════ */
export function TechPipes2026() {
  return (
    <div className="flex items-center justify-center w-full select-none py-1">
      {/* 3 Ống nước (Độ dài h-[250px] sm:h-[275px], có thể scroll chuột/touch) */}
      <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 w-[260px] sm:w-[290px] h-[250px] sm:h-[275px]">
        {/* Ống 1: AI (Trôi Lên ↑) */}
        <InteractiveStreamPipe items={AI_LOGOS} direction="up" />

        {/* Ống 2: Frontend (Trôi Xuống ↓) */}
        <InteractiveStreamPipe items={FRONTEND_LOGOS} direction="down" />

        {/* Ống 3: Backend (Trôi Lên ↑) */}
        <InteractiveStreamPipe items={BACKEND_LOGOS} direction="up" />
      </div>
    </div>
  );
}
