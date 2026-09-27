import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/data/guides";
import { SITE_NAME, DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Buying guides",
  description:
    "SleepWorth buying guides for pillows, mattress toppers, and building a quieter, darker sleep environment.",
  alternates: { canonical: "/guides" },
  openGraph: {
    images: DEFAULT_OG_IMAGES,
    title: "Buying guides · SleepWorth",
    description:
      "Longer reads with internal links to products — no invented brand scores.",
    url: "/guides",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: "Buying guides · SleepWorth",
    description:
      "Longer reads with internal links to products — no invented brand scores.",
    images: DEFAULT_TWITTER_IMAGES,
  },
};

export default function GuidesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-4xl text-slate-900">Buying guides</h1>
        <p className="mt-2 text-lg text-slate-600">
          Longer reads with internal links to the products we mention — no
          invented brand scores.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/best"
            className="inline-flex min-h-11 items-center rounded-full bg-indigo-950 px-4 py-2 text-sm font-semibold text-[#f4f6fb] hover:bg-slate-900"
          >
            Best for… hubs
          </Link>
          <Link
            href="/compare"
            className="inline-flex min-h-11 items-center rounded-full border border-indigo-300 bg-white px-4 py-2 text-sm font-semibold text-indigo-950 hover:bg-indigo-50"
          >
            Compare tables
          </Link>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {guides.map((g) => (
          <Link
            key={g.slug}
            href={`/guides/${g.slug}`}
            className="rounded-2xl border border-slate-200/80 bg-white p-6 hover:border-indigo-300"
          >
            <p className="text-xs text-slate-500">
              {g.readingTime} · {g.publishedAt}
            </p>
            <h2 className="mt-2 font-serif text-2xl text-slate-900">
              {g.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{g.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
