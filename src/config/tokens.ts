/**
 * Design Tokens — W3C DTCG Standard & Impeccable System
 * Centralized Single Source of Truth (SSOT) for the Portfolio Design System
 *
 * Architecture:
 * 1. Primitives (Raw Scales: Colors, Typography, Spacing, Radius, Shadows, Motion, Z-Index)
 * 2. Semantic Tokens (60-30-10 Rule: Surfaces, Content/Typography, Borders, Accents, Feedback, Focus)
 * 3. Component Tokens (Button, Badge, ChatBubble, 3D Block Shadow, Card, Section Divider)
 *
 * Style Direction: Conversational Editorial Minimalism (Lora Serif + Tech Monospace)
 */

// ═════════════════════════════════════════════════════════════════════════════
// 1. PRIMITIVE / GLOBAL TOKENS (Base Values)
// ═════════════════════════════════════════════════════════════════════════════

export const primitiveTokens = {
  color: {
    brand: {
      tealDeep: { $value: "#1C8DA6", $type: "color", $description: "Deep Ocean Teal — Primary dark accent & contrast" },
      tealHover: { $value: "#146A7E", $type: "color", $description: "Deep Ocean Teal hover state" },
      cyanElectric: { $value: "#2BD9D9", $type: "color", $description: "Electric Turquoise — High energy vivid accent" },
      mintAqua: { $value: "#50F2D4", $type: "color", $description: "Aqua Mint Neon — Sparks, highlights & status glow" },
      goldChampagne: { $value: "#F2D8A7", $type: "color", $description: "Warm Champagne Gold — Balanced warm accent & stars" },
      starGold: { $value: "#E5A83B", $type: "color", $description: "Twinkling 4-point star gold accent" },
      white: { $value: "#FFFFFF", $type: "color", $description: "Pure White canvas surface" },
    },
    slate: {
      50: { $value: "#F8FAFC", $type: "color", $description: "Ultra light slate surface" },
      100: { $value: "#F1F5F9", $type: "color", $description: "Subtle slate surface / secondary bg" },
      200: { $value: "#E2E8F0", $type: "color", $description: "Standard border & 3D solid shadow" },
      300: { $value: "#CBD5E1", $type: "color", $description: "Medium border & divider" },
      400: { $value: "#94A3B8", $type: "color", $description: "Muted text & microcopy" },
      500: { $value: "#64748B", $type: "color", $description: "Subtle body text" },
      600: { $value: "#475569", $type: "color", $description: "Primary body copy" },
      700: { $value: "#334155", $type: "color", $description: "Subheading / strong text" },
      800: { $value: "#1E293B", $type: "color", $description: "Headings & dark elements" },
      900: { $value: "#0F172A", $type: "color", $description: "Primary deep text" },
      950: { $value: "#020617", $type: "color", $description: "Near black" },
    },
    indigo: {
      50: { $value: "#EEF2FF", $type: "color", $description: "Soft conversational band & accent light" },
      100: { $value: "#E0E7FF", $type: "color", $description: "Light conversational badge" },
      200: { $value: "#C7D2FE", $type: "color", $description: "3D block shadow light" },
      300: { $value: "#A5B4FC", $type: "color", $description: "3D block shadow hover" },
      400: { $value: "#818CF8", $type: "color", $description: "Bright accent" },
      500: { $value: "#6366F1", $type: "color", $description: "Medium accent indigo" },
      600: { $value: "#4F46E5", $type: "color", $description: "Primary brand accent" },
      700: { $value: "#4338CA", $type: "color", $description: "Primary brand accent hover" },
      800: { $value: "#3730A3", $type: "color", $description: "Deep indigo" },
      900: { $value: "#312E81", $type: "color", $description: "Dark indigo" },
    },
    violet: {
      500: { $value: "#8B5CF6", $type: "color", $description: "Gradient to accent" },
      600: { $value: "#7C3AED", $type: "color", $description: "Deep violet accent" },
    },
    amber: {
      50: { $value: "#FFFBEB", $type: "color", $description: "Warm accent light background" },
      500: { $value: "#F59E0B", $type: "color", $description: "Secondary warm accent (stars, sparks)" },
      600: { $value: "#D97706", $type: "color", $description: "Warm accent hover" },
    },
    emerald: {
      50: { $value: "#ECFDF5", $type: "color", $description: "Success background" },
      500: { $value: "#10B981", $type: "color", $description: "Success status accent" },
      600: { $value: "#059669", $type: "color", $description: "Success status text" },
    },
    rose: {
      50: { $value: "#FFF1F2", $type: "color", $description: "Error background" },
      500: { $value: "#F43F5E", $type: "color", $description: "Error status accent" },
      600: { $value: "#E11D48", $type: "color", $description: "Error status text" },
    },
    base: {
      white: { $value: "#FFFFFF", $type: "color", $description: "Pure white" },
      black: { $value: "#000000", $type: "color", $description: "Pure black" },
      transparent: { $value: "transparent", $type: "color", $description: "Transparent" },
    },
  },
  typography: {
    fontFamily: {
      serif: { $value: "var(--font-lora), serif", $type: "fontFamily", $description: "Editorial Lora serif font" },
      mono: { $value: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace", $type: "fontFamily", $description: "Technical monospace font" },
      sans: { $value: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", $type: "fontFamily", $description: "System sans font" },
    },
    fontSize: {
      nano: { $value: "0.5625rem", $type: "dimension", $description: "9px nano microcopy" },
      "3xs": { $value: "0.625rem", $type: "dimension", $description: "10px micro badges & tags" },
      "2xs": { $value: "0.6875rem", $type: "dimension", $description: "11px sub-labels & dates" },
      xs: { $value: "0.75rem", $type: "dimension", $description: "12px microcopy" },
      sm: { $value: "0.875rem", $type: "dimension", $description: "14px caption & badges" },
      base: { $value: "1rem", $type: "dimension", $description: "16px body copy" },
      lg: { $value: "1.125rem", $type: "dimension", $description: "18px lead text" },
      xl: { $value: "1.25rem", $type: "dimension", $description: "20px subheadings" },
      "2xl": { $value: "1.5rem", $type: "dimension", $description: "24px card headings" },
      "3xl": { $value: "1.875rem", $type: "dimension", $description: "30px section titles" },
      "4xl": { $value: "2.25rem", $type: "dimension", $description: "36px hero titles" },
      "5xl": { $value: "3rem", $type: "dimension", $description: "48px display titles" },
    },
    lineHeight: {
      tight: { $value: "1.25", $type: "number", $description: "Tight line height for headings" },
      snug: { $value: "1.375", $type: "number", $description: "Snug line height" },
      normal: { $value: "1.5", $type: "number", $description: "Normal line height for reading" },
      relaxed: { $value: "1.625", $type: "number", $description: "Relaxed editorial body copy" },
    },
    letterSpacing: {
      display: { $value: "-0.015em", $type: "dimension", $description: "Display titles (32px-48px) optical tracking" },
      heading: { $value: "0.005em", $type: "dimension", $description: "Section headings (18px-24px) optical tracking" },
      body: { $value: "0.02em", $type: "dimension", $description: "Body copy (16px-17px) optical tracking" },
      caption: { $value: "0.035em", $type: "dimension", $description: "Captions & dates (13px-14px) optical tracking" },
      micro: { $value: "0.05em", $type: "dimension", $description: "Microcopy & badges (11px-12px) optical tracking" },
      tight: { $value: "-0.025em", $type: "dimension", $description: "Headings tracking" },
      normal: { $value: "0.02em", $type: "dimension", $description: "Body tracking" },
      wide: { $value: "0.05em", $type: "dimension", $description: "Mono label tracking" },
    },
  },
  spacing: {
    0: { $value: "0px", $type: "dimension" },
    1: { $value: "0.25rem", $type: "dimension", $description: "4px" },
    2: { $value: "0.5rem", $type: "dimension", $description: "8px" },
    3: { $value: "0.75rem", $type: "dimension", $description: "12px" },
    4: { $value: "1rem", $type: "dimension", $description: "16px" },
    5: { $value: "1.25rem", $type: "dimension", $description: "20px" },
    6: { $value: "1.5rem", $type: "dimension", $description: "24px" },
    8: { $value: "2rem", $type: "dimension", $description: "32px" },
    10: { $value: "2.5rem", $type: "dimension", $description: "40px" },
    12: { $value: "3rem", $type: "dimension", $description: "48px" },
    16: { $value: "4rem", $type: "dimension", $description: "64px" },
    20: { $value: "5rem", $type: "dimension", $description: "80px" },
    24: { $value: "6rem", $type: "dimension", $description: "96px" },
  },
  radius: {
    none: { $value: "0px", $type: "dimension" },
    sharp: { $value: "2px", $type: "dimension", $description: "2px sharp badge corner" },
    xs: { $value: "0.25rem", $type: "dimension", $description: "4px - micro tags & buttons" },
    sm: { $value: "0.375rem", $type: "dimension", $description: "6px - small elements & badges" },
    md: { $value: "0.5rem", $type: "dimension", $description: "8px - buttons & inputs" },
    lg: { $value: "0.625rem", $type: "dimension", $description: "10px" },
    xl: { $value: "0.75rem", $type: "dimension", $description: "12px - cards & popovers" },
    "2xl": { $value: "1rem", $type: "dimension", $description: "16px - large cards & containers" },
    "3xl": { $value: "1.5rem", $type: "dimension", $description: "24px - modal & hero wrapper" },
    full: { $value: "9999px", $type: "dimension", $description: "Pills, avatars & diamonds" },
  },
  shadow: {
    sm: { $value: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", $type: "shadow" },
    md: { $value: "0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05)", $type: "shadow" },
    lg: { $value: "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04)", $type: "shadow" },
    // Editorial 3D Solid Block Shadows
    block: { $value: "4px 4px 0px 0px #E2E8F0", $type: "shadow", $description: "Default solid 3D shadow" },
    blockIndigo: { $value: "4px 4px 0px 0px #C7D2FE", $type: "shadow", $description: "Indigo tinted 3D shadow" },
    blockHover: { $value: "2px 2px 0px 0px #A5B4FC", $type: "shadow", $description: "Active/Hover pressed 3D shadow" },
  },
  motion: {
    duration: {
      fast: { $value: "150ms", $type: "duration" },
      normal: { $value: "250ms", $type: "duration" },
      slow: { $value: "400ms", $type: "duration" },
      editorial: { $value: "600ms", $type: "duration" },
    },
    easing: {
      default: { $value: "cubic-bezier(0.4, 0, 0.2, 1)", $type: "cubicBezier" },
      in: { $value: "cubic-bezier(0.4, 0, 1, 1)", $type: "cubicBezier" },
      out: { $value: "cubic-bezier(0, 0, 0.2, 1)", $type: "cubicBezier" },
      editorial: { $value: "cubic-bezier(0.16, 1, 0.3, 1)", $type: "cubicBezier" },
      smooth: { $value: "cubic-bezier(0.22, 1, 0.36, 1)", $type: "cubicBezier" },
    },
  },
  zIndex: {
    base: { $value: 0, $type: "number" },
    card: { $value: 1, $type: "number" },
    dropdown: { $value: 10, $type: "number" },
    sticky: { $value: 20, $type: "number" },
    nav: { $value: 40, $type: "number" },
    modal: { $value: 50, $type: "number" },
    toast: { $value: 60, $type: "number" },
  },
} as const;

// ═════════════════════════════════════════════════════════════════════════════
// 2. SEMANTIC TOKENS (60-30-10 Conversational Editorial Minimalism)
// ═════════════════════════════════════════════════════════════════════════════

export const semanticTokens = {
  // 60% Surfaces (Nền & Bề mặt)
  surface: {
    base: { $value: primitiveTokens.color.base.white.$value, $type: "color", $description: "Main page background (white)" },
    paper: { $value: primitiveTokens.color.base.white.$value, $type: "color", $description: "Card, modal & paper surface (white)" },
    warm: { $value: "#F4F8FA", $type: "color", $description: "Soft ice-cyan slate tint surface (contact & cards)" },
    band: { $value: "rgba(43, 217, 217, 0.08)", $type: "color", $description: "Alternating soft cyan conversational band" },
    subtle: { $value: primitiveTokens.color.slate[100].$value, $type: "color", $description: "Subtle neutral surface (slate-100)" },
    dark: { $value: primitiveTokens.color.slate[900].$value, $type: "color", $description: "Dark contrast surface (slate-900)" },
  },

  // 30% Content & Structure (Typography, Viền & Phân cách)
  content: {
    primary: { $value: primitiveTokens.color.slate[900].$value, $type: "color", $description: "Headings & main text (slate-900)" },
    secondary: { $value: primitiveTokens.color.slate[800].$value, $type: "color", $description: "Subtitles & section labels (slate-800)" },
    body: { $value: primitiveTokens.color.slate[600].$value, $type: "color", $description: "Paragraph body text (slate-600)" },
    subtle: { $value: primitiveTokens.color.slate[500].$value, $type: "color", $description: "Secondary body text (slate-500)" },
    muted: { $value: primitiveTokens.color.slate[400].$value, $type: "color", $description: "Microcopy, code comments, hashes (slate-400)" },
    inverse: { $value: primitiveTokens.color.base.white.$value, $type: "color", $description: "Text on dark or primary backgrounds" },
  },

  // 30% Borders & Lines
  border: {
    subtle: { $value: primitiveTokens.color.slate[200].$value, $type: "color", $description: "Standard thin divider & border (slate-200)" },
    light: { $value: "#E0F7F6", $type: "color", $description: "Soft teal tint border" },
    accent: { $value: primitiveTokens.color.brand.mintAqua.$value, $type: "color", $description: "Highlighted mint aqua border" },
    teal: { $value: primitiveTokens.color.brand.tealDeep.$value, $type: "color", $description: "Deep teal border" },
    focus: { $value: primitiveTokens.color.brand.tealDeep.$value, $type: "color", $description: "Accessibility focus ring (teal-deep)" },
  },

  // 10% Accents & 3D Depth Elements
  accent: {
    primary: { $value: primitiveTokens.color.brand.tealDeep.$value, $type: "color", $description: "Brand primary deep teal accent" },
    primaryLight: { $value: "#E6FAF8", $type: "color", $description: "Accent light teal surface" },
    primaryHover: { $value: primitiveTokens.color.brand.tealHover.$value, $type: "color", $description: "Brand primary hover" },
    brandTeal: { $value: primitiveTokens.color.brand.tealDeep.$value, $type: "color", $description: "Deep ocean teal" },
    brandCyan: { $value: primitiveTokens.color.brand.cyanElectric.$value, $type: "color", $description: "Electric turquoise" },
    brandMint: { $value: primitiveTokens.color.brand.mintAqua.$value, $type: "color", $description: "Aqua mint neon" },
    brandGold: { $value: primitiveTokens.color.brand.goldChampagne.$value, $type: "color", $description: "Warm champagne gold" },
    brandStar: { $value: primitiveTokens.color.brand.starGold.$value, $type: "color", $description: "Golden twinkle star" },
    gradientTo: { $value: primitiveTokens.color.brand.mintAqua.$value, $type: "color", $description: "Accent gradient end" },
    warm: { $value: primitiveTokens.color.brand.goldChampagne.$value, $type: "color", $description: "Secondary warm champagne accent" },
    signatureGradient: { $value: "linear-gradient(135deg, #1C8DA6 0%, #2BD9D9 35%, #50F2D4 70%, #F2D8A7 100%)", $type: "gradient", $description: "4-color signature linear gradient" },
    conicSignatureGradient: { $value: "conic-gradient(from 0deg, #1C8DA6, #2BD9D9, #50F2D4, #F2D8A7, #1C8DA6)", $type: "gradient", $description: "Full conic 4-color signature gradient" },
    laserBeamGradient: { $value: "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 260deg, #1C8DA6 290deg, #2BD9D9 315deg, #50F2D4 340deg, #F2D8A7 360deg)", $type: "gradient", $description: "Laser beam ray conic gradient" },
    flameAuraCyan: { $value: "linear-gradient(135deg, rgba(28, 141, 166, 0.25) 0%, rgba(43, 217, 217, 0.4) 35%, rgba(80, 242, 212, 0.35) 70%, rgba(242, 216, 167, 0.45) 100%)", $type: "gradient", $description: "Cyan-teal energy flame aura" },
    flameAuraMint: { $value: "linear-gradient(135deg, rgba(80, 242, 212, 0.3) 0%, rgba(43, 217, 217, 0.4) 40%, rgba(242, 216, 167, 0.4) 100%)", $type: "gradient", $description: "Mint-gold energy flame aura" },
    blockShadow: { $value: primitiveTokens.color.slate[200].$value, $type: "color", $description: "3D block shadow color (slate-200)" },
    blockShadowIndigo: { $value: "#C8F4EE", $type: "color", $description: "3D block shadow teal-mint tint" },
    blockShadowDark: { $value: "#1C8DA6", $type: "color", $description: "3D block shadow active hover" },
  },

  // Status & Feedback Tokens
  feedback: {
    success: {
      bg: { $value: primitiveTokens.color.emerald[50].$value, $type: "color" },
      text: { $value: primitiveTokens.color.emerald[600].$value, $type: "color" },
      border: { $value: primitiveTokens.color.emerald[500].$value, $type: "color" },
    },
    error: {
      bg: { $value: primitiveTokens.color.rose[50].$value, $type: "color" },
      text: { $value: primitiveTokens.color.rose[600].$value, $type: "color" },
      border: { $value: primitiveTokens.color.rose[500].$value, $type: "color" },
    },
    warning: {
      bg: { $value: primitiveTokens.color.amber[50].$value, $type: "color" },
      text: { $value: primitiveTokens.color.amber[600].$value, $type: "color" },
      border: { $value: primitiveTokens.color.amber[500].$value, $type: "color" },
    },
  },
} as const;

// ═════════════════════════════════════════════════════════════════════════════
// 3. COMPONENT TOKENS
// ═════════════════════════════════════════════════════════════════════════════

export const componentTokens = {
  button: {
    primary: {
      bg: semanticTokens.accent.primary.$value,
      text: semanticTokens.content.inverse.$value,
      hoverBg: semanticTokens.accent.primaryHover.$value,
      shadow: "4px 4px 0px 0px #C7D2FE",
      activeShadow: "2px 2px 0px 0px #A5B4FC",
    },
    secondary: {
      bg: semanticTokens.surface.subtle.$value,
      text: semanticTokens.content.primary.$value,
      border: semanticTokens.border.subtle.$value,
      hoverBg: primitiveTokens.color.slate[200].$value,
    },
    outline: {
      bg: semanticTokens.surface.paper.$value,
      text: semanticTokens.content.primary.$value,
      border: semanticTokens.border.subtle.$value,
      hoverBorder: semanticTokens.border.accent.$value,
    },
  },
  chatBubble: {
    user: {
      bg: semanticTokens.accent.primaryLight.$value,
      border: semanticTokens.border.accent.$value,
      text: semanticTokens.content.primary.$value,
      shadow: "4px 4px 0px 0px #C7D2FE",
    },
    bot: {
      bg: semanticTokens.surface.paper.$value,
      border: semanticTokens.border.subtle.$value,
      text: semanticTokens.content.body.$value,
      shadow: "4px 4px 0px 0px #E2E8F0",
    },
  },
  card: {
    bg: semanticTokens.surface.paper.$value,
    border: semanticTokens.border.subtle.$value,
    hoverBorder: semanticTokens.border.accent.$value,
    shadow: primitiveTokens.shadow.sm.$value,
    shadow3D: "4px 4px 0px 0px #E2E8F0",
  },
  diamond: {
    color: semanticTokens.accent.primary.$value,
    accentColor: semanticTokens.accent.warm.$value,
  },
} as const;

// ═════════════════════════════════════════════════════════════════════════════
// 4. W3C DTCG ROOT EXPORT
// ═════════════════════════════════════════════════════════════════════════════

export const w3cTokens = {
  $name: "Conversational Editorial Minimalism Design Tokens",
  $version: "2.0.0",
  primitive: primitiveTokens,
  semantic: semanticTokens,
  component: componentTokens,
} as const;

// ═════════════════════════════════════════════════════════════════════════════
// 5. USABLE FLAT TOKENS (100% BACKWARD COMPATIBILITY FOR CODEBASE)
// ═════════════════════════════════════════════════════════════════════════════

export const tokens = {
  colors: {
    // 60% Surfaces (Nền & Bề mặt)
    surface: {
      base: semanticTokens.surface.base.$value,
      paper: semanticTokens.surface.paper.$value,
      warm: semanticTokens.surface.warm.$value,
      band: semanticTokens.surface.band.$value,
      subtle: semanticTokens.surface.subtle.$value,
      dark: semanticTokens.surface.dark.$value,
    },
    // 30% Content & Structure (Chữ, Viền & Phân cách)
    content: {
      primary: semanticTokens.content.primary.$value,
      secondary: semanticTokens.content.secondary.$value,
      body: semanticTokens.content.body.$value,
      subtle: semanticTokens.content.subtle.$value,
      muted: semanticTokens.content.muted.$value,
      inverse: semanticTokens.content.inverse.$value,
    },
    border: {
      subtle: semanticTokens.border.subtle.$value,
      light: semanticTokens.border.light.$value,
      accent: semanticTokens.border.accent.$value,
      teal: semanticTokens.border.teal.$value,
      focus: semanticTokens.border.focus.$value,
    },
    // 10% Accents & 3D Elements (Điểm nhấn)
    accent: {
      primary: semanticTokens.accent.primary.$value,
      primaryLight: semanticTokens.accent.primaryLight.$value,
      primaryHover: semanticTokens.accent.primaryHover.$value,
      brandTeal: semanticTokens.accent.brandTeal.$value,
      brandCyan: semanticTokens.accent.brandCyan.$value,
      brandMint: semanticTokens.accent.brandMint.$value,
      brandGold: semanticTokens.accent.brandGold.$value,
      brandStar: semanticTokens.accent.brandStar.$value,
      gradientTo: semanticTokens.accent.gradientTo.$value,
      warm: semanticTokens.accent.warm.$value,
      signatureGradient: semanticTokens.accent.signatureGradient.$value,
      conicSignatureGradient: semanticTokens.accent.conicSignatureGradient.$value,
      laserBeamGradient: semanticTokens.accent.laserBeamGradient.$value,
      flameAuraCyan: semanticTokens.accent.flameAuraCyan.$value,
      flameAuraMint: semanticTokens.accent.flameAuraMint.$value,
      blockShadow: semanticTokens.accent.blockShadow.$value,
      blockShadowIndigo: semanticTokens.accent.blockShadowIndigo.$value,
      blockShadowDark: semanticTokens.accent.blockShadowDark.$value,
    },
    feedback: {
      success: semanticTokens.feedback.success.text.$value,
      successBg: semanticTokens.feedback.success.bg.$value,
      error: semanticTokens.feedback.error.text.$value,
      errorBg: semanticTokens.feedback.error.bg.$value,
      warning: semanticTokens.feedback.warning.text.$value,
      warningBg: semanticTokens.feedback.warning.bg.$value,
    },
  },
  typography: {
    fontSerif: primitiveTokens.typography.fontFamily.serif.$value,
    fontMono: primitiveTokens.typography.fontFamily.mono.$value,
    fontSans: primitiveTokens.typography.fontFamily.sans.$value,
    fontSize: {
      nano: primitiveTokens.typography.fontSize.nano.$value,
      "3xs": primitiveTokens.typography.fontSize["3xs"].$value,
      "2xs": primitiveTokens.typography.fontSize["2xs"].$value,
      xs: primitiveTokens.typography.fontSize.xs.$value,
      sm: primitiveTokens.typography.fontSize.sm.$value,
      base: primitiveTokens.typography.fontSize.base.$value,
      lg: primitiveTokens.typography.fontSize.lg.$value,
      xl: primitiveTokens.typography.fontSize.xl.$value,
      "2xl": primitiveTokens.typography.fontSize["2xl"].$value,
      "3xl": primitiveTokens.typography.fontSize["3xl"].$value,
      "4xl": primitiveTokens.typography.fontSize["4xl"].$value,
      "5xl": primitiveTokens.typography.fontSize["5xl"].$value,
    },
  },
  radius: {
    none: primitiveTokens.radius.none.$value,
    sharp: primitiveTokens.radius.sharp.$value,
    xs: primitiveTokens.radius.xs.$value,
    sm: primitiveTokens.radius.sm.$value,
    md: primitiveTokens.radius.md.$value,
    lg: primitiveTokens.radius.lg.$value,
    xl: primitiveTokens.radius.xl.$value,
    "2xl": primitiveTokens.radius["2xl"].$value,
    "3xl": primitiveTokens.radius["3xl"].$value,
    full: primitiveTokens.radius.full.$value,
  },
  shadow: {
    sm: primitiveTokens.shadow.sm.$value,
    md: primitiveTokens.shadow.md.$value,
    lg: primitiveTokens.shadow.lg.$value,
    block: primitiveTokens.shadow.block.$value,
    blockIndigo: primitiveTokens.shadow.blockIndigo.$value,
    blockHover: primitiveTokens.shadow.blockHover.$value,
  },
  zIndex: {
    base: primitiveTokens.zIndex.base.$value,
    card: primitiveTokens.zIndex.card.$value,
    dropdown: primitiveTokens.zIndex.dropdown.$value,
    sticky: primitiveTokens.zIndex.sticky.$value,
    nav: primitiveTokens.zIndex.nav.$value,
    modal: primitiveTokens.zIndex.modal.$value,
    toast: primitiveTokens.zIndex.toast.$value,
  },
  animation: {
    fadeInUp: "fadeInUp 0.6s ease-out both",
    slideInLeft: "slideInLeft 0.5s ease-out both",
    slideInRight: "slideInRight 0.5s ease-out both",
    slideInFromRight: "slideInFromRight 600ms cubic-bezier(0.16, 1, 0.3, 1) both",
    popIn: "popIn 0.4s ease-out both",
    fadeIn: "fadeIn 0.6s ease-out both",
    goldenTwinkle: "goldenTwinkle 2.5s ease-in-out infinite",
    flameEnergy: "flameEnergy 2s linear infinite",
    borderBeamRotate: "borderBeamRotate 2.5s linear infinite",
    borderBeamRotateSlow: "borderBeamRotate 3.5s linear infinite",
    typeCursorBlink: "typeCursorBlink 1s infinite",
    marqueeUp: "marqueeUp 22s linear infinite",
    marqueeDown: "marqueeDown 22s linear infinite",
    smoothRevealUp: "smoothRevealUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
  },
  components: componentTokens,
} as const;

export type DesignTokens = typeof tokens;
export type W3CDesignTokens = typeof w3cTokens;

// ═════════════════════════════════════════════════════════════════════════════
// 6. HELPER UTILITIES
// ═════════════════════════════════════════════════════════════════════════════

/**
 * Returns the CSS variable syntax for a design token name
 * @example cssVar('primary') => 'var(--primary)'
 */
export function cssVar(name: string, fallback?: string): string {
  return fallback ? `var(--${name}, ${fallback})` : `var(--${name})`;
}
