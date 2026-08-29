import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "tech" | "period" | "category" | "pill-white" | "pill-slate";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  tech: "inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[10px] sm:text-xs font-medium text-slate-600 border border-slate-200/60 transition-colors duration-200 group-hover:bg-indigo-50 group-hover:text-indigo-700 group-hover:border-indigo-200/60",
  period:
    "inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-indigo-600 border border-indigo-100",
  category:
    "inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-semibold",
  "pill-white":
    "inline-flex px-4 py-1.5 border border-slate-200 w-fit rounded-full bg-white text-sm text-slate-600",
  "pill-slate":
    "inline-flex px-4 py-1.5 border border-slate-200 w-fit rounded-full bg-slate-50 text-sm text-slate-600",
};

export default function Badge({
  children,
  variant = "tech",
  className,
}: BadgeProps) {
  return (
    <span className={cn(variants[variant], className)}>{children}</span>
  );
}
