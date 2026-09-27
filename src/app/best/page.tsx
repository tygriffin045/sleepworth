import type { Metadata } from "next";
import Link from "next/link";
import { hubs } from "@/data/hubs";
import { SITE_NAME, DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Best for… hubs",
  description:
    "High-conversion SleepWorth hubs: side sleepers, hot sleepers, apartment blackout, and budget starter kits.",
  alternates: { canonical: "/best" },
  openGraph: {
    images: DEFAULT_OG_IMAGES,
    title: "Best for… hubs · SleepWorth",
    description:
      "Use-case starting points for sleep gear — loft, heat, light, and budget — with clear skip advice.",
    url: "/best",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: "Best for… hubs · SleepWorth",
    description:
      "Use-case starting points for sleep gear — loft, heat, light, and budget — with clear skip advice.",
    images: DEFAULT_TWITTER_IMAGES,
  },
};

export default function BestIndexPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-700">
          Use-case hubs
        </p>
        <h1 className="mt-2 font-serif text-4xl text-slate-900">
          Best for… starting points
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          Skip vague “best overall” lists. These hubs start from the failure mode
          you feel — loft, heat, light, or budget — and point to picks with clear
          skip advice.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/compare"
            className="inline-flex min-h-11 items-center rounded-full bg-indigo-950 px-4 py-2 text-sm font-semibold text-[#f4f6fb] hover:bg-slate-900"
          >
            Prefer tables? Compare →
          </Link>
          <Link
            href="/products"
            className="inline-flex min-h-11 items-center rounded-full border border-indigo-300 bg-white px-4 py-2 text-sm font-semibold text-indigo-950 hover:bg-indigo-50"
          >
            Browse all products
          </Link>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {hubs.map((h) => (
          <Link
            key={h.slug}
            href={`/best/${h.slug}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-indigo-300"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {h.eyebrow}
            </p>
            <h2 className="mt-2 font-serif text-2xl text-slate-900">
              {h.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{h.description}</p>
          </Link>
        ))}
      </div>
      <p className="text-sm text-slate-500">
        Prefer a side-by-side table?{" "}
        <Link href="/compare" className="underline underline-offset-2">
          Browse comparisons
        </Link>
        .
      </p>
    </div>
  );
}
