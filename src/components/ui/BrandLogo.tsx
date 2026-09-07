import React from "react";
import { cn } from "@/lib/utils";

export interface BrandLogoProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "symbol" | "badge";
  className?: string;
  id?: string;
}

const SIZE_MAP = {
  xs: { box: 16, star: 12, radius: 4 },
  sm: { box: 22, star: 16, radius: 6 },
  md: { box: 32, star: 24, radius: 8 },
  lg: { box: 44, star: 32, radius: 10 },
  xl: { box: 64, star: 48, radius: 14 },
};

/**
 * BrandLogo — Biểu tượng nhận diện thương hiệu Vũ Công Chiến
 * Kết hợp ngôi sao 4 cánh signature và dải chuyển màu 4-Color Palette:
 * #1C8DA6 (Teal) -> #2BD9D9 (Turquoise) -> #50F2D4 (Mint) -> #F2D8A7 (Gold)
 */
export function BrandLogo({
  size = "md",
  variant = "badge",
  className,
  id,
}: BrandLogoProps) {
  const config = SIZE_MAP[size];

  if (variant === "symbol") {
    return (
      <svg
        id={id}
        viewBox="0 0 24 24"
        width={config.box}
        height={config.box}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("shrink-0 transition-transform duration-300", className)}
        aria-label="Vũ Công Chiến Brand Logo"
      >
        <title>Vũ Công Chiến Brand Logo</title>
        <defs>
          <linearGradient id={`brandStarGrad-${size}`} x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1C8DA6" />
            <stop offset="35%" stopColor="#2BD9D9" />
            <stop offset="70%" stopColor="#50F2D4" />
            <stop offset="100%" stopColor="#F2D8A7" />
          </linearGradient>
        </defs>
        <path
          d="M12 0 C12 7 17 12 24 12 C17 12 12 17 12 24 C12 17 7 12 0 12 C7 12 12 7 12 0 Z"
          fill={`url(#brandStarGrad-${size})`}
        />
      </svg>
    );
  }

  // Variant "badge": Khối squircle bo góc cao cấp với viền siêu mỏng và ngôi sao phát quang
  return (
    <svg
      id={id}
      viewBox="0 0 48 48"
      width={config.box}
      height={config.box}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0 transition-transform duration-300 hover:scale-105", className)}
      aria-label="Vũ Công Chiến Brand Logo"
    >
      <title>Vũ Công Chiến Brand Logo</title>
      <defs>
        {/* Dải gradient thương hiệu signature 4 màu */}
        <linearGradient id={`badgeStarGrad-${size}`} x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1C8DA6" />
          <stop offset="35%" stopColor="#2BD9D9" />
          <stop offset="70%" stopColor="#50F2D4" />
          <stop offset="100%" stopColor="#F2D8A7" />
        </linearGradient>
        {/* Viền kim loại mỏng tinh tế */}
        <linearGradient id={`badgeBorderGrad-${size}`} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>
      </defs>

      {/* Nền Squircle tối giản cao cấp */}
      <rect
        x="1.5"
        y="1.5"
        width="45"
        height="45"
        rx="12"
        fill="#0F172A"
        stroke={`url(#badgeBorderGrad-${size})`}
        strokeWidth="1.5"
      />

      {/* Vầng sáng aura nhẹ trung tâm */}
      <circle cx="24" cy="24" r="14" fill="#2BD9D9" opacity="0.15" />

      {/* Ngôi sao 4 cánh signature Vũ Công Chiến */}
      <path
        d="M24 10 C24 18 29.5 24 38 24 C29.5 24 24 29.5 24 38 C24 29.5 18.5 24 10 24 C18.5 24 24 18 24 10 Z"
        fill={`url(#badgeStarGrad-${size})`}
      />
    </svg>
  );
}

export default BrandLogo;
