import type { LocalizedText } from "@/data/siteContent";

type CommunityItem = {
  title: LocalizedText;
  category: LocalizedText;
  body: LocalizedText;
  image: string;
  alt: LocalizedText;
};

export const communityContent: {
  hero: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    lead: LocalizedText;
    primaryCta: LocalizedText;
    secondaryCta: LocalizedText;
  };
  programs: {
    kicker: LocalizedText;
    title: LocalizedText;
    lead: LocalizedText;
    items: CommunityItem[];
  };
  context: {
    kicker: LocalizedText;
    title: LocalizedText;
    body: LocalizedText;
    cta: LocalizedText;
  };
} = {
  hero: {
    eyebrow: {
      ja: "Community & Other Programs",
      en: "Community & Other Programs"
    },
    title: {
      ja: "地域とライフステージに寄り添う、ウェルネスの実践",
      en: "Wellness practice across communities and life stages"
    },
    lead: {
      ja: "企業向けウェルネスの土台となる、女性の健康、アクティブエイジング、地域活動、国際的なウェルネスの取り組みをご紹介します。",
      en: "Selected work in women's wellness, active aging, community programs, and international wellbeing that informs Kanako's workplace wellness practice."
    },
    primaryCta: {
      ja: "企業向けサービスを見る",
      en: "Explore corporate wellness"
    },
    secondaryCta: {
      ja: "活動を見る",
      en: "View programs"
    }
  },
  programs: {
    kicker: {
      ja: "Selected Programs",
      en: "Selected Programs"
    },
    title: {
      ja: "身体を動かすことから生まれる、多様なつながり",
      en: "Different ways movement can support connection"
    },
    lead: {
      ja: "対象や環境が変わっても、誰もが安心して参加でき、自分自身や周囲の人とつながれる場づくりを大切にしています。",
      en: "Across different audiences and settings, each program is designed to help people participate with confidence and connect with themselves and others."
    },
    items: [
      {
        title: {
          ja: "Active Aging Fitball",
          en: "Active Aging Fitball"
        },
        category: {
          ja: "Active Aging",
          en: "Active Aging"
        },
        body: {
          ja: "バランスボール、モビリティ、機能的な身体づくりを組み合わせ、年齢を重ねても楽しく動き続けられる体験を設計します。",
          en: "Joyful, sustainable movement experiences combining fitball work, mobility, and functional conditioning for active aging."
        },
        image: "/images/kanako-wellness-hero.png",
        alt: {
          ja: "バランスボールを使ったウェルネスプログラム",
          en: "A fitball-based wellness program"
        }
      },
      {
        title: {
          ja: "Postpartum / Women's Wellness",
          en: "Postpartum / Women's Wellness"
        },
        category: {
          ja: "Life-Stage Support",
          en: "Life-Stage Support"
        },
        body: {
          ja: "産後の回復や女性のライフステージに寄り添い、身体を整えながら、自信や人とのつながりを取り戻す時間をつくります。",
          en: "Supportive programs that help women navigate postpartum recovery and life-stage transitions while rebuilding confidence and connection."
        },
        image: "/images/portfolio-madre-bonita.jpg",
        alt: {
          ja: "産後ケアのグループウェルネスプログラム",
          en: "A supportive postpartum group wellness program"
        }
      },
      {
        title: {
          ja: "World Wellness Weekend Japan",
          en: "World Wellness Weekend Japan"
        },
        category: {
          ja: "International Wellness",
          en: "International Wellness"
        },
        body: {
          ja: "国際的なウェルネスイベントの日本での連携・企画運営を通じて、地域と世界、多様な参加者をつなぐ体験をつくります。",
          en: "Connecting local participation with an international wellness movement through partnerships, planning, and event leadership in Japan."
        },
        image: "/images/portfolio-world-wellness-weekend.jpg",
        alt: {
          ja: "World Wellness Weekend Japanの活動",
          en: "World Wellness Weekend Japan activity"
        }
      },
      {
        title: {
          ja: "FloatFit",
          en: "FloatFit"
        },
        category: {
          ja: "Aquatic Wellness",
          en: "Aquatic Wellness"
        },
        body: {
          ja: "水上での運動ならではの楽しさと挑戦を活かし、参加者が自然に集中し、交流できるウェルネス体験を届けます。",
          en: "Aquatic wellness experiences that use the enjoyment and challenge of movement on water to encourage focus, confidence, and connection."
        },
        image: "/images/portfolio-floatfit.jpg",
        alt: {
          ja: "FloatFitの水上ウェルネス体験",
          en: "A FloatFit aquatic wellness experience"
        }
      },
      {
        title: {
          ja: "OBABU",
          en: "OBABU"
        },
        category: {
          ja: "Community Wellness",
          en: "Community Wellness"
        },
        body: {
          ja: "ミッドライフ女性が安心して身体を動かし、話し、創造性を楽しみながらつながれるコミュニティウェルネスの取り組みです。",
          en: "A community wellness initiative where midlife women can move, talk, create, and connect in a welcoming environment."
        },
        image: "/images/portfolio-obabu.jpg",
        alt: {
          ja: "OBABUのコミュニティウェルネス活動",
          en: "An OBABU community wellness activity"
        }
      }
    ]
  },
  context: {
    kicker: {
      ja: "How It Connects",
      en: "How It Connects"
    },
    title: {
      ja: "多様な現場での経験を、働く人とチームのウェルネスへ",
      en: "Bringing experience from diverse settings into workplace wellness"
    },
    body: {
      ja: "地域活動、産後ケア、多世代への運動指導、国際的なウェルネス連携で培った経験が、企業向けプログラムの参加しやすさと心理的安全性を支えています。",
      en: "Experience across community programs, postpartum care, multigenerational instruction, and international wellness informs the accessibility and psychological safety of Kanako's workplace programs."
    },
    cta: {
      ja: "Corporate Wellnessへ戻る",
      en: "Return to Corporate Wellness"
    }
  }
};
