import './globals.css';
import type { Metadata } from 'next';
import { LocaleProvider } from '@/components/locale-provider';
import { SiteFooter, SiteHeader } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'SQK | Quantum-AI-HPC Platforms',
  description: 'SQK corporate and investor-facing website',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <LocaleProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </LocaleProvider>
      </body>
    </html>
  );
}
