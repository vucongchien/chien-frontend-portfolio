import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "nodejs";
export const alt = `${siteConfig.name} · ${siteConfig.author.role}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function RootOpenGraphImage() {
  // Đọc ảnh avatar.png (bản sketch gốc) cho OpenGraph SEO
  let avatarBase64 = "";
  try {
    const pngAvatarPath = path.join(process.cwd(), "public", "avatar.png");
    const svgAvatarPath = path.join(process.cwd(), "public", "avatar_SEO.svg");

    if (fs.existsSync(pngAvatarPath)) {
      const avatarBuffer = fs.readFileSync(pngAvatarPath);
      avatarBase64 = `data:image/png;base64,${avatarBuffer.toString("base64")}`;
    } else if (fs.existsSync(svgAvatarPath)) {
      const svgBuffer = fs.readFileSync(svgAvatarPath);
      avatarBase64 = `data:image/svg+xml;base64,${svgBuffer.toString("base64")}`;
    }
  } catch (error) {
    console.error("[OG-Image] Không thể đọc avatar.png hoặc avatar_SEO.svg:", error);
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#ffffff",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "36px 48px",
          fontFamily: "Georgia, Cambria, 'Times New Roman', serif",
        }}
      >
        {/* ══════════════════════════════════════════════════════════════════
            CỘT TRÁI: CHÂN DUNG PHÁC HỌA NGHỆ THUẬT (LINE ART / AVATAR)
            ══════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            width: "46%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {avatarBase64 ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={avatarBase64}
              alt="Artistic portrait sketch"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f8fafc",
                borderRadius: "16px",
                color: "#64748b",
                fontSize: 28,
              }}
            >
              VŨ CÔNG CHIẾN
            </div>
          )}
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            CỘT PHẢI: TYPOGRAPHY, VAI TRÒ & NÚT CTA HERO SECTION
            ══════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            width: "52%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "32px 0 24px 28px",
          }}
        >
          {/* PHẦN GIỮA: TÊN VÀ VAI TRÒ CHUẨN HERO SECTION */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            <div
              style={{
                fontSize: 54,
                fontWeight: 800,
                color: "#000000",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                lineHeight: 1.12,
              }}
            >
              VŨ CÔNG CHIẾN
            </div>

            {/* Role kèm vạch cursor chuyển màu signature */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              }}
            >
              <span
                style={{
                  fontSize: 24,
                  color: "#3f3f46",
                  fontWeight: 400,
                  letterSpacing: "0.04em",
                }}
              >
                A software engineer
              </span>
              <div
                style={{
                  width: "3px",
                  height: "26px",
                  background:
                    "linear-gradient(135deg, #1C8DA6 0%, #2BD9D9 35%, #50F2D4 70%, #F2D8A7 100%)",
                }}
              />
            </div>
          </div>

          {/* PHẦN DƯỚI: NÚT BẤM CTA ĐẶC TRƯNG & FOOTER METADATA */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "100%",
            }}
          >
            {/* Hàng nút bấm CTA */}
            <div
              style={{
                display: "flex",
                gap: "14px",
                alignItems: "center",
              }}
            >
              {/* Nút 1: View Projects */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "9px 18px",
                  border: "1px solid #e5e7eb",
                  borderRadius: "4px",
                  backgroundColor: "#ffffff",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#18181b",
                  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                }}
              >
                {/* Icon sao vàng 4 cánh */}
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="#E5A83B"
                >
                  <path d="M12 0 C12 7 17 12 24 12 C17 12 12 17 12 24 C12 17 7 12 0 12 C7 12 12 7 12 0 Z" />
                </svg>
                <span>View Projects</span>
                <span style={{ color: "#71717a", fontWeight: 700 }}>↓</span>
              </div>

              {/* Nút 2: Get in Touch */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "9px 18px",
                  border: "1px solid #e5e7eb",
                  borderRadius: "4px",
                  backgroundColor: "#ffffff",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#18181b",
                  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                }}
              >
                {/* Icon sao vàng 4 cánh */}
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="#E5A83B"
                >
                  <path d="M12 0 C12 7 17 12 24 12 C17 12 12 17 12 24 C12 17 7 12 0 12 C7 12 12 7 12 0 Z" />
                </svg>
                <span>Get in Touch</span>
                <span style={{ color: "#71717a", fontWeight: 700 }}>↗</span>
              </div>
            </div>

            {/* Dòng chân trang tối giản */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "16px",
                borderTop: "1px solid #f1f5f9",
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                fontSize: 14,
                color: "#71717a",
                width: "100%",
              }}
            >
              <span>chien-frontend-portfolio.vercel.app</span>
              <span>Next.js · React · Clean Architecture</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

