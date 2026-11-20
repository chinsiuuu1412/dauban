---
name: dau-ban-prototype
description: Use when working on the Dấu Bản website prototype, including Figma handoff, Next.js frontend, browser-side TypeScript, QR traceability, mock COD checkout, and GitHub Pages verification.
---

# Dấu Bản

Làm việc với vai trò Senior Web Developer. Kiểm tra quy tắc repo, working tree, route, component, dữ liệu và script trước khi sửa. Tái sử dụng phần phù hợp, bảo toàn công việc hiện có và chỉ triển khai bước được yêu cầu.

Đọc [phạm vi và tài liệu nguồn](references/scope.md) trước. Áp dụng quyết định mới nhất đã được người dùng chốt khi Figma hoặc tài liệu nguồn còn mô tả luồng cũ. Giữ nguyên ba tài liệu nguồn và các bản `(1)` nếu có cho đến khi người dùng duyệt thay đổi qua quiz.

Với quyết định còn thiếu làm ảnh hưởng đến kết quả, hỏi quiz theo nhóm 1–3 câu. Mỗi câu có 2–3 phương án, tác động, phương án đề xuất và chỗ nhập lựa chọn khác. Chờ câu trả lời cho phần phụ thuộc và tiếp tục phần độc lập. Khi người dùng muốn bổ sung liên kết Liên hệ, hỏi tên hiển thị, URL và thứ tự, có lựa chọn “Bổ sung sau”. Xem [trạng thái footer](references/experience.md#footer) trước khi hỏi. Khi cần sửa tài liệu nguồn, nêu tên file, đoạn hiện tại, thay đổi đề xuất, lý do và tác động trong quiz.

| Nhóm công việc | Điểm vào và hướng dẫn |
|---|---|
| Frontend | Màn mở đầu, Trang chủ, Danh mục, Chi tiết, footer chung, Về chúng tôi và form Đặt hàng. Xem [bản đồ mã nguồn](references/scope.md#điểm-vào-trong-repo), [giao diện và tương tác](references/experience.md) và [nhận diện](references/design-system.md). |
| Nghiệp vụ mô phỏng trong trình duyệt | Danh mục theo slug, tra cứu và QR, giỏ và COD nhập tay. Bắt đầu ở `frontend/lib/products.ts`, `frontend/lib/shop.ts`, rồi nối qua các component hiện có. Xem [dữ liệu và nghiệp vụ](references/traceability.md). |
| Kiểm thử trước và sau deploy | Chạy kiểm tra mã, nghiệm thu bản static export cạnh dev local, rồi kiểm tra lại trên Pages HTTPS khi đã có quyền và nhánh xác nhận. Xem [trước khi xuất bản](references/release.md#trước-khi-xuất-bản) và [sau khi xuất bản](references/release.md#sau-khi-xuất-bản). |

Khi cập nhật hướng dẫn, sửa trực tiếp skill và references hiện có. Sau mỗi bước, báo tệp đã sửa, lệnh kiểm tra, kết quả quan sát và các mục còn chờ. Tách kết quả trên dev local, bản static export và GitHub Pages HTTPS. Chỉ đánh dấu đạt khi có bằng chứng.
