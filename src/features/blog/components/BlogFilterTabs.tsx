"use client";

import { cn } from "@/lib/utils";

interface BlogFilterTabsProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  className?: string;
}

export default function BlogFilterTabs({
  categories,
  activeCategory,
  onSelectCategory,
  className,
}: BlogFilterTabsProps) {
  const tabs = ["All", ...categories];

  return (
    <div className={cn("w-full border-b border-slate-200/80", className)}>
      <nav
        aria-label="Lọc theo chủ đề"
        className="flex items-center gap-6 sm:gap-8 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {tabs.map((tab) => {
          const isActive = activeCategory.toLowerCase() === tab.toLowerCase();

          return (
            <button
              key={tab}
              type="button"
              onClick={() => onSelectCategory(tab)}
              className={cn(
                "relative pb-3 text-sm sm:text-base transition-colors duration-150 whitespace-nowrap cursor-pointer",
                isActive
                  ? "text-slate-900 font-semibold"
                  : "text-slate-500 hover:text-slate-800 font-medium"
              )}
            >
              <span>{tab}</span>

              {/* Active Blue/Indigo underline bar exactly matching the design */}
              {isActive && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full"
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
