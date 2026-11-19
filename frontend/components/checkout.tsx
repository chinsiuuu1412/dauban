'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { products, slugs } from '../lib/products';
import { cartTotal } from '../lib/shop';
import { money } from '../lib/site';
import { useCart } from './cart';

export function Checkout() {
  const { cart, ready, complete } = useCart();
  const router = useRouter();
  const [step, setStep] = useState<'delivery' | 'review' | 'done'>('delivery');
  const [useSample, setUseSample] = useState(false);
  const [cod, setCod] = useState(false);
  const [reviewedCart, setReviewedCart] = useState(cart);
  const [reviewMessage, setReviewMessage] = useState('');
  const confirmed = useRef(false);
  const displayCart = step === 'review' ? reviewedCart : cart;
  const lines = slugs.filter((slug) => displayCart[slug]);

  function confirm() {
    if (confirmed.current || step !== 'review' || !useSample || !cod || !lines.length) return;
    if (!complete(reviewedCart)) {
      setReviewMessage('Giỏ hàng đã thay đổi. Vui lòng kiểm tra lại trước khi xác nhận.');
      setStep('delivery');
      return;
    }
    confirmed.current = true;
    setStep('done');
    router.replace('/trang-chu/');
  }

  return (
    <main className="frame min-h-[55svh] pt-9 sm:pt-14">
      <h1 className="page-title">Đặt hàng mô phỏng</h1>
      {!ready || step === 'done' ? <p role="status" className="mt-5">{step === 'done' ? 'Đang về Trang chủ…' : 'Đang tải giỏ hàng…'}</p>
        : lines.length === 0 ? <p className="mt-5">Giỏ hàng đang trống. <Link href="/san-pham/" className="text-link">Xem danh mục</Link></p>
        : (
          <div className="mt-7 max-w-2xl space-y-5 rounded-lg border border-line bg-paper p-4 sm:p-7">
            <h2 className="text-2xl">{step === 'delivery' ? 'Giao hàng và COD demo' : 'Kiểm tra đơn hàng demo'}</h2>
            {step === 'delivery' ? (
              <fieldset className="space-y-3 text-sm">
                <legend className="sr-only">Thông tin mẫu và phương thức thanh toán</legend>
                <label className="flex min-h-11 items-center gap-2">
                  <input type="checkbox" checked={useSample} onChange={(event) => setUseSample(event.target.checked)} className="accent-earth" />
                  Dùng thông tin giao hàng mẫu
                </label>
                {useSample && <p>Người nhận mẫu · Địa chỉ giao hàng mẫu, Đắk Lắk</p>}
                <label className="flex min-h-11 items-center gap-2">
                  <input type="radio" name="payment" checked={cod} onChange={() => setCod(true)} className="accent-earth" />
                  Thanh toán khi nhận hàng (COD mô phỏng)
                </label>
              </fieldset>
            ) : (
              <section className="space-y-3 text-sm" aria-label="Tóm tắt đặt hàng">
                <p>Người nhận mẫu · Địa chỉ giao hàng mẫu, Đắk Lắk</p>
                <p>Thanh toán khi nhận hàng (COD mô phỏng)</p>
                <ul className="divide-y divide-line border-y border-line">
                  {lines.map((slug) => (
                    <li key={slug} className="flex flex-wrap justify-between gap-2 py-2">
                      <span>{displayCart[slug]} × {products[slug].name}</span>
                      <strong>{money(products[slug].price * displayCart[slug]!)}</strong>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            <p className="font-semibold">Tổng tiền hàng demo: {money(cartTotal(displayCart))}</p>
            {reviewMessage && <p role="status" className="text-sm text-earth">{reviewMessage}</p>}
            <div className="flex flex-wrap items-center gap-2">
              {step === 'delivery'
                ? <button className="button" type="button" disabled={!useSample || !cod} onClick={() => {
                  setReviewedCart(cart);
                  setReviewMessage('');
                  setStep('review');
                }}>Kiểm tra lại</button>
                : <>
                  <button className="button" type="button" onClick={confirm}>Xác nhận đặt hàng demo</button>
                  <button className="button-secondary" type="button" onClick={() => setStep('delivery')}>Quay lại</button>
                </>}
              <Link href="/gio-hang/" className="button-secondary">Hủy và về giỏ hàng</Link>
            </div>
          </div>
        )}
    </main>
  );
}
