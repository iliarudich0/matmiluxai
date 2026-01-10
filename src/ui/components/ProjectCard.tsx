import React from 'react';
import type { Language } from '../content/i18n';
import type { Project } from '../content/projects';

export function ProjectCard({ project, lang }: { project: Project; lang: Language }) {
  const href = project.slug === 'tik-mathik' ? '/projects/tik-mathik/' : `/projects/${project.slug}/`;

  const accentRing = project.accent === 'neon-2' ? 'hover:shadow-[0_0_0_1px_rgb(var(--c-neon-2)/0.25),0_0_32px_rgb(var(--c-neon-2)/0.12)]' : 'hover:shadow-glow';

  return (
    <a
      className={`card block transition hover:-translate-y-0.5 motion-reduce:transform-none ${accentRing}`}
      href={href}
      aria-label={`${project.name} — ${lang === 'pl' ? 'Zobacz szczegóły' : 'View details'}`}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-neon-2" aria-hidden="true">
            <path
              d="M12 2l1.8 5.8L20 10l-6.2 2.2L12 18l-1.8-5.8L4 10l6.2-2.2L12 2z"
              fill="currentColor"
              opacity="0.9"
            />
          </svg>
        </div>
        <div>
          <div className="text-base font-semibold">{project.name}</div>
          <div className="mt-1 text-sm text-muted">{lang === 'pl' ? project.shortDescription.pl : project.shortDescription.en}</div>
        </div>
      </div>
    </a>
  );
}
