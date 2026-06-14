import { corporateWellnessContent } from "@/data/corporateWellnessContent";
import type { Locale } from "@/data/siteContent";

type InquirySectionProps = {
  locale: Locale;
};

export default function InquirySection({ locale }: InquirySectionProps) {
  const t = locale;

  return (
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
          <h3>
            {locale === "ja" ? "相談時に共有しやすい内容" : "Helpful inquiry details"}
          </h3>
          <ul>
            {corporateWellnessContent.contact.prompts[t].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
