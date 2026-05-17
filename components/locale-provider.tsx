'use client';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Locale, content } from '@/lib/content';

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextType>({ locale: 'en', setLocale: () => {} });

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  useEffect(() => {
    const stored = window.localStorage.getItem('sqk-locale') as Locale | null;
    if (stored && content[stored]) setLocaleState(stored);
  }, []);
  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem('sqk-locale', next);
  };
  const value = useMemo(() => ({ locale, setLocale }), [locale]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}
