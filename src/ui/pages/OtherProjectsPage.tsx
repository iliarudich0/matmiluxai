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
          {otherProjects.map((project) => (
            <div key={project.name} className="group relative overflow-hidden rounded-3xl border-2 border-white/15 bg-gradient-to-br from-white/5 via-white/2 to-transparent p-6 shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

              <div className="absolute left-4 top-4 z-20">
                <img src={`/icons/${project.name.toLowerCase()}.png`} alt={project.name} className="h-16 w-16 rounded-lg border border-white/20 bg-white/10 p-1" />
              </div>

              {project.status === 'unconfirmed' && (
                <div className="absolute left-1/2 top-2 z-30 transform -translate-x-1/2 rounded-md bg-red-500/20 px-2 py-1 text-xs font-semibold text-red-300 border border-red-500/30">
                  Unconfirmed
                </div>
              )}

              <div className="relative z-10 pt-24">
                <div className="text-xl font-bold text-white drop-shadow mb-3">{project.name}</div>
                <div className="text-sm text-white/90 mb-3 leading-relaxed">
                  {project.focus[lang]}
                </div>
                <div className="text-sm text-white/70 italic leading-relaxed">
                  {project.description[lang]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
