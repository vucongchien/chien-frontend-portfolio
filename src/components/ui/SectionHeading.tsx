import type { ReactNode } from "react";
import Diamond from "./Diamond";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
  diamondColor?: "indigo" | "amber" | "indigo-light";
}

export default function SectionHeading({
  children,
  className,
  diamondColor = "indigo",
}: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "text-2xl sm:text-3xl font-bold text-slate-900 inline-flex items-center gap-2",
        className
      )}
    >
      {children}
      <Diamond size="sm" color={diamondColor} />
    </h2>
  );
}
