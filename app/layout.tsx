import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '北京理工大学新加坡校友会 | BIT Singapore Alumni',
  description: '北京理工大学新加坡校友会官方网站 - 德以明理，学以精工',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
