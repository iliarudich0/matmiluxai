import React from 'react';
import type { Language } from '../content/i18n';
import { LanguageToggle } from './LanguageToggle';

export function Header({
  lang,
  setLang,
  mode
}: {
  lang: Language;
  setLang: (lang: Language) => void;
  mode: 'home' | 'privacy' | 'project';
}) {
  const navLabel = lang === 'pl' ? 'Nawigacja' : lang === 'ru' ? 'Навигация' : 'Navigation';

  const homeHref = '/';
  const privacyHref = '/privacy/';

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a href={homeHref} className="group inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 shadow-glow">
            <span className="h-2 w-2 rounded-full bg-neon-2" />
          </span>
          <span className="text-sm font-semibold tracking-tight">MiLux AI Labs</span>
        </a>

        <nav aria-label={navLabel} className="hidden items-center gap-4 md:flex">
          {mode === 'home' ? (
            <>
              <a className="text-sm text-muted hover:text-text" href="#projects">
                {lang === 'pl' ? 'Projekty' : lang === 'ru' ? 'Проекты' : 'Projects'}
              </a>
              <a className="text-sm text-muted hover:text-text" href="#why">
                {lang === 'pl' ? 'Dlaczego' : lang === 'ru' ? 'Почему' : 'Why'}
              </a>
              <a className="text-sm text-muted hover:text-text" href="#roadmap">
                {lang === 'ru' ? 'Дорожная карта' : 'Roadmap'}
              </a>
              <a className="text-sm text-muted hover:text-text" href="#faq">
                {lang === 'ru' ? 'Вопросы и ответы' : 'FAQ'}
              </a>
              <a className="text-sm text-muted hover:text-text" href="#contact">
                {lang === 'pl' ? 'Kontakt' : lang === 'ru' ? 'Контакты' : 'Contact'}
              </a>
            </>
          ) : (
            <>
              <a className="text-sm text-muted hover:text-text" href={homeHref}>
                {lang === 'pl' ? 'Strona główna' : lang === 'ru' ? 'Главная' : 'Home'}
              </a>
              <a className="text-sm text-muted hover:text-text" href={privacyHref}>
                {lang === 'pl' ? 'Polityka prywatności' : lang === 'ru' ? 'Политика конфиденциальности' : 'Privacy'}
              </a>
            </>
          )}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle lang={lang} onChange={setLang} compact />
        </div>
      </div>
    </header>
  );
}
