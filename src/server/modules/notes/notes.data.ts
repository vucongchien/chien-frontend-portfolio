import type { NotePost } from "@/types";

// Helper to create a note post quickly
const note = ({
  slug,
  title,
  excerpt,
  publishedAt,
  category,
  content,
}: {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  content: string;
}): NotePost => ({
  slug,
  title,
  excerpt,
  publishedAt,
  tags: [category],
  author: { name: "Vũ Công Chiến", role: "Software Engineer" },
  content,
});

const CONTENT_SHORT = `
Bài viết này phân tích chuyên sâu các vấn đề kỹ thuật trong thực tế, đúc rút từ kinh nghiệm xây dựng sản phẩm production.

## Bối cảnh
Khi hệ thống phát triển theo thời gian, yêu cầu kỹ thuật ngày càng phức tạp. Cần có cách tiếp cận bài bản để kiểm soát độ phức tạp này.

\`\`\`typescript
// Ví dụ thực tế
const result = await processData({
  input: rawData,
  transform: normalizeSchema,
  output: 'structured',
});
\`\`\`

## Kết luận
Áp dụng đúng nguyên tắc giúp hệ thống dễ maintain, scale tốt và ít lỗi hơn trong dài hạn.
`;

const SYSTEM_THINKING_CONTENT = `
Trong phát triển phần mềm hiện đại, ứng dụng Frontend ngày càng phức tạp với vô số trạng thái phân tán, tương tác bất đồng bộ và các yêu cầu nghiệp vụ thay đổi liên tục. Nếu chúng ta chỉ tiếp cận việc lập trình theo kiểu "gặp đâu code đó" hoặc chỉ tập trung giải quyết một component cục bộ, hệ thống sẽ rất nhanh chóng trở nên mong manh (fragile).

> **System Thinking (Tư duy hệ thống)** là phương pháp luận nhìn nhận toàn bộ ứng dụng như một mạng lưới các thành phần liên kết chặt chẽ với nhau, hiểu rõ nguyên nhân - kết quả và thiết kế để kiểm soát sự lan truyền của các thay đổi.

\`\`\`
[Data Source] ──> [Domain Services] ──> [UI State Layer] ──> [Atomic UI Primitives]
      ▲                                                                │
      └────────────────── Feedback & Telemetry ────────────────────────┘
\`\`\`

## 1. Xác định mục tiêu trước khi thiết kế
Mọi dòng code viết ra đều phải trả lời câu hỏi: *Mô-đun này phục vụ mục tiêu gì và giải quyết vấn đề cốt lõi nào?* Tránh việc tạo ra các abstraction sớm hoặc viết các đoạn code quá phức tạp chỉ để giải quyết một trường hợp giả định.

## 2. Tư duy dữ liệu như một dòng chảy
Dữ liệu trong ứng dụng phải có nguồn gốc rõ ràng (Single Source of Truth) và chảy một chiều:
- **Nơi phát sinh dữ liệu (Ingress):** Server Actions, WebSockets, User Events.
- **Nơi chuyển đổi (Transformation):** Pure Utilities, Domain Services.
- **Nơi tiêu thụ (Egress):** UI Components, Local Storage, Analytics.

## 3. Hạn chế rủi ro lan truyền
Khi một yêu cầu thay đổi xuất hiện, một hệ thống tốt sẽ chỉ yêu cầu chỉnh sửa tại đúng một điểm mà không làm vỡ các phần còn lại:
- Tách biệt ranh giới giữa Client và Server.
- Quản lý Design Tokens tập trung theo chuẩn W3C DTCG.

## 4. Kết luận
System Thinking không phải là một công cụ kỹ thuật cụ thể, mà là một tư duy — cách nhìn nhận vấn đề từ góc độ toàn cục thay vì cục bộ. Áp dụng nhất quán sẽ tạo ra codebase dễ mở rộng và ít lỗi hơn.
`;

const AI_AGENT_CONTENT = `
AI Agent không chỉ đơn thuần là gọi một API và trả về kết quả. Trong môi trường production, agent phải xử lý được sự không chắc chắn, retry khi thất bại và không bao giờ làm mất dữ liệu người dùng.

## Nguyên tắc Idempotency
Mỗi tool call phải có thể chạy lại mà không gây ra side effect:

\`\`\`typescript
async function sendEmail(params: EmailParams, requestId: string) {
  const existing = await db.sentEmails.findOne({ requestId });
  if (existing) return existing; // Idempotent
  const result = await mailer.send(params);
  await db.sentEmails.create({ requestId, ...result });
  return result;
}
\`\`\`

## Circuit Breaker Pattern
Khi một service liên tục thất bại, ngắt kết nối để bảo vệ hệ thống và ngăn lỗi lan truyền diện rộng.

## Observability
Mỗi bước agent thực thi phải được log đầy đủ metadata để truy vết và debug nhanh chóng khi có lỗi.

## Kết luận
Độ tin cậy của AI Agent đến từ thiết kế kỹ lưỡng trong việc kiểm soát luồng dữ liệu, không phải từ model AI mạnh hơn.
`;

const DESIGN_SYSTEM_CONTENT = `
Khi team phát triển lớn lên, sự không nhất quán trong UI là điều không thể tránh khỏi nếu không có hệ thống chuẩn hóa.

## W3C Design Token Community Group
DTCG định nghĩa chuẩn mô tả design token trong JSON giúp các nền tảng khác nhau có thể chia sẻ cùng một nguồn sự thật:

\`\`\`json
{
  "color": {
    "primary": {
      "$value": "#4F46E5",
      "$type": "color"
    }
  }
}
\`\`\`

## Token trong Tailwind v4
Tailwind v4 cho phép khai báo token trực tiếp trong CSS một cách tự nhiên:

\`\`\`css
@theme inline {
  --color-primary: #4F46E5;
  --font-sans: var(--font-be-vietnam-pro);
}
\`\`\`

## Kết luận
Đầu tư vào Design System sớm sẽ tiết kiệm rất nhiều thời gian trong dài hạn và giữ cho giao diện luôn đồng bộ.
`;

export const notesData: NotePost[] = [
  // ─── ARCHITECTURE ───────────────────────────────────────────────────────────
  {
    slug: "system-thinking-in-frontend-architecture",
    title: "Tư Duy Hệ Thống Trong Kiến Trúc Frontend Hiện Đại",
    excerpt: "",
    publishedAt: "2026-08-25",
    tags: ["Architecture"],
    author: { name: "Vũ Công Chiến", role: "Software Engineer" },
    content: SYSTEM_THINKING_CONTENT,
  },
  note({ slug: "clean-architecture-nextjs-app-router", title: "Clean Architecture trên Next.js App Router", excerpt: "Cách tổ chức code theo Feature-Driven Architecture kết hợp Server/Client boundary rõ ràng trong Next.js 15.", publishedAt: "2026-08-20", category: "Architecture", content: CONTENT_SHORT }),
  note({ slug: "monorepo-turborepo-setup", title: "Thiết Lập Monorepo với Turborepo và pnpm Workspaces", excerpt: "Hướng dẫn thực chiến cấu hình Turborepo cho dự án lớn nhiều package, tối ưu build cache và CI pipeline.", publishedAt: "2026-08-15", category: "Architecture", content: CONTENT_SHORT }),
  note({ slug: "server-actions-patterns", title: "Server Actions: Patterns và Anti-patterns Trong Production", excerpt: "Các pattern đúng khi dùng Server Actions: validation, error handling, optimistic update và revalidation.", publishedAt: "2026-08-10", category: "Architecture", content: CONTENT_SHORT }),
  note({ slug: "module-boundary-design", title: "Thiết Kế Ranh Giới Module Trong Ứng Dụng Frontend", excerpt: "Khi nào tách module, khi nào gộp lại — quyết định quan trọng ảnh hưởng đến khả năng maintain dài hạn.", publishedAt: "2026-08-05", category: "Architecture", content: CONTENT_SHORT }),

  // ─── FRONTEND ────────────────────────────────────────────────────────────────
  note({ slug: "design-system-tokens-w3c", title: "Design System & W3C Token Standard", excerpt: "Xây dựng design token theo chuẩn W3C DTCG, tích hợp với Tailwind v4 và đảm bảo consistency toàn dự án.", publishedAt: "2026-08-18", category: "Frontend", content: DESIGN_SYSTEM_CONTENT }),
  note({ slug: "react-performance-optimization", title: "Tối Ưu React: Từ Re-render Đến Bundle Size", excerpt: "Phân tích và giảm thiểu re-render thừa, lazy loading component, code splitting và đo lường Core Web Vitals.", publishedAt: "2026-08-12", category: "Frontend", content: CONTENT_SHORT }),
  note({ slug: "tailwind-v4-migration", title: "Chuyển Đổi Sang Tailwind CSS v4", excerpt: "Những thay đổi breaking change, cách migrate từ v3 và tận dụng CSS custom property native trong Tailwind v4.", publishedAt: "2026-08-08", category: "Frontend", content: CONTENT_SHORT }),
  note({ slug: "playwright-e2e-testing", title: "Testing Với Playwright: Từ Setup Đến CI/CD", excerpt: "Xây dựng bộ E2E test chất lượng cao với Playwright, tích hợp GitHub Actions và chiến lược test theo user flow.", publishedAt: "2026-08-03", category: "Frontend", content: CONTENT_SHORT }),
  note({ slug: "accessibility-practical-guide", title: "Accessibility Thực Chiến Cho Developer", excerpt: "Không chỉ là alt text — hướng dẫn thực tế về ARIA, keyboard navigation, focus management và screen reader.", publishedAt: "2026-07-28", category: "Frontend", content: CONTENT_SHORT }),
  note({ slug: "css-container-queries", title: "Container Queries: CSS Responsive Thế Hệ Mới", excerpt: "Container Queries cho phép component tự responsive theo container của nó, không phải viewport — thay đổi cách build UI.", publishedAt: "2026-07-22", category: "Frontend", content: CONTENT_SHORT }),
  note({ slug: "view-transitions-api", title: "View Transitions API: Hoạt Ảnh Chuyển Trang Mượt Mà", excerpt: "Triển khai page transitions mượt mà với View Transitions API trong Next.js mà không cần animation library.", publishedAt: "2026-07-18", category: "Frontend", content: CONTENT_SHORT }),

  // ─── NEW TECHNOLOGY ──────────────────────────────────────────────────────────
  {
    slug: "building-reliable-ai-agents-with-nextjs",
    title: "Xây Dựng AI Agent Đáng Tin Cậy Với Next.js",
    excerpt: "Thiết kế AI Agent production-ready: idempotency, circuit breaker, observability và xử lý lỗi graceful trong streaming.",
    publishedAt: "2026-08-22",
    tags: ["New Technology"],
    author: { name: "Vũ Công Chiến", role: "Software Engineer" },
    content: AI_AGENT_CONTENT,
  },
  note({ slug: "llm-structured-output", title: "Structured Output Từ LLM: Từ JSON Schema Đến Zod", excerpt: "Kỹ thuật bắt LLM trả về dữ liệu có cấu trúc nhất quán, validate bằng Zod và xử lý khi model không tuân theo schema.", publishedAt: "2026-08-16", category: "New Technology", content: CONTENT_SHORT }),
  note({ slug: "rag-architecture-production", title: "RAG Architecture Trong Production", excerpt: "Retrieval-Augmented Generation từ prototype đến production: chunking strategy, embedding, reranking và evaluation.", publishedAt: "2026-08-11", category: "New Technology", content: CONTENT_SHORT }),
  note({ slug: "vercel-ai-sdk-streaming", title: "Vercel AI SDK: Streaming UI Với useChat", excerpt: "Triển khai chat streaming với Vercel AI SDK, xử lý tool calls, đọc metadata và tối ưu TTFB cho AI response.", publishedAt: "2026-08-06", category: "New Technology", content: CONTENT_SHORT }),
  note({ slug: "webassembly-frontend-use-cases", title: "WebAssembly Trong Frontend: Khi Nào Nên Dùng?", excerpt: "Phân tích các use case thực tế của WASM: image processing, cryptography, parser engine và hiệu năng so với JS thuần.", publishedAt: "2026-07-30", category: "New Technology", content: CONTENT_SHORT }),
  note({ slug: "edge-runtime-nextjs", title: "Edge Runtime Trong Next.js: Lợi Thế và Giới Hạn", excerpt: "Khi nào nên deploy lên Edge Runtime, những API nào không khả dụng và cách benchmark latency thực tế.", publishedAt: "2026-07-25", category: "New Technology", content: CONTENT_SHORT }),
  note({ slug: "web-components-2026", title: "Web Components Năm 2026: Có Còn Đáng Học?", excerpt: "Đánh giá lại Web Components sau 10 năm: Shadow DOM, Custom Elements, và khi nào chúng thực sự cần thiết.", publishedAt: "2026-07-20", category: "New Technology", content: CONTENT_SHORT }),

  {
    slug: "conversational-editorial-minimalism-design",
    title: "Triết Lý Thiết Kế Conversational Editorial Minimalism",
    excerpt: "Phân tích hệ thống design language được xây dựng cho portfolio này: từ token color đến typography hierarchy và micro-interaction.",
    publishedAt: "2026-07-15",
    tags: ["Frontend"],
    author: { name: "Vũ Công Chiến", role: "Software Engineer" },
    content: DESIGN_SYSTEM_CONTENT,
  },
  note({ slug: "github-actions-frontend-ci", title: "GitHub Actions CI/CD Cho Frontend: Nhanh Dưới 30 Giây", excerpt: "Cấu hình pipeline lint, typecheck, test và build tối ưu với pnpm cache, oxlint và Turborepo remote cache.", publishedAt: "2026-07-10", category: "Architecture", content: CONTENT_SHORT }),
];
