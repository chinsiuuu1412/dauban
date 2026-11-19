'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CartProvider, useCart } from './cart';

const items = [
  { href: '/trang-chu/', label: 'Trang chủ' },
  { href: '/san-pham/', label: 'Danh mục' },
  { href: '/ve-chung-toi/', label: 'Về chúng tôi' },
  { href: '/trang-chu/#tra-cuu', label: 'Tra cứu' },
];

function Navigation() {
  const pathname = usePathname();
  const { cart } = useCart();
  const count = Object.values(cart).reduce((total, quantity) => total + quantity, 0);

  return (
    <header className="border-b border-line bg-paper">
      <div className="frame flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-4">
        <Link href="/trang-chu/" className="font-serif text-2xl font-bold text-earth">Dấu Bản</Link>
        <nav aria-label="Điều hướng chính" className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold sm:gap-x-6 sm:text-sm">
          {items.map(({ href, label }) => (
            <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}
              className="flex min-h-9 items-center hover:text-earth aria-[current=page]:text-earth aria-[current=page]:underline aria-[current=page]:underline-offset-4">{label}</Link>
          ))}
          <Link href="/gio-hang/" className="button" aria-current={pathname === '/gio-hang/' ? 'page' : undefined}>Giỏ hàng ({count})</Link>
        </nav>
      </div>
    </header>
  );
}

export function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <Navigation />
      {children}
      <footer className="mt-16 border-t border-line bg-paper">
        <div className="frame flex flex-wrap items-center justify-between gap-3 py-6 text-sm">
          <Link href="/ve-chung-toi/" className="text-link">Tìm hiểu câu chuyện Dấu Bản</Link>
          <p>Prototype · Sản phẩm, giá, mã truy xuất và đơn hàng mô phỏng.</p>
        </div>
      </footer>
    </CartProvider>
  );
}
