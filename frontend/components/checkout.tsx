'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState, type FormEvent } from 'react';
import { products, slugs } from '../lib/products';
import { cartTotal, validateDelivery, type Delivery } from '../lib/shop';
import { money } from '../lib/site';
import { useCart } from './cart';

const deliveryFields = [
  { key: 'name', label: 'Họ và tên', type: 'text' },
  { key: 'phone', label: 'Số điện thoại', type: 'tel' },
  { key: 'address', label: 'Địa chỉ giao hàng', type: 'text' },
] as const;

export function Checkout() {
  const { cart, ready, complete } = useCart();
  const router = useRouter();
  const [step, setStep] = useState<'delivery' | 'review' | 'done'>('delivery');
  const [delivery, setDelivery] = useState<Delivery>({ name: '', phone: '', address: '', note: '' });
  const [attempted, setAttempted] = useState(false);
  const [reviewedCart, setReviewedCart] = useState(cart);
  const [reviewMessage, setReviewMessage] = useState('');
  const confirmed = useRef(false);
  const displayCart = step === 'review' ? reviewedCart : cart;
  const lines = slugs.filter((slug) => displayCart[slug]);
  const { values, missing } = validateDelivery(delivery);

  function review(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step !== 'delivery' || !lines.length) return;
    setAttempted(true);
    if (missing.length) {
      document.getElementById('delivery-' + missing[0])?.focus();
      return;
    }
    setReviewedCart(cart);
    setReviewMessage('');
    setStep('review');
  }

  function confirm() {
    if (confirmed.current || step !== 'review' || missing.length || !lines.length) return;
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
          <form onSubmit={review} noValidate autoComplete="off" className="mt-7 max-w-2xl space-y-5 rounded-lg border border-line bg-paper p-4 sm:p-7">
            <h2 className="text-2xl">{step === 'delivery' ? 'Thông tin giao hàng' : 'Kiểm tra đơn hàng mô phỏng'}</h2>
            {step === 'delivery' ? (
              <fieldset className="space-y-3 text-sm">
                <legend className="mb-4">Vui lòng dùng thông tin giả để thử đặt hàng.</legend>
                {deliveryFields.map(({ key, label, type }) => {
                  const id = 'delivery-' + key;
                  const invalid = attempted && missing.includes(key);
                  return (
                    <div key={key}>
                      <label htmlFor={id} className="mb-1 block font-medium">{label}</label>
                      <input id={id} type={type} required className="field w-full aria-invalid:border-earth"
                        aria-invalid={invalid || undefined} aria-describedby={invalid ? id + '-error' : undefined}
                        value={delivery[key]} onChange={(event) => setDelivery({ ...delivery, [key]: event.target.value })} />
                      {invalid && <p id={id + '-error'} className="mt-1 text-earth">Vui lòng nhập {label.toLowerCase()}.</p>}
                    </div>
                  );
                })}
                <label htmlFor="delivery-note" className="block font-medium">
                  Ghi chú <span className="font-normal">(tùy chọn)</span>
                </label>
                <textarea id="delivery-note" className="field w-full" rows={3} value={delivery.note}
                  onChange={(event) => setDelivery({ ...delivery, note: event.target.value })} />
                <p>Thanh toán khi nhận hàng (COD mô phỏng)</p>
              </fieldset>
            ) : (
              <section className="space-y-3 text-sm" aria-label="Tóm tắt đặt hàng">
                <dl className="space-y-2">
                  {deliveryFields.map(({ key, label }) => (
                    <div key={key}><dt className="font-semibold">{label}</dt><dd className="wrap-anywhere">{values[key]}</dd></div>
                  ))}
                  {values.note && <div><dt className="font-semibold">Ghi chú</dt><dd className="whitespace-pre-wrap wrap-anywhere">{values.note}</dd></div>}
                </dl>
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
            <p className="font-semibold">Tổng tiền hàng: {money(cartTotal(displayCart))}</p>
            {reviewMessage && <p role="status" className="text-sm text-earth">{reviewMessage}</p>}
            <div className="flex flex-wrap items-center gap-2">
              {step === 'delivery'
                ? <button className="button" type="submit">Kiểm tra lại</button>
                : <>
                  <button className="button" type="button" onClick={confirm}>Xác nhận đặt hàng demo</button>
                  <button className="button-secondary" type="button" onClick={() => setStep('delivery')}>Sửa thông tin</button>
                </>}
              <Link href="/gio-hang/" className="button-secondary">Hủy và về giỏ hàng</Link>
            </div>
          </form>
        )}
    </main>
  );
}
