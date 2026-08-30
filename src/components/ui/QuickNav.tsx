"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface QuickNavItem {
  id: string;
  label: string;
}

export interface QuickNavProps {
  items: QuickNavItem[];
  offsetY?: number;
  className?: string;
  ariaLabel?: string;
}

function getSafeElementById(id: string): HTMLElement | null {
  try {
    const escaped = typeof CSS !== "undefined" && CSS.escape ? CSS.escape(id) : id;
    return document.querySelector(`[id="${escaped}"]`);
  } catch {
    return null;
  }
}

export default function QuickNav({
  items,
  offsetY = 40,
  className,
  ariaLabel = "Điều hướng nhanh",
}: QuickNavProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0.1 }
    );

    items.forEach(({ id }) => {
      const element = getSafeElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  const handleScrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = getSafeElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - offsetY;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
    }
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <aside
      aria-label={ariaLabel}
      className={cn(
        "hidden xl:block fixed right-6 2xl:right-10 top-40 z-20 select-none pointer-events-auto",
        className
      )}
    >
      <nav className="flex flex-col gap-2">
        {items.map(({ id, label }) => {
          const isActive = activeId === id;

          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleScrollTo(id, e)}
              title={label}
              className={cn(
                "group flex items-center gap-2 text-xs py-1 transition-all duration-150 cursor-pointer max-w-[200px]",
                isActive
                  ? "text-slate-900 font-semibold"
                  : "text-slate-400 hover:text-slate-800"
              )}
            >
              <span
                className={cn(
                  "w-1.5 h-1.5 rounded-full shrink-0 transition-transform duration-150 bg-indigo-600",
                  isActive
                    ? "scale-125 opacity-100 ring-2 ring-indigo-200"
                    : "opacity-30 group-hover:opacity-100"
                )}
                aria-hidden="true"
              />
              <span className="truncate">{label}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
