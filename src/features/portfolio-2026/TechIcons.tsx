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

// 2. LangChain (Official Interlocking Chain Mark)
export function LangChainIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <path
        d="M13.796 0a6.93 6.93 0 0 0-4.91 2.019L5.451 5.455l3.273 3.27 3.432-3.432a2.284 2.284 0 0 1 3.277 0 2.28 2.28 0 0 1 0 3.275L12 12.001l3.273 3.273 3.433-3.435c2.692-2.692 2.692-7.127 0-9.82A6.92 6.92 0 0 0 13.796 0m-5.07 8.728-3.433 3.434c-2.692 2.693-2.692 7.126 0 9.819A6.92 6.92 0 0 0 10.203 24a6.93 6.93 0 0 0 4.911-2.02l3.432-3.432-3.271-3.272-3.433 3.433a2.284 2.284 0 0 1-3.277 0 2.28 2.28 0 0 1 0-3.276L12 12z"
        fill="#2DD4BF"
      />
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

// 4. MCP (Official Model Context Protocol Folded Ribbon)
export function MCPIcon() {
  return (
    <svg viewBox="0 0 256 285" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <path
        d="M184.912588,14.4984503 C196.363516,25.9487671 201.031836,41.6132025 198.917593,56.499546 C213.803648,54.3850952 229.469497,59.054364 240.923381,70.5077614 L241.500743,71.085945 C260.833056,90.4174329 260.833056,121.760183 241.500921,141.091287 L140.199441,242.393592 C138.910969,243.681981 138.910969,245.770603 140.199887,247.059438 L161.000619,267.861491 C164.866781,271.727898 164.866582,277.996382 161.000175,281.862544 C157.133769,285.728705 150.865284,285.728506 146.999123,281.862099 L126.198836,261.060493 C117.177199,252.039433 117.177199,237.413151 126.198584,228.392344 L227.500027,127.090076 C239.099324,115.491398 239.099324,96.6861357 227.494887,85.0821908 L226.917525,84.5040072 C215.462946,73.0499167 196.981217,72.9067406 185.351143,84.0742949 L184.912802,84.5038305 L100.323674,169.093619 C96.4574047,172.959918 90.1889199,172.959943 86.3226209,169.093674 C82.456322,165.227405 82.4562975,158.95892 86.3225663,155.092621 L170.911872,70.5026559 C182.511206,58.9038165 182.511206,40.0985546 170.911498,28.4994655 C159.313616,16.900841 140.508239,16.900841 128.909262,28.4996948 L16.9007603,140.508031 C13.0344736,144.374312 6.76598883,144.374308 2.89970777,140.508021 C-0.966573285,136.641734 -0.966568668,130.373249 2.89971809,126.506968 L114.908252,14.4985997 C134.239899,-4.83284167 165.582534,-4.83284167 184.912588,14.4984503 Z M156.911612,42.5006526 C160.777889,46.3669442 160.777876,52.6354289 156.911585,56.5017051 L74.0716022,139.341358 C62.4729435,150.939769 62.4729435,169.745376 74.0714528,181.344504 C85.6703838,192.942693 104.476251,192.942693 116.074944,181.344742 L198.914535,98.5048208 C202.780811,94.6385292 209.049296,94.6385167 212.915588,98.5047929 C216.781879,102.371069 216.781892,108.639554 212.915616,112.505845 L130.075786,195.346005 C110.74439,214.676164 79.4022447,214.676164 60.0704376,195.345594 C40.7393604,176.013486 40.7393604,144.671082 60.0706383,125.340216 L142.91056,42.5006247 C146.776851,38.6343485 153.045336,38.634361 156.911612,42.5006526 Z"
        fill="#0284C7"
      />
    </svg>
  );
}

// 5. CopilotKit (Official Pilot Headset & Spark)
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

// 6. Claude (Anthropic Claude Official Brandmark)
export function ClaudeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#D97757" />
      <path
        d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z"
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

// 26. Go / Golang (Official Brand Mark)
export function GoIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <path
        d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z"
        fill="#00ADD8"
      />
    </svg>
  );
}

// 27. Spring Boot (Official Spring Hexagon & Leaf)
export function SpringBootIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <path
        d="m23.693 10.7058-4.73-8.1844c-.4094-.7106-1.4166-1.2942-2.2402-1.2942H7.2725c-.819 0-1.8308.5836-2.2402 1.2942L.307 10.7058c-.4095.7106-.4095 1.873 0 2.5837l4.7252 8.189c.4094.7107 1.4166 1.2943 2.2402 1.2943h9.455c.819 0 1.826-.5836 2.2402-1.2942l4.7252-8.189c.4095-.7107.4095-1.8732 0-2.5838zM10.9763 5.7547c0-.5365.4377-.9742.9742-.9742s.9742.4377.9742.9742v5.8217c0 .5366-.4377.9742-.9742.9742s-.9742-.4376-.9742-.9742zm.9742 12.4294c-3.6427 0-6.6077-2.965-6.6077-6.6077.0047-2.0896.993-4.0521 2.6685-5.304a.8657.8657 0 0 1 1.2142.1788.8657.8657 0 0 1-.1788 1.2143c-2.1602 1.6048-2.612 4.6592-1.0072 6.8194 1.6049 2.1603 4.6593 2.612 6.8195 1.0072 1.2378-.9177 1.9673-2.372 1.9673-3.9157a4.8972 4.8972 0 0 0-1.9861-3.925c-.386-.2824-.466-.8284-.1836-1.2143.2824-.386.8283-.466 1.2143-.1835 1.6895 1.2471 2.6826 3.2238 2.6873 5.3228 0 3.6474-2.965 6.6077-6.6077 6.6077z"
        fill="#6DB33F"
      />
    </svg>
  );
}

// 28. Apache Kafka (Official Connected Node Graph)
export function KafkaIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <path
        d="M9.71 2.136a1.43 1.43 0 0 0-2.047 0h-.007a1.48 1.48 0 0 0-.421 1.042c0 .41.161.777.422 1.039l.007.007c.257.264.616.426 1.019.426.404 0 .766-.162 1.027-.426l.003-.007c.261-.262.421-.629.421-1.039 0-.408-.159-.777-.421-1.042H9.71zM8.683 22.295c.404 0 .766-.167 1.027-.429l.003-.008c.261-.261.421-.631.421-1.036 0-.41-.159-.778-.421-1.044H9.71a1.42 1.42 0 0 0-1.027-.432 1.4 1.4 0 0 0-1.02.432h-.007c-.26.266-.422.634-.422 1.044 0 .406.161.775.422 1.036l.007.008c.258.262.617.429 1.02.429zm7.89-4.462c.359-.096.683-.33.882-.684l.027-.052a1.47 1.47 0 0 0 .114-1.067 1.454 1.454 0 0 0-.675-.896l-.021-.014a1.425 1.425 0 0 0-1.078-.132c-.36.091-.684.335-.881.686-.2.349-.241.75-.146 1.119.099.363.33.691.675.896h.002c.346.203.737.239 1.101.144zm-6.405-7.342a2.083 2.083 0 0 0-1.485-.627c-.58 0-1.103.242-1.482.627-.378.385-.612.916-.612 1.507s.233 1.124.612 1.514a2.08 2.08 0 0 0 2.967 0c.379-.39.612-.923.612-1.514s-.233-1.122-.612-1.507zm-.835-2.51c.843.141 1.6.552 2.178 1.144h.004c.092.093.182.196.265.299l1.446-.851a3.176 3.176 0 0 1-.047-1.808 3.149 3.149 0 0 1 1.456-1.926l.025-.016a3.062 3.062 0 0 1 2.345-.306c.77.21 1.465.721 1.898 1.482v.002c.431.757.518 1.626.313 2.408a3.145 3.145 0 0 1-1.456 1.928l-.198.118h-.02a3.095 3.095 0 0 1-2.154.201 3.127 3.127 0 0 1-1.514-.944l-1.444.848a4.162 4.162 0 0 1 0 2.879l1.444.846c.413-.47.939-.789 1.514-.944a3.041 3.041 0 0 1 2.371.319l.048.023v.002a3.17 3.17 0 0 1 1.408 1.906 3.215 3.215 0 0 1-.313 2.405l-.026.053-.003-.005a3.147 3.147 0 0 1-1.867 1.436 3.096 3.096 0 0 1-2.371-.318v-.006a3.156 3.156 0 0 1-1.456-1.927 3.175 3.175 0 0 1 .047-1.805l-1.446-.848a3.905 3.905 0 0 1-.265.294l-.004.005a3.938 3.938 0 0 1-2.178 1.138v1.699a3.09 3.09 0 0 1 1.56.862l.002.004c.565.572.914 1.368.914 2.243 0 .873-.35 1.664-.914 2.239l-.002.009a3.1 3.1 0 0 1-2.21.931 3.1 3.1 0 0 1-2.206-.93h-.002v-.009a3.186 3.186 0 0 1-.916-2.239c0-.875.35-1.672.916-2.243v-.004h.002a3.1 3.1 0 0 1 1.558-.862v-1.699a3.926 3.926 0 0 1-2.176-1.138l-.006-.005a4.098 4.098 0 0 1-1.173-2.874c0-1.122.452-2.136 1.173-2.872h.006a3.947 3.947 0 0 1 2.176-1.144V6.289a3.137 3.137 0 0 1-1.558-.864h-.002v-.004a3.192 3.192 0 0 1-.916-2.243c0-.871.35-1.669.916-2.243l.002-.002A3.084 3.084 0 0 1 8.683 0c.861 0 1.641.355 2.21.932v.002h.002c.565.574.914 1.372.914 2.243 0 .876-.35 1.667-.914 2.243l-.002.005a3.142 3.142 0 0 1-1.56.864v1.692zm8.121-1.129l-.012-.019a1.452 1.452 0 0 0-.87-.668 1.43 1.43 0 0 0-1.103.146h.002c-.347.2-.58.529-.677.896-.095.365-.054.768.146 1.119l.007.009c.2.347.519.579.874.673.357.103.755.059 1.098-.144l.019-.009a1.47 1.47 0 0 0 .657-.885 1.493 1.493 0 0 0-.141-1.118"
        fill="#231F20"
      />
    </svg>
  );
}

// 29. gRPC (Official Network Nodes Topology)
export function GRPCIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#244B5A" />
      <path
        d="M6 8l6-4 6 4v8l-6 4-6-4V8z"
        stroke="#00B5B2"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="4" r="1.3" fill="#FFFFFF" />
      <circle cx="6" cy="8" r="1.3" fill="#72CBCA" />
      <circle cx="18" cy="8" r="1.3" fill="#72CBCA" />
      <circle cx="12" cy="12" r="1.8" fill="#00B5B2" />
      <circle cx="6" cy="16" r="1.3" fill="#72CBCA" />
      <circle cx="18" cy="16" r="1.3" fill="#72CBCA" />
      <circle cx="12" cy="20" r="1.3" fill="#FFFFFF" />
      <path d="M12 4v8m-6-4l6 4m6-4l-6 4m0 0v8m-6-4l6-4m6 4l-6-4" stroke="#00B5B2" strokeWidth="1.1" />
    </svg>
  );
}

