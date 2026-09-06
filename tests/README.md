# Danh Mục & Hướng Dẫn Kiểm Thử Hệ Thống (Test Suite Catalog)

Tài liệu này tổng hợp toàn bộ cấu trúc kiểm thử, cách thực thi và mục đích của từng bộ kiểm thử trong dự án Portfolio.

---

## 1. Cấu Trúc Thư Mục Kiểm Thử

```
tests/
├── README.md               # [Tài liệu này] Mục lục & hướng dẫn kiểm thử
├── unit/                   # Kiểm thử đơn vị (Unit tests chạy bằng Vitest)
│   └── metadata.test.ts    # Kiểm thử SEO, siteConfig và OpenGraph Image generator
└── e2e/                    # Kiểm thử toàn trình (End-to-End chạy bằng Playwright)
    ├── example.spec.ts
    └── ...
```

---

## 2. Chi Tiết Các Bộ Test

### 2.1 Unit Tests (`tests/unit/`)
| Tập Tin Kiểm Thử | Mục Đích & Phạm Vi | Công Cụ |
| :--- | :--- | :--- |
| `tests/unit/metadata.test.ts` | - Kiểm tra tính hợp lệ của `siteConfig` (URL, Tên tác giả, Email, Loại bỏ từ khóa cũ "Minimalist Editorial").<br>- Kiểm tra cấu hình OpenGraph (`size`, `runtime`, `alt`, `contentType`).<br>- Render thử nghiệm `RootOpenGraphImage()` tạo buffer PNG và kiểm tra kích thước ảnh đầu ra > 1KB. | `vitest` |

### 2.2 E2E Tests (`tests/e2e/`)
| Tập Tin Kiểm Thử | Mục Đích & Phạm Vi | Công Cụ |
| :--- | :--- | :--- |
| `tests/e2e/*.spec.ts` | Kiểm thử hành vi người dùng, điều hướng, tương tác UI trên trình duyệt thực tế. | `@playwright/test` |

---

## 3. Lệnh Thực Thi Kiểm Thử

### Chạy Unit Test
```bash
# Chạy toàn bộ unit test với vitest
pnpm vitest run

# Chạy riêng file metadata.test.ts
pnpm vitest run tests/unit/metadata.test.ts
```

### Chạy Toàn Bộ Quy Trình Kiểm Tra Chất Lượng (CI Standard)
```bash
pnpm typecheck   # Kiểm tra kiểu TypeScript & sinh Prisma client
pnpm lint:fast   # Kiểm tra lint bằng Oxlint
pnpm vitest run  # Chạy kiểm thử đơn vị
pnpm build       # Xây dựng ứng dụng cho môi trường production
```
