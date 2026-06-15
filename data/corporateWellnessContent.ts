import type { Locale, LocalizedText } from "@/data/siteContent";

type LocalizedList = Record<Locale, string[]>;

type LocalizedCard = {
  title: LocalizedText;
  body: LocalizedText;
};

type FormatCard = LocalizedCard & {
  meta: LocalizedText;
};

export const corporateWellnessNavItems = [
  { id: "offer", label: { ja: "Offer", en: "Offer" } },
  { id: "why", label: { ja: "Why Kanako", en: "Why Kanako" } },
  { id: "experience", label: { ja: "Experience", en: "Experience" } },
  { id: "formats", label: { ja: "Formats", en: "Formats" } }
] as const;

export const corporateWellnessContent: {
  hero: {
    eyebrow: LocalizedText;
    name: LocalizedText;
    professionalTitle: LocalizedText;
    headline: LocalizedText;
    lead: LocalizedText;
    primaryCta: LocalizedText;
    secondaryCta: LocalizedText;
  };
  offer: {
    kicker: LocalizedText;
    title: LocalizedText;
    lead: LocalizedText;
    items: LocalizedCard[];
  };
  why: {
    kicker: LocalizedText;
    title: LocalizedText;
    lead: LocalizedText;
    items: LocalizedCard[];
  };
  experience: {
    kicker: LocalizedText;
    title: LocalizedText;
    lead: LocalizedText;
    profile: {
      name: LocalizedText;
      title: LocalizedText;
      bio: LocalizedText;
      certificationsTitle: LocalizedText;
      certifications: LocalizedText[];
    };
    items: LocalizedCard[];
  };
  formats: {
    kicker: LocalizedText;
    title: LocalizedText;
    lead: LocalizedText;
    items: FormatCard[];
  };
  contact: {
    kicker: LocalizedText;
    title: LocalizedText;
    body: LocalizedText;
    primaryCta: LocalizedText;
    prompts: LocalizedList;
  };
} = {
  hero: {
    eyebrow: {
      ja: "Corporate Wellness",
      en: "Corporate Wellness"
    },
    name: {
      ja: "仲井 果菜子",
      en: "Kanako Nakai"
    },
    professionalTitle: {
      ja: "日英対応・職場ウェルネスプログラムデザイナー",
      en: "Bilingual Workplace Wellness Program Designer"
    },
    headline: {
      ja: "人とチームが元気に動き出す、職場のウェルネスプログラム",
      en: "Movement-Based Wellbeing for International and Local Teams"
    },
    lead: {
      ja: "身体を動かすことから、働く人とチームのよりよい毎日をつくります。",
      en: "Movement experiences that help people and teams work better together."
    },
    primaryCta: {
      ja: "問い合わせる",
      en: "Start an inquiry"
    },
    secondaryCta: {
      ja: "プログラム例を見る",
      en: "View formats"
    }
  },
  offer: {
    kicker: {
      ja: "What I Offer",
      en: "What I Offer"
    },
    title: {
      ja: "働く環境に、ウェルネスを組み込む",
      en: "Bringing wellness into the way people work"
    },
    lead: {
      ja: "職場で生まれる課題に応える、3つのプログラムです。",
      en: "Three programs designed around common workplace challenges."
    },
    items: [
      {
        title: {
          ja: "Global Team Wellness",
          en: "Global Team Wellness"
        },
        body: {
          ja: "国際的・多文化なチームのためのムーブメント型チームビルディング。部署や役割、言語背景の違いを越えた自然な交流を促します。",
          en: "Movement-based team building for international and multicultural teams, encouraging natural interaction across departments, roles, and language backgrounds."
        }
      },
      {
        title: {
          ja: "Return-to-Work Wellness",
          en: "Return-to-Work Wellness"
        },
        body: {
          ja: "育児休業から復帰する方、特に産後の回復期にある女性を支えるプログラム。身体を整えるだけでなく、テーマに沿った対話を通じて自分自身を振り返り、社会とのつながりや働く自分を少しずつ取り戻していく時間をつくります。",
          en: "A supportive program for employees returning from parental leave, especially women recovering after childbirth, focused on physical recovery, confidence, and self-awareness."
        }
      },
      {
        title: {
          ja: "Workday Movement & Wellbeing",
          en: "Workday Movement & Wellbeing"
        },
        body: {
          ja: "デスクワーク中心のチームに向けた短時間のセッション。仕事の手を少し止めて姿勢や呼吸を整え、日々の業務に続けやすい小さな習慣を取り入れます。",
          en: "Short sessions for desk-based teams to pause, reset posture and breathing, and build small sustainable habits into the workday."
        }
      }
    ]
  },
  why: {
    kicker: {
      ja: "Why Work With Me",
      en: "Why Work With Me"
    },
    title: {
      ja: "身体を動かしながら、人とつながる時間をつくる",
      en: "Inclusive wellness designed for the workplace"
    },
    lead: {
      ja: "運動経験や体力差、言語の違いがあっても参加しやすい進行を心がけています。楽しさと心理的安全性を大切にしながら、チームの交流を促します。",
      en: "Warm, practical facilitation designed for a wide range of participants."
    },
    items: [
      {
        title: {
          ja: "Bilingual EN/JP Facilitation",
          en: "Bilingual EN/JP Facilitation"
        },
        body: {
          ja: "英語と日本語を自然に行き来しながら進行します。",
          en: "Natural facilitation in English, Japanese, or both."
        }
      },
      {
        title: {
          ja: "Movement-Based Approach",
          en: "Movement-Based Approach"
        },
        body: {
          ja: "短時間でも身体を動かすことで、ストレスの軽減や気分転換、コミュニケーションの活性化を促します。",
          en: "Participants learn through physical experience, not lecture alone."
        }
      },
      {
        title: {
          ja: "Engaging Experience Design",
          en: "Engaging Experience Design"
        },
        body: {
          ja: "誰も置いていかない進行で、参加者同士のつながりを引き出します。",
          en: "Welcoming experiences that are easy to join, even for non-exercisers."
        }
      },
      {
        title: {
          ja: "Online / Onsite / Hybrid Delivery",
          en: "Online / Onsite / Hybrid Delivery"
        },
        body: {
          ja: "参加場所や働き方に合わせて、無理のない開催方法で行います。",
          en: "Delivery is adapted to where and how participants work."
        }
      }
    ]
  },
  experience: {
    kicker: {
      ja: "Experience & Trust Signals",
      en: "Experience & Trust Signals"
    },
    title: {
      ja: "実績・取り組み",
      en: "Experience & Initiatives"
    },
    lead: {
      ja: "企業向けプログラムから地域活動まで、これまでの主な取り組みをご紹介します。",
      en: "Selected initiatives ranging from corporate programs to community wellness."
    },
    profile: {
      name: {
        ja: "Kanako Nakai",
        en: "Kanako Nakai"
      },
      title: {
        ja: "日英対応・職場ウェルネスプログラムデザイナー",
        en: "Bilingual Workplace Wellness Program Designer"
      },
      bio: {
        ja: "20年以上、身体を動かす場づくりに携わってきました。身体を動かすことを通して、自分自身とつながり、人とつながり直せる場をつくりたいと考えています。英語・日本語で、働く人とチームのつながりを育むウェルネス体験を設計しています。",
        en: "With over 20 years of movement teaching experience, Kanako designs bilingual wellness experiences that help people and teams connect."
      },
      certificationsTitle: {
        ja: "Certifications",
        en: "Certifications"
      },
      certifications: [
        {
          ja: "NSCA-CPT",
          en: "NSCA-CPT"
        },
        {
          ja: "Gボール協会マスタートレーナー",
          en: "G-Ball Association Master Trainer"
        },
        {
          ja: "Strong Nation Instructor",
          en: "Strong Nation Instructor"
        },
        {
          ja: "FloatFit HIIT Instructor",
          en: "FloatFit HIIT Instructor"
        }
      ]
    },
    items: [
      {
        title: {
          ja: "Tokyo American Club",
          en: "Tokyo American Club"
        },
        body: {
          ja: "国際色豊かな会員向けに、英語でのウェルネスプログラムを担当。Fitball、FloatFit、機能改善エクササイズなど、多様な参加者が楽しめるクラスを提供。",
          en: "Leads group wellness programs in English for the club's international membership community, working with participants across diverse age groups. Her Fitball, FloatFit, and functional conditioning classes create enjoyable and accessible experiences for people with a wide range of fitness backgrounds."
        }
      },
      {
        title: {
          ja: "Sony Interactive Entertainment",
          en: "Sony Interactive Entertainment"
        },
        body: {
          ja: "リモートワークの社員様向けに、ランチタイムのオンラインウェルネスプログラムを企画・実施。バランスボールを活用し、集中力の回復や長時間のデスクワークによる身体負担の軽減をサポート。",
          en: "Designed and delivered an online lunchtime wellness program for a game development team, using balance balls to help restore focus and reduce the physical strain of prolonged desk work."
        }
      },
      {
        title: {
          ja: "ロート製薬",
          en: "Rohto Pharmaceutical"
        },
        body: {
          ja: "社員向け健康推進週間において外部講師として参加。運動を通じたリフレッシュと交流促進をテーマに、ウェルネスセッションを担当。",
          en: "Led a wellness session as an external facilitator during an employee health promotion week, using movement to encourage refreshment and connection among participants."
        }
      },
      {
        title: {
          ja: "World Wellness Weekend Japan",
          en: "World Wellness Weekend Japan"
        },
        body: {
          ja: "毎年約150か国で開催される国際ウェルネスイベントに参画。日本での連携・企画運営を通じて、多様な参加者をつなぐウェルネス体験づくりに携わる。",
          en: "Contributes to an international wellness event held annually across approximately 150 countries, creating experiences that connect diverse participants through partnerships, planning, and event operations in Japan."
        }
      },
      {
        title: {
          ja: "地域ウェルネス推進（墨田区）",
          en: "Community Wellness Promotion in Sumida City"
        },
        body: {
          ja: "2024年・2025年に墨田区後援事業としてWorld Wellness Weekendを開催。地域住民向けのウェルネス体験や健康啓発イベントを企画・運営。",
          en: "Organized World Wellness Weekend in 2024 and 2025 with the support of Sumida City, planning and managing wellness experiences and health awareness events for local residents."
        }
      },
      {
        title: {
          ja: "マドレボニータでの産後ケア指導 約11年",
          en: "Madre Bonita | Approximately 11 Years in Postpartum Care"
        },
        body: {
          ja: "出産後の身体的回復だけでなく、心身のコンディションを整え、人とのつながりや自分らしさを取り戻していくプロセスを支援。企業・自治体での復職支援講座や指導者育成を通じて、多様なライフステージを支える実践を重ねる。",
          en: "Over approximately 11 years at Madre Bonita, Kanako supported postpartum physical recovery and overall wellbeing, helping participants reconnect with themselves and others. Her work also included delivering return-to-work programs for companies and local governments, as well as training and mentoring instructors."
        }
      }
    ]
  },
  formats: {
    kicker: {
      ja: "Sample Formats",
      en: "Sample Formats"
    },
    title: {
      ja: "プログラム例",
      en: "Practical ways to implement each program"
    },
    lead: {
      ja: "働く人とチームの状態に合わせて、短時間のリセットから継続的なウェルネスプログラムまで設計します。",
      en: "From one-off sessions to ongoing series and internal events."
    },
    items: [
      {
        meta: {
          ja: "30 min",
          en: "30 min"
        },
        title: {
          ja: "Lunch Session",
          en: "Lunch Session"
        },
        body: {
          ja: "昼休みや会議の合間に実施する短時間セッション。",
          en: "A short session held during lunch or between meetings."
        }
      },
      {
        meta: {
          ja: "45-60 min",
          en: "45-60 min"
        },
        title: {
          ja: "Team Building Workshop",
          en: "Team Building Workshop"
        },
        body: {
          ja: "チームイベントやオフサイトに組み込む参加型ワークショップ。",
          en: "A participatory workshop for team events and offsites."
        }
      },
      {
        meta: {
          ja: "4-8 weeks",
          en: "4-8 weeks"
        },
        title: {
          ja: "Multi-Week Wellness Series",
          en: "Multi-Week Wellness Series"
        },
        body: {
          ja: "複数週にわたり定期開催する継続プログラム。",
          en: "An ongoing program delivered regularly over several weeks."
        }
      },
      {
        meta: {
          ja: "オンライン + 会場",
          en: "Remote + onsite"
        },
        title: {
          ja: "Hybrid Program",
          en: "Hybrid Program"
        },
        body: {
          ja: "オンライン参加者と会場参加者をつなぐ同時開催プログラム。",
          en: "A combined program for remote and in-person participants."
        }
      },
      {
        meta: {
          ja: "単発企画",
          en: "One-off"
        },
        title: {
          ja: "Special Event",
          en: "Special Event"
        },
        body: {
          ja: "ウェルネス月間や社内イベントに合わせた特別企画。",
          en: "A special program for wellness months or internal events."
        }
      }
    ]
  },
  contact: {
    kicker: {
      ja: "Contact",
      en: "Contact"
    },
    title: {
      ja: "まずは、チームの課題をお聞かせください。",
      en: "Tell me what your team needs."
    },
    body: {
      ja: "企画の詳細が決まっていなくても大丈夫です。目的や背景を伺いながら、最初の一歩をご提案します。",
      en: "You do not need every detail finalized. Share the goal and context, and we can identify a useful starting point."
    },
    primaryCta: {
      ja: "まずは相談する",
      en: "Start an inquiry"
    },
    prompts: {
      ja: [
        "解決したい課題",
        "対象チーム・参加人数",
        "希望時期",
        "検討中の機会・イベント"
      ],
      en: [
        "Challenge to address",
        "Team size and audience",
        "Preferred timing",
        "Planned occasion or event"
      ]
    }
  }
} as const;
