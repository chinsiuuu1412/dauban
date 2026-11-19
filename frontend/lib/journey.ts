export const journeyGroups = [
  { title: 'Vùng trồng', fields: [
    'Tên nông sản', 'Vùng trồng và địa chỉ vùng nguyên liệu', 'Tên hộ sản xuất, hợp tác xã hoặc đơn vị quản lý',
    'Diện tích vùng trồng', 'Giống cây trồng', 'Thời gian canh tác, mùa vụ', 'Hình ảnh vùng nguyên liệu',
  ] },
  { title: 'Thu hoạch', fields: [
    'Ngày thu hoạch', 'Địa điểm thu hoạch', 'Đơn vị thực hiện', 'Sản lượng',
    'Mã lô nguyên liệu', 'Phương pháp thu hoạch', 'Sơ chế ban đầu', 'Hình ảnh thực tế',
  ] },
  { title: 'Chế biến', fields: [
    'Tên và địa chỉ cơ sở chế biến', 'Ngày tiếp nhận nguyên liệu', 'Mã lô nguyên liệu đầu vào',
    'Các công đoạn chế biến thực tế', 'Thành phần bổ sung', 'Kết quả kiểm tra chất lượng và an toàn thực phẩm',
  ] },
  { title: 'Đóng gói', fields: [
    'Tên đơn vị đóng gói', 'Ngày đóng gói, mã lô sản phẩm', 'Thành phần', 'Ngày sản xuất',
    'Hạn sử dụng', 'Nhãn hàng', 'Tiêu chuẩn công bố',
  ] },
  { title: 'Phân phối và lưu thông', fields: [
    'Đơn vị phân phối', 'Ngày xuất kho, ngày giao nhận', 'Số lượng xuất, nhập, tồn kho theo lô',
    'Đơn vị tiếp nhận, địa điểm phân phối', 'Nhật ký giao nhận, thông tin thu hồi',
  ] },
] as const;
