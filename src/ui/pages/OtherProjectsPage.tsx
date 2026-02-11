import React from 'react';
import { useLanguage } from '../content/i18n';
import { otherProjects } from '../content/otherProjects';
import { projects } from '../content/projects';
import { Layout } from '../components/Layout';

export function OtherProjectsPage() {
  const [lang, setLang] = useLanguage();

  const coreSlugs = new Set(['adtiklocker', 'tik-mathik', 'tiklawyer', 'tikdrive', 'tikeverylang']);
  const movedProjects = projects.filter((project) => !coreSlugs.has(project.slug));

  const title = lang === 'pl' ? 'Pozostałe projekty' : lang === 'ru' ? 'Остальные проекты' : 'Other projects';
  const subtitle =
    lang === 'pl'
      ? 'Lista koncepcji i pomysłów — wszystkie oznaczone jako niepewne.'
      : lang === 'ru'
        ? 'Список концепций и идей — все помечены как неподтверждённые.'
        : 'A list of concepts and ideas — all marked as unconfirmed.';

  const badgeText =
    lang === 'pl'
      ? 'Niepewne — jeszcze nie wiadomo'
      : lang === 'ru'
        ? 'Не подтверждено — ещё неизвестно'
        : 'Unconfirmed — not sure yet';

  const makeDescription = (focus: { pl: string; en: string; ru: string }) => {
    if (lang === 'pl') return `Krótki opis: AI pomaga w ${focus.pl} i oszczędza czas.`;
    if (lang === 'ru') return `Короткое описание: ИИ помогает в ${focus.ru} и экономит время.`;
    return `Short description: AI helps with ${focus.en} and saves time.`;
  };

  const pickText = (value: { pl: string; en: string; ru?: string }) => {
    if (lang === 'pl') return value.pl;
    if (lang === 'ru') return value.ru ?? value.en;
    return value.en;
  };

  return (
    <Layout lang={lang} setLang={setLang} mode="other">
      <section className="mt-10">
        <div className="kicker">{title}</div>
        <h1 className="h2 mt-2">{title}</h1>
        {movedProjects.length > 0 ? (
          <div className="mt-6">
            <div className="kicker">
              {lang === 'pl'
                ? 'Przeniesione ze strony głównej'
                : lang === 'ru'
                  ? 'Перенесено с главной'
                  : 'Moved from the homepage'}
            </div>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {movedProjects.map((project) => (
                <div
                  key={project.slug}
                  className="group relative overflow-hidden rounded-3xl border-2 border-white/15 bg-gradient-to-br from-white/5 via-white/2 to-transparent p-6 shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

                  <div className="absolute left-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[12px] font-semibold uppercase tracking-wide text-white/90 shadow-[0_0_14px_rgba(255,255,255,0.2)] backdrop-blur-md">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/30 bg-white/15 text-xs text-white/80">
                      ?
                    </span>
                    <span>{badgeText}</span>
                  </div>

                  <div className="relative z-10 pt-12">
                    <div className="text-xl font-bold text-white drop-shadow">{project.name}</div>
                    <div className="mt-2 text-sm text-white/80">{pickText(project.shortDescription)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <p className="p mt-6 max-w-3xl">{subtitle}</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <div
              key={project.name}
              className="group relative overflow-hidden rounded-3xl border-2 border-white/15 bg-gradient-to-br from-white/5 via-white/2 to-transparent p-6 shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

              <div className="absolute left-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[12px] font-semibold uppercase tracking-wide text-white/90 shadow-[0_0_14px_rgba(255,255,255,0.2)] backdrop-blur-md">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/30 bg-white/10 text-xs text-white/80">
                  ?
                </span>
                <span>{badgeText}</span>
              </div>

              <div className="relative z-10 pt-12">
                <div className="text-xl font-bold text-white drop-shadow">{project.name}</div>
                <div className="mt-2 text-sm text-white/80">{makeDescription(project.focus)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
