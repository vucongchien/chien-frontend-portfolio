import type { ReactNode, MouseEventHandler } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "outline" | "ghost" | "secondary";
export type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
}

interface ButtonAsAnchorProps extends BaseButtonProps {
  href: string;
  target?: string;
  rel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  type?: never;
}

interface ButtonAsNormalProps extends BaseButtonProps {
  href?: never;
  target?: never;
  rel?: never;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

export type ButtonProps = ButtonAsAnchorProps | ButtonAsNormalProps;

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
  className,
  disabled,
  ...props
}: ButtonProps) {
  const commonClasses = cn(
    "inline-flex items-center justify-center gap-2 cursor-pointer font-medium select-none",
    variantMap[variant],
    sizeMap[size],
    disabled && "opacity-50 pointer-events-none",
    className
  );

  if ("href" in props && props.href) {
    const { href, target, rel, onClick } = props;
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" && !rel ? "noopener noreferrer" : rel}
        onClick={onClick}
        className={commonClasses}
      >
        {children}
      </a>
    );
  }

  const { type = "button", onClick } = props as ButtonAsNormalProps;
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      disabled={disabled}
      className={commonClasses}
    >
      {children}
    </button>
  );
}
