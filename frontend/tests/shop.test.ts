import assert from 'node:assert/strict';
import test from 'node:test';
import { demoLots, products, slugs } from '../lib/products.ts';
import { addQuantity, cartTotal, confirmCod, readCart, setQuantity, lookup, qrProduct } from '../lib/shop.ts';

test('danh mục ghép ảnh và giá demo theo slug, để trống khối lượng tịnh của hộp', () => {
  assert.deepEqual(slugs.map((slug) => [slug, products[slug].image, products[slug].price]), [
    ['hop-qua', 'hop-qua.jpg', 690_000],
    ['ca-phe', 'ca-phe.jpg', 250_000],
    ['hat-dieu', 'hat-dieu.jpg', 250_000],
    ['mac-ca', 'mac-ca.jpg', 250_000],
  ]);
  assert.equal(products['hop-qua'].weight, null);
  assert.equal(products['hop-qua'].ingredients, 'Cà phê 150 g, hạt điều 150 g, mắc ca 150 g');
});

test('tra mã có khoảng trắng và tra đúng cặp GTIN–lô', () => {
  assert.equal(lookup('code', ' DB-DEMO-001 '), 'hop-qua');
  assert.equal(lookup('lot', ' DEMO-GTIN-003 ', ' DEMO-LO-003 '), 'hat-dieu');
});

test('mỗi bản ghi demo giữ nguyên mã chuỗi và trỏ về đúng sản phẩm', () => {
  assert.deepEqual(demoLots.map(({ slug }) => slug), slugs);
  for (const [index, { slug, code, gtin, lot }] of demoLots.entries()) {
    const suffix = '00' + (index + 1);
    assert.equal(code, 'DB-DEMO-' + suffix);
    assert.equal(gtin, 'DEMO-GTIN-' + suffix);
    assert.equal(lot, 'DEMO-LO-' + suffix);
    assert.equal(lookup('code', code), slug);
    assert.equal(lookup('lot', gtin, lot), slug);
  }
});

test('phân biệt mã trống, cặp thiếu, mã sai và cặp chéo', () => {
  assert.equal(lookup('code', ' '), 'empty');
  assert.equal(lookup('lot', 'DEMO-GTIN-001'), 'incomplete');
  assert.equal(lookup('lot', '', 'DEMO-LO-001'), 'incomplete');
  assert.equal(lookup('lot', '', ' '), 'empty');
  assert.equal(lookup('code', 'DEMO-001'), 'missing');
  assert.equal(lookup('lot', 'DEMO-GTIN-001', 'DEMO-LO-002'), 'missing');
});

test('QR chỉ chấp nhận đúng HTTPS, base path và slug', () => {
  const site = 'https://example.com/dauban/';
  assert.equal(qrProduct(`${site}san-pham/mac-ca/`, site), 'mac-ca');
  assert.equal(qrProduct('https://example.com/san-pham/hop-qua/', 'https://example.com'), 'hop-qua');
  for (const value of [
    'http://example.com/dauban/san-pham/mac-ca/',
    'https://example.org/dauban/san-pham/mac-ca/',
    'https://example.com/san-pham/mac-ca/',
    `${site}san-pham/khong-ton-tai/`,
    `${site}san-pham/mac-ca/?redirect=/`,
    `${site}san-pham/mac-ca/#other`,
    'https://user@example.com/dauban/san-pham/mac-ca/',
    '/dauban/san-pham/mac-ca/',
  ]) assert.equal(qrProduct(value, site), null);
});

test('giỏ cộng, đổi, xoá số lượng và tính tổng theo giá demo', () => {
  const cart = addQuantity({ 'hop-qua': 1 }, 'ca-phe', 2);
  assert.equal(cartTotal(cart), 1190000);
  assert.equal(addQuantity(cart, 'ca-phe', 1)['ca-phe'], 3);
  assert.equal(addQuantity(cart, 'ca-phe', 1.2), cart);
  assert.equal(addQuantity(cart, 'ca-phe', 0), cart);
  assert.equal(addQuantity(cart, 'ca-phe', Number.MAX_SAFE_INTEGER), cart);
  assert.equal(setQuantity(cart, 'ca-phe', -1), cart);
  assert.deepEqual(setQuantity(cart, 'ca-phe', 0), { 'hop-qua': 1 });
});

test('giỏ đọc lại bỏ dữ liệu lỗi, slug lạ, số lượng không hợp lệ', () => {
  assert.deepEqual(readCart('{'), {});
  assert.deepEqual(readCart('{"mac-ca":3,"ca-phe":-1,"hat-dieu":"2","other":5}'), { 'mac-ca': 3 });
});

test('COD chỉ xóa giỏ đã duyệt và không xác nhận lần hai', () => {
  const reviewed = { 'hop-qua': 1, 'ca-phe': 2 };
  const remaining = confirmCod({ ...reviewed }, reviewed);
  assert.ok(remaining);
  assert.deepEqual(remaining, {});
  assert.equal(confirmCod(remaining, reviewed), null);
  assert.deepEqual(reviewed, { 'hop-qua': 1, 'ca-phe': 2 });
});

test('COD từ chối giỏ trống hoặc giỏ đã đổi sau khi xem lại', () => {
  const reviewed = { 'ca-phe': 2 };
  const current = { 'ca-phe': 3 };
  assert.equal(confirmCod({}, {}), null);
  assert.equal(confirmCod(current, reviewed), null);
  assert.deepEqual(current, { 'ca-phe': 3 });
});
