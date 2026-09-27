import type { Metadata } from "next";
import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Affiliate disclosure",
  description:
    "SleepWorth Amazon Associates disclosure — how affiliate links and the sleepworth20-20 tag work.",
  alternates: { canonical: "/affiliate-disclosure" },
  openGraph: {
    images: DEFAULT_OG_IMAGES,
    title: "Affiliate disclosure · SleepWorth",
    description:
      "How SleepWorth's Amazon Associates links and the sleepworth20-20 tag work.",
    url: "/affiliate-disclosure",
    siteName: "SleepWorth",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affiliate disclosure · SleepWorth",
    description:
      "How SleepWorth's Amazon Associates links and the sleepworth20-20 tag work.",
    images: DEFAULT_TWITTER_IMAGES,
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <h1 className="font-serif text-4xl text-slate-900">
        Affiliate disclosure
      </h1>
      <p className="text-lg text-slate-600">
        SleepWorth is a participant in the Amazon Services LLC Associates
        Program, an affiliate advertising program designed to provide a means
        for sites to earn advertising fees by advertising and linking to
        Amazon.com.
      </p>
      <p className="text-slate-600">
        As an Amazon Associate, we earn from qualifying purchases. Product
        links on this site typically include our Associates tag{" "}
        <strong>sleepworth20-20</strong> in the format{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm break-all">
          https://www.amazon.com/dp/&#123;ASIN&#125;?tag=sleepworth20-20
        </code>
        . When a verified ASIN is unavailable, we link to Amazon search results
        with the same tag.
      </p>
      <p className="text-slate-600">
        Prices shown as bands (for example, &quot;About $70–$90&quot;) are
        approximate and change frequently on Amazon. Always check the live
        Amazon listing for current pricing, availability, and shipping.
      </p>
      <p className="text-slate-600">
        Amazon, Amazon.com, and the Amazon logo are trademarks of Amazon.com,
        Inc. or its affiliates. SleepWorth is not endorsed by Amazon.
      </p>
    </div>
  );
}
