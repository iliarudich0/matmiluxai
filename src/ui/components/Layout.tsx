import React from 'react';
import type { Language } from '../content/i18n';
import { Footer } from './Footer';
import { Header } from './Header';

export function Layout({
  lang,
  setLang,
  children,
  mode
}: React.PropsWithChildren<{
  lang: Language;
  setLang: (lang: Language) => void;
  mode: 'home' | 'privacy' | 'project';
}>) {
  return (
    <div className="min-h-screen">
      <Header lang={lang} setLang={setLang} mode={mode} />
      <main className="mx-auto w-full max-w-6xl px-5 pb-14 pt-10">{children}</main>
      <Footer lang={lang} setLang={setLang} mode={mode} />
    </div>
  );
}
