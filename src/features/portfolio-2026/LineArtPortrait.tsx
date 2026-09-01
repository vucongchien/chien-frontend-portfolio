import React from "react";

interface LineArtPortraitProps {
  imageSrc?: string;
  alt?: string;
  className?: string;
}

export function LineArtPortrait({
  imageSrc,
  alt = "Artistic portrait sketch",
  className = "",
}: LineArtPortraitProps) {
  return (
    <div
      className={`relative w-full h-full flex items-center justify-center p-0 m-0 bg-white select-none ${className}`}
    >
      {imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-full max-h-screen object-contain p-4 sm:p-6 md:p-10 select-none"
        />
      ) : (
        /* High-fidelity Vector Line-Art Sketch Illustration (Full Height) */
        <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8">
          <svg
            viewBox="0 0 400 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full max-h-screen text-black"
          >
            <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              {/* Hair back contour */}
              <path
                d="M120 180 C100 230, 95 320, 110 380 C115 400, 125 420, 130 430"
                strokeWidth="1.8"
                opacity="0.85"
              />
              <path
                d="M280 180 C305 230, 310 320, 290 380 C285 400, 275 420, 270 430"
                strokeWidth="1.8"
                opacity="0.85"
              />

              {/* Head / Face Silhouette */}
              <path
                d="M150 160 C130 220, 140 280, 160 310 C180 340, 210 345, 235 325 C255 295, 265 235, 255 165"
                strokeWidth="2.2"
              />
              {/* Chin & Jawline refinement */}
              <path d="M162 275 C168 315, 195 332, 215 330 C238 328, 252 295, 255 270" strokeWidth="1.6" />

              {/* Hair Top & Volume */}
              <path
                d="M115 170 C120 100, 160 60, 205 60 C255 60, 290 100, 290 170 C280 140, 260 120, 210 120 C160 120, 130 140, 115 170 Z"
                strokeWidth="2"
                fill="none"
              />

              {/* Expressive Hair Strands & Bangs */}
              <path d="M140 120 C145 160, 150 200, 148 230 C147 240, 152 245, 158 220 C165 190, 175 160, 185 140" />
              <path d="M175 130 C185 170, 190 220, 192 240 C194 245, 198 235, 202 210 C210 170, 218 145, 225 135" />
              <path d="M215 130 C225 165, 235 205, 242 235 C246 220, 248 190, 245 160" />
              <path d="M125 180 C110 240, 115 310, 135 360" strokeWidth="1.4" />
              <path d="M275 180 C290 240, 285 310, 265 360" strokeWidth="1.4" />

              {/* Subtle Eyes with Focused Gaze */}
              {/* Left Eye */}
              <path d="M165 225 Q180 215 192 225" strokeWidth="2.2" />
              <circle cx="180" cy="227" r="4.5" fill="currentColor" stroke="none" />
              <circle cx="178.5" cy="225.5" r="1.5" fill="#ffffff" stroke="none" />
              <path d="M170 235 Q180 238 188 235" strokeWidth="1.2" />
              <path d="M168 212 Q180 208 190 214" strokeWidth="1.5" opacity="0.75" />

              {/* Right Eye */}
              <path d="M212 225 Q224 215 239 225" strokeWidth="2.2" />
              <circle cx="224" cy="227" r="4.5" fill="currentColor" stroke="none" />
              <circle cx="222.5" cy="225.5" r="1.5" fill="#ffffff" stroke="none" />
              <path d="M216 235 Q224 238 234 235" strokeWidth="1.2" />
              <path d="M214 214 Q224 208 236 212" strokeWidth="1.5" opacity="0.75" />

              {/* Nose & Mouth */}
              <path d="M202 245 L200 258 L206 259" strokeWidth="1.4" />
              <path d="M190 282 Q202 286 214 282" strokeWidth="2" />
              <path d="M197 292 Q202 294 207 292" strokeWidth="1.2" opacity="0.6" />

              {/* Neck & Collar / Shoulders */}
              <path d="M182 328 L178 390 C150 405, 110 425, 70 450" strokeWidth="2" />
              <path d="M222 328 L226 390 C255 405, 295 425, 335 450" strokeWidth="2" />
              <path d="M178 390 C192 402, 212 402, 226 390" strokeWidth="1.6" />

              {/* Subtle Collarbone / Clothing line sketch */}
              <path d="M140 435 Q180 420 200 435 Q220 420 260 435" strokeWidth="1.2" opacity="0.6" />
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}
