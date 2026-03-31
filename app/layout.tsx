import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://extraordinary-paprenjak-f72840.netlify.app'),
  title: '北京理工大学新加坡校友会 | BIT Singapore Alumni Association',
  description:
    '北京理工大学新加坡校友会官方网站，提供校友会定位介绍、活动计划、校友登记入口与后台运营能力。',
  keywords: ['北京理工大学', 'BIT', '新加坡校友会', 'BIT Singapore Alumni', '校友登记'],
  openGraph: {
    title: '北京理工大学新加坡校友会',
    description: '面向学校可交付、面向校友可使用的新加坡校友会官方网站。',
    url: 'https://extraordinary-paprenjak-f72840.netlify.app',
    siteName: 'BIT Singapore Alumni Association',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
