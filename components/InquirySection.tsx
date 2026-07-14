import { corporateWellnessContent } from "@/data/corporateWellnessContent";
import type { Locale } from "@/data/siteContent";
import InquiryForm from "@/components/InquiryForm";
import LinkedInProfileLink from "@/components/LinkedInProfileLink";

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
          <address className="cw-contact-links">
            <LinkedInProfileLink locale={locale} />
          </address>
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
        <InquiryForm locale={locale} />
      </div>
    </section>
  );
}
