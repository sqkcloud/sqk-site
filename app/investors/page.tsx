'use client';

import { useLocale } from '@/components/locale-provider';
import { SectionTitle } from '@/components/site-shell';
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
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionTitle eyebrow={t.eyebrow} title={t.title} body={t.intro} />

      <div className="mt-10 grid gap-4 md:grid-cols-4">
        {stats.map(([value, label]) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="text-3xl font-semibold text-slate-950">{value}</div>
            <div className="mt-2 text-sm text-slate-600">{label}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
          <h3 className="text-2xl font-semibold text-slate-950">{t.thesisTitle}</h3>
          <p className="mt-4 leading-8 text-slate-600">{t.thesisBody}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/SQK_Investor_White_Paper_2026_Public_Release.pdf" className="rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-medium text-blue-700 transition hover:bg-blue-50">{content[locale].cta.whitepaper}</a>
            <a href="/SQK_Company_Overview_2026.md" download className="rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-medium text-blue-700 transition hover:bg-blue-50">{content[locale].cta.overview}</a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-8 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
          <h3 className="text-2xl font-semibold text-slate-950">{t.timelineTitle}</h3>
          <div className="mt-8 hidden items-center gap-4 lg:flex">
            {t.timeline.map((item, index) => (
              <div key={item.year} className="flex flex-1 items-center gap-4">
                <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{item.year}</div>
                  <div className="text-lg font-semibold text-slate-950">{item.title}</div>
                  <p className="text-sm leading-6 text-slate-600">{item.body}</p>
                </div>
                {index < t.timeline.length - 1 ? <div className="h-1 flex-1 rounded-full bg-blue-200" /> : null}
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

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {t.pillars.map((card) => (
          <div key={card.title} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-slate-950">{card.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{card.body}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
