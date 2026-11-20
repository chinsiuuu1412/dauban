# Nhận diện Dấu Bản

- Giao diện người tiêu dùng bằng tiếng Việt. Phong cách trầm ấm, nền trắng ngả vàng hoặc kem `#F7F1E9`, nhấn nâu đỏ `#7D3A31`, chữ `#302421`. Dùng hướng trắng ấm, nâu đỏ khi repo chưa có bảng màu. Nếu bảng màu hiện có xung đột với hướng này, đưa ra quiz trước khi đổi.
- Khi repo chưa có font, dùng Lora cho tiêu đề và Be Vietnam Pro cho nội dung. Giữ chữ dễ đọc trên nền ảnh và kiểm tra tiếng Việt có dấu.
- Cảnh 1 dùng nền trắng ấm, tên dự án **Dấu Bản** lớn, đậm và căn giữa, lời dẫn nằm ngay dưới. Giữ hiệu ứng hiện chữ 800 ms và nhịp chuyển cảnh theo [giao diện và tương tác](experience.md).
- Dùng component chung cho menu, hàng sản phẩm, nút, tab và thông báo. Hàng sản phẩm giữ ảnh trái, tên phải ở cả desktop và mobile.
- Footer dùng một component chung, chia nhóm **Điều hướng** và **Liên hệ**. Giữ cả hai nhóm dễ đọc, dễ thao tác bằng bàn phím và có thể xuống dòng trên mobile.
- Dùng cùng ảnh nguồn giữa Figma và web. Kiểm tra khung cắt trên desktop và mobile, hỏi quiz khi cần chọn khung cắt làm thay đổi bố cục. Tôn trọng `prefers-reduced-motion`.
