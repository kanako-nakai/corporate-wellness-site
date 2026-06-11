export type Locale = "ja" | "en";

export type LocalizedText = Record<Locale, string>;

export type LocalizedList = Record<Locale, string[]>;

export const navItems = [
  { id: "about", label: { ja: "About", en: "About" } },
  { id: "services", label: { ja: "Services", en: "Services" } },
  { id: "portfolio", label: { ja: "Portfolio", en: "Portfolio" } },
  { id: "vision", label: { ja: "Vision", en: "Vision" } },
  { id: "contact", label: { ja: "Contact", en: "Contact" } }
] as const;

export const siteContent = {
  person: {
    name: "Kanako Nakai",
    nameJa: "仲井果菜子",
    base: {
      ja: "東京を拠点に活動",
      en: "Based in Tokyo, Japan"
    },
    languages: {
      ja: "日本語（ネイティブ）/ 英語（プロフェッショナル）",
      en: "Japanese native / Professional English"
    }
  },
  hero: {
    eyebrow: {
      ja: "Bilingual Wellness Instructor & Program Designer",
      en: "Bilingual Wellness Educator & Program Designer"
    },
    title: {
      ja: "ウェルネスインストラクター / プログラムデザイナー",
      en: "Bilingual Wellness Educator & Program Designer"
    },
    titleLines: {
      ja: ["ウェルネス", "インストラクター /", "プログラムデザイナー"],
      en: ["Bilingual Wellness Educator", "& Program Designer"]
    },
    lead: {
      ja: "安心して楽しく身体を動かすことを通して、世代や言語を超えて人と人とがつながり、よりよく生きるためのウェルネス体験をつくっています。",
      en: "Designing wellness experiences that help people move, recover, connect, and thrive."
    },
    primaryCta: {
      ja: "コラボレーションのご相談",
      en: "Start a collaboration"
    },
    secondaryCta: {
      ja: "できることを見る",
      en: "Explore services"
    }
  },
  proofPoints: [
    {
      value: "20+",
      label: {
        ja: "運動指導歴",
        en: "Years teaching movement"
      }
    },
    {
      value: "11",
      label: {
        ja: "産後ケア・指導者育成",
        en: "Years in postpartum education"
      }
    },
    {
      value: "JP / EN",
      label: {
        ja: "日英でのレッスン・進行",
        en: "Bilingual facilitation"
      }
    },
    {
      value: "Tokyo",
      label: {
        ja: "企業・地域・国際案件に対応",
        en: "Corporate, civic, and global work"
      }
    }
  ],
  about: {
    kicker: {
      ja: "About",
      en: "About"
    },
    title: {
      ja: "身体を動かし、自分と向き合い、人とつながる。",
      en: "Turning movement into recovery, confidence, and community."
    },
    body: {
      ja: "仲井果菜子は、20年以上にわたり身体を動かす場づくりに携わってきた、バイリンガルのウェルネスインストラクター／プログラムデザイナーです。女性のウェルネス、産後ケア、アクティブエイジング、機能的な身体づくり、コミュニティウェルネスを軸に、参加する人が安心して動き、自分のからだともう一度つながれる時間をつくっています。",
      en: "Kanako Nakai is a bilingual wellness educator and program designer with over 20 years of movement teaching experience. Her work focuses on women's health, postpartum recovery, active aging, functional movement, and community wellness, creating spaces where people can move safely, rebuild confidence, and experience measurable wellbeing."
    },
    sideTitle: {
      ja: "Brand Positioning",
      en: "Brand Positioning"
    },
    sideBody: {
      ja: "身体を動かすことを入り口に、自分と向き合い、人とのつながりが生まれるウェルネス体験をつくっています。",
      en: "Using movement as an entry point, Kanako designs wellness experiences that help people reconnect with themselves and build meaningful connections with others."
    }
  },
  services: {
    kicker: {
      ja: "Services",
      en: "Services"
    },
    title: {
      ja: "依頼できること",
      en: "Ways to Work Together"
    },
    lead: {
      ja: "企業・自治体・フィットネス施設など、参加者や目的に合わせてウェルネス体験を設計します。",
      en: "Wellness experiences for companies, municipalities, fitness facilities, education, and international programs."
    },
    items: [
      {
        title: {
          ja: "Wellness Instruction",
          en: "Wellness Instruction"
        },
        body: {
          ja: "女性のウェルネス、産後ケア、ミッドライフの変化に寄り添いながら、安心して楽しく動けるレッスンを届けます。からだを整えるだけでなく、自分への信頼を取り戻す時間を大切にしています。",
          en: "Warm, confidence-building instruction rooted in women's wellness, postpartum recovery, midlife wellbeing, and functional movement."
        }
      },
      {
        title: {
          ja: "Active Aging Programs",
          en: "Active Aging Programs"
        },
        body: {
          ja: "バランスボール、モビリティ、機能的筋力、低負荷カーディオを組み合わせ、年齢を重ねても心地よく動き続けられるプログラムを設計します。",
          en: "Sustainable programs that combine balance-ball work, mobility, functional strength, and low-impact cardio for joyful active aging."
        }
      },
      {
        title: {
          ja: "Corporate & Community Wellness",
          en: "Corporate & Community Wellness"
        },
        body: {
          ja: "企業・自治体・地域コミュニティに向けて、回復、交流、ウェルビーイングにつながるワークショップや継続プログラムを企画します。参加者の背景や目的に合わせて、無理なく続けられる形に整えます。",
          en: "Workshops and ongoing programs for companies, municipalities, and communities that support recovery, connection, and practical wellbeing."
        }
      },
      {
        title: {
          ja: "Bilingual Wellness Facilitation",
          en: "Bilingual Wellness Facilitation"
        },
        body: {
          ja: "日本語と英語で、レッスン、イベント、国際的な参加者を含むウェルネスプログラムを自然に進行します。言語や文化が違っても、安心して参加できる場をつくります。",
          en: "Japanese and English instruction, event facilitation, and international wellness experiences where people feel included and at ease."
        }
      }
    ]
  },
  portfolio: {
    kicker: {
      ja: "Portfolio",
      en: "Portfolio"
    },
    title: {
      ja: "Selected Work",
      en: "Selected Work"
    },
    lead: {
      ja: "レッスン、コミュニティ、国際的なウェルネスムーブメントまで。身体を動かすことを通して、人が自分らしくつながる場をつくってきました。",
      en: "A selection of movement experiences, community projects, and international wellness work shaped around connection, confidence, and meaningful participation."
    },
    items: [
      {
        name: "Tokyo American Club",
        image: "/images/portfolio-tokyo-american-club.jpg",
        alt: {
          ja: "プールサイドのウェルネススタジオで行われる英語レッスンのイメージ",
          en: "English-language wellness instruction in a poolside studio setting"
        },
        category: {
          ja: "English instruction",
          en: "English instruction"
        },
        body: {
          ja: "国際的なコミュニティに向けて、Fitball、FloatFit、ファンクショナルコンディショニングなどを英語で指導。",
          en: "English-language wellness instruction including Fitball, FloatFit, and functional conditioning for an international community."
        },
        details: {
          ja: [
            "英語でのレッスン進行",
            "Fitball / FloatFit / functional conditioning",
            "国際的な参加者が安心して動ける場づくり"
          ],
          en: [
            "English-language class facilitation",
            "Fitball, FloatFit, and functional conditioning",
            "Welcoming movement experiences for an international community"
          ]
        }
      },
      {
        name: "OBABU",
        image: "/images/portfolio-obabu.jpg",
        alt: {
          ja: "ミッドライフ女性のための創造的なムーブメントコミュニティのイメージ",
          en: "Creative movement community experience for midlife women"
        },
        category: {
          ja: "Community wellness",
          en: "Community wellness"
        },
        body: {
          ja: "ミッドライフ女性のための、コミュニティウェルネスと創造的なムーブメント体験。",
          en: "Community wellness and creative movement experiences for midlife women."
        },
        details: {
          ja: [
            "ミッドライフ女性の心身に寄り添う場づくり",
            "身体を動かすことと創造性をつなぐ体験設計",
            "安心して話し、動き、つながるコミュニティ"
          ],
          en: [
            "Wellness spaces designed for midlife women",
            "Creative movement as a way to reconnect with the body",
            "A community for conversation, movement, and mutual support"
          ]
        }
      },
      {
        name: "World Wellness Weekend Japan",
        image: "/images/portfolio-world-wellness-weekend.jpg",
        alt: {
          ja: "日本での国際ウェルネスイベントのイメージ",
          en: "International wellness movement collaboration in Japan"
        },
        category: {
          ja: "International wellness",
          en: "International wellness"
        },
        body: {
          ja: "国際的なウェルネスムーブメントにおける、日本での連携・コラボレーション。",
          en: "Coordination and collaboration within the international wellness movement in Japan."
        },
        details: {
          ja: [
            "日本におけるウェルネス活動の連携",
            "国際的な参加者・関係者とのコーディネーション",
            "地域と世界をつなぐウェルネスの場づくり"
          ],
          en: [
            "Coordination within wellness initiatives in Japan",
            "Collaboration with international wellness communities",
            "Connecting local participation with a global movement"
          ]
        }
      },
      {
        name: "Madre Bonita",
        image: "/images/portfolio-madre-bonita.jpg",
        alt: {
          ja: "産後ケアのための安全なグループ運動のイメージ",
          en: "Supportive postpartum recovery movement class"
        },
        category: {
          ja: "Postpartum recovery",
          en: "Postpartum recovery"
        },
        body: {
          ja: "日本のNPOで、認定産後フィットネスインストラクターとして11年活動。産後回復プログラム、安全なグループ進行、運動を通した自信の回復、指導者育成リーダーを経験。",
          en: "11 years as a certified postpartum fitness instructor with a leading Japanese nonprofit."
        },
        details: {
          ja: [
            "認定産後フィットネスインストラクターとして11年活動",
            "産後回復プログラムと安全なグループファシリテーション",
            "運動を通した自信の回復支援",
            "指導者育成リーダーとしての経験"
          ],
          en: [
            "11 years as a certified postpartum fitness instructor",
            "Postpartum recovery programs and safe group facilitation",
            "Confidence rebuilding through movement",
            "Instructor training leadership"
          ]
        }
      },
      {
        name: "FloatFit",
        image: "/images/portfolio-floatfit.jpg",
        alt: {
          ja: "水上フィットネスボードを使ったアクアウェルネス体験のイメージ",
          en: "Aquatic functional wellness experience with floating fitness boards"
        },
        category: {
          ja: "Aquatic wellness",
          en: "Aquatic wellness"
        },
        body: {
          ja: "FloatFit認定インストラクターとして、水上での機能的なウェルネス体験を紹介し、日本での展開可能性を探求。",
          en: "Certified FloatFit instructor introducing aquatic functional wellness experiences and exploring localization opportunities in Japan."
        },
        details: {
          ja: [
            "FloatFit認定インストラクター",
            "水上での機能的な身体づくりと体験設計",
            "日本の施設・参加者に合うローカライズの可能性を探求"
          ],
          en: [
            "Certified FloatFit instructor",
            "Aquatic functional wellness experience design",
            "Exploring localization opportunities for Japanese facilities and participants"
          ]
        }
      }
    ]
  },
  certifications: {
    kicker: {
      ja: "Certifications",
      en: "Certifications"
    },
    items: [
      "NSCA-CPT",
      "G-Ball Association Certified Master Trainer",
      "Strong Nation Certified Instructor",
      "FloatFit HIIT Certified"
    ]
  },
  vision: {
    kicker: {
      ja: "Vision",
      en: "Vision"
    },
    body: {
      ja: "身体を動かすことを通して、自分自身とつながり、人とつながり、年齢や背景を問わず、自分らしく生きられる社会へ。",
      en: "Through movement, Kanako explores ways for people to reconnect with themselves, connect with others, and live more fully as they are, regardless of age or background."
    }
  },
  next: {
    kicker: {
      ja: "Next",
      en: "Next"
    },
    title: {
      ja: "次に取り組みたいこと",
      en: "Exploring Next"
    },
    items: [
      {
        title: {
          ja: "Active Aging Balance Ball Model",
          en: "Active Aging Balance Ball Model"
        },
        body: {
          ja: "楽しさ、続けやすさ、変化の実感を大切にした、地域・施設向けのプログラムモデル。",
          en: "A community and facility-ready model built for joy, measurability, and continuity."
        }
      },
      {
        title: {
          ja: "FloatFit Localization in Japan",
          en: "FloatFit Localization in Japan"
        },
        body: {
          ja: "水上フィットネスの魅力を、日本の施設や参加者に合う体験として届けるための展開構想。",
          en: "Translating aquatic fitness into experiences suited to Japanese facilities and participants."
        }
      },
      {
        title: {
          ja: "Family & Kids Wellness",
          en: "Family & Kids Wellness"
        },
        body: {
          ja: "家族で身体を動かし、英語とウェルネスが自然につながる教育プログラムへ。",
          en: "Future education where family movement, English, and wellbeing naturally meet."
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
      ja: "ウェルネスプログラムの設計、レッスン、イベント登壇など、お気軽にご相談ください。",
      en: "Let's design a wellness program, workshop, or partnership."
    },
    body: {
      ja: "企業ウェルネス、自治体・地域連携、フィットネス施設との提携、FloatFit関連、国際案件、教育領域まで、目的に合わせてご一緒します。",
      en: "Available for corporate wellness, civic and community collaborations, fitness facility partnerships, FloatFit-related projects, international programs, and future education initiatives."
    },
    opportunities: {
      ja: [
        "ウェルネスプログラム設計",
        "企業ウェルネス",
        "女性のウェルネス教育",
        "指導者向け研修",
        "イベント進行",
        "国際ウェルネス連携"
      ],
      en: [
        "Wellness program design",
        "Corporate wellness",
        "Women's wellness education",
        "Instructor training",
        "Event facilitation",
        "International wellness coordination"
      ]
    },
    formLabels: {
      name: {
        ja: "お名前",
        en: "Name"
      },
      organization: {
        ja: "会社・団体名",
        en: "Organization"
      },
      email: {
        ja: "メールアドレス",
        en: "Email"
      },
      message: {
        ja: "ご相談内容",
        en: "Message"
      },
      submit: {
        ja: "相談内容を送信",
        en: "Send inquiry"
      }
    }
  }
} as const;
