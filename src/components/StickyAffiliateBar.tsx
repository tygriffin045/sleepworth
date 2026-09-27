"use client";

import { track } from "@vercel/analytics";
import { getAffiliateUrl } from "@/lib/affiliate";

export function StickyAffiliateBar({
  productSlug,
  productName,
  amazonAsin,
  amazonQuery,
  priceBand,
}: {
  productSlug: string;
  productName: string;
  amazonAsin?: string;
  amazonQuery?: string;
  priceBand: string;
}) {
  const href = getAffiliateUrl({
    slug: productSlug,
    amazonAsin,
    amazonQuery,
  });

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-indigo-200/80 bg-white/95 shadow-[0_-8px_30px_rgba(15,23,42,0.08)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-900">
            {productName}
          </p>
          <p className="text-xs text-slate-500">
            {priceBand} · Amazon Associate link · price &amp; shipping on Amazon
          </p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-indigo-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-800"
          onClick={() =>
            track("amazon_outbound_click", {
              product_slug: productSlug,
              asin: amazonAsin ?? "",
              product_name: productName,
              placement: "sticky_bar",
            })
          }
        >
          Check price on Amazon
        </a>
      </div>
    </div>
  );
}
