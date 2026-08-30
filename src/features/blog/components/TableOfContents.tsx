"use client";

import { useEffect, useState } from "react";
import type { BlogTocItem } from "@/types";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  items: BlogTocItem[];
  className?: string;
}

function getSafeElementById(id: string): HTMLElement | null {
  try {
    const escaped = typeof CSS !== "undefined" && CSS.escape ? CSS.escape(id) : id;
    return document.querySelector(`[id="${escaped}"]`);
  } catch {
    return null;
  }
}

export default function TableOfContents({
  items,
  className,
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState<boolean>(false);

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
      { rootMargin: "-10% 0px -70% 0px", threshold: 0.1 }
    );

    items.forEach(({ id }) => {
      const element = getSafeElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) {
    return null;
  }

  const handleScrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = getSafeElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + (globalThis.pageYOffset || 0) - 80;
      globalThis.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsMobileDrawerOpen(false);
    }
  };

  return (
    <>
      {/* ─── DESKTOP TOC (Nhỏ gọn, width hẹp w-48 ~ 192px, sát lề phải) ─── */}
      <div
        aria-label="Mục lục bài viết"
        className={cn(
          "hidden xl:block select-none transition-all duration-200 w-48 max-w-[192px] ml-auto",
          className
        )}
      >
        {isOpen ? (
          <div className="p-3 rounded-xl bg-white/95 backdrop-blur-xs border border-slate-200/80 shadow-2xs space-y-2.5">
            {/* Header with Title + Toggle Hide Button */}
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold">
                Mục lục
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-[11px] text-slate-400 hover:text-slate-800 transition-colors px-1 py-0.5 rounded hover:bg-slate-100 cursor-pointer"
                title="Ẩn mục lục"
                aria-label="Ẩn mục lục"
              >
                Ẩn ✕
              </button>
            </div>

            {/* TOC Items List — Font chữ 11px nhỏ gọn, truncate tinh tế */}
            <nav className="max-h-[60vh] overflow-y-auto pr-0.5 space-y-1 [scrollbar-width:thin]">
              <ul className="space-y-0.5 border-l border-slate-200/80 pl-2">
                {items.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <li
                      key={item.id}
                      className={cn(item.level === 3 ? "pl-2" : "pl-0")}
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => handleScrollTo(item.id, e)}
                        title={item.text}
                        className={cn(
                          "block text-[11px] leading-snug py-0.5 transition-colors duration-150 rounded-sm truncate",
                          isActive
                            ? "text-indigo-600 font-semibold"
                            : "text-slate-500 hover:text-slate-900"
                        )}
                      >
                        {item.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        ) : (
          /* Collapsed State on Desktop — Căn sát phải */
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-slate-200/90 text-xs text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-2xs transition-all duration-150 cursor-pointer"
              title="Mở mục lục bài viết"
              aria-label="Mở mục lục"
            >
              <span className="text-[12px]" aria-hidden="true">
                📑
              </span>
              <span className="font-medium text-xs">Mục lục</span>
            </button>
          </div>
        )}
      </div>

      {/* ─── MOBILE TOC (Bottom Floating Action Button đồng bộ màu trắng giống Desktop) ─── */}
      <div className="block xl:hidden fixed bottom-6 right-4 sm:right-6 z-40">
        <button
          type="button"
          onClick={() => setIsMobileDrawerOpen((prev) => !prev)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-slate-200/90 text-slate-700 hover:text-slate-900 hover:border-slate-300 text-xs font-medium shadow-md transition-all cursor-pointer"
          aria-label="Xem mục lục bài viết"
        >
          <span className="text-xs" aria-hidden="true">
            📑
          </span>
          <span>Mục lục</span>
        </button>

        {/* Mobile Modal Drawer */}
        {isMobileDrawerOpen && (
          <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:p-4">
            {/* Backdrop Button for dismiss */}
            <button
              type="button"
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs w-full h-full cursor-default border-none"
              onClick={() => setIsMobileDrawerOpen(false)}
              aria-label="Đóng mục lục"
            />

            {/* Content Drawer */}
            <div className="relative w-full max-w-lg bg-white rounded-t-2xl sm:rounded-2xl p-5 max-h-[75vh] flex flex-col shadow-2xl z-10 animate-in slide-in-from-bottom-5 duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                  <span>📑</span>
                  <span>Mục lục bài viết</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setIsMobileDrawerOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-700 text-sm cursor-pointer"
                  aria-label="Đóng mục lục"
                >
                  ✕
                </button>
              </div>

              <div className="overflow-y-auto pt-3 pr-1 space-y-1 flex-1">
                <ul className="space-y-1.5 border-l border-slate-200 pl-3">
                  {items.map((item) => {
                    const isActive = activeId === item.id;
                    return (
                      <li
                        key={item.id}
                        className={cn(item.level === 3 ? "pl-3" : "pl-0")}
                      >
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => handleScrollTo(item.id, e)}
                          className={cn(
                            "block text-sm py-1 transition-colors rounded-sm",
                            isActive
                              ? "text-indigo-600 font-semibold"
                              : "text-slate-600 hover:text-slate-900"
                          )}
                        >
                          {item.text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
