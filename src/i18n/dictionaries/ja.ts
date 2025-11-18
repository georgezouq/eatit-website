import type { LocaleDictionary } from "./types";

const ja: LocaleDictionary = {
  metadata: {
    title: "Eatibo — AI栄養スキャナー & コーチ",
    description:
      "Eatibo は料理や原材料表示を撮影するだけで、カロリー、栄養素、アレルゲン、添加物を瞬時に分析し、あなたの食事目標に合わせたアドバイスを届けます。",
    keywords: ["Eatibo", "栄養管理", "カロリー計算", "AIコーチ", "アレルゲン", "フードログ"],
  },
  nav: {
    home: "ホーム",
    features: "機能",
    pricing: "料金",
    download: "ダウンロード",
    faq: "FAQ",
    blog: {
      label: "ブログ",
      href: "/blogs",
    },
    language: "言語",
    menuLabel: "メニュー",
    menuIntro: "Eatibo を見る",
    closeMenu: "メニューを閉じる",
  },
  auth: {
    login: "ログイン",
    signup: "アカウント作成",
  },
  hero: {
    badge: "AI栄養アシスタント",
    title: "一生の健康的な食生活を守る",
    highlight: "",
    description:
      "カメラを料理や成分表示に向けるだけで、Eatibo が数秒でカロリー、マクロ、添加物、アレルゲン、健康リスクを表示し、あなたの食習慣に沿った評価を行います。",
    primaryCta: "Eatibo をダウンロード",
    secondaryCta: "使い方を見る",
    note: "ローカル優先の保存と暗号化同期で、食事データはあなたのもの。",
    rating: {
      value: "4.9",
      label: "12万人以上の利用者が高評価",
      caption: "プライバシーファーストな栄養インテリジェンス。",
    },
    bullets: [
      "カロリーとマクロを瞬時に分析",
      "多様な食文化と健康目標に対応",
      "トレンド分析で日々の変化を実感",
    ],
    visual: {
      title: "Eatibo スキャン体験",
      items: [
        "添加物・アレルゲンの自動検出",
        "毎日の栄養バランス通知",
        "AI栄養士による代替案と提案",
      ],
      pill: "Eatibo でスキャン",
    },
  },
  sections: {
    why: {
      id: "features",
      title: "Eatibo が毎日の相棒になる理由",
      subtitle: "カロリーから隠れた添加物まで、1回のスキャンで食べる判断がクリアになります。",
      items: [
        {
          title: "カロリーを一瞬で把握",
          description: "料理やメニューを撮影するだけで、カロリー・マクロ・適量アドバイスがすぐに届きます。",
        },
        {
          title: "アレルゲンレーダー",
          description: "一般的なアレルゲン、宗教・文化的制限、シードオイルなどのリスクを事前に警告します。",
        },
        {
          title: "目標に寄り添うガイダンス",
          description: "筋力アップ、ハラール、低糖質、減量など目的に合わせてパーソナライズ評価を提供します。",
        },
      ],
    },
    core: {
      id: "tracking",
      title: "誰の身体にもフィットする深い栄養洞察",
      subtitle: "Eatibo は食事記録とあなたのゴールを結び、次のアクションを導きます。",
      cards: [
        {
          title: "カロリー & マクロ管理",
          description: "自動入力、柔軟な目標設定、優しいリマインダーでエネルギー収支を整えます。",
          bullets: [
            "スキャン・音声・クイック入力に対応",
            "活動量に応じたダイナミックな目標",
            "トレーナーや栄養士と共有できるレポート",
          ],
        },
        {
          title: "栄養ギャップインテリジェンス",
          description:
            "不足しがちなビタミン・ミネラル・食物繊維を可視化し、補うための提案を行います。",
          bullets: [
            "週間栄養バランススコアとトレンド",
            "不足栄養に合わせたAIレコメンド",
            "食習慣に沿ったレシピフィルター",
          ],
        },
        {
          title: "AI栄養コーチ",
          description: "最新の食事内容と目標を踏まえ、数秒で注意点・代替案・根拠を提示します。",
          bullets: [
            "状況に応じた即時アドバイス",
            "「安心／控えめ／避ける」の明確な判定",
            "信頼できる情報源へのリンク",
          ],
        },
      ],
    },
    assist: {
      id: "assist",
      title: "ライフスタイルを理解するサポート",
      subtitle: "Eatibo は文化や健康状態、個人の選択を尊重し、誰もが安心して食事を楽しめるようにします。",
      items: [
        {
          title: "アレルギー・禁忌リスト",
          description: "個別のアレルゲンや宗教的制限、避けたい成分を一度設定すれば、Eatibo が記憶します。",
        },
        {
          title: "健康リスクマーカー",
          description: "ナトリウム、糖分、超加工食品が設定値を超えた瞬間にアラートを出します。",
        },
        {
          title: "ウェルネスサブカルチャーにも対応",
          description: "シードオイルフリー、長寿志向、プラントベースのハラールなど、多様な食文化に寄り添います。",
        },
      ],
    },
    smart: {
      id: "smart",
      title: "安全・正確・インクルーシブ",
      subtitle: "プライバシーを重視するヘルスイノベーターにも選ばれる栄養インテリジェンス。",
      bullets: [
        "ローカル処理で写真はデバイス内に保管",
        "制御可能な暗号化クラウドバックアップ",
        "多言語対応の成分・アレルゲンデータベース",
        "オフラインでも利用でき、接続時に自動同期",
      ],
    },
    download: {
      id: "download",
      badge: "Eatibo をダウンロード",
      title: "もっとスマートにスキャンして、自信を持って食べよう。",
      subtitle: "外出先でも Eatibo があれば、料理やラベルを数秒で読み解けます。",
      highlights: [
        "ラベル・バーコード・料理写真を一瞬で解析",
        "アレルギーや食文化、目標に合わせた提案",
        "暗号化された同期で食事履歴を安全に保護",
      ],
      storeLabel: "Eatibo を入手",
      apple: {
        href: "https://itunes.apple.com/us/app/id6753906159",
        label: "App Store",
      },
      google: {
        href: "#",
        label: "Google Play",
      },
      comingSoon: "近日公開、お楽しみに！",
    },
    pricing: {
      id: "pricing",
      title: "目的に合わせて選べるプラン",
      subtitle: "まずは無料で始め、必要に応じて機能を拡張できます。",
      plans: [
        {
          name: "フリー",
          price: "¥0",
          period: "ずっと",
          description: "毎日のスキャンと基本ログをお試しに最適。",
          cta: "無料で始める",
          features: [
            "月30回のスマートスキャン",
            "日次のカロリー & マクロダッシュボード",
            "主要14アレルゲンのアラート",
          ],
        },
        {
          name: "週間メンバー",
          price: "US$5.99",
          period: "週額",
          description: "無制限スキャンと積極的なAIリマインダーを利用できます。",
          cta: "週間プランを選ぶ",
          popular: true,
          features: [
            "スキャンと成分解析が無制限",
            "栄養ギャップのアラートと提案",
            "食事提案を行うAIコーチ",
          ],
        },
        {
          name: "年間メンバー",
          price: "US$59.99",
          period: "年額",
          description: "詳細な分析とコンシェルジュサポートをお得に利用。",
          cta: "年間プランを選ぶ",
          features: [
            "週間メンバーのすべての機能",
            "年間トレンドとレポートのエクスポート",
            "四半期ごとの栄養士チェックイン",
          ],
        },
      ],
      note: "いつでも解約・プラン変更が可能です。ライフスタイルに合わせて柔軟に。",
    },
    privacy: {
      id: "privacy",
      title: "あなたのデータはあなたのもの",
      description: "地域の法規制に準拠しつつ全ログを暗号化。保存場所と利用範囲を自分で管理できます。",
      cta: "https://eatibo.app/security",
    },
    reviews: {
      id: "stories",
      title: "世界中の mindful eaters に愛されるアプリ",
      subtitle: "伝統・味・健康のバランスを取る人々の声。",
      quote:
        "Eatibo があれば、マラソンのトレーニングをしながら家族のハラール習慣を守れます。AIコーチが不足栄養を先回りで教えてくれます。",
      author: "Farah Q.",
      role: "ランナー / 栄養ブロガー",
      stats: {
        value: "120K+",
        label: "よりスマートな食事を記録するコミュニティ",
      },
      items: [
        {
          quote: "子どものおやつを選ぶときにアレルゲン警告があると本当に安心。",
          author: "Daniel R.",
          role: "アレルギー児の父",
        },
        {
          quote: "栄養バランススコアのおかげでエネルギー不足の理由が分かりました。",
          author: "Lina M.",
          role: "ピラティスインストラクター",
        },
        {
          quote: "シェフとして、添加物とシードオイルを瞬時に指摘してくれる点が気に入っています。",
          author: "Marco D.",
          role: "レストランコンサルタント",
        },
      ],
    },
    faq: {
      id: "faq",
      title: "よくある質問",
      subtitle: "Eatibo の始め方に関する代表的な疑問にお答えします。",
      items: [
        {
          question: "カロリー・マクロの検出精度はどの程度ですか？",
          answer:
            "Eatibo はコンピュータビジョンと検証済みの食材データベースを組み合わせています。各スキャンに精度指標が表示され、保存前に分量を調整できます。",
        },
        {
          question: "文化や宗教による食事ルールにも対応できますか？",
          answer:
            "はい。ハラール、コーシャ、ベジタリアン、低FODMAP、シードオイルフリーなどの設定が可能で、衝突する場合は事前に通知します。",
        },
        {
          question: "AI栄養コーチの特徴は？",
          answer:
            "最近の食事履歴や目標、活動量をもとに、置き換え案や不足栄養、信頼できる情報をわかりやすく提示します。",
        },
        {
          question: "データ保護はどうなっていますか？",
          answer:
            "可能な限り端末内で処理し、クラウド同期を有効にした場合も暗号化します。設定画面からいつでもデータをエクスポート・削除できます。",
        },
      ],
    },
  },
  footer: {
    tagline: "あなたのプレートを理解するAIで、もっと賢く食べよう。",
    rights: "© 2024 Eatibo. All rights reserved.",
    socialsLabel: "Eatibo とつながる",
    supportLabel: "サポートが必要ですか？",
    supportEmail: "cs@clearcrowds.com",
    faqLabel: "FAQ",
    supportChannels: [
      { type: "email", label: "メールサポート", value: "cs@clearcrowds.com" },
      { type: "phone", label: "栄養ホットライン", value: "+1(305)4621683" },
      { type: "chat", label: "ライブチャット", value: "www.eatibo.com" },
    ],
    socialLinks: [
      { icon: "fa-brands fa-twitter", href: "https://twitter.com/eatiboapp", label: "X / Twitter" },
      { icon: "fa-brands fa-instagram", href: "https://instagram.com/eatiboapp", label: "Instagram" },
      { icon: "fa-brands fa-youtube", href: "https://youtube.com/@eatiboapp", label: "YouTube" },
    ],
    navGroups: [
      {
        title: "プロダクト",
        links: [
          { label: "機能", href: "#features" },
          { label: "料金", href: "#pricing" },
          { label: "セキュリティ", href: "https://eatibo.app/security" },
        ],
      },
      {
        title: "リソース",
        links: [
          { label: "ブログ", href: "/blogs" },
          { label: "ヘルプセンター", href: "https://help.eatibo.app" },
          { label: "プレスキット", href: "https://press.eatibo.app" },
        ],
      },
      {
        title: "会社情報",
        links: [
          { label: "Eatibo について", href: "https://eatibo.app/about" },
          { label: "採用情報", href: "https://eatibo.app/careers" },
          { label: "お問い合わせ", href: "https://eatibo.app/contact" },
        ],
      },
    ],
  },
  notFound: {
    title: "ページが見つかりません",
    description: "お探しのページは存在しません。移動または削除された可能性があります。",
    backButton: "ホームに戻る",
  },
  blog: {
    sidebar: {
      downloadTitle: "Eatibo をダウンロード",
      downloadCta: "アプリをダウンロード",
    },
  },
};

export default ja;
