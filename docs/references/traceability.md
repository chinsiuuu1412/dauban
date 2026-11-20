# Dữ liệu và nghiệp vụ trong trình duyệt

Viết các hàm nghiệp vụ TypeScript có thể gọi và kiểm thử độc lập với React. Chạy nghiệp vụ mô phỏng trong trình duyệt với Next.js static export, không cần API runtime, cơ sở dữ liệu, tài khoản hoặc giao dịch thật.

## Sản phẩm và bản ghi lô

Đặt tên hiển thị, ảnh, mô tả và giá theo slug trong `frontend/lib/products.ts`. Trang chủ, Danh mục, Chi tiết, thẻ xem trước, Giỏ hàng và bước Xem lại dùng chung dữ liệu theo slug. Áp dụng [danh mục và giá hiện tại](scope.md#danh-mục-và-giá-hiện-tại) cho các quyết định cập nhật từ [tài liệu thông tin sản phẩm](information.md). Dùng `money()` từ `frontend/lib/site.ts` để định dạng VND với ký hiệu `₫`. Giữ thông báo mô phỏng ở footer. Giỏ đã lưu tính tổng bằng giá hiện tại. Một cà phê, một hạt điều và một mắc ca có tổng tiền hàng 307.000 ₫.

Đổi tên hiển thị của `hop-qua` thành **Hương Đất Đắk Lắk**. Giữ slug, neo `#hop-qua`, URL chi tiết, URL QR và bộ mã truy xuất đang dùng. Mỗi bản ghi truy xuất trỏ đến đúng slug. Tra bằng mã truy xuất duy nhất hoặc cặp GTIN–số lô thuộc cùng bản ghi. Lưu mã dạng chuỗi, cắt khoảng trắng đầu cuối và giữ số 0 đầu.

Dùng bộ mã demo đã có trong repo hoặc bảng mẫu dưới đây. Gắn nhãn mô phỏng. Nếu các bộ mã xung đột hoặc cần một định dạng khác, chốt qua quiz trước khi đổi quy tắc hiển thị và tra cứu.

| Slug | Mã truy xuất | GTIN demo | Lô |
|---|---|---|---|
| hop-qua | DB-DEMO-001 | DEMO-GTIN-001 | DEMO-LO-001 |
| ca-phe | DB-DEMO-002 | DEMO-GTIN-002 | DEMO-LO-002 |
| hat-dieu | DB-DEMO-003 | DEMO-GTIN-003 | DEMO-LO-003 |
| mac-ca | DB-DEMO-004 | DEMO-GTIN-004 | DEMO-LO-004 |

## Tra cứu và QR

- Tìm khi bấm nút hoặc Enter. Phân biệt nhập trống, thiếu GTIN hoặc số lô, sai mã hoặc ghép chéo lô, và tìm thấy. Kết quả hợp lệ mở thẻ xem trước có ảnh, tên, tóm tắt và nút Xem chi tiết. Đóng trả về ngữ cảnh đang xem.
- QR chứa URL tuyệt đối HTTPS của trang chi tiết. Tạo QR công khai từ URL Pages đã xác minh. Tách hàm kiểm tra URL khỏi trình đọc camera. Kiểm tra đúng origin, `basePath`, đường dẫn Chi tiết và slug đã tồn tại.
- Quét trong web chỉ mở camera sau thao tác của người dùng, ưu tiên camera sau nếu có. Mã hợp lệ mở thẻ xem trước, mã ngoài site bị từ chối. Đếm 30 giây từ khi camera mở thành công. Xử lý thiếu camera, từ chối quyền, lỗi mở camera, hết giờ và đóng khung, luôn có đường về nhập tay. Dừng stream khi thành công, đóng, hết giờ hoặc rời trang. Chặn callback lặp mở nhiều thẻ.
- Camera mặc định quét đúng QR sẽ mở chi tiết trực tiếp. Dùng QR hiển thị trên thiết bị thứ hai hoặc bản in để thử cả camera mặc định và camera trình duyệt.

## Nghiệp vụ giỏ và COD

- Quản lý thêm, đổi số lượng, xóa và tính tổng từ nguồn dữ liệu sản phẩm. Chỉ lưu slug và số lượng của giỏ bằng `localStorage` sau khi vào trình duyệt. Xử lý dữ liệu lỗi hoặc slug đã bỏ. Không đọc `localStorage` khi build.
- Form nhập tay trong `frontend/components/checkout.tsx` dùng `validateDelivery()` từ `frontend/lib/shop.ts`. Cắt khoảng trắng đầu cuối khi kiểm tra họ tên, số điện thoại, địa chỉ và ghi chú. Ba trường đầu là bắt buộc, ghi chú tùy chọn. Giữ số điện thoại dạng chuỗi để bảo toàn số 0 đầu.
- Giữ thông tin giao hàng giả trong trạng thái form để người xem sửa được sau bước xem lại. Tải lại trang không khôi phục thông tin này. Giữ dữ liệu form ngoài URL và bộ nhớ lưu giỏ. Toàn bộ xác nhận diễn ra trong trình duyệt, không gửi request chứa đơn hàng hoặc thông tin giao hàng.
- Dùng `confirmCod()` để đối chiếu giỏ lúc xác nhận với giỏ tại bước Xem lại. Nếu giỏ đã đổi, yêu cầu xem lại trước khi xác nhận. Chặn xác nhận lặp. Hủy giữ giỏ, đặt thành công mới xóa giỏ.
