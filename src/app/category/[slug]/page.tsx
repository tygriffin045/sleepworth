import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory } from "@/data/categories";
import { getTopPicks } from "@/data/top10";
import { ProductCard } from "@/components/ProductCard";
import { RelatedNav } from "@/components/RelatedNav";
import { JsonLd } from "@/components/JsonLd";
import { getRelatedForCategory } from "@/lib/related-content";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from "@/lib/site";
import { BadgePicks } from "@/components/BadgePicks";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Category" };
  const title = `${category.name} — sleep gear picks`;
  const description = category.description;
  return {
    title,
    description,
    alternates: { canonical: `/category/${slug}` },
    openGraph: {
      images: DEFAULT_OG_IMAGES,
      title,
      description,
      url: `/category/${slug}`,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      images: DEFAULT_TWITTER_IMAGES,
      title,
      description,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = getTopPicks(slug);
  const related = getRelatedForCategory(category.slug);
  const listUrl = `${SITE_URL}/category/${category.slug}`;
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: category.name,
    description: category.description,
    url: listUrl,
    numberOfItems: items.length,
    itemListElement: items.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/products/${p.slug}`,
      name: p.name,
    })),
  };

  return (
    <div className="space-y-8">
      <JsonLd data={itemListLd} />
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-700">
          Category
        </p>
        <h1 className="mt-2 font-serif text-4xl text-slate-900">
          {category.name}
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-slate-600">
          {category.description}
        </p>
        <p className="mt-2 text-sm text-slate-500">
          Top {items.length} picks · each card
          carries a &quot;best for&quot; label ·{" "}
          <Link href="/products" className="underline underline-offset-2">
            View all
          </Link>
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
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
      <BadgePicks category={slug} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <ProductCard key={p.slug} product={p} priority={i < 3} />
        ))}
      </div>
      <RelatedNav title="Related hubs, compares & guides" links={related} />
    </div>
  );
}
