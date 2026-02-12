import React from 'react';
import type { Language } from '../content/i18n';
import type { Project } from '../content/projects';

export function ProjectCard({ project, lang }: { project: Project; lang: Language }) {
  const href = project.slug === 'tik-mathik' ? '/projects/tik-mathik/' : `/projects/${project.slug}/`;

  const accentRing = project.accent === 'neon-2' ? 'hover:shadow-[0_0_0_1px_rgb(var(--c-neon-2)/0.25),0_0_32px_rgb(var(--c-neon-2)/0.12)]' : 'hover:shadow-glow';

  const confirmedSlugs = new Set(['adtiklocker', 'tik-mathik', 'tikdrive', 'tiklawyer', 'tiklang-ai', 'ai-house-redesign', 'taxpilot-ai']);
  const isConfirmed = confirmedSlugs.has(project.slug);
  const statusLabel = isConfirmed
    ? {
        pl: 'Potwierdzone — w realizacji',
        en: 'Confirmed — in progress',
        ru: 'Подтверждено — в работе'
      }
    : {
        pl: 'Niepewne — jeszcze nie wiadomo',
        en: 'Unconfirmed — not sure yet',
        ru: 'Не подтверждено — ещё неизвестно'
      };
  const statusText = lang === 'pl' ? statusLabel.pl : lang === 'ru' ? statusLabel.ru : statusLabel.en;
  const statusBadgeClass = isConfirmed
    ? 'border-emerald-200/50 bg-gradient-to-r from-emerald-400/30 to-neon-2/20 text-white shadow-[0_0_22px_rgba(16,185,129,0.65)]'
    : 'border-white/30 bg-black/55 text-white/90 shadow-[0_0_14px_rgba(255,255,255,0.2)]';

  // Get the appropriate icon for each project
  const getProjectIcon = (slug: string) => {
    const iconMap: Record<string, string> = {
      'adtiklocker': '/icons/adtiklocker.png',
      'tik-mathik': '/icons/tik-mathik.png',
      'tikdrive': '/icons/tikdrive.png',
      'tiklang-ai': '/icons/tiklang-ai.png',
      'tiklawyer': '/icons/tiklawyer.png',
      'safezonex': '/icons/safezonex.png',
      'carfix-ai': '/icons/carfix.png',
      'healthsymptom-ai': '/icons/healthsymptom.png',
      'explainlike-ai': '/icons/explainlikeai.png',
      'interviewcoach-ai': '/icons/interviewcoach.png',
      'memoryboost-ai': '/icons/memoryboost.png',
      'contractscan-ai': '/icons/contractscan.png',
      'studyplanner-ai': '/icons/studyplanner.png',
      'taxpilot-ai': '/icons/logotaxpiot.png',
      'ai-house-redesign': '/icons/homeredesign.png',
      'audio-summariser': '/icons/sumxaudioai.png'
    };
    return iconMap[slug];
  };

  const icon = getProjectIcon(project.slug);

  return (
    <a
      className={`group relative block overflow-hidden rounded-3xl border-2 border-white/20 bg-white/5 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-2/20`}
      href={href}
      aria-label={`${project.name} — ${lang === 'pl' ? 'Zobacz szczegóły' : lang === 'ru' ? 'Смотреть детали' : 'View details'}`}
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

      <div className={`absolute left-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[12px] font-semibold uppercase tracking-wide backdrop-blur-md ${statusBadgeClass}`}>
        <span className={`flex h-5 w-5 items-center justify-center rounded-full border border-white/30 text-xs ${isConfirmed ? 'animate-pulse bg-emerald-400/35 text-white' : 'bg-white/15 text-white/80'}`}>
          {isConfirmed ? '!' : '?'}
        </span>
        <span>{statusText}</span>
      </div>

      {!icon ? (
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <span className="text-center text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-neon-1 via-neon-2 to-neon-3 bg-clip-text text-transparent drop-shadow-2xl">
            {project.name}
          </span>
        </div>
      ) : null}

      {/* Content overlay */}
      <div className="relative flex h-full flex-col items-end justify-end p-6">
        {/* CTA Button - transparent light on logo */}
        <div className="inline-flex items-center gap-2 text-white/90 text-sm handwrite">
          {lang === 'pl' ? 'Zobacz projekt' : lang === 'ru' ? 'Смотреть проект' : 'View project'}
          <span className="cta-arrow opacity-0 transition-opacity duration-300 group-hover:opacity-100">→</span>
        </div>
      </div>
    </a>
  );
}
