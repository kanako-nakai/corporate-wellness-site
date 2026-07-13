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
  badge: LocalizedText;
  subheading: LocalizedText;
  options: WeekendOption[];
  closingHeading: LocalizedText;
  closingText: LocalizedText;
  primaryCta: LocalizedText;
  emailSubject: LocalizedText;
  secondaryCta: LocalizedText;
  note: LocalizedText;
} = {
  logoSrc: "/images/world-wellness-weekend-logo-placeholder.svg",
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
    ja: "今年のWorld Wellness Weekendを、職場の皆さんと一緒にお祝いしませんか？",
    en: "You’re invited to celebrate wellbeing at your workplace."
  },
  intro: [
    {
      ja: "9月18日〜20日、世界各地でウェルネスを祝うWorld Wellness Weekendが開催されます。",
      en: "From September 18–20, organizations around the world will come together to celebrate World Wellness Weekend."
    },
    {
      ja: "World Wellness Weekendアンバサダーとして、企業・団体の皆さまにご参加いただける無料の職場向けウェルネスセッションをご用意しています。日本語・英語・バイリンガルで実施可能です。",
      en: "As a World Wellness Weekend Ambassador, I am inviting companies and teams to take part through a complimentary workplace wellness session, available in English, Japanese, or both."
    }
  ],
  badge: {
    ja: "World Wellness Weekend 2026 特別無料セッション",
    en: "Complimentary sessions for World Wellness Weekend 2026"
  },
  subheading: {
    ja: "チームに合う体験をお選びください。",
    en: "Choose the experience that fits your team."
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
    ja: "World Wellness Weekendをご一緒できたら嬉しいです。",
    en: "Let’s celebrate World Wellness Weekend together."
  },
  closingText: {
    ja: "運動経験は問いません。参加者、職場環境、開催目的に合わせて内容を調整します。",
    en: "No advanced fitness level is required. Each session can be adapted to the team, workplace, and occasion."
  },
  primaryCta: {
    ja: "無料セッションについて相談する",
    en: "Ask about a complimentary session"
  },
  emailSubject: {
    ja: "World Wellness Weekend 職場向けセッションについて",
    en: "World Wellness Weekend Workplace Session"
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
