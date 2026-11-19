import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '@fontsource-variable/lora';
import '@fontsource/be-vietnam-pro/400.css';
import '@fontsource/be-vietnam-pro/500.css';
import '@fontsource/be-vietnam-pro/600.css';
import '@fontsource/be-vietnam-pro/700.css';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Dấu Bản', template: '%s | Dấu Bản' },
  description: 'Hộp quà đặc sản mang bản sắc Đắk Lắk. Website mô phỏng của dự án Dấu Bản.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="vi"><body>{children}</body></html>;
}
