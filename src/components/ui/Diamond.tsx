import { cn } from "@/lib/utils";

type DiamondSize = "xs" | "sm" | "md" | "lg";
type DiamondColor = "indigo" | "amber" | "indigo-light" | "violet" | "emerald";

interface DiamondProps {
  size?: DiamondSize;
  color?: DiamondColor;
  className?: string;
}

const sizeMap: Record<DiamondSize, string> = {
  xs: "w-1.5 h-1.5",
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4",
};

const colorMap: Record<DiamondColor, string> = {
  indigo: "bg-indigo-600",
  "indigo-light": "bg-indigo-400",
  amber: "bg-amber-500",
  violet: "bg-violet-600",
  emerald: "bg-emerald-600",
};

export default function Diamond({
  size = "sm",
  color = "indigo",
  className,
}: DiamondProps) {
  return (
    <span
      className={cn(
        "inline-block rotate-45 shrink-0",
        sizeMap[size],
        colorMap[color],
        className
      )}
    />
  );
}
