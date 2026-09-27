import Link from "next/link";
import { AFFILIATE_DISCLOSURE_SHORT } from "@/lib/affiliate";

/** The single, subtle per-page affiliate line. Use once per page, near the top. */
export function AffiliateNote({ className = "mt-3" }: { className?: string }) {
  return (
    <p className={`${className} text-xs text-slate-500`} data-affiliate-note>
      <Link
        href="/affiliate-disclosure"
        className="hover:text-slate-700 hover:underline underline-offset-2"
      >
        {AFFILIATE_DISCLOSURE_SHORT}
      </Link>
    </p>
  );
}
