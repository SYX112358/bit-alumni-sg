import Link from 'next/link';

/* ──────── 新加坡天际线 SVG（高精度版） ──────── */
function SkylineSVG({ className = '', color = '#1B5E20', opacity = 1 }: { className?: string; color?: string; opacity?: number }) {
  return (
    <svg viewBox="0 0 1400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMax meet" opacity={opacity}>
      {/* === Singapore Flyer 新加坡摩天观景轮 === */}
      <g>
        {/* 外圈 */}
        <circle cx="110" cy="115" r="70" stroke={color} strokeWidth="2" fill="none" />
        {/* 内圈 */}
        <circle cx="110" cy="115" r="55" stroke={color} strokeWidth="0.8" fill="none" opacity="0.4" />
        {/* 轮毂 */}
        <circle cx="110" cy="115" r="5" fill={color} />
        {/* 辐条 */}
        {[0, 30, 60, 90, 120, 150].map((a, i) => (
          <line key={i} x1={110 + 5 * Math.cos((a * Math.PI) / 180)} y1={115 + 5 * Math.sin((a * Math.PI) / 180)}
                x2={110 + 70 * Math.cos((a * Math.PI) / 180)} y2={115 + 70 * Math.sin((a * Math.PI) / 180)}
                stroke={color} strokeWidth="0.6" opacity="0.3" />
        ))}
        {/* 吊舱（椭圆形） */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a, i) => (
          <ellipse key={i} cx={110 + 70 * Math.cos((a * Math.PI) / 180)} cy={115 + 70 * Math.sin((a * Math.PI) / 180)}
                   rx="5" ry="3.5" fill={color} transform={`rotate(${a}, ${110 + 70 * Math.cos((a * Math.PI) / 180)}, ${115 + 70 * Math.sin((a * Math.PI) / 180)})`} />
        ))}
        {/* 支撑柱 */}
        <line x1="110" y1="185" x2="110" y2="240" stroke={color} strokeWidth="4" />
        <line x1="80" y1="240" x2="140" y2="240" stroke={color} strokeWidth="3" />
        {/* 斜撑 */}
        <line x1="90" y1="240" x2="110" y2="200" stroke={color} strokeWidth="2" />
        <line x1="130" y1="240" x2="110" y2="200" stroke={color} strokeWidth="2" />
      </g>

      {/* === Marina Bay Sands 金沙酒店 === */}
      <g>
        {/* 三座塔楼 - 微微向内倾斜 */}
        <path d="M295 240 L298 72 L316 72 L313 240" fill={color} />
        <path d="M333 240 L334 58 L352 58 L351 240" fill={color} />
        <path d="M369 240 L372 72 L390 72 L387 240" fill={color} />
        {/* 塔楼窗户纹理 */}
        {[85, 100, 115, 130, 145, 160, 175, 190, 205, 220].map((y, i) => (
          <g key={i} opacity="0.15">
            <line x1="300" y1={y} x2="314" y2={y} stroke="white" strokeWidth="1" />
            <line x1="336" y1={y - 5} x2="350" y2={y - 5} stroke="white" strokeWidth="1" />
            <line x1="374" y1={y} x2="388" y2={y} stroke="white" strokeWidth="1" />
          </g>
        ))}
        {/* 空中花园 SkyPark - 船形 */}
        <path d="M275 65 L280 55 Q343 35 405 55 L410 65 Z" fill={color} />
        {/* SkyPark 上部弧线 */}
        <path d="M282 55 Q343 38 403 55" stroke={color} strokeWidth="1.5" fill="none" />
        {/* 无边泳池 */}
        <rect x="340" y="48" width="55" height="5" rx="2" fill={color} opacity="0.6" />
        {/* 树木装饰 */}
        <circle cx="295" cy="52" r="3" fill={color} opacity="0.5" />
        <circle cx="305" cy="50" r="2.5" fill={color} opacity="0.5" />
        <circle cx="320" cy="51" r="3" fill={color} opacity="0.5" />
      </g>

      {/* === ArtScience Museum 艺术科学博物馆 - 莲花/手掌 === */}
      <g>
        {/* 花瓣/手指 - 10片向外展开 */}
        <path d="M452 240 L452 185 Q452 165 448 155 Q444 145 440 130 Q438 118 445 110 Q450 115 452 125 Q454 115 458 108 Q462 115 460 125 Q462 115 466 110 Q472 118 470 130 Q466 145 462 155 Q458 165 458 185 L458 240" fill={color} />
        {/* 左侧花瓣 */}
        <path d="M445 160 Q430 140 425 115 Q422 105 430 100 Q436 108 440 120 Q438 130 445 150" fill={color} opacity="0.7" />
        {/* 右侧花瓣 */}
        <path d="M465 160 Q480 140 485 115 Q488 105 480 100 Q474 108 470 120 Q472 130 465 150" fill={color} opacity="0.7" />
        {/* 底座平台 */}
        <rect x="435" y="195" width="40" height="6" rx="3" fill={color} opacity="0.5" />
      </g>

      {/* === Merlion 鱼尾狮 - 精细版 === */}
      <g transform="translate(530, 0)">
        {/* 底座 */}
        <rect x="15" y="210" width="90" height="30" rx="4" fill={color} opacity="0.6" />
        <rect x="25" y="200" width="70" height="15" rx="3" fill={color} opacity="0.8" />
        {/* 鱼尾 - 在身体后方 */}
        <path d="M70 195 Q85 170 95 150 Q100 140 108 145 Q102 158 95 170 Q105 155 115 148 Q118 155 108 168 Q98 180 85 195" fill={color} opacity="0.8" />
        {/* 身体主体 - 坐姿 */}
        <path d="M35 200 L35 155 Q35 140 40 130 L42 125 Q38 118 40 108 Q42 100 48 105 Q45 95 48 85 L52 78 Q48 70 50 60 Q52 55 56 60 Q55 52 58 48 Q62 52 62 58 Q65 52 68 48 Q72 52 70 60 Q74 55 76 60 Q78 70 74 78 L78 85 Q82 95 78 105 Q84 100 86 108 Q88 118 84 125 L86 130 Q90 140 90 155 L90 200" fill={color} />
        {/* 鬃毛 */}
        <path d="M50 65 Q45 55 48 45" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M56 58 Q54 48 56 40" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M68 58 Q70 48 68 40" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M74 65 Q79 55 76 45" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* 眼睛 */}
        <circle cx="58" cy="72" r="2" fill="white" opacity="0.3" />
        <circle cx="68" cy="72" r="2" fill="white" opacity="0.3" />
        {/* 水柱 - 从嘴部向左喷出大弧线 */}
        <path d="M48 85 Q30 60 5 55 Q-15 52 -25 65 Q-30 72 -20 78" stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M46 90 Q25 68 0 65 Q-18 63 -28 78" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
        <path d="M45 95 Q22 78 5 78 Q-8 78 -15 88" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
        {/* 水花溅落 */}
        <circle cx="-18" cy="82" r="3" fill={color} opacity="0.3" />
        <circle cx="-25" cy="75" r="2" fill={color} opacity="0.2" />
        <circle cx="-12" cy="90" r="2.5" fill={color} opacity="0.25" />
        {/* 鳞片纹理 */}
        <path d="M45 160 Q55 155 65 160 Q75 155 85 160" stroke="white" strokeWidth="0.5" fill="none" opacity="0.15" />
        <path d="M45 170 Q55 165 65 170 Q75 165 85 170" stroke="white" strokeWidth="0.5" fill="none" opacity="0.15" />
        <path d="M45 180 Q55 175 65 180 Q75 175 85 180" stroke="white" strokeWidth="0.5" fill="none" opacity="0.15" />
      </g>

      {/* === CBD 天际线（One Raffles Place, UOB Plaza, OUB Centre 等） === */}
      <g>
        {/* 不同造型的高楼 */}
        <rect x="710" y="80" width="24" height="160" rx="1" fill={color} />
        <polygon points="722,80 710,95 734,95" fill={color} />

        <rect x="742" y="55" width="20" height="185" rx="1" fill={color} />
        <rect x="745" y="48" width="14" height="10" rx="1" fill={color} />

        <rect x="770" y="95" width="30" height="145" rx="1" fill={color} />

        <rect x="808" y="42" width="16" height="198" rx="1" fill={color} />
        <rect x="810" y="35" width="12" height="10" rx="1" fill={color} opacity="0.7" />
        <rect x="813" y="28" width="6" height="10" rx="1" fill={color} opacity="0.5" />

        <rect x="832" y="70" width="22" height="170" rx="1" fill={color} />

        <rect x="862" y="100" width="18" height="140" rx="1" fill={color} />

        {/* 窗户光点 */}
        {[90, 105, 120, 135, 150, 165, 180, 195, 210, 225].map((y, i) => (
          <g key={i} opacity={0.12 + (i % 3) * 0.04}>
            <rect x="714" y={y} width="3" height="2" fill="white" />
            <rect x="720" y={y} width="3" height="2" fill="white" />
            <rect x="746" y={y - 10} width="3" height="2" fill="white" />
            <rect x="753" y={y - 10} width="3" height="2" fill="white" />
            <rect x="812" y={y - 20} width="3" height="2" fill="white" />
          </g>
        ))}
      </g>

      {/* === Esplanade 滨海艺术中心（榴莲壳） === */}
      <g>
        {/* 左半球 */}
        <path d="M940 240 L940 178 Q940 148 970 148 Q1000 148 1000 178 L1000 240" fill={color} />
        {/* 右半球 */}
        <path d="M1008 240 L1008 182 Q1008 155 1035 155 Q1062 155 1062 182 L1062 240" fill={color} />
        {/* 尖刺纹理 - 左球 */}
        <path d="M945 185 L955 170 L960 185" stroke="white" strokeWidth="0.6" fill="none" opacity="0.2" />
        <path d="M955 190 L965 172 L972 190" stroke="white" strokeWidth="0.6" fill="none" opacity="0.18" />
        <path d="M965 188 L975 168 L982 188" stroke="white" strokeWidth="0.6" fill="none" opacity="0.2" />
        <path d="M975 190 L985 175 L992 190" stroke="white" strokeWidth="0.6" fill="none" opacity="0.18" />
        <path d="M948 200 L958 188 L965 200" stroke="white" strokeWidth="0.5" fill="none" opacity="0.15" />
        <path d="M962 200 L972 185 L980 200" stroke="white" strokeWidth="0.5" fill="none" opacity="0.15" />
        {/* 尖刺纹理 - 右球 */}
        <path d="M1015 190 L1025 172 L1032 190" stroke="white" strokeWidth="0.6" fill="none" opacity="0.2" />
        <path d="M1025 192 L1035 175 L1042 192" stroke="white" strokeWidth="0.6" fill="none" opacity="0.18" />
        <path d="M1035 190 L1045 172 L1052 190" stroke="white" strokeWidth="0.6" fill="none" opacity="0.2" />
        <path d="M1018 205 L1028 192 L1035 205" stroke="white" strokeWidth="0.5" fill="none" opacity="0.15" />
        <path d="M1035 205 L1045 190 L1052 205" stroke="white" strokeWidth="0.5" fill="none" opacity="0.15" />
        {/* 连接部分 */}
        <rect x="998" y="185" width="12" height="55" fill={color} opacity="0.5" />
      </g>

      {/* === Gardens by the Bay - Supertree Grove 超级树 === */}
      <g>
        {/* 大超级树（中） */}
        <path d="M1155 240 L1155 110 Q1155 105 1160 100 L1160 240" fill={color} />
        <path d="M1148 100 Q1148 75 1157 70 Q1165 75 1170 78" fill={color} />
        <ellipse cx="1158" cy="95" rx="30" ry="12" fill={color} />
        <path d="M1130 100 Q1158 78 1186 100" stroke={color} strokeWidth="1.5" fill="none" />
        <path d="M1135 105 Q1158 85 1181 105" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
        {/* 树冠底部装饰条 */}
        <path d="M1132 98 L1138 92 L1145 98 L1152 92 L1158 98 L1164 92 L1170 98 L1176 92 L1182 98" stroke={color} strokeWidth="0.8" fill="none" opacity="0.4" />

        {/* 高超级树（右） */}
        <path d="M1220 240 L1220 85 Q1220 80 1225 75 L1225 240" fill={color} />
        <ellipse cx="1222" cy="72" rx="35" ry="14" fill={color} />
        <path d="M1190 78 Q1222 55 1254 78" stroke={color} strokeWidth="1.5" fill="none" />
        <path d="M1195 83 Q1222 62 1249 83" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
        <path d="M1192 76 L1199 69 L1206 76 L1213 69 L1220 76 L1227 69 L1234 76 L1241 69 L1248 76" stroke={color} strokeWidth="0.8" fill="none" opacity="0.4" />

        {/* 小超级树（左） */}
        <path d="M1105 240 L1105 140 Q1105 136 1109 132 L1109 240" fill={color} />
        <ellipse cx="1107" cy="128" rx="22" ry="10" fill={color} />
        <path d="M1088 133 Q1107 115 1126 133" stroke={color} strokeWidth="1.2" fill="none" />
        <path d="M1090 128 L1096 122 L1102 128 L1107 122 L1112 128 L1118 122 L1124 128" stroke={color} strokeWidth="0.7" fill="none" opacity="0.4" />

        {/* 空中走廊 (OCBC Skyway) */}
        <path d="M1107 125 Q1132 115 1158 92" stroke={color} strokeWidth="1.8" fill="none" />
        <path d="M1158 92 Q1190 78 1222 70" stroke={color} strokeWidth="1.8" fill="none" />
        {/* 走廊栏杆 */}
        <path d="M1107 123 Q1132 113 1158 90" stroke={color} strokeWidth="0.5" fill="none" opacity="0.3" strokeDasharray="3 2" />
      </g>

      {/* === 最右侧补充建筑 === */}
      <rect x="1300" y="120" width="18" height="120" rx="1" fill={color} opacity="0.4" />
      <rect x="1325" y="145" width="14" height="95" rx="1" fill={color} opacity="0.3" />
      <rect x="1350" y="160" width="20" height="80" rx="1" fill={color} opacity="0.25" />

      {/* === 最左侧补充建筑 === */}
      <rect x="20" y="170" width="14" height="70" rx="1" fill={color} opacity="0.25" />
      <rect x="42" y="155" width="18" height="85" rx="1" fill={color} opacity="0.3" />

      {/* === 水面 === */}
      <line x1="0" y1="240" x2="1400" y2="240" stroke={color} strokeWidth="1" />
    </svg>
  );
}

/* ──────── 鱼尾狮独立图标（精细版） ──────── */
function MerlionIcon({ className = '', color = '#1B5E20' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 60 72" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* 身体 */}
      <path d="M18 68 L18 38 Q18 28 22 24 Q20 18 22 12 Q24 8 28 12 Q27 6 30 4 Q33 6 33 10 Q36 6 38 4 Q41 6 40 12 Q44 8 46 12 Q48 18 46 24 Q50 28 50 38 L50 68" fill={color} />
      {/* 鱼尾 */}
      <path d="M42 58 Q52 42 56 35 Q58 30 62 34 Q56 44 50 55" fill={color} opacity="0.75" />
      {/* 水柱 */}
      <path d="M24 18 Q12 8 4 10 Q0 12 2 16" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M23 22 Q14 14 6 16" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.6" />
      {/* 底座 */}
      <rect x="12" y="65" width="44" height="5" rx="2" fill={color} opacity="0.5" />
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

      {/* ========== Hero 区域 ========== */}
      <section className="relative pt-16 min-h-[95vh] flex items-center overflow-hidden bg-gradient-to-b from-white via-[#f8fbf8] to-[#eef5ee]">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#1B5E20]/[0.02] rounded-full translate-x-1/4" />
          <div className="absolute top-60 left-0 w-[400px] h-[400px] bg-[#C62828]/[0.015] rounded-full -translate-x-1/3" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-8 w-full">
          <div className="flex flex-col items-center text-center">
            <img src="/images/bit-logo.png" alt="北京理工大学" className="h-12 md:h-14 mb-10 object-contain" />

            <div className="relative mb-6">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#1B5E20]/5 to-[#C62828]/5" />
              <div className="absolute -inset-2 rounded-full bg-white shadow-lg" />
              <img src="/images/bit-badge.png" alt="北京理工大学校徽" className="relative w-28 h-28 md:w-32 md:h-32" />
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-[#1B5E20] mb-2 tracking-tight">
              新加坡校友会
            </h1>
            <p className="text-sm md:text-base text-gray-400 mb-6 tracking-widest uppercase">
              Singapore Alumni Association
            </p>

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

        {/* 天际线 - Hero 底部 */}
        <div className="absolute bottom-1 left-0 right-0">
          <SkylineSVG className="w-full h-[130px] md:h-[180px]" color="#1B5E20" opacity={0.12} />
        </div>

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

      {/* ========== 新加坡地标装饰条（纯图标，无文字） ========== */}
      <section className="py-8 bg-gradient-to-r from-[#1B5E20] to-[#14472A] relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }} />
        <div className="max-w-5xl mx-auto px-6 relative">
          <SkylineSVG className="w-full h-[60px] md:h-[80px]" color="rgba(255,255,255,0.25)" />
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
                  <span className="text-xs text-[#1B5E20] font-medium bg-[#1B5E20]/5 px-3 py-1 rounded-full">2026年4月</span>
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
                  <span className="text-xs text-[#C62828] font-medium bg-[#C62828]/5 px-3 py-1 rounded-full">2026年5月</span>
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
                  <span className="text-xs text-[#8B4513] font-medium bg-[#8B4513]/5 px-3 py-1 rounded-full">2026年6月</span>
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
        <div className="absolute bottom-0 left-0 right-0">
          <SkylineSVG className="w-full h-auto" color="rgba(255,255,255,0.06)" />
        </div>
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
