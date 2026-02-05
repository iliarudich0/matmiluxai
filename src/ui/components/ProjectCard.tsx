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
      'safezonex': '/icons/safezonex.png',
      'carfix-ai': '/icons/carfix.png',
      'healthsymptom-ai': '/icons/healthsymptom.png',
      'explainlike-ai': '/icons/explainlikeai.png',
      'interviewcoach-ai': '/icons/interviewcoach.png',
      'memoryboost-ai': '/icons/memoryboost.png',
      'contractscan-ai': '/icons/contractscan.png',
      'studyplanner-ai': '/icons/studyplanner.png'
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
        <div className="inline-flex items-center gap-2 text-white/90 text-sm handwrite">
          {lang === 'pl' ? 'Zobacz projekt' : 'View project'}
          <span className="cta-arrow opacity-0 transition-opacity duration-300 group-hover:opacity-100">→</span>
        </div>
      </div>
    </a>
  );
}
