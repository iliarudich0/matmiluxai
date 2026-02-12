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
      pl: 'przetrwaniu w sytuacjach kryzysowych i katastrofach',
      en: 'survival in crisis situations and disasters',
      ru: 'выживанию в кризисных ситуациях и катастрофах'
    },
    description: {
      pl: 'Rewolucyjna aplikacja AI wspierająca przetrwanie w sytuacjach kryzysowych: natychmiastowe wskazówki, mapy ewakuacji, komunikacja awaryjna i praktyczne porady przetrwania.',
      en: 'AI app focused on survival in crisis situations: instant guidance, evacuation maps, emergency communication, and practical survival tips.',
      ru: 'Приложение ИИ, ориентированное на выживание в кризисных ситуациях: мгновенные рекомендации, карты эвакуации, аварийная связь и практические советы по выживанию.'
    },
    status: 'unconfirmed'
  },
];

export const otherProjects: OtherProject[] = [...baseOtherProjects];
