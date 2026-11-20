# Phạm vi Dấu Bản

## Nguồn và thứ tự áp dụng

- Áp dụng các quyết định mới nhất người dùng đã chốt trong chat “Lập kế hoạch prototype web”, project “project dạo”, gồm nhịp chuyển động cảnh 1, tên và giá sản phẩm, footer, nội dung Về chúng tôi và checkout nhập tay. Các quyết định này được ưu tiên khi tài liệu nguồn, bản demo hoặc [Figma](https://www.figma.com/design/WQwg56ZDSTNlaNkBaoDPMO?node-id=1-8) còn hiển thị bản cũ. Dùng Figma làm tham chiếu trực quan cho phần còn lại.
- Đọc [user-workflow.md](user-workflow.md) cho luồng, [information.md](information.md) cho dữ liệu sản phẩm và [introduction.md](introduction.md) cho câu chuyện. Đây là tên tệp thực tế trong `docs/references/`. Bộ prompt nhắc đến tên `user-workflow(1).md` và `information(1).md`; nếu sau này có nhiều bản và chưa rõ bản nào đang dùng, hỏi người dùng.
- Giữ nguyên các file nguồn và các bản `(1)` nếu có. Khi có đoạn cũ xung đột với quyết định đã chốt, áp dụng các hướng dẫn trong [giao diện](experience.md), [tra cứu](traceability.md) và [nghiệm thu](release.md) khi triển khai. Mọi đề xuất sửa tài liệu nguồn cần được duyệt qua quiz.
- Tên hộp cũ trong nội dung nguồn, giá 250.000 ₫ trong `information.md`, bố cục mở đầu cũ trong `user-workflow.md` và nhãn giá hoặc luồng thông tin mẫu của prototype cũ là các mốc đối chiếu lịch sử. Dùng bảng giá và luồng hiện tại bên dưới khi triển khai và nghiệm thu.

## Quyết định đã chốt

- Giao diện người tiêu dùng bằng tiếng Việt. Dùng React, Next.js App Router, TypeScript, Tailwind CSS và Motion khi cần hiệu ứng. GitHub Pages HTTPS phục vụ toàn bộ prototype từ bản static export. Nghiệp vụ mô phỏng chạy bằng TypeScript trong trình duyệt, dùng dữ liệu demo.
- **Dấu Bản** là tên dự án. **Hương Đất Đắk Lắk** là tên hộp quà. Hiển thị giá theo ký hiệu `₫` ở bảng dưới. Bỏ nhãn “Giá demo” cạnh giá, giữ thông báo mô phỏng ở footer. Slug `hop-qua`, neo, mã truy xuất, URL chi tiết và QR giữ nguyên.
- Mở đầu ba cảnh bằng cuộn, vuốt hoặc bàn phím. Cảnh 1 hiện chữ 800 ms, từ cảnh 1 sang cảnh 2 khoảng 600 ms. Nút **Vào Trang chủ** ở cảnh 3 dùng fade khoảng 450 ms. Cuộn hoặc vuốt xuống từ cảnh 3 đi tới footer. Nút xem hộp quà ở Trang chủ dẫn tới `/san-pham/#hop-qua`. CTA câu chuyện dẫn tới `/ve-chung-toi/`.
- Mọi trang, kể cả mở đầu, dùng một footer chung với nhóm Điều hướng và Liên hệ. Liên hệ đang ở trạng thái **Bổ sung sau**. Trang Về chúng tôi đưa đủ phần công khai của [introduction.md](introduction.md), giữ nguyên đoạn về nguồn cà phê đã duyệt theo [hướng dẫn giao diện](experience.md#về-chúng-tôi).
- Tra cứu thủ công và QR trong web mở thẻ xem trước. Camera mặc định điện thoại mở chi tiết trực tiếp.
- Giỏ hàng và COD mô phỏng. Người xem tự nhập họ tên, số điện thoại và địa chỉ giao hàng giả. Ghi chú tùy chọn. Sau khi xem lại có thể sửa hoặc xác nhận. Xác nhận thành công xóa giỏ và về Trang chủ. Hủy giữ giỏ. Luồng hiện tại mở ngay form nhập tay. Dữ liệu giao hàng chỉ ở trong trạng thái phiên, tải lại sẽ mất. Gác nháp 10 phút, voucher, tích hợp thanh toán và tài khoản.
- Chứng nhận OCOP 4 sao giả định chỉ ghi trong README hoặc báo cáo nếu có. Giao diện bỏ huy hiệu. Tab Hành trình giữ đủ đầu mục, dùng “Doanh nghiệp chưa cung cấp thông tin”. Tab Doanh nghiệp ghi “Chưa có doanh nghiệp thật”.
- Khối lượng tịnh của hộp đang mâu thuẫn giữa 3 × 150 g và 500 g. Giữ khối lượng từng món, để tổng ở trạng thái chưa xác nhận. Kích thước đang thiếu đơn vị. Với đoạn giới thiệu có tên riêng hoặc lời kể cần xác nhận cách trình bày công khai, đưa nguyên đoạn và các phương án vào quiz.

## Danh mục và giá hiện tại

| Slug | Tên hiển thị | Giá |
|---|---|---:|
| `hop-qua` | Hương Đất Đắk Lắk | 690.000 ₫ |
| `ca-phe` | Cà phê Đắk Lắk | 89.000 ₫ |
| `hat-dieu` | Hạt điều Đắk Lắk | 99.000 ₫ |
| `mac-ca` | Mắc ca Đắk Lắk | 119.000 ₫ |

## Ảnh có sẵn

Ảnh gốc nằm trong [docs/ảnh/](../%E1%BA%A3nh/). Đối chiếu đúng tên và phần mở rộng, giữ ảnh gốc, dùng đường dẫn tương thích với static export và `basePath`. Ghép ảnh với sản phẩm bằng slug hoặc ID.

| Tệp | Sử dụng |
|---|---|
| `Hộp quà Dấu Bản.JPG` | Hương Đất Đắk Lắk và cảnh 2 |
| `Cà phê Đắk Lắk.JPG` | Cà phê |
| `Hạt điều Đắk Lắk.JPG` | Hạt điều |
| `Mắc ca Đắk Lắk.JPG` | Mắc ca |
| `nông dân.jpg` | Nền toàn khung cảnh 3 và ảnh minh họa thu hoạch cà phê ở Về chúng tôi |

## Điểm vào trong repo

Đường dẫn ứng dụng tính từ `frontend/`. Các route trong `app/(shop)/` dùng chung layout cửa hàng, còn `app/layout.tsx` gắn footer cho cả mở đầu lẫn cửa hàng.

| Phần | Route và tệp |
|---|---|
| Mở đầu | `app/page.tsx` → `components/introduction.tsx`. Hiệu ứng hiện chữ ở `app/globals.css`. |
| Trang chủ, Danh mục và Chi tiết | `app/(shop)/trang-chu/page.tsx`, `app/(shop)/san-pham/page.tsx`, `app/(shop)/san-pham/[slug]/page.tsx`. Dùng `components/product-row.tsx`, `components/product-tabs.tsx` và `lib/products.ts`. |
| Footer và Về chúng tôi | `app/layout.tsx` → `components/site-footer.tsx`. Trang nội dung ở `app/(shop)/ve-chung-toi/page.tsx`. |
| Tra cứu, giỏ và checkout | `components/lookup.tsx`, `components/scanner.tsx`, `components/cart.tsx`, `components/cart-page.tsx`, `components/checkout.tsx`. Nghiệp vụ dùng `lib/shop.ts`, giá và route dùng `lib/products.ts` và `lib/site.ts`. |
| Build và Pages | `frontend/package.json`, `frontend/next.config.ts` và `.github/workflows/pages.yml` tính từ gốc repo. |

## Khảo sát và đầu vào cần chốt

- Đối chiếu các điểm vào với repo hiện tại. Kiểm tra nhánh, remote, package manager, script, Next.js và cấu hình Pages thực tế. Xác nhận nhánh được phép dùng, quyền xuất bản và URL HTTPS trước bước phụ thuộc. Có thể chuẩn bị build độc lập khi URL còn chờ.
- Đối chiếu lời dẫn cảnh 1, nội dung và liên kết cảnh 3, bố cục mobile cảnh 2 và crop ảnh ở các kích thước màn hình. Nếu chưa có quyết định, đưa các lựa chọn có căn cứ từ tài liệu hoặc thiết kế vào quiz. Không gán danh tính hoặc nguồn gốc lô hàng cho người trong ảnh minh họa.
- Khi có yêu cầu bổ sung Liên hệ, hỏi tên hiển thị, URL và thứ tự qua quiz, có lựa chọn “Bổ sung sau”. Giữ nhóm Điều hướng hoạt động trong lúc chờ.
- Khối lượng tịnh, đơn vị kích thước hộp, phương án và phí vận chuyển cần được xác nhận nếu muốn đưa lên giao diện. Trong khi chờ, hiển thị được giá và tổng tiền hàng từ dữ liệu đã có.
