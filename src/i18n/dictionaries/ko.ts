import type { LocaleDictionary } from "./types";

const ko: LocaleDictionary = {
  metadata: {
    title: "Eatibo — AI 영양 스캐너 & 코치",
    description:
      "Eatibo은 음식이나 성분표를 비추기만 하면 칼로리, 영양소, 알레르겐, 첨가물을 즉시 분석하고, 당신의 식습관 목표에 맞는 맞춤형 조언을 제공합니다.",
    keywords: ["Eatibo", "영양 관리", "칼로리 추적", "AI 코치", "알레르기", "식단 기록"],
  },
  nav: {
    home: "홈",
    features: "주요 기능",
    pricing: "요금제",
    download: "다운로드",
    faq: "FAQ",
    blog: {
      label: "블로그",
      href: "/blogs",
    },
    language: "언어",
    menuLabel: "메뉴",
    menuIntro: "Eatibo 탐색",
    closeMenu: "메뉴 닫기",
  },
  auth: {
    login: "로그인",
    signup: "계정 만들기",
  },
  hero: {
    badge: "AI 영양 어시스턴트",
    title: "평생 건강한 식습관을 지켜드려요",
    highlight: "",
    description:
      "카메라를 음식이나 성분표에 비추면 Eatibo이 몇 초 만에 칼로리, 주요 영양소, 첨가물, 알레르기 위험을 보여주고 당신의 식단 규칙에 맞춰 평가합니다.",
    primaryCta: "Eatibo 다운로드",
    secondaryCta: "작동 방식 보기",
    note: "로컬 우선 저장과 암호화 동기화로, 데이터는 오직 당신의 것입니다.",
    rating: {
      value: "4.9",
      label: "12만+ 스마트 식습관 사용자 평점",
      caption: "프라이버시를 최우선으로 하는 영양 인텔리전스.",
    },
    bullets: [
      "칼로리와 매크로를 즉시 확인",
      "다양한 식문화와 건강 목표 지원",
      "변화를 보여주는 트렌드 분석",
    ],
    visual: {
      title: "Eatibo 스캐닝 경험",
      items: [
        "첨가물·알레르겐 자동 감지",
        "일일 영양 균형 리마인드",
        "AI 영양 코치의 대체 제안",
      ],
      pill: "Eatibo으로 스캔",
    },
  },
  sections: {
    why: {
      id: "features",
      title: "매일 Eatibo을 선택하는 이유",
      subtitle: "칼로리부터 숨은 첨가물까지, 한 번의 스캔으로 더 현명한 선택을 돕습니다.",
      items: [
        {
          title: "즉시 계산되는 칼로리",
          description: "음식이나 메뉴를 촬영하면 칼로리, 매크로, 적정 분량 팁을 즉시 제공받습니다.",
        },
        {
          title: "알레르기 레이더",
          description: "주요 알레르겐, 종교적 식단 규칙, 씨앗유 등 위험 요소를 미리 경고합니다.",
        },
        {
          title: "목표 기반 조언",
          description: "근력 강화, 할랄, 저탄고지, 체중 관리 등 목표에 맞는 평가와 권장사항을 제공합니다.",
        },
      ],
    },
    core: {
      id: "tracking",
      title: "모든 몸을 위한 깊이 있는 인사이트",
      subtitle: "Eatibo은 당신의 기록과 목표를 연결해 다음 선택을 안내합니다.",
      cards: [
        {
          title: "칼로리 & 매크로 추적",
          description: "자동 기록, 유연한 목표, 부드러운 알림으로 에너지 균형을 유지합니다.",
          bullets: [
            "스캔, 음성, 빠른 입력 지원",
            "활동량에 따라 조정되는 칼로리 목표",
            "트레이너·영양사와 공유 가능한 리포트",
          ],
        },
        {
          title: "영양 격차 인텔리전스",
          description:
            "부족한 비타민·미네랄·식이섬유를 한눈에 확인하고 보완할 수 있는 제안을 제공합니다.",
          bullets: [
            "주간 영양 균형 점수와 추세",
            "부족한 영양소에 맞춘 AI 식단 추천",
            "식단 규칙별 레시피 필터",
          ],
        },
        {
          title: "AI 영양 코치",
          description: "최근 식단과 목표를 바탕으로 즉각적인 알림, 대체 제안, 근거 자료를 제공합니다.",
          bullets: [
            "상황에 맞는 실시간 답변",
            "'먹어도 돼요/조심하세요/바꿔보세요' 등급",
            "신뢰할 수 있는 자료 링크",
          ],
        },
      ],
    },
    assist: {
      id: "assist",
      title: "라이프스타일을 이해하는 지원",
      subtitle: "Eatibo은 문화, 건강, 개인 선택을 존중하며 누구나 안심하고 식사할 수 있도록 돕습니다.",
      items: [
        {
          title: "알레르기·금지 성분 목록",
          description: "개인 알레르겐과 식단 금지 목록을 한 번 설정하면 Eatibo이 기억합니다.",
        },
        {
          title: "건강 위험 표시",
          description: "나트륨, 당류, 초가공 지표가 설정한 한계를 넘으면 즉시 경고합니다.",
        },
        {
          title: "식문화 서브컬처 친화",
          description: "씨앗유 프리, 웰빙, 플랜트 기반 할랄 등 다양한 식문화 언어를 이해합니다.",
        },
      ],
    },
    smart: {
      id: "smart",
      title: "안전하고 정밀하며 모두를 포용",
      subtitle: "프라이버시를 중시하는 헬스 혁신가들도 신뢰하는 영양 인텔리전스.",
      bullets: [
        "로컬 우선 처리로 사진은 기기에 저장",
        "사용자가 제어하는 암호화 클라우드 백업",
        "다국어 성분·알레르겐 데이터베이스",
        "오프라인 사용 가능, 온라인 시 자동 동기화",
      ],
    },
    includes: {
      id: "pricing",
      badge: "Eatibo에는 무엇이 포함되나요?",
      title: "Eatibo에는 무엇이 포함되나요?",
      subtitle: "식품 스캔부터 체중 관리까지, 일상 건강 루틴을 위한 핵심 기능을 한 번에 제공합니다.",
      autoplayLabel: "Eatibo 핵심 기능 캐러셀",
      features: [
        {
          key: "scan-diets",
          title: "음식 스캔과 식습관",
          description: "라벨 또는 식단을 스캔하면 당신의 식사 성향에 맞춰 분석합니다.",
          points: [
            "지중해식·무카놀라유·키토·할랄 지원",
            "누적 습관 기반 맞춤 제안",
          ],
          image: {
            src: "/assets/images/media/img_16.png",
            alt: "Eatibo 음식 스캔 화면",
          },
        },
        {
          key: "health-alerts",
          title: "식단 건강 알림",
          description: "먹기 전, 숨은 위험 요소를 미리 확인하세요.",
          points: [
            "첨가물 경고로 위험 요소 사전 확인",
            "개인 프로필 기반 알레르기 알림",
          ],
          image: {
            src: "/assets/images/media/img_17.png",
            alt: "Eatibo 첨가물 및 알레르기 알림",
          },
        },
        {
          key: "medication",
          title: "복약 알림",
          description: "생활 리듬에 맞춘 알림으로 복약 누락을 줄입니다.",
          points: [
            "식사와 일정에 맞춘 일일 리마인드",
            "방해를 줄인 부드러운 알림",
          ],
          image: {
            src: "/assets/images/media/img_18.png",
            alt: "Eatibo 복약 알림 화면",
          },
        },
        {
          key: "hydration",
          title: "수분 섭취 알림",
          description: "물 섭취량을 간편하게 추적하고 습관을 유지하세요.",
          points: [
            "시간·활동 기반 스마트 알림",
            "하루 진행률 시각화",
          ],
          image: {
            src: "/assets/images/media/img_19.png",
            alt: "Eatibo 수분 섭취 트래커",
          },
        },
        {
          key: "weight-goals",
          title: "체중 관리",
          description: "감량과 증량 목표를 모두 지원하는 안전한 관리 플로우.",
          points: [
            "감량/증량 듀얼 모드 제공",
            "스캔 기록 기반 추세 피드백",
          ],
          image: {
            src: "/assets/images/media/img_20.png",
            alt: "Eatibo 체중 목표 차트",
          },
        },
      ],
    },
    download: {
      id: "download",
      badge: "Eatibo 다운로드",
      title: "식단 건강을 오래 가는 습관으로",
      subtitle:
        "Eatibo는 영양 균형, 복약 알림, 수분 관리, 체중 추세를 하나의 일상 루틴으로 묶어줍니다.",
      highlights: [
        "영양 결핍을 조기에 발견하고 바로 실천 가능한 식단 대안을 제안",
        "복약·수분 알림을 내 생활 리듬에 맞춰 놓치지 않게 관리",
        "체중·대사 추세를 꾸준히 추적하면서 개인정보는 안전하게 보호",
      ],
      storeLabel: "Eatibo 받기",
      apple: {
        href: "https://itunes.apple.com/us/app/id6753906159",
        label: "App Store",
      },
      google: {
        href: "#",
        label: "Google Play",
      },
      comingSoon: "곧 출시됩니다. 기대해 주세요!",
    },
    pricing: {
      id: "pricing",
      title: "목표를 응원하는 요금제",
      subtitle: "무료로 시작하고 필요할 때 더 깊은 기능을 열어보세요.",
      plans: [
        {
          name: "무료",
          price: "₩0",
          period: "영구",
          description: "일일 스캔과 기본 기록을 부담 없이 체험하세요.",
          cta: "무료로 시작",
          features: [
            "월 30회 스마트 스캔",
            "일일 칼로리 & 매크로 대시보드",
            "주요 14대 알레르겐 알림",
          ],
        },
        {
          name: "주간 멤버십",
          price: "US$5.99",
          period: "주당",
          description: "무제한 스캔과 적극적인 AI 알림을 이용하세요.",
          cta: "주간 요금제 선택",
          popular: true,
          features: [
            "무제한 스캔과 성분 분석",
            "영양 격차 알림과 맞춤 제안",
            "식사 교체를 돕는 AI 코치",
          ],
        },
        {
          name: "연간 멤버십",
          price: "US$59.99",
          period: "연간",
          description: "깊이 있는 분석과 컨시어지 지원을 합리적으로 이용하세요.",
          cta: "연간 요금제 선택",
          features: [
            "주간 멤버십의 모든 혜택",
            "연간 트렌드 리포트 및 내보내기",
            "분기별 영양사 체크인",
          ],
        },
      ],
      note: "언제든지 해지하거나 변경할 수 있습니다. 목표에 맞춰 유연하게 조정하세요.",
    },
    privacy: {
      id: "privacy",
      title: "당신의 식단 데이터는 당신의 것",
      description: "지역 규정을 준수하면서 모든 기록을 암호화하고, 저장 위치와 사용 권한을 직접 관리할 수 있습니다.",
      cta: "https://eatibo.app/security",
    },
    reviews: {
      id: "stories",
      title: "전 세계의 현명한 식습관러가 선택",
      subtitle: "Eatibo과 함께 전통, 맛, 건강을 조화시키는 사람들의 이야기.",
      quote:
        "Eatibo 덕분에 마라톤 훈련을 하면서도 가족의 할랄 식단을 지킬 수 있어요. AI 코치가 부족한 영양소를 미리 알려줍니다.",
      author: "Farah Q.",
      role: "러너 & 푸드 크리에이터",
      stats: {
        value: "120K+",
        label: "더 똑똑한 식사를 기록하는 커뮤니티",
      },
      items: [
        {
          quote: "알레르기 알림 덕분에 아이 간식을 고를 때 훨씬 안심됩니다.",
          author: "Daniel R.",
          role: "알레르기 아동 부모",
        },
        {
          quote: "영양 균형 점수가 에너지 저하 원인을 찾아줬어요.",
          author: "Lina M.",
          role: "필라테스 강사",
        },
        {
          quote: "셰프로서 첨가물과 씨앗유를 빠르게 표시해주는 점이 마음에 듭니다.",
          author: "Marco D.",
          role: "레스토랑 컨설턴트",
        },
        {
          quote: "복약 알림을 식사와 묶은 뒤로 갑상선 약을 90일 연속으로 놓치지 않았어요.",
          author: "Priya S.",
          role: "프로덕트 매니저 / 갑상선저하증 사용자",
        },
        {
          quote: "수분 알림이 과하지 않아서 좋아요. 2주 만에 오후 두통이 거의 사라졌습니다.",
          author: "Ethan K.",
          role: "원격 소프트웨어 엔지니어",
        },
        {
          quote: "할랄 케이터링을 운영하는데, 새 공급처의 숨은 첨가물을 서비스 전에 잡아줘요.",
          author: "Amina H.",
          role: "케이터링 창업자",
        },
        {
          quote: "아버지가 당뇨와 고혈압이 있는데, 당·나트륨 경고 덕분에 배달 메뉴를 훨씬 안전하게 고릅니다.",
          author: "Carlos V.",
          role: "가족 돌봄자",
        },
        {
          quote: "야간 ICU 간호사인데 주간 영양 결핍 요약이 뭘 보충해야 하는지 딱 알려줘요.",
          author: "Mia T.",
          role: "ICU 간호사",
        },
      ],
    },
    faq: {
      id: "faq",
      title: "자주 묻는 질문",
      subtitle: "Eatibo 시작 전에 알아두면 좋은 정보들을 모았습니다.",
      items: [
        {
          question: "칼로리와 매크로 인식 정확도는 어느 정도인가요?",
          answer:
            "Eatibo은 컴퓨터 비전과 검증된 재료 데이터베이스를 결합합니다. 각 스캔에 정확도 지표가 표시되며, 저장 전에 분량을 조정할 수 있습니다.",
        },
        {
          question: "문화·종교적 식단 규칙도 지원하나요?",
          answer:
            "네. 할랄, 코셔, 채식, 저FODMAP, 씨앗유 프리 등 선호도를 설정하면 Eatibo이 충돌을 미리 알려줍니다.",
        },
        {
          question: "AI 영양 코치가 특별한 이유는?",
          answer:
            "최근 섭취 내용과 목표, 활동량을 분석해 대체 제안, 영양 결핍, 신뢰할 수 있는 자료를 친절하게 제공합니다.",
        },
        {
          question: "내 데이터는 어떻게 보호되나요?",
          answer:
            "가능한 한 기기에서 처리하고, 클라우드 동기화를 사용할 경우에도 암호화됩니다. 설정에서 언제든지 데이터를 내보내거나 삭제할 수 있습니다.",
        },
      ],
    },
  },
  footer: {
    tagline: "내 식탁을 이해하는 AI와 함께 현명하게 먹어요.",
    rights: "© 2024 Eatibo. All rights reserved.",
    socialsLabel: "Eatibo과 연결하기",
    supportLabel: "도움이 필요하신가요?",
    supportEmail: "cs@clearcrowds.com",
    faqLabel: "FAQ",
    supportChannels: [
      { type: "email", label: "이메일 지원", value: "cs@clearcrowds.com" },
      { type: "phone", label: "영양 헬프라인", value: "+1(305)4621683" },
      { type: "chat", label: "라이브 챗", value: "www.eatibo.com" },
    ],
    socialLinks: [
      { icon: "brand-bluesky", href: "https://bsky.app/profile/linaeatibo.bsky.social", label: "Bluesky" },
      { icon: "fa-brands fa-instagram", href: "https://www.instagram.com/linaeatibo/", label: "Instagram" },
      { icon: "brand-mastodon", href: "https://mastodon.social/@georgezou", label: "Mastodon" },
    ],
    navGroups: [
      {
        title: "제품",
        links: [
          { label: "기능", href: "#features" },
          { label: "요금", href: "#pricing" },
          { label: "보안", href: "https://eatibo.app/security" },
        ],
      },
      {
        title: "리소스",
        links: [
          { label: "블로그", href: "/blogs" },
          { label: "헬프센터", href: "https://help.eatibo.app" },
          { label: "보도자료", href: "https://press.eatibo.app" },
        ],
      },
      {
        title: "회사",
        links: [
          { label: "회사 소개", href: "https://eatibo.app/about" },
          { label: "채용", href: "https://eatibo.app/careers" },
          { label: "문의", href: "https://eatibo.app/contact" },
        ],
      },
    ],
  },
  notFound: {
    title: "페이지를 찾을 수 없습니다",
    description: "찾고 계신 페이지가 존재하지 않습니다. 이동되었거나 삭제되었을 수 있습니다.",
    backButton: "홈으로 돌아가기",
  },
  blog: {
    sidebar: {
      downloadTitle: "Eatibo 다운로드",
      downloadCta: "앱 다운로드",
    },
  },
  smartBanner: {
    appName: "Eatibo: AI 음식 스캔 및 기록",
    view: "다운로드",
    close: "닫기",
    viewInAppStore: "App Store에서 다운로드",
  },
};

export default ko;
