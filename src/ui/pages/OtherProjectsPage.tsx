import React from 'react';
import { useLanguage } from '../content/i18n';
import { otherProjects } from '../content/otherProjects';
import { projects } from '../content/projects';
import { Layout } from '../components/Layout';

export function OtherProjectsPage() {
  const [lang, setLang] = useLanguage();

  const title = lang === 'pl' ? 'Pozostałe projekty' : lang === 'ru' ? 'Остальные проекты' : 'Other projects';

  return (
    <Layout lang={lang} setLang={setLang} mode="other">
      <section className="mt-10">
        <h1 className="h2">{title}</h1>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group relative overflow-hidden rounded-3xl border-2 border-white/15 bg-gradient-to-br from-white/5 via-white/2 to-transparent p-6 shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

            <div className="absolute left-4 top-4 z-20">
              <img src="/icons/safezonex.png" alt="SafeZoneX" className="h-12 w-12 rounded-lg border border-white/20 bg-white/10 p-1" />
            </div>

            <div className="relative z-10 pt-16">
              <div className="text-xl font-bold text-white drop-shadow">SafeZoneX</div>
              <div className="mt-2 text-sm text-white/80">
                {lang === 'pl'
                  ? 'Aplikacja survival na każdy wypadek - wojny, trzęsienia ziemi, powodzie, globalne katastrofy. Znajdź najbliższe bezpieczne schronienia i przygotuj się na kryzys.'
                  : lang === 'ru'
                    ? 'Приложение для выживания при войнах, землетрясениях, наводнениях и других катастрофах. Найдите ближайшие убежища и подготовьтесь к кризису.'
                    : 'Survival app for every emergency - wars, earthquakes, floods, global disasters. Find the nearest safe shelters and prepare for crisis.'}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
