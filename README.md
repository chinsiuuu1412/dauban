# Dấu Bản

Prototype tiếng Việt giới thiệu hộp quà và ba nông sản Đắk Lắk. Giá, mã truy xuất, mã GTIN–số lô, đặt hàng COD và thông tin giao hàng đều là dữ liệu mô phỏng. OCOP 4 sao là chứng nhận giả định của dự án. Prototype chạy hoàn toàn trong trình duyệt. Giỏ lưu slug và số lượng trong `localStorage`.

## Chạy local

Cần Node.js 22.18 trở lên. Workflow Pages sử dụng Node.js 24.

```sh
cd frontend
npm ci
npm run dev
```

Mở `http://localhost:3000/` để xem ba cảnh mở đầu hoặc `http://localhost:3000/trang-chu/` để vào thẳng Trang chủ.

Trong PowerShell, dùng `npm.cmd` nếu chính sách thực thi chặn `npm.ps1`.

```sh
npm run lint
npm run typecheck
npm test
npm run build
```

Bản static nằm trong `frontend/out/`. Khi phục vụ dưới một đường dẫn con, đặt `NEXT_PUBLIC_BASE_PATH` khi build, ví dụ `/dauban`, rồi phục vụ thư mục export tại đường dẫn tương ứng.

Để tạo QR phục vụ kiểm thử local, chạy trong PowerShell từ `frontend/`:

```powershell
$env:NEXT_PUBLIC_BASE_PATH = '/dauban'
$env:NEXT_PUBLIC_SITE_URL = 'https://example.com/dauban/'
npm.cmd run build
Remove-Item Env:NEXT_PUBLIC_BASE_PATH, Env:NEXT_PUBLIC_SITE_URL
```

Các QR của cấu hình này mã hóa URL kiểm thử. Camera trong web có thể đọc chúng để mở thẻ xem trước. Quét bằng ứng dụng camera mặc định cần QR được tạo từ URL Pages thật để mở trang chi tiết đã xuất bản.

## Dữ liệu tra cứu demo

| Sản phẩm | Mã truy xuất | GTIN demo | Số lô demo |
| --- | --- | --- | --- |
| Hương Đất Đắk Lắk | `DB-DEMO-001` | `DEMO-GTIN-001` | `DEMO-LO-001` |
| Cà phê Đắk Lắk | `DB-DEMO-002` | `DEMO-GTIN-002` | `DEMO-LO-002` |
| Hạt điều Đắk Lắk | `DB-DEMO-003` | `DEMO-GTIN-003` | `DEMO-LO-003` |
| Mắc ca Đắk Lắk | `DB-DEMO-004` | `DEMO-GTIN-004` | `DEMO-LO-004` |

## GitHub Pages

[Workflow Pages](.github/workflows/pages.yml) chạy thủ công sau khi repo được cấp quyền xuất bản và **Settings → Pages → Source** được đặt thành **GitHub Actions**. Workflow lấy URL HTTPS và base path từ Pages rồi tạo mã QR trỏ đến từng trang chi tiết. Ví dụ với URL project site dự kiến, QR của Hộp quà trỏ đến `https://chinsiuuu1412.github.io/dauban/san-pham/hop-qua/`. Các bản build local mặc định hiển thị thông báo chờ cấu hình QR.

[Thiết kế Figma](https://www.figma.com/design/WQwg56ZDSTNlaNkBaoDPMO?node-id=1-8) · [Tiêu chí nghiệm thu](docs/references/release.md)
