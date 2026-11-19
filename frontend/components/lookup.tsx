'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState, type FormEvent } from 'react';
import { demoLots, isSlug, products, type Slug } from '../lib/products';
import { lookup, qrProduct } from '../lib/shop';
import { detail, photo, publishedSite } from '../lib/site';
import { Modal } from './modal';
import { Scanner } from './scanner';

const messages = {
  empty: 'Bạn chưa nhập mã, xin vui lòng nhập mã.',
  incomplete: 'Vui lòng nhập đủ mã GTIN và số lô đóng gói.',
  missing: 'Bạn đã nhập sai mã hoặc cặp GTIN và số lô.',
};

const example = demoLots[0];

export function Lookup() {
  const [mode, setMode] = useState<'code' | 'lot'>('code');
  const [error, setError] = useState('');
  const [preview, setPreview] = useState<Slug | null>(null);
  const [scanning, setScanning] = useState(false);
  const closeScanner = useCallback(() => setScanning(false), []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const result = lookup(mode, String(fields.get('code') ?? ''), String(fields.get('lot') ?? ''));
    if (isSlug(result)) { setError(''); setPreview(result); }
    else setError(messages[result]);
  }

  const scanned = useCallback((value: string) => {
    closeScanner();
    const slug = publishedSite ? qrProduct(value, publishedSite) : null;
    if (slug) setPreview(slug);
    else setError(publishedSite ? 'Không tồn tại sản phẩm này trong Dấu Bản.' : 'QR Pages chưa được cấu hình. Vui lòng nhập mã demo.');
  }, [closeScanner]);

  return (
    <section id="tra-cuu" className="my-8 scroll-mt-5 rounded-lg border border-line bg-paper p-4 sm:p-7" aria-labelledby="lookup-heading">
      <h2 id="lookup-heading" className="text-2xl sm:text-3xl">Tra cứu nguồn gốc</h2>
      <fieldset className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <legend className="sr-only">Cách tra cứu</legend>
        {([{ id: 'code', label: 'Mã truy xuất nguồn gốc' }, { id: 'lot', label: 'Mã GTIN và số lô đóng gói' }] as const).map((option) => (
          <label key={option.id} className="flex min-h-9 cursor-pointer items-center gap-2">
            <input type="radio" name="lookup-mode" checked={mode === option.id}
              onChange={() => { setMode(option.id); setError(''); }} className="accent-earth" /> {option.label}
          </label>
        ))}
      </fieldset>
      <form key={mode} onSubmit={submit} className="mt-2 flex flex-wrap gap-2">
        <button type="button" className="button-secondary" onClick={() => { setError(''); setScanning(true); }}>Quét QR</button>
        <label className="sr-only" htmlFor="lookup-code">{mode === 'code' ? 'Mã truy xuất nguồn gốc' : 'Mã GTIN'}</label>
        <input id="lookup-code" name="code" className="field min-w-40 flex-1" placeholder={mode === 'code' ? example.code : example.gtin} autoComplete="off" />
        {mode === 'lot' && <>
          <label className="sr-only" htmlFor="lookup-lot">Số lô đóng gói</label>
          <input id="lookup-lot" name="lot" className="field min-w-40 flex-1" placeholder={example.lot} autoComplete="off" />
        </>}
        <button type="submit" className="button">Tra cứu</button>
      </form>
      <p className="mt-3 text-xs">Mã demo: {example.code} hoặc {example.gtin} / {example.lot}</p>
      <p className="mt-2 text-sm font-medium text-earth" role="status">{error}</p>
      {scanning && <Scanner onResult={scanned} onClose={closeScanner} />}
      {preview && (
        <Modal title={products[preview].name} onClose={() => setPreview(null)}>
          <div className="relative aspect-video rounded-md bg-cream">
            <Image src={photo(preview)} alt={products[preview].name} fill sizes="400px" className="object-contain" />
          </div>
          <p className="mt-4 text-sm leading-relaxed">{products[preview].description}</p>
          <Link className="button mt-4" href={detail(preview)}>Xem chi tiết</Link>
        </Modal>
      )}
    </section>
  );
}
