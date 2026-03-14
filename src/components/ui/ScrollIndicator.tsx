"use client";

import { useEffect, useState } from "react";

/**
 * Scroll progress indicator — thanh dọc bên phải màn hình
 * Hiển thị các dash marks cho biết vị trí scroll hiện tại
 * Tham khảo: hình user gửi — các gạch ngang nhỏ bên phải
 */

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function ScrollIndicator() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(Math.min(progress, 1));

      // Determine active section
      const viewportMiddle = scrollTop + window.innerHeight / 2;
      const docTotal = document.documentElement.scrollHeight;
      const sectionHeight = docTotal / SECTIONS.length;

      const index = Math.min(
        Math.floor(viewportMiddle / sectionHeight),
        SECTIONS.length - 1
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalDashes = 8;

  return (
    <div className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2">
      {Array.from({ length: totalDashes }, (_, i) => {
        const dashProgress = i / totalDashes;
        const isActive = scrollProgress >= dashProgress;
        const isCurrent =
          Math.abs(scrollProgress - dashProgress) < 1 / totalDashes;

        return (
          <div
            key={i}
            className={`
              transition-all duration-300 rounded-full
              ${isCurrent
                ? "w-1 h-5 bg-indigo-600"
                : isActive
                  ? "w-0.5 h-3 bg-indigo-400"
                  : "w-0.5 h-3 bg-slate-300"
              }
            `}
          />
        );
      })}
    </div>
  );
}
