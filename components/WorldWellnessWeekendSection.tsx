import { worldWellnessWeekendContent } from "@/data/worldWellnessWeekendContent";
import type { Locale } from "@/data/siteContent";

type WorldWellnessWeekendSectionProps = {
  locale: Locale;
};

export default function WorldWellnessWeekendSection({
  locale
}: WorldWellnessWeekendSectionProps) {
  const t = locale;
  const emailHref = `mailto:kanakonakai@gmail.com?subject=${encodeURIComponent(
    worldWellnessWeekendContent.emailSubject[t]
  )}`;

  return (
    <section
      className="cw-www-section"
      id="world-wellness-weekend"
      aria-labelledby="world-wellness-weekend-title"
    >
      <div className="section-shell cw-www-shell">
        <div className="cw-www-intro">
          <div>
            <p className="kicker">{worldWellnessWeekendContent.eyebrow[t]}</p>
            <h2 id="world-wellness-weekend-title">
              {worldWellnessWeekendContent.heading[t]}
            </h2>
            {worldWellnessWeekendContent.intro.map((paragraph) => (
              <p key={paragraph.en}>{paragraph[t]}</p>
            ))}
            <p className="cw-www-value">
              {worldWellnessWeekendContent.valueStatement[t]}
            </p>
            <ul
              className="cw-www-stats"
              aria-label={
                locale === "ja"
                  ? "World Wellness Weekendの開催規模"
                  : "World Wellness Weekend scale"
              }
            >
              {worldWellnessWeekendContent.stats.map((stat) => (
                <li key={stat.en}>{stat[t]}</li>
              ))}
            </ul>
            <span className="cw-www-badge">
              {worldWellnessWeekendContent.badge[t]}
            </span>
          </div>
          <div className="cw-www-logo-panel" aria-label="World Wellness Weekend logo">
            <img
              src={worldWellnessWeekendContent.logoSrc}
              alt={
                locale === "ja"
                  ? "World Wellness Weekend公式ロゴ差し替え用プレースホルダー"
                  : "Placeholder for the official World Wellness Weekend logo"
              }
            />
          </div>
        </div>

        <div className="cw-www-programs">
          <h3>{worldWellnessWeekendContent.subheading[t]}</h3>
          <div className="cw-www-option-grid">
            {worldWellnessWeekendContent.options.map((option, index) => (
              <article className="cw-www-option-card" key={option.title.en}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h4>{option.title[t]}</h4>
                <p className="cw-www-option-meta">{option.details[t]}</p>
                <p>{option.description[t]}</p>
                <p className="cw-www-suitable">{option.suitableFor[t]}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="cw-www-closing">
          <div>
            <h3>{worldWellnessWeekendContent.closingHeading[t]}</h3>
            <p>{worldWellnessWeekendContent.closingText[t]}</p>
          </div>
          <div className="cw-www-actions">
            <a className="button primary" href={emailHref}>
              {worldWellnessWeekendContent.primaryCta[t]}
            </a>
            <a
              className="button secondary"
              href="https://www.linkedin.com/in/kanako-nakai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {worldWellnessWeekendContent.secondaryCta[t]}
            </a>
            <p>{worldWellnessWeekendContent.note[t]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
