import { products, type Slug } from './products';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export const publishedSite = process.env.NEXT_PUBLIC_SITE_URL;

export function photo(slug: Slug | 'nong-dan') {
  const filename = slug === 'nong-dan' ? 'nong-dan.jpg' : products[slug].image;
  return basePath + '/images/' + filename;
}

export function detail(slug: Slug) {
  return '/san-pham/' + slug + '/';
}

const currency = new Intl.NumberFormat('vi-VN');
export function money(value: number) {
  return currency.format(value) + ' đ';
}
