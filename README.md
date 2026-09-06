# ✦ Vũ Công Chiến — Software Engineer Portfolio

<p align="center">
  <img src="public/avatar.png" alt="Vũ Công Chiến Avatar" width="220" />
</p>

<p align="center">
  <b>Trang web Portfolio cá nhân của Vũ Công Chiến (Software Engineer)</b><br>
  Xây dựng trên nền tảng <b>Next.js 16 (Turbopack)</b>, <b>React 19</b>, <b>Tailwind CSS v4</b>, kết hợp kiến trúc <b>Clean Server Modules & BFF</b>, hạ tầng <b>Neon Serverless PostgreSQL</b> và hệ thống giám sát <b>Full-Stack Observability</b>.
</p>

<p align="center">
  <a href="https://chien-frontend-portfolio.vercel.app"><img src="https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel" alt="Live Demo" /></a>
  <img src="https://img.shields.io/badge/Next.js-16.3.3-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Prisma-6.19.3-2D3748?style=for-the-badge&logo=prisma" alt="Prisma" />
</p>

---

## 🌟 Điểm Nhấn Kiến Trúc & Công Nghệ Cốt Lõi

### 1. 🎨 Visual Identity & Hero Section 2026
- **Bảng màu Signature 4-Color Palette:** Sự hòa quyện giữa *Deep Ocean Teal* (`#1C8DA6`), *Electric Turquoise* (`#2BD9D9`), *Aqua Mint Neon* (`#50F2D4`) và *Warm Champagne Gold* (`#F2D8A7`).
- **Nghệ thuật phác họa chân dung đa sắc (Line-Art Portrait):** Minh họa phong cách vẽ tay phối dải chuyển màu rực rỡ trên nền trắng tinh khôi (`#ffffff`).
- **Hiệu ứng Typography & Tương tác:**
  - **Morphing Brand Name (`MorphingBrandName2026`):** Tên thương hiệu tự động chuyển vị trí mượt mà theo độ cuộn trang.
  - **Typewriter Animation:** Gõ chữ mượt mà và tương thích 100% với React Compiler.
  - **Nút bấm CTA năng lượng:** Nút *View Projects* và *Get in Touch* gắn icon sao vàng 4 cánh (`#E5A83B`) cùng hiệu ứng hào quang tia sáng khi tương tác.

---

### 2. 🔍 SEO Core Engine & Social Graph Dynamic Rendering
- **Tái hiện 100% Hero Section trên OpenGraph Image (`/opengraph-image`):**
  - Sinh ảnh xem trước động tự động bằng **Satori / `@vercel/og`** chuẩn tỉ lệ 1200x630.
  - Bố cục 2 cột hoàn chỉnh: Bên trái là tranh chân dung nghệ thuật nguyên bản, bên phải là typography Serif quyền lực `"VŨ CÔNG CHIẾN"`, phụ đề `"A software engineer"`, thanh vạch gradient cursor và các nút bấm CTA đặc trưng.
  - Hỗ trợ Dynamic OpenGraph riêng biệt cho từng bài viết kỹ thuật (`/notes/[slug]/opengraph-image`).
- **Single Source of Truth Metadata:** Cấu hình SEO tập trung tại `src/config/site.ts`, tự động đồng bộ hóa ra toàn bộ hệ thống.
- **Search Engine Compliance:**
  - `src/app/robots.ts`: Thiết lập chỉ mục tự động cho Googlebot/Bingbot.
  - `src/app/sitemap.ts`: Dynamic sitemap quét tự động các route tĩnh và toàn bộ bài viết theo chuẩn ISO 8601.
  - **Schema.org Structured Data (JSON-LD):** Khai báo schema `Person` cho tác giả và `BlogPosting` cho bài viết giúp Google hiển thị rich snippet nổi bật.

---

### 3. 📊 Full-Stack Observability & User Analytics
Trang bị bộ 3 công cụ phân tích hành vi và hiệu năng thời gian thực đạt chuẩn Enterprise:

| Công Cụ | Cơ Chế Triển Khai | Vai Trò & Tính Năng |
| :--- | :--- | :--- |
| **Vercel Web Analytics** | `@vercel/analytics/next` (Zero-config, tuân thủ GDPR) | Thống kê lượng truy cập thời gian thực, phân tích thiết bị, hệ điều hành, trình duyệt và quốc gia. |
| **Vercel Speed Insights** | `@vercel/speed-insights/next` (RUM - Real User Monitoring) | Đo lường chính xác các chỉ số **Core Web Vitals** (LCP, INP, CLS, FCP) từ người dùng thực tế. |
| **Microsoft Clarity** | `next/script` (`strategy="afterInteractive"`) | **Session Replay** (quay lại video phiên duyệt web), **Heatmaps** nhiệt độ tương tác, đo độ sâu cuộn trang (Scroll Depth) và phát hiện các thao tác giận dữ (Rage Clicks, Dead Clicks). |

> *Toàn bộ công cụ đo lường đều chạy ngầm bất đồng bộ, đảm bảo **Zero-blocking** và bảo toàn 100% điểm hiệu năng Lighthouse.*

---

### 4. 🗄️ Hạ Tầng Dữ Liệu Bền Vững & Server Architecture
- **Neon Serverless PostgreSQL & Prisma ORM 6.19.3:**
  - Kết nối cơ sở dữ liệu đám mây Neon qua giao thức pooling tối ưu cho môi trường serverless.
  - Mô hình Singleton Client (`src/server/shared/prisma.ts`) ngăn chặn hiện tượng tràn kết nối (Connection Exhaustion) trên Vercel.
- **Tính năng Thả Tim Bền Vững (Atomic Persistent Likes):**
  - **Server Actions** an toàn (`src/server/modules/notes/likes.action.ts`) xử lý tăng/giảm like nguyên tử (Atomic increment/decrement) qua Prisma.
  - **Tách biệt tầng hiển thị & logic (Headless Hook):** Custom hook `useNoteLike` kết hợp `useSyncExternalStore` (chuẩn React 19) đồng bộ trạng thái giữa máy chủ, `localStorage` và nhiều tab trình duyệt song song mà không gây giật số (Flash of unstyled content).

---

### 5. 🧪 Kiểm Thử Chất Lượng Toàn Diện (Testing & Code Quality)
- **Kiểm thử đơn vị (Unit Tests):** Sử dụng **Vitest 4.x** kiểm thử metadata, tính hợp lệ của cấu hình SEO và tự động render kiểm tra buffer ảnh OpenGraph (`tests/unit/metadata.test.ts`).
- **Kiểm thử toàn trình (E2E Tests):** **Playwright** đảm bảo các luồng người dùng chính luôn hoạt động ổn định.
- **Tài liệu kiểm thử:** Toàn bộ mục lục và hướng dẫn kiểm thử được chuẩn hóa tại [tests/README.md](tests/README.md).
- **Siêu tốc với Oxlint:** Kiểm tra cú pháp và chất lượng mã nguồn toàn bộ 77+ files trong **< 50ms**.
- **CI/CD Pipeline Tự Động:** **GitHub Actions** tự động chạy quy trình kiểm tra Lint, TypeScript compilation, Prisma generation và Next.js Production Build trên mỗi lần push.

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

```text
├── Framework:          Next.js 16.3.3 (Turbopack, App Router)
├── UI Library:         React 19.2.3
├── Styling:            Tailwind CSS v4.0 (@theme inline)
├── Typography:         Lora (Google Fonts) & System Monospace
├── Database:           Neon Serverless PostgreSQL
├── ORM:                Prisma ORM 6.19.3
├── OpenGraph Engine:   next/og (Satori & resvg)
├── Analytics:          Vercel Analytics · Vercel Speed Insights · Microsoft Clarity
├── Linter:             Oxlint
├── Testing:            Vitest · Playwright · Testing Library
└── Deployment:         Vercel (CI/CD qua GitHub Actions)
```

---

## 📁 Cấu Trúc Thư Mục Dự Án

```text
chien-frontend-portfolio/
├── .github/workflows/         # CI/CD Pipeline (GitHub Actions)
├── prisma/                    # Prisma schema định nghĩa Neon Database
├── public/                    # Tài nguyên tĩnh, ảnh vector & avatar.png
├── src/
│   ├── app/                   # App Router: Layout, Trang chủ, Notes, Changelog
│   │   ├── opengraph-image.tsx# Dynamic OpenGraph Image (Phong cách Hero Section)
│   │   ├── robots.ts          # Cấu hình robot crawler
│   │   └── sitemap.ts         # Dynamic Sitemap generator
│   ├── components/            # UI components chung & Analytics scripts
│   │   └── analytics/         # Microsoft Clarity integration
│   ├── config/                # Single source of truth (siteConfig, tokens)
│   ├── features/              # Feature-Driven architecture
│   │   ├── portfolio-2026/    # HeroSection2026, AboutMe, Projects, Contact...
│   │   ├── notes/             # Hệ thống ghi chú, bài viết & Headless Like hook
│   │   └── changelog/         # Lịch sử cập nhật dự án
│   └── server/                # Server Actions, Database Services & Prisma singleton
└── tests/                     # Hệ thống kiểm thử tự động (Unit & E2E)
    ├── README.md              # Danh mục hướng dẫn kiểm thử
    └── unit/                  # Vitest unit test suites
```

---

## 🚀 Khởi Chạy Dự Án Cục Bộ (Local Development)

### 1. Cài đặt thư viện:
```bash
pnpm install
```

### 2. Cấu hình biến môi trường:
Tạo file `.env.local` ở thư mục gốc:
```env
DATABASE_URL="postgresql://<user>:<password>@<host>/<database>?sslmode=require"
NEXT_PUBLIC_CLARITY_PROJECT_ID="<your_clarity_project_id>"
```

### 3. Sinh Prisma Client & Kiểm tra Type:
```bash
pnpm typecheck
```

### 4. Khởi chạy máy chủ phát triển:
```bash
pnpm dev
```
Mở trình duyệt tại [http://localhost:3000](http://localhost:3000) để trải nghiệm giao diện.

---

## 📋 Kiểm Tra Chất Lượng Mã Nguồn (CI Commands)

```bash
# Kiểm tra cú pháp siêu tốc bằng Oxlint (< 50ms)
pnpm lint:fast

# Kiểm tra kiểu TypeScript & Prisma Client
pnpm typecheck

# Chạy kiểm thử đơn vị với Vitest
pnpm vitest run

# Đóng gói ứng dụng cho môi trường production
pnpm build
```

---

## 📄 Bản Quyền & Tác Giả

Thiết kế và phát triển bởi **Vũ Công Chiến (Software Engineer)**.  
Mọi thắc mắc hoặc cơ hội hợp tác vui lòng liên hệ:
- **Email:** [vucongchien204@gmail.com](mailto:vucongchien204@gmail.com)
- **Website:** [https://chien-frontend-portfolio.vercel.app](https://chien-frontend-portfolio.vercel.app)
- **GitHub:** [https://github.com/vucongchien](https://github.com/vucongchien)
