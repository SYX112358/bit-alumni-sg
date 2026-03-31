import Link from 'next/link';

/* ──────── 新加坡天际线 SVG（增强版 - 更丰富的地标细节） ──────── */
function SkylineSVG({ className = '', color = '#1B5E20', opacity = 1 }: { className?: string; color?: string; opacity?: number }) {
  return (
    <svg viewBox="0 0 1400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="none" opacity={opacity}>
      {/* Singapore Flyer 摩天轮 */}
      <circle cx="100" cy="110" r="65" stroke={color} strokeWidth="2.5" fill="none" />
      <line x1="100" y1="175" x2="100" y2="220" stroke={color} strokeWidth="3" />
      <line x1="75" y1="220" x2="125" y2="220" stroke={color} strokeWidth="3" />
      {/* 摩天轮轮毂 */}
      <circle cx="100" cy="110" r="3" fill={color} />
      {/* 吊舱 */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <circle key={i} cx={100 + 65 * Math.cos((angle * Math.PI) / 180)} cy={110 + 65 * Math.sin((angle * Math.PI) / 180)} r="4" fill={color} />
      ))}

      {/* Marina Bay Sands 金沙酒店 - 更精致 */}
      <rect x="280" y="65" width="18" height="155" rx="3" fill={color} />
      <rect x="315" y="50" width="18" height="170" rx="3" fill={color} />
      <rect x="350" y="65" width="18" height="155" rx="3" fill={color} />
      {/* 顶部船型空中花园 */}
      <path d="M265 58 Q324 25 383 58" stroke={color} strokeWidth="6" fill="none" strokeLinecap="round" />
      <ellipse cx="324" cy="43" rx="68" ry="8" fill={color} />
      {/* 无边泳池示意 */}
      <rect x="290" y="38" width="68" height="4" rx="2" fill={color} opacity="0.5" />

      {/* ArtScience Museum 艺术科学博物馆 - 莲花造型 */}
      <path d="M430 220 L430 175 Q430 155 445 145 Q460 170 460 145 Q475 155 475 175 L475 220" fill={color} />
      <path d="M440 145 Q452 120 465 145" stroke={color} strokeWidth="2" fill="none" />
      <path d="M435 155 Q452 128 470 155" stroke={color} strokeWidth="1.5" fill="none" />

      {/* Merlion 鱼尾狮 - 更大更醒目 */}
      <g transform="translate(530, 0)">
        {/* 鱼尾狮身体 */}
        <path d="M30 220 L30 145 Q30 125 40 118 Q48 112 45 98 Q42 82 50 75 L55 70 Q46 62 50 50 Q54 42 60 48 Q64 52 64 46 Q68 38 72 46 Q76 52 76 46 Q80 38 84 48 Q88 55 82 62 L87 70 Q95 78 90 98 Q87 112 95 118 Q105 125 105 145 L105 220" fill={color} />
        {/* 水花 - 三层 */}
        <path d="M50 95 Q30 82 10 95 Q0 102 -12 88" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M48 102 Q25 90 5 105" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M46 108 Q28 100 12 112" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* 皇冠 */}
        <path d="M52 50 L56 42 L60 48 L64 40 L68 48 L72 42 L76 50" stroke={color} strokeWidth="1.5" fill="none" />
      </g>

      {/* CBD 建筑群 - 高低错落 */}
      <rect x="700" y="85" width="28" height="135" rx="1" fill={color} />
      <rect x="735" y="60" width="22" height="160" rx="1" fill={color} />
      <rect x="765" y="95" width="32" height="125" rx="1" fill={color} />
      <rect x="805" y="50" width="18" height="170" rx="1" fill={color} />
      <rect x="830" y="75" width="25" height="145" rx="1" fill={color} />
      <rect x="862" y="105" width="20" height="115" rx="1" fill={color} />
      {/* 小窗户 */}
      <rect x="708" y="95" width="4" height="3" rx="0.5" fill="white" opacity="0.15" />
      <rect x="708" y="105" width="4" height="3" rx="0.5" fill="white" opacity="0.15" />
      <rect x="740" y="70" width="4" height="3" rx="0.5" fill="white" opacity="0.15" />
      <rect x="740" y="80" width="4" height="3" rx="0.5" fill="white" opacity="0.15" />

      {/* Esplanade 榴莲壳 - 更精细 */}
      <ellipse cx="950" cy="170" rx="42" ry="32" fill={color} />
      <ellipse cx="1015" cy="170" rx="38" ry="30" fill={color} />
      {/* 三角形纹理 */}
      <path d="M920 170 Q950 138 980 170" stroke="white" strokeWidth="1" fill="none" opacity="0.2" />
      <path d="M930 175 Q950 150 970 175" stroke="white" strokeWidth="1" fill="none" opacity="0.15" />
      <path d="M988 170 Q1015 140 1042 170" stroke="white" strokeWidth="1" fill="none" opacity="0.2" />
      <path d="M996 175 Q1015 152 1034 175" stroke="white" strokeWidth="1" fill="none" opacity="0.15" />

      {/* Gardens by the Bay - Supertrees 超级树 */}
      <line x1="1120" y1="220" x2="1120" y2="125" stroke={color} strokeWidth="5" />
      <ellipse cx="1120" cy="120" rx="24" ry="14" fill={color} />
      <path d="M1100 130 Q1120 110 1140 130" stroke={color} strokeWidth="1.5" fill="none" />

      <line x1="1180" y1="220" x2="1180" y2="100" stroke={color} strokeWidth="6" />
      <ellipse cx="1180" cy="94" rx="28" ry="16" fill={color} />
      <path d="M1156 106 Q1180 82 1204 106" stroke={color} strokeWidth="1.5" fill="none" />

      <line x1="1230" y1="220" x2="1230" y2="140" stroke={color} strokeWidth="4" />
      <ellipse cx="1230" cy="135" rx="18" ry="11" fill={color} />

      {/* Supertree 之间的空中走廊 */}
      <path d="M1120 122 Q1150 112 1180 96" stroke={color} strokeWidth="1.5" fill="none" strokeDasharray="4 3" />

      {/* Helix Bridge 螺旋桥 */}
      <path d="M440 218 Q480 208 520 218" stroke={color} strokeWidth="2" fill="none" />
      <path d="M445 218 Q480 210 515 218" stroke={color} strokeWidth="1" fill="none" strokeDasharray="3 2" />

      {/* 水面反射 */}
      <line x1="0" y1="220" x2="1400" y2="220" stroke={color} strokeWidth="1.5" />
      <path d="M0 220 Q350 215 700 220 Q1050 225 1400 220" stroke={color} strokeWidth="0.5" fill="none" opacity="0.4" />
    </svg>
  );
}

/* ──────── 鱼尾狮独立图标 ──────── */
function MerlionIcon({ className = '', color = '#1B5E20' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M30 95 L30 55 Q30 40 38 35 Q44 30 42 20 Q40 10 46 6 Q50 2 54 8 Q57 12 57 8 Q60 2 64 8 Q67 14 62 18 L65 22 Q72 28 68 42 Q65 50 72 55 Q80 60 80 70 L80 95" fill={color} />
      <path d="M42 20 Q28 12 15 22 Q8 28 0 18" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M40 26 Q24 20 12 30" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

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

      {/* ========== Hero 区域 - 重新设计 ========== */}
      <section className="relative pt-16 min-h-[95vh] flex items-center overflow-hidden bg-gradient-to-b from-white via-[#f8fbf8] to-[#eef5ee]">
        {/* 微妙背景圆 */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#1B5E20]/[0.02] rounded-full translate-x-1/4" />
          <div className="absolute top-60 left-0 w-[400px] h-[400px] bg-[#C62828]/[0.015] rounded-full -translate-x-1/3" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-8 w-full">
          <div className="flex flex-col items-center text-center">
            {/* 顶部：横版 LOGO（缩小一点避免压迫感） */}
            <img src="/images/bit-logo.png" alt="北京理工大学" className="h-12 md:h-14 mb-10 object-contain" />

            {/* 校徽 - 独立展示，不叠在天际线上 */}
            <div className="relative mb-6">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#1B5E20]/5 to-[#C62828]/5" />
              <div className="absolute -inset-2 rounded-full bg-white shadow-lg" />
              <img src="/images/bit-badge.png" alt="北京理工大学校徽" className="relative w-28 h-28 md:w-32 md:h-32" />
            </div>

            {/* 标题 - 与校徽分开，留足空间 */}
            <h1 className="text-3xl md:text-5xl font-bold text-[#1B5E20] mb-2 tracking-tight">
              新加坡校友会
            </h1>
            <p className="text-sm md:text-base text-gray-400 mb-6 tracking-widest uppercase">
              Singapore Alumni Association
            </p>

            {/* 校训 */}
            <div className="mb-8">
              <div className="relative">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#1B5E20]/20 via-[#C62828]/20 to-[#1B5E20]/20" />
                <div className="relative bg-white rounded-2xl px-10 py-5">
                  <p className="text-xl md:text-2xl font-bold text-[#C62828] tracking-[0.3em]">
                    德以明理 &nbsp; 学以精工
                  </p>
                  <p className="text-xs text-gray-400 mt-2 tracking-wider">
                    Virtue for Understanding Principles, Learning for Excellent Engineering
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-sm max-w-md leading-relaxed mb-8">
              汇聚狮城北理人，传承延安精神，共创美好未来
            </p>

            {/* 三指标 */}
            <div className="flex items-center gap-6 md:gap-10 mb-10">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#C62828]">1940</div>
                <div className="text-[10px] text-gray-400 mt-1 tracking-wider">延安建校</div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#1B5E20]">985</div>
                <div className="text-[10px] text-gray-400 mt-1 tracking-wider">双一流高校</div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#8B4513]">SG</div>
                <div className="text-[10px] text-gray-400 mt-1 tracking-wider">Lion City</div>
              </div>
            </div>
          </div>
        </div>

        {/* 新加坡天际线 - 放在 Hero 底部，可见度提高 */}
        <div className="absolute bottom-0 left-0 right-0">
          <SkylineSVG className="w-full h-[120px] md:h-[160px]" color="#1B5E20" opacity={0.1} />
        </div>

        {/* 红绿渐变分割线 */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C62828] via-[#1B5E20] to-[#C62828]" />
      </section>

      {/* ========== 关于我们 ========== */}
      <section id="about" className="py-20 bg-[#FAFDF7]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-[#1B5E20] uppercase tracking-[0.3em] mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">关于校友会</h2>
            <div className="mt-4 mx-auto w-12 h-1 bg-[#1B5E20] rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
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
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-5 text-center border border-[#1B5E20]/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-[#1B5E20]">1940</div>
                <div className="text-xs text-gray-500 mt-1">母校创建年份</div>
              </div>
              <div className="bg-white rounded-xl p-5 text-center border border-[#C62828]/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-[#C62828]">延安</div>
                <div className="text-xs text-gray-500 mt-1">红色基因传承</div>
              </div>
              <div className="bg-white rounded-xl p-5 text-center border border-[#8B4513]/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-[#8B4513]">985</div>
                <div className="text-xs text-gray-500 mt-1">双一流高校</div>
              </div>
              <div className="bg-white rounded-xl p-5 text-center border border-[#1B5E20]/10 shadow-sm hover:shadow-md transition-shadow">
                <MerlionIcon className="w-10 h-12 mx-auto mb-1" color="#1B5E20" />
                <div className="text-xs text-gray-500">狮城分会</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 北京 × 新加坡 双城桥梁 ========== */}
      <section id="bridge" className="py-20 bg-white relative overflow-hidden">
        {/* 微弱天际线背景 */}
        <div className="absolute top-0 left-0 right-0 opacity-[0.03]">
          <SkylineSVG className="w-full h-[100px]" color="#1B5E20" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-[#C62828] uppercase tracking-[0.3em] mb-3">Beijing × Singapore</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">双城桥梁</h2>
            <div className="mt-4 mx-auto w-12 h-1 bg-[#C62828] rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 学术交流 */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#1B5E20]/5 flex items-center justify-center group-hover:bg-[#1B5E20]/10 transition-colors">
                <svg className="w-8 h-8 text-[#1B5E20]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">学术交流</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                连接北理工科研实力与新加坡创新生态，促进两地学术合作与人才流通
              </p>
            </div>

            {/* 产业合作 */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#C62828]/5 flex items-center justify-center group-hover:bg-[#C62828]/10 transition-colors">
                <svg className="w-8 h-8 text-[#C62828]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">产业合作</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                对接新加坡半导体、AI、金融等优势产业，助力校友创业与职业发展
              </p>
            </div>

            {/* 文化纽带 */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#8B4513]/5 flex items-center justify-center group-hover:bg-[#8B4513]/10 transition-colors">
                <svg className="w-8 h-8 text-[#8B4513]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">文化纽带</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                在多元文化的狮城传承延安精神，组织节日庆祝、文体赛事与家庭聚会
              </p>
            </div>
          </div>

          {/* 底部双城标签 */}
          <div className="mt-14 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2 bg-[#C62828]/5 rounded-full px-5 py-2">
              <span className="text-lg">🇨🇳</span>
              <span className="text-sm font-medium text-[#C62828]">北京</span>
            </div>
            <div className="flex items-center gap-1 text-gray-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <div className="flex items-center gap-2 bg-[#1B5E20]/5 rounded-full px-5 py-2">
              <span className="text-lg">🇸🇬</span>
              <span className="text-sm font-medium text-[#1B5E20]">新加坡</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 新加坡地标展示条 ========== */}
      <section className="py-12 bg-gradient-to-r from-[#1B5E20] to-[#14472A] relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }} />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 text-white/70 text-sm">
            <div className="flex flex-col items-center gap-2">
              <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
                <circle cx="20" cy="16" r="14" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />
                <line x1="20" y1="30" x2="20" y2="38" stroke="white" strokeWidth="1.5" opacity="0.6" />
              </svg>
              <span className="text-xs text-white/50">Singapore Flyer</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
                <rect x="10" y="10" width="5" height="28" rx="1" fill="white" opacity="0.6" />
                <rect x="17" y="5" width="5" height="33" rx="1" fill="white" opacity="0.6" />
                <rect x="24" y="10" width="5" height="28" rx="1" fill="white" opacity="0.6" />
                <path d="M8 8 Q19 0 31 8" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />
              </svg>
              <span className="text-xs text-white/50">Marina Bay Sands</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MerlionIcon className="w-8 h-8" color="rgba(255,255,255,0.6)" />
              <span className="text-xs text-white/50">Merlion</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
                <ellipse cx="14" cy="28" rx="12" ry="9" fill="white" opacity="0.6" />
                <ellipse cx="28" cy="28" rx="10" ry="8" fill="white" opacity="0.6" />
              </svg>
              <span className="text-xs text-white/50">Esplanade</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
                <line x1="12" y1="38" x2="12" y2="18" stroke="white" strokeWidth="2" opacity="0.6" />
                <ellipse cx="12" cy="16" rx="8" ry="4" fill="white" opacity="0.6" />
                <line x1="28" y1="38" x2="28" y2="12" stroke="white" strokeWidth="2.5" opacity="0.6" />
                <ellipse cx="28" cy="10" rx="10" ry="5" fill="white" opacity="0.6" />
              </svg>
              <span className="text-xs text-white/50">Supertree Grove</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
                <path d="M10 38 L10 20 Q20 10 30 20 L30 38" fill="white" opacity="0.6" />
                <path d="M15 20 Q20 14 25 20" stroke="white" strokeWidth="1" fill="none" opacity="0.4" />
              </svg>
              <span className="text-xs text-white/50">ArtScience Museum</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 近期活动预告 ========== */}
      <section id="events" className="py-20 bg-[#FAFDF7]">
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
                  <span className="text-xs text-[#1B5E20] font-medium bg-[#1B5E20]/5 px-3 py-1 rounded-full">
                    2026年4月
                  </span>
                  <span className="text-xs text-gray-400">📍 Marina Bay</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">2026 春季校友聚会</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  一年一度的春季大聚会，叙旧情、话发展。欢迎所有在新北理校友携家属参加。
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
              <div className="h-1.5 bg-[#C62828]" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-[#C62828] font-medium bg-[#C62828]/5 px-3 py-1 rounded-full">
                    2026年5月
                  </span>
                  <span className="text-xs text-gray-400">💻 Zoom 线上</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI 前沿技术讲座</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  邀请在新校友中的行业专家分享人工智能与半导体领域的前沿发展与职业机遇。
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
              <div className="h-1.5 bg-[#8B4513]" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-[#8B4513] font-medium bg-[#8B4513]/5 px-3 py-1 rounded-full">
                    2026年6月
                  </span>
                  <span className="text-xs text-gray-400">🐉 Kallang River</span>
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
      <section id="contact" className="relative py-24 bg-[#1B5E20] overflow-hidden">
        {/* 天际线剪影做底部装饰 - 更明显 */}
        <div className="absolute bottom-0 left-0 right-0">
          <SkylineSVG className="w-full h-auto" color="rgba(255,255,255,0.08)" />
        </div>
        {/* 点阵 */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />

        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <img src="/images/bit-badge.png" alt="BIT" className="w-14 h-14 mx-auto mb-5 opacity-50 brightness-200" />
          <p className="text-xs font-medium text-white/50 uppercase tracking-[0.3em] mb-3">Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">联系我们</h2>
          <p className="text-sm text-white/40 mb-8">加入校友会 · 共建狮城北理家园</p>
          <p className="text-white/60 max-w-lg mx-auto mb-10 text-sm leading-relaxed">
            如果您是北京理工大学校友，正在新加坡或即将前往新加坡，欢迎与我们联系，加入校友会大家庭。
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-5">
            <div className="bg-white/10 border border-white/15 rounded-xl px-8 py-5 text-white backdrop-blur-sm hover:bg-white/15 transition-colors">
              <div className="text-xs text-white/50 mb-1">电子邮箱</div>
              <div className="font-medium text-sm">alumni-sg@bit.edu.cn</div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-xl px-8 py-5 text-white backdrop-blur-sm hover:bg-white/15 transition-colors">
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
