import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ========== 顶部导航栏 ========== */}
      <header className="fixed top-0 w-full z-50 bg-[#003366]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#C4A35A] flex items-center justify-center text-[#003366] font-bold text-sm">
              BIT
            </div>
            <span className="text-white font-semibold text-sm md:text-base">
              北京理工大学新加坡校友会
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-white/80 text-sm hover:text-white transition-colors">关于我们</a>
            <a href="#motto" className="text-white/80 text-sm hover:text-white transition-colors">校训精神</a>
            <a href="#events" className="text-white/80 text-sm hover:text-white transition-colors">近期活动</a>
            <a href="#contact" className="text-white/80 text-sm hover:text-white transition-colors">联系方式</a>
          </nav>
        </div>
      </header>

      {/* ========== Hero 区域 ========== */}
      <section className="relative pt-16 min-h-[85vh] flex items-center bg-gradient-to-br from-[#003366] via-[#002244] to-[#001a33] overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#C4A35A]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#C4A35A]/5 rounded-full blur-3xl" />
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          {/* 校徽装饰 */}
          <div className="mb-8 inline-flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-2 border-[#C4A35A]/40 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-[#C4A35A]/10 flex items-center justify-center">
                <span className="text-[#C4A35A] text-2xl font-bold tracking-wider">BIT</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            北京理工大学
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A35A] font-semibold mb-6">
            新加坡校友会
          </h2>
          <p className="text-lg md:text-xl text-white/60 mb-4 font-light">
            Beijing Institute of Technology Singapore Alumni Association
          </p>

          {/* 校训 */}
          <div id="motto" className="mt-12 mb-12">
            <div className="inline-block border border-[#C4A35A]/30 rounded-lg px-8 py-4 bg-white/5 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl text-[#C4A35A] font-bold tracking-[0.3em]">
                德以明理 &nbsp; 学以精工
              </p>
              <p className="text-sm text-white/40 mt-2 tracking-wider">
                Virtue for Understanding Principles, Learning for Excellent Engineering
              </p>
            </div>
          </div>

          <p className="text-white/50 text-base max-w-2xl mx-auto leading-relaxed">
            汇聚狮城北理人，传承延安精神，共创美好未来
          </p>
        </div>

        {/* 底部渐变过渡 */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ========== 关于我们 ========== */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#C4A35A] uppercase tracking-widest mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366]">关于校友会</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
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
              <div className="bg-[#003366]/5 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#003366]">1940</div>
                <div className="text-sm text-gray-500 mt-1">母校创建年份</div>
              </div>
              <div className="bg-[#C4A35A]/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#C4A35A]">延安</div>
                <div className="text-sm text-gray-500 mt-1">红色基因传承</div>
              </div>
              <div className="bg-[#8B0000]/5 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#8B0000]">985</div>
                <div className="text-sm text-gray-500 mt-1">双一流高校</div>
              </div>
              <div className="bg-[#003366]/5 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#003366]">SG</div>
                <div className="text-sm text-gray-500 mt-1">狮城分会</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 近期活动预告 ========== */}
      <section id="events" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#C4A35A] uppercase tracking-widest mb-3">Upcoming Events</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366]">近期活动预告</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* 活动卡片 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-2 bg-[#003366]" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-[#C4A35A] font-medium mb-3">
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

            {/* 活动卡片 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-2 bg-[#C4A35A]" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-[#C4A35A] font-medium mb-3">
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

            {/* 活动卡片 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-2 bg-[#8B0000]" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-[#C4A35A] font-medium mb-3">
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
      <section id="contact" className="py-24 bg-[#003366]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-[#C4A35A] uppercase tracking-widest mb-3">Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">联系我们</h2>
          <p className="text-white/60 max-w-xl mx-auto mb-10">
            如果您是北京理工大学校友，正在新加坡或即将前往新加坡，欢迎与我们联系，加入校友会大家庭。
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="bg-white/10 rounded-xl px-8 py-4 text-white">
              <div className="text-sm text-white/50 mb-1">电子邮箱</div>
              <div className="font-medium">alumni-sg@bit.edu.cn</div>
            </div>
            <div className="bg-white/10 rounded-xl px-8 py-4 text-white">
              <div className="text-sm text-white/50 mb-1">微信公众号</div>
              <div className="font-medium">BIT新加坡校友会</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 页脚 ========== */}
      <footer className="bg-[#001a33] py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/30">
          <p>&copy; {new Date().getFullYear()} 北京理工大学新加坡校友会. All rights reserved.</p>
          <Link href="/admin/dashboard" className="mt-2 md:mt-0 hover:text-white/50 transition-colors">
            管理后台
          </Link>
        </div>
      </footer>
    </div>
  );
}
