import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Vu Cong Chien · Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function RootOpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f8fafc",
          padding: "70px 80px",
          border: "12px solid #e2e8f0",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        {/* Top Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "18px",
                height: "18px",
                backgroundColor: "#4f46e5",
                transform: "rotate(45deg)",
              }}
            />
            <span
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: "#0f172a",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Vũ Công Chiến
            </span>
          </div>
          <span
            style={{
              fontSize: 20,
              color: "#64748b",
              backgroundColor: "#ffffff",
              padding: "8px 18px",
              borderRadius: "9999px",
              border: "1px solid #e2e8f0",
              fontWeight: 500,
            }}
          >
            Software Engineer
          </span>
        </div>

        {/* Main Content Center */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Engineering Portfolio & Notes
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#475569",
              lineHeight: 1.4,
              maxWidth: "950px",
            }}
          >
            Conversational Editorial Minimalism · High-Performance Web · Clean Architecture
          </div>
        </div>

        {/* Bottom Bar / Tech Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #e2e8f0",
            paddingTop: "24px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            {["Next.js 16", "React 19", "Tailwind CSS v4", "TypeScript"].map((tech) => (
              <div
                key={tech}
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#4f46e5",
                  backgroundColor: "#eef2ff",
                  padding: "6px 14px",
                  borderRadius: "8px",
                  border: "1px solid #c7d2fe",
                }}
              >
                {tech}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 20, color: "#94a3b8", fontWeight: 500 }}>
            chien-frontend-portfolio.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
