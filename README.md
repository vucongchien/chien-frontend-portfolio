# ✦ Vũ Công Chiến — Software Engineer Portfolio

Trang web Portfolio cá nhân của **Vũ Công Chiến (Software Engineer)**, được xây dựng theo phong cách thiết kế **Conversational Editorial Minimalism**, kết hợp kiến trúc **Feature-Driven Frontend** và **Clean Server Modules & BFF** trên nền tảng **Next.js 16 (Turbopack)** và **Tailwind CSS v4**.

---

## 🚀 Tính Năng & Điểm Nhấn Công Nghệ

- **🎨 Conversational Editorial Minimalism:**
  - Bảng màu chuẩn **60-30-10** (`Slate-50/White` 60%, `Slate-800` 30%, `Indigo-600` 10%).
  - Bố cục đối thoại dạng hội thoại xen kẽ (Alternating Bands: AI Mascot trả lời bên trái, User hỏi bên phải).
  - Typography thanh lịch với font **Lora Serif** kết hợp **Monospace** cho microcopy.
  - Điểm nhấn hình thoi kim cương (`Diamond rotate-45`) và khối bóng 3D (`translate-x-1 translate-y-1`).
- **⚡ Hiệu Năng & Tốc Độ:**
  - Next.js 16 với trình biên dịch Turbopack siêu tốc.
  - **Oxlint** kiểm tra cú pháp mã nguồn cực nhanh (< 20ms cho toàn bộ dự án).
  - Tự động sinh metadata phiên bản build qua script `scripts/generate-changelog.mjs`.
- **🛡️ Clean & Scalable Architecture:**
  - **Design Tokens Layer (W3C Standard):** Quản lý tập trung tại `src/config/tokens.ts`.
  - **Headless Data & Logic:** Tách biệt hoàn toàn dữ liệu tĩnh và State logic (`useTypewriter`, `useScrollProgress`) khỏi tầng hiển thị.
  - **Feature-Driven Frontend:** Đóng gói giao diện độc lập (`hero`, `about`, `projects`, `skills`, `contact`, `changelog`).
  - **Server & BFF Modules:** Đóng gói logic backend/BFF (`src/server/modules/`), sẵn sàng mở rộng cho **AI Chat Streaming** và **Notes** mà không làm thay đổi cấu trúc cũ.
- **🧪 Kiểm Thử Tự Động (E2E Testing):**
  - Hệ thống kiểm thử End-to-End với **Playwright** đảm bảo các luồng tương tác thực tế của người dùng luôn hoạt động ổn định.

---

## 📁 Cấu Trúc Thư Mục Chuẩn Hóa

```
src/
├── app/                              # [Next.js Routing Layer] Pages, Layout & API Routes
│   ├── api/                          # REST Endpoints (Streaming AI, Webhooks, Public API)
│   ├── changelog/                    # Trang Changelog độc lập (/changelog)
│   ├── notes/                        # Trang Notes (/notes) và chi tiết (/notes/[slug])
│   ├── globals.css                   # Tailwind v4 Theme Tokens & Animation Keyframes
│   ├── layout.tsx                    # Root Layout (Lora Font & Global Meta)
│   └── page.tsx                      # Main Page (ScrollIndicator -> Hero -> About -> Contact -> Footer)
│
├── config/                           # [Design Tokens Layer] W3C Standard Tokens
│   └── tokens.ts                     # Colors 60-30-10, Radius, Typography, Shadows
│
├── components/                       # [Shared UI Primitives & Layout]
│   ├── ui/                           # UI Atoms: Button, Badge, Diamond, SectionHeading, SectionDivider, ChatBubble, FadeInOnScroll
│   └── layout/                       # Layout Molecules: Footer, ScrollIndicator
│
├── features/                         # 🎨 [Frontend Feature Modules]
│   ├── hero/                         # HeroSection.tsx, useTypewriter.ts
│   ├── about/                        # AboutSection.tsx (Conversational Bands)
│   ├── projects/                     # ProjectsSection.tsx, ProjectCard.tsx, ProjectRow.tsx
│   ├── skills/                       # SkillsSection.tsx, SkillCard.tsx
│   ├── contact/                      # ContactSection.tsx, ContactInputBar.tsx
│   ├── changelog/                    # ChangelogTimeline.tsx
│   └── notes/                        # NoteFeed.tsx, NoteCard.tsx, NoteHeader.tsx, NoteContent.tsx, NoteBottomAction.tsx
│
├── server/                           # 🛡️ [Backend & BFF Layer - Feature-Based Modules]
│   ├── shared/                       # Cấu hình dùng chung (email.ts, env.ts)
│   └── modules/                      # Các module nghiệp vụ Server theo từng Feature
│       ├── projects/                 # projects.service.ts, projects.data.ts
│       ├── skills/                   # skills.service.ts, skills.data.ts
│       ├── changelog/                # changelog.service.ts, changelog.data.ts
│       ├── contact/                  # contact.service.ts, contact.action.ts, contact.schema.ts
│       └── notes/                    # notes.service.ts, notes.data.ts
│
├── lib/                              # [Pure Utilities] Tiện ích dùng chung (clsx + twMerge, version helper, formatDate)
│   ├── utils.ts
│   └── version.ts
│
└── types/                            # [Global Types] Định nghĩa TypeScript toàn cục
    └── index.ts
```

---

## 📋 Danh Sách Dự Án Tiêu Biểu Trong Portfolio

1. **E-commerce AI Agent:** Web bán hàng tích hợp AI Agent tư vấn sản phẩm thông minh (*Next.js, FastAPI, CopilotKit, Supabase, TypeScript*).
2. **Interactive Novel:** Nền tảng tạo truyện tương tác sinh ra bởi AI (*React, Vite, Express, PostgreSQL*).
3. **My Dress Up Darling:** Website giới thiệu anime với giao diện trực quan (*HTML5, CSS3, JavaScript*).

---

## 🎨 Nguồn Cảm Hứng Thiết Kế (Design Reference)

- **Notes Page UI:** Giao diện trang Notes và trang đọc chi tiết được lấy cảm hứng trực tiếp từ phong cách tối giản của [Tom Weightman](https://www.tomweightman.com/).

---

## 📄 License & Bản Quyền

© 2026 **Vũ Công Chiến**. Toàn bộ mã nguồn và thiết kế được phát triển cho mục đích xây dựng portfolio cá nhân.
