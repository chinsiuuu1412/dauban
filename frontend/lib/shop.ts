import { demoLots, isSlug, products, slugs, type Slug } from './products.ts';

export type Cart = Partial<Record<Slug, number>>;
export type LookupResult = Slug | 'empty' | 'incomplete' | 'missing';

export function lookup(mode: 'code' | 'lot', value: string, lot = ''): LookupResult {
  const code = value.trim();
  const batch = lot.trim();
  if (!code && (mode === 'code' || !batch)) return 'empty';
  if (mode === 'lot' && (!code || !batch)) return 'incomplete';

  const record = demoLots.find((item) => mode === 'code'
    ? item.code === code
    : item.gtin === code && item.lot === batch);
  return record?.slug ?? 'missing';
}

export function qrProduct(value: string, site: string): Slug | null {
  try {
    const expected = new URL(site);
    const scanned = new URL(value.trim());
    if (expected.protocol !== 'https:' || scanned.origin !== expected.origin ||
        scanned.username || scanned.password || scanned.search || scanned.hash) return null;
    const root = expected.pathname.replace(/\/$/, '');
    return slugs.find((slug) => scanned.pathname === `${root}/san-pham/${slug}/`) ?? null;
  } catch {
    return null;
  }
}

export function cartTotal(cart: Cart): number {
  return slugs.reduce((total, slug) => total + products[slug].price * (cart[slug] ?? 0), 0);
}

export function setQuantity(cart: Cart, slug: Slug, quantity: number): Cart {
  if (!Number.isSafeInteger(quantity) || quantity < 0 || !Number.isSafeInteger(quantity * products[slug].price)) return cart;
  const updated = { ...cart };
  if (quantity === 0) delete updated[slug];
  else updated[slug] = quantity;
  return Number.isSafeInteger(cartTotal(updated)) ? updated : cart;
}

export function addQuantity(cart: Cart, slug: Slug, quantity: number): Cart {
  if (!Number.isSafeInteger(quantity) || quantity < 1) return cart;
  return setQuantity(cart, slug, (cart[slug] ?? 0) + quantity);
}

export function confirmCod(current: Cart, reviewed: Cart): Cart | null {
  if (!slugs.some((slug) => (current[slug] ?? 0) > 0)) return null;
  if (slugs.some((slug) => current[slug] !== reviewed[slug])) return null;
  return {};
}

export function readCart(raw: string | null): Cart {
  try {
    const stored: unknown = JSON.parse(raw ?? '{}');
    if (!stored || typeof stored !== 'object' || Array.isArray(stored)) return {};
    let cart: Cart = {};
    for (const [slug, quantity] of Object.entries(stored)) {
      if (isSlug(slug) && typeof quantity === 'number' && quantity > 0) {
        cart = setQuantity(cart, slug, quantity);
      }
    }
    return cart;
  } catch {
    return {};
  }
}
