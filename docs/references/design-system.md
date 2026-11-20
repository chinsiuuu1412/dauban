## THIẾT KẾ GIAO DIỆN

## Nhận diện

**Dấu Bản** là tên dự án. **Hương Đất Đắk Lắk** là tên hộp quà. Giao diện tiếng Việt dành cho người tiêu dùng, theo phong cách trầm ấm với nền trắng ngả vàng, chữ nâu sẫm và điểm nhấn đỏ đất. [Thiết kế Figma](https://www.figma.com/design/WQwg56ZDSTNlaNkBaoDPMO?node-id=1-8)

## Image

- Ảnh gốc nằm trong [`docs/ảnh/`](../%E1%BA%A3nh/). Ứng dụng dùng ảnh tĩnh trong [`frontend/public/images/`](../../frontend/public/images/) và ánh xạ ảnh theo slug. [Bảng đối chiếu ảnh](scope.md#ảnh-có-sẵn)
- Trang chủ và Danh mục giữ ảnh bên trái, thông tin bên phải trên cả desktop lẫn mobile. Ảnh sản phẩm dùng `object-contain` để giữ trọn khung. Cảnh 2 đưa ảnh hộp lên trên lời dẫn ở màn hẹp.
- Cảnh 3 dùng `nong-dan.jpg` phủ toàn khung với `object-cover` và lớp phủ tối để đọc chữ. Crop mobile ưu tiên phía trái (`15% center`), desktop căn giữa. Trang Về chúng tôi dùng cùng ảnh với chú thích minh họa thu hoạch cà phê.

## Color tokens

| Token | Mã màu | Vai trò |
| --- | --- | --- |
| `cream` | `#f7f1e9` | Nền trang |
| `paper` | `#fffdf8` | Nền cảnh 1, header, footer, form và hộp thoại |
| `earth` | `#7d3a31` | Nút chính, liên kết, giá và viền focus |
| `ink` | `#302421` | Chữ chính và trạng thái hover của nút chính |
| `line` | `#dbccbf` | Đường phân cách và viền control |

Các biến màu nằm trong [`frontend/app/globals.css`](../../frontend/app/globals.css).

## Color distribution

- Dùng nền `cream` cho trang và `paper` cho các vùng cần phân biệt như thanh điều hướng, form và hộp thoại. Dùng `line` để phân chia các hàng sản phẩm và các vùng nội dung.
- Dùng `ink` cho phần lớn nội dung. Dùng `earth` cho giá, liên kết, hành động chính và điều hướng đang chọn. Chữ trên nút chính và nội dung cảnh 3 dùng màu trắng.

## Typography

- Tiêu đề `h1`–`h3` dùng **Lora Variable**, với Georgia làm font dự phòng. Nội dung và điều khiển dùng **Be Vietnam Pro**, với các độ đậm 400, 500, 600 và 700 được nạp trong root layout.
- Tiêu đề trang dùng `text-4xl` trên mobile và `sm:text-6xl` ở màn rộng hơn. Tên Dấu Bản trong cảnh 1 dùng cỡ chữ co giãn và đậm. Tên sản phẩm có thể xuống dòng ở màn hẹp. [Khai báo font và layout](../../frontend/app/layout.tsx)

## Spacing

- Khung nội dung `.frame` căn giữa, giới hạn `max-w-6xl`, lề ngang `px-4` trên mobile và `sm:px-8` ở màn rộng hơn.
- Hàng sản phẩm dùng `gap-3` và `py-6`, tăng lên `sm:gap-12` và `sm:py-9`. Footer cách phần trước bằng `mt-16` và có `py-8` bên trong. [Hàng sản phẩm](../../frontend/components/product-row.tsx) · [Footer](../../frontend/components/site-footer.tsx)

## Radius

- `rounded-md` dùng cho nút, ô nhập và khung ảnh. `rounded-lg` dùng cho vùng Tra cứu, form Đặt hàng và hộp thoại.

## Shadow

- Hộp thoại dùng `shadow-xl` và lớp phủ `backdrop:bg-black/50`. Các hàng sản phẩm dùng đường phân cách `border-line`. [Hộp thoại](../../frontend/components/modal.tsx)

## App shell

- Root layout đặt ngôn ngữ `vi` và gắn một footer chung cho mở đầu lẫn các trang cửa hàng. Ba cảnh mở đầu dùng bố cục toàn khung. Footer nằm sau nội dung trong luồng cuộn tự nhiên.
- Layout cửa hàng dùng chung trạng thái giỏ và thanh điều hướng gồm Trang chủ, Danh mục, Về chúng tôi, Tra cứu và Giỏ hàng. Thanh điều hướng có thể xuống dòng trên mobile. Trang hiện tại dùng `aria-current`.
- Footer gồm Điều hướng và Liên hệ. Liên hệ hiển thị thông báo sẽ bổ sung trong khi chờ URL. [Điều hướng và footer](experience.md#footer)

## Components

- `ProductRow` dùng chung cho Trang chủ và Danh mục. `ProductTabs` hiển thị ba tab chi tiết và hỗ trợ phím mũi tên.
- `Lookup` dùng hộp thoại chung để xem trước sản phẩm. `Scanner` mở camera khi người xem bấm Quét QR. `CartPage` và `Checkout` dùng cùng dữ liệu giá và trạng thái giỏ. [Bản đồ mã nguồn](scope.md#điểm-vào-trong-repo)

## Button

- `.button` dùng nền `earth`, chữ trắng và đổi sang `ink` khi hover. `.button-secondary` dùng nền `paper`, chữ `earth` và viền `line` đổi sang `earth` khi hover. Cả hai có chiều cao tối thiểu `min-h-11`.
- `.text-link` dùng chữ `earth` và gạch chân. Trạng thái `:focus-visible` có viền `outline-2` với `outline-offset-4`. Nút vô hiệu hóa giảm độ đục còn 50%. [Các lớp dùng chung](../../frontend/app/globals.css)

## Animation

- Cảnh 1 hiện chữ trong 800 ms. Khi có thao tác cuộn, vuốt hoặc phím điều hướng, cảnh 1 mờ đi trong 300 ms và cảnh 2 hiện trong 300 ms. Cảnh 2 dùng zoom nhẹ lúc thoát.
- Nút **Vào Trang chủ** ở cảnh 3 dùng fade 450 ms. Khi bật `prefers-reduced-motion`, bỏ hiệu ứng hiện chữ và zoom, chuyển cảnh hoặc điều hướng trực tiếp. [Mã chuyển cảnh](../../frontend/components/introduction.tsx) · [Hành vi mở đầu](experience.md#mở-đầu-tại-)
