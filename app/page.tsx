import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ========== 顶部导航栏 ========== */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/images/bit-badge.png" alt="BIT" className="w-10 h-10" />
            <div className="flex flex-col">
              <span className="text-[#1B5E20] font-bold text-sm md:text-base leading-tight">
                北京理工大学新加坡校友会
              </span>
              <span className="text-[#C62828] text-[10px] leading-tight tracking-wider hidden sm:block">
                BIT Singapore Alumni Association
              </span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-500 text-sm hover:text-[#1B5E20] transition-colors">关于我们</a>
            <a href="#bridge" className="text-gray-500 text-sm hover:text-[#1B5E20] transition-colors">双城桥梁</a>
            <a href="#events" className="text-gray-500 text-sm hover:text-[#1B5E20] transition-colors">近期活动</a>
            <a href="#contact" className="text-gray-500 text-sm hover:text-[#1B5E20] transition-colors">联系方式</a>
          </nav>
        </div>
      </header>

      {/* ========== Hero - 新加坡夜景做背景 ========== */}
      <section className="relative pt-16 min-h-[100vh] flex items-center overflow-hidden">
        {/* 夜景背景图 */}
        <div className="absolute inset-0">
          <img
            src="/images/sg-night.jpg"
            alt="Singapore skyline"
            className="w-full h-full object-cover"
          />
          {/* 深色遮罩让文字可读 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#1B5E20]/80" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-12 w-full">
          <div className="flex flex-col items-center text-center">
            {/* 横版 LOGO */}
            <img src="/images/bit-logo.png" alt="北京理工大学" className="h-10 md:h-12 mb-8 object-contain brightness-200 drop-shadow-lg" />

            {/* 校徽 */}
            <div className="relative mb-6">
              <div className="absolute -inset-3 rounded-full bg-white/10 backdrop-blur-sm" />
              <img src="/images/bit-badge.png" alt="北京理工大学校徽" className="relative w-28 h-28 md:w-36 md:h-36 drop-shadow-2xl" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight drop-shadow-lg">
              新加坡校友会
            </h1>
            <p className="text-sm md:text-base text-white/60 mb-8 tracking-widest uppercase">
              Singapore Alumni Association
            </p>

            {/* 校训 */}
            <div className="mb-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-10 py-5">
                <p className="text-xl md:text-2xl font-bold text-white tracking-[0.3em] drop-shadow">
                  德以明理 &nbsp; 学以精工
                </p>
                <p className="text-xs text-white/50 mt-2 tracking-wider">
                  Virtue for Understanding Principles, Learning for Excellent Engineering
                </p>
              </div>
            </div>

            <p className="text-white/50 text-sm max-w-md leading-relaxed mb-10">
              汇聚狮城北理人，传承延安精神，共创美好未来
            </p>

            {/* 三指标 */}
            <div className="flex items-center gap-6 md:gap-10">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white drop-shadow">1940</div>
                <div className="text-[10px] text-white/40 mt-1 tracking-wider">延安建校</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white drop-shadow">985</div>
                <div className="text-[10px] text-white/40 mt-1 tracking-wider">双一流高校</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white drop-shadow">SG</div>
                <div className="text-[10px] text-white/40 mt-1 tracking-wider">Lion City</div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部渐变过渡 */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ========== 关于我们 - BIT校门照片 ========== */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-[#1B5E20] uppercase tracking-[0.3em] mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">关于校友会</h2>
            <div className="mt-4 mx-auto w-12 h-1 bg-[#1B5E20] rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* 左侧：BIT校门照片 */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img
                src="/images/bit-gate.jpg"
                alt="北京理工大学校门"
                className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <p className="text-white font-bold text-lg drop-shadow">北京理工大学</p>
                <p className="text-white/70 text-xs">Beijing Institute of Technology · Est. 1940</p>
              </div>
            </div>

            {/* 右侧：介绍文字 */}
            <div>
              <p className="text-gray-600 leading-[1.9] mb-5 text-[15px]">
                北京理工大学新加坡校友会（BIT Singapore Alumni Association）是由在新加坡工作、生活、求学的北京理工大学校友自愿组成的非营利社团组织。
              </p>
              <p className="text-gray-600 leading-[1.9] mb-5 text-[15px]">
                校友会致力于促进在新校友之间的联络与交流，增进友谊与合作，为校友在新加坡的事业发展和生活提供互助平台，同时积极推动母校与新加坡各界的学术与产业合作。
              </p>
              <p className="text-gray-600 leading-[1.9] text-[15px]">
                我们定期组织学术讲座、文体活动、节日聚会和职业发展论坛等丰富多彩的活动，凝聚北理力量，服务狮城校友。
              </p>

              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="bg-[#1B5E20]/5 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-[#1B5E20]">1940</div>
                  <div className="text-[10px] text-gray-500 mt-1">延安建校</div>
                </div>
                <div className="bg-[#C62828]/5 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-[#C62828]">985</div>
                  <div className="text-[10px] text-gray-500 mt-1">双一流高校</div>
                </div>
                <div className="bg-[#8B4513]/5 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-[#8B4513]">延安</div>
                  <div className="text-[10px] text-gray-500 mt-1">红色基因</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 北京 × 新加坡 双城桥梁 ========== */}
      <section id="bridge" className="py-20 bg-[#FAFDF7]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-[#C62828] uppercase tracking-[0.3em] mb-3">Beijing × Singapore</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">双城桥梁</h2>
            <div className="mt-4 mx-auto w-12 h-1 bg-[#C62828] rounded-full" />
          </div>

          {/* 双城照片对比 */}
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group h-[240px]">
              <img
                src="/images/bit-stadium.jpg"
                alt="北京理工大学体育馆"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#C62828]/70 to-transparent" />
              <div className="absolute bottom-4 left-5 flex items-center gap-2">
                <span className="text-2xl">🇨🇳</span>
                <div>
                  <p className="text-white font-bold drop-shadow">北京</p>
                  <p className="text-white/70 text-xs">Beijing Institute of Technology</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg group h-[240px]">
              <img
                src="/images/sg-merlion.jpg"
                alt="新加坡鱼尾狮"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B5E20]/70 to-transparent" />
              <div className="absolute bottom-4 left-5 flex items-center gap-2">
                <span className="text-2xl">🇸🇬</span>
                <div>
                  <p className="text-white font-bold drop-shadow">新加坡</p>
                  <p className="text-white/70 text-xs">The Lion City · Singapore</p>
                </div>
              </div>
            </div>
          </div>

          {/* 三项合作 */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#1B5E20]/5 flex items-center justify-center group-hover:bg-[#1B5E20]/10 transition-colors">
                <svg className="w-8 h-8 text-[#1B5E20]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">学术交流</h3>
              <p className="text-sm text-gray-500 leading-relaxed">连接北理工科研实力与新加坡创新生态，促进两地学术合作与人才流通</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#C62828]/5 flex items-center justify-center group-hover:bg-[#C62828]/10 transition-colors">
                <svg className="w-8 h-8 text-[#C62828]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">产业合作</h3>
              <p className="text-sm text-gray-500 leading-relaxed">对接新加坡半导体、AI、金融等优势产业，助力校友创业与职业发展</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#8B4513]/5 flex items-center justify-center group-hover:bg-[#8B4513]/10 transition-colors">
                <svg className="w-8 h-8 text-[#8B4513]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">文化纽带</h3>
              <p className="text-sm text-gray-500 leading-relaxed">在多元文化的狮城传承延安精神，组织节日庆祝、文体赛事与家庭聚会</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 近期活动预告 ========== */}
      <section id="events" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-[#1B5E20] uppercase tracking-[0.3em] mb-3">Upcoming Events</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">近期活动预告</h2>
            <div className="mt-4 mx-auto w-12 h-1 bg-[#1B5E20] rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
              <div className="h-1.5 bg-[#1B5E20]" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-[#1B5E20] font-medium bg-[#1B5E20]/5 px-3 py-1 rounded-full">2026年4月</span>
                  <span className="text-xs text-gray-400">📍 Marina Bay</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">2026 春季校友聚会</h3>
                <p className="text-sm text-gray-500 leading-relaxed">一年一度的春季大聚会，叙旧情、话发展。欢迎所有在新北理校友携家属参加。</p>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
              <div className="h-1.5 bg-[#C62828]" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-[#C62828] font-medium bg-[#C62828]/5 px-3 py-1 rounded-full">2026年5月</span>
                  <span className="text-xs text-gray-400">💻 Zoom 线上</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI 前沿技术讲座</h3>
                <p className="text-sm text-gray-500 leading-relaxed">邀请在新校友中的行业专家分享人工智能与半导体领域的前沿发展与职业机遇。</p>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
              <div className="h-1.5 bg-[#8B4513]" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-[#8B4513] font-medium bg-[#8B4513]/5 px-3 py-1 rounded-full">2026年6月</span>
                  <span className="text-xs text-gray-400">🐉 Kallang River</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">端午龙舟观赛 & 聚餐</h3>
                <p className="text-sm text-gray-500 leading-relaxed">组织校友共同观看新加坡河上龙舟赛，赛后品尝地道家乡粽子，共度佳节。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 联系方式 - 鱼尾狮做背景 ========== */}
      <section id="contact" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/sg-merlion.jpg"
            alt="Singapore Merlion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1B5E20]/85" />
        </div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />

        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <img src="/images/bit-badge.png" alt="BIT" className="w-14 h-14 mx-auto mb-5 brightness-200 drop-shadow-lg" />
          <p className="text-xs font-medium text-white/50 uppercase tracking-[0.3em] mb-3">Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow">联系我们</h2>
          <p className="text-sm text-white/40 mb-8">加入校友会 · 共建狮城北理家园</p>
          <p className="text-white/60 max-w-lg mx-auto mb-10 text-sm leading-relaxed">
            如果您是北京理工大学校友，正在新加坡或即将前往新加坡，欢迎与我们联系，加入校友会大家庭。
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-5">
            <div className="bg-white/10 border border-white/20 rounded-xl px-8 py-5 text-white backdrop-blur-sm hover:bg-white/15 transition-colors">
              <div className="text-xs text-white/50 mb-1">电子邮箱</div>
              <div className="font-medium text-sm">alumni-sg@bit.edu.cn</div>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl px-8 py-5 text-white backdrop-blur-sm hover:bg-white/15 transition-colors">
              <div className="text-xs text-white/50 mb-1">微信公众号</div>
              <div className="font-medium text-sm">BIT新加坡校友会</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 页脚 ========== */}
      <footer className="bg-[#0E3B1E] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/images/bit-badge.png" alt="BIT" className="w-6 h-6 opacity-40" />
              <p className="text-xs text-white/30">
                &copy; {new Date().getFullYear()} 北京理工大学新加坡校友会 · BIT Singapore Alumni Association
              </p>
            </div>
            <Link href="/admin/dashboard" className="text-xs text-white/20 hover:text-white/40 transition-colors">
              管理后台
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
