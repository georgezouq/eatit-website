import type { LocaleDictionary } from "./types";

const zhTW: LocaleDictionary = {
  metadata: {
    title: "EatIt —— AI 營養掃描與飲食顧問",
    description:
      "EatIt 能即時辨識餐點或成分表中的熱量、營養素、過敏原與添加物，並依據你的飲食目標提供個人化建議。",
    keywords: ["EatIt", "營養掃描", "熱量記錄", "AI 飲食顧問", "過敏原辨識", "健康飲食"],
  },
  nav: {
    home: "首頁",
    features: "功能亮點",
    pricing: "方案價格",
    download: "下載 App",
    faq: "常見問題",
    blog: {
      label: "部落格",
      href: "https://blog.eatit.app",
    },
    language: "語言",
    menuLabel: "選單",
    menuIntro: "瀏覽 EatIt",
    closeMenu: "關閉選單",
  },
  auth: {
    login: "登入",
    signup: "建立帳號",
  },
  hero: {
    badge: "AI 營養助手",
    title: "掃一下",
    highlight: "就搞懂",
    description:
      "將鏡頭對準餐盤或成分表，EatIt 會在數秒內呈現熱量、營養素、添加物與健康風險，並結合你的飲食規則給出建議。",
    primaryCta: "立即下載 EatIt",
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
      title: "EatIt 掃描體驗",
      items: [
        "辨識成分中的添加物與過敏原",
        "每日營養平衡提醒",
        "AI 營養顧問提供替代方案",
      ],
      pill: "用 EatIt 掃描",
    },
  },
  sections: {
    why: {
      id: "features",
      title: "EatIt 為什麼值得信賴",
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
          description: "無論增肌、控糖或清真飲食，EatIt 都能提供量身打造的判斷。",
        },
      ],
    },
    core: {
      id: "tracking",
      title: "滿足每種體質的深度洞察",
      subtitle: "EatIt 連結日常記錄與健康目標，幫助你做出下一步最佳選擇。",
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
      subtitle: "EatIt 尊重文化、健康與個人選擇，讓每一餐都更自在。",
      items: [
        {
          title: "過敏／禁忌清單",
          description: "一次設定個人過敏原、宗教飲食與黑名單成分，EatIt 永遠記得。",
        },
        {
          title: "健康風險標記",
          description: "鈉、糖或超加工指標超過自訂門檻時即刻提醒。",
        },
        {
          title: "飲食亞文化友善",
          description: "無籽油、養生、植物性清真等飲食風格，EatIt 都懂。",
        },
      ],
    },
    smart: {
      id: "smart",
      title: "安全．精準．包容",
      subtitle: "先進食物智能與隱私保護同步兼顧。",
      bullets: [
        "本機優先處理，影像不上傳",
        "啟用雲端同步後全程加密",
        "多語系成分與過敏原資料庫",
        "離線可用，連網即自動同步",
      ],
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
          name: "EatIt Plus",
          price: "NT$240",
          period: "每月",
          description: "解鎖無限次掃描與主動 AI 指導。",
          cta: "升級 Plus",
          popular: true,
          features: [
            "無限次掃描與成分辨識",
            "動態營養缺口分析",
            "專屬 AI 顧問習慣提醒",
          ],
        },
        {
          name: "EatIt Pro",
          price: "NT$2,300",
          period: "每年",
          description: "年付優惠，享有進階報表與優先支援。",
          cta: "升級 Pro",
          features: [
            "包含 Plus 全部功能",
            "深度趨勢匯出與整合",
            "每季優先營養師諮詢",
          ],
        },
      ],
      note: "需要企業健康方案？歡迎聯繫我們取得專屬營養儀表板。",
    },
    privacy: {
      id: "privacy",
      title: "你的飲食資料只屬於你",
      description: "我們遵循本機優先與區域法規，加密守護每一筆記錄，並提供完整資料控制權。",
      cta: "https://eatit.app/security",
    },
    reviews: {
      id: "stories",
      title: "全球吃貨都在用 EatIt",
      subtitle: "用更聰明的方式平衡傳統、口味與健康。",
      quote: "EatIt 讓我在備戰馬拉松時仍能遵守清真飲食，AI 顧問會提早提醒營養缺口。",
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
          quote: "身為主廚，我喜歡 EatIt 快速標示添加物與籽油。",
          author: "Marco D.",
          role: "餐飲顧問",
        },
      ],
    },
    faq: {
      id: "faq",
      title: "常見問題",
      subtitle: "這裡彙整了大家最關心的 EatIt 提問。",
      items: [
        {
          question: "AI 辨識熱量與營養有多準確？",
          answer: "EatIt 結合電腦視覺與權威成分資料庫，每次掃描都會顯示可信度，你也能在儲存前微調份量。",
        },
        {
          question: "可以支援宗教或文化飲食規範嗎？",
          answer: "沒問題。設定清真、猶太飲食、素食、低 FODMAP、無籽油等偏好，EatIt 會在衝突前提醒。",
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
    rights: "© 2024 EatIt. 版權所有。",
    socialsLabel: "關注 EatIt",
    supportLabel: "需要協助嗎？",
    supportEmail: "hello@eatit.app",
    faqLabel: "常見問題",
    supportChannels: [
      { type: "email", label: "電子郵件", value: "hello@eatit.app" },
      { type: "phone", label: "營養顧問專線", value: "+886 2-5550-1234" },
      { type: "chat", label: "線上即時客服", value: "app.eatit.app/support" },
    ],
    socialLinks: [
      { icon: "fa-brands fa-facebook", href: "https://facebook.com/eatitapp", label: "Facebook" },
      { icon: "fa-brands fa-instagram", href: "https://instagram.com/eatitapp", label: "Instagram" },
      { icon: "fa-brands fa-twitter", href: "https://twitter.com/eatitapp", label: "Twitter" },
    ],
    navGroups: [
      {
        title: "產品",
        links: [
          { label: "功能", href: "#features" },
          { label: "方案", href: "#pricing" },
          { label: "安全性", href: "https://eatit.app/security" },
        ],
      },
      {
        title: "資源",
        links: [
          { label: "部落格", href: "https://blog.eatit.app" },
          { label: "說明中心", href: "https://help.eatit.app" },
          { label: "媒體資訊", href: "https://press.eatit.app" },
        ],
      },
      {
        title: "關於",
        links: [
          { label: "團隊故事", href: "https://eatit.app/about" },
          { label: "招募人才", href: "https://eatit.app/careers" },
          { label: "聯絡我們", href: "https://eatit.app/contact" },
        ],
      },
    ],
  },
};

export default zhTW;
