import React from 'react';
import type { Language } from '../content/i18n';

export function Header({
  mode
}: {
  lang: Language;
  setLang: (lang: Language) => void;
  mode: 'home' | 'privacy' | 'project' | 'other';
}) {
  const prefix = mode === 'home' ? '' : '/';

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-5 gap-y-3 px-5 py-4">
        <a href="/" className="inline-flex items-center gap-3" aria-label="Milux Tech home">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-sm font-semibold text-white">
            MT
          </span>
          <span className="text-sm font-semibold text-slate-950">Milux Tech</span>
        </a>

        <nav aria-label="Primary navigation" className="order-3 flex w-full items-center gap-4 overflow-x-auto md:order-none md:w-auto md:gap-6">
          <a className="text-sm font-medium text-slate-600 hover:text-slate-950" href={`${prefix}#products`}>
            Products
          </a>
          <a className="text-sm font-medium text-slate-600 hover:text-slate-950" href={`${prefix}#ecosystem`}>
            Ecosystem
          </a>
          <a className="text-sm font-medium text-slate-600 hover:text-slate-950" href={`${prefix}#founders`}>
            Founders
          </a>
          <a className="text-sm font-medium text-slate-600 hover:text-slate-950" href={`${prefix}#contact`}>
            Contact
          </a>
        </nav>

        <a
          className="hidden rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800 sm:inline-flex"
          href={`${prefix}#products`}
        >
          First launch: Rdix
        </a>
      </div>
    </header>
  );
}
