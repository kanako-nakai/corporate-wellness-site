import type { Locale } from "@/data/siteContent";

type LinkedInProfileLinkProps = {
  locale: Locale;
};

export default function LinkedInProfileLink({
  locale
}: LinkedInProfileLinkProps) {
  const label =
    locale === "ja" ? "LinkedInプロフィールを見る" : "View LinkedIn profile";

  return (
    <a
      className="linkedin-profile-link"
      href="https://www.linkedin.com/in/kanako-nakai/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (${locale === "ja" ? "新しいタブで開く" : "opens in a new tab"})`}
    >
      {label}
    </a>
  );
}
