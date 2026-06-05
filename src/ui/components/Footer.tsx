import React from 'react';
import type { Language } from '../content/i18n';

export function Footer({
  mode
}: {
  lang: Language;
  setLang: (lang: Language) => void;
  mode: 'home' | 'privacy' | 'project' | 'other';
}) {
  const prefix = mode === 'home' ? '' : '/';

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-7 px-5 py-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="text-sm font-semibold text-slate-950">Milux Tech</div>
          <div className="mt-2 text-sm text-slate-500">&copy; 2026 Milux Tech. All rights reserved.</div>
          <div className="mt-3 text-sm text-slate-500">Rdix is planned as the first public product of Milux Tech.</div>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <a className="text-sm text-slate-500 hover:text-slate-950" href={`${prefix}#products`}>
            Products
          </a>
          <a className="text-sm text-slate-500 hover:text-slate-950" href={`${prefix}#contact`}>
            Contact
          </a>
          <a className="text-sm text-slate-500 hover:text-slate-950" href="/privacy/">
            Privacy Policy
          </a>
          <a className="text-sm text-slate-500 hover:text-slate-950" href="/terms.html">
            Terms
          </a>
          <a className="text-sm text-slate-500 hover:text-slate-950" href="/cookies.html">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}
