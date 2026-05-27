'use client';
import { useLocale } from '@/components/locale-provider';
import { SectionTitle } from '@/components/site-shell';
import { Reveal } from '@/components/reveal';
import { content } from '@/lib/content';

export default function AboutPage() {
  const { locale } = useLocale();
  const t = content[locale];
  const a = t.aboutPage;
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <SectionTitle eyebrow={a.eyebrow} title={a.title} body={a.intro} />
      <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-card lg:p-10">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{a.missionTitle}</h3>
          <p className="mt-4 leading-8 text-slate-600">{a.missionBody}</p>
          <h3 className="mt-8 text-2xl font-semibold tracking-tight text-slate-950">{a.whyTitle}</h3>
          <p className="mt-4 leading-8 text-slate-600">{a.whyBody}</p>
          <ul className="mt-8 space-y-3 text-slate-700">
            {a.bullets.map((bullet) => <li key={bullet} className="flex gap-3 rounded-2xl border border-slate-200/80 bg-slate-50 px-4 py-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />{bullet}</li>)}
          </ul>
        </Reveal>
        <Reveal delay={120} className="space-y-6">
          <div className="asset-frame h-72"><img src="/hero-main.png" alt="SQK hero scene" style={{ objectPosition: 'center top' }} /></div>
          <div className="asset-frame h-72"><img src="/sqs-collage.png" alt="SuperQuantumStation collage" style={{ objectPosition: 'center 54%' }} /></div>
        </Reveal>
      </div>
    </main>
  );
}
