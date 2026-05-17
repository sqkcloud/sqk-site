'use client';
import Link from 'next/link';
import { ArrowUpRight, Atom, Award, BrainCircuit, Cpu, FlaskConical, Globe2, HeartPulse, LayoutPanelTop, Server, SlidersHorizontal, Sparkles, TrendingUp } from 'lucide-react';
import { useLocale } from '@/components/locale-provider';
import { SectionTitle } from '@/components/site-shell';
import { content } from '@/lib/content';


const proofIcons = [Award, Sparkles, TrendingUp, Atom, Cpu, FlaskConical, HeartPulse, Globe2];
const platformIcons = [Atom, SlidersHorizontal, BrainCircuit, Server, LayoutPanelTop];
const subtleButton = 'rounded-xl border border-blue-200 bg-white px-6 py-3.5 text-sm font-medium text-blue-700 transition hover:bg-blue-50';

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
      <section className="border-b border-slate-200 bg-white">
        <div className="w-full overflow-hidden border-b border-slate-200 bg-slate-50">
          <img
            src="/hero-main.png"
            alt="SQK platform ecosystem"
            className="h-[360px] w-full object-cover object-center sm:h-[460px] lg:h-[620px]"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">{t.hero.badge}</div>
            <h1 className="mt-8 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">{t.hero.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 lg:text-xl">{t.hero.body}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#solutions" className={subtleButton}>{t.hero.primary}</a>
              <div className="flex flex-wrap gap-4"><Link href="/investors" className={subtleButton}>{t.hero.secondary}</Link><a href="/SQK_Company_Overview_2026.md" download className={subtleButton}>{t.cta.overview}</a></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-6 px-6 py-8 text-sm lg:grid-cols-4 xl:grid-cols-8 lg:px-8">
          {t.proofPoints.map((item, index) => { const Icon = proofIcons[index] ?? Award; return (
            <div key={item} className="flex items-center gap-3 text-slate-700">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-blue-700"><Icon className="h-5 w-5" strokeWidth={2} /></div>
              <span>{item}</span>
            </div>
          )})}
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle eyebrow={t.sections.solutionsEyebrow} title={t.sections.solutionsTitle} body={t.sections.solutionsBody} />
          <Link href="/about" className="text-sm font-medium text-blue-700">{t.nav.about} →</Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          {t.solutionCards.map((solution) => {
            const actions = solutionActions[solution.name as keyof typeof solutionActions];
            return (
            <article key={solution.name} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
              <h3 className="text-2xl font-semibold text-blue-700">{solution.name}</h3>
              <p className="mt-3 min-h-[110px] text-sm leading-6 text-slate-600">{solution.blurb}</p>
              <div className="asset-frame mt-5 h-40 border border-slate-200">
                <img src={solution.image} alt={solution.name} style={{ objectPosition: solution.position }} />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {(['paper', 'news', 'demo'] as const).map((kind) => {
                  const href = actions[kind];
                  const external = isExternalLink(href);
                  return (
                    <a
                      key={kind}
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                      className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-3 py-2 text-xs font-medium text-blue-700 transition hover:bg-blue-50"
                    >
                      {labels[kind]}
                    </a>
                  );
                })}
              </div>
            </article>
          )})}
        </div>
      </section>

      <section id="technology" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <SectionTitle eyebrow={t.sections.technologyEyebrow} title={t.sections.technologyTitle} body={t.sections.technologyBody} />
              <div className="grid gap-4 sm:grid-cols-5">
                {t.platformFlow.map((item, index) => { const Icon = platformIcons[index] ?? Atom; return (
                  <div key={item} className="flex items-center gap-4 sm:flex-col sm:gap-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-blue-700"><Icon className="h-7 w-7" strokeWidth={2} /></div>
                    <div className="text-sm font-medium leading-6 text-slate-700 sm:text-center">{item}</div>
                    {index < t.platformFlow.length - 1 && <div className="hidden text-slate-300 sm:block">→</div>}
                  </div>
                )})}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="applications" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle eyebrow={t.sections.applicationsEyebrow} title={t.sections.applicationsTitle} body={t.sections.applicationsBody} />
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {t.applicationCards.map((card) => (
            <div key={card.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">{card.title.split(' ')[0]}</div>
              <h3 className="mt-3 text-3xl font-semibold text-slate-950">{card.title}</h3>
              <p className="mt-4 text-slate-600 leading-7">{card.body}</p>
              <div className="asset-frame mt-6 h-56 border border-slate-200"><img src={card.image} alt={card.title} style={{ objectPosition: 'center top' }} /></div>
            </div>
          ))}
        </div>
      </section>


      <section id="business-model" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle eyebrow={t.businessModelSection.eyebrow} title={t.businessModelSection.title} body={t.businessModelSection.intro} />
          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {t.businessModelSection.items.map((item) => (
              <div key={item.asset} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">{item.asset}</div>
                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                  <div><span className="font-semibold text-slate-950">Initial:</span> {item.initial}</div>
                  <div><span className="font-semibold text-slate-950">Expansion:</span> {item.expansion}</div>
                  <div><span className="font-semibold text-slate-950">Buyer / Partner:</span> {item.buyer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="go-to-market" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle eyebrow={t.goToMarketSection.eyebrow} title={t.goToMarketSection.title} body={t.goToMarketSection.intro} />
        <div className="mt-10 grid gap-5">
          {t.goToMarketSection.steps.map((step, index) => (
            <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">{index + 1}</div>
              <p className="pt-1 text-base leading-7 text-slate-700">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="growth-roadmap" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle eyebrow={t.roadmapSection.eyebrow} title={t.roadmapSection.title} body={t.roadmapSection.intro} />
          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {t.roadmapSection.phases.map((phase) => (
              <div key={phase.timeframe} className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">{phase.timeframe}</div>
                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                  <div><span className="font-semibold text-slate-950">Commercial:</span> {phase.commercial}</div>
                  <div><span className="font-semibold text-slate-950">Product:</span> {phase.product}</div>
                  <div><span className="font-semibold text-slate-950">Investor KPI:</span> {phase.kpi}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-2xl font-semibold text-slate-950">{t.roadmapSection.proceedsTitle}</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {t.roadmapSection.proceeds.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm leading-7 text-slate-600">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="investors" className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <SectionTitle eyebrow={t.sections.investorsEyebrow} title={t.sections.investorsTitle} body={t.sections.investorsBody} />
          <div className="grid gap-5 sm:grid-cols-2">
            {t.investorCards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-950">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle eyebrow={t.sections.newsEyebrow} title={t.sections.newsTitle} body={t.sections.newsBody} />
          <Link href="/news" className="text-sm font-medium text-blue-700">{t.nav.news} →</Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-6">
          {t.newsCards.map((item, index) => (
            <a key={item.slug} href={item.href} target="_blank" rel="noreferrer" className={`rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 ${index === 0 ? 'md:col-span-2 xl:col-span-3 bg-gradient-to-br from-blue-50 via-white to-white' : 'xl:col-span-2'}`}>
              <div className="flex items-center justify-between gap-3"><div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">{item.tag}</div><ArrowUpRight className="h-4 w-4 text-blue-700" /></div>
              <h3 className={`mt-4 font-semibold text-slate-950 ${index === 0 ? 'text-3xl leading-tight' : 'text-2xl'}`}>{item.title}</h3>
              <p className="mt-4 text-slate-600 leading-7">{item.body}</p>
              <div className="mt-6 text-sm font-medium text-blue-700">Open source →</div>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="flex flex-col gap-8 rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 to-blue-950 p-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">{t.sections.contactEyebrow}</div>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">{t.sections.contactTitle}</h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">{t.sections.contactBody}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
              >
                {t.cta.contact}
              </Link>
              <a
                href="/SQK_Investor_White_Paper_2026_Public_Release.pdf"
                className="rounded-xl border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
              >
                {t.cta.whitepaper}
              </a>
              <a
                href="/SQK_Company_Overview_2026.md"
                download
                className="rounded-xl border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
              >
                {t.cta.overview}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
