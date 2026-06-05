import React from 'react';
import { Layout } from '../components/Layout';
import { useLanguage } from '../content/i18n';
import type { Project } from '../content/projects';

export function ProjectPage({ project }: { project: Project }) {
  const [lang, setLang] = useLanguage();

  const tagline =
    lang === 'pl' ? project.tagline.pl : lang === 'ru' ? project.tagline.ru ?? project.tagline.en : project.tagline.en;
  const description =
    lang === 'pl'
      ? project.description.pl
      : lang === 'ru'
        ? project.description.ru ?? project.description.en
        : project.description.en;
  const features =
    lang === 'pl' ? project.features.pl : lang === 'ru' ? project.features.ru ?? project.features.en : project.features.en;
  const ctaNote =
    lang === 'pl' ? project.ctaNote?.pl : lang === 'ru' ? project.ctaNote?.ru ?? project.ctaNote?.en : project.ctaNote?.en;

  return (
    <Layout lang={lang} setLang={setLang} mode="project">
      <section className="grid gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <div className="kicker">{project.label}</div>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950 md:text-5xl">{project.name}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn btn-primary" href="/#contact">
              Contact
            </a>
            <a className="btn btn-ghost" href="/#products">
              Back to products
            </a>
          </div>
        </div>

        <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold text-slate-950">Status</div>
          <p className="mt-3 text-sm leading-6 text-slate-600">{project.status}</p>
          {ctaNote ? <p className="mt-4 text-sm font-medium text-teal-700">{ctaNote}</p> : null}
        </aside>
      </section>

      <section className="grid gap-6 pb-16 lg:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-950">Overview</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-950">Key points</h2>
          <ul className="mt-4 space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex gap-3 text-sm leading-6 text-slate-600">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
