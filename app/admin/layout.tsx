import Image from 'next/image';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[var(--bit-paper)]">
      <aside className="relative w-64 flex-shrink-0 bg-[var(--bit-forest)] text-white">
        <div className="border-b border-white/10 p-5">
          <div className="flex items-center gap-3">
            <Image
              src="/images/bit-badge.png"
              alt="北京理工大学校徽"
              width={40}
              height={40}
              unoptimized
              className="h-10 w-10 flex-shrink-0"
            />
            <div>
              <h2 className="text-sm font-bold leading-tight">BIT 新加坡校友会</h2>
              <p className="mt-0.5 text-xs text-white/65">管理后台</p>
            </div>
          </div>
        </div>

        <nav className="space-y-1 p-4">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors hover:bg-white/10"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            数据概览
          </Link>
          <Link
            href="/admin/alumni"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors hover:bg-white/10"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            校友名册
          </Link>
          <Link
            href="/admin/finance"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors hover:bg-white/10"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            财务管理
          </Link>
        </nav>

        <div className="absolute bottom-0 left-0 w-64 border-t border-white/10 p-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            返回官网首页
          </Link>
        </div>
      </aside>

      <main className="flex-1 overflow-auto p-8">{children}</main>
    </div>
  );
}
