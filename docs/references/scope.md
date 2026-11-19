# Phạm vi Dấu Bản

## Nguồn và thứ tự áp dụng

- Áp dụng các quyết định mới nhất người dùng đã chốt trong chat “Lập kế hoạch prototype web”, project “project dạo”. Bộ prompt mới bổ sung các sửa đổi cho cảnh 1, cảnh 3, Trang chủ và Danh mục. Các sửa đổi này được ưu tiên nếu [Figma](https://www.figma.com/design/WQwg56ZDSTNlaNkBaoDPMO?node-id=1-8) vẫn hiện bố cục cũ. Dùng Figma làm tham chiếu trực quan cho phần còn lại.
- Đọc [user-workflow.md](user-workflow.md) cho luồng, [information.md](information.md) cho dữ liệu sản phẩm và [introduction.md](introduction.md) cho câu chuyện. Đây là tên tệp thực tế trong `docs/references/`. Bộ prompt nhắc đến tên `user-workflow(1).md` và `information(1).md`; nếu sau này có nhiều bản và chưa rõ bản nào đang dùng, hỏi người dùng.
- Giữ nguyên các file nguồn và các bản `(1)` nếu có. Khi có đoạn cũ xung đột với quyết định đã chốt, áp dụng các hướng dẫn trong [giao diện](experience.md), [tra cứu](traceability.md) và [nghiệm thu](release.md) khi triển khai. Mọi đề xuất sửa tài liệu nguồn cần được duyệt qua quiz.

## Quyết định đã chốt

- Giao diện người tiêu dùng bằng tiếng Việt. Dùng React, Next.js App Router, TypeScript, Tailwind CSS và Motion khi cần hiệu ứng. GitHub Pages HTTPS phục vụ toàn bộ prototype từ bản static export. Nghiệp vụ mô phỏng chạy bằng TypeScript trong trình duyệt, dùng dữ liệu demo.
- Bốn sản phẩm Đắk Lắk gồm Hộp quà Dấu Bản 690.000 đ, Cà phê, Hạt điều và Mắc ca mỗi món 250.000 đ. Giá là dữ liệu mô phỏng.
- Mở đầu ba cảnh bằng cuộn, vuốt hoặc bàn phím. Nút xem hộp quà ở Trang chủ dẫn tới `/san-pham/#hop-qua`. CTA câu chuyện dẫn tới `/ve-chung-toi/`.
- Tra cứu thủ công và QR trong web mở thẻ xem trước. Camera mặc định điện thoại mở chi tiết trực tiếp.
- Giỏ hàng và COD mô phỏng gọn. Dùng thông tin mẫu, kiểm tra lại, xác nhận rồi xóa giỏ và về Trang chủ. Gác nháp 10 phút, voucher, tích hợp thanh toán và tài khoản.
- Chứng nhận OCOP 4 sao giả định chỉ ghi trong README hoặc báo cáo nếu có. Giao diện bỏ huy hiệu. Tab Hành trình giữ đủ đầu mục, dùng “Doanh nghiệp chưa cung cấp thông tin”. Tab Doanh nghiệp ghi “Chưa có doanh nghiệp thật”.
- Khối lượng tịnh của hộp đang mâu thuẫn giữa 3 × 150 g và 500 g. Giữ khối lượng từng món, để tổng ở trạng thái chưa xác nhận. Kích thước đang thiếu đơn vị. Nội dung giới thiệu công khai ưu tiên đoạn đã rõ nguồn, tránh đưa đoạn “ít say” hoặc tên cá nhân vào bản demo khi chưa được xác nhận.

## Ảnh có sẵn

Ảnh gốc nằm trong [docs/ảnh/](../%E1%BA%A3nh/). Đối chiếu đúng tên và phần mở rộng, giữ ảnh gốc, dùng đường dẫn tương thích với static export và `basePath`. Ghép ảnh với sản phẩm bằng slug hoặc ID.

| Tệp | Sử dụng |
|---|---|
| `Hộp quà Dấu Bản.JPG` | Hộp quà Dấu Bản và cảnh 2 |
| `Cà phê Đắk Lắk.JPG` | Cà phê |
| `Hạt điều Đắk Lắk.JPG` | Hạt điều |
| `Mắc ca Đắk Lắk.JPG` | Mắc ca |
| `nông dân.jpg` | Nền toàn khung cảnh 3 và ảnh minh họa thu hoạch cà phê ở Về chúng tôi |

## Khảo sát và đầu vào cần chốt

- Lập bản đồ route, component, nội dung, ảnh và mục chưa rõ. Kiểm tra nhánh hiện tại, remote, package manager, script, Next.js và cấu hình Pages thực tế. Xác nhận nhánh được phép dùng, quyền xuất bản và URL HTTPS trước bước phụ thuộc. Có thể chuẩn bị build độc lập khi URL còn chờ.
- Đối chiếu lời dẫn cảnh 1, nội dung và liên kết cảnh 3, bố cục mobile cảnh 2 và crop ảnh ở các kích thước màn hình. Nếu chưa có quyết định, đưa các lựa chọn có căn cứ từ tài liệu hoặc thiết kế vào quiz. Không gán danh tính hoặc nguồn gốc lô hàng cho người trong ảnh minh họa.
- Khối lượng tịnh, đơn vị kích thước hộp, phương án và phí vận chuyển cần được xác nhận nếu muốn đưa lên giao diện. Trong khi chờ, hiển thị được giá và tổng tiền hàng từ dữ liệu đã có.
