import Diamond from "./Diamond";
import { cn } from "@/lib/utils";

export type SectionDividerVariant = "slate" | "indigo";

interface SectionDividerProps {
  label: string;
  variant?: SectionDividerVariant;
  className?: string;
}

const variants = {
  slate: {
    line: "bg-slate-200",
    text: "text-slate-400",
    diamond: "indigo-light" as const,
  },
  indigo: {
    line: "bg-indigo-200",
    text: "text-indigo-400",
    diamond: "indigo-light" as const,
  },
} as const;

export default function SectionDivider({
  label,
  variant = "slate",
  className,
}: SectionDividerProps) {
  const current = variants[variant] || variants.slate;

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div className={cn("flex-1 h-px", current.line)} />
      <Diamond size="xs" color={current.diamond} />
      <span className={cn("text-xs font-mono select-none", current.text)}>
        {label}
      </span>
      <Diamond size="xs" color={current.diamond} />
      <div className={cn("flex-1 h-px", current.line)} />
    </div>
  );
}
