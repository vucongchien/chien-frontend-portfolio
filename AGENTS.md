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
