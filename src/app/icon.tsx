import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

/**
 * Dynamic Favicon 32x32 cho tab trình duyệt
 */
export default function Icon() {
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
          borderRadius: "8px",
          border: "1px solid #334155",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2 C12 8 16 12 22 12 C16 12 12 16 12 22 C12 16 8 12 2 12 C8 12 12 8 12 2 Z"
            fill="url(#favGrad)"
          />
          <defs>
            <linearGradient
              id="favGrad"
              x1="2"
              y1="2"
              x2="22"
              y2="22"
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
