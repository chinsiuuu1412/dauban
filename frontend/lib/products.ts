export const slugs = ['hop-qua', 'ca-phe', 'hat-dieu', 'mac-ca'] as const;
export type Slug = typeof slugs[number];

type Product = {
  name: string;
  image: string;
  price: number;
  description: string;
  kind: string;
  ingredients: string;
  packaging: string;
  weight: string | null;
};

export const products = {
  'hop-qua': {
    name: 'Hộp quà Dấu Bản',
    image: 'hop-qua.jpg',
    price: 690_000,
    description: 'Hộp quà đặc sản mang bản sắc Đắk Lắk, kết hợp nông sản địa phương và văn hóa Ê Đê. Bên trong là cà phê, hạt điều và mắc ca, ba sản vật kể câu chuyện về vùng đất và con người.',
    kind: 'Set quà ba món',
    ingredients: 'Cà phê 150 g, hạt điều 150 g, mắc ca 150 g',
    packaging: 'Hộp quà',
    weight: null,
  },
  'ca-phe': {
    name: 'Cà phê Đắk Lắk',
    image: 'ca-phe.jpg',
    price: 250_000,
    description: 'Cà phê là sản phẩm trung tâm của Dấu Bản và là một trong những sản vật tạo nên dấu ấn rõ nét của Đắk Lắk.',
    kind: 'Cà phê Đắk Lắk',
    ingredients: 'Cà phê 150 g',
    packaging: 'Túi',
    weight: '150 g',
  },
  'hat-dieu': {
    name: 'Hạt điều Đắk Lắk',
    image: 'hat-dieu.jpg',
    price: 250_000,
    description: 'Hạt điều Đắk Lắk có vị bùi, béo tự nhiên, thơm nhẹ, ngọt hậu và giòn. Có thể thưởng thức trực tiếp như một món ăn nhẹ.',
    kind: 'Hạt điều Đắk Lắk',
    ingredients: 'Hạt điều 150 g',
    packaging: 'Túi',
    weight: '150 g',
  },
  'mac-ca': {
    name: 'Mắc ca Đắk Lắk',
    image: 'mac-ca.jpg',
    price: 250_000,
    description: 'Mắc ca đại diện cho sự vun bồi trong câu chuyện Dấu Bản. Vị béo, bùi và thanh của hạt cân bằng vị đậm của cà phê.',
    kind: 'Hạt Mắc ca',
    ingredients: 'Hạt mắc ca 150 g',
    packaging: 'Túi',
    weight: '150 g',
  },
} satisfies Record<Slug, Product>;

export const productDetails = {
  province: 'Đắk Lắk',
  shelfLife: 'Một năm kể từ ngày sản xuất',
  storageGuidance: [
    'Trước khi mở, bảo quản nơi khô ráo, sạch sẽ, tránh ánh sáng trực tiếp, nhiệt độ cao và độ ẩm.',
    'Sau khi mở, đóng kín bao bì sau mỗi lần sử dụng và hạn chế tiếp xúc lâu với không khí, độ ẩm.',
    'Với từng sản phẩm, ưu tiên hướng dẫn trên bao bì và khuyến cáo của đơn vị sản xuất.',
  ],
} as const;

export function isSlug(value: string): value is Slug {
  return Object.hasOwn(products, value);
}

export const demoLots = [
  { slug: 'hop-qua', code: 'DB-DEMO-001', gtin: 'DEMO-GTIN-001', lot: 'DEMO-LO-001' },
  { slug: 'ca-phe', code: 'DB-DEMO-002', gtin: 'DEMO-GTIN-002', lot: 'DEMO-LO-002' },
  { slug: 'hat-dieu', code: 'DB-DEMO-003', gtin: 'DEMO-GTIN-003', lot: 'DEMO-LO-003' },
  { slug: 'mac-ca', code: 'DB-DEMO-004', gtin: 'DEMO-GTIN-004', lot: 'DEMO-LO-004' },
] as const satisfies readonly { slug: Slug; code: string; gtin: string; lot: string }[];
