import type { Metadata } from "next";
import { AffiliateNote } from "@/components/AffiliateNote";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getHub, hubs } from "@/data/hubs";
import { getProduct } from "@/data/products";
import { compares } from "@/data/compares";
import { guides } from "@/data/guides";
import { ProductCard } from "@/components/ProductCard";
import { RelatedNav } from "@/components/RelatedNav";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from "@/lib/site";
import type { RelatedLink } from "@/lib/related-content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return hubs.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hub = getHub(slug);
  if (!hub) return { title: "Best for…" };
  return {
    title: hub.title,
    description: hub.description,
    alternates: { canonical: `/best/${slug}` },
    openGraph: {
      images: DEFAULT_OG_IMAGES,
      title: hub.title,
      description: hub.description,
      url: `/best/${slug}`,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      images: DEFAULT_TWITTER_IMAGES,
      title: hub.title,
      description: hub.description,
    },
  };
}

export default async function HubPage({ params }: Props) {
  const { slug } = await params;
  const hub = getHub(slug);
  if (!hub) notFound();

  const items = hub.productSlugs
    .map((s) => getProduct(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const productSet = new Set(hub.productSlugs);
  const crossLinks: RelatedLink[] = [];
  for (const c of compares) {
    if (c.rows.some((r) => productSet.has(r.productSlug))) {
      crossLinks.push({
        href: `/compare/${c.slug}`,
        label: c.title,
        kind: "Compare",
      });
    }
  }
  for (const g of guides) {
    if (g.productSlugs.some((s) => productSet.has(s))) {
      crossLinks.push({
        href: `/guides/${g.slug}`,
        label: g.title,
        kind: "Guide",
      });
    }
  }

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: hub.title,
    description: hub.description,
    url: `${SITE_URL}/best/${hub.slug}`,
    numberOfItems: items.length,
    itemListElement: items.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/products/${p.slug}`,
      name: p.name,
    })),
  };

  return (
    <div className="space-y-10">
      <JsonLd data={itemListLd} />
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-700">
          {hub.eyebrow}
        </p>
        <h1 className="mt-2 font-serif text-4xl text-slate-900">{hub.title}</h1>
        <p className="mt-4 text-lg text-slate-600">{hub.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#picks"
            className="inline-flex min-h-11 items-center rounded-full bg-indigo-950 px-5 py-2.5 text-sm font-semibold text-[#f4f6fb] hover:bg-slate-900"
          >
            See picks below
          </a>
          <Link
            href="/compare"
            className="inline-flex min-h-11 items-center rounded-full border border-indigo-300 bg-white px-5 py-2.5 text-sm font-semibold text-indigo-950 hover:bg-indigo-50"
          >
            Open compare tables
          </Link>
        </div>
        <AffiliateNote />
      </header>

      <div className="max-w-3xl space-y-4">
        {hub.intro.map((para) => (
          <p key={para.slice(0, 48)} className="leading-relaxed text-slate-600">
            {para}
          </p>
        ))}
      </div>

      <section className="rounded-2xl border border-amber-200/80 bg-amber-50/50 p-5">
        <p className="text-sm font-semibold text-amber-950">What we would skip</p>
        <p className="mt-1 text-sm text-amber-900/90">{hub.skipAdvice}</p>
      </section>

      <section id="picks">
        <h2 className="font-serif text-2xl text-slate-900">Picks for this use case</h2>
        <p className="mt-1 text-sm text-slate-600">
          Each card links to our editorial page and Amazon. Prefer{" "}
          <code className="rounded bg-slate-100 px-1 text-xs">/dp/ASIN</code>{" "}
          when ASINs are verified.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <ProductCard key={p.slug} product={p} priority={i < 3} />
          ))}
        </div>
      </section>

      <RelatedNav title="Related compares & guides" links={crossLinks} />

      <p className="text-sm text-slate-500">
        <Link href="/best" className="underline underline-offset-2">
          ← All hubs
        </Link>
        {" · "}
        <Link href="/compare" className="underline underline-offset-2">
          Compare tables
        </Link>
        {" · "}
        <Link href="/products" className="underline underline-offset-2">
          All products
        </Link>
      </p>
    </div>
  );
}
