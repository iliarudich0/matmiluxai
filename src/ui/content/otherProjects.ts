export type OtherProject = {
  name: string;
  focus: {
    pl: string;
    en: string;
    ru: string;
  };
  description: {
    pl: string;
    en: string;
    ru: string;
  };
  status: 'confirmed' | 'unconfirmed';
};

const baseOtherProjects: OtherProject[] = [
  {
    name: 'SafeZoneX',
    focus: {
      pl: 'wsparcie w przetrwaniu podczas kryzysów i katastrof',
      en: 'survival support during crises and disasters',
      ru: 'поддержка выживания при кризисах и катастрофах'
    },
    description: {
      pl: 'SafeZoneX — aplikacja AI zaprojektowana, by wspierać przetrwanie w sytuacjach kryzysowych: szybkie instrukcje pierwszej pomocy, interaktywne mapy ewakuacji, bezpieczne kanały komunikacji i praktyczne porady przetrwania.',
      en: 'SafeZoneX — an AI assistant for surviving crises and disasters: rapid first-aid instructions, interactive evacuation maps, secure emergency communications, and practical survival guidance.',
      ru: 'SafeZoneX — ИИ‑помощник для выживания в кризисных ситуациях и катастрофах: быстрые инструкции первой помощи, интерактивные карты эвакуации, защищённая аварийная связь и практические советы по выживанию.'
    },
    status: 'unconfirmed'
  },
];

export const otherProjects: OtherProject[] = [...baseOtherProjects];
