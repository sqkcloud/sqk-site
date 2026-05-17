'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useLocale } from '@/components/locale-provider';
import { content } from '@/lib/content';

export default function NewsDetailPage() {
  const params = useParams<{ slug: string }>();
  const { locale } = useLocale();
  const t = content[locale];
  const article = t.newsCards.find((item) => item.slug === params.slug) ?? t.newsCards[0];
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
      <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">{article.tag}</div>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight text-slate-950">{article.title}</h1>
      <p className="mt-6 text-lg leading-8 text-slate-600">{article.body}</p>
      <div className="asset-frame mt-10 h-80 border border-slate-200">
        <img src={params.slug === 'medical-imaging' ? '/qmedic-card.png' : params.slug === 'quantum-hpc' ? '/qtau-qmc.png' : '/hero-main.png'} alt={article.title} style={{ objectPosition: 'center top' }} />
      </div>
      <div className="mt-10 space-y-5 text-slate-600 leading-8">
        <p>This is a reusable news detail template intended for future milestones, partnership announcements, investor updates, and product communications.</p>
        <p>The layout can later be connected to a CMS or static content pipeline. For now, it acts as a polished placeholder that keeps the SQK story coherent across strategy, healthcare, quantum-HPC, and commercialization themes.</p>
      </div>
      <Link href="/news" className="mt-10 inline-block text-sm font-medium text-blue-700">← Back to News</Link>
    </main>
  );
}
