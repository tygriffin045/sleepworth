import type { Metadata } from "next";
import { AffiliateNote } from "@/components/AffiliateNote";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compares, getCompare } from "@/data/compares";
import { getProduct } from "@/data/products";
import { hubs } from "@/data/hubs";
import { guides } from "@/data/guides";
import { getAffiliateUrl } from "@/lib/affiliate";
import { ProductCard } from "@/components/ProductCard";
import { RelatedNav } from "@/components/RelatedNav";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from "@/lib/site";
import type { RelatedLink } from "@/lib/related-content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return compares.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const table = getCompare(slug);
  if (!table) return { title: "Compare" };
  return {
    title: table.title,
    description: table.description,
    alternates: { canonical: `/compare/${slug}` },
    openGraph: {
      images: DEFAULT_OG_IMAGES,
      title: table.title,
      description: table.description,
      url: `/compare/${slug}`,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      images: DEFAULT_TWITTER_IMAGES,
      title: table.title,
      description: table.description,
    },
  };
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params;
  const table = getCompare(slug);
  if (!table) notFound();

  const products = table.rows
    .map((r) => getProduct(r.productSlug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const productSet = new Set(table.rows.map((r) => r.productSlug));
  const crossLinks: RelatedLink[] = [];
  for (const h of hubs) {
    if (h.productSlugs.some((s) => productSet.has(s))) {
      crossLinks.push({
        href: `/best/${h.slug}`,
        label: h.title,
        kind: "Hub",
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
    name: table.title,
    description: table.description,
    url: `${SITE_URL}/compare/${table.slug}`,
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
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
          Comparison
        </p>
        <h1 className="mt-2 font-serif text-4xl text-slate-900">{table.title}</h1>
        <p className="mt-4 text-lg text-slate-600">{table.intro}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#table"
            className="inline-flex min-h-11 items-center rounded-full bg-indigo-950 px-5 py-2.5 text-sm font-semibold text-[#f4f6fb] hover:bg-slate-900"
          >
            Jump to table
          </a>
          <Link
            href="/best"
            className="inline-flex min-h-11 items-center rounded-full border border-indigo-300 bg-white px-5 py-2.5 text-sm font-semibold text-indigo-950 hover:bg-indigo-50"
          >
            Best for… hubs
          </Link>
        </div>
        <AffiliateNote />
      </header>

      <div id="table" className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
            <tr>
              {table.columns.map((col) => (
                <th key={col.key} className="px-4 py-3 font-semibold">
                  {col.label}
                </th>
              ))}
              <th className="px-4 py-3 font-semibold">CTA</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {table.rows.map((row) => {
              const product = getProduct(row.productSlug);
              if (!product) return null;
              const href = getAffiliateUrl({
                slug: row.productSlug,
                amazonAsin: product.amazonAsin,
                amazonQuery: product.amazonQuery,
              });
              return (
                <tr key={row.productSlug} className="align-top">
                  <td className="px-4 py-3 font-medium text-slate-900">
                    <Link
                      href={`/products/${row.productSlug}`}
                      className="underline-offset-2 hover:underline"
                    >
                      {product.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-slate-600">{row.bestFor}</td>
                  <td className="px-4 py-3 text-slate-600">{row.loftOrFeel}</td>
                  <td className="px-4 py-3 text-slate-600">{row.cooling}</td>
                  <td className="px-4 py-3 text-slate-600">{row.priceBand}</td>
                  <td className="px-4 py-3 text-slate-600">{row.skipIf}</td>
                  <td className="px-4 py-3">
                    <a
                      href={href}
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                      className="inline-flex min-h-10 items-center whitespace-nowrap rounded-full bg-indigo-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-800"
                    >
                      Check price
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <section className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-6">
        <h2 className="font-serif text-xl text-slate-900">Verdict</h2>
        <p className="mt-2 text-slate-700">{table.verdict}</p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-slate-900">Cards</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} priority={i < 2} />
          ))}
        </div>
      </section>

      <RelatedNav title="Related hubs & guides" links={crossLinks} />

      <p className="text-sm text-slate-500">
        <Link href="/compare" className="underline underline-offset-2">
          ← All comparisons
        </Link>
        {" · "}
        <Link href="/best" className="underline underline-offset-2">
          Best-for hubs
        </Link>
      </p>
    </div>
  );
}
