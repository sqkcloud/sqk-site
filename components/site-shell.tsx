'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLocale } from './locale-provider';
import { content, Locale } from '@/lib/content';
import { Globe, ChevronDown } from 'lucide-react';

const navLinkBase =
  'relative rounded-lg px-1 py-2 transition-colors after:absolute after:inset-x-1 after:-bottom-px after:h-0.5 after:origin-left after:rounded-full after:bg-blue-600 after:transition-transform after:duration-300';

// Scroll-spy: on the home page, report which in-page section is centered in the viewport.
function useActiveSection(pathname: string) {
  const [active, setActive] = useState('');
  useEffect(() => {
    if (pathname !== '/') {
      setActive('');
      return;
    }
    const ids = ['solutions', 'technology', 'applications'];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!els.length || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive((visible[0].target as HTMLElement).id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
  return active;
}

export function SiteHeader() {
  const { locale, setLocale } = useLocale();
  const t = content[locale];
  const locales: Locale[] = ['en', 'ko', 'fr'];
  const pathname = usePathname() ?? '/';
  const activeSection = useActiveSection(pathname);

  const navItems = [
    { label: t.nav.about, href: '/about', active: pathname === '/about' },
    { label: t.nav.solutions, href: '/#solutions', active: pathname === '/' && activeSection === 'solutions' },
    { label: t.nav.technology, href: '/#technology', active: pathname === '/' && activeSection === 'technology' },
    { label: t.nav.applications, href: '/#applications', active: pathname === '/' && activeSection === 'applications' },
    { label: t.nav.investors, href: '/investors', active: pathname === '/investors' },
    { label: t.nav.news, href: '/news', active: pathname.startsWith('/news') },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/65">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" className="group flex items-center gap-3 rounded-lg">
          <Image src="/sqk-logo-blue-transparent.png" alt="SQK" width={220} height={80} className="h-9 w-auto transition-transform duration-300 group-hover:scale-[1.03]" priority />
          <span className="hidden h-6 w-px bg-slate-200 sm:block" />
          <span className="hidden text-[0.7rem] font-medium uppercase tracking-[0.24em] text-slate-400 sm:block">Quantum&middot;AI&middot;HPC Platforms</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${navLinkBase} ${item.active ? 'text-blue-700 after:scale-x-100' : 'text-slate-600 hover:text-slate-900 after:scale-x-0 hover:after:scale-x-100'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/60 px-3 py-2 text-sm text-slate-700 transition-colors hover:border-slate-300 focus-within:border-blue-400">
            <Globe className="h-4 w-4 text-slate-400" />
            <select value={locale} onChange={(e) => setLocale(e.target.value as Locale)} className="appearance-none bg-transparent pr-1 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none">
              {locales.map((item) => <option key={item} value={item}>{content[item].localeLabel}</option>)}
            </select>
            <ChevronDown className="h-4 w-4 text-slate-400" />
          </div>
          <Link href="/contact" className={`hidden rounded-xl px-4 py-2 text-sm font-medium text-white shadow-brand-glow transition-all duration-200 hover:bg-blue-500 hover:shadow-brand-glow-lg sm:inline-flex ${pathname === '/contact' ? 'bg-blue-700' : 'bg-blue-600'}`}>{t.nav.contact}</Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const { locale } = useLocale();
  const t = content[locale];
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Image src="/sqk-logo-blue-transparent.png" alt="SQK" width={220} height={80} className="h-9 w-auto" />
            <p className="mt-4 text-sm leading-6 text-slate-500">Validated, secure Quantum-AI-HPC platforms for high-trust industries.</p>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-6 text-sm">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Company</span>
              <Link href="/about" className="text-slate-600 transition-colors hover:text-blue-700">{t.nav.about}</Link>
              <Link href="/investors" className="text-slate-600 transition-colors hover:text-blue-700">{t.nav.investors}</Link>
              <Link href="/news" className="text-slate-600 transition-colors hover:text-blue-700">{t.nav.news}</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Platform</span>
              <Link href="/#solutions" className="text-slate-600 transition-colors hover:text-blue-700">{t.nav.solutions}</Link>
              <Link href="/#technology" className="text-slate-600 transition-colors hover:text-blue-700">{t.nav.technology}</Link>
              <Link href="/#applications" className="text-slate-600 transition-colors hover:text-blue-700">{t.nav.applications}</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Get in touch</span>
              <Link href="/contact" className="text-slate-600 transition-colors hover:text-blue-700">{t.nav.contact}</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium text-slate-600">&copy; 2026 SQK Cloud Inc. All rights reserved.</p>
          <p className="text-slate-400">{t.footer.line}</p>
        </div>
      </div>
    </footer>
  );
}

export function SectionTitle({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3">
        <span className="eyebrow-rule" aria-hidden />
        <span className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">{eyebrow}</span>
      </div>
      <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-950 lg:text-[2.75rem] lg:leading-[1.08]">{title}</h2>
      {body ? <p className="mt-4 text-pretty text-lg leading-8 text-slate-600">{body}</p> : null}
    </div>
  );
}
