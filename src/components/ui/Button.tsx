import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantMap: Record<ButtonVariant, string> = {
  primary:
    "bg-indigo-600 text-white hover:bg-indigo-500 shadow-sm transition-all duration-200",
  outline:
    "border border-indigo-200 text-indigo-600 bg-transparent hover:bg-indigo-50 hover:border-indigo-300 transition-colors duration-200",
  ghost:
    "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-indigo-200 hover:text-indigo-600 transition-all duration-200",
  secondary:
    "bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors duration-200",
};

const sizeMap: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs font-medium rounded-lg",
  md: "px-6 py-3 text-sm sm:text-base font-medium rounded-lg",
  lg: "px-8 py-3.5 text-base font-semibold rounded-xl",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  onClick,
  className,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 cursor-pointer font-medium select-none",
    variantMap[variant],
    sizeMap[size],
    disabled && "opacity-50 pointer-events-none",
    className
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
