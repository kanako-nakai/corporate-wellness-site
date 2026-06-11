"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Locale, navItems, siteContent } from "@/data/siteContent";

const localeNames: Record<Locale, string> = {
  ja: "JP",
  en: "EN"
};

export default function Home() {
  const [locale, setLocale] = useState<Locale>("ja");
  const [selectedPortfolio, setSelectedPortfolio] = useState<
    (typeof siteContent.portfolio.items)[number] | null
  >(null);
  const t = locale;

  useEffect(() => {
    document.documentElement.lang = locale === "ja" ? "ja" : "en";
  }, [locale]);

  useEffect(() => {
    if (!selectedPortfolio) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPortfolio(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPortfolio]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteContent.person.name,
    alternateName: siteContent.person.nameJa,
    jobTitle: "Bilingual Wellness Educator & Program Designer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tokyo",
      addressCountry: "Japan"
    },
    knowsLanguage: ["Japanese", "English"],
    knowsAbout: [
      "Women's wellness",
      "Postpartum recovery",
      "Active aging",
      "Functional movement",
      "Community wellness",
      "FloatFit"
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
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Kanako Nakai home">
          <span>{siteContent.person.nameJa}</span>
          <strong>{siteContent.person.name}</strong>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label[t]}
            </a>
          ))}
          <a href="/corporate-wellness">Corporate Wellness</a>
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

      <main id="main">
        <section className="hero-section" id="top" aria-labelledby="hero-title">
          <Image
            className="hero-image"
            src="/images/kanako-wellness-hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-overlay" />
          <div className="hero-content section-shell">
            <p className="eyebrow">{siteContent.hero.eyebrow[t]}</p>
            <h1 id="hero-title" aria-label={siteContent.hero.title[t]}>
              {siteContent.hero.titleLines[t].map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>
            <p className="hero-lead">{siteContent.hero.lead[t]}</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                {siteContent.hero.primaryCta[t]}
              </a>
              <a className="button secondary" href="#services">
                {siteContent.hero.secondaryCta[t]}
              </a>
            </div>
            <dl className="hero-meta" aria-label="Profile highlights">
              <div>
                {locale === "ja" ? (
                  <dd>{siteContent.person.base[t]}</dd>
                ) : (
                  <>
                    <dt>Base</dt>
                    <dd>{siteContent.person.base[t]}</dd>
                  </>
                )}
              </div>
              <div>
                <dt>{locale === "ja" ? "言語" : "Languages"}</dt>
                <dd>{siteContent.person.languages[t]}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="proof-strip" aria-label="Professional highlights">
          <div className="proof-grid section-shell">
            {siteContent.proofPoints.map((item) => (
              <article key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label[t]}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell about-section" id="about">
          <div className="section-heading">
            <p className="kicker">{siteContent.about.kicker[t]}</p>
            <h2>{siteContent.about.title[t]}</h2>
          </div>
          <div className="about-layout">
            <p className="body-large">{siteContent.about.body[t]}</p>
            <aside className="focus-panel">
              <span>{siteContent.about.sideTitle[t]}</span>
              <p>{siteContent.about.sideBody[t]}</p>
            </aside>
          </div>
        </section>

        <section className="band warm-band" id="services">
          <div className="section-shell">
            <div className="section-heading constrained">
              <p className="kicker">{siteContent.services.kicker[t]}</p>
              <h2>{siteContent.services.title[t]}</h2>
              <p>{siteContent.services.lead[t]}</p>
            </div>
            <div className="service-grid">
              {siteContent.services.items.map((item) => (
                <article className="service-card" key={item.title.en}>
                  <h3>{item.title[t]}</h3>
                  <p>{item.body[t]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="band portfolio-band" id="portfolio">
          <div className="section-shell portfolio-layout">
            <div className="section-heading">
              <p className="kicker">{siteContent.portfolio.kicker[t]}</p>
              <h2>{siteContent.portfolio.title[t]}</h2>
              <p>{siteContent.portfolio.lead[t]}</p>
            </div>
            <div className="portfolio-list">
              {siteContent.portfolio.items.map((item) => (
                <button
                  className="portfolio-card"
                  key={item.name}
                  type="button"
                  onClick={() => setSelectedPortfolio(item)}
                >
                  <span className="portfolio-image">
                    <Image
                      src={item.image}
                      alt={item.alt[t]}
                      fill
                      sizes="(min-width: 980px) 260px, (min-width: 700px) 40vw, 92vw"
                    />
                  </span>
                  <span className="portfolio-card-copy">
                    <span className="portfolio-category">{item.category[t]}</span>
                    <strong>{item.name}</strong>
                    <span>{item.body[t]}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell certification-section">
          <p className="kicker">{siteContent.certifications.kicker[t]}</p>
          <div className="certification-list" aria-label="Certifications">
            {siteContent.certifications.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="vision-band" id="vision" aria-labelledby="vision-title">
          <div className="section-shell vision-philosophy">
            <div className="vision-orbit" aria-hidden="true">
              <span />
            </div>
            <div className="vision-copy">
              <p className="kicker vision-kicker">Vision</p>
              <h2 id="vision-title" className="sr-only">Vision</h2>
              <blockquote>
                <p>{siteContent.vision.body[t]}</p>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="next-band" id="next">
          <div className="section-shell next-layout">
            <div className="section-heading">
              <p className="kicker">{siteContent.next.kicker[t]}</p>
              <h2>{siteContent.next.title[t]}</h2>
            </div>
            <div className="next-list">
              {siteContent.next.items.map((item) => (
                <article key={item.title.en}>
                  <h3>{item.title[t]}</h3>
                  <p>{item.body[t]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell contact-section" id="contact">
          <div className="contact-copy">
            <p className="kicker">{siteContent.contact.kicker[t]}</p>
            <h2>{siteContent.contact.title[t]}</h2>
            <p>{siteContent.contact.body[t]}</p>
            <ul className="opportunity-list">
              {siteContent.contact.opportunities[t].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <form className="contact-form">
            <label>
              <span>{siteContent.contact.formLabels.name[t]}</span>
              <input type="text" name="name" autoComplete="name" />
            </label>
            <label>
              <span>{siteContent.contact.formLabels.organization[t]}</span>
              <input type="text" name="organization" autoComplete="organization" />
            </label>
            <label>
              <span>{siteContent.contact.formLabels.email[t]}</span>
              <input type="email" name="email" autoComplete="email" />
            </label>
            <label>
              <span>{siteContent.contact.formLabels.message[t]}</span>
              <textarea name="message" rows={5} />
            </label>
            <button type="button">{siteContent.contact.formLabels.submit[t]}</button>
          </form>
        </section>
      </main>

      {selectedPortfolio ? (
        <div
          className="portfolio-modal"
          role="presentation"
          onClick={() => setSelectedPortfolio(null)}
        >
          <section
            aria-labelledby="portfolio-modal-title"
            aria-modal="true"
            className="portfolio-dialog"
            role="dialog"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              aria-label={locale === "ja" ? "閉じる" : "Close"}
              className="modal-close"
              type="button"
              onClick={() => setSelectedPortfolio(null)}
            >
              ×
            </button>
            <div className="modal-image">
              <Image
                src={selectedPortfolio.image}
                alt={selectedPortfolio.alt[t]}
                fill
                sizes="(min-width: 900px) 460px, 92vw"
              />
            </div>
            <div className="modal-copy">
              <p className="portfolio-category">{selectedPortfolio.category[t]}</p>
              <h2 id="portfolio-modal-title">{selectedPortfolio.name}</h2>
              <p>{selectedPortfolio.body[t]}</p>
              <ul>
                {selectedPortfolio.details[t].map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      ) : null}

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <p>
            {siteContent.person.nameJa} / {siteContent.person.name}
          </p>
          <span>Bilingual Wellness Educator & Program Designer</span>
        </div>
      </footer>
    </>
  );
}
