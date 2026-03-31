import Image from 'next/image';
import Link from 'next/link';
import { PublicJoinForm } from '@/components/site/public-join-form';

const credibility = [
  {
    label: '学校视角',
    value: '一套可交付、可维护、可继续扩展的校友会官网框架。',
  },
  {
    label: '校友视角',
    value: '公开登记、活动浏览与联络入口已经具备可直接使用的闭环。',
  },
  {
    label: '运营视角',
    value: '前台展示与后台名册联动，便于后续持续运营与数据建档。',
  },
];

const serviceAreas = [
  {
    name: '校友联络',
    title: '让在新北理校友彼此找到彼此',
    description:
      '以活动通知、日常联络与信息建档为基础，让新老校友在抵达新加坡之后都能快速接入同一张网络。',
  },
  {
    name: '职业发展',
    title: '把经验、机会与行业资源串起来',
    description:
      '围绕半导体、人工智能、金融与制造业等方向，建立分享会、职业互荐和项目协作的常态机制。',
  },
  {
    name: '校地合作',
    title: '把母校能力延展到新加坡现场',
    description:
      '促进母校、校友企业与新加坡产业生态之间的长期合作，让校友会成为可信赖的连接界面。',
  },
  {
    name: '社区支持',
    title: '让活动不只停留在节庆合影',
    description:
      '通过家庭友好型活动、志愿服务与城市生活互助，让校友会真正成为在地社区的一部分。',
  },
];

const deliveryHighlights = [
  {
    title: '品牌表达更稳',
    description:
      '校徽、校名和校园照片都回到更合适的位置，不再把低分辨率 LOGO 强行叠在复杂背景上。',
  },
  {
    title: '信息结构更清楚',
    description:
      '把“我们是谁、能做什么、如何加入、如何联络”拆成独立而成熟的机构信息层，降低理解成本。',
  },
  {
    title: '使用闭环已打通',
    description:
      '校友可直接提交登记，后台可即时接收资料并进入既有名册系统，不需要再靠线下转发和手工整理。',
  },
];

const serviceWorkflow = [
  {
    step: '01',
    title: '校友提交基础资料',
    description: '在线填写姓名、专业、毕业年份和联系方式，进入校友会后台名册。',
  },
  {
    step: '02',
    title: '后台整理与建立联络',
    description: '管理员在后台查看新登记校友，后续可进行校友联络、活动通知和名册维护。',
  },
  {
    step: '03',
    title: '参与活动与社区建设',
    description: '校友逐步进入讲座、聚会、互助、志愿者和校地合作等长期活动场景。',
  },
];

const eventPlan = [
  {
    time: '2026年4月',
    place: 'Marina Bay',
    title: '春季校友见面会',
    detail: '以线下联络和新加坡生活经验分享为主，适合新抵新校友和长期在新校友共同参与。',
  },
  {
    time: '2026年5月',
    place: 'Zoom 线上',
    title: 'AI 与先进制造主题分享',
    detail: '围绕行业趋势、岗位变化与校友经验，形成更稳定的专业交流机制。',
  },
  {
    time: '2026年6月',
    place: 'Kallang',
    title: '端午节主题联谊',
    detail: '结合家庭友好型活动和节庆文化，提升校友会的参与感和在地温度。',
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--bit-brick)]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-[family:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--bit-ink)] md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[var(--bit-muted)]">{description}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--bit-ivory)] text-[var(--bit-ink)]">
      <header className="sticky top-0 z-50 border-b border-[var(--bit-line)] bg-[color:rgba(252,250,245,0.92)] backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <div className="rounded-full border border-[var(--bit-line)] bg-white p-1.5 shadow-sm">
              <Image
                src="/images/bit-badge.png"
                alt="北京理工大学校徽"
                width={44}
                height={44}
                unoptimized
                className="h-11 w-11"
              />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-[var(--bit-ink)] md:text-base">
                北京理工大学新加坡校友会
              </p>
              <p className="hidden text-xs tracking-[0.24em] text-[var(--bit-muted)] sm:block">
                BIT SINGAPORE ALUMNI ASSOCIATION
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-7 text-sm text-[var(--bit-muted)] xl:flex">
              <a href="#positioning" className="transition-colors hover:text-[var(--bit-forest)]">
                校友会定位
              </a>
              <a href="#services" className="transition-colors hover:text-[var(--bit-forest)]">
                服务体系
              </a>
              <a href="#events" className="transition-colors hover:text-[var(--bit-forest)]">
                活动计划
              </a>
              <a href="#join" className="transition-colors hover:text-[var(--bit-forest)]">
                校友登记
              </a>
            </nav>
            <a
              href="#join"
              className="rounded-full bg-[var(--bit-forest)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--bit-forest-strong)]"
            >
              校友登记
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(circle_at_top_left,rgba(181,140,87,0.18),transparent_52%),radial-gradient(circle_at_right,rgba(18,58,36,0.14),transparent_46%)]" />
          <div className="mx-auto max-w-7xl px-6 pb-20 pt-14 md:px-8 lg:pb-24">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
              <div>
                <div className="inline-flex rounded-full border border-[var(--bit-line)] bg-white/88 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--bit-forest)] shadow-sm">
                  Institutional Website Refresh
                </div>

                <div className="mt-6 inline-flex rounded-[30px] border border-[var(--bit-line)] bg-white px-5 py-4 shadow-[var(--bit-shadow)]">
                  <Image
                    src="/images/bit-logo.png"
                    alt="北京理工大学校名 LOGO"
                    width={220}
                    height={160}
                    unoptimized
                    priority
                    className="h-auto w-[180px] sm:w-[220px]"
                  />
                </div>

                <h1 className="mt-8 max-w-4xl font-[family:var(--font-display)] text-5xl font-semibold tracking-tight text-[var(--bit-ink)] md:text-7xl">
                  一套可以交付给学校，也能让校友立刻开始使用的校友会官网。
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--bit-muted)]">
                  这一版不再只是“展示页面”，而是以正式机构网站的标准重新组织品牌、信息和使用流程，让北京理工大学新加坡校友会在学校视角与校友视角下都足够成熟、可信且可持续。
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#positioning"
                    className="rounded-full bg-[var(--bit-forest)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[color:rgba(18,58,36,0.18)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--bit-forest-strong)]"
                  >
                    查看整体方案
                  </a>
                  <a
                    href="#join"
                    className="rounded-full border border-[var(--bit-line)] bg-white px-6 py-3 text-sm font-semibold text-[var(--bit-ink)] transition-colors hover:border-[var(--bit-brick)] hover:text-[var(--bit-brick)]"
                  >
                    立即登记校友资料
                  </a>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {credibility.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[28px] border border-[var(--bit-line)] bg-white/88 p-5 shadow-sm"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--bit-brick)]">
                        {item.label}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[var(--bit-muted)]">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-8 top-12 hidden h-36 w-36 rounded-full bg-[color:rgba(181,140,87,0.18)] blur-3xl lg:block" />
                <div className="absolute -right-10 bottom-16 hidden h-40 w-40 rounded-full bg-[color:rgba(18,58,36,0.16)] blur-3xl lg:block" />

                <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_188px]">
                  <div className="overflow-hidden rounded-[36px] border border-[var(--bit-line)] bg-white shadow-[0_40px_90px_rgba(18,58,36,0.14)]">
                    <div className="relative aspect-[5/6] sm:aspect-[4/3] lg:aspect-[5/6]">
                      <Image
                        src="/images/sg-night.jpg"
                        alt="新加坡城市天际线"
                        fill
                        priority
                        quality={95}
                        sizes="(min-width: 1024px) 36vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-x-6 bottom-6 rounded-[28px] border border-white/12 bg-[color:rgba(9,23,15,0.74)] p-5 text-white backdrop-blur-md">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
                        Singapore Chapter
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                        用更清晰的品牌层与更成熟的服务层，重建校友会官网。
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-white/72">
                        城市照片负责建立真实氛围，校名与校徽回归干净的信息层，机构表达因此更稳、更正式。
                      </p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="rounded-[30px] border border-[var(--bit-line)] bg-white p-5 shadow-sm">
                      <Image
                        src="/images/bit-badge.png"
                        alt="北京理工大学校徽"
                        width={92}
                        height={92}
                        unoptimized
                        className="h-20 w-20"
                      />
                      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--bit-brick)]">
                        Brand Layer
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[var(--bit-muted)]">
                        校徽与校名不再被背景吞没，学校识别更稳定，也更适合正式场景。
                      </p>
                    </div>

                    <div className="overflow-hidden rounded-[30px] border border-[var(--bit-line)] bg-white shadow-sm">
                      <div className="relative aspect-[4/5]">
                        <Image
                          src="/images/bit-gate.jpg"
                          alt="北京理工大学校门"
                          fill
                          quality={95}
                          sizes="188px"
                          className="object-cover"
                        />
                      </div>
                      <div className="border-t border-[var(--bit-line)] bg-[var(--bit-paper)] p-4">
                        <p className="text-sm leading-7 text-[var(--bit-muted)]">
                          从母校出发，在新加坡建立一个长期有效的校友连接点。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="positioning" className="border-y border-[var(--bit-line)] bg-[color:rgba(255,255,255,0.8)] py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeading
              eyebrow="Positioning"
              title="把校友会从一张海报式首页，升级成一个真正可运营的机构界面。"
              description="学校需要的是一个可被交付、可被延续、可被管理的正式站点；校友需要的是清楚的定位、真实的入口和可信赖的联络方式。这一版把两者放在同一个设计逻辑里。"
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)]">
              <div className="grid gap-5 md:grid-cols-3">
                {deliveryHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[30px] border border-[var(--bit-line)] bg-[var(--bit-paper)] p-6 shadow-sm"
                  >
                    <div className="h-1.5 w-14 rounded-full bg-[var(--bit-brick)]" />
                    <h3 className="mt-5 text-2xl font-semibold text-[var(--bit-ink)]">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--bit-muted)]">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-[34px] border border-[var(--bit-line)] bg-white p-7 shadow-[var(--bit-shadow)] md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--bit-brick)]">
                  Delivery Notes
                </p>
                <h3 className="mt-5 font-[family:var(--font-display)] text-3xl font-semibold leading-tight text-[var(--bit-ink)]">
                  面向学校交付，最重要的是专业度、秩序感和后续可扩展性。
                </h3>
                <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--bit-muted)]">
                  <p>
                    这次设计不依赖夸张动效，也不依赖花哨背景来制造“高级感”，而是通过信息分层、材质关系、品牌秩序和可用性来建立正式网站应有的成熟度。
                  </p>
                  <p>
                    同时保留了轻量技术栈与现有后台，让未来继续增加活动页、理事会介绍、合作案例和更多校友服务时，不需要推翻重来。
                  </p>
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[24px] bg-[color:rgba(18,58,36,0.05)] p-5">
                    <p className="text-sm font-semibold text-[var(--bit-ink)]">学校可见价值</p>
                    <p className="mt-2 text-sm leading-7 text-[var(--bit-muted)]">
                      品牌统一、机构定位清楚、后续扩展和移交成本低。
                    </p>
                  </div>
                  <div className="rounded-[24px] bg-[color:rgba(141,63,47,0.06)] p-5">
                    <p className="text-sm font-semibold text-[var(--bit-ink)]">校友可见价值</p>
                    <p className="mt-2 text-sm leading-7 text-[var(--bit-muted)]">
                      入口清晰、登记可用、活动明确、联系路径稳定。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeading
              eyebrow="Service System"
              title="校友会不只是联谊，它需要一个可持续运作的服务体系。"
              description="围绕联络、职业、合作和社区四条主线来组织内容，能让校友理解校友会存在的意义，也让学校更容易判断它未来的成长方向。"
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {serviceAreas.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-[32px] border border-[var(--bit-line)] bg-white p-6 shadow-sm md:p-7"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[color:rgba(18,58,36,0.08)] text-lg font-semibold text-[var(--bit-forest)]">
                      0{index + 1}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--bit-brick)]">
                        {item.name}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-[var(--bit-ink)]">{item.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-[var(--bit-muted)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-[220px_minmax(0,1fr)_260px]">
              <div className="overflow-hidden rounded-[30px] border border-[var(--bit-line)] bg-white shadow-sm">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/bit-stadium.jpg"
                    alt="北京理工大学校园"
                    fill
                    quality={95}
                    sizes="220px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="rounded-[32px] border border-[var(--bit-line)] bg-[var(--bit-paper)] p-7 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--bit-brick)]">
                  Operating Principle
                </p>
                <h3 className="mt-5 font-[family:var(--font-display)] text-3xl font-semibold text-[var(--bit-ink)]">
                  先把基础连接打稳，再逐步叠加更丰富的校友服务。
                </h3>
                <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--bit-muted)]">
                  <p>第一阶段先让官网成为统一入口，解决“去哪里找组织、怎么登记、怎么联系”的基础问题。</p>
                  <p>第二阶段再逐步扩展活动专题页、理事会介绍、项目合作入口和更完整的校友数据库管理。</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-[30px] border border-[var(--bit-line)] bg-white shadow-sm">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/sg-merlion.jpg"
                    alt="新加坡鱼尾狮"
                    fill
                    quality={95}
                    sizes="260px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="border-y border-[var(--bit-line)] bg-[color:rgba(255,255,255,0.82)] py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeading
              eyebrow="Events & Workflow"
              title="活动计划与加入流程同时清楚，网站才能真正开始被使用。"
              description="把活动安排和校友登记流程放在同一段落里，是为了让来访者不只浏览，还能直接行动。"
            />

            <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)]">
              <div className="space-y-5">
                {eventPlan.map((event, index) => (
                  <div
                    key={event.title}
                    className="rounded-[30px] border border-[var(--bit-line)] bg-white p-6 shadow-sm"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <span className="rounded-full bg-[color:rgba(18,58,36,0.08)] px-3 py-1 text-xs font-semibold text-[var(--bit-forest)]">
                        {event.time}
                      </span>
                      <span className="text-sm text-[var(--bit-muted)]">{event.place}</span>
                    </div>
                    <div className="mt-6 flex items-start gap-4">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[color:rgba(141,63,47,0.08)] text-lg font-semibold text-[var(--bit-brick)]">
                        0{index + 1}
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-[var(--bit-ink)]">{event.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-[var(--bit-muted)]">{event.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-[34px] border border-[var(--bit-line)] bg-[var(--bit-paper)] p-7 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--bit-brick)]">
                  Join Workflow
                </p>
                <h3 className="mt-5 font-[family:var(--font-display)] text-3xl font-semibold leading-tight text-[var(--bit-ink)]">
                  一条足够轻、但已经能运转起来的校友登记路径。
                </h3>
                <div className="mt-7 space-y-5">
                  {serviceWorkflow.map((item) => (
                    <div
                      key={item.step}
                      className="rounded-[26px] border border-[var(--bit-line)] bg-white p-5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-sm font-semibold text-[var(--bit-brick)]">{item.step}</div>
                        <div>
                          <p className="text-lg font-semibold text-[var(--bit-ink)]">{item.title}</p>
                          <p className="mt-2 text-sm leading-7 text-[var(--bit-muted)]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-7 rounded-[26px] bg-[color:rgba(18,58,36,0.06)] px-5 py-4 text-sm leading-7 text-[var(--bit-muted)]">
                  这一流程依托现有后台名册系统实现，意味着网站不是“展示完就结束”，而是可以真实承接第一批校友使用。
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="join" className="py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
              <div>
                <SectionHeading
                  eyebrow="Registration"
                  title="现在，校友已经可以开始使用这个网站。"
                  description="这里不只是一个联系方式展示区，而是一个已经接通后台名册的公开登记入口。对于刚起步的校友会来说，这比“做很多功能但没人用”更实际，也更专业。"
                />

                <div className="mt-8 space-y-5">
                  <div className="rounded-[30px] border border-[var(--bit-line)] bg-white p-6 shadow-sm">
                    <p className="text-lg font-semibold text-[var(--bit-ink)]">适合当前阶段的原因</p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--bit-muted)]">
                      <li>资料项足够精简，降低填写阻力，便于第一批校友尽快开始登记。</li>
                      <li>后台已有名册系统承接，不需要再引入额外平台或复杂审批链。</li>
                      <li>后续可继续扩展为更完整的校友申请、活动报名和分组联络系统。</li>
                    </ul>
                  </div>

                  <div className="rounded-[30px] border border-[var(--bit-line)] bg-[var(--bit-paper)] p-6 shadow-sm">
                    <p className="text-lg font-semibold text-[var(--bit-ink)]">建议的后续迭代</p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--bit-muted)]">
                      <li>增加理事会与工作小组介绍页，提升组织公信力。</li>
                      <li>增加活动专题页与图文回顾，沉淀校友会年度成果。</li>
                      <li>根据真实运营情况再扩展更细的校友标签与行业分组。</li>
                    </ul>
                  </div>
                </div>
              </div>

              <PublicJoinForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--bit-line)] bg-[color:rgba(255,255,255,0.8)] py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-center md:flex-row md:items-center md:justify-between md:px-8 md:text-left">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <Image
              src="/images/bit-badge.png"
              alt="北京理工大学校徽"
              width={28}
              height={28}
              unoptimized
              className="h-7 w-7"
            />
            <p className="text-sm text-[var(--bit-muted)]">
              &copy; {new Date().getFullYear()} 北京理工大学新加坡校友会 · BIT Singapore Alumni Association
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 text-sm text-[var(--bit-muted)] md:justify-end">
            <a href="mailto:alumni-sg@bit.edu.cn" className="transition-colors hover:text-[var(--bit-forest)]">
              alumni-sg@bit.edu.cn
            </a>
            <Link href="/admin/dashboard" className="transition-colors hover:text-[var(--bit-forest)]">
              管理后台
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
