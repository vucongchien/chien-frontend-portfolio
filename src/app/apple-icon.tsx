import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

/**
 * Dynamic Apple Touch Icon 180x180 cho iOS/Android Home Screen & Bookmarks
 */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f172a",
          borderRadius: "40px",
          border: "4px solid #334155",
        }}
      >
        <svg
          viewBox="0 0 48 48"
          width="120"
          height="120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24" cy="24" r="16" fill="#2BD9D9" opacity="0.2" />
          <path
            d="M24 6 C24 16 32 24 42 24 C32 24 24 32 24 42 C24 32 16 24 6 24 C16 24 24 16 24 6 Z"
            fill="url(#appleGrad)"
          />
          <defs>
            <linearGradient
              id="appleGrad"
              x1="6"
              y1="6"
              x2="42"
              y2="42"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#1C8DA6" />
              <stop offset="35%" stopColor="#2BD9D9" />
              <stop offset="70%" stopColor="#50F2D4" />
              <stop offset="100%" stopColor="#F2D8A7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
