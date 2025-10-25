import type { LocaleDictionary } from "./types";

export const zhCN: LocaleDictionary = {
  metadata: {
    title: "HairWow — AI发型试戴与发质分析",
    description:
      "HairWow 让你一键试戴 100+ 款发型与无限发色，并提供实验室级发质分析与专属护理方案。",
    keywords: [
      "HairWow",
      "AI发型",
      "发色试戴",
      "虚拟试戴",
      "发质分析",
      "胡子试戴",
      "AR自拍",
      "美妆科技",
    ],
  },
  nav: {
    home: "首页",
    features: "功能亮点",
    pricing: "价格",
    download: "立即下载",
    blog: {
      label: "博客",
      href: "https://blog.hairwow.ai",
    },
    language: "选择语言",
    menuLabel: "菜单",
    menuIntro: "浏览 HairWow",
    closeMenu: "关闭菜单",
  },
  hero: {
    badge: "AI 焕发体验",
    title: "3 秒钟",
    highlight: "换个新发型",
    titleSuffix: "",
    description:
      "发丝级 AI 让你秒速预览 100+ 款发型与无限发色，并附专业分析与个性化护理建议。",
    primaryCta: "免费体验",
    secondaryCta: "查看发质分析示例",
    note: "无需染剪，也能看到惊艳效果。",
    rating: {
      value: "4.9/5",
      label: "80k+ 次焕变体验的平均评分",
      caption: "创作者信赖 HairWow 打造社交媒体大片。",
    },
    bullets: [
      "实时切换发长、发量、刘海与发色",
      "依据脸型肤色智能推荐更适合的造型",
      "高清保存前后对比，随时分享",
    ],
    visual: {
      title: "Hair Health AI 工作室",
      items: [
        "发质、孔隙度与光泽指数",
        "智能发色混合建议",
        "AI 发型顾问 1v1 指导",
      ],
      pill: "下载 HairWow",
    },
  },
  sections: {
    why: {
      id: "why",
      title: "HairWow 为什么好用",
      subtitle: "一键焕新且贴合真实发丝，让改变更安心。",
      items: [
        {
          title: "一键试戴",
          description: "拍照或实时相机即可切换发色与发型，零学习成本。",
        },
        {
          title: "超真实预览",
          description: "发丝级识别紧贴卷度、层次与碎发，效果自然可落地。",
        },
        {
          title: "个性推荐",
          description: "结合脸型与肤色，智能挑选最显气质的颜色与轮廓。",
        },
        {
          title: "社交友好",
          description: "一键导出前后对比，直接发布 TikTok、Instagram、Snapchat。",
        },
      ],
    },
    core: {
      id: "core",
      title: "核心体验",
      subtitle: "无论是微调还是大变身，HairWow 都懂你。",
      cards: [
        {
          title: "发型试戴",
          description: "短发、波波头、层次、卷度、刘海等 100+ 款造型随心换。",
          bullets: [
            "自由调节发长、蓬松度与分缝",
            "收藏多款造型并肩对比再决定",
            "渐变、冷暖、饱和度皆可微调",
          ],
        },
        {
          title: "发质分析",
          description: "专业诊断发质、毛躁、孔隙度、密度、光泽与头皮健康。",
          bullets: [
            "获得专属发质健康分与护理拆解",
            "匹配清洁、修护、防护的日常步骤",
            "AI 发型顾问 1v1 提供染剪与养护建议",
          ],
        },
        {
          title: "胡子试戴",
          description: "从胡渣到全须、八字胡自然贴合，密度与色调随心调。",
          bullets: [
            "自定义胡须长度、厚度与颜色",
            "与发色协调搭配打造完整形象",
            "保存造型给理发师或用作内容素材",
          ],
        },
      ],
    },
    assist: {
      id: "assist",
      title: "一站式辅助工具",
      subtitle: "焕发同时搞定构图、穿搭与饰品。",
      items: [
        {
          title: "去除杂物",
          description: "轻刷即可清掉电线、杂物与路人，让主角更突出。",
        },
        {
          title: "穿搭试戴",
          description: "预览热门穿搭，观察版型与色调如何呼应新发型。",
        },
        {
          title: "首饰试戴",
          description: "耳环、项链等饰品一站试戴，造型一步到位。",
        },
      ],
    },
    smart: {
      id: "smart",
      title: "聪明·快速·包容",
      subtitle: "强大算法兼顾不同光线、设备与发质。",
      bullets: [
        "发色自定义滑杆：饱和度、冷暖、渐层随心调",
        "季节主题与爆款趋势持续更新",
        "低时延预览，昏暗环境也清晰",
        "适配直发、微卷、卷曲与自然卷",
      ],
    },
    pricing: {
      id: "pricing",
      title: "选择最适合你的方案",
      subtitle: "免费起步，再按习惯选择合适的 Premium 订阅。",
      plans: [
        {
          name: "免费版",
          price: "$0",
          period: "/永久",
          description: "所有功能各试用 5 次，导出保留水印。",
          cta: "免费体验",
          features: [
            "发型/发色/胡须/穿搭等共 5 次体验",
            "可访问基础发质与头皮分析",
            "下载带有 HairWow 水印的图片",
          ],
        },
        {
          name: "Premium 周订阅",
          price: "$5.99",
          period: "/周",
          description: "按周计费，随时享受完整 Premium 权益。",
          cta: "开通周订阅",
          popular: true,
          features: [
            "所有功能无限次使用",
            "全程无广告",
            "高清无水印图片下载",
          ],
        },
        {
          name: "Premium 年订阅",
          price: "$59.90",
          period: "/年",
          description: "一次搞定全年 Premium 权益，更划算。",
          cta: "开通年订阅",
          features: [
            "所有功能无限次使用",
            "全程无广告",
            "高清无水印图片下载",
          ],
        },
      ],
      note: "需要沙龙或企业合作？欢迎联系我们定制方案。",
    },
    privacy: {
      id: "privacy",
      title: "照片数据完全由你掌控",
      description:
        "我们将隐私视为自我护理的一部分。保存、分享或删除全由你决定，HairWow 从不擅自发布。",
      cta: "查看隐私承诺",
    },
    reviews: {
      id: "reviews",
      title: "深受发型师与创作者喜爱",
      subtitle: "每周数以千计的焕发瞬间在此发生。",
      quote:
        "HairWow 的发色与卷度贴合度非常真实，我的客人可以大胆尝试，同时 AI 顾问给出的护理建议也专业可靠。",
      author: "陈思",
      role: "Glow Lab Studio 首席染发师",
    },
  },
  footer: {
    tagline: "HairWow — 为每一缕发丝打造 AI 焕变。",
    rights: "© 2024 HairWow. 保留所有权利。",
    socialsLabel: "关注 HairWow",
    supportLabel: "客服邮箱：",
    supportEmail: "cs@clearcrowds.com",
  },
};

export default zhCN;
