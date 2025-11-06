import type { LocaleDictionary } from "./types";

const ko: LocaleDictionary = {
  metadata: {
    title: "EatIt — AI 영양 스캐너 & 코치",
    description:
      "EatIt은 음식이나 성분표를 비추기만 하면 칼로리, 영양소, 알레르겐, 첨가물을 즉시 분석하고, 당신의 식습관 목표에 맞는 맞춤형 조언을 제공합니다.",
    keywords: ["EatIt", "영양 관리", "칼로리 추적", "AI 코치", "알레르기", "식단 기록"],
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
    menuIntro: "EatIt 탐색",
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
      "카메라를 음식이나 성분표에 비추면 EatIt이 몇 초 만에 칼로리, 주요 영양소, 첨가물, 알레르기 위험을 보여주고 당신의 식단 규칙에 맞춰 평가합니다.",
    primaryCta: "EatIt 다운로드",
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
      title: "EatIt 스캐닝 경험",
      items: [
        "첨가물·알레르겐 자동 감지",
        "일일 영양 균형 리마인드",
        "AI 영양 코치의 대체 제안",
      ],
      pill: "EatIt으로 스캔",
    },
  },
  sections: {
    why: {
      id: "features",
      title: "매일 EatIt을 선택하는 이유",
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
      subtitle: "EatIt은 당신의 기록과 목표를 연결해 다음 선택을 안내합니다.",
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
      subtitle: "EatIt은 문화, 건강, 개인 선택을 존중하며 누구나 안심하고 식사할 수 있도록 돕습니다.",
      items: [
        {
          title: "알레르기·금지 성분 목록",
          description: "개인 알레르겐과 식단 금지 목록을 한 번 설정하면 EatIt이 기억합니다.",
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
    download: {
      id: "download",
      badge: "EatIt 다운로드",
      title: "더 똑똑하게 스캔하고, 자신 있게 먹어요.",
      subtitle:
        "EatIt만 있으면 언제 어디서나 음식과 라벨을 몇 초 만에 해석할 수 있습니다.",
      highlights: [
        "라벨·바코드·음식 사진을 순식간에 분석",
        "알레르기, 목표, 문화적 식단에 맞춘 추천",
        "암호화된 동기화로 식단 기록을 안전하게 보호",
      ],
      storeLabel: "EatIt 받기",
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
      cta: "https://eatit.app/security",
    },
    reviews: {
      id: "stories",
      title: "전 세계의 현명한 식습관러가 선택",
      subtitle: "EatIt과 함께 전통, 맛, 건강을 조화시키는 사람들의 이야기.",
      quote:
        "EatIt 덕분에 마라톤 훈련을 하면서도 가족의 할랄 식단을 지킬 수 있어요. AI 코치가 부족한 영양소를 미리 알려줍니다.",
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
      ],
    },
    faq: {
      id: "faq",
      title: "자주 묻는 질문",
      subtitle: "EatIt 시작 전에 알아두면 좋은 정보들을 모았습니다.",
      items: [
        {
          question: "칼로리와 매크로 인식 정확도는 어느 정도인가요?",
          answer:
            "EatIt은 컴퓨터 비전과 검증된 재료 데이터베이스를 결합합니다. 각 스캔에 정확도 지표가 표시되며, 저장 전에 분량을 조정할 수 있습니다.",
        },
        {
          question: "문화·종교적 식단 규칙도 지원하나요?",
          answer:
            "네. 할랄, 코셔, 채식, 저FODMAP, 씨앗유 프리 등 선호도를 설정하면 EatIt이 충돌을 미리 알려줍니다.",
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
    rights: "© 2024 EatIt. All rights reserved.",
    socialsLabel: "EatIt과 연결하기",
    supportLabel: "도움이 필요하신가요?",
    supportEmail: "cs@clearcrowds.com",
    faqLabel: "FAQ",
    supportChannels: [
      { type: "email", label: "이메일 지원", value: "cs@clearcrowds.com" },
      { type: "phone", label: "영양 헬프라인", value: "+1(305)4621683" },
      { type: "chat", label: "라이브 챗", value: "geteatit.com" },
    ],
    socialLinks: [
      { icon: "fa-brands fa-instagram", href: "https://instagram.com/eatitapp", label: "Instagram" },
      { icon: "fa-brands fa-twitter", href: "https://twitter.com/eatitapp", label: "Twitter" },
      { icon: "fa-brands fa-youtube", href: "https://youtube.com/@eatitapp", label: "YouTube" },
    ],
    navGroups: [
      {
        title: "제품",
        links: [
          { label: "기능", href: "#features" },
          { label: "요금", href: "#pricing" },
          { label: "보안", href: "https://eatit.app/security" },
        ],
      },
      {
        title: "리소스",
        links: [
          { label: "블로그", href: "/blogs" },
          { label: "헬프센터", href: "https://help.eatit.app" },
          { label: "보도자료", href: "https://press.eatit.app" },
        ],
      },
      {
        title: "회사",
        links: [
          { label: "회사 소개", href: "https://eatit.app/about" },
          { label: "채용", href: "https://eatit.app/careers" },
          { label: "문의", href: "https://eatit.app/contact" },
        ],
      },
    ],
  },
  notFound: {
    title: "페이지를 찾을 수 없습니다",
    description: "찾고 계신 페이지가 존재하지 않습니다. 이동되었거나 삭제되었을 수 있습니다.",
    backButton: "홈으로 돌아가기",
  },
};

export default ko;
