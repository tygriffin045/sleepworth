"use client";

import { track } from "@vercel/analytics";
import { getAffiliateUrl } from "@/lib/affiliate";

export function AffiliateButton({
  productSlug,
  productName,
  amazonAsin,
  amazonQuery,
  className = "",
  placement = "inline",
  showHonesty = true,
}: {
  productSlug: string;
  productName: string;
  amazonAsin?: string;
  amazonQuery?: string;
  className?: string;
  placement?: string;
  showHonesty?: boolean;
}) {
  const href = getAffiliateUrl({
    slug: productSlug,
    amazonAsin,
    amazonQuery,
  });

  return (
    <div className={className}>
      <a
        href={href}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-indigo-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-800 sm:w-auto"
        onClick={() =>
          track("amazon_outbound_click", {
            product_slug: productSlug,
            asin: amazonAsin ?? "",
            product_name: productName,
            placement,
          })
        }
      >
        Check price on Amazon
      </a>
      {showHonesty && (
        <p className="mt-2 text-xs leading-relaxed text-slate-500">
          Amazon Associate link · We may earn a commission at no extra cost to
          you. Price, shipping, and returns are set by Amazon or the seller on
          the listing — we do not control them.
        </p>
      )}
      <span className="sr-only">{productName}</span>
    </div>
  );
}
