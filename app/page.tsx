import type { Metadata } from "next";
import CorporateWellnessPage from "@/components/CorporateWellnessPage";

export const metadata: Metadata = {
  title: "Corporate Wellness | Kanako Nakai",
  description:
    "Bilingual movement-based workplace wellness programs for international and local teams, delivered online, onsite, or in hybrid formats.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Corporate Wellness | Kanako Nakai",
    description:
      "Movement-based wellbeing experiences that help international and local teams connect and work better together.",
    url: "/",
    type: "website",
    locale: "ja_JP",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/images/corporate-wellness-hero-session.jpg",
        width: 1179,
        height: 786,
        alt: "People seated on balance balls in a bright workplace wellness space"
      }
    ]
  }
};

export default function Home() {
  return <CorporateWellnessPage />;
}
