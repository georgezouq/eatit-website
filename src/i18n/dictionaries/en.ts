import type { LocaleDictionary } from "./types";

const en: LocaleDictionary = {
  metadata: {
    title: "EatIt — AI Nutrition Scanner & Coach",
    description:
      "EatIt instantly recognises calories, macros, allergens and additives from any meal or label, then delivers personalised nutrition coaching that keeps your goals on track.",
    keywords: [
      "EatIt",
      "nutrition app",
      "calorie tracker",
      "AI diet coach",
      "allergen scanner",
      "health tech",
      "food logging",
    ],
  },
  nav: {
    home: "Home",
    features: "Features",
    pricing: "Plans",
    download: "Get the app",
    faq: "FAQ",
    blog: {
      label: "Blog",
      href: "https://blog.eatit.app",
    },
    language: "Language",
    menuLabel: "Menu",
    menuIntro: "Navigate EatIt",
    closeMenu: "Close menu",
  },
  auth: {
    login: "Log in",
    signup: "Create account",
  },
  hero: {
    badge: "AI Nutrition Assistant",
    title: "Know every bite",
    highlight: "in one scan",
    titleSuffix: "",
    description:
      "Point your camera at a meal or ingredient list and EatIt reveals calories, macros, additives, allergens and health risks within seconds, tailored to your dietary rules.",
    primaryCta: "Download EatIt",
    secondaryCta: "See how it works",
    note: "Privacy-first food logging with encrypted sync and local insights.",
    rating: {
      value: "4.9",
      label: "Average rating from 120k mindful eaters",
      caption: "Nutrition intelligence that stays private by design.",
    },
    bullets: [
      "Instant calorie & macro breakdown",
      "Personalised advice for any diet style",
      "Trend analytics that celebrate progress",
    ],
    visual: {
      title: "EatIt scanning experience",
      items: [
        "Smart label detection for additives & allergens",
        "Daily nutrient balance with gentle nudges",
        "AI nutritionist suggestions & swaps",
      ],
      pill: "Scan with EatIt",
    },
  },
  sections: {
    why: {
      id: "features",
      title: "Why EatIt becomes your everyday food ally",
      subtitle:
        "Every scan unlocks clarity—from calories to hidden additives—so you can eat with confidence and intention.",
      items: [
        {
          title: "Snap-to-know calories",
          description: "Capture meals or menus and receive precise calories, macros and portion tips instantly.",
        },
        {
          title: "Allergen radar",
          description: "Red flags for common allergens, dietary laws and seed oils appear before you take a bite.",
        },
        {
          title: "Goal-aware guidance",
          description: "Tell EatIt your aims—muscle gain, halal, low-carb, gut health—and get personalised verdicts.",
        },
      ],
    },
    core: {
      id: "tracking",
      title: "Deep nutrition insights for every body",
      subtitle: "EatIt connects the dots between what you log and how you want to feel, then guides the next right choice.",
      cards: [
        {
          title: "Calorie & macro tracking",
          description: "Automatic entries, adaptive targets and gentle reminders keep energy intake balanced day to day.",
          bullets: [
            "Instant scanning or quick-add voice logging",
            "Dynamic calorie goals that adjust to your activity",
            "Exportable reports for trainers or dietitians",
          ],
        },
        {
          title: "Nutrient intelligence",
          description:
            "See what's missing across vitamins, minerals and fibre, then receive swap ideas to close the gap.",
          bullets: [
            "Weekly nutrition balance score with trends",
            "AI-suggested meals tailored to deficits",
            "Recipe ideas filtered by your dietary rules",
          ],
        },
        {
          title: "AI nutrition coach",
          description: "Chat with a certified-trained AI that reviews your log, flags risks and celebrates wins in seconds.",
          bullets: [
            "Context-aware coaching based on recent intake",
            "Clear 'eat freely / go easy / swap it' verdicts",
            "Links to credible studies for deeper reading",
          ],
        },
      ],
    },
    assist: {
      id: "assist",
      title: "Support that understands your lifestyle",
      subtitle: "EatIt adapts to cultural, medical and personal needs so you never feel excluded from food conversations.",
      items: [
        {
          title: "Allergy watchlist",
          description: "Highlight personal allergens, religious dietary rules or ingredient blacklists once—EatIt remembers forever.",
        },
        {
          title: "Health risk markers",
          description: "See sodium, sugar and ultra-processed warnings the moment they cross your customised thresholds.",
        },
        {
          title: "Wellness subculture friendly",
          description: "Whether you avoid seed oils, chase longevity or eat plant-based halal, EatIt speaks your language.",
        },
      ],
    },
    smart: {
      id: "smart",
      title: "Secure, precise, inclusive",
      subtitle: "Advanced food intelligence with privacy-first architecture.",
      bullets: [
        "Local-first recognition keeps raw food photos on your device",
        "Encrypted cloud backup you control",
        "Multi-language ingredient and allergen database",
        "Works offline with auto-sync once you're connected",
      ],
    },
    pricing: {
      id: "pricing",
      title: "Choose the plan that fuels your goals",
      subtitle: "Start free, then unlock deeper insights when you're ready.",
      plans: [
        {
          name: "Free",
          price: "$0",
          period: "Forever",
          description: "Perfect for testing daily scans and logging essentials.",
          cta: "Start free",
          features: [
            "30 smart scans each month",
            "Daily calorie & macro dashboard",
            "Allergen alerts for top 14 triggers",
          ],
        },
        {
          name: "EatIt Plus",
          price: "$7.99",
          period: "Per month",
          description: "Unlock unlimited scans and proactive AI coaching.",
          cta: "Upgrade to Plus",
          popular: true,
          features: [
            "Unlimited scans & label reads",
            "Adaptive nutrient gap analysis",
            "Personal AI coach with habit nudges",
          ],
        },
        {
          name: "EatIt Pro",
          price: "$79",
          period: "Per year",
          description: "Annual savings with advanced analytics and priority support.",
          cta: "Go Pro",
          features: [
            "Everything in Plus",
            "Deep trend exports & integrations",
            "Priority dietitian check-ins each quarter",
          ],
        },
      ],
      note: "Need enterprise wellness programs? Talk to us for tailored nutrition dashboards.",
    },
    privacy: {
      id: "privacy",
      title: "Your data, your plate",
      description:
        "We encrypt every log, respect regional data rules and give you full control over where your nutrition history lives.",
      cta: "https://eatit.app/security",
    },
    reviews: {
      id: "stories",
      title: "Loved by mindful eaters worldwide",
      subtitle: "Real people using EatIt to balance tradition, taste and health.",
      quote:
        "EatIt makes it effortless to respect my family's halal traditions while training for a marathon. The AI coach spots gaps before I feel them.",
      author: "Farah Q.",
      role: "Runner & nutrition blogger",
      stats: {
        value: "120K+",
        label: "community members logging smarter meals",
      },
      items: [
        {
          quote: "The allergen alerts give me peace of mind when shopping for my kids' snacks.",
          author: "Daniel R.",
          role: "Food allergy parent",
        },
        {
          quote: "EatIt finally explained why my energy dips. The nutrient balance score keeps me focused.",
          author: "Lina M.",
          role: "Pilates instructor",
        },
        {
          quote: "As a chef, I love how fast the label scanner surfaces additives and seed oils.",
          author: "Marco D.",
          role: "Restaurant consultant",
        },
      ],
    },
    faq: {
      id: "faq",
      title: "FAQ",
      subtitle: "Answers to the most common EatIt questions.",
      items: [
        {
          question: "How accurate is the AI calorie and macro detection?",
          answer:
            "EatIt combines computer vision with a verified ingredient database. Each scan includes an accuracy indicator and you can tweak portions before saving for precise logs.",
        },
        {
          question: "Can EatIt respect my cultural or religious dietary rules?",
          answer:
            "Yes. Set preferences such as halal, kosher, vegetarian, low-FODMAP or seed-oil-free and EatIt will flag conflicts before you eat.",
        },
        {
          question: "What makes the AI nutrition coach different?",
          answer:
            "The coach analyses your recent intake, goals and activity. It suggests swaps, highlights nutrient gaps and links to credible science without judgement.",
        },
        {
          question: "How is my data protected?",
          answer:
            "Scans are processed locally whenever possible, then encrypted if you enable cloud sync. You can export or delete data anytime inside settings.",
        },
      ],
    },
  },
  footer: {
    tagline: "Eat smarter with AI that understands your plate.",
    rights: "© 2024 EatIt. All rights reserved.",
    socialsLabel: "Connect with EatIt",
    supportLabel: "Need some help?",
    supportEmail: "hello@eatit.app",
    faqLabel: "FAQ",
    supportChannels: [
      {
        type: "email",
        label: "Email support",
        value: "hello@eatit.app",
      },
      {
        type: "phone",
        label: "Nutrition hotline",
        value: "+1 (888) 555-3284",
      },
      {
        type: "chat",
        label: "Live chat",
        value: "app.eatit.app/support",
      },
    ],
    socialLinks: [
      { icon: "fa-brands fa-twitter", href: "https://twitter.com/eatitapp", label: "Twitter" },
      { icon: "fa-brands fa-instagram", href: "https://instagram.com/eatitapp", label: "Instagram" },
      { icon: "fa-brands fa-youtube", href: "https://youtube.com/@eatitapp", label: "YouTube" },
    ],
    navGroups: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Security", href: "https://eatit.app/security" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Blog", href: "https://blog.eatit.app" },
          { label: "Help centre", href: "https://help.eatit.app" },
          { label: "Press", href: "https://press.eatit.app" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "https://eatit.app/about" },
          { label: "Careers", href: "https://eatit.app/careers" },
          { label: "Contact", href: "https://eatit.app/contact" },
        ],
      },
    ],
  },
};

export default en;
