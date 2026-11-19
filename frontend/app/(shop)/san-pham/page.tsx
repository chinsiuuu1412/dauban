import { ProductRow } from '../../../components/product-row';
import { slugs } from '../../../lib/products';

export const metadata = { title: 'Danh mục' };

export default function Catalog() {
  return (
    <main className="frame pt-9 sm:pt-14">
      <h1 className="page-title border-b border-line pb-5">Danh mục sản phẩm</h1>
      {slugs.map((slug) => <ProductRow key={slug} slug={slug} />)}
    </main>
  );
}
