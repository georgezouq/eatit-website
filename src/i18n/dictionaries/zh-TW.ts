import type { LocaleDictionary } from "./types";

const zhTW: LocaleDictionary = {
  metadata: {
    title: "Eatibo —— AI 營養掃描與飲食顧問",
    description:
      "Eatibo 能即時辨識餐點或成分表中的熱量、營養素、過敏原與添加物，並依據你的飲食目標提供個人化建議。",
    keywords: ["Eatibo", "營養掃描", "熱量記錄", "AI 飲食顧問", "過敏原辨識", "健康飲食"],
  },
  nav: {
    home: "首頁",
    features: "功能亮點",
    pricing: "方案價格",
    download: "下載",
    faq: "常見問題",
    blog: {
      label: "部落格",
      href: "/blogs",
    },
    language: "語言",
    menuLabel: "選單",
    menuIntro: "瀏覽 Eatibo",
    closeMenu: "關閉選單",
  },
  auth: {
    login: "登入",
    signup: "建立帳號",
  },
  hero: {
    badge: "AI 營養助手",
    title: "守護你的長期飲食健康",
    highlight: "",
    description:
      "將鏡頭對準餐盤或成分表，Eatibo 會在數秒內呈現熱量、營養素、添加物與健康風險，並結合你的飲食規則給出建議。",
    primaryCta: "立即下載 Eatibo",
    secondaryCta: "了解如何運作",
    note: "本機優先儲存與加密同步，你的飲食資料只屬於你。",
    rating: {
      value: "4.9",
      label: "12 萬+ 使用者的一致好評",
      caption: "以隱私為核心的智慧營養分析。",
    },
    bullets: [
      "熱量與三大營養素即時呈現",
      "支援多元飲食文化與健康目標",
      "趨勢圖幫你看見持續進步",
    ],
    visual: {
      title: "Eatibo 掃描體驗",
      items: [
        "辨識成分中的添加物與過敏原",
        "每日營養平衡提醒",
        "AI 營養顧問提供替代方案",
      ],
      pill: "用 Eatibo 掃描",
    },
  },
  sections: {
    why: {
      id: "features",
      title: "Eatibo 為什麼值得信賴",
      subtitle: "從熱量到隱藏的添加物，每一次掃描都讓你吃得更安心。",
      items: [
        {
          title: "熱量即拍即得",
          description: "拍下餐點或菜單，立即取得熱量、宏量營養素與份量建議。",
        },
        {
          title: "過敏與禁忌雷達",
          description: "常見過敏原、宗教飲食禁忌、籽油等風險即時亮燈提醒。",
        },
        {
          title: "目標感知建議",
          description: "無論增肌、控糖或清真飲食，Eatibo 都能提供量身打造的判斷。",
        },
      ],
    },
    core: {
      id: "tracking",
      title: "滿足每種體質的深度洞察",
      subtitle: "Eatibo 連結日常記錄與健康目標，幫助你做出下一步最佳選擇。",
      cards: [
        {
          title: "熱量與宏量營養追蹤",
          description: "自動記錄、動態目標與貼心提醒，維持每天的能量平衡。",
          bullets: [
            "可掃描、語音或快速新增",
            "依活動量自動調整熱量目標",
            "匯出報告與教練、營養師共享",
          ],
        },
        {
          title: "營養缺口智能分析",
          description: "一眼看出維生素、礦物質與膳食纖維的不足，並提供補充建議。",
          bullets: [
            "每週營養平衡分數與趨勢",
            "AI 推薦符合缺口的餐點",
            "依飲食規範篩選食譜",
          ],
        },
        {
          title: "AI 營養顧問",
          description: "結合近期攝取、目標與活動，秒給提醒、替換方案與科學佐證。",
          bullets: [
            "情境式即時問答",
            "清楚的「放心吃／少吃／不建議」等級",
            "提供可信資料來源延伸閱讀",
          ],
        },
      ],
    },
    assist: {
      id: "assist",
      title: "懂你生活方式的支援",
      subtitle: "Eatibo 尊重文化、健康與個人選擇，讓每一餐都更自在。",
      items: [
        {
          title: "過敏／禁忌清單",
          description: "一次設定個人過敏原、宗教飲食與黑名單成分，Eatibo 永遠記得。",
        },
        {
          title: "健康風險標記",
          description: "鈉、糖或超加工指標超過自訂門檻時即刻提醒。",
        },
        {
          title: "飲食亞文化友善",
          description: "無籽油、養生、植物性清真等飲食風格，Eatibo 都懂。",
        },
      ],
    },
    smart: {
      id: "smart",
      title: "安全．精準．包容",
      subtitle: "獲得重視隱私的健康創新者信賴的營養智慧。",
      bullets: [
        "本機優先處理，影像不上傳",
        "啟用雲端同步後全程加密",
        "多語系成分與過敏原資料庫",
        "離線可用，連網即自動同步",
      ],
    },
    includes: {
      id: "pricing",
      badge: "Eatibo 包含什麼？",
      title: "Eatibo 包含什麼？",
      subtitle: "從飲食掃描到體重管理，一套完整功能陪你養成更健康的日常節奏。",
      autoplayLabel: "Eatibo 核心賣點輪播",
      features: [
        {
          key: "scan-diets",
          title: "食物掃描與飲食習慣",
          description: "拍下配料表或餐盤，Eatibo 會自動對應你的飲食偏好。",
          points: [
            "支援地中海、無菜籽油、生酮、清真等方式",
            "依照歷史習慣提供更貼近的建議",
          ],
          image: {
            src: "/assets/images/media/img_16.png",
            alt: "Eatibo 食物掃描畫面",
          },
        },
        {
          key: "health-alerts",
          title: "關注飲食健康",
          description: "在你下單或開吃前，先把風險看清楚。",
          points: [
            "添加劑提示，降低隱性負擔",
            "食物過敏提醒，依個人檔案精準觸發",
          ],
          image: {
            src: "/assets/images/media/img_17.png",
            alt: "Eatibo 添加劑與過敏提醒",
          },
        },
        {
          key: "medication",
          title: "用藥提醒",
          description: "跟著你的生活節奏提醒，不再漏服關鍵藥物。",
          points: [
            "每日固定提醒，結合三餐與作息",
            "溫和通知，不打擾休息時間",
          ],
          image: {
            src: "/assets/images/media/img_18.png",
            alt: "Eatibo 用藥提醒畫面",
          },
        },
        {
          key: "hydration",
          title: "飲水提醒",
          description: "輕鬆紀錄每日喝水量，穩定建立補水習慣。",
          points: [
            "依時間與活動智慧提醒補水",
            "可視化進度讓你更容易達標",
          ],
          image: {
            src: "/assets/images/media/img_19.png",
            alt: "Eatibo 飲水提醒畫面",
          },
        },
        {
          key: "weight-goals",
          title: "體重管理",
          description: "支援減肥與增肥雙目標，幫你更科學地管理體態。",
          points: [
            "減脂與增重模式自由切換",
            "整合掃描與紀錄提供趨勢回饋",
          ],
          image: {
            src: "/assets/images/media/img_20.png",
            alt: "Eatibo 體重管理圖表",
          },
        },
      ],
    },
    download: {
      id: "download",
      badge: "下載 Eatibo",
      title: "更聰明地掃描，更安心地用餐",
      subtitle: "把 Eatibo 放進口袋，隨時隨地幾秒讀懂餐盤與成分表。",
      highlights: [
        "標籤、條碼、實物菜色一拍即識",
        "結合過敏、飲食文化與目標提供建議",
        "加密同步守護你的飲食資料",
      ],
      storeLabel: "下載 Eatibo",
      apple: {
        href: "https://itunes.apple.com/us/app/id6753906159",
        label: "App Store",
      },
      google: {
        href: "#",
        label: "Google Play",
      },
      comingSoon: "即將推出，敬請期待！",
    },
    pricing: {
      id: "pricing",
      title: "選擇最適合你的方案",
      subtitle: "免費啟動，隨時升級獲得更深入的洞察。",
      plans: [
        {
          name: "免費版",
          price: "NT$0",
          period: "永久",
          description: "體驗每日掃描與基礎記錄功能。",
          cta: "免費開始",
          features: [
            "每月 30 次智慧掃描",
            "每日熱量與宏量營養儀表板",
            "14 大過敏原即時警示",
          ],
        },
        {
          name: "週會員",
          price: "US$5.99",
          period: "每週",
          description: "解鎖無限次掃描與主動 AI 提醒。",
          cta: "選擇週會員",
          popular: true,
          features: [
            "無限次掃描與成分解析",
            "即時營養缺口提醒與建議",
            "AI 顧問提供餐點替換靈感",
          ],
        },
        {
          name: "年會員",
          price: "US$59.99",
          period: "每年",
          description: "一次升級，擁有深度分析與禮賓級支援。",
          cta: "選擇年會員",
          features: [
            "包含週會員的全部權益",
            "年度趨勢報告與資料匯出",
            "每季營養師追蹤回訪",
          ],
        },
      ],
      note: "可隨時取消或調整，依據你的飲食目標節奏彈性變換。",
    },
    privacy: {
      id: "privacy",
      title: "你的飲食資料只屬於你",
      description: "我們遵循本機優先與區域法規，加密守護每一筆記錄，並提供完整資料控制權。",
      cta: "https://eatibo.app/security",
    },
    reviews: {
      id: "stories",
      title: "全球吃貨都在用 Eatibo",
      subtitle: "用更聰明的方式平衡傳統、口味與健康。",
      quote: "Eatibo 讓我在備戰馬拉松時仍能遵守清真飲食，AI 顧問會提早提醒營養缺口。",
      author: "Farah Q.",
      role: "跑者與營養部落客",
      stats: {
        value: "120K+",
        label: "使用者每天紀錄更聰明的一餐",
      },
      items: [
        {
          quote: "過敏原提醒讓我替孩子挑零食更安心。",
          author: "Daniel R.",
          role: "過敏兒家長",
        },
        {
          quote: "營養平衡分數幫我找出體力下降的原因。",
          author: "Lina M.",
          role: "皮拉提斯教練",
        },
        {
          quote: "身為主廚，我喜歡 Eatibo 快速標示添加物與籽油。",
          author: "Marco D.",
          role: "餐飲顧問",
        },
      ],
    },
    faq: {
      id: "faq",
      title: "常見問題",
      subtitle: "這裡彙整了大家最關心的 Eatibo 提問。",
      items: [
        {
          question: "AI 辨識熱量與營養有多準確？",
          answer: "Eatibo 結合電腦視覺與權威成分資料庫，每次掃描都會顯示可信度，你也能在儲存前微調份量。",
        },
        {
          question: "可以支援宗教或文化飲食規範嗎？",
          answer: "沒問題。設定清真、猶太飲食、素食、低 FODMAP、無籽油等偏好，Eatibo 會在衝突前提醒。",
        },
        {
          question: "AI 營養顧問有何不同？",
          answer: "顧問會分析近期攝取、目標與活動，提供替換建議、營養缺口提示並附上可信資料來源。",
        },
        {
          question: "我的資料如何受到保護？",
          answer: "預設在本機處理影像，啟用雲端同步後全程加密，你可在設定中隨時匯出或刪除資料。",
        },
      ],
    },
  },
  footer: {
    tagline: "用懂你的 AI，吃得更聰明。",
    rights: "© 2024 Eatibo. 版權所有。",
    socialsLabel: "關注 Eatibo",
    supportLabel: "需要協助嗎？",
    supportEmail: "cs@clearcrowds.com",
    faqLabel: "常見問題",
    supportChannels: [
      { type: "email", label: "電子郵件", value: "cs@clearcrowds.com" },
      { type: "phone", label: "營養顧問專線", value: "+1(305)4621683" },
      { type: "chat", label: "線上即時客服", value: "www.eatibo.com" },
    ],
    socialLinks: [
      { icon: "fa-brands fa-facebook", href: "https://facebook.com/eatiboapp", label: "Facebook" },
      { icon: "fa-brands fa-instagram", href: "https://instagram.com/eatiboapp", label: "Instagram" },
      { icon: "fa-brands fa-twitter", href: "https://twitter.com/eatiboapp", label: "Twitter" },
    ],
    navGroups: [
      {
        title: "產品",
        links: [
          { label: "功能", href: "#features" },
          { label: "方案", href: "#pricing" },
          { label: "安全性", href: "https://eatibo.app/security" },
        ],
      },
      {
        title: "資源",
        links: [
          { label: "部落格", href: "/blogs" },
          { label: "說明中心", href: "https://help.eatibo.app" },
          { label: "媒體資訊", href: "https://press.eatibo.app" },
        ],
      },
      {
        title: "關於",
        links: [
          { label: "團隊故事", href: "https://eatibo.app/about" },
          { label: "招募人才", href: "https://eatibo.app/careers" },
          { label: "聯絡我們", href: "https://eatibo.app/contact" },
        ],
      },
    ],
  },
  notFound: {
    title: "找不到頁面",
    description: "您造訪的頁面不存在，可能已被移動或刪除。",
    backButton: "返回首頁",
  },
  blog: {
    sidebar: {
      downloadTitle: "下載 Eatibo",
      downloadCta: "下載應用程式",
    },
  },
  smartBanner: {
    appName: "Eatibo: AI 食物掃描與記錄",
    view: "下載",
    close: "關閉",
    viewInAppStore: "從 App Store 下載",
  },
};

export default zhTW;
