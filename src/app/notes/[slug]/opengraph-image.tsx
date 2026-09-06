import { ImageResponse } from "next/og";
import { getNoteBySlug } from "@/server/modules/notes/notes.service";

export const runtime = "nodejs";
export const alt = "Engineering Note · Vũ Công Chiến";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function NoteOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  const title = note?.title || "Engineering Note";
  const tags = note?.tags || ["Engineering", "Frontend"];
  const readingTime = note?.readingTime || 3;
  const publishedDate = note?.publishedAt || new Date().toISOString().split("T")[0];

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
                width: "16px",
                height: "16px",
                backgroundColor: "#4f46e5",
                transform: "rotate(45deg)",
              }}
            />
            <span
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#4f46e5",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Vũ Công Chiến · Notes
            </span>
          </div>
          <span
            style={{
              fontSize: 18,
              color: "#64748b",
              backgroundColor: "#ffffff",
              padding: "6px 16px",
              borderRadius: "9999px",
              border: "1px solid #e2e8f0",
            }}
          >
            {readingTime} phút đọc · {publishedDate}
          </span>
        </div>

        {/* Note Title & Excerpt */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              maxWidth: "1040px",
            }}
          >
            {title}
          </div>
          {note?.excerpt && (
            <div
              style={{
                fontSize: 24,
                color: "#475569",
                lineHeight: 1.4,
                maxWidth: "960px",
              }}
            >
              {note.excerpt}
            </div>
          )}
        </div>

        {/* Bottom Tags */}
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
          <div style={{ display: "flex", gap: "10px" }}>
            {tags.slice(0, 4).map((tag) => (
              <div
                key={tag}
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#334155",
                  backgroundColor: "#ffffff",
                  padding: "6px 14px",
                  borderRadius: "6px",
                  border: "1px solid #cbd5e1",
                }}
              >
                #{tag}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 18, color: "#94a3b8", fontWeight: 500 }}>
            vucongchien.vercel.app/notes
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
