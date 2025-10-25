import type { LocaleDictionary } from "./types";

const zhCN: LocaleDictionary = {
  metadata: {
    title: "EatIt —— AI 营养扫描与饮食顾问",
    description:
      "EatIt 能够即时识别任何餐食或配料表中的热量、营养素、过敏原与添加剂，并依据你的饮食目标给出个性化建议。",
    keywords: ["EatIt", "营养扫描", "热量记录", "AI 饮食顾问", "过敏原识别", "健康饮食"],
  },
  nav: {
    home: "首页",
    features: "功能亮点",
    pricing: "套餐价格",
    download: "下载应用",
    faq: "常见问题",
    blog: {
      label: "博客",
      href: "https://blog.eatit.app",
    },
    language: "语言",
    menuLabel: "菜单",
    menuIntro: "浏览 EatIt",
    closeMenu: "关闭菜单",
  },
  auth: {
    login: "登录",
    signup: "注册账号",
  },
  hero: {
    badge: "AI 营养助手",
    title: "一扫即知",
    highlight: "每一口",
    description:
      "对准餐盘或配料表拍照，EatIt 会在几秒内呈现热量、营养素、添加剂与健康风险，并结合你的饮食规则给出建议。",
    primaryCta: "立即下载 EatIt",
    secondaryCta: "了解工作方式",
    note: "本地优先存储与加密同步，饮食数据始终归你所有。",
    rating: {
      value: "4.9",
      label: "12 万+ 明智食客的平均评分",
      caption: "隐私优先的智能营养分析。",
    },
    bullets: [
      "热量与三大营养素一拍即得",
      "适配多种饮食文化与健康目标",
      "趋势分析帮助你看见持续进步",
    ],
    visual: {
      title: "EatIt 扫描体验",
      items: [
        "识别配料中的添加剂与过敏原",
        "每日营养均衡提醒",
        "AI 营养顾问提供替代方案",
      ],
      pill: "使用 EatIt 扫描",
    },
  },
  sections: {
    why: {
      id: "features",
      title: "EatIt 如何成为你的饮食搭档",
      subtitle: "从热量到隐形添加剂，每一次扫描都让你吃得更放心。",
      items: [
        {
          title: "热量随拍即得",
          description: "拍下餐食或菜单，立刻获得热量、宏量营养素与份量建议。",
        },
        {
          title: "过敏与禁忌雷达",
          description: "常见过敏原、宗教饮食禁忌、籽油等风险即时提示。",
        },
        {
          title: "目标感知的建议",
          description: "无论增肌、控糖还是清真饮食，EatIt 都能给出贴合目标的判断。",
        },
      ],
    },
    core: {
      id: "tracking",
      title: "适配每个人的深度营养洞察",
      subtitle: "EatIt 将每日记录与健康目标关联起来，让下一步选择更明确。",
      cards: [
        {
          title: "热量与宏量营养追踪",
          description: "自动记录、动态目标与温和提醒，帮助你平衡每日能量摄入。",
          bullets: [
            "拍照、语音或快速添加均可",
            "根据活动量自动调整热量目标",
            "可导出报告与教练或营养师共享",
          ],
        },
        {
          title: "营养缺口智能分析",
          description: "一眼看出维生素、矿物质与膳食纤维的摄入差距，并提供补充建议。",
          bullets: [
            "每周营养均衡评分与趋势",
            "针对缺口的 AI 推荐餐食",
            "支持按饮食规则筛选食谱",
          ],
        },
        {
          title: "AI 营养顾问",
          description: "结合近期饮食、目标与活动，秒级给出提醒、替换方案与科学依据。",
          bullets: [
            "基于上下文的即时答疑",
            "清晰的“放心吃/少吃/不建议”评级",
            "提供可靠来源的延伸阅读",
          ],
        },
      ],
    },
    assist: {
      id: "assist",
      title: "懂你生活方式的贴心支持",
      subtitle: "EatIt 尊重文化、健康与个人选择，让每个人都能安心享受美食。",
      items: [
        {
          title: "过敏/禁忌清单",
          description: "一次设定个人过敏原、宗教饮食与黑名单配料，EatIt 永远记得。",
        },
        {
          title: "健康风险标注",
          description: "当钠、糖或超加工指标超出你设定的阈值时立即提醒。",
        },
        {
          title: "饮食亚文化友好",
          description: "无论是无籽油、养生派还是植物基清真饮食，EatIt 都能听懂。",
        },
      ],
    },
    smart: {
      id: "smart",
      title: "安全、精准、包容",
      subtitle: "受到注重隐私的健康创新者信赖的营养智能。",
      bullets: [
        "本地优先处理，照片不出设备",
        "开启云同步后全程加密",
        "多语言配料与过敏原数据库",
        "离线可用，联网自动同步",
      ],
    },
    download: {
      id: "download",
      badge: "下载 EatIt",
      title: "更聪明地扫描，更安心地开吃",
      subtitle: "把 EatIt 装进口袋，随时随地几秒读懂餐盘与配料表。",
      highlights: [
        "标签、条码、实物菜品一拍即识",
        "结合过敏、饮食文化与目标给出建议",
        "加密同步守护你的饮食数据",
      ],
      storeLabel: "下载 EatIt",
      apple: {
        href: "https://apps.apple.com/app",
        label: "App Store",
      },
      google: {
        href: "https://play.google.com/store/apps",
        label: "Google Play",
      },
    },
    pricing: {
      id: "pricing",
      title: "选择适合你的计划",
      subtitle: "免费开始，随时升级获得更深入的洞察。",
      plans: [
        {
          name: "免费版",
          price: "￥0",
          period: "永久",
          description: "体验每日扫描与基础记录功能。",
          cta: "免费开用",
          features: [
            "每月 30 次智能扫描",
            "每日热量与宏量营养仪表盘",
            "14 大过敏原实时提示",
          ],
        },
        {
          name: "周会员",
          price: "¥5.99",
          period: "每周",
          description: "解锁不限次数扫描与主动 AI 提醒。",
          cta: "选择周会员",
          popular: true,
          features: [
            "不限次数扫描与成分解析",
            "实时营养缺口提醒与建议",
            "AI 顾问提供餐食替换点子",
          ],
        },
        {
          name: "年会员",
          price: "¥59.99",
          period: "每年",
          description: "一次升级，获得深度分析与礼宾级支持。",
          cta: "选择年会员",
          features: [
            "包含周会员的全部权益",
            "年度趋势报告与数据导出",
            "季度营养师跟进回访",
          ],
        },
      ],
      note: "随时可取消或切换，配合你阶段性的饮食目标。",
    },
    privacy: {
      id: "privacy",
      title: "你的饮食数据只属于你",
      description: "我们遵循本地优先与分区合规，加密保存每一条饮食记录，并提供完整的数据控制权。",
      cta: "https://eatit.app/security",
    },
    reviews: {
      id: "stories",
      title: "全球吃货都在用 EatIt",
      subtitle: "用更聪明的方式平衡传统、口味与健康。",
      quote: "EatIt 让我在马拉松训练中也能遵守清真饮食，AI 顾问会提前提示营养缺口。",
      author: "Farah Q.",
      role: "跑者 & 营养博主",
      stats: {
        value: "120K+",
        label: "用户每天记录更聪明的一餐",
      },
      items: [
        {
          quote: "过敏原提醒让我为孩子选零食更安心。",
          author: "Daniel R.",
          role: "过敏儿童家长",
        },
        {
          quote: "营养均衡评分帮我找到能量低迷的原因。",
          author: "Lina M.",
          role: "普拉提教练",
        },
        {
          quote: "作为厨师，我喜欢 EatIt 快速标出添加剂和籽油。",
          author: "Marco D.",
          role: "餐饮顾问",
        },
      ],
    },
    faq: {
      id: "faq",
      title: "常见问题",
      subtitle: "关于 EatIt 的热门提问都在这里。",
      items: [
        {
          question: "AI 识别热量与营养的准确性如何？",
          answer: "EatIt 结合计算机视觉与权威配料数据库，每次扫描都会显示可信度，并允许你在保存前微调份量。",
        },
        {
          question: "能否支持宗教或文化饮食规则？",
          answer: "当然。你可以设置清真、犹太洁食、素食、低 FODMAP、无籽油等偏好，EatIt 会在冲突发生前提醒。",
        },
        {
          question: "AI 营养顾问有什么特别之处？",
          answer: "顾问会综合近期摄入、目标与活动，提供替换建议、营养缺口提示，并附上可信研究链接。",
        },
        {
          question: "我的数据如何受到保护？",
          answer: "默认在本地处理图像，开启云同步后全程加密；你可在设置中随时导出或删除数据。",
        },
      ],
    },
  },
  footer: {
    tagline: "用懂你的 AI，吃得更聪明。",
    rights: "© 2024 EatIt. 保留所有权利。",
    socialsLabel: "关注 EatIt",
    supportLabel: "需要帮助？",
    supportEmail: "hello@eatit.app",
    faqLabel: "常见问题",
    supportChannels: [
      { type: "email", label: "邮件支持", value: "hello@eatit.app" },
      { type: "phone", label: "营养顾问热线", value: "+86 400-800-1234" },
      { type: "chat", label: "在线客服", value: "app.eatit.app/support" },
    ],
    socialLinks: [
      { icon: "fa-brands fa-weibo", href: "https://weibo.com/eatit", label: "微博" },
      { icon: "fa-brands fa-wechat", href: "https://eatit.app/wechat", label: "微信" },
      { icon: "fa-brands fa-twitter", href: "https://twitter.com/eatitapp", label: "Twitter" },
    ],
    navGroups: [
      {
        title: "产品",
        links: [
          { label: "功能", href: "#features" },
          { label: "价格", href: "#pricing" },
          { label: "安全", href: "https://eatit.app/security" },
        ],
      },
      {
        title: "资源",
        links: [
          { label: "博客", href: "https://blog.eatit.app" },
          { label: "帮助中心", href: "https://help.eatit.app" },
          { label: "媒体资料", href: "https://press.eatit.app" },
        ],
      },
      {
        title: "关于我们",
        links: [
          { label: "品牌故事", href: "https://eatit.app/about" },
          { label: "加入我们", href: "https://eatit.app/careers" },
          { label: "商务合作", href: "https://eatit.app/contact" },
        ],
      },
    ],
  },
};

export default zhCN;
