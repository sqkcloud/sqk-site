'use client';

import { useLocale } from '@/components/locale-provider';
import { SectionTitle } from '@/components/site-shell';
import { Reveal } from '@/components/reveal';
import { btnChip } from '@/components/ui';
import { content } from '@/lib/content';

const investorStats = {
  en: [
    ['5', 'Core platforms'],
    ['3+', 'Strategic collaboration tracks'],
    ['2', 'Investor downloads'],
    ['2024–2026', 'Visible growth window'],
  ],
  ko: [
    ['5', '핵심 플랫폼'],
    ['3+', '전략 협업 축'],
    ['2', '투자자 다운로드'],
    ['2024–2026', '가시적 성장 구간'],
  ],
  fr: [
    ['5', 'Plateformes cœur'],
    ['3+', 'Axes de collaboration stratégique'],
    ['2', 'Téléchargements investisseurs'],
    ['2024–2026', 'Fenêtre de croissance visible'],
  ],
};

export default function InvestorsPage() {
  const { locale } = useLocale();
  const t = content[locale].investorsPage;
  const stats = investorStats[locale];
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <SectionTitle eyebrow={t.eyebrow} title={t.title} body={t.intro} />

      <div className="mt-12 grid gap-4 md:grid-cols-4">
        {stats.map(([value, label], index) => (
          <Reveal key={label} delay={index * 60} className="rounded-2xl border border-slate-200/80 bg-gradient-to-b from-slate-50 to-white p-6 shadow-card">
            <div className="text-3xl font-semibold tracking-tight text-blue-700">{value}</div>
            <div className="mt-2 text-sm text-slate-600">{label}</div>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-card">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{t.thesisTitle}</h3>
          <p className="mt-4 leading-8 text-slate-600">{t.thesisBody}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/SQK_Investor_White_Paper_2026_Public_Release.pdf" className={`${btnChip} px-5 py-3 text-sm`}>{content[locale].cta.whitepaper}</a>
            <a href="/SQK_Company_Overview_2026.md" download className={`${btnChip} px-5 py-3 text-sm`}>{content[locale].cta.overview}</a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-b from-slate-50 to-white p-8 shadow-card">
          <h3 className="text-2xl font-semibold text-slate-950">{t.timelineTitle}</h3>
          <div className="mt-8 hidden items-stretch gap-3 lg:flex">
            {t.timeline.map((item, index) => (
              <div key={item.year} className="flex flex-1 flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card transition-colors hover:border-blue-200">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{item.year}</div>
                <div className="text-lg font-semibold tracking-tight text-slate-950">{item.title}</div>
                <p className="text-sm leading-6 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-5 lg:hidden">
            {t.timeline.map((item) => (
              <div key={item.year} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{item.year}</div>
                <div className="mt-2 text-lg font-semibold text-slate-950">{item.title}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {t.pillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={index * 60} className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card transition-colors hover:border-blue-200">
            <h3 className="text-xl font-semibold tracking-tight text-slate-950">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{pillar.body}</p>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
