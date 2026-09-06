"use client";

import Script from "next/script";

export interface MicrosoftClarityProps {
  projectId?: string;
  enabledInDev?: boolean;
}

/**
 * Component tích hợp Microsoft Clarity vào ứng dụng Next.js.
 * - Sử dụng strategy="lazyOnload" để chỉ tải script khi trình duyệt nhàn rỗi, không làm chậm FCP/LCP.
 * - Mặc định tự động vô hiệu hóa trên localhost/development để tránh spam dữ liệu rác.
 */
export function MicrosoftClarity({
  projectId,
  enabledInDev,
}: MicrosoftClarityProps) {
  const clarityId = projectId || process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
  const isDevEnabled =
    enabledInDev ?? process.env.NEXT_PUBLIC_CLARITY_ENABLED_IN_DEV === "true";

  // Không có Project ID thì không chèn script
  if (!clarityId || clarityId.trim() === "") {
    return null;
  }

  // Tự động bỏ qua trên môi trường development trừ khi được bật cờ rõ ràng
  if (process.env.NODE_ENV === "development" && !isDevEnabled) {
    return null;
  }

  return (
    <Script
      id="microsoft-clarity-init"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${clarityId.trim()}");
        `,
      }}
    />
  );
}

export default MicrosoftClarity;
