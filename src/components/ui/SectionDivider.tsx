import Diamond from "./Diamond";
import { cn } from "@/lib/utils";

interface SectionDividerProps {
  label: string;
  theme?: "slate" | "indigo";
  className?: string;
}

export default function SectionDivider({
  label,
  theme = "slate",
  className,
}: SectionDividerProps) {
  const lineClass = theme === "indigo" ? "bg-indigo-200" : "bg-slate-200";
  const textClass = theme === "indigo" ? "text-indigo-400" : "text-slate-400";

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div className={cn("flex-1 h-px", lineClass)} />
      <Diamond size="xs" color="indigo-light" />
      <span className={cn("text-xs font-mono select-none", textClass)}>
        {label}
      </span>
      <Diamond size="xs" color="indigo-light" />
      <div className={cn("flex-1 h-px", lineClass)} />
    </div>
  );
}
