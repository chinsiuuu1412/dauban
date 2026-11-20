import Image from 'next/image';
import { products } from '../../../lib/products';
import { photo } from '../../../lib/site';

export const metadata = { title: 'Về chúng tôi' };

export default function About() {
  const gift = products['hop-qua'].name;
  return (
    <main className="frame pt-10 sm:pt-16">
      <h1 className="page-title">Câu chuyện Dấu Bản</h1>
      <div className="mt-8 grid items-start gap-8 md:grid-cols-[1.25fr_1fr]">
        <div className="space-y-8 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-2xl">Ý tưởng và câu chuyện sản phẩm</h2>
            <p>Dấu Bản là dự án kết hợp nông sản địa phương và văn hóa Ê Đê. Hộp quà {gift} gồm cà phê, mắc ca và hạt điều, được chọn để kể câu chuyện về vùng đất, con người và phương thức sản xuất gắn với địa phương.</p>
            <p>“Dấu” là dấu ấn, ký ức và câu chuyện. “Bản” gợi đến không gian bản làng, nơi con người gắn bó với đất đai, lao động và những giá trị văn hóa được truyền lại qua nhiều thế hệ.</p>
            <p>Khi mở hộp, người nhận đi từ hình ảnh đan lát và họa tiết thổ cẩm trên bao bì đến những sản vật đặc trưng của Đắk Lắk.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-2xl">Nguồn gốc và giá trị của ba nông sản</h2>
            <p>Ba món được chọn vì đặc trưng nông sản Đắk Lắk, giá trị sử dụng và khả năng kể câu chuyện về vùng đất.</p>
            <h3 className="text-xl">Cà phê Đắk Lắk</h3>
            <p>Cà phê là sản vật trung tâm của hộp quà, gợi nhớ không gian nông nghiệp và văn hóa Tây Nguyên.</p>
            <p>Nguồn cà phê của dự án được Tâm kết nối từ nguồn cung chính thống. Qua trải nghiệm thực tế và phản hồi trực tiếp từ khách hàng, sản phẩm được ghi nhận có hương thơm đặc trưng, lan tỏa rõ, vị cà phê đậm và nồng, hậu vị tương đối rõ nhưng không tạo cảm giác quá gắt khi sử dụng với lượng phù hợp. Một số khách hàng trải nghiệm cũng đánh giá cà phê có cảm giác “ít say” hơn so với một số loại cà phê họ từng sử dụng. Đây được xem là phản hồi từ trải nghiệm thực tế của khách hàng, không phải đặc tính y khoa của sản phẩm.</p>
            <p>Hương cà phê mở đầu trải nghiệm và tạo ấn tượng đầu tiên về vùng đất nơi nông sản được vun trồng.</p>
            <h3 className="text-xl">Mắc ca</h3>
            <p>Mắc ca có vị béo, bùi, thơm nhẹ, kết cấu giòn và hậu vị thanh. Vị nhẹ của hạt cân bằng vị sâu của cà phê, đồng thời gợi đến công vun trồng và chăm sóc qua thời gian.</p>
            <h3 className="text-xl">Hạt điều</h3>
            <p>Hạt điều có vị bùi, béo tự nhiên, thơm nhẹ, giòn và ngọt hậu. Có thể dùng trực tiếp như một món ăn nhẹ và dễ chia sẻ cùng gia đình, bạn bè hoặc đối tác.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-2xl">Hương của đất, vị của quả, tình của người</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong>Hương:</strong> Cà phê đậm và thơm tạo dấu ấn đầu tiên.</li>
              <li><strong>Vị:</strong> Mắc ca béo, bùi và thanh làm dịu vị đậm.</li>
              <li><strong>Tình:</strong> Hạt điều giòn, ngọt hậu và gợi sự sẻ chia.</li>
            </ul>
            <p>Trình tự hương vị đi từ đậm và thơm, qua béo và bùi, rồi đến giòn và hậu vị nhẹ. Đất tạo nên sản vật, con người vun trồng và gửi gắm thành quả lao động vào món quà.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-2xl">Ý tưởng và cấu trúc bao bì</h2>
            <p>Bên ngoài kể câu chuyện văn hóa, bên trong bảo vệ giá trị nông sản. Bốn lớp dùng chung một hệ thống hình ảnh với đan lát và họa tiết thổ cẩm.</p>
            <ol className="list-decimal space-y-1 pl-5">
              <li>Vỏ hộp.</li>
              <li>Lõi định hình.</li>
              <li>Bao bì từng sản phẩm.</li>
              <li>Thẻ câu chuyện và hướng dẫn sử dụng.</li>
            </ol>
            <h3 className="text-xl">Thẻ câu chuyện và hướng dẫn sử dụng</h3>
            <p>Mặt trước thẻ mang tên Dấu Bản và dòng “Hương của đất – Vị của quả – Tình của người”. Mặt sau giới thiệu ý nghĩa tên gọi, nét văn hóa Ê Đê, lý do chọn ba sản vật, cách thưởng thức và bảo quản, kèm mã QR để tìm hiểu về nguồn gốc sản phẩm.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-2xl">Năm bước trải nghiệm</h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li><strong>Nhìn thấy:</strong> Nhận ra nét Đắk Lắk, Ê Đê, đan lát và thổ cẩm qua bao bì.</li>
              <li><strong>Mở hộp:</strong> Thấy ba sản vật và đọc thẻ câu chuyện.</li>
              <li><strong>Khám phá:</strong> Tìm hiểu từng món qua bao bì riêng và thông tin nguồn gốc.</li>
              <li><strong>Thưởng thức:</strong> Cảm nhận hương cà phê, vị béo bùi của mắc ca, độ giòn và hậu vị của hạt điều.</li>
              <li><strong>Lưu giữ:</strong> Dùng lại vỏ hộp để đựng đồ hoặc trang trí.</li>
            </ol>
          </section>
          <section className="space-y-3">
            <h2 className="text-2xl">Thông điệp tổng thể</h2>
            <p>Hộp quà {gift} dẫn người nhận qua một hành trình từ nhìn thấy văn hóa, mở ra câu chuyện, khám phá nông sản và thưởng thức hương vị đến lưu giữ dấu ấn. Vỏ hộp gợi hình ảnh bản làng, thổ cẩm kể câu chuyện, còn lõi hộp kết nối ba sản vật của vùng đất.</p>
            <blockquote className="border-l-2 border-earth pl-4 font-serif text-xl">Dấu Bản – Từ đất, qua tay người, thành dấu nhớ.</blockquote>
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
