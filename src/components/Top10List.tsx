import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/types";
import { AffiliateButton } from "@/components/AffiliateButton";
import { TierBadge } from "@/components/TierBadge";
import ImagePlaceholder from "./ImagePlaceholder";

/** Ranked Top 10 with pros and cons for every product. */
export function Top10List({
  items,
  heading,
  id = "top10",
  labels,
}: {
  items: Product[];
  heading: string;
  id?: string;
  /** Optional per-item kicker, e.g. the category name on the home page */
  labels?: string[];
}) {
  return (
    <section aria-labelledby={id} className="mt-10" data-top10>
      <h2 id={id} className="font-serif text-3xl text-slate-900">
        {heading}
      </h2>
      <ol className="mt-6 space-y-6">
        {items.map((p, i) => (
          <li
            key={p.slug}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex flex-col gap-5 sm:flex-row">
              <div className="flex items-start gap-4 sm:w-56 sm:flex-col">
                <span className="font-serif text-3xl text-[#4338ca]">#{i + 1}</span>
                {p.imageUrl ? ((
                  <Link
                    href={`/products/${p.slug}`}
                    className="relative block aspect-square w-28 overflow-hidden rounded-lg bg-slate-50 sm:w-full"
                  >
                    <Image
                      src={p.imageUrl}
                      alt={p.imageAlt}
                      fill
                      sizes="(max-width: 640px) 30vw, 14rem"
                      className="object-contain p-3"
                      priority={i === 0}
                    />
                  </Link>
                )) : (<ImagePlaceholder name={p.name} category={p.category} className="relative aspect-square w-28 shrink-0 rounded-lg sm:w-full" />)}
              </div>
              <div className="min-w-0 flex-1">
                {labels?.[i] && (
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {labels[i]}
                  </p>
                )}
                <h3 className="font-serif text-xl text-slate-900">
                  <Link href={`/products/${p.slug}`} className="hover:underline underline-offset-4">
                    {p.name}
                  </Link>{" "}
                  <TierBadge tier={p.tier} className="ml-1 align-middle" />
                </h3>
                <p className="mt-1 text-sm text-slate-600">{p.tagline}</p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold text-indigo-800">Pros</h4>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-700">
                      {p.pros.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-rose-800">Cons</h4>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-700">
                      {p.cons.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <AffiliateButton
                  productSlug={p.slug}
                  productName={p.name}
                  amazonAsin={p.amazonAsin}
                  amazonQuery={p.amazonQuery}
                  className="mt-4"
                />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
