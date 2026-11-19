'use client';

import { useCart } from './cart';

export function OrderNotice() {
  const { orderComplete, dismissOrderNotice } = useCart();
  return orderComplete ? (
    <div className="flex flex-wrap items-center justify-between gap-2 rounded-md border border-line bg-paper p-4 text-sm">
      <p role="status" className="font-semibold">Bạn đã đặt hàng mô phỏng thành công.</p>
      <button type="button" className="button-secondary" onClick={dismissOrderNotice}>Đóng thông báo</button>
    </div>
  ) : null;
}
