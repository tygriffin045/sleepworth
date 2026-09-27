import type { Metadata } from "next";
import Link from "next/link";
import { compares } from "@/data/compares";
import { SITE_NAME, DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Compare",
  description:
    "Side-by-side SleepWorth comparisons for pillows, sound machines, toppers, and darkness tools.",
  alternates: { canonical: "/compare" },
  openGraph: {
    images: DEFAULT_OG_IMAGES,
    title: "Compare tables · SleepWorth",
    description:
      "Honest forks for pillows, sound machines, toppers, and darkness — not fake scorecards.",
    url: "/compare",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare tables · SleepWorth",
    description:
      "Honest forks for pillows, sound machines, toppers, and darkness — not fake scorecards.",
    images: DEFAULT_TWITTER_IMAGES,
  },
};

export default function CompareIndexPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-700">
          Comparisons
        </p>
        <h1 className="mt-2 font-serif text-4xl text-slate-900">
          Side-by-side tables
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          Honest forks — not scorecards. Each table ends with a verdict in plain
          language.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/best"
            className="inline-flex min-h-11 items-center rounded-full bg-indigo-950 px-4 py-2 text-sm font-semibold text-[#f4f6fb] hover:bg-slate-900"
          >
            Best for… hubs
          </Link>
          <Link
            href="/products"
            className="inline-flex min-h-11 items-center rounded-full border border-indigo-300 bg-white px-4 py-2 text-sm font-semibold text-indigo-950 hover:bg-indigo-50"
          >
            All products
          </Link>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {compares.map((c) => (
          <Link
            key={c.slug}
            href={`/compare/${c.slug}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-indigo-300"
          >
            <h2 className="font-serif text-2xl text-slate-900">{c.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{c.description}</p>
          </Link>
        ))}
      </div>
      <p className="text-sm text-slate-500">
        Want curated stacks instead?{" "}
        <Link href="/best" className="underline underline-offset-2">
          Best-for hubs
        </Link>
        .
      </p>
    </div>
  );
}
