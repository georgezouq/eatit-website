export type SectionCard = {
  title: string;
  description: string;
  bullets?: string[];
};

export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  cta: string;
  features: string[];
  popular?: boolean;
};

export type LocaleDictionary = {
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  nav: {
    home: string;
    features: string;
    pricing: string;
    download: string;
    blog: {
      label: string;
      href: string;
    };
    language: string;
    menuLabel: string;
    menuIntro: string;
    closeMenu: string;
  };
  hero: {
    badge: string;
    title: string;
    highlight: string;
    titleSuffix?: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    note: string;
    rating: {
      value: string;
      label: string;
      caption: string;
    };
    bullets: string[];
    visual: {
      title: string;
      items: string[];
      pill: string;
    };
  };
  sections: {
    why: {
      id: string;
      title: string;
      subtitle: string;
      items: SectionCard[];
    };
    core: {
      id: string;
      title: string;
      subtitle: string;
      cards: SectionCard[];
    };
    assist: {
      id: string;
      title: string;
      subtitle: string;
      items: SectionCard[];
    };
    smart: {
      id: string;
      title: string;
      subtitle: string;
      bullets: string[];
    };
    pricing: {
      id: string;
      title: string;
      subtitle: string;
      plans: PricingPlan[];
      note: string;
    };
    privacy: {
      id: string;
      title: string;
      description: string;
      cta: string;
    };
    reviews: {
      id: string;
      title: string;
      subtitle: string;
      quote: string;
      author: string;
      role: string;
    };
  };
  footer: {
    tagline: string;
    rights: string;
    socialsLabel: string;
    supportLabel: string;
    supportEmail: string;
  };
};
