import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import QRCode from 'qrcode';
import { AddToCart } from '../../../../components/cart';
import { ProductTabs } from '../../../../components/product-tabs';
import { isSlug, productDetails, products, slugs } from '../../../../lib/products';
import { qrProduct } from '../../../../lib/shop';
import { detail, money, photo, publishedSite } from '../../../../lib/site';

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isSlug(slug)) notFound();
  return { title: products[slug].name, description: products[slug].description };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  if (!isSlug(slug)) notFound();
  const product = products[slug];
  const url = publishedSite ? publishedSite.replace(/\/$/, '') + detail(slug) : '';
  const qr = publishedSite && qrProduct(url, publishedSite) === slug
    ? await QRCode.toDataURL(url, { width: 200, margin: 3, errorCorrectionLevel: 'M' })
    : null;

  return (
    <main className="frame pt-8 sm:pt-14">
      <Link href="/san-pham/" className="text-link text-sm">Danh mục sản phẩm</Link>
      <div className="mt-5 grid items-start gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-paper">
            <Image src={photo(slug)} alt={product.name} fill sizes="(max-width: 768px) 100vw, 550px" className="object-contain" preload />
          </div>
          <figure className="mt-5 text-sm">
            {qr ? (
              <>
                <a href={url} aria-label={'Mở URL QR của ' + product.name} className="inline-block">
                  <Image src={qr} alt={'Mã QR demo của ' + product.name} width={200} height={200} />
                </a>
                <figcaption className="mt-2">Quét QR demo để mở trang chi tiết sản phẩm.</figcaption>
              </>
            ) : <figcaption>Mã QR demo sẽ có khi URL GitHub Pages được xác minh.</figcaption>}
          </figure>
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold text-earth">{productDetails.province} · Sản phẩm demo</p>
          <h1 className="page-title">{product.name}</h1>
          <p className="mt-4 leading-relaxed">{product.description}</p>
          {slug === 'hop-qua' && <Link href="/ve-chung-toi/" className="text-link mt-3 inline-block text-sm">Đọc câu chuyện Dấu Bản</Link>}
          <p className="mt-4 font-semibold text-earth">{money(product.price)}</p>
          <AddToCart slug={slug} />
          <ProductTabs slug={slug} />
        </div>
      </div>
    </main>
  );
}
