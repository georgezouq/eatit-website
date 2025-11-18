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

export type ReviewItem = {
  quote: string;
  author: string;
  role: string;
};

export type FaqItem = {
  question: string;
  answer: string;
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
    faq: string;
    blog: {
      label: string;
      href: string;
    };
    language: string;
    menuLabel: string;
    menuIntro: string;
    closeMenu: string;
  };
  auth: {
    login: string;
    signup: string;
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
    download: {
      id: string;
      badge?: string;
      title: string;
      subtitle: string;
      highlights: string[];
      storeLabel: string;
      apple: {
        href: string;
        label: string;
      };
      google: {
        href: string;
        label: string;
      };
      comingSoon: string;
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
      stats?: {
        value: string;
        label: string;
      };
      items?: ReviewItem[];
    };
    faq?: {
      id: string;
      title: string;
      subtitle: string;
      items: FaqItem[];
    };
  };
  footer: {
    tagline: string;
    rights: string;
    socialsLabel: string;
    supportLabel: string;
    supportEmail: string;
    faqLabel: string;
    supportChannels?: {
      type: string;
      label: string;
      value: string;
    }[];
    socialLinks?: {
      icon: string;
      href: string;
      label: string;
    }[];
    navGroups?: {
      title: string;
      links: {
        label: string;
        href: string;
      }[];
    }[];
  };
  notFound: {
    title: string;
    description: string;
    backButton: string;
  };
  blog: {
    sidebar: {
      downloadTitle: string;
      downloadCta: string;
    };
  };
};
