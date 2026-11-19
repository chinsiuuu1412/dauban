'use client';

import { useRef, useState } from 'react';
import { journeyGroups } from '../lib/journey';
import { demoLots, productDetails, products, type Slug } from '../lib/products';

const tabs = ['Hành trình', 'Thông tin sản phẩm', 'Doanh nghiệp'] as const;

export function ProductTabs({ slug }: { slug: Slug }) {
  const [active, setActive] = useState(0);
  const elements = useRef<(HTMLButtonElement | null)[]>([]);
  const record = demoLots.find((lot) => lot.slug === slug);
  const product = products[slug];

  return (
    <div className="mt-8">
      <div role="tablist" aria-label="Thông tin chi tiết" className="flex flex-wrap gap-2 border-b border-line">
        {tabs.map((label, index) => (
          <button key={label} ref={(node) => { elements.current[index] = node; }} type="button" role="tab"
            id={'tab-' + index} aria-controls={'panel-' + index} aria-selected={active === index} tabIndex={active === index ? 0 : -1}
            className="min-h-11 border-b-2 border-transparent px-2 text-xs font-semibold aria-selected:border-earth aria-selected:text-earth sm:px-3 sm:text-sm"
            onClick={() => setActive(index)}
            onKeyDown={(event) => {
              let next = index;
              if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
              else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
              else if (event.key === 'Home') next = 0;
              else if (event.key === 'End') next = tabs.length - 1;
              else return;
              event.preventDefault();
              setActive(next);
              elements.current[next]?.focus();
            }}>{label}</button>
        ))}
      </div>
      <div id="panel-0" role="tabpanel" aria-labelledby="tab-0" hidden={active !== 0} className="pt-4">
        {journeyGroups.map((group) => (
          <details key={group.title} className="border-b border-line">
            <summary className="py-3 font-semibold">{group.title}</summary>
            <dl className="mb-3 space-y-3 text-sm">
              {group.fields.map((field) => (
                <div key={field}>
                  <dt>{field}</dt>
                  <dd className="text-earth">Doanh nghiệp chưa cung cấp thông tin</dd>
                </div>
              ))}
            </dl>
          </details>
        ))}
      </div>
      <div id="panel-1" role="tabpanel" aria-labelledby="tab-1" hidden={active !== 1} className="pt-4 text-sm leading-relaxed">
        <dl className="space-y-2">
          <div><dt className="font-semibold">Loại sản phẩm</dt><dd>{product.kind}</dd></div>
          <div><dt className="font-semibold">Đóng gói</dt><dd>{product.packaging}</dd></div>
          <div><dt className="font-semibold">Thành phần</dt><dd>{product.ingredients}</dd></div>
          <div><dt className="font-semibold">Khối lượng tịnh</dt><dd>{product.weight ?? 'Chưa xác nhận'}</dd></div>
          <div><dt className="font-semibold">Hạn sử dụng</dt><dd>{productDetails.shelfLife}</dd></div>
          <div><dt className="font-semibold">Hướng dẫn bảo quản</dt><dd><ul className="list-disc space-y-1 pl-5">{productDetails.storageGuidance.map((line) => <li key={line}>{line}</li>)}</ul></dd></div>
          {record && <div><dt className="font-semibold">Mã truy xuất và lô demo</dt><dd>{record.code} · {record.gtin} · {record.lot}</dd></div>}
        </dl>
      </div>
      <div id="panel-2" role="tabpanel" aria-labelledby="tab-2" hidden={active !== 2} className="pt-4 text-sm">
        Chưa có doanh nghiệp thật
      </div>
    </div>
  );
}
