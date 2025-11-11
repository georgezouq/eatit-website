import type { LocaleDictionary } from "./types";

const en: LocaleDictionary = {
  metadata: {
    title: "Eatibo — AI Nutrition Scanner & Coach",
    description:
      "Eatibo instantly recognises calories, macros, allergens and additives from any meal or label, then delivers personalised nutrition coaching that keeps your goals on track.",
    keywords: [
      "Eatibo",
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
    download: "Download",
    faq: "FAQ",
    blog: {
      label: "Blog",
      href: "/blogs",
    },
    language: "Language",
    menuLabel: "Menu",
    menuIntro: "Navigate Eatibo",
    closeMenu: "Close menu",
  },
  auth: {
    login: "Log in",
    signup: "Create account",
  },
  hero: {
    badge: "AI Nutrition Assistant",
    title: "Your Lifelong Nutrition Partner",
    highlight: "",
    titleSuffix: "",
    description:
      "Point your camera at a meal or ingredient list and Eatibo reveals calories, macros, additives, allergens and health risks within seconds, tailored to your dietary rules.",
    primaryCta: "Download Eatibo",
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
      title: "Eatibo scanning experience",
      items: [
        "Smart label detection for additives & allergens",
        "Daily nutrient balance with gentle nudges",
        "AI nutritionist suggestions & swaps",
      ],
      pill: "Scan with Eatibo",
    },
  },
  sections: {
    why: {
      id: "features",
      title: "Why Eatibo becomes your everyday food ally",
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
          description: "Tell Eatibo your aims—muscle gain, halal, low-carb, gut health—and get personalised verdicts.",
        },
      ],
    },
    core: {
      id: "tracking",
      title: "Deep nutrition insights for every body",
      subtitle: "Eatibo connects the dots between what you log and how you want to feel, then guides the next right choice.",
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
      subtitle: "Eatibo adapts to cultural, medical and personal needs so you never feel excluded from food conversations.",
      items: [
        {
          title: "Allergy watchlist",
          description: "Highlight personal allergens, religious dietary rules or ingredient blacklists once—Eatibo remembers forever.",
        },
        {
          title: "Health risk markers",
          description: "See sodium, sugar and ultra-processed warnings the moment they cross your customised thresholds.",
        },
        {
          title: "Wellness subculture friendly",
          description: "Whether you avoid seed oils, chase longevity or eat plant-based halal, Eatibo speaks your language.",
        },
      ],
    },
    smart: {
      id: "smart",
      title: "Secure, precise, inclusive",
      subtitle:
        "Trusted by health innovators that demand nutrition intelligence with privacy built in.",
      bullets: [
        "Local-first recognition keeps raw food photos on your device",
        "Encrypted cloud backup you control",
        "Multi-language ingredient and allergen database",
        "Works offline with auto-sync once you're connected",
      ],
    },
    download: {
      id: "download",
      badge: "Download Eatibo",
      title: "Scan smarter. Eat with confidence.",
      subtitle:
        "Keep Eatibo in your pocket to decode meals, labels and dining out choices instantly.",
      highlights: [
        "Scan labels, barcodes or entire plates in seconds",
        "Tailored suggestions for allergies, goals & cultural diets",
        "Encrypted sync keeps your food history private",
      ],
      storeLabel: "Get Eatibo on",
      apple: {
        href: "https://itunes.apple.com/us/app/id6753906159",
        label: "App Store",
      },
      google: {
        href: "#",
        label: "Google Play",
      },
      comingSoon: "Coming soon, stay tuned!",
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
          description: "Explore core scanning and nutrition basics.",
          cta: "Start free",
          features: [
            "30 smart scans each month",
            "Daily calorie & macro dashboard",
            "Allergen alerts for top 14 triggers",
          ],
        },
        {
          name: "Weekly Member",
          price: "$5.99",
          period: "Per week",
          description: "Unlock unlimited scans and proactive AI nudges.",
          cta: "Start weekly plan",
          popular: true,
          features: [
            "Unlimited scans & ingredient breakdowns",
            "Adaptive nutrient gap analysis & alerts",
            "Personal AI coach for meal swaps",
          ],
        },
        {
          name: "Annual Member",
          price: "$59.99",
          period: "Per year",
          description: "Save more with deep analytics and concierge support.",
          cta: "Choose annual",
          features: [
            "Everything in Weekly Member",
            "Yearly deep trends & exportable reports",
            "Quarterly nutritionist check-ins",
          ],
        },
      ],
      note: "Cancel anytime. Upgrade or downgrade whenever your goals change.",
    },
    privacy: {
      id: "privacy",
      title: "Your data, your plate",
      description:
        "We encrypt every log, respect regional data rules and give you full control over where your nutrition history lives.",
      cta: "https://eatibo.app/security",
    },
    reviews: {
      id: "stories",
      title: "Loved by mindful eaters worldwide",
      subtitle: "Real people using Eatibo to balance tradition, taste and health.",
      quote:
        "Eatibo makes it effortless to respect my family's halal traditions while training for a marathon. The AI coach spots gaps before I feel them.",
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
          quote: "Eatibo finally explained why my energy dips. The nutrient balance score keeps me focused.",
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
      subtitle: "Answers to the most common Eatibo questions.",
      items: [
        {
          question: "How accurate is the AI calorie and macro detection?",
          answer:
            "Eatibo combines computer vision with a verified ingredient database. Each scan includes an accuracy indicator and you can tweak portions before saving for precise logs.",
        },
        {
          question: "Can Eatibo respect my cultural or religious dietary rules?",
          answer:
            "Yes. Set preferences such as halal, kosher, vegetarian, low-FODMAP or seed-oil-free and Eatibo will flag conflicts before you eat.",
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
    rights: "© 2024 Eatibo. All rights reserved.",
    socialsLabel: "Connect with Eatibo",
    supportLabel: "Need some help?",
    supportEmail: "cs@clearcrowds.com",
    faqLabel: "FAQ",
    supportChannels: [
      {
        type: "email",
        label: "Email support",
        value: "cs@clearcrowds.com",
      },
      {
        type: "phone",
        label: "Nutrition hotline",
        value: "+1(305)4621683",
      },
      {
        type: "chat",
        label: "Live chat",
        value: "www.eatibo.com",
      },
    ],
    socialLinks: [
      { icon: "fa-brands fa-twitter", href: "https://twitter.com/eatiboapp", label: "Twitter" },
      { icon: "fa-brands fa-instagram", href: "https://instagram.com/eatiboapp", label: "Instagram" },
      { icon: "fa-brands fa-youtube", href: "https://youtube.com/@eatiboapp", label: "YouTube" },
    ],
    navGroups: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Security", href: "https://eatibo.app/security" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Blog", href: "/blogs" },
          { label: "Help centre", href: "https://help.eatibo.app" },
          { label: "Press", href: "https://press.eatibo.app" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "https://eatibo.app/about" },
          { label: "Careers", href: "https://eatibo.app/careers" },
          { label: "Contact", href: "https://eatibo.app/contact" },
        ],
      },
    ],
  },
  notFound: {
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist. It may have been moved or deleted.",
    backButton: "Go Back Home",
  },
};

export default en;
