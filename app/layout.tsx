import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://for-corporate-web.vercel.app"),
  title: {
    default: "Corporate Wellness | Kanako Nakai",
    template: "%s"
  },
  description:
    "Bilingual movement-based workplace wellness programs for international and local teams by Kanako Nakai.",
  keywords: [
    "Kanako Nakai",
    "仲井果菜子",
    "wellness educator",
    "program designer",
    "bilingual wellness",
    "corporate wellness",
    "women's wellness",
    "postpartum recovery",
    "active aging",
    "FloatFit",
    "Tokyo wellness"
  ],
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
        url: "/images/corporate-wellness-hero-balance-balls.jpg",
        width: 2600,
        height: 1950,
        alt: "Red balance balls arranged in a natural-light workplace wellness space"
      }
    ]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
