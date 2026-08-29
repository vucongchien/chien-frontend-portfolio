/**
 * Design Tokens — W3C Standard Format
 * Centralized Single Source of Truth for Design Tokens
 * 60-30-10 Rule: 60% Surfaces, 30% Content & Borders, 10% Accents & 3D Blocks
 */

export const tokens = {
  colors: {
    // 60% Surfaces (Nền & Bề mặt)
    surface: {
      base: "#F8FAFC", // slate-50 (nền trang chính)
      paper: "#FFFFFF", // white (nền thẻ card / modal)
      band: "rgba(238, 242, 255, 0.6)", // indigo-50/60 (dải phân tầng hội thoại)
      subtle: "#F1F5F9", // slate-100 (khối xám nhạt)
    },
    // 30% Content & Structure (Chữ, Viền & Phân cách)
    content: {
      primary: "#0F172A", // slate-900 (tiêu đề)
      secondary: "#1E293B", // slate-800
      body: "#475569", // slate-600 (nội dung)
      subtle: "#64748B", // slate-500
      muted: "#94A3B8", // slate-400 (microcopy, code hash)
    },
    border: {
      subtle: "#E2E8F0", // slate-200 (viền mảnh mặc định)
      light: "#EEF2FF", // indigo-100
      accent: "#C7D2FE", // indigo-200
    },
    // 10% Accents & 3D Elements (Điểm nhấn)
    accent: {
      primary: "#4F46E5", // indigo-600
      primaryLight: "#EEF2FF", // indigo-50
      primaryHover: "#4338CA", // indigo-700
      gradientTo: "#8B5CF6", // violet-500
      warm: "#F59E0B", // amber-500
      blockShadow: "#E2E8F0", // slate-200 (khối đổ bóng 3D)
    },
  },
  typography: {
    fontSerif: "var(--font-lora), serif",
    fontMono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  },
  radius: {
    sm: "0.375rem", // 6px
    md: "0.5rem", // 8px (rounded-lg)
    xl: "0.75rem", // 12px (rounded-xl)
    "2xl": "1rem", // 16px (rounded-2xl)
    full: "9999px", // rounded-full
  },
  animation: {
    fadeInUp: "fadeInUp 0.6s ease-out both",
    slideInLeft: "slideInLeft 0.5s ease-out both",
    slideInRight: "slideInRight 0.5s ease-out both",
    popIn: "popIn 0.4s ease-out both",
    fadeIn: "fadeIn 0.6s ease-out both",
  },
} as const;

export type DesignTokens = typeof tokens;
