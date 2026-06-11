import type { Metadata } from "next";
import CorporateWellnessPage from "./CorporateWellnessPage";

export const metadata: Metadata = {
  title: "Corporate Wellness | Kanako Nakai",
  description:
    "Corporate wellness programs, bilingual EN/JP facilitation, team energizers, movement breaks, and customizable wellbeing experiences for modern organizations.",
  alternates: {
    canonical: "/corporate-wellness"
  },
  openGraph: {
    title: "Corporate Wellness | Kanako Nakai",
    description:
      "Bilingual movement-based wellbeing experiences for corporate teams, global organizations, hybrid workplaces, and wellness initiatives.",
    type: "website",
    locale: "ja_JP",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/images/corporate-wellness-hero-real-smile.png",
        width: 1535,
        height: 1024,
        alt: "Women participating in a seated balance-ball wellness session"
      }
    ]
  }
};

export default function Page() {
  return <CorporateWellnessPage />;
}
