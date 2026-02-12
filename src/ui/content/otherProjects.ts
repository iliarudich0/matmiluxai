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
      ru: 'выживании в кризисных ситуациях и катастрофах'
    },
    description: {
      pl: 'Dostarcza wskazówki, mapy ewakuacji i narzędzia do komunikacji w sytuacjach awaryjnych.',
      en: 'Provides guidance, evacuation maps, and communication tools for emergency situations.',
      ru: 'Предоставляет рекомендации, карты эвакуации и инструменты связи для чрезвычайных ситуаций.'
    },
    status: 'unconfirmed'
  },
];

export const otherProjects: OtherProject[] = [...baseOtherProjects];
