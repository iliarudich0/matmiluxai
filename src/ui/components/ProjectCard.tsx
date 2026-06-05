import React from 'react';
import type { Language } from '../content/i18n';
import type { Project } from '../content/projects';

export function ProjectCard({ project, lang }: { project: Project; lang: Language }) {
  const description =
    lang === 'pl' ? project.shortDescription.pl : lang === 'ru' ? project.shortDescription.ru ?? project.shortDescription.en : project.shortDescription.en;

  return (
    <a
      className="group block rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-md"
      href={`/projects/${project.slug}/`}
      aria-label={`${project.name} details`}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs font-semibold uppercase text-teal-700">{project.label}</span>
        <span className="h-2 w-2 rounded-full bg-teal-400" aria-hidden="true" />
      </div>
      <div className="mt-5 text-2xl font-semibold text-slate-950">{project.name}</div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      <div className="mt-6 text-sm font-semibold text-slate-900">
        View product <span aria-hidden="true">-&gt;</span>
      </div>
    </a>
  );
}
