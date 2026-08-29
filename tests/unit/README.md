# Unit Testing Documentation — Design Tokens & Core Modules

Tài liệu mục lục và mô tả các kịch bản kiểm thử Unit Test cho dự án `chien-frontend-portfolio`.

## 1. Mục lục Kịch bản Test (Test Catalog)

| File Test | Đối tượng / Chức năng | Mô tả Kịch bản |
|---|---|---|
| [`tokens.test.ts`](./tokens.test.ts) | Design Tokens Layer (`src/config/tokens.ts`) | Kiểm tra tính toàn vẹn của hệ thống Token, độ chuẩn xác của tỷ lệ 60-30-10, định dạng W3C DTCG ($value, $type), Component tokens 3D và helper `cssVar`. |

---

## 2. Cách Chạy Kiểm thử (How to Run)

```bash
# Chạy toàn bộ Unit test một lần
pnpm test:unit

# Chạy Unit test ở chế độ watch
pnpm vitest
```
