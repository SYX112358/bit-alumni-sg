import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ========== 顶部导航栏 ========== */}
      <header className="fixed top-0 w-full z-50 bg-[#003366]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/images/bit-emblem.svg"
              alt="BIT Logo"
              className="w-10 h-10 drop-shadow-sm group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm md:text-base leading-tight">
                北京理工大学新加坡校友会
              </span>
              <span className="text-[#C4A35A] text-[10px] md:text-xs leading-tight tracking-wider hidden sm:block">
                BIT SINGAPORE ALUMNI
              </span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-white/80 text-sm hover:text-[#C4A35A] transition-colors">关于我们</a>
            <a href="#motto" className="text-white/80 text-sm hover:text-[#C4A35A] transition-colors">校训精神</a>
            <a href="#events" className="text-white/80 text-sm hover:text-[#C4A35A] transition-colors">近期活动</a>
            <a href="#contact" className="text-white/80 text-sm hover:text-[#C4A35A] transition-colors">联系方式</a>
          </nav>
        </div>
      </header>

      {/* ========== Hero 区域 ========== */}
      <section className="relative pt-16 min-h-[90vh] flex items-center bg-gradient-to-br from-[#003366] via-[#002244] to-[#001a33] overflow-hidden">
        {/* 背景装饰 - 松树纹理灵感 */}
        <div className="absolute inset-0">
          {/* 金色光晕 */}
          <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#C4A35A]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-[#2D8B2D]/5 rounded-full blur-[80px]" />
          {/* 精细网格 */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(196,163,90,0.04) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }} />
          {/* 顶部装饰线 - 校徽棕色调 */}
          <div className="absolute top-16 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C4A35A]/30 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* 左侧: 校徽大图 */}
            <div className="flex-shrink-0 relative">
              {/* 外圈光环 */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-[#C4A35A]/10 to-transparent blur-xl" />
              <div className="absolute -inset-3 rounded-full border border-[#C4A35A]/15" />
              <div className="relative">
                <img
                  src="/images/bit-emblem.svg"
                  alt="北京理工大学校徽"
                  className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 drop-shadow-2xl"
                />
              </div>
              {/* 底部反光 */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-[#C4A35A]/10 rounded-full blur-lg" />
            </div>

            {/* 右侧: 文字内容 */}
            <div className="text-center lg:text-left flex-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tight">
                北京理工大学
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#C4A35A] font-semibold mb-5">
                新加坡校友会
              </h2>
              <p className="text-base md:text-lg text-white/50 mb-8 font-light tracking-wide">
                Beijing Institute of Technology Singapore Alumni Association
              </p>

              {/* 校训区域 - 融合校徽棕色/绿色基调 */}
              <div id="motto" className="mb-8">
                <div className="inline-block relative">
                  <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#8B4513]/40 via-[#C4A35A]/40 to-[#8B4513]/40" />
                  <div className="relative rounded-xl px-8 py-5 bg-[#002244]/80 backdrop-blur-sm">
                    <p className="text-2xl md:text-3xl text-[#C4A35A] font-bold tracking-[0.3em]">
                      德以明理 &nbsp; 学以精工
                    </p>
                    <p className="text-xs md:text-sm text-white/40 mt-2 tracking-wider">
                      Virtue for Understanding Principles, Learning for Excellent Engineering
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-white/40 text-base max-w-lg mx-auto lg:mx-0 leading-relaxed">
                汇聚狮城北理人，传承延安精神，共创美好未来
              </p>

              {/* 快捷数据 */}
              <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#C4A35A]">1940</div>
                  <div className="text-xs text-white/30 mt-1">创校年份</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">985</div>
                  <div className="text-xs text-white/30 mt-1">双一流高校</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2D8B2D]">SG</div>
                  <div className="text-xs text-white/30 mt-1">狮城分会</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部渐变过渡 */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ========== 关于我们 ========== */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        {/* 装饰背景 - 校徽绿色松树意象 */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#2D8B2D]/3 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]" />

        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#C4A35A] uppercase tracking-widest mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366]">关于校友会</h2>
            <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-[#8B4513] to-[#C4A35A] rounded-full" />
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

            {/* 右侧卡片 - 融合校徽色彩体系 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden bg-gradient-to-br from-[#003366]/5 to-[#003366]/10 rounded-xl p-6 text-center border border-[#003366]/10">
                <div className="text-3xl font-bold text-[#003366]">1940</div>
                <div className="text-sm text-gray-500 mt-1">母校创建年份</div>
              </div>
              <div className="relative overflow-hidden bg-gradient-to-br from-[#8B4513]/5 to-[#C4A35A]/10 rounded-xl p-6 text-center border border-[#C4A35A]/20">
                <div className="text-3xl font-bold text-[#8B4513]">延安</div>
                <div className="text-sm text-gray-500 mt-1">红色基因传承</div>
              </div>
              <div className="relative overflow-hidden bg-gradient-to-br from-[#2D8B2D]/5 to-[#2D8B2D]/10 rounded-xl p-6 text-center border border-[#2D8B2D]/15">
                <div className="text-3xl font-bold text-[#2D8B2D]">985</div>
                <div className="text-sm text-gray-500 mt-1">双一流高校</div>
              </div>
              <div className="relative overflow-hidden bg-gradient-to-br from-[#8B0000]/5 to-[#8B0000]/10 rounded-xl p-6 text-center border border-[#8B0000]/10">
                <div className="text-3xl font-bold text-[#8B0000]">SG</div>
                <div className="text-sm text-gray-500 mt-1">狮城分会</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 近期活动预告 ========== */}
      <section id="events" className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#003366]/3 rounded-full translate-y-1/2 -translate-x-1/2 blur-[80px]" />

        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#C4A35A] uppercase tracking-widest mb-3">Upcoming Events</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366]">近期活动预告</h2>
            <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-[#C4A35A] to-[#8B4513] rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* 活动卡片 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-[#003366] to-[#003366]/70" />
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
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-[#C4A35A] to-[#8B4513]" />
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
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-[#2D8B2D] to-[#2D8B2D]/70" />
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
      <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-br from-[#003366] via-[#002244] to-[#001a33]">
        {/* 背景装饰 */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(196,163,90,0.03) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
          <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-[#C4A35A]/3 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <img
            src="/images/bit-emblem.svg"
            alt="BIT"
            className="w-16 h-16 mx-auto mb-6 opacity-40"
          />
          <p className="text-sm font-medium text-[#C4A35A] uppercase tracking-widest mb-3">Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">联系我们</h2>
          <p className="text-white/60 max-w-xl mx-auto mb-10">
            如果您是北京理工大学校友，正在新加坡或即将前往新加坡，欢迎与我们联系，加入校友会大家庭。
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl px-8 py-5 text-white hover:bg-white/10 transition-colors">
              <div className="text-sm text-[#C4A35A] mb-1">电子邮箱</div>
              <div className="font-medium">alumni-sg@bit.edu.cn</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl px-8 py-5 text-white hover:bg-white/10 transition-colors">
              <div className="text-sm text-[#C4A35A] mb-1">微信公众号</div>
              <div className="font-medium">BIT新加坡校友会</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 页脚 ========== */}
      <footer className="bg-[#001122] py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/images/bit-emblem.svg" alt="BIT" className="w-8 h-8 opacity-40" />
              <p className="text-sm text-white/30">
                &copy; {new Date().getFullYear()} 北京理工大学新加坡校友会. All rights reserved.
              </p>
            </div>
            <Link href="/admin/dashboard" className="text-sm text-white/20 hover:text-white/40 transition-colors">
              管理后台
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
