import type { LocalizedText } from "@/data/siteContent";

type WeekendOption = {
  title: LocalizedText;
  details: LocalizedText;
  description: LocalizedText;
  suitableFor: LocalizedText;
};

export const worldWellnessWeekendContent: {
  logoSrc: string;
  heroNotice: {
    title: LocalizedText;
    body: LocalizedText;
  };
  eyebrow: LocalizedText;
  heading: LocalizedText;
  intro: LocalizedText[];
  valueStatement: LocalizedText;
  stats: LocalizedText[];
  badge: LocalizedText;
  subheading: LocalizedText;
  options: WeekendOption[];
  closingHeading: LocalizedText;
  closingText: LocalizedText;
  primaryCta: LocalizedText;
  secondaryCta: LocalizedText;
  note: LocalizedText;
} = {
  logoSrc: "/images/world-wellness-weekend-logo.png",
  heroNotice: {
    title: {
      ja: "World Wellness Weekend 2026",
      en: "World Wellness Weekend 2026"
    },
    body: {
      ja: "職場向け無料セッション・9月18日〜20日",
      en: "Complimentary workplace sessions · September 18–20"
    }
  },
  eyebrow: {
    ja: "WORLD WELLNESS WEEKEND 2026",
    en: "WORLD WELLNESS WEEKEND 2026"
  },
  heading: {
    ja: "今年は、皆さんの職場もこの世界的なウェルネスムーブメントに加わってみませんか？",
    en: "You’re invited to join World Wellness Weekend with your team."
  },
  intro: [
    {
      ja: "9月18日〜20日に開催されるWorld Wellness Weekendは、世界160か国・1,000会場以上で同時開催される世界最大級のウェルネスイベントです。",
      en: "World Wellness Weekend is one of the world’s largest wellbeing events, taking place simultaneously across more than 160 countries and over 1,000 venues from September 18–20."
    },
    {
      ja: "企業、ホテル、フィットネス施設、スパ、地域コミュニティなどが、それぞれの形でウェルネスをテーマにした無料イベントを開催します。",
      en: "Companies, hotels, fitness clubs, spas, and local communities around the world host complimentary wellbeing activities in their own unique way."
    },
    {
      ja: "World Wellness Weekendアンバサダーとして、企業・団体の皆さまにご参加いただける無料の職場向けウェルネスセッションをご用意しています。日本語・英語・バイリンガルで実施可能です。",
      en: "As a World Wellness Weekend Ambassador, I am inviting companies and organizations to take part through complimentary workplace wellness sessions, available in English, Japanese, or bilingually."
    }
  ],
  valueStatement: {
    ja: "世界的なウェルネスムーブメントに参加することで、社員のウェルビーイングを支えるだけでなく、ウェルネスを大切にする企業姿勢を社内外に発信する機会にもなります。",
    en: "By joining this global wellbeing movement, your organization can support employee wellbeing while also demonstrating its commitment to wellness both internally and externally."
  },
  stats: [
    {
      ja: "160か国以上",
      en: "160+ countries"
    },
    {
      ja: "1,000会場以上",
      en: "1,000+ venues"
    },
    {
      ja: "世界同時開催",
      en: "Global participation"
    }
  ],
  badge: {
    ja: "World Wellness Weekend 2026 特別無料セッション",
    en: "Complimentary sessions for World Wellness Weekend 2026"
  },
  subheading: {
    ja: "こんな形でご参加いただけます。",
    en: "Choose how your team would like to participate."
  },
  options: [
    {
      title: {
        ja: "Reset Your Workday",
        en: "Reset Your Workday"
      },
      details: {
        ja: "30〜45分・オンライン／対面",
        en: "30–45 minutes · Online or onsite"
      },
      description: {
        ja: "呼吸、モビリティ、姿勢のリセット、軽い運動を組み合わせ、仕事の合間に心身を整え、気持ちよく業務へ戻るための参加しやすいセッションです。",
        en: "An accessible session combining breathing, mobility, posture reset, and light movement to help participants pause, recharge, and return to work with renewed energy."
      },
      suitableFor: {
        ja: "ランチタイム・リモートチーム・ウェルネス週間・忙しい職場に",
        en: "Lunch sessions · Remote teams · Wellness weeks · Busy workplaces"
      }
    },
    {
      title: {
        ja: "Movement & Team Building",
        en: "Movement & Team Building"
      },
      details: {
        ja: "60〜75分・対面",
        en: "60–75 minutes · In person"
      },
      description: {
        ja: "身体を動かす体験を通して、自然なコミュニケーション、チーム内のつながり、前向きな参加を促すインタラクティブなワークショップです。",
        en: "An interactive, movement-based workshop designed to encourage communication, natural connection, and positive participation across teams."
      },
      suitableFor: {
        ja: "チームイベント・多国籍チーム・部署交流・オフサイト研修に",
        en: "Team events · International teams · Department gatherings · Offsites"
      }
    }
  ],
  closingHeading: {
    ja: "今年は、皆さんの職場もこの世界的なムーブメントに加わってみませんか？",
    en: "This year, we would love to welcome your team as part of this global movement."
  },
  closingText: {
    ja: "運動経験は問いません。参加者、職場環境、開催目的に合わせて内容を調整します。",
    en: "No advanced fitness level is required. Each session can be adapted to the team, workplace, and occasion."
  },
  primaryCta: {
    ja: "まずは相談してみる",
    en: "Let’s talk"
  },
  secondaryCta: {
    ja: "LinkedInを見る",
    en: "Connect on LinkedIn"
  },
  note: {
    ja: "日本語・英語・バイリンガル対応\nオンライン・対面で実施可能",
    en: "Available in English, Japanese, or bilingually.\nOnline and onsite options available."
  }
} as const;
