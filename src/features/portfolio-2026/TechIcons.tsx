import React from "react";

/* ══════════════════════════════════════════════════════════════════
   BỘ LOGO CÔNG NGHỆ CHUẨN XÁC, SẮC NÉT & ĐỒNG NHẤT (VIEWBOX 0 0 24 24)
   ══════════════════════════════════════════════════════════════════ */

// 1. Python (Official Python Blue & Yellow)
export function PythonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <path
        d="M11.91 2C8.37 2 6.55 2.5 6.55 3.86v2.24h5.45v.75H4.27C2.9 6.85 2 8.35 2 10.35c0 2.27 1.25 3.51 2.92 3.51h1.72v-2.39c0-1.74 1.48-3.14 3.27-3.14h5.36V6.15c0-1.74-2.09-4.15-5.36-4.15z"
        fill="#3776AB"
      />
      <circle cx="8.68" cy="4.25" r=".75" fill="#fff" />
      <path
        d="M12.09 22c3.54 0 5.36-.5 5.36-1.86v-2.24H12v-.75h7.73c1.37 0 2.27-1.5 2.27-3.5 0-2.27-1.25-3.51-2.92-3.51h-1.72v2.39c0 1.74-1.48 3.14-3.27 3.14H8.73v2.18c0 1.74 2.09 4.15 5.36 4.15z"
        fill="#FFD43B"
      />
      <circle cx="15.32" cy="19.75" r=".75" fill="#fff" />
    </svg>
  );
}

// 2. LangChain (Official Bird & Chain Motif)
export function LangChainIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#1C3C3C" />
      <path
        d="M6 14.5c0-2.5 2-4.5 4.5-4.5h3c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5h-3c-2.5 0-4.5-2-4.5-4.5z"
        stroke="#2DD4BF"
        strokeWidth="1.8"
      />
      <path
        d="M10.5 9.5c0-2.5 2-4.5 4.5-4.5h.5c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5"
        stroke="#F59E0B"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="8" cy="14.5" r="1.2" fill="#2DD4BF" />
      <circle cx="16" cy="9.5" r="1.2" fill="#F59E0B" />
    </svg>
  );
}

// 3. Google Gemini / ADK (Official 4-Color Sparkle)
export function GoogleADKIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="geminiGradPipesReal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="35%" stopColor="#9B72CB" />
          <stop offset="70%" stopColor="#D96570" />
          <stop offset="100%" stopColor="#F4B400" />
        </linearGradient>
      </defs>
      <path
        d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z"
        fill="url(#geminiGradPipesReal)"
      />
      <circle cx="18" cy="6" r="1.8" fill="#4285F4" />
      <circle cx="6" cy="18" r="1.2" fill="#F4B400" />
    </svg>
  );
}

// 4. MCP (Model Context Protocol Official Shape)
export function MCPIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#0F172A" />
      <path
        d="M6 12h3m6 0h3m-6-6v3m0 6v3"
        stroke="#94A3B8"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect x="9" y="9" width="6" height="6" rx="2" stroke="#38BDF8" strokeWidth="1.8" fill="#0284C7" fillOpacity="0.2" />
      <circle cx="6" cy="12" r="1.5" fill="#38BDF8" />
      <circle cx="18" cy="12" r="1.5" fill="#38BDF8" />
      <circle cx="12" cy="6" r="1.5" fill="#38BDF8" />
      <circle cx="12" cy="18" r="1.5" fill="#38BDF8" />
    </svg>
  );
}

// 5. CopilotKit (Official Copilot Headset)
export function CopilotKitIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#18181B" />
      <path
        d="M6 15.5V10a6 6 0 0 1 12 0v5.5"
        stroke="#6366F1"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9 13.5h6"
        stroke="#A855F7"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="8" cy="16.5" r="2" fill="#EC4899" />
      <circle cx="16" cy="16.5" r="2" fill="#6366F1" />
    </svg>
  );
}

// 6. Claude (Anthropic Claude Official Terracotta Star)
export function ClaudeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#D97757" />
      <path
        d="M12 5.5l1.6 4.3 4.4 1.2-3.8 2.6.9 4.6L12 15.7l-3.1 2.5.9-4.6-3.8-2.6 4.4-1.2L12 5.5z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 7. TypeScript (Official TS Blue Box)
export function TypeScriptIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        d="M6 10.5h6m-3 0v7.5M14 16.5c.7.6 1.6 1 2.6 1 1.5 0 2.4-.8 2.4-2 0-2.3-3.6-1.7-3.6-3.7 0-1.1.9-1.9 2.2-1.9.9 0 1.7.3 2.3.8m0 0v-1"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 8. Next.js (Official Next.js Emblem)
export function NextJSIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#000000" />
      <path
        d="M7 7.5v9m0 0l9.5-12.5m-5 12.5h5V7.5"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 9. React (Official React Cyan Atom)
export function ReactIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(120 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
    </svg>
  );
}

// 10. Tailwind CSS (Official Tailwind Cyan Waves)
export function TailwindIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <path
        d="M7.5 10.5c1.2-2.5 3-3.5 5.5-3 1.4.3 2.4 1.3 3.5 2.4C18.2 11.7 20 12.5 22 12.5c-1.2 2.5-3 3.5-5.5 3-1.4-.3-2.4-1.3-3.5-2.4-1.7-1.8-3.5-2.6-5.5-2.6zm-5.5 6c1.2-2.5 3-3.5 5.5-3 1.4.3 2.4 1.3 3.5 2.4C12.7 17.7 14.5 18.5 16.5 18.5c-1.2 2.5-3 3.5-5.5 3-1.4-.3-2.4-1.3-3.5-2.4-1.7-1.8-3.5-2.6-5.5-2.6z"
        fill="#38BDF8"
      />
    </svg>
  );
}

// 11. Playwright (Official Playwright Green/Red Dual Masks)
export function PlaywrightIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <circle cx="10" cy="11" r="6" fill="#2EAD33" fillOpacity="0.8" />
      <circle cx="15" cy="13" r="6" fill="#C83B50" fillOpacity="0.8" />
      <path d="M7 11a3 3 0 0 1 6 0M12 13a3 3 0 0 1 6 0" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

// 12. Vitest (Official Vitest Yellow & Green V)
export function VitestIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <path d="M4 5l8 14L20 5h-4l-4 7.5L8 5H4z" fill="#FCC72B" />
      <circle cx="16" cy="9" r="3" fill="#729B1B" />
    </svg>
  );
}

// 13. Node.js (Official Green Hexagon)
export function NodeJSIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <path
        d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2z"
        fill="#5FA04E"
      />
      <path
        d="M12 5.5l6 3.5v7l-6 3.5-6-3.5v-7l6-3.5z"
        fill="#333333"
      />
      <circle cx="12" cy="12" r="2.5" fill="#5FA04E" />
    </svg>
  );
}

// 14. PostgreSQL (Official Elephant Motif Blue)
export function PostgreSQLIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#336791" />
      <path
        d="M12 4.5c-4.1 0-7.5 2.7-7.5 6.5 0 2.4 1.3 4.5 3.3 5.5v3h3v-2.2c.4.1.8.2 1.2.2 4.1 0 7.5-2.7 7.5-6.5S16.1 4.5 12 4.5z"
        fill="#FFFFFF"
      />
      <circle cx="10" cy="10" r="1.2" fill="#336791" />
    </svg>
  );
}

// 15. Docker (Official Whale with Containers)
export function DockerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <path
        d="M22 12.5c-.5-.4-1.6-.4-2.2 0-.2-.9-.8-1.5-1.7-1.7l-.4.1c.1-.8-.3-1.6-1.1-1.9-.3-.1-.7-.1-1 0v-1H13V6h-2v2H9v2H7v2H2.5c-.3.7-.5 1.5-.5 2.4C2 18.8 5.6 21 12 21c5.8 0 9.8-3.2 10.4-7.2.1-.4 0-.9-.4-1.3z"
        fill="#2496ED"
      />
      <rect x="7" y="10.5" width="1.6" height="1.6" fill="#fff" />
      <rect x="9.2" y="10.5" width="1.6" height="1.6" fill="#fff" />
      <rect x="11.4" y="10.5" width="1.6" height="1.6" fill="#fff" />
      <rect x="9.2" y="8.5" width="1.6" height="1.6" fill="#fff" />
      <rect x="11.4" y="8.5" width="1.6" height="1.6" fill="#fff" />
    </svg>
  );
}

// 16. Redis (Official Red 3D Cube)
export function RedisIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <path
        d="M12 3L3 7.5v9L12 21l9-4.5v-9L12 3z"
        fill="#DC382D"
      />
      <path
        d="M12 7l-5 2.5 5 2.5 5-2.5L12 7z"
        fill="#FFFFFF"
        fillOpacity="0.4"
      />
      <circle cx="12" cy="14" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}

// 17. FastAPI (Official Teal Hexagon with Lightning Bolt)
export function FastAPIIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#009688" />
      <path
        d="M13 2.5L5.5 13.5H12L11 21.5L18.5 10.5H12L13 2.5Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 18. AWS (Official Dark Container with Orange Smile Arrow)
export function AWSIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#232F3E" />
      <path
        d="M5 14.5c3.5 2.2 9.5 2.2 14 0"
        stroke="#FF9900"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M17.5 12.5l2 2-2 1.5" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 19. GCP (Official Google Cloud 4-Color Cloud)
export function GCPIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#FFFFFF" />
      <path
        d="M12 6.5a5.5 5.5 0 0 0-5.3 4 5 5 0 0 0 .3 10h10a4.5 4.5 0 0 0 .5-9 5.5 5.5 0 0 0-5.5-5z"
        fill="#4285F4"
      />
      <circle cx="16" cy="15" r="2.5" fill="#EA4335" />
      <circle cx="9" cy="16" r="2" fill="#FBBC05" />
      <circle cx="12" cy="11" r="2" fill="#34A853" />
    </svg>
  );
}

// 20. Vercel (Official Black Triangle)
export function VercelIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#000000" />
      <path d="M12 4.5L20 18.5H4L12 4.5Z" fill="#FFFFFF" />
    </svg>
  );
}

// 21. Git (Official Git Orange Branching Diamond)
export function GitIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#F05032" />
      <path
        d="M12 3.5l8.5 8.5-8.5 8.5L3.5 12 12 3.5z"
        fill="#F05032"
        stroke="#FFFFFF"
        strokeWidth="1.2"
      />
      <circle cx="9.5" cy="12" r="1.8" fill="#FFFFFF" />
      <circle cx="14.5" cy="9.5" r="1.8" fill="#FFFFFF" />
      <circle cx="14.5" cy="14.5" r="1.8" fill="#FFFFFF" />
      <path d="M9.5 12h5m0-2.5v5" stroke="#FFFFFF" strokeWidth="1.5" />
    </svg>
  );
}

// 22. Postman (Official Orange Astronaut Ring)
export function PostmanIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#FF6C37" />
      <circle cx="12" cy="12" r="6" stroke="#FFFFFF" strokeWidth="1.6" />
      <path d="M10 12l4-2.5v5L10 12z" fill="#FFFFFF" />
    </svg>
  );
}

// 23. Figma (Official 5-Color Creative Shapes)
export function FigmaIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#1E1E1E" />
      <path d="M9 4.5h3v3H9a1.5 1.5 0 0 1 0-3z" fill="#F24E1E" />
      <path d="M12 4.5h3a1.5 1.5 0 0 1 0 3h-3v-3z" fill="#FF7262" />
      <path d="M9 7.5h3v3H9a1.5 1.5 0 0 1 0-3z" fill="#A259FF" />
      <circle cx="13.5" cy="9" r="1.5" fill="#1ABCFE" />
      <path d="M9 10.5h3v3a1.5 1.5 0 0 1-3 0v-3z" fill="#0ACF83" />
    </svg>
  );
}

// 24. Vector Databases (Pinecone / Qdrant Isometric Cube)
export function VectorDBIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#0F172A" />
      <path
        d="M12 3.5l7 4v9l-7 4-7-4v-9l7-4z"
        stroke="#38BDF8"
        strokeWidth="1.6"
      />
      <path d="M12 3.5v9m0 0l7-4m-7 4l-7-4" stroke="#38BDF8" strokeWidth="1.4" />
      <circle cx="12" cy="12.5" r="1.8" fill="#F59E0B" />
    </svg>
  );
}

// 25. RAG & Agents (Autonomous Agent Network)
export function RAGIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#09090B" />
      <circle cx="12" cy="12" r="7" stroke="#A855F7" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="12" cy="12" r="3" fill="#EC4899" />
      <path d="M12 5v2m0 10v2M5 12h2m10 0h2" stroke="#22D3EE" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
