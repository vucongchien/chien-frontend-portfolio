"use client";

import { useEffect, useState } from "react";

/**
 * Scroll progress indicator — thanh dọc bên phải màn hình
 * Hiển thị các dash marks cho biết vị trí scroll hiện tại
 */

function getDashClass(isCurrent: boolean, isActive: boolean) {
  if (isCurrent) {
    return "w-1 h-5 bg-indigo-600";
  }
  if (isActive) {
    return "w-0.5 h-3 bg-indigo-400";
  }
  return "w-0.5 h-3 bg-slate-300";
}

const TOTAL_DASHES = 8;

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(Math.min(progress, 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2">
      {Array.from({ length: TOTAL_DASHES }, (_, index) => {
        const dashProgress = index / TOTAL_DASHES;
        const isActive = scrollProgress >= dashProgress;
        const isCurrent =
          Math.abs(scrollProgress - dashProgress) < 1 / TOTAL_DASHES;

        return (
          <div
            key={index}
            className={`transition-all duration-300 rounded-full ${getDashClass(isCurrent, isActive)}`}
          />
        );
      })}
    </div>
  );
}
