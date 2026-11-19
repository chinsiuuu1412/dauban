--- 
name: user-workflow và phạm vi prototype
description: Workflow và phạm vi prototype của dự án "Dấu bản"
version 1:
updated: 19/11/2026
---

# DỰ ÁN "DẤU BẢN" - USERWORKFLOW

## Mục tiêu và cách đọc

Prototype web hỗ trợ giới thiệu sản phẩm Hộp quà của dự án "Dấu bản", bao gồm các tính năng: truy xuất nguồn gốc của sản phẩm thông qua mã truy xuất nguồn gốc số, mã GTIN&số lô đóng gói, mã QR; xem thông tin chi tiết sản phẩm, mô phỏng quy trình mua sản phẩm trên website dự án.

Tài liệu này quyết định user-workflow của dự án, xác định giao diện của dự án, và luồng hoạt động của người dùng khi truy cập vào trang web. Không được sửa tài liệu này nếu không có sự kiểm duyệt của người dùng.

## Ma trận phạm vi prototype

| NHÓM TÍNH NĂNG | Chi tiết |
|---|---|
|MÀN MỞ ĐẦU| Tên dự án "Dấu bản" --> hình ảnh Hộp quà (sản phẩm chính của dự án), lời giới thiệu dự án, hộp quả mở ra --> hình ảnh người nông dân trồng nông sản + lời giới thiệu tổng quan sản phẩm --> vào trang chủ; vào trực tiếp trang chủ. |
|TRA CỨU| Tra cứu sản phẩm thông qua mã truy xuất nguồn gốc số/mã GTIN&Số lô đóng gói/mã QR được quét bằng cả cam Web và cam điện thoại. |
|DANH MỤC| Danh mục các sản phẩm của dự án, bao gồm sản phẩm chính "Hộp quà" và các sản phẩm khác bao gồm "Cà phê", "Hạt điều", "Mắc ca" .|
|ĐẶT HÀNG| Mô phỏng quy trình người tiêu dùng đặt hàng trên website của dự án: nhập thông tin --> chọn phương thức thanh toán --> kiểm tra lại thông tin sản phẩm và thông tin cá nhân --> đặt hàng .|
|CÂU CHUYỆN| Giới thiệu chi tiết về câu chuyện và ý nghĩa của dự án .|

## Workflow 1: Giới thiệu tổng quan dự án và sản phẩm

## Trang 1: Giới thiệu tên dự án + lời dẫn

Title: Dự án Dấu Bản
Body: 
> “Dấu Bản” là hộp quà đặc sản mang bản sắc Đắk Lắk, được xây dựng từ sự kết hợp giữa nông sản địa phương và văn hóa Ê Đê. Sản phẩm gồm ba đặc sản tiêu biểu là cà phê, Macca và hạt điều, được lựa chọn không chỉ dựa trên giá trị sử dụng mà còn hướng đến việc kể câu chuyện về vùng đất, con người và phương thức sản xuất gắn với địa phương.

- Background trắng ngả vàng; có chuyển động sống động nhưng không cản trở đọc/đăng nhập. Có reduced-motion; không bắt người dùng chờ animation.
- Vuốt lên để sang trang 2; có đường đi thẳng đến trang chủ. Desktop/bàn phím có điều khiển tương đương, không bắt buộc thao tác vuốt.

## Trang 2: Giới thiệu tổng quan sản phẩm chính của dự án - Hộp quà

Hình ảnh: Hộp quà Dấu Bản.jpg
Title: Sản phẩm Hộp quà
Body:
> Hộp quà “Dấu Bản” lựa chọn ba sản phẩm cà phê, Macca và hạt điều làm thành phần chính. Đây không phải là sự kết hợp ngẫu nhiên mà là sự lựa chọn dựa trên ba yếu tố: đặc trưng nông sản Đắk Lắk, giá trị sử dụng và khả năng kể câu chuyện về vùng đất.

- Background trắng ngả vàng + hình ảnh hộp quà ở bên tay trái, bên tay phải là title + body.
- Vuốt lên, hoặc chạm vào màn hình hình ảnh hộp quà zoom lên, mở ra và chuyển sang trang 3; có đường đi thẳng đến trang chủ. Desktop/bàn phím có điều khiển tương đương, không bắt buộc thao tác vuốt.

## Trang 3: Giới thiệu tổng quan về các sản phẩm trong Hộp quà

Hình ảnh: cà phê.jpg
Title: Cà phê/Hạt điều/Mắc ca (tạo thành 3 tabs chuyển động khi người dùng vuốt sang bên trái)

Title 1: Cà phê
Body 1:
>Cà phê được lựa chọn làm sản phẩm trung tâm bởi đây là một trong những sản vật tạo nên dấu ấn rõ nét của Đắk Lắk. So với việc lựa chọn cà phê từ các vùng khác, cà phê Đắk Lắk phù hợp với “Dấu Bản” vì nó có khả năng đại diện trực tiếp cho không gian nông nghiệp và văn hóa Tây Nguyên.

Title 2: Hạt điều
Body 2:
> Hạt điều được đưa vào hộp quà nhằm tạo thêm một tầng hương vị và hoàn thiện nhóm sản phẩm nông nghiệp.

Title 3: Mắc ca
Body 3:
> Macca được lựa chọn để tạo nên sự cân bằng với vị đậm của cà phê. Nếu cà phê mang đến hương thơm mạnh và vị sâu thì Macca có đặc trưng béo, bùi, thơm nhẹ, kết cấu giòn và hậu vị tương đối thanh.

- Background: hình ảnh cà phê.jpg + đổ bóng ở phần bên tay phải để hiện title và body.
- Vuốt lên, hoặc chạm vào màn hình để hình ảnh biến mất hiện sang trang chủ của dự án. Desktop/bàn phím có điều khiển tương đương, không bắt buộc thao tác vuốt/bấm.

## Workflow 2: Trang chủ và tìm kiếm sản phẩm

## Trang: Trang chủ

- Hình ảnh chính: Hộp quà: Hình ảnh +  tên sản phẩm (title), mô tả sản phẩm, giá bán + biểu tượng thêm vào giỏ hàng + số lượng sản phẩm Hộp quà hiện được có trong giỏ hàng (ban đầu là không, nếu người dùng từng thêm vào sẽ hiện số lượng đang có trong giỏ hàng)
- Hình ảnh của các sản phẩm khác:
+ Cà phê Đắk Lắk: Hình ảnh + tên sản phẩm (title), mô tả sản phẩm, giá bán + biểu tượng thêm vào giỏ hàng + số lượng sản phẩm Cà phê hiện được có trong giỏ hàng (ban đầu là không, nếu người dùng từng thêm vào sẽ hiện số lượng đang có trong giỏ hàng)
+ Hạt điều Đắk Lắk: Hình ảnh + tên sản phẩm (title), mô tả sản phẩm, giá bán + biểu tượng thêm vào giỏ hàng + số lượng sản phẩm Hạt điều hiện được có trong giỏ hàng (ban đầu là không, nếu người dùng từng thêm vào sẽ hiện số lượng đang có trong giỏ hàng)
+ Mắc ca Đắk Lắk: Hình ảnh + tên sản phẩm (title), mô tả sản phẩm, giá bán + biểu tượng thêm vào giỏ hàng + số lượng sản phẩm Mắc ca hiện được có trong giỏ hàng (ban đầu là không, nếu người dùng từng thêm vào sẽ hiện số lượng đang có trong giỏ hàng)
- Câu chuyện của chúng tôi: Giới thiệu tổng quan về dự án và đường link dẫn tới trang Về chúng tôi

- Người dùng nhấn vào hình ảnh của sản phẩm sẽ hiện ra thông tin chi tiết của sản phẩm.
- Nếu người dùng nhấn vào biểu tượng thêm vào giỏ hàng, số sản phẩm sẽ được cộng thêm 1, với mỗi lượt click.
- Người dùng có thể tự nhập vào số lượng hàng muốn đặt khi nhấn vào ô số lượng sản phẩm (phải là một số tự nhiên), và phải nhấn vào biểu tượng thêm vào giỏ hàng để hoàn tất thêm vào giỏ hàng. 
- Khi người dùng thêm vào giỏ hàng thành công, hệ thống sẽ hiện thông báo "Bạn đã thêm X sản phẩm Y thành công vào giỏ hàng. Kiểm tra giỏ hàng của bạn tại đây", với X là số lượng, Y là tên sản phẩm, "tại đây" là đường link dẫn tơi trang giỏ hàng khi người dùng click vào.
- Mặc định khi người dùng đã hoàn tất quy trình đặt hàng sản phẩm nào, thì số lượng sản phẩm đấy trong giỏ hàng về lại 0.

- Background màu trắng ngả vàng, các components được lấy màu nâu đỏ, đỏ đất làm điểm nhấn.
- Ở dưới cùng: Tìm hiểu câu chuyện của Chúng tôi tại đây, khi người dùng nhấn vào "tại đây" - đường link dẫn tới trang Về chúng tôi

## Tìm kiếm sản phẩm

- Thanh tìm kiếm sản phẩm.
- Icon quét mã vạch ở bên tay trái ngoài cùng của thanh tìm kiếm sản phẩm.
- Ở dưới thanh tìm kiếm sản phẩm: hai lựa chọn:
+ Mã truy xuất nguồn gốc
+ Mã GTIN & Số lô đóng gói.

- Người dùng chọn một trong ba lựa chọn:
+ Nếu chọn quét mã QR, cam web hiện lên, người dùng quét vào mã có trên sản phẩm. Nếu mã không đúng, hệ thống phản hồi: "Không tồn tại sản phẩm này". Nếu sau 30s không quét được mã QR, hệ thống phản hồi: "Không tìm được mã QR". Nếu mã đúng, hiện lên ô giới thiệu tổng quan sản phẩm. Người dùng chọn xem chi tiết để xem vào trang xem chi tiết thông tin sản phẩm. Người dùng nhấn vào dấu x ở bên phía tay phải trên cùng của ô giới thiệu tổng quan sản phẩm để về lại trang chủ.
+ Nếu chọn mã truy xuất nguồn gốc hoặc mã GTIN & Số lô đóng gói. Nếu người dùng nhập đúng mã và nhấn vào biểu tượng tìm kiếm(hoặc enter), hiện lên ô giới thiệu tổng quan sản phẩm. Người dùng nhấn vào xem chi tiết sản phẩm để xem chi tiết sản phẩm; người dùng nhấn vào dấu x ở bên phía tay phải, trên cùng của ô giới thiệu sản phẩm để về lại trang chủ. Nếu người dùng không nhập đúng mã, và nhấn vào biểu tượng tìm kiếm (hoặc enter), kết quả trả về "Bạn đã nhập sai mã".
- Nếu người dùng không nhập mã, và nhấn vào biểu tượng tìm kiếm (hoặc enter), kết quả trả về "Bạn chưa nhập mã, xin vui lòng nhập mã".
- Nếu người dùng nhập mã, nhưng không nhấn enter, không nhấn vào biểu tượng tìm kiếm, giao diện vẫn hiển thị ở trang chủ.

## Workflow 3: Danh mục sản phẩm

## Trang: Danh mục

- Background màu trắng ngả vàng, các components được lấy màu nâu đỏ, đỏ đất làm điểm nhấn.
- Ở dưới cùng: Tìm hiểu câu chuyện của Chúng tôi tại đây, khi người dùng nhấn vào "tại đây" - đường link dẫn tới trang Về chúng tôi

## Danh sách sản phẩm

- Hiển thị lần lượt hình ảnh các sản phẩm:
+ Hộp quà: Hình ảnh +  tên sản phẩm (title), mô tả sản phẩm, giá bán + biểu tượng thêm vào giỏ hàng + số lượng sản phẩm Hộp quà hiện được có trong giỏ hàng (ban đầu là không, nếu người dùng từng thêm vào sẽ hiện số lượng đang có trong giỏ hàng)
+ Cà phê Đắk Lắk: Hình ảnh + tên sản phẩm (title), mô tả sản phẩm, giá bán + biểu tượng thêm vào giỏ hàng + số lượng sản phẩm Cà phê hiện được có trong giỏ hàng (ban đầu là không, nếu người dùng từng thêm vào sẽ hiện số lượng đang có trong giỏ hàng)
+ Hạt điều Đắk Lắk: Hình ảnh + tên sản phẩm (title), mô tả sản phẩm, giá bán + biểu tượng thêm vào giỏ hàng + số lượng sản phẩm Hạt điều hiện được có trong giỏ hàng (ban đầu là không, nếu người dùng từng thêm vào sẽ hiện số lượng đang có trong giỏ hàng)
+ Mắc ca Đắk Lắk: Hình ảnh + tên sản phẩm (title), mô tả sản phẩm, giá bán + biểu tượng thêm vào giỏ hàng + số lượng sản phẩm Mắc ca hiện được có trong giỏ hàng (ban đầu là không, nếu người dùng từng thêm vào sẽ hiện số lượng đang có trong giỏ hàng)

- Người dùng nhấn vào hình ảnh của sản phẩm sẽ hiện ra thông tin chi tiết của sản phẩm.
- Nếu người dùng nhấn vào biểu tượng thêm vào giỏ hàng, số sản phẩm sẽ được cộng thêm 1, với mỗi lượt click.
- Người dùng có thể tự nhập vào số lượng hàng muốn đặt khi nhấn vào ô số lượng sản phẩm (phải là một số tự nhiên), và phải nhấn vào biểu tượng thêm vào giỏ hàng để hoàn tất thêm vào giỏ hàng. 
- Khi người dùng thêm vào giỏ hàng thành công, hệ thống sẽ hiện thông báo "Bạn đã thêm X sản phẩm Y thành công vào giỏ hàng. Kiểm tra giỏ hàng của bạn tại đây", với X là số lượng, Y là tên sản phẩm, "tại đây" là đường link dẫn tơi trang giỏ hàng khi người dùng click vào.
- Mặc định khi người dùng đã hoàn tất quy trình đặt hàng sản phẩm nào, thì số lượng sản phẩm đấy trong giỏ hàng về lại 0.

## Chi tiết sản phẩm

## Trang: Thông tin chi tiết sản phẩm

- Khi người dùng nhấn vào xem chi tiết sản phẩm (có thể từ phần tra cứu sản phẩm, từ trang chủ, hoặc từ danh mục)
- Ở bên tay trái:
+ Hình ảnh sản phẩm
+ Giá bán + biểu tượng thêm vào giỏ hàng + số lượng trong giỏ hàng, ở dưới hình ảnh sản phẩm
+ Mã QR truy cứu nguồn gốc sản phẩm, ở bên dưới giá bán
- Ở bên tay phải:
+ Chứng nhận sản phẩm + Tỉnh thành sản xuất
+ Tên sản phẩm
+ Giới thiệu tổng quan sản phẩm (xem chi tiết tại information.md)
+ Giá bán + biểu tượng thêm vào giỏ hàng + số lượng trong giỏ hàng
+ 3 tabs bao gồm: hành trình sản phẩm, thông tin sản phẩm, doanh nghiệp (xem chi tiết tại information.md)

- Nếu người dùng nhấn vào biểu tượng thêm vào giỏ hàng, số sản phẩm sẽ được cộng thêm 1, với mỗi lượt click.
- Người dùng có thể tự nhập vào số lượng hàng muốn đặt khi nhấn vào ô số lượng sản phẩm (phải là một số tự nhiên), và phải nhấn vào biểu tượng thêm vào giỏ hàng để hoàn tất thêm vào giỏ hàng. 
- Khi người dùng thêm vào giỏ hàng thành công, hệ thống sẽ hiện thông báo "Bạn đã thêm X sản phẩm Y thành công vào giỏ hàng. Kiểm tra giỏ hàng của bạn tại đây", với X là số lượng, Y là tên sản phẩm, "tại đây" là đường link dẫn tơi trang giỏ hàng khi người dùng click vào.
- Mặc định khi người dùng đã hoàn tất quy trình đặt hàng sản phẩm nào, thì số lượng sản phẩm đấy trong giỏ hàng về lại 0.

- Ở dưới cùng: Tìm hiểu câu chuyện của Chúng tôi tại đây, khi người dùng nhấn vào "tại đây" - đường link dẫn tới trang Về chúng tôi

## Workflow 4: Đặt hàng sản phẩm

## Trang: Giỏ hàng

- Background màu trắng ngả vàng, các components được lấy màu nâu đỏ, đỏ đất làm điểm nhấn.
- Ở dưới cùng: Tìm hiểu câu chuyện của Chúng tôi tại đây, khi người dùng nhấn vào "tại đây" - đường link dẫn tới trang Về chúng tôi
- Khi người dùng vào trang Giỏ hàng, đầu tiên sẽ hiện ra thông tin giỏ hàng hiện nay bao gồm. Hình ảnh những sản phẩm + giá bản + số lượng hiện đang có trong giỏ hàng. Nếu trong giỏ hàng không có gì thì hiện "Hiện tại giỏ hàng của bạn chưa có sản phẩm nào, tiếp tục xem sản phẩm tại đây", (click vào tại đây trả về trang Danh mục).
- Ở dưới sản phẩm đang có trong giỏ hàng, hoặc dòng chữ "Hiện tại giỏ hàng của bạn chưa có sản phẩm nào, tiếp tục xem sản phẩm tại đây"
- Nếu người dùng đang có sản phẩm nhưng chưa tiến hành đặt hàng, ô Tiến hành thanh toán hoạt động (màu xanh). Nếu người dùng chưa có sản phẩm, ô Tiến hành thanh toán không hoạt động (màu xám). Nếu người dùng chưa hoàn thành thủ tục đặt hàng, ô Tiến hành thanh toán đổi thành ô "Tiếp tục thanh toán" (màu xanh) và ô "Hủy thanh toán" (màu đỏ).
- Khi người dùng nhấn vào ô Tiến hành thanh toán, người dùng được chuyển đến trang đặt hàng, và bắt đầu điền các thông tin.
- Khi người dùng đang điền thông tin, và thoát khỏi trang đặt hàng (tính trong trường hợp người dùng vẫn ở trên trình duyệt), hệ thống sẽ phản hồi "Bạn có muốn lưu thông tin hiện có không". Người dùng trả lời "Có" hoặc "Không". Nếu người dùng tắt thiết bị, thoát khỏi ứng dụng trình duyệt, khi người dùng quay trở lại với trang Đặt hàng, hệ thống sẽ phản hồi "Bạn có muốn lưu thông tin hiện có không", người dùng trả lời "Có" hoặc "Không", với điều kiện người dùng không thoát trang Đặt hàng quá 10 phút. Ở dưới phần điền thông tin có nút "Lưu" (màu xanh), để người dùng chủ động lưu thông tin đã điền, bên cạnh nút "Hoàn tất thanh toán" (màu xám nếu chưa điền xong thông tin). Nút "Hoàn tất thanh toán" chỉ hoạt động (màu xanh), khi người dùng đã điền đầy đủ thông tin và nút Lưu giữ nguyên màu xanh. Bên cạnh nút "Hoàn tất thanh toán", có nút "Hủy" (màu đỏ), để người dùng hủy thông tin thanh toán.
- Khi người dùng nhấn nút "Hủy", hệ thống sẽ phản hồi "Bạn có muốn hủy thanh toán không, thông tin bạn đã điền sẽ bị xóa và sản phẩm sẽ bị xóa khỏi giỏ hàng". Người dùng trả lời "Ok" hoặc "Cancel"
- Khi người dùng nhấn vào ô Tiếp tục thanh toán, người dùng được chuyển đến trang đặt hàng và hoàn thiện nốt các thông tin còn thiếu.
- Khi người dùng nhấn Hủy thanh toán, các thông tin người dùng đã điền sẽ bị hủy, sản phẩm bị xóa khỏi giỏ hàng.
- Nếu người dùng đang Thanh toán nhưng chưa hoàn thành, mà thêm sản phẩm mới ngoài giỏ hàng hiện có, hoặc thay đổi số lượng sản phẩm, hoặc thay đổi toàn bộ sản phẩm. Các thông tin cá nhân của người dùng được giữ nguyên, thông tin sản phẩm thay đổi theo thay đổi mới nhất của người dùng.
- Nếu người dùng đã hoàn thành thủ tục thanh toán. Ngay sau khi hoàn thành thủ tục thanh toán, người dùng về Trang chủ, hệ thống phản hồi "Bạn đã đặt hàng thành công", và giỏ hàng trở về "Hiện tại giỏ hàng của bạn chưa có sản phẩm nào, tiếp tục xem sản phẩm tại đây".

## Trang đặt hàng

## Nhập thông tin cá nhân

- Người dùng nhập:
+ Họ và tên:
+ Giới tính (optional):
+ Số điện thoại:
+ Địa chỉ nhận hàng: Địa chỉ chi tiết, phường, thành phố (mặc định quốc gia Việt Nam)

## Kiểm tra thông tin sản phẩm

- Danh sách các sản phẩm có trong giỏ hàng + đơn giá + tổng tiền mỗi sản phẩm
- Tổng tiền cần thanh toán
- Voucher (optional).

## Chọn phương thức thanh toán

- Bao gồm các phương thức:
+ COD (cost on delivery).
+ Mobile banking:
+ Visa/Master Card
+ Apple Pay:
+ Momo

## Kiểm tra lại thông tin cá nhân, thông tin sản phẩm, phương thức thanh toán.

- Tổng hợp lại tất cả các thông tin người dùng đã nhập và điền
- Nút "Hoàn tất thanh toán" hoạt động, bên cạnh có nút "Hủy"
- Người dùng có thể scroll lên để chỉnh sửa thông tin đã điền

## Workflow 5: Giới thiệu chi tiết về dự án

- Background màu trắng ngả vàng, các components, titles, headers được lấy màu nâu đỏ, đỏ đất làm điểm nhấn.
- Title: Dự án dấu bản:
- Chia nội dung trang theo các header, body, chi tiết xem tại fie (introduction.md).

## Các tài liệu tham khảo

- [references/information.md]: cung cấp thông tin chi tiết (bao gồm mã QR, mã truy xuất nguồn gốc sản phẩm, mã GTIN&Số lô đóng gói, giới thiệu tổng quan sản phẩm, hành trình sản phẩm, thông tin sản phẩm, doanh nghiệp, giá bán sản phẩm) về các sản phẩm của dự án
- [references/introduction.md]: cung cấp thông tin chi tiết về thông tin và câu chuyện của dự án
- [references/design-system.md]: cung cấp thông tin chi tiết về giao diện của web.