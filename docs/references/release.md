# GitHub Pages và nghiệm thu

## Trước khi xuất bản

1. Chạy `npm run lint`, `npm run typecheck`, `npm test` và `npm run build` từ `frontend/` theo script thực tế của repo. Nếu thiếu script, ghi cách kiểm tra thay thế và kết quả.
2. Dùng Next.js static export với `output: 'export'` và `trailingSlash: true`. Tạo sẵn bốn slug bằng `generateStaticParams`. Phục vụ `out/` dưới `basePath` dự kiến. Mở trực tiếp và tải lại từng trang chi tiết, gồm `hop-qua`. Kiểm tra ảnh, CSS, asset, menu, Back, neo `#hop-qua` và ba tab Chi tiết. Ghi riêng kết quả trên dev local và trên bản static export.
3. Kiểm thử [giao diện](experience.md) ở desktop và mobile. Đối chiếu cảnh 1 hiện tên và lời dẫn trong 800 ms, thao tác chuyển sang cảnh 2 bắt đầu ngay và kéo dài khoảng 600 ms. Thử cuộn nhanh, quay lại, giảm chuyển động và ảnh hộp nằm trên lời dẫn ở mobile. Từ cảnh 3, thử cuộn hoặc vuốt tới footer, kiểm tra ảnh nền và crop, CTA **Về chúng tôi** và nút **Vào Trang chủ** với fade khoảng 450 ms. Kiểm tra Trang chủ và Danh mục có đủ bốn cặp ảnh trái, tên phải ở 360 px. Danh mục bắt đầu bằng danh sách một cột sau tiêu đề.
4. Kiểm tra mỗi route có đúng một footer, ba link Điều hướng hoạt động dưới `basePath` và Liên hệ đang ở trạng thái **Bổ sung sau** với nội dung tĩnh. Đối chiếu phần công khai Về chúng tôi với [introduction.md](introduction.md), gồm ảnh, bố cục đọc trên mobile, đoạn về nguồn cà phê nguyên văn với đầy đủ ngữ cảnh và việc loại mục biên tập “Quy ước cách đọc file”.
5. Kiểm tra tên **Hương Đất Đắk Lắk** trên Trang chủ, Danh mục, Chi tiết, thẻ Tra cứu và giỏ. Đối chiếu bốn mức giá theo [bảng hiện tại](scope.md#danh-mục-và-giá-hiện-tại), ký hiệu `₫` và thông báo mô phỏng ở footer. Tạo giỏ đã lưu với một món mỗi slug `ca-phe`, `hat-dieu`, `mac-ca`. Sau khi tải lại, kiểm tổng 307.000 ₫ ở Giỏ và bước Xem lại.
6. Thử tra cứu một mã truy xuất và cặp GTIN–số lô hợp lệ, nhập trống, thiếu lô, mã sai, cặp chéo và QR ngoài site. Thử lại mã và URL QR hiện có của `hop-qua` sau đổi tên. Kiểm tra việc dừng camera khi có thể tái hiện hoặc mô phỏng, ghi rõ phần đã quan sát trên thiết bị.
7. Kiểm thử giỏ trống, đổi số lượng, xóa và tải lại. Với COD, thử trường bắt buộc để trống hoặc chỉ có khoảng trắng, nhập thông tin giả với số điện thoại bắt đầu bằng 0, thử ghi chú có và không có nội dung, xem lại rồi sửa. Thử hủy giữ giỏ, xác nhận lặp và xóa giỏ sau thành công. Kiểm tra URL, bộ nhớ lưu giỏ và request để xác nhận dữ liệu giao hàng chỉ ở trạng thái form. Tải lại để kiểm tra form trở về trạng thái trống.
8. Khi gặp lỗi, tái hiện, sửa nguyên nhân, chạy lại ca lỗi, các luồng liên quan và build. Ghi **Kịch bản | Kỳ vọng | Kết quả quan sát | Đạt/Lỗi/Chờ kiểm tra | Bằng chứng**.

## Xuất bản qua GitHub Actions

- Xác nhận repo, nhánh, quyền xuất bản, URL HTTPS dự kiến và cấu hình Pages. Khi đầu vào còn thiếu, tiếp tục chuẩn bị workflow và build local. Chờ quyền và nhánh đã xác nhận trước khi push hoặc xuất bản.
- Workflow dùng package manager và lockfile thực tế, chạy kiểm tra, build static và upload `out/` lên Pages. Dùng cấu hình `basePath` khi build phù hợp URL project site thực tế. Dùng ảnh tĩnh tối ưu sẵn hoặc `next/image` ở chế độ `unoptimized`. Kiểm tra workflow hoàn thành và site mở qua HTTPS.

## Sau khi xuất bản

- Chạy lại các ca giao diện, dữ liệu và nghiệp vụ ở bước 3–7 của phần [Trước khi xuất bản](#trước-khi-xuất-bản) trên Pages HTTPS. Ghi bằng chứng quan sát trên Pages riêng với kết quả dev local và static export.
- Mở trực tiếp và tải lại Mở đầu, Trang chủ, Danh mục, Về chúng tôi, Giỏ, Đặt hàng và bốn trang Chi tiết trên URL Pages HTTPS. Với Đặt hàng, kiểm tra cả khi giỏ trống và khi có hàng. Kiểm tra footer, liên kết nội bộ, ảnh, nền cảnh 3, giá và tổng giỏ, asset và neo `#hop-qua`.
- Thử mã truy xuất và cặp GTIN–số lô trên site. Tạo QR từ URL đã xác minh. Quét bằng camera mặc định điện thoại để mở Chi tiết và camera trong web để mở thẻ xem trước. Thử từ chối quyền, hết giờ và đóng scanner, kiểm tra camera dừng. Ghi “Chờ kiểm trên thiết bị thật” và nêu thiết bị, thao tác còn thiếu nếu chưa quan sát được.
- Chạy lại luồng nhập tay với thông tin giả, sửa sau bước xem lại và hoàn tất COD mô phỏng trên site. Nếu phát hiện lỗi, sửa, chạy lại build, deploy lại khi được phép và kiểm tra lại trên URL công khai.
- Bàn giao link Pages, nhánh và commit phát hành, link Figma, một mã truy xuất, một cặp GTIN–số lô, một URL Chi tiết dùng cho QR và bảng nghiệm thu. Ghi rõ ca đã quan sát, ca còn chờ thiết bị, link Liên hệ hoặc quyền triển khai. Ghi trong README rằng mã, giá, chứng nhận OCOP giả định và đặt hàng là mô phỏng.

Tài liệu chính thức: [Static export](https://nextjs.org/docs/app/guides/static-exports), [basePath](https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath), [Pages workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages), [Camera](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia).
