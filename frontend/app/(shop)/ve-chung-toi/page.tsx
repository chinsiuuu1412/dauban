import Image from 'next/image';
import { photo } from '../../../lib/site';

export const metadata = { title: 'Về chúng tôi' };

export default function About() {
  return (
    <main className="frame pt-10 sm:pt-16">
      <h1 className="page-title">Câu chuyện Dấu Bản</h1>
      <div className="mt-8 grid items-start gap-8 md:grid-cols-[1.25fr_1fr]">
        <div className="space-y-8 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-2xl">Ý tưởng và câu chuyện sản phẩm</h2>
            <p>Dấu Bản là hộp quà đặc sản mang bản sắc Đắk Lắk, được xây dựng từ sự kết hợp giữa nông sản địa phương và văn hóa Ê Đê.</p>
            <p>“Dấu” là dấu ấn, ký ức và câu chuyện. “Bản” gợi đến không gian bản làng, nơi con người gắn bó với đất đai, lao động và những giá trị văn hóa được truyền lại qua nhiều thế hệ.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-2xl">Hương của đất, vị của quả, tình của người</h2>
            <p>Cà phê đại diện cho hương và dấu ấn đầu tiên của vùng đất. Mắc ca mang vị béo, bùi và thanh. Hạt điều gợi sự gần gũi, mộc mạc và sẻ chia.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-2xl">Câu chuyện trong bao bì</h2>
            <p>Hình ảnh đan lát và họa tiết thổ cẩm dẫn từ vỏ hộp đến ba sản vật của Đắk Lắk. Thẻ câu chuyện giúp người nhận tìm hiểu ý nghĩa của từng món.</p>
          </section>
        </div>
        <figure>
          <div className="relative aspect-[2/1] overflow-hidden rounded-md">
            <Image src={photo('nong-dan')} alt="Người nông dân hái cà phê" fill sizes="(max-width: 768px) 100vw, 520px" className="object-cover" />
          </div>
          <figcaption className="mt-2 text-xs">Ảnh minh họa thu hoạch cà phê.</figcaption>
        </figure>
      </div>
    </main>
  );
}
