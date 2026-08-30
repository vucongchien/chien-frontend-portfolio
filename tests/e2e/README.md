# 🎭 Hướng dẫn Kiểm thử E2E (End-to-End Testing with Playwright)

Thư mục `tests/e2e/` chứa toàn bộ các kịch bản kiểm thử hành trình người dùng thực tế (User Flow) chạy trực tiếp trên trình duyệt thật thông qua [Playwright](https://playwright.dev/).

---

## 1. Danh sách Kịch bản Kiểm thử

| File | Phạm vi kiểm thử |
| :--- | :--- |
| [`tests/e2e/portfolio.spec.ts`](file:///e:/LEARN/chien-frontend-portfolio/tests/e2e/portfolio.spec.ts) | 1. Tải trang chủ và render đầy đủ các section (Hero, About, Contact, Footer).<br>2. Kiểm tra Deploy Badge hiển thị chuẩn.<br>3. Kiểm tra tương tác mở Modal Release History và đóng bằng phím ESC. |
| [`tests/e2e/blog.spec.ts`](file:///e:/LEARN/chien-frontend-portfolio/tests/e2e/blog.spec.ts) | 1. Tải trang danh sách bài viết `/blog` và hiển thị thẻ Featured & Grid.<br>2. Tìm kiếm bài viết theo từ khóa và lọc thẻ Tag tương tác.<br>3. Xem bài viết chi tiết `/blog/[slug]`, kiểm tra Typography Lora, TOC và Reading Progress.<br>4. Kiểm tra trang 404 thân thiện khi truy cập slug không tồn tại. |

---

## 2. Cách chạy E2E Tests

### Chạy E2E test ngầm (Headless mode):
```bash
pnpm test:e2e
```

### Chạy E2E test với giao diện trực quan (UI mode):
```bash
pnpm test:e2e:ui
```
