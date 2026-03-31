import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ========== 顶部导航栏 ========== */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/bit-badge.png"
              alt="北京理工大学校徽"
              className="w-10 h-10"
            />
            <span className="text-[#1B5E20] font-bold text-sm md:text-base">
              北京理工大学新加坡校友会
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-600 text-sm hover:text-[#1B5E20] transition-colors">关于我们</a>
            <a href="#motto" className="text-gray-600 text-sm hover:text-[#1B5E20] transition-colors">校训精神</a>
            <a href="#events" className="text-gray-600 text-sm hover:text-[#1B5E20] transition-colors">近期活动</a>
            <a href="#contact" className="text-gray-600 text-sm hover:text-[#1B5E20] transition-colors">联系方式</a>
          </nav>
        </div>
      </header>

      {/* ========== Hero 区域 ========== */}
      <section className="relative pt-16 min-h-[92vh] flex items-center bg-white overflow-hidden">
        {/* 背景：大面积白底 + 微妙的绿色氛围 */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1B5E20]/[0.03] rounded-full -translate-y-1/3 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C62828]/[0.02] rounded-full translate-y-1/3 -translate-x-1/4" />
          {/* 极细网格 */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(27,94,32,0.03) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-16 w-full">
          <div className="flex flex-col items-center text-center">
            {/* 横版 LOGO */}
            <img
              src="/images/bit-logo.png"
              alt="北京理工大学"
              className="h-20 md:h-24 mb-10 object-contain"
            />

            {/* 圆形校徽 */}
            <div className="relative mb-10">
              <div className="absolute -inset-4 rounded-full bg-[#1B5E20]/5" />
              <img
                src="/images/bit-badge.png"
                alt="北京理工大学校徽"
                className="relative w-36 h-36 md:w-44 md:h-44"
              />
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-[#1B5E20] mb-3 tracking-tight">
              新加坡校友会
            </h1>
            <p className="text-base md:text-lg text-gray-400 mb-10 tracking-wide">
              BIT Singapore Alumni Association
            </p>

            {/* 校训 */}
            <div id="motto" className="mb-10">
              <div className="border-2 border-[#1B5E20]/20 rounded-2xl px-10 py-6 bg-[#1B5E20]/[0.02]">
                <p className="text-2xl md:text-3xl font-bold text-[#C62828] tracking-[0.25em]">
                  德以明理 &nbsp; 学以精工
                </p>
                <p className="text-sm text-gray-400 mt-2 tracking-wider">
                  Virtue for Understanding Principles, Learning for Excellent Engineering
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-base max-w-lg leading-relaxed mb-12">
              汇聚狮城北理人，传承延安精神，共创美好未来
            </p>

            {/* 三个指标 */}
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C62828]">1940</div>
                <div className="text-xs text-gray-400 mt-1">创校年份</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1B5E20]">985</div>
                <div className="text-xs text-gray-400 mt-1">双一流高校</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8B4513]">SG</div>
                <div className="text-xs text-gray-400 mt-1">狮城分会</div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部绿色渐变过渡 */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1B5E20] via-[#C62828] to-[#1B5E20]" />
      </section>

      {/* ========== 关于我们 ========== */}
      <section id="about" className="py-24 bg-[#FAFDF7]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#1B5E20] uppercase tracking-widest mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">关于校友会</h2>
            <div className="mt-4 mx-auto w-12 h-1 bg-[#1B5E20] rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">
                北京理工大学新加坡校友会（BIT Singapore Alumni Association）是由在新加坡工作、生活、求学的北京理工大学校友自愿组成的非营利社团组织。
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                校友会致力于促进在新校友之间的联络与交流，增进友谊与合作，为校友在新加坡的事业发展和生活提供互助平台，同时积极推动母校与新加坡各界的学术与产业合作。
              </p>
              <p className="text-gray-600 leading-relaxed">
                我们定期组织学术讲座、文体活动、节日聚会和职业发展论坛等丰富多彩的活动，凝聚北理力量，服务狮城校友。
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 text-center border border-[#1B5E20]/10 shadow-sm">
                <div className="text-3xl font-bold text-[#1B5E20]">1940</div>
                <div className="text-sm text-gray-500 mt-1">母校创建年份</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center border border-[#C62828]/10 shadow-sm">
                <div className="text-3xl font-bold text-[#C62828]">延安</div>
                <div className="text-sm text-gray-500 mt-1">红色基因传承</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center border border-[#8B4513]/10 shadow-sm">
                <div className="text-3xl font-bold text-[#8B4513]">985</div>
                <div className="text-sm text-gray-500 mt-1">双一流高校</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center border border-[#1B5E20]/10 shadow-sm">
                <img src="/images/bit-badge.png" alt="BIT" className="w-10 h-10 mx-auto mb-1" />
                <div className="text-sm text-gray-500">狮城分会</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 近期活动预告 ========== */}
      <section id="events" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#1B5E20] uppercase tracking-widest mb-3">Upcoming Events</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">近期活动预告</h2>
            <div className="mt-4 mx-auto w-12 h-1 bg-[#C62828] rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* 活动卡片 1 - 绿色 */}
            <div className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
              <div className="h-1.5 bg-[#1B5E20]" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-[#1B5E20] font-medium mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  2026年4月 · 新加坡
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">2026 春季校友聚会</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  一年一度的春季大聚会，叙旧情、话发展。欢迎所有在新北理校友携家属参加。
                </p>
              </div>
            </div>

            {/* 活动卡片 2 - 红色 */}
            <div className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
              <div className="h-1.5 bg-[#C62828]" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-[#C62828] font-medium mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  2026年5月 · 线上
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI 前沿技术讲座</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  邀请在新校友中的行业专家分享人工智能与半导体领域的前沿发展与职业机遇。
                </p>
              </div>
            </div>

            {/* 活动卡片 3 - 棕色 */}
            <div className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
              <div className="h-1.5 bg-[#8B4513]" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-[#8B4513] font-medium mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  2026年6月 · 端午节
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">端午龙舟观赛 & 聚餐</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  组织校友共同观看新加坡河上龙舟赛，赛后品尝地道家乡粽子，共度佳节。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 联系方式 ========== */}
      <section id="contact" className="py-24 bg-[#1B5E20] relative overflow-hidden">
        {/* 背景纹理 */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />

        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <img
            src="/images/bit-badge.png"
            alt="BIT"
            className="w-16 h-16 mx-auto mb-6 opacity-60 brightness-200"
          />
          <p className="text-sm font-medium text-white/60 uppercase tracking-widest mb-3">Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">联系我们</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-10">
            如果您是北京理工大学校友，正在新加坡或即将前往新加坡，欢迎与我们联系，加入校友会大家庭。
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="bg-white/10 border border-white/20 rounded-xl px-8 py-5 text-white backdrop-blur-sm hover:bg-white/15 transition-colors">
              <div className="text-sm text-white/60 mb-1">电子邮箱</div>
              <div className="font-medium">alumni-sg@bit.edu.cn</div>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl px-8 py-5 text-white backdrop-blur-sm hover:bg-white/15 transition-colors">
              <div className="text-sm text-white/60 mb-1">微信公众号</div>
              <div className="font-medium">BIT新加坡校友会</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 页脚 ========== */}
      <footer className="bg-[#14472A] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/images/bit-badge.png" alt="BIT" className="w-7 h-7 opacity-50" />
              <p className="text-sm text-white/40">
                &copy; {new Date().getFullYear()} 北京理工大学新加坡校友会. All rights reserved.
              </p>
            </div>
            <Link href="/admin/dashboard" className="text-sm text-white/25 hover:text-white/50 transition-colors">
              管理后台
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
