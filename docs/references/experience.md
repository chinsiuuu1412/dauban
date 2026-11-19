# Giao diện và tương tác

## Mở đầu tại `/`

1. **Cảnh 1.** Chỉ hiện tên **Dấu Bản** lớn, đậm, căn giữa trên nền trắng ấm, với lời dẫn đã duyệt ngay dưới và cũng căn giữa. Cảnh này dùng cuộn, vuốt và phím điều hướng khi khung có focus. Không có ảnh hộp, menu, nút hoặc khối trang trí, và không tự chuyển theo thời gian.
2. **Cảnh 2.** Ảnh hộp đóng `Hộp quà Dấu Bản.JPG` lớn bên trái, lời dẫn bên phải theo bố cục desktop đã duyệt. Trên mobile, dùng bố cục đã duyệt nếu có. Chốt qua quiz nếu bố cục hoặc crop còn bỏ ngỏ. Dùng hiệu ứng nhẹ với ảnh hộp đóng khi chuyển sang cảnh 3.
3. **Cảnh 3.** Dùng `nông dân.jpg` làm ảnh nền toàn khung. Giữ chủ thể dễ nhận ra ở cả desktop và mobile, có lớp phủ giúp đọc chữ. Dùng phần chữ và liên kết đã được duyệt. Ba ảnh sản phẩm dành cho các vị trí sản phẩm tương ứng, không làm nền hoặc khung ảnh chính tại cảnh này.

Mỗi thao tác cuộn hoặc vuốt đi một cảnh và có thể quay lại. Giữ thứ tự focus hợp lý và trả cuộn về hành vi thông thường khi rời vùng mở đầu. Chuyển từ cảnh cuối đến `/trang-chu/` bằng fade hoặc lớp phủ khoảng 450 ms. Với `prefers-reduced-motion`, bỏ dịch chuyển và zoom, chuyển trực tiếp hoặc fade nhẹ. Link trực tiếp vào Trang chủ hoặc chi tiết đi thẳng đến đích.

## Trang chủ, Danh mục và Chi tiết

- Trang chủ và Danh mục dùng ảnh bên trái, tên bên phải cho từng sản phẩm ở desktop lẫn mobile. Ghép ảnh đúng slug hoặc ID, cho tên xuống dòng trên màn hẹp, kiểm tra ở 360 px. Từ ảnh hoặc tên, mở đúng trang chi tiết.
- Danh mục đi thẳng từ tiêu đề vào danh sách một cột, mỗi hàng một sản phẩm, không có hero riêng. Giữ mô tả, giá và thao tác giỏ theo tài liệu nguồn. Dùng chung component hàng với Trang chủ nếu phù hợp. Nút xem hộp quà trên Trang chủ đến hàng Hộp quà Dấu Bản tại `/san-pham/#hop-qua`.
- Chi tiết có ảnh và QR, tên, tỉnh, mô tả, một cụm giá/thêm giỏ và ba tab **Hành trình**, **Thông tin sản phẩm**, **Doanh nghiệp**. Có thể dùng accordion cho năm nhóm hành trình nhưng giữ đủ đầu mục trong [thông tin sản phẩm](information.md). Huy hiệu OCOP giả định chỉ ghi trong README hoặc báo cáo theo [phạm vi](scope.md).
- CTA câu chuyện dẫn tới `/ve-chung-toi/`. Chia nội dung từ [giới thiệu](introduction.md) thành các đoạn ngắn có phân cấp. Dùng `nông dân.jpg` với chú thích minh họa thu hoạch cà phê.

## Giỏ và COD mô phỏng

- Hiển thị số đang có trong giỏ riêng với số muốn thêm. Chỉ nhận số nguyên dương khi thêm, cho sửa số lượng và xóa dòng. Giỏ trống có đường về Danh mục. Tính tổng từ đơn giá danh mục và số lượng. Thêm thành công hiện thông báo và liên kết đến Giỏ hàng.
- `/dat-hang/` chỉ hoạt động khi giỏ có sản phẩm. Luồng gồm dùng thông tin giao hàng mẫu, chọn COD mô phỏng, kiểm tra lại thông tin và tổng, rồi xác nhận một lần. Hủy giữ giỏ. Thành công xóa giỏ, về Trang chủ và hiện thông báo.
- Thông tin giao hàng mẫu chỉ nằm trong phiên đặt hàng. Giỏ là phần duy nhất được lưu, chỉ gồm slug và số lượng. Xem [nghiệp vụ trong trình duyệt](traceability.md#nghiệp-vụ-giỏ-và-cod) để nối với lớp dữ liệu.
