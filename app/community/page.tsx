import type { Metadata } from "next";
import CommunityPage from "@/components/CommunityPage";

export const metadata: Metadata = {
  title: "Community & Other Programs | Kanako Nakai",
  description:
    "Selected community wellness, active aging, postpartum support, women's wellness, FloatFit, and international wellness initiatives by Kanako Nakai.",
  alternates: {
    canonical: "/community"
  },
  openGraph: {
    title: "Community & Other Programs | Kanako Nakai",
    description:
      "Community and life-stage wellness work that informs Kanako Nakai's workplace wellness practice.",
    url: "/community",
    type: "website",
    locale: "ja_JP",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/images/kanako-wellness-hero.png",
        width: 1536,
        height: 1024,
        alt: "Community wellness program by Kanako Nakai"
      }
    ]
  }
};

export default function Page() {
  return <CommunityPage />;
}
