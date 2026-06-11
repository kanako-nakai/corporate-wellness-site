"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  corporateWellnessContent,
  corporateWellnessNavItems
} from "@/data/corporateWellnessContent";
import type { Locale } from "@/data/siteContent";
import { siteContent } from "@/data/siteContent";

const localeNames: Record<Locale, string> = {
  ja: "JP",
  en: "EN"
};

export default function CorporateWellnessPage() {
  const [locale, setLocale] = useState<Locale>("en");
  const t = locale;

  useEffect(() => {
    document.documentElement.lang = locale === "ja" ? "ja" : "en";
  }, [locale]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Corporate Wellness Programs",
    provider: {
      "@type": "Person",
      name: siteContent.person.name,
      alternateName: siteContent.person.nameJa,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tokyo",
        addressCountry: "Japan"
      },
      knowsLanguage: ["English", "Japanese"]
    },
    areaServed: ["Japan", "Tokyo", "Remote", "International teams"],
    serviceType: [
      "Corporate wellness",
      "Employee wellbeing",
      "Bilingual wellness facilitation",
      "Team engagement workshops"
    ]
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
        <a className="brand" href="/" aria-label="Kanako Nakai home">
          <span>{corporateWellnessContent.hero.name.ja}</span>
          <strong>{siteContent.person.name}</strong>
        </a>
        <nav className="desktop-nav" aria-label="Corporate wellness navigation">
          <a href="/">{locale === "ja" ? "Home" : "Home"}</a>
          {corporateWellnessNavItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label[t]}
            </a>
          ))}
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

      <main className="corporate-page" id="main">
        <section className="cw-hero" id="top" aria-labelledby="cw-hero-title">
          <Image
            className="cw-hero-image"
            src="/images/corporate-wellness-hero-real-smile.png"
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className="cw-hero-overlay" />
          <div className="section-shell cw-hero-content">
            <p className="eyebrow">{corporateWellnessContent.hero.eyebrow[t]}</p>
            <p className="cw-hero-name">{corporateWellnessContent.hero.name[t]}</p>
            <p className="cw-hero-role">
              {corporateWellnessContent.hero.professionalTitle[t]}
            </p>
            <h1 id="cw-hero-title">
              {corporateWellnessContent.hero.headline[t]}
            </h1>
            <p className="cw-hero-lead">{corporateWellnessContent.hero.lead[t]}</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                {corporateWellnessContent.hero.primaryCta[t]}
              </a>
              <a className="button secondary" href="#formats">
                {corporateWellnessContent.hero.secondaryCta[t]}
              </a>
            </div>
          </div>
        </section>

        <section className="cw-section cw-offer-section" id="offer">
          <div className="section-shell">
            <div className="section-heading constrained">
              <p className="kicker">{corporateWellnessContent.offer.kicker[t]}</p>
              <h2>{corporateWellnessContent.offer.title[t]}</h2>
              <p>{corporateWellnessContent.offer.lead[t]}</p>
            </div>
            <div className="cw-offer-grid">
              {corporateWellnessContent.offer.items.map((item, index) => (
                <article className="cw-offer-card" key={item.title.en}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title[t]}</h3>
                  <p>{item.body[t]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cw-band cw-why-section" id="why">
          <div className="section-shell">
            <div className="section-heading constrained">
              <p className="kicker">{corporateWellnessContent.why.kicker[t]}</p>
              <h2>{corporateWellnessContent.why.title[t]}</h2>
              <p>{corporateWellnessContent.why.lead[t]}</p>
            </div>
            <div className="cw-why-grid">
              {corporateWellnessContent.why.items.map((item) => (
                <article key={item.title.en}>
                  <h3>{item.title[t]}</h3>
                  <p>{item.body[t]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cw-band cw-experience-section" id="experience">
          <div className="section-shell">
            <div className="section-heading constrained">
              <p className="kicker">
                {corporateWellnessContent.experience.kicker[t]}
              </p>
              <h2>{corporateWellnessContent.experience.title[t]}</h2>
              <p>{corporateWellnessContent.experience.lead[t]}</p>
            </div>
            <div className="cw-experience-layout">
              <aside className="cw-experience-profile">
                <div className="cw-profile-image">
                  <Image
                    src="/images/kanako-profile.jpg"
                    alt={
                      locale === "ja"
                        ? "ウェルネスプログラムを進行する仲井果菜子"
                        : "Kanako Nakai facilitating a wellness program"
                    }
                    fill
                    sizes="(min-width: 980px) 300px, 100vw"
                  />
                </div>
                <div className="cw-profile-copy">
                  <h3>{corporateWellnessContent.experience.profile.name[t]}</h3>
                  <p className="cw-profile-role">
                    {corporateWellnessContent.experience.profile.title[t]}
                  </p>
                  <p>{corporateWellnessContent.experience.profile.bio[t]}</p>
                </div>
                <div className="cw-certifications">
                  <h4>
                    {
                      corporateWellnessContent.experience.profile
                        .certificationsTitle[t]
                    }
                  </h4>
                  <ul>
                    {corporateWellnessContent.experience.profile.certifications.map(
                      (item) => (
                        <li key={item.en}>{item[t]}</li>
                      )
                    )}
                  </ul>
                </div>
              </aside>
              <div className="cw-experience-stack">
                {corporateWellnessContent.experience.items.map((item) => (
                  <article key={item.title.en}>
                    <h3>{item.title[t]}</h3>
                    {item.body[t] ? <p>{item.body[t]}</p> : null}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cw-section cw-formats-section" id="formats">
          <div className="section-shell">
            <div className="section-heading constrained">
              <p className="kicker">{corporateWellnessContent.formats.kicker[t]}</p>
              <h2>{corporateWellnessContent.formats.title[t]}</h2>
              <p>{corporateWellnessContent.formats.lead[t]}</p>
            </div>
            <div className="cw-format-grid">
              {corporateWellnessContent.formats.items.map((item) => (
                <article key={item.title.en}>
                  <span>{item.meta[t]}</span>
                  <h3>{item.title[t]}</h3>
                  <p>{item.body[t]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cw-contact-band" id="contact">
          <div className="section-shell cw-contact-layout">
            <div>
              <p className="kicker">{corporateWellnessContent.contact.kicker[t]}</p>
              <h2>{corporateWellnessContent.contact.title[t]}</h2>
              <p>{corporateWellnessContent.contact.body[t]}</p>
              <div className="hero-actions">
                <a className="button primary" href="mailto:kanakonakai@gmail.com">
                  {corporateWellnessContent.contact.primaryCta[t]}
                </a>
              </div>
              <address className="cw-contact-links">
                <a href="mailto:kanakonakai@gmail.com">
                  Email: kanakonakai@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/kanako-nakai/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {locale === "ja"
                    ? "LinkedInからのメッセージも歓迎です"
                    : "LinkedIn messages are also welcome"}
                </a>
              </address>
            </div>
            <aside className="cw-contact-prompts" aria-label="Helpful inquiry details">
              <h3>{locale === "ja" ? "相談時に共有しやすい内容" : "Helpful inquiry details"}</h3>
              <ul>
                {corporateWellnessContent.contact.prompts[t].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <p>
            {siteContent.person.nameJa} / {siteContent.person.name}
          </p>
          <span>Workplace Wellness Program Designer</span>
        </div>
      </footer>
    </>
  );
}
