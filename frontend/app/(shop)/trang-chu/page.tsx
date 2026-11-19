import { Lookup } from '../../../components/lookup';
import { ProductRow } from '../../../components/product-row';
import { OrderNotice } from '../../../components/order-notice';
import { slugs } from '../../../lib/products';

export const metadata = { title: 'Trang chủ' };

export default function Home() {
  return (
    <main className="frame pt-5 sm:pt-10">
      <h1 className="sr-only">Trang chủ Dấu Bản</h1>
      <OrderNotice />
      <ProductRow slug="hop-qua" featured />
      <Lookup />
      <section aria-labelledby="products-heading">
        <h2 id="products-heading" className="border-b border-line pb-3 text-3xl sm:text-4xl">Ba sản vật Đắk Lắk</h2>
        {slugs.slice(1).map((slug) => <ProductRow key={slug} slug={slug} />)}
      </section>
    </main>
  );
}
