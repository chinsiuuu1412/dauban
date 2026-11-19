'use client';

import Link from 'next/link';
import { createContext, useContext, useSyncExternalStore, useState, type FormEvent } from 'react';
import { type Slug, products } from '../lib/products';
import { addQuantity, confirmCod, readCart, setQuantity, type Cart } from '../lib/shop';

const CartContext = createContext<{
  cart: Cart;
  ready: boolean;
  add: (slug: Slug, quantity: number) => boolean;
  replace: (slug: Slug, quantity: number) => boolean;
  complete: (reviewed: Cart) => boolean;
  orderComplete: boolean;
  dismissOrderNotice: () => void;
} | null>(null);

const key = 'dau-ban-cart';
const emptyCart: Cart = {};
const server = { cart: emptyCart, ready: false };
let snapshot = server;
let lastRaw: string | null = null;
const listeners = new Set<() => void>();
let useMemory = false;

function browserSnapshot() {
  if (useMemory) return snapshot;
  try {
    const raw = localStorage.getItem(key);
    if (!snapshot.ready || raw !== lastRaw) {
      lastRaw = raw;
      snapshot = { cart: readCart(raw), ready: true };
    }
  } catch {
    useMemory = true;
    snapshot = { cart: snapshot.cart, ready: true };
  }
  return snapshot;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key === key || event.key === null) listener();
  };
  window.addEventListener('storage', onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener('storage', onStorage);
  };
}

function save(cart: Cart) {
  const raw = JSON.stringify(cart);
  try {
    if (!useMemory) localStorage.setItem(key, raw);
  } catch {
    useMemory = true;
  }
  lastRaw = raw;
  snapshot = { cart, ready: true };
  listeners.forEach((listener) => listener());
}

export function CartProvider({children}: {children: React.ReactNode}) {
  const state = useSyncExternalStore(subscribe, browserSnapshot, () => server);
  const [orderComplete, setOrderComplete] = useState(false);
  return (
    <CartContext.Provider value={{
      ...state,
      add(slug, quantity) {
        const cart = browserSnapshot().cart;
        const updated = addQuantity(cart, slug, quantity);
        if (updated === cart) return false;
        save(updated);
        return true;
      },
      replace(slug, quantity) {
        const cart = browserSnapshot().cart;
        const updated = setQuantity(cart, slug, quantity);
        if (updated === cart) return false;
        save(updated);
        return true;
      },
      complete(reviewed) {
        const remaining = confirmCod(browserSnapshot().cart, reviewed);
        if (remaining === null) return false;
        save(remaining);
        setOrderComplete(true);
        return true;
      },
      orderComplete,
      dismissOrderNotice: () => setOrderComplete(false),
    }}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) throw new Error('CartProvider is required');
  return value;
}

export function AddToCart({ slug }: { slug: Slug }) {
  const { cart, add } = useCart();
  const [quantity, setQuantity] = useState('1');
  const [feedback, setFeedback] = useState<number | 'invalid' | null>(null);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const amount = Number(quantity);
    setFeedback(add(slug, amount) ? amount : 'invalid');
  }

  return (
    <form onSubmit={submit} className="mt-3">
      <p className="mb-2 text-xs">Trong giỏ: {cart[slug] ?? 0}</p>
      <label className="sr-only" htmlFor={'add-' + slug}>Số lượng muốn thêm cho {products[slug].name}</label>
      <div className="flex flex-wrap gap-2">
        <input id={'add-' + slug} className="field w-16" type="number" min={1} step={1} required value={quantity}
          onChange={(event) => { setQuantity(event.target.value); setFeedback(null); }} />
        <button className="button" type="submit">Thêm vào giỏ</button>
      </div>
      <div aria-live="polite" className="mt-2 text-xs leading-relaxed">
        {feedback === 'invalid' && 'Vui lòng nhập số nguyên dương hợp lệ.'}
        {typeof feedback === 'number' && <>Đã thêm {feedback} × {products[slug].name}. <Link className="text-link" href="/gio-hang/">Xem giỏ hàng</Link></>}
      </div>
    </form>
  );
}
