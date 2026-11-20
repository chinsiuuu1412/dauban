'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, type FormEvent } from 'react';
import { products, slugs, type Slug } from '../lib/products';
import { cartTotal } from '../lib/shop';
import { detail, money, photo } from '../lib/site';
import { useCart } from './cart';

function Quantity({ slug, quantity }: { slug: Slug; quantity: number }) {
  const { replace } = useCart();
  const [draft, setDraft] = useState<string | null>(null);
  const [message, setMessage] = useState('');

  function update(event: FormEvent) {
    event.preventDefault();
    const updated = replace(slug, Number(draft ?? quantity));
    if (updated) setDraft(null);
    setMessage(updated ? 'Đã cập nhật.' : 'Vui lòng nhập số nguyên dương hợp lệ.');
  }

  return (
    <>
      <form onSubmit={update} className="mt-2 flex flex-wrap gap-2">
        <label htmlFor={'cart-' + slug} className="sr-only">Số lượng {products[slug].name}</label>
        <input type="number" id={'cart-' + slug} min={1} step={1} required className="field w-16"
          value={draft ?? quantity} onChange={(event) => { setDraft(event.target.value); setMessage(''); }} />
        <button type="submit" className="button-secondary">Cập nhật</button>
        <button type="button" className="text-link min-h-11 px-2 text-sm" onClick={() => replace(slug, 0)}>Xóa</button>
      </form>
      <p role="status" className="text-xs">{message}</p>
    </>
  );
}

export function CartPage() {
  const { cart, ready } = useCart();
  const lines = slugs.filter((slug) => cart[slug]);
  return (
    <main className="frame min-h-[55svh] pt-9 sm:pt-14">
      <h1 className="page-title">Giỏ hàng</h1>
      {!ready ? <p role="status" className="mt-6">Đang tải giỏ hàng…</p> : lines.length === 0 ? (
        <p className="mt-6">Giỏ hàng của bạn đang trống. <Link className="text-link" href="/san-pham/">Xem danh mục</Link></p>
      ) : (
        <>
          <ul className="mt-6 border-t border-line">
            {lines.map((slug) => (
              <li key={slug} className="grid grid-cols-[4.5rem_minmax(0,1fr)] items-start gap-4 border-b border-line py-4 sm:grid-cols-[7rem_minmax(0,1fr)_auto]">
                <Link href={detail(slug)} aria-label={products[slug].name} className="relative aspect-square rounded-md bg-paper">
                  <Image src={photo(slug)} alt={products[slug].name} fill sizes="112px" className="object-contain" />
                </Link>
                <div>
                  <h2 className="text-xl"><Link href={detail(slug)}>{products[slug].name}</Link></h2>
                  <p className="mt-1 text-sm">{money(products[slug].price)}</p>
                  <Quantity slug={slug} quantity={cart[slug]!} />
                </div>
                <p className="col-start-2 font-semibold text-earth sm:col-start-3">{money(products[slug].price * cart[slug]!)}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="font-semibold">Tổng tiền hàng: {money(cartTotal(cart))}</p>
            <Link href="/dat-hang/" className="button">Tiến hành đặt hàng</Link>
          </div>
        </>
      )}
    </main>
  );
}
