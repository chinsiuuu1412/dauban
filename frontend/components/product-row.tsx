import Image from 'next/image';
import Link from 'next/link';
import { products, type Slug } from '../lib/products';
import { detail, money, photo } from '../lib/site';
import { AddToCart } from './cart';

export function ProductRow({ slug, featured = false }: { slug: Slug; featured?: boolean }) {
  const product = products[slug];
  return (
    <article id={slug} className="grid scroll-mt-6 grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] items-center gap-3 border-b border-line py-6 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] sm:gap-12 sm:py-9">
      <Link href={detail(slug)} aria-label={'Xem ' + product.name}
        className="relative block aspect-square overflow-hidden rounded-md bg-paper sm:aspect-[4/3]">
        <Image src={photo(slug)} alt={product.name} fill sizes="(max-width: 640px) 37vw, 500px"
          className="object-contain" preload={featured} />
      </Link>
      <div className="min-w-0">
        <h2 className={featured ? 'text-2xl leading-tight sm:text-5xl' : 'text-xl leading-tight sm:text-3xl'}>
          <Link href={detail(slug)} className="hover:text-earth">{product.name}</Link>
        </h2>
        <p className="mt-2 text-xs leading-relaxed sm:mt-4 sm:text-base">{product.description}</p>
        <p className="mt-2 font-semibold text-earth sm:text-lg">{money(product.price)} <span className="text-xs font-normal">· Giá demo</span></p>
        {featured && <Link href="/san-pham/#hop-qua" className="text-link mt-2 inline-flex text-sm">Xem hộp quà trong danh mục</Link>}
        <AddToCart slug={slug} />
      </div>
    </article>
  );
}
