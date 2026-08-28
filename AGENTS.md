# Project Agent Rules & Development Guidelines

## 1. Ngôn ngữ & Kế hoạch
- Luôn lên kế hoạch bằng tiếng Việt trước khi triển khai các thay đổi lớn.
- Trả lời và giao tiếp bằng tiếng Việt.

## 2. Quy định về Kiểm thử (Testing Rules)
- **Tập trung vào E2E Testing (Playwright):** Ưu tiên viết và duy trì các bài kiểm thử End-to-End cho các luồng trải nghiệm chính của người dùng thực tế trên trình duyệt.
- **KHÔNG viết Unit Test kiểm tra hiển thị UI đơn giản:** Tránh viết các unit test chỉ để kiểm tra việc render component, click button đơn giản, hoặc text hiển thị.
- **Unit Test chỉ viết khi THỰC SỰ CẦN THIẾT:** Chỉ viết unit test khi có logic tính toán, thuật toán phức tạp, hoặc khi người dùng có yêu cầu cụ thể.
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

## 5. Design System & Master UI Style Guide (Conversational Editorial Minimalism)

### 🎨 5.1. Bảng màu chuẩn (Quy tắc 60-30-10)
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

### ✍️ 5.2. Typography
- **Font chính (Headings & Body):** `Lora` (Serif qua Google Fonts) tạo phong cách báo chí thanh lịch (Editorial).
- **Font kỹ thuật (Code & Microcopy):** `font-mono` (Monospace) cho code tags, section labels (`// hello world`, `◆ label ◆`, `#hash`).

### 📐 5.3. Shapes, Radius & Decorative DNA
- **Bán kính (Radius):** Khung lớn `rounded-2xl` (16px), Card nhỏ `rounded-xl` (12px), Pill/Avatar `rounded-full` (9999px).
- **Họa tiết Kim cương (`rotate-45`):** Luôn đi kèm tiêu đề (`Heading ◆` với `<span className="w-2 h-2 bg-indigo-600 rotate-45" />`) và các hạt trôi nổi.
- **Section Divider:** Kẹp giữa 2 đường kẻ mảnh `h-px bg-slate-200` là `<span className="rotate-45" /> label <span className="rotate-45" />`.
- **Conversational UI Pattern:** Đối thoại với mascot đen (`rounded-full border border-slate-200`), câu hỏi người dùng trượt từ phải (`slideInRight`, nền `indigo-50`), câu trả lời AI trượt từ trái (`slideInLeft`, nền `white`).
