import React from 'react';
import type { Language } from '../content/i18n';
import { LanguageToggle } from './LanguageToggle';

export function Footer({
  lang,
  setLang
}: {
  lang: Language;
  setLang: (lang: Language) => void;
  mode: 'home' | 'privacy' | 'project';
}) {
  const homeHref = '/';
  const privacyHref = '/privacy/';

  return (
    <footer className="border-t border-white/10 bg-bg/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-sm font-semibold">MiLux AI Labs</div>
          <div className="mt-1 text-xs text-muted">© 2026 MiLux AI Labs</div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a className="text-sm text-muted hover:text-text" href={homeHref}>
            {lang === 'pl' ? 'Strona główna' : 'Home'}
          </a>
          <a className="text-sm text-muted hover:text-text" href={homeHref + '#projects'}>
            {lang === 'pl' ? 'Projekty' : 'Projects'}
          </a>
          <a className="text-sm text-muted hover:text-text" href={privacyHref}>
            {lang === 'pl' ? 'Polityka prywatności' : 'Privacy'}
          </a>
          <a className="text-sm text-muted hover:text-text" href={homeHref + '#contact'}>
            {lang === 'pl' ? 'Kontakt' : 'Contact'}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3" aria-label={lang === 'pl' ? 'Media społecznościowe' : 'Social media'}>
            <a className="text-sm text-muted hover:text-text" href="https://twitter.com" target="_blank" rel="noreferrer">
              X
            </a>
            <a className="text-sm text-muted hover:text-text" href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="text-sm text-muted hover:text-text" href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          <LanguageToggle lang={lang} onChange={setLang} />
        </div>
      </div>
    </footer>
  );
}
