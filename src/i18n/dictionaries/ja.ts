import type { LocaleDictionary } from "./types";

export const ja: LocaleDictionary = {
  metadata: {
    title: "HairWow — AIヘアスタイル試着とヘア分析",
    description:
      "HairWow は 100 種類以上のヘアスタイルと無限のカラーを瞬時に試し、プロレベルのヘア分析とパーソナルケア提案を届けます。",
    keywords: [
      "HairWow",
      "AI ヘアスタイル",
      "ヘアカラー",
      "バーチャル試着",
      "ヘア分析",
      "ひげ試着",
      "AR selfie",
      "ビューティーテック",
    ],
  },
  nav: {
    home: "ホーム",
    features: "機能",
    pricing: "料金",
    download: "ダウンロード",
    blog: {
      label: "ブログ",
      href: "https://blog.hairwow.ai",
    },
    language: "言語",
    menuLabel: "メニュー",
    menuIntro: "HairWow をナビゲート",
    closeMenu: "メニューを閉じる",
  },
  hero: {
    badge: "AI ヘアメイク",
    title: "3秒で",
    highlight: "新しいヘアスタイル",
    titleSuffix: "",
    description:
      "髪の一本一本を捉える AI で、新しい自分に出会う。100+ のスタイルと無限のカラーを数秒で試し、専門家レベルの分析とケアアドバイスを受け取れます。",
    primaryCta: "無料で試す",
    secondaryCta: "ヘア分析デモを見る",
    note: "カットもカラーも不要。まずはバーチャルで。",
    rating: {
      value: "4.9/5",
      label: "8 万件以上の変身での平均評価",
      caption: "クリエイターが SNS 用ルックに選ぶアプリ。",
    },
    bullets: [
      "長さ・ボリューム・前髪・カラーをリアルタイム調整",
      "顔立ちに合わせたスマートレコメンド",
      "ビフォー／アフターを HD で保存・共有",
    ],
    visual: {
      title: "Hair Health AI スタジオ",
      items: [
        "テクスチャー・ポーラス・ツヤ指数",
        "スマートカラーリミックス提案",
        "AI スタイリストの 1:1 コーチング",
      ],
      pill: "HairWow をダウンロード",
    },
  },
  sections: {
    why: {
      id: "why",
      title: "HairWow が愛される理由",
      subtitle: "たった 1 タップで気分が上がる、髪に優しい AI 体験。",
      items: [
        {
          title: "ワンタップ試着",
          description: "写真でもライブカメラでも即座にカラーとスタイルを切り替え。",
        },
        {
          title: "超リアルなプレビュー",
          description: "カールやレイヤー、細かな後れ毛まで捉えて自然な仕上がりに。",
        },
        {
          title: "パーソナルレコメンド",
          description: "顔の輪郭と肌トーンを分析し、最も似合うルックを提案。",
        },
        {
          title: "SNS に即シェア",
          description: "TikTok・Instagram・Snapchat 用のビフォー／アフターを瞬時に出力。",
        },
      ],
    },
    core: {
      id: "core",
      title: "主要機能",
      subtitle: "さりげないチェンジもフルリニューアルも、すべてパーソナルに。",
      cards: [
        {
          title: "ヘアスタイル試着",
          description: "ピクシー、ボブ、ロブ、レイヤー、ウェーブ、カール、前髪など 100+ ルック。",
          bullets: [
            "長さ・ボリューム・分け目を自在に調整",
            "お気に入りスタイルを並べて比較",
            "グラデーションや暖色／寒色も細かく調整",
          ],
        },
        {
          title: "ヘア分析",
          description: "質感、ポーラス、うねり、密度、ツヤ、頭皮の状態までプロ視点で解析。",
          bullets: [
            "Hair Health Score とルーティンをレポート",
            "洗う・ケアする・守るの各ステップを提案",
            "AI スタイリストがカラーやカットを 1:1 でアドバイス",
          ],
        },
        {
          title: "ひげ試着",
          description: "ライトな無精ひげからフルビアード、口ひげまで自然にマッピング。",
          bullets: [
            "濃さ・長さ・色味を細かくコントロール",
            "ヘアカラーと統一して完成度アップ",
            "スタイルを保存して理髪店や撮影に共有",
          ],
        },
      ],
    },
    assist: {
      id: "assist",
      title: "仕上げを支えるツール",
      subtitle: "撮影からコーデまでワンフローで完結。",
      items: [
        {
          title: "不要物の除去",
          description: "ケーブルや雑物、フォトボマーをサッと消して主役感アップ。",
        },
        {
          title: "アウトフィット試着",
          description: "トレンドコーデを合わせてシルエットと色の相性をチェック。",
        },
        {
          title: "ジュエリー試着",
          description: "ピアスやネックレスなどアクセまで一気に合わせられます。",
        },
      ],
    },
    smart: {
      id: "smart",
      title: "スマート・高速・インクルーシブ",
      subtitle: "どんな光やデバイス、髪質にも対応するプレビュー体験。",
      bullets: [
        "彩度・暖色／寒色・グラデーションを微調整できるカラースライダー",
        "季節ごとのコレクションとバイラルトレンドを継続更新",
        "低遅延プレビューで暗所でも鮮明",
        "ストレート・ウェーブ・カーリー・コイリーまで幅広く対応",
      ],
    },
    pricing: {
      id: "pricing",
      title: "プランを選ぶ",
      subtitle: "無料で始めて、自分のペースで Premium プランを選択。",
      plans: [
        {
          name: "Free",
          price: "$0",
          period: "/ずっと",
          description: "すべての機能を各5回まで試せて、書き出しはウォーターマーク付き。",
          cta: "無料で体験",
          features: [
            "全機能で使える合計5クレジット",
            "ヘア・ヒゲ・アウトフィットの試着にアクセス",
            "HairWow ウォーターマーク入りでダウンロード",
          ],
        },
        {
          name: "Premium ウィークリー",
          price: "$5.99",
          period: "/週",
          description: "週払いで Premium の全機能を無制限に楽しめます。",
          cta: "週プランにする",
          popular: true,
          features: [
            "全機能が使い放題",
            "アプリ内広告ゼロ",
            "HD・ウォーターマークなしでエクスポート",
          ],
        },
        {
          name: "Premium 年間",
          price: "$59.90",
          period: "/年",
          description: "1年分まとめて Premium 特典を手に入れてお得に。",
          cta: "年間プランにする",
          features: [
            "全機能が使い放題",
            "アプリ内広告ゼロ",
            "HD・ウォーターマークなしでエクスポート",
          ],
        },
      ],
      note: "サロンやブランド向けプランもご相談ください。",
    },
    privacy: {
      id: "privacy",
      title: "写真の主導権はあなたに",
      description:
        "プライバシーはセルフケアの一部。保存・共有・削除はすべてあなた次第。HairWow が無断で投稿することはありません。",
      cta: "プライバシーポリシーを見る",
    },
    reviews: {
      id: "reviews",
      title: "スタイリストとクリエイターに愛される理由",
      subtitle: "毎週数千件のセッションが自信を生む瞬間をサポート。",
      quote:
        "HairWow はカラーとカールの再現度が驚くほど高い。クライアントが大胆なアイデアを試し、AI スタイリストのケア提案もプロ目線で信頼できます。",
      author: "Maya Chen",
      role: "Glow Lab Studio リードカラーリスト",
    },
  },
  footer: {
    tagline: "HairWow — すべての髪に AI の輝きを。",
    rights: "© 2024 HairWow. 無断複写・転載を禁じます。",
    socialsLabel: "HairWow をフォロー",
    supportLabel: "サポート窓口：",
    supportEmail: "cs@clearcrowds.com",
  },
};

export default ja;
