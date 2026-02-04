import React from 'react';
import type { Language } from '../content/i18n';
import type { Project } from '../content/projects';

export function ProjectCard({ project, lang }: { project: Project; lang: Language }) {
  const href = project.slug === 'tik-mathik' ? '/projects/tik-mathik/' : `/projects/${project.slug}/`;

  const accentRing = project.accent === 'neon-2' ? 'hover:shadow-[0_0_0_1px_rgb(var(--c-neon-2)/0.25),0_0_32px_rgb(var(--c-neon-2)/0.12)]' : 'hover:shadow-glow';

  // Get the appropriate icon for each project
  const getProjectIcon = (slug: string) => {
    const iconMap: Record<string, string> = {
      'tik-mathik': '/icons/tik-mathik.png',
      'tikdrive': '/icons/tikdrive.png',
      'tikeverylang': '/icons/tikeverylang.png',
      'tiklawyer': '/icons/tiklawyer.png'
    };
    return iconMap[slug] || '/icons/default.png';
  };

  return (
    <a
      className={`card block transition hover:-translate-y-1 motion-reduce:transform-none ${accentRing} p-6`}
      href={href}
      aria-label={`${project.name} — ${lang === 'pl' ? 'Zobacz szczegóły' : 'View details'}`}
    >
      <div className="flex flex-col items-center text-center gap-4">
        {/* Large logo section */}
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl border-2 border-white/20 bg-white/5 overflow-hidden shadow-lg">
          <img
            src={getProjectIcon(project.slug)}
            alt={`${project.name} logo`}
            className="h-16 w-16 object-contain"
            onError={(e) => {
              // Fallback to star icon if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.parentElement?.querySelector('.fallback-icon') as HTMLElement;
              if (fallback) fallback.style.display = 'block';
            }}
          />
          <svg viewBox="0 0 24 24" className="h-12 w-12 text-neon-2 fallback-icon" style={{ display: 'none' }} aria-hidden="true">
            <path
              d="M12 2l1.8 5.8L20 10l-6.2 2.2L12 18l-1.8-5.8L4 10l6.2-2.2L12 2z"
              fill="currentColor"
              opacity="0.9"
            />
          </svg>
        </div>

        {/* Content section */}
        <div className="flex-1 min-w-0">
          <div className="text-lg font-bold mb-2">{project.name}</div>
          <div className="text-sm text-muted leading-relaxed mb-3">{lang === 'pl' ? project.shortDescription.pl : project.shortDescription.en}</div>

          {/* CTA Button */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium">
            {lang === 'pl' ? 'Zobacz projekt' : 'View project'}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}
