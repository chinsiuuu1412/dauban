## WEB GIỚI THIỆU SẢN PHẨM DỰ ÁN "DẤU BẢN"

- Người thực hiện: Ánh Ngọc
- Tình trạng: prototype (không có user thật)
- Version: 1
- Thời gian: 19/11/2026

Dấu Bản giới thiệu hộp quà **Hương Đất Đắk Lắk**, gồm cà phê, hạt điều và mắc ca, cùng câu chuyện về vùng đất Đắk Lắk và văn hóa Ê Đê. Giá, mã truy xuất và đơn COD là dữ liệu mô phỏng. OCOP 4 sao là chứng nhận giả định của dự án. [Thiết kế Figma](https://www.figma.com/design/WQwg56ZDSTNlaNkBaoDPMO?node-id=1-8) · [GitHub](https://github.com/chinsiuuu1412/dauban)

## Các công nghệ sử dụng:

- **Next.js App Router, React và TypeScript** cho cấu trúc trang và nghiệp vụ trong trình duyệt.
- **Tailwind CSS và Motion** cho giao diện responsive và chuyển cảnh. **Lora Variable** dùng cho tiêu đề, **Be Vietnam Pro** cho nội dung. [Hệ thống thiết kế](docs/references/design-system.md)
- **jsQR và qrcode** để đọc và tạo QR. **GitHub Actions và GitHub Pages** để build và phục vụ bản static export.
- Model AI sử dụng: Chat GPT 6.2-Sol.

Chạy trên máy với Node.js 22.18 trở lên. Từ thư mục chứa README này, dùng PowerShell.

```powershell
Set-Location -LiteralPath '.\frontend'
npm.cmd ci
npm.cmd run dev
```

[Mở bản local](http://localhost:3000/) · [Mở bản GitHub Pages](https://chinsiuuu1412.github.io/dauban/)

## Giới thiệu về các tính năng

- **Mở đầu và Về chúng tôi.** Ba cảnh chuyển bằng cuộn, vuốt hoặc bàn phím. Trang Về chúng tôi kể câu chuyện dự án, giới thiệu ba nông sản, bao bì và năm bước trải nghiệm.
- **Danh mục và chi tiết.** Xem tên, ảnh và giá của bốn sản phẩm. Trang chi tiết có các tab Hành trình, Thông tin sản phẩm và Doanh nghiệp.
- **Tra cứu và QR.** Tra bằng mã truy xuất hoặc cặp GTIN–số lô để mở thẻ xem trước. Ví dụ dùng `DB-DEMO-001` hoặc `DEMO-GTIN-001` / `DEMO-LO-001` cho hộp quà. QR trên bản đã cấu hình trỏ đến trang chi tiết HTTPS. [Chi tiết hộp quà](https://chinsiuuu1412.github.io/dauban/san-pham/hop-qua/)
- **Giỏ và COD mô phỏng.** Thêm, đổi số lượng hoặc xóa sản phẩm. Một cà phê, một hạt điều và một mắc ca có tổng **307.000 ₫** trên bản cập nhật. Nhập thông tin giao hàng giả, xem lại rồi xác nhận. Giỏ chỉ lưu mã sản phẩm và số lượng trong trình duyệt.

## Kết quả chạy kiểm thử

- **Kiểm thử nghiệp vụ ngày 20/11/2026.** Chạy lại `npm.cmd test` từ `frontend/` với kết quả **12/12 ca đạt**. Bao gồm tra cứu đúng và sai, kiểm tra URL QR, tính tổng giỏ, trường bắt buộc khi đặt hàng và chặn xác nhận COD lặp.
- **Nghiệm thu trước đó.** Lint, typecheck, build và các luồng chính trên dev và static export `/dauban` đã được kiểm tra ở lượt nghiệm thu trước. Báo cáo ngày 19/11 ghi kết quả của bản khi đó. [Báo cáo nghiệm thu](docs/qa/2026-11-19.md)
- **Kiểm tra tiếp theo.** Camera mặc định và scanner web còn chờ thử bằng điện thoại thật trên HTTPS. [Tiêu chí nghiệm thu](docs/references/release.md)

## Một số điều cần bổ sung sau Prototype

- Khi phát triển thành website full-stack, bổ sung hướng dẫn sử dụng, chính sách bảo mật và chính sách cookie cho người dùng.
- Xây dựng backend và cơ sở dữ liệu cho nghiệp vụ thực tế. Prototype hiện chạy trong trình duyệt.
- Bổ sung thông tin Liên hệ khi có tên hiển thị và URL được xác nhận.
