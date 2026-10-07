import type { Metadata } from "next";
import { SITE_URL, DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from "@/lib/site";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AffiliateNote } from "@/components/AffiliateNote";
import "./globals.css";

const sans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const SITE_TITLE = "SleepWorth — Honest picks for better sleep";
const SITE_DESCRIPTION =
  "Editorial sleep gear picks: pillows, toppers, sheets, protectors, weighted blankets, cooling bedding, blackout tools, sound machines, sunrise lights, and bedroom humidity.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s · SleepWorth`,
  },
  description: SITE_DESCRIPTION,
  verification: {
    google: "FN6qrZKJIgH6gtQS2rIEQe-jjDmKVIUoBq3DwQUX8yk",
  },
  openGraph: {
    images: DEFAULT_OG_IMAGES,
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "SleepWorth",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    images: DEFAULT_TWITTER_IMAGES,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${serif.variable} min-h-screen antialiased`}
      >
        <Header />
        <main className="mx-auto min-h-[70vh] max-w-6xl px-4 py-10 sm:px-6">
          <AffiliateNote className="mb-4 mt-0" />
          {children}
        </main>
        <Footer />
        <Analytics />
      <script src="https://theworthguide.com/visit.js" defer></script></body>
    </html>
  );
}
