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

    description: {
      pl: 'Rewolucyjna aplikacja AI ratująca życie w sytuacjach kryzysowych. Zapewnia natychmiastową pomoc, mapy ewakuacji, komunikację awaryjną i wskazówki przetrwania.',
      en: 'Revolutionary AI app saving lives in crisis situations. Provides instant help, evacuation maps, emergency communication, and survival guidance.',
      ru: 'Революционное приложение ИИ, спасающее жизни в кризисных ситуациях. Обеспечивает мгновенную помощь, карты эвакуации, аварийную связь и рекомендации по выживанию.'
    },
    status: 'unconfirmed'
  },
];

export const otherProjects: OtherProject[] = [...baseOtherProjects];
