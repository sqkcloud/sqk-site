'use client';
import { ArrowUpRight } from 'lucide-react';
import { useLocale } from '@/components/locale-provider';
import { SectionTitle } from '@/components/site-shell';
import { Reveal } from '@/components/reveal';
import { content } from '@/lib/content';

export default function NewsPage() {
  const { locale } = useLocale();
  const t = content[locale];
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <SectionTitle eyebrow={t.newsPage.eyebrow} title={t.newsPage.title} body={t.newsPage.intro} />
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-6">
        {t.newsCards.map((item, index) => (
          <Reveal as="article" key={item.slug} delay={index * 60} className={`group ${index === 0 ? 'md:col-span-2 xl:col-span-3' : 'xl:col-span-2'}`}>
            <a href={item.href} target="_blank" rel="noreferrer" className={`flex h-full flex-col rounded-3xl border border-slate-200/80 p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${index === 0 ? 'bg-gradient-to-br from-blue-50 via-white to-white' : 'bg-white'}`}>
              <div className="flex items-center justify-between gap-3"><div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">{item.tag}</div><ArrowUpRight className="h-4 w-4 text-blue-700 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></div>
              <h3 className={`mt-4 font-semibold tracking-tight text-slate-950 ${index === 0 ? 'text-3xl leading-tight' : 'text-2xl'}`}>{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.body}</p>
              <div className="mt-6 text-sm font-medium text-blue-700">{t.newsPage.readMore} →</div>
            </a>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
