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
      'tiklawyer': '/icons/tiklawyer.png',
      'safezonex': '/icons/safezonex.png'
    };
    return iconMap[slug];
  };

  const icon = getProjectIcon(project.slug);

  return (
    <a
      className={`group relative block overflow-hidden rounded-3xl border-2 border-white/20 bg-white/5 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-2/20`}
      href={href}
      aria-label={`${project.name} — ${lang === 'pl' ? 'Zobacz szczegóły' : 'View details'}`}
      style={{
        backgroundImage: icon ? `url(${icon})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: icon ? 'transparent' : 'rgba(8, 9, 14, 0.95)',
        minHeight: '300px'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content overlay */}
      <div className="relative flex h-full flex-col items-end justify-end p-6">
        {/* CTA Button - transparent light on logo */}
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 text-white font-medium shadow-lg hover:shadow-xl">
          {lang === 'pl' ? 'Zobacz projekt' : 'View project'}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
}
