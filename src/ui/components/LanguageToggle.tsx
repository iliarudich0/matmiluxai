import React from 'react';
import type { Language } from '../content/i18n';

export function LanguageToggle({
  lang,
  onChange,
  compact = false
}: {
  lang: Language;
  onChange: (lang: Language) => void;
  compact?: boolean;
}) {
  const base = compact ? 'text-xs px-2 py-1' : 'text-sm px-3 py-2';
  const btn = `rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition ${base}`;

  return (
    <div className="inline-flex items-center gap-2" role="group" aria-label="Language selector">
      <button
        type="button"
        className={`${btn} ${lang === 'pl' ? 'shadow-glow' : ''}`}
        onClick={() => onChange('pl')}
        aria-pressed={lang === 'pl'}
      >
        PL
      </button>
      <button
        type="button"
        className={`${btn} ${lang === 'en' ? 'shadow-glow' : ''}`}
        onClick={() => onChange('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <button
        type="button"
        className={`${btn} ${lang === 'ru' ? 'shadow-glow' : ''}`}
        onClick={() => onChange('ru')}
        aria-pressed={lang === 'ru'}
      >
        RU
      </button>
    </div>
  );
}
