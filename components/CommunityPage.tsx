"use client";

import Image from "next/image";
import InquirySection from "@/components/InquirySection";
import { communityContent } from "@/data/communityContent";
import type { Locale } from "@/data/siteContent";
import { siteContent } from "@/data/siteContent";
import { localeHref, useLocalePreference } from "@/hooks/useLocalePreference";

const localeNames: Record<Locale, string> = {
  ja: "JP",
  en: "EN"
};

export default function CommunityPage() {
  const [locale, setLocale] = useLocalePreference();
  const t = locale;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Community & Other Programs",
    about: [
      "Active aging",
      "Postpartum wellness",
      "Women's wellness",
      "Community wellness",
      "International wellness"
    ],
    provider: {
      "@type": "Person",
      name: siteContent.person.name,
      alternateName: siteContent.person.nameJa
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header corporate-header">
        <a
          className="brand"
          href={localeHref("/", locale)}
          aria-label="Kanako Nakai home"
        >
          <span>{siteContent.person.nameJa}</span>
          <strong>{siteContent.person.name}</strong>
        </a>
        <nav className="desktop-nav" aria-label="Community programs navigation">
          <a href={localeHref("/", locale)}>Corporate Wellness</a>
          <a href="#programs">{locale === "ja" ? "Programs" : "Programs"}</a>
          <a href="#context">{locale === "ja" ? "Connection" : "Connection"}</a>
          <a href="#contact">{locale === "ja" ? "Contact" : "Contact"}</a>
        </nav>
        <div className="language-toggle" aria-label="Language">
          {(["ja", "en"] as Locale[]).map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={locale === item}
              onClick={() => setLocale(item)}
            >
              {localeNames[item]}
            </button>
          ))}
        </div>
      </header>

      <main className="community-page" id="main">
        <section className="community-hero" aria-labelledby="community-hero-title">
          <Image
            className="community-hero-image"
            src="/images/community-hero-real.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className="community-hero-overlay" />
          <div className="section-shell community-hero-content">
            <p className="eyebrow">{communityContent.hero.eyebrow[t]}</p>
            <h1 id="community-hero-title">{communityContent.hero.title[t]}</h1>
            <p>{communityContent.hero.lead[t]}</p>
            <div className="hero-actions">
              <a className="button primary" href={localeHref("/#offer", locale)}>
                {communityContent.hero.primaryCta[t]}
              </a>
              <a className="button secondary" href="#programs">
                {communityContent.hero.secondaryCta[t]}
              </a>
            </div>
          </div>
        </section>

        <section className="community-programs" id="programs">
          <div className="section-shell">
            <div className="section-heading constrained">
              <p className="kicker">{communityContent.programs.kicker[t]}</p>
              <h2>{communityContent.programs.title[t]}</h2>
              <p>{communityContent.programs.lead[t]}</p>
            </div>
            <div className="community-program-grid">
              {communityContent.programs.items.map((item) => (
                <article className="community-program-card" key={item.title.en}>
                  <div className="community-program-image">
                    <Image
                      src={item.image}
                      alt={item.alt[t]}
                      fill
                      sizes="(min-width: 980px) 350px, (min-width: 700px) 50vw, 100vw"
                    />
                  </div>
                  <div className="community-program-copy">
                    <span>{item.category[t]}</span>
                    <h3>{item.title[t]}</h3>
                    <p>{item.body[t]}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="community-context" id="context">
          <div className="section-shell community-context-layout">
            <p className="kicker">{communityContent.context.kicker[t]}</p>
            <div>
              <h2>{communityContent.context.title[t]}</h2>
              <p>{communityContent.context.body[t]}</p>
              <a className="text-link" href={localeHref("/", locale)}>
                {communityContent.context.cta[t]}
              </a>
            </div>
          </div>
        </section>

        <InquirySection locale={locale} />
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <p>
            {siteContent.person.nameJa} / {siteContent.person.name}
          </p>
          <span>Workplace Wellness Program Designer</span>
          <a className="footer-link" href={localeHref("/", locale)}>
            Corporate Wellness
          </a>
        </div>
      </footer>
    </>
  );
}
