# Tài liệu Kiểm thử Analytics (Microsoft Clarity)

Tài liệu này mô tả chi tiết mục tiêu, phạm vi và cách thức kiểm thử cho module Analytics (Microsoft Clarity) trong dự án `chien-frontend-portfolio`.

---

## 1. Mục lục Kiểm thử (Test Catalog)

| ID | Tên Test Case | File Kiểm Thử | Mục đích / Hành vi mong đợi |
| :--- | :--- | :--- | :--- |
| **TC-ANL-01** | Bỏ qua khi thiếu Project ID | `src/components/analytics/MicrosoftClarity.test.tsx` | Không chèn thẻ `<script>` nếu biến môi trường hoặc prop `projectId` bị bỏ trống. |
| **TC-ANL-02** | Bỏ qua chuỗi chỉ chứa khoảng trắng | `src/components/analytics/MicrosoftClarity.test.tsx` | Không chèn thẻ `<script>` nếu `projectId="   "`. |
| **TC-ANL-03** | Lọc môi trường development mặc định | `src/components/analytics/MicrosoftClarity.test.tsx` | Tự động trả về `null` trong môi trường dev khi `enabledInDev={false}` để tránh rác session. |
| **TC-ANL-04** | Cho phép chạy khi bật `enabledInDev={true}` | `src/components/analytics/MicrosoftClarity.test.tsx` | Chèn đúng mã script khởi tạo kèm theo `projectId` vào DOM. |
| **TC-ANL-05** | Hoạt động bình thường trên Production | `src/components/analytics/MicrosoftClarity.test.tsx` | Đọc `NEXT_PUBLIC_CLARITY_PROJECT_ID` và chèn thẻ script chuẩn trong môi trường production. |

---

## 2. Hướng dẫn Chạy Kiểm thử (Execution Guide)

Kiểm thử được thực hiện bằng **Vitest**:

```bash
# Chạy riêng kiểm thử Analytics
pnpm vitest run src/components/analytics/MicrosoftClarity.test.tsx

# Chạy toàn bộ Unit Tests trong dự án
pnpm vitest run
```

---

## 3. Các Ràng buộc Hệ thống (System Invariants)

1. **Hiệu năng (Zero Blocking)**: Component sử dụng `next/script` với `strategy="lazyOnload"` để đảm bảo script chỉ tải sau khi toàn bộ trang đã sẵn sàng.
2. **Khả năng chịu lỗi (Resilience)**: Nếu thiếu biến môi trường, component trả về `null` thay vì ném ngoại lệ (Exception), không bao giờ làm gián đoạn render của `RootLayout`.
