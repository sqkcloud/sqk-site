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
    <main className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-24">
      <Link href="/news" className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 transition-colors hover:text-blue-800">← Back to News</Link>
      <div className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">{article.tag}</div>
      <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tightest text-slate-950">{article.title}</h1>
      <p className="mt-6 text-pretty text-lg leading-8 text-slate-600">{article.body}</p>
      <div className="asset-frame mt-10 h-80">
        <img src={params.slug === 'medical-imaging' ? '/qmedic-card.png' : params.slug === 'quantum-hpc' ? '/qtau-qmc.png' : '/hero-main.png'} alt={article.title} style={{ objectPosition: 'center top' }} />
      </div>
      <div className="mt-10 space-y-5 leading-8 text-slate-600">
        <p>SQK organizes public updates around commercialization, validation, publications, and ecosystem traction so that customers and investors can follow how QMedic and the broader Quantum-AI-HPC stack are progressing.</p>
        <p>These milestone pages help connect healthcare adoption, hybrid HPC execution, industrial collaboration, and platform evidence into one coherent operating narrative.</p>
      </div>
    </main>
  );
}
