import type { Metadata } from "next";
import { AffiliateNote } from "@/components/AffiliateNote";
import Link from "next/link";
import { categories } from "@/data/categories";
import { getFeaturedProducts } from "@/data/products";
import { guides } from "@/data/guides";
import { hubs } from "@/data/hubs";
import { compares } from "@/data/compares";
import { ProductCard } from "@/components/ProductCard";
import { TopRail } from "@/components/TopRail";
import { TrustStrip } from "@/components/TrustStrip";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "SleepWorth — Honest picks for better sleep",
  },
  description:
    "Editorial sleep gear: pillows, toppers, sheets, protectors, weighted blankets, cooling bedding, blackout tools, sound machines, sunrise lights, and humidity.",
  alternates: { canonical: "/" },
  openGraph: {
    images: DEFAULT_OG_IMAGES,
    title: "SleepWorth — Honest picks for better sleep",
    description:
      "Tradeoffs-first sleep gear picks. Start with Best for… hubs or compare tables.",
    url: "/",
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SleepWorth — Honest picks for better sleep",
    description:
      "Tradeoffs-first sleep gear picks. Start with Best for… hubs or compare tables.",
    images: DEFAULT_TWITTER_IMAGES,
  },
};

export default function HomePage() {
  const featured = getFeaturedProducts();
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Editorial sleep gear picks with clear tradeoffs.",
  };
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  };

  return (
    <div className="space-y-16">
      <JsonLd data={[websiteLd, orgLd]} />
      <section className="relative overflow-hidden rounded-3xl border border-indigo-200/60 bg-[#e8eef8] px-6 py-14 sm:px-12 sm:py-20">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-slate-400/20 blur-3xl" />
        <div className="relative max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">
            Sleep gear, pressure-tested
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-slate-900 sm:text-5xl">
            Honest picks for better sleep
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            We edit pillows, toppers, sheets, protectors, weighted blankets,
            cooling bedding, blackout gear, sound machines, sunrise lights, and
            bedroom humidity — with clear tradeoffs, who each pick is for, and
            what we would skip. No invented brand scores.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/best"
              className="inline-flex min-h-11 items-center rounded-full bg-indigo-950 px-5 py-2.5 text-sm font-semibold text-[#f4f6fb] hover:bg-slate-900"
            >
              Start with Best for…
            </Link>
            <Link
              href="/compare"
              className="inline-flex min-h-11 items-center rounded-full border border-indigo-400 bg-white px-5 py-2.5 text-sm font-semibold text-indigo-950 hover:bg-indigo-50"
            >
              Compare side-by-side
            </Link>
            <Link
              href="/products"
              className="inline-flex min-h-11 items-center rounded-full border border-indigo-300/70 bg-white/70 px-5 py-2.5 text-sm font-semibold text-indigo-950 hover:bg-white"
            >
              Browse all products
            </Link>
          </div>
          <AffiliateNote className="mt-4" />
        </div>
      </section>

      <TopRail />

      <section>
        <h2 className="font-serif text-3xl text-stone-900">Vs reviews</h2>
        <p className="mt-1 text-stone-600">Side-by-side picks for the thing that is actually keeping you up.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <a href="/compare/pillows" className="rounded-2xl border border-stone-200 bg-white p-5 hover:border-stone-400">Pillow comparison</a>
          <a href="/compare/sound-machines" className="rounded-2xl border border-stone-200 bg-white p-5 hover:border-stone-400">Sound machine comparison</a>
          <a href="/compare/toppers" className="rounded-2xl border border-stone-200 bg-white p-5 hover:border-stone-400">Mattress topper comparison</a>
          <a href="/compare/darkness" className="rounded-2xl border border-stone-200 bg-white p-5 hover:border-stone-400">Darkness tools comparison</a>
        </div>
      </section>


      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl text-slate-900">
              Shop by category
            </h2>
            <p className="mt-1 text-slate-600">
              Start with the failure mode you feel at 3 a.m. — loft, firmness,
              heat, light, noise, or dry air.
            </p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="rounded-2xl border border-slate-200/80 bg-white p-5 transition hover:border-indigo-300 hover:shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Category
              </p>
              <h3 className="mt-1 font-serif text-xl text-slate-900">
                {c.name}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm text-slate-600">
                {c.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl text-slate-900">Top picks</h2>
            <p className="mt-1 text-slate-600">
              Featured gear with clear “best for” labels — the short list we
              would put in our own bedrooms first.
            </p>
          </div>
          <Link
            href="/products"
            className="hidden text-sm font-medium text-indigo-800 underline underline-offset-4 sm:inline"
          >
            View all
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProductCard
              key={p.slug}
              product={p}
              priority={i < 3}
              showAffiliateCta
            />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl text-slate-900">
              Best for… & compare
            </h2>
            <p className="mt-1 text-slate-600">
              High-conversion starting points and side-by-side tables — not fake
              scorecards.
            </p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-700">
              Hubs
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {hubs.map((h) => (
                <li key={h.slug}>
                  <Link
                    href={`/best/${h.slug}`}
                    className="font-medium text-slate-900 underline-offset-2 hover:underline"
                  >
                    {h.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/best"
              className="mt-4 inline-flex min-h-10 items-center text-sm font-semibold text-indigo-800 underline underline-offset-4"
            >
              All hubs →
            </Link>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-700">
              Tables
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {compares.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/compare/${c.slug}`}
                    className="font-medium text-slate-900 underline-offset-2 hover:underline"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/compare"
              className="mt-4 inline-flex min-h-10 items-center text-sm font-semibold text-indigo-800 underline underline-offset-4"
            >
              All comparisons →
            </Link>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <h2 className="font-serif text-2xl text-slate-900">
          Quick comparisons
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          If you only remember three forks in the road:
        </p>
        <ul className="mt-4 space-y-3 text-sm text-slate-700">
          <li>
            <span className="font-semibold text-slate-900">Pillow loft unknown?</span>{" "}
            Start with Coop Original. Already hot? Eden / Cool+. Want hotel fluff
            for guests? Beckham 2-pack.{" "}
            <Link
              href="/compare/pillows"
              className="font-medium text-indigo-800 underline underline-offset-2"
            >
              Pillow table
            </Link>
          </li>
          <li>
            <span className="font-semibold text-slate-900">Mattress too firm?</span>{" "}
            Linenspa 2&quot; first; 3&quot; if shoulders still complain. Sagging core?
            Skip the topper — replace the mattress.{" "}
            <Link
              href="/compare/toppers"
              className="font-medium text-indigo-800 underline underline-offset-2"
            >
              Topper table
            </Link>
          </li>
          <li>
            <span className="font-semibold text-slate-900">Noise vs routines?</span>{" "}
            Dohm for natural fan hush, LectroFan for precise digital noise, Hatch
            or Philips when light cues matter more than sound alone.{" "}
            <Link
              href="/compare/sound-machines"
              className="font-medium text-indigo-800 underline underline-offset-2"
            >
              Sound table
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-serif text-3xl text-slate-900">Buying guides</h2>
        <p className="mt-1 text-slate-600">
          Longer reads with internal links to the products we mention.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 hover:border-indigo-300"
            >
              <p className="text-xs text-slate-500">
                {g.readingTime} · {g.publishedAt}
              </p>
              <h3 className="mt-2 font-serif text-xl text-slate-900">
                {g.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{g.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
