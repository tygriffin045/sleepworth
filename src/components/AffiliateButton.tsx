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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  showHonesty = false,
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
      <span className="sr-only">{productName}</span>
    </div>
  );
}
