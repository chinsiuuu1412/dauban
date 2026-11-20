# Giao diện và tương tác

## Mở đầu tại `/`

1. **Cảnh 1.** Chỉ hiện tên **Dấu Bản** lớn, đậm và căn giữa trên nền trắng ấm. Bên dưới là lời dẫn “Từ đất, qua tay người, thành dấu nhớ.” Dùng cuộn, vuốt hoặc phím điều hướng khi khung có focus để chuyển cảnh.
2. **Cảnh 2.** Hiện ảnh hộp đóng `Hộp quà Dấu Bản.JPG` bên trái và nội dung Hương Đất Đắk Lắk bên phải trên desktop. Trên mobile, đặt ảnh trên lời dẫn. Có hiệu ứng nhẹ với ảnh hộp đóng khi chuyển cảnh.
3. **Cảnh 3.** Dùng `nông dân.jpg` làm ảnh minh họa toàn khung với lớp phủ giúp đọc chữ. Trên mobile, ưu tiên giữ người mặc áo cam ở phía trái ảnh. Giữ tiêu đề **Một dấu ấn của vùng đất** và đoạn giải thích tên dự án. Nút **Về chúng tôi** dẫn tới `/ve-chung-toi/`.

Hiện chữ ở cảnh 1 trong 800 ms và giữ nguyên cảnh cho đến khi người xem thao tác. Chuyển từ cảnh 1 sang cảnh 2 khoảng 600 ms, bắt đầu ngay khi người xem cuộn, vuốt hoặc dùng phím. Mỗi thao tác đi một cảnh, kể cả khi cuộn nhanh, và có thể quay lại.

Giữ thứ tự focus hợp lý. Từ cảnh 3, cuộn hoặc vuốt xuống để tới footer. Nút **Vào Trang chủ** ở cảnh 3 dẫn tới `/trang-chu/` với fade khoảng 450 ms. Với `prefers-reduced-motion`, bỏ dịch chuyển và zoom, chuyển trực tiếp hoặc fade nhẹ. Link trực tiếp vào Trang chủ hoặc chi tiết đi thẳng đến đích.

## Trang chủ, Danh mục và Chi tiết

- Trang chủ và Danh mục dùng ảnh bên trái, tên bên phải cho từng sản phẩm ở desktop lẫn mobile. Ghép ảnh đúng slug hoặc ID, cho tên xuống dòng trên màn hẹp, kiểm tra ở 360 px. Từ ảnh hoặc tên, mở đúng trang chi tiết.
- Trên Trang chủ, đặt Tra cứu ngay sau hàng Hương Đất Đắk Lắk, trước nhóm ba sản vật.
- Danh mục đi thẳng từ tiêu đề vào danh sách một cột, mỗi hàng một sản phẩm, không có hero riêng. Giữ mô tả và thao tác giỏ theo tài liệu nguồn, lấy giá hiện tại từ [dữ liệu dùng chung](traceability.md#sản-phẩm-và-bản-ghi-lô). Nút xem hộp quà trên Trang chủ đến hàng Hương Đất Đắk Lắk tại `/san-pham/#hop-qua`.
- Chi tiết có ảnh và QR, tên, tỉnh, mô tả, một cụm giá/thêm giỏ và ba tab **Hành trình**, **Thông tin sản phẩm**, **Doanh nghiệp**. Có thể dùng accordion cho năm nhóm hành trình nhưng giữ đủ đầu mục trong [thông tin sản phẩm](information.md). Huy hiệu OCOP giả định chỉ ghi trong README hoặc báo cáo theo [phạm vi](scope.md).

## Footer

- Gắn `components/site-footer.tsx` trong `app/layout.tsx`. Mỗi trang có một footer trong luồng cuộn tự nhiên và các liên kết tiếp cận được bằng bàn phím.
- Nhóm **Điều hướng** theo thứ tự Trang chủ (`/trang-chu/`), Sản phẩm (`/san-pham/`), Về chúng tôi (`/ve-chung-toi/`). Các route tương thích với `basePath`.
- Nhóm **Liên hệ** đang ở trạng thái **Bổ sung sau**, với nội dung “Thông tin liên hệ sẽ được bổ sung.” Khi người dùng muốn đăng liên kết, thu thập tên hiển thị, URL thật và thứ tự qua quiz trước khi đưa vào footer.

## Về chúng tôi

- CTA câu chuyện dẫn tới `/ve-chung-toi/`. Đối chiếu trang với toàn bộ [introduction.md](introduction.md) và dựng đủ các phần công khai gồm ý tưởng và câu chuyện, nguồn gốc và giá trị của ba nông sản, Hương–Vị–Tình, cấu trúc bao bì, thẻ câu chuyện, năm bước trải nghiệm và thông điệp tổng thể.
- Dùng các heading có phân cấp và đoạn ngắn dễ đọc trên mobile. Dùng `nông dân.jpg` với chú thích minh họa thu hoạch cà phê. Giữ ý nghĩa lời kể và phân biệt tên dự án với tên sản phẩm. Mục “Quy ước cách đọc file” chỉ phục vụ biên tập. Khi cách hiển thị tên riêng hoặc đoạn văn còn chưa rõ, nêu đúng đoạn và hỏi quiz.
- Giữ nguyên đoạn về nguồn cà phê bắt đầu bằng “Nguồn cà phê của dự án được Tâm kết nối từ nguồn cung chính thống.”, gồm ngữ cảnh cho phản hồi “ít say”.

## Giỏ và COD mô phỏng

- Hiển thị số đang có trong giỏ riêng với số muốn thêm. Chỉ nhận số nguyên dương khi thêm, cho sửa số lượng và xóa dòng. Giỏ trống có đường về Danh mục. Tính tổng từ đơn giá danh mục và số lượng. Thêm thành công hiện thông báo và liên kết đến Giỏ hàng.
- **Nhập thông tin.** Với giỏ có hàng, `/dat-hang/` mở ngay form nhập họ tên, số điện thoại và địa chỉ giao hàng bắt buộc, ghi chú tùy chọn. Hiển thị “Đặt hàng mô phỏng” và hướng dẫn dùng thông tin giả. Đặt lỗi cạnh trường tương ứng và chuyển focus vào trường bắt buộc đầu tiên bị thiếu.
- **Xem lại.** Hiển thị họ tên, số điện thoại, địa chỉ, ghi chú nếu có, các dòng sản phẩm, số lượng, tổng tiền và COD mô phỏng. Cho quay lại chỉnh sửa mà giữ dữ liệu đã nhập.
- **Xác nhận.** Chỉ xác nhận khi dữ liệu hợp lệ và giỏ còn hàng. Giữ cách xử lý hiện có nếu giỏ đổi sau khi xem lại. Chặn xác nhận lặp. Hủy giữ giỏ. Thành công xóa giỏ, về Trang chủ và hiện thông báo. Dữ liệu giao hàng chỉ nằm trong trạng thái form của phiên. Xem [nghiệp vụ trong trình duyệt](traceability.md#nghiệp-vụ-giỏ-và-cod).
