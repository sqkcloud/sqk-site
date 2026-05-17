'use client';
import { ArrowUpRight } from 'lucide-react';
import { useLocale } from '@/components/locale-provider';
import { SectionTitle } from '@/components/site-shell';
import { content } from '@/lib/content';

export default function NewsPage() {
  const { locale } = useLocale();
  const t = content[locale];
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionTitle eyebrow={t.newsPage.eyebrow} title={t.newsPage.title} body={t.newsPage.intro} />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-6">
        {t.newsCards.map((item, index) => (
          <a key={item.slug} href={item.href} target="_blank" rel="noreferrer" className={`rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 ${index === 0 ? 'md:col-span-2 xl:col-span-3 bg-gradient-to-br from-blue-50 via-white to-white' : 'xl:col-span-2'}`}>
            <div className="flex items-center justify-between gap-3"><div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">{item.tag}</div><ArrowUpRight className="h-4 w-4 text-blue-700" /></div>
            <h3 className={`mt-4 font-semibold text-slate-950 ${index === 0 ? 'text-3xl leading-tight' : 'text-2xl'}`}>{item.title}</h3>
            <p className="mt-4 text-slate-600 leading-7">{item.body}</p>
            <div className="mt-6 text-sm font-medium text-blue-700">{t.newsPage.readMore} →</div>
          </a>
        ))}
      </div>
    </main>
  );
}
