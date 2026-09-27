import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "All products",
  description:
    "Browse 45 SleepWorth sleep gear picks with best-for labels and clear Amazon Associate links (tag sleepworth20-20).",
  alternates: { canonical: "/products" },
  openGraph: {
    images: DEFAULT_OG_IMAGES,
    title: "All SleepWorth products",
    description:
      "45 editorial sleep gear picks — pillows, toppers, sheets, darkness tools, sound, lighting, and more.",
    url: "/products",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: "All SleepWorth products",
    description:
      "45 editorial sleep gear picks — pillows, toppers, sheets, darkness tools, sound, lighting, and more.",
    images: DEFAULT_TWITTER_IMAGES,
  },
};

export default function ProductsPage() {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SleepWorth products",
    url: `${SITE_URL}/products`,
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
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
        <h1 className="font-serif text-4xl text-slate-900">All products</h1>
        <p className="mt-2 text-lg text-slate-600">
          {products.length} editorial picks — each with a use-case label, honest
          cons, and Amazon links tagged sleepworth20-20. No invented scores.
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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <ProductCard key={p.slug} product={p} priority={i < 3} />
        ))}
      </div>
    </div>
  );
}
