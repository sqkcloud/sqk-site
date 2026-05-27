'use client';
import Link from 'next/link';
import { ArrowUpRight, Atom, Award, BrainCircuit, Cpu, FlaskConical, Globe2, HeartPulse, LayoutPanelTop, Rocket, Server, SlidersHorizontal, Sparkles, Target, TrendingUp } from 'lucide-react';
import { useLocale } from '@/components/locale-provider';
import { SectionTitle } from '@/components/site-shell';
import { Reveal } from '@/components/reveal';
import { btnPrimary, btnSecondary, btnGhost, btnChip, btnDark, card } from '@/components/ui';
import { content } from '@/lib/content';


const proofIcons = [Award, Sparkles, TrendingUp, Atom, Cpu, FlaskConical, HeartPulse, Globe2];
const platformIcons = [Atom, SlidersHorizontal, BrainCircuit, Server, LayoutPanelTop];
const businessIcons = [HeartPulse, Award, Server, Atom, Globe2];

const actionLabels = {
  en: { paper: 'Paper', news: 'News', demo: 'Demo' },
  ko: { paper: '논문', news: '뉴스', demo: '데모' },
  fr: { paper: 'Publication', news: 'Actualité', demo: 'Démo' },
} as const;

const solutionActions = {
  QTAU: {
    paper: '/contact',
    news: '/news',
    demo: '#applications',
  },
  Qukkos: {
    paper: 'https://ieeexplore.ieee.org/document/11165960',
    news: '/news',
    demo: '/contact',
  },
  QPINN: {
    paper: '/contact',
    news: '/news',
    demo: '/contact',
  },
  QMedic: {
    paper: 'https://ieeexplore.ieee.org/document/11468144',
    news: 'https://kr.aving.net/news/articleView.html?idxno=1810067',
    demo: '/contact',
  },
  SQS: {
    paper: '/contact',
    news: 'https://www.ces.tech/ces-innovation-awards/2024/super-quantum-station/',
    demo: '/contact',
  },
} as const;

function isExternalLink(href: string) {
  return href.startsWith('http://') || href.startsWith('https://');
}

export default function HomePage() {
  const { locale } = useLocale();
  const t = content[locale];
  const labels = actionLabels[locale];
  return (
    <main>
      <section className="relative border-b border-slate-200 bg-white">
        <div className="relative w-full overflow-hidden bg-slate-50">
          <img
            src="/hero-main.png"
            alt="SQK platform ecosystem"
            className="h-[320px] w-full object-cover object-center sm:h-[420px] lg:h-[560px]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>
        <div className="hero-bg">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-700 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                {t.hero.badge}
              </div>
              <h1 className="mt-8 text-balance text-5xl font-semibold tracking-tightest text-slate-950 sm:text-6xl lg:text-[4.75rem] lg:leading-[0.98]">{t.hero.title}</h1>
              <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-slate-600 lg:text-xl">{t.hero.body}</p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a href="#solutions" className={btnPrimary}>{t.hero.primary}<ArrowUpRight className="h-4 w-4" /></a>
                <Link href="/investors" className={btnSecondary}>{t.hero.secondary}</Link>
                <a href="/SQK_Company_Overview_2026.md" download className={`${btnGhost} px-4 py-3.5`}>{t.cta.overview}<ArrowUpRight className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.proofPoints.map((item, index) => { const Icon = proofIcons[index] ?? Award; return (
              <Reveal key={item} delay={index * 50} className="group flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card-hover">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-200/70 bg-gradient-to-b from-blue-50 to-white text-blue-600 shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5">
                  <Icon className="h-5 w-5" strokeWidth={1.9} />
                </div>
                <span className="pt-0.5 text-sm font-medium leading-snug text-slate-700">{item}</span>
              </Reveal>
            )})}
          </div>
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle eyebrow={t.sections.solutionsEyebrow} title={t.sections.solutionsTitle} body={t.sections.solutionsBody} />
          <Link href="/about" className={btnGhost}>{t.nav.about}<ArrowUpRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {t.solutionCards.map((solution, index) => {
            const actions = solutionActions[solution.name as keyof typeof solutionActions];
            return (
            <Reveal as="article" key={solution.name} delay={index * 70} className={`group relative flex h-full flex-col overflow-hidden ${card} p-5`}>
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-blue-600 to-sky-400 transition-transform duration-300 group-hover:scale-x-100" />
              <h3 className="text-2xl font-semibold text-blue-700">{solution.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{solution.blurb}</p>
              <div className="mt-auto pt-6">
                <div className="asset-frame h-40">
                  <img src={solution.image} alt={solution.name} className="transition-transform duration-500 group-hover:scale-[1.04]" style={{ objectPosition: solution.position }} />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {(['paper', 'news', 'demo'] as const).map((kind) => {
                    const href = actions[kind];
                    const external = isExternalLink(href);
                    return (
                      <a
                        key={kind}
                        href={href}
                        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                        className={btnChip}
                      >
                        {labels[kind]}
                      </a>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          )})}
        </div>
      </section>

      <section id="technology" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <Reveal className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-soft lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <SectionTitle eyebrow={t.sections.technologyEyebrow} title={t.sections.technologyTitle} body={t.sections.technologyBody} />
              <div className="grid gap-5 sm:grid-cols-5">
                {t.platformFlow.map((item, index) => { const Icon = platformIcons[index] ?? Atom; return (
                  <div key={item} className="group flex items-center gap-4 sm:flex-col sm:gap-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-200/70 bg-gradient-to-b from-blue-50 to-white text-blue-600 shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5"><Icon className="h-7 w-7" strokeWidth={1.9} /></div>
                    <div className="text-sm font-medium leading-6 text-slate-700 sm:text-center">{item}</div>
                  </div>
                )})}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="applications" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <SectionTitle eyebrow={t.sections.applicationsEyebrow} title={t.sections.applicationsTitle} body={t.sections.applicationsBody} />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {t.applicationCards.map((appCard, index) => (
            <Reveal key={appCard.title} delay={index * 80} className={`group flex h-full flex-col ${card} p-8`}>
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">{appCard.title.split(' ')[0]}</div>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{appCard.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{appCard.body}</p>
              <div className="asset-frame mt-auto h-56"><img src={appCard.image} alt={appCard.title} className="transition-transform duration-500 group-hover:scale-[1.04]" style={{ objectPosition: 'center top' }} /></div>
            </Reveal>
          ))}
        </div>
      </section>


      <section id="business-model" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionTitle eyebrow={t.businessModelSection.eyebrow} title={t.businessModelSection.title} body={t.businessModelSection.intro} />
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {t.businessModelSection.items.map((item, index) => {
              const ProductIcon = businessIcons[index] ?? Atom;
              const stages = [
                { label: 'Initial', text: item.initial, Icon: Rocket, target: false },
                { label: 'Expansion', text: item.expansion, Icon: TrendingUp, target: false },
                { label: 'Buyer / Partner', text: item.buyer, Icon: Target, target: true },
              ];
              return (
              <Reveal key={item.asset} delay={index * 60} className={`group flex w-full flex-col ${card} p-8 md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]`}>
                <div className="flex items-center gap-3 border-b border-slate-200/70 pb-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-200/70 bg-gradient-to-b from-blue-50 to-white text-blue-600 shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5"><ProductIcon className="h-5 w-5" strokeWidth={1.9} /></div>
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{item.asset}</div>
                </div>
                <div className="mt-5 space-y-5">
                  {stages.map((stage, sIdx) => (
                    <div key={stage.label} className={`flex gap-3.5 ${sIdx > 0 ? 'border-t border-slate-100 pt-5' : ''}`}>
                      <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${stage.target ? 'bg-blue-600 text-white shadow-brand-glow' : 'bg-blue-50 text-blue-600'}`}><stage.Icon className="h-3.5 w-3.5" strokeWidth={2.2} /></div>
                      <div>
                        <div className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-500">{stage.label}</div>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{stage.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            )})}
          </div>
        </div>
      </section>

      <section id="go-to-market" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <SectionTitle eyebrow={t.goToMarketSection.eyebrow} title={t.goToMarketSection.title} body={t.goToMarketSection.intro} />
        <div className="mt-12 grid gap-4">
          {t.goToMarketSection.steps.map((step, index) => (
            <Reveal key={step} delay={index * 50} className="flex items-start gap-5 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card transition-colors hover:border-blue-200">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white shadow-brand-glow">{index + 1}</div>
              <p className="pt-1.5 text-base leading-7 text-slate-700">{step}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="growth-roadmap" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionTitle eyebrow={t.roadmapSection.eyebrow} title={t.roadmapSection.title} body={t.roadmapSection.intro} />
          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {t.roadmapSection.phases.map((phase, index) => (
              <Reveal key={phase.timeframe} delay={index * 70} className="relative rounded-3xl border border-slate-200/80 bg-gradient-to-b from-slate-50 to-white p-8 shadow-card">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{phase.timeframe}</div>
                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                  <div><span className="font-semibold text-slate-950">Commercial:</span> {phase.commercial}</div>
                  <div><span className="font-semibold text-slate-950">Product:</span> {phase.product}</div>
                  <div><span className="font-semibold text-slate-950">Investor KPI:</span> {phase.kpi}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 rounded-3xl border border-slate-200/80 bg-slate-50 p-8">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{t.roadmapSection.proceedsTitle}</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {t.roadmapSection.proceeds.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200/80 bg-white px-5 py-4 text-sm leading-7 text-slate-600 shadow-sm">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="investors" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-24">
          <SectionTitle eyebrow={t.sections.investorsEyebrow} title={t.sections.investorsTitle} body={t.sections.investorsBody} />
          <div className="grid gap-5 sm:grid-cols-2">
            {t.investorCards.map((item, index) => (
              <Reveal key={item.title} delay={index * 60} className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card transition-colors hover:border-blue-200">
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle eyebrow={t.sections.newsEyebrow} title={t.sections.newsTitle} body={t.sections.newsBody} />
          <Link href="/news" className={btnGhost}>{t.nav.news}<ArrowUpRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-6">
          {t.newsCards.map((item, index) => (
            <Reveal as="article" key={item.slug} delay={index * 60} className={`group ${index === 0 ? 'md:col-span-2 xl:col-span-3' : 'xl:col-span-2'}`}>
              <a href={item.href} target="_blank" rel="noreferrer" className={`flex h-full flex-col rounded-3xl border border-slate-200/80 p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${index === 0 ? 'bg-gradient-to-br from-blue-50 via-white to-white' : 'bg-white'}`}>
                <div className="flex items-center justify-between gap-3"><div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">{item.tag}</div><ArrowUpRight className="h-4 w-4 text-blue-700 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></div>
                <h3 className={`mt-4 font-semibold tracking-tight text-slate-950 ${index === 0 ? 'text-3xl leading-tight' : 'text-2xl'}`}>{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.body}</p>
                <div className="mt-6 text-sm font-medium text-blue-700">Open source →</div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="relative flex flex-col gap-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-10 text-white shadow-soft lg:flex-row lg:items-end lg:justify-between lg:p-12">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl" />
            <div className="relative max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">{t.sections.contactEyebrow}</div>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight">{t.sections.contactTitle}</h2>
              <p className="mt-4 text-pretty text-lg leading-8 text-slate-300">{t.sections.contactBody}</p>
            </div>
            <div className="relative flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-medium text-slate-900 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-50">
                {t.cta.contact}<ArrowUpRight className="h-4 w-4" />
              </Link>
              <a href="/SQK_Investor_White_Paper_2026_Public_Release.pdf" className={btnDark}>{t.cta.whitepaper}</a>
              <a href="/SQK_Company_Overview_2026.md" download className={btnDark}>{t.cta.overview}</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
