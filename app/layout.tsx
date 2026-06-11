import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kanako-nakai.com"),
  title: "Kanako Nakai | Bilingual Wellness Educator & Program Designer",
  description:
    "Kanako Nakai is a Tokyo-based bilingual wellness educator and program designer specializing in women's wellness, postpartum recovery, active aging, functional movement, community wellness, and international facilitation.",
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
    title: "Kanako Nakai | Bilingual Wellness Educator & Program Designer",
    description:
      "Designing wellness experiences that help people move, recover, connect, and thrive.",
    type: "website",
    locale: "ja_JP",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/images/kanako-wellness-hero.png",
        width: 1536,
        height: 1024,
        alt: "A warm bilingual wellness workshop environment in Tokyo"
      }
    ]
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
