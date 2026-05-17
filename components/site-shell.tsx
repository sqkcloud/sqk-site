'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from './locale-provider';
import { content, Locale } from '@/lib/content';
import { Globe, ChevronDown } from 'lucide-react';

export function SiteHeader() {
  const { locale, setLocale } = useLocale();
  const t = content[locale];
  const locales: Locale[] = ['en', 'ko', 'fr'];
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="flex w-full items-center justify-between px-4 py-3.5 lg:px-6">
        <Link href="/" className="flex items-center gap-3 rounded-lg outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0">
          <Image src="/sqk-logo-blue-transparent.png" alt="SQK" width={220} height={80} className="h-10 w-auto" priority />
          <div className="hidden sm:block">
            <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Quantum-AI-HPC Platforms</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-slate-700 lg:flex">
          <Link href="/about" className="rounded-lg px-2 py-2 transition-colors hover:text-blue-700 focus:outline-none focus-visible:outline-none focus-visible:ring-0">{t.nav.about}</Link>
          <Link href="/#solutions" className="rounded-lg px-2 py-2 transition-colors hover:text-blue-700 focus:outline-none focus-visible:outline-none focus-visible:ring-0">{t.nav.solutions}</Link>
          <Link href="/#technology" className="rounded-lg px-2 py-2 transition-colors hover:text-blue-700 focus:outline-none focus-visible:outline-none focus-visible:ring-0">{t.nav.technology}</Link>
          <Link href="/#applications" className="rounded-lg px-2 py-2 transition-colors hover:text-blue-700 focus:outline-none focus-visible:outline-none focus-visible:ring-0">{t.nav.applications}</Link>
          <Link href="/investors" className="rounded-lg px-2 py-2 transition-colors hover:text-blue-700 focus:outline-none focus-visible:outline-none focus-visible:ring-0">{t.nav.investors}</Link>
          <Link href="/news" className="rounded-lg px-2 py-2 transition-colors hover:text-blue-700 focus:outline-none focus-visible:outline-none focus-visible:ring-0">{t.nav.news}</Link>
          <Link href="/contact" className="rounded-lg px-2 py-2 transition-colors hover:text-blue-700 focus:outline-none focus-visible:outline-none focus-visible:ring-0">{t.nav.contact}</Link>
        </nav>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700 transition-colors hover:border-slate-300 focus-within:border-slate-300 focus-within:outline-none focus-within:ring-0">
            <Globe className="h-4 w-4" />
            <select value={locale} onChange={(e) => setLocale(e.target.value as Locale)} className="appearance-none bg-transparent pr-1 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none">
              {locales.map((item) => <option key={item} value={item}>{content[item].localeLabel}</option>)}
            </select>
            <ChevronDown className="h-4 w-4 text-slate-400" />
          </div>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const { locale } = useLocale();
  const t = content[locale];
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>{t.footer.line}</div>
        <div className="flex gap-5">
          <Link href="/about">{t.nav.about}</Link>
          <Link href="/investors">{t.nav.investors}</Link>
          <Link href="/news">{t.nav.news}</Link>
          <Link href="/contact">{t.nav.contact}</Link>
        </div>
      </div>
    </footer>
  );
}

export function SectionTitle({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="max-w-3xl">
      <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">{eyebrow}</div>
      <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">{title}</h2>
      {body ? <p className="mt-4 text-lg leading-8 text-slate-600">{body}</p> : null}
    </div>
  );
}
