'use client';
import { useLocale } from '@/components/locale-provider';
import { SectionTitle } from '@/components/site-shell';
import { content } from '@/lib/content';

export default function AboutPage() {
  const { locale } = useLocale();
  const t = content[locale];
  const a = t.aboutPage;
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionTitle eyebrow={a.eyebrow} title={a.title} body={a.intro} />
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8">
          <h3 className="text-2xl font-semibold text-slate-950">{a.missionTitle}</h3>
          <p className="mt-4 leading-8 text-slate-600">{a.missionBody}</p>
          <h3 className="mt-8 text-2xl font-semibold text-slate-950">{a.whyTitle}</h3>
          <p className="mt-4 leading-8 text-slate-600">{a.whyBody}</p>
          <ul className="mt-8 space-y-3 text-slate-700">
            {a.bullets.map((bullet) => <li key={bullet} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">{bullet}</li>)}
          </ul>
        </div>
        <div className="space-y-6">
          <div className="asset-frame h-72 border border-slate-200"><img src="/hero-main.png" alt="SQK hero scene" style={{ objectPosition: 'center top' }} /></div>
          <div className="asset-frame h-72 border border-slate-200"><img src="/sqs-collage.png" alt="SuperQuantumStation collage" style={{ objectPosition: 'center 54%' }} /></div>
        </div>
      </div>
    </main>
  );
}
