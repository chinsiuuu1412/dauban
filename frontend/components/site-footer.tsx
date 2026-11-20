import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-line bg-paper">
      <div className="frame grid gap-6 py-8 text-sm sm:grid-cols-2">
        <nav aria-labelledby="footer-navigation">
          <h2 id="footer-navigation" className="mb-2 text-xl">Điều hướng</h2>
          <ul className="flex flex-wrap gap-x-4">
            <li><Link href="/trang-chu/" className="text-link inline-flex min-h-11 items-center">Trang chủ</Link></li>
            <li><Link href="/san-pham/" className="text-link inline-flex min-h-11 items-center">Sản phẩm</Link></li>
            <li><Link href="/ve-chung-toi/" className="text-link inline-flex min-h-11 items-center">Về chúng tôi</Link></li>
          </ul>
        </nav>
        <section aria-labelledby="footer-contact">
          <h2 id="footer-contact" className="mb-2 text-xl">Liên hệ</h2>
          <p>Thông tin liên hệ sẽ được bổ sung.</p>
        </section>
        <p className="border-t border-line pt-4 sm:col-span-2">Prototype · Sản phẩm, giá, mã truy xuất và đơn hàng mô phỏng.</p>
      </div>
    </footer>
  );
}
