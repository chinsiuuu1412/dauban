# GitHub Pages và nghiệm thu

## Trước khi xuất bản

1. Chạy lint, typecheck, test và build theo script thực tế của repo. Nếu thiếu script, ghi cách kiểm tra thay thế và kết quả.
2. Dùng Next.js static export với `output: 'export'` và `trailingSlash: true`. Tạo sẵn bốn slug bằng `generateStaticParams`. Phục vụ `out/` dưới `basePath` dự kiến và kiểm tra trên bản export. Mở trực tiếp và tải lại từng trang chi tiết. Kiểm tra ảnh, CSS, asset, menu, Back, neo `#hop-qua` và ba tab Chi tiết.
3. Kiểm thử [giao diện](experience.md) ở desktop và mobile. Cảnh 1 chỉ có tên và lời dẫn, cảnh 2 dùng ảnh hộp, cảnh 3 dùng `nông dân.jpg`. Thử cuộn nhanh, vuốt, bàn phím, quay lại, giảm chuyển động và độ đọc được trên ảnh. Kiểm tra cả Trang chủ và Danh mục có đủ bốn cặp ảnh trái, tên phải, kể cả ở 360 px. Riêng Danh mục đi từ tiêu đề vào danh sách một cột dọc, không có hero riêng.
4. Kiểm thử một mã truy xuất và cặp GTIN–số lô hợp lệ, nhập trống, thiếu lô, mã sai, cặp chéo và QR ngoài site. Kiểm tra việc dừng camera khi có thể tái hiện hoặc mô phỏng. Ghi rõ cách kiểm tra logic và thao tác đã quan sát bằng thiết bị.
5. Kiểm thử giỏ trống, thêm hai sản phẩm, đổi số lượng, xóa, tải lại, hủy giữ giỏ, xác nhận lặp và xóa giỏ sau COD thành công. Xác nhận thông tin giao hàng mẫu chỉ nằm trong phiên đặt hàng.
6. Khi gặp lỗi, tái hiện, sửa nguyên nhân, chạy lại ca lỗi, các luồng liên quan và build. Ghi **Kịch bản | Kỳ vọng | Kết quả quan sát | Đạt/Lỗi/Chờ kiểm tra | Bằng chứng**.

## Xuất bản qua GitHub Actions

- Xác nhận repo, nhánh, quyền xuất bản, URL HTTPS dự kiến và cấu hình Pages. Khi đầu vào còn thiếu, tiếp tục chuẩn bị workflow và build local. Chờ quyền và nhánh đã xác nhận trước khi push hoặc xuất bản.
- Workflow dùng package manager và lockfile thực tế, chạy kiểm tra, build static và upload `out/` lên Pages. Dùng cấu hình `basePath` khi build phù hợp URL project site thực tế. Dùng ảnh tĩnh tối ưu sẵn hoặc `next/image` ở chế độ `unoptimized`. Kiểm tra workflow hoàn thành và site mở qua HTTPS.

## Sau khi xuất bản

- Mở trực tiếp và tải lại Trang chủ, Danh mục và bốn trang Chi tiết trên URL Pages. Kiểm tra đúng ảnh, nền cảnh 3, asset, liên kết và neo `#hop-qua`.
- Thử mã truy xuất và cặp GTIN–số lô trên site. Tạo QR từ URL đã xác minh. Quét bằng camera mặc định điện thoại để mở Chi tiết và camera trong web để mở thẻ xem trước. Thử từ chối quyền, hết giờ và đóng scanner, kiểm tra camera dừng. Ghi “Chờ kiểm trên thiết bị thật” và nêu thiết bị, thao tác còn thiếu nếu chưa quan sát được.
- Chạy lại luồng COD mô phỏng trên site. Nếu phát hiện lỗi, sửa, chạy lại build, deploy lại khi được phép và kiểm tra lại trên URL công khai.
- Bàn giao link Pages, link Figma, một mã truy xuất, một cặp GTIN–số lô, một URL Chi tiết dùng cho QR và bảng nghiệm thu. Ghi rõ ca đã quan sát và ca còn chờ. Ghi trong README rằng mã, giá, chứng nhận OCOP giả định và đặt hàng là mô phỏng.

Tài liệu chính thức: [Static export](https://nextjs.org/docs/app/guides/static-exports), [basePath](https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath), [Pages workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages), [Camera](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia).
