# Project Agent Rules & Development Guidelines

## 1. Ngôn ngữ & Kế hoạch
- Luôn lên kế hoạch bằng tiếng Việt trước khi triển khai các thay đổi lớn.
- Trả lời và giao tiếp bằng tiếng Việt.

## 2. Quy định về Kiểm thử (Testing Rules)
- **CHỈ viết Test khi THỰC SỰ LIÊN QUAN ĐẾN NGHIỆP VỤ (Business Logic):**
  - Chỉ viết unit/integration test cho logic tính toán, thuật toán xử lý dữ liệu phức tạp, Server validation / schemas, hoặc các services nghiệp vụ quan trọng.
  - **CẤM viết test thừa cho:** Design Tokens, Types/Interfaces, CSS/Style, Static UI rendering, hoặc các thao tác đơn giản không có logic nghiệp vụ. Dự án thường xuyên refactor nên tuyệt đối tránh các test gây cản trở và lãng phí thời gian bảo trì.
- **Tập trung vào E2E Testing (Playwright):** Ưu tiên duy trì các bài kiểm thử End-to-End cho các luồng trải nghiệm chính của người dùng thực tế trên trình duyệt.
- Mọi tài liệu và mục lục kịch bản test đặt trong thư mục `tests/e2e/README.md`.

## 3. Tư duy Hệ thống (System Thinking) & Chất lượng Code
- Tìm ra mục tiêu cụ thể, giải quyết vấn đề gì trước khi thiết kế.
- Tư duy dữ liệu như dòng chảy (Data flow), xác định bottleneck và nơi dễ gây lỗi.
- Thiết kế giảm thiểu rủi ro lan truyền (Change propagation), tách biệt rõ ràng trách nhiệm giữa các module.
- Luôn có xử lý lỗi (error handling), trạng thái loading và dữ liệu rỗng (empty state) đầy đủ.
- Code hướng tới môi trường Production.
- Sử dụng package manager `pnpm` nhất quán trong toàn bộ dự án.

## 4. CI/CD & Build Speed
- Sử dụng **Oxlint** cho fast-lint (`pnpm lint:fast`) kết hợp TypeScript typecheck (`pnpm typecheck`).
- Đảm bảo pipeline CI/CD trên GitHub Actions phản hồi nhanh (< 30s) với cache dependencies.

---

## 5. Kiến trúc Dự án Chuẩn hóa (Architecture Conventions)

Dự án áp dụng mô hình **Feature-Driven kết hợp Centralized Design System & Clean Server Modules**:

```
src/
├── app/                              # [Routing Layer] Next.js App Router (Pages, Layouts, API Routes)
│   ├── api/                          # HTTP REST Endpoints (Streaming AI, Webhooks, Public API)
│   ├── changelog/                    # /changelog page
│   ├── globals.css                   # Tailwind v4 Theme Tokens & Keyframe Animations
│   ├── layout.tsx                    # Root Layout & Typography Lora
│   └── page.tsx                      # Landing Page (Orchestrates Feature Components)
│
├── config/                           # [Design Tokens Layer] W3C Standard Tokens (Single Source of Truth)
│   └── tokens.ts                     # Colors 60-30-10, Radius, Typography, Shadows
│
├── components/                       # [Shared UI Primitives & Layout]
│   ├── ui/                           # UI Atoms: Button, Badge, Diamond, SectionHeading, SectionDivider, ChatBubble, FadeInOnScroll
│   └── layout/                       # Layout Molecules: Navbar, Footer, ScrollIndicator
│
├── features/                         # 🎨 [Frontend Features - UI & Client Logic]
│   ├── hero/                         # HeroSection.tsx, useTypewriter.ts
│   ├── about/                        # AboutSection.tsx
│   ├── projects/                     # ProjectsSection.tsx, ProjectCard.tsx, ProjectRow.tsx
│   ├── skills/                       # SkillsSection.tsx, SkillCard.tsx
│   ├── contact/                      # ContactSection.tsx, ContactInputBar.tsx
│   └── changelog/                    # ChangelogTimeline.tsx
│
├── server/                           # 🛡️ [Backend & BFF Layer - Feature-Based Modules]
│   ├── shared/                       # Cấu hình & SDK dùng chung (db.ts, email.ts, ai.ts, env.ts)
│   └── modules/                      # Các module nghiệp vụ Server đóng gói theo Feature
│       ├── contact/                  # contact.action.ts, contact.service.ts, contact.schema.ts
│       ├── projects/                 # projects.service.ts, projects.data.ts
│       ├── skills/                   # skills.service.ts, skills.data.ts
│       ├── changelog/                # changelog.service.ts, changelog.data.ts
│       ├── chat/ (sau này)           # chat.action.ts, chat.service.ts
│       └── notes/                    # notes.service.ts, notes.data.ts
│
├── lib/                              # [Pure Utilities] Helper dùng được ở cả Client & Server (cn, formatDate)
│   └── utils.ts                      # clsx + twMerge, formatDate
│
└── types/                            # [Global Types]
    └── index.ts
```

### 5.1. Quy ước Đặt tên (Naming Conventions)
- **React Components:** `PascalCase.tsx` (ví dụ: `Button.tsx`, `HeroSection.tsx`, `ProjectCard.tsx`).
- **Server Actions:** `*.action.ts` (ví dụ: `contact.action.ts`, bắt buộc có `'use server'`).
- **Server Services:** `*.service.ts` (ví dụ: `projects.service.ts`, chứa core business logic, không có `'use server'`).
- **Validation Schemas:** `*.schema.ts` (Zod schemas cho form & input).
- **Custom Hooks:** `use + CamelCase.ts` (ví dụ: `useTypewriter.ts`, `useScrollProgress.ts`).
- **Data / Utils:** `kebab-case.ts` hoặc `camelCase.ts` (ví dụ: `projects.data.ts`, `utils.ts`).

### 5.2. Quy tắc Phân định Ranh giới Server / Client
1. **`src/features/`**: Chỉ chứa UI Components, Custom Hooks và Types phía Client. Không chứa Secret Keys hay kết nối DB trực tiếp.
2. **`src/server/shared/`**: Chứa các kết nối cơ sở hạ tầng (Database, AI Client, Mail Client). Luôn có `import 'server-only'`.
3. **`src/server/modules/<feature>/`**:
   - `*.action.ts`: Là Entrypoint nhận dữ liệu từ React UI, validate dữ liệu, rồi gọi `*.service.ts`.
   - `*.service.ts`: Là Lõi nghiệp vụ (Domain Logic / Data Access), phục vụ cho cả Server Action, Route Handler (`app/api/`) và Server Component (`page.tsx`).
4. **`src/app/api/`**: Chỉ dùng cho HTTP Streaming (AI Chat), Third-party Webhook và Public API; không tự viết logic DB bên trong mà uỷ quyền cho Service.

---

## 6. Design System & Master UI Style Guide (Conversational Editorial Minimalism)

### 🎨 6.1. Bảng màu chuẩn (Quy tắc 60-30-10)
- **60% Nền & Bề mặt (Surfaces):**
  - Trang chính: `slate-50` (`#F8FAFC`), `white` (`#FFFFFF`).
  - Dải phân tầng (Alternating Bands): `bg-indigo-50/60` (`#EEF2FF`).
- **30% Chữ & Cấu trúc (Typography & Borders):**
  - Tiêu đề: `slate-900` (`#0F172A`), `slate-800` (`#1E293B`).
  - Nội dung: `slate-600` (`#475569`), `slate-500` (`#64748B`), `slate-400` (`#94A3B8`).
  - Viền mỏng tối giản: `border-slate-200` (`#E2E8F0`), `border-indigo-100`.
- **10% Điểm nhấn (Accents & Soft 3D):**
  - Primary Accent: `indigo-600` (`#4F46E5`), chuyển gradient sang `violet-500`.
  - Secondary Warm Accent: `amber-500` (`#F59E0B`).
  - Khối bóng 3D: `bg-slate-200` hoặc `bg-indigo-200` (`translate-x-1 translate-y-1`).

### ✍️ 6.2. Typography
- **Font chính (Headings & Body):** `Lora` (Serif qua Google Fonts) tạo phong cách báo chí thanh lịch (Editorial).
- **Font kỹ thuật (Code & Microcopy):** `font-mono` (Monospace) cho code tags, section labels (`// hello world`, `◆ label ◆`, `#hash`).

### 📐 6.3. Shapes, Radius & Decorative DNA
- **Bán kính (Radius):** Khung lớn `rounded-2xl` (16px), Card nhỏ `rounded-xl` (12px), Pill/Avatar `rounded-full` (9999px).
- **Họa tiết Kim cương (`rotate-45`):** Luôn đi kèm tiêu đề (`Heading ◆` với `<Diamond size="sm" />`) và các hạt trôi nổi.
- **Section Divider:** Kẹp giữa 2 đường kẻ mảnh `h-px bg-slate-200` là `<Diamond /> label <Diamond />`.
- **Conversational UI Pattern:** Đối thoại với mascot (`rounded-full border border-slate-200`), câu hỏi người dùng trượt từ phải (`slideInRight`, nền `indigo-50`), câu trả lời AI trượt từ trái (`slideInLeft`, nền `white`).

### 🔒 6.4. Design Consistency Rules (Tuân thủ Token Tuyệt đối)
- Mọi feature mới (bao gồm cả Blog, AI Chat sau này) **BẮT BUỘC** sử dụng Design Tokens từ `src/config/tokens.ts` và các Atoms UI Primitives từ `src/components/ui/` (`Button`, `Badge`, `Diamond`, `SectionHeading`, `SectionDivider`, `ChatBubble`).
- Cấm tự tiện hardcode mã màu hoặc kiểu dáng phá vỡ Design System.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
