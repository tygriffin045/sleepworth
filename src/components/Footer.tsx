import Link from "next/link";
import { categories } from "@/data/categories";

const WORTH_SITES = [
  ["The Worth Guide", "https://theworthguide.com/"],
  ...["desk", "brew", "pet", "tech", "car", "kitchen", "clean", "tool", "yard", "bag", "groom", "fit", "bath", "travel", "watch"].map(
    (s) => [s[0].toUpperCase() + s.slice(1), `https://${s}.theworthguide.com/`],
  ),
].map(([label, href]) => ({ label, href }));

export function Footer() {
  return (
    <footer className="mt-24 border-t border-indigo-900/30 bg-indigo-950 text-indigo-100/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-[#f4f6fb]">Sleep<span className="text-[#d4af37]">Worth</span></p>
          <p className="mt-2 text-sm text-indigo-200/70">
            Editorial sleep gear picks — pillows, toppers, sheets, protectors,
            weighted blankets, cooling bedding, darkness tools, sound, sunrise
            lighting, and bedroom humidity. Tradeoffs over hype.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-300/50">
            Categories
          </p>
          <ul className="mt-3 columns-1 space-y-2 text-sm sm:columns-2">
            {categories.map((c) => (
              <li key={c.slug} className="break-inside-avoid">
                <Link
                  href={`/category/${c.slug}`}
                  className="hover:text-[#f4f6fb]"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-300/50">
            Site
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/products" className="hover:text-[#f4f6fb]">
                All products
              </Link>
            </li>
            <li>
              <Link href="/best" className="hover:text-[#f4f6fb]">
                Best for… hubs
              </Link>
            </li>
            <li>
              <Link href="/compare" className="hover:text-[#f4f6fb]">
                Compare tables
              </Link>
            </li>
            <li>
              <Link href="/guides" className="hover:text-[#f4f6fb]">
                Buying guides
              </Link>
            </li>
            <li>
              <Link
                href="/affiliate-disclosure"
                className="hover:text-[#f4f6fb]"
              >
                Affiliate disclosure
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl border-t border-indigo-900 px-4 py-6 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-300/50">More Worth Guide sites</p>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-indigo-200/70">
          {WORTH_SITES.map((site) => (
            <li key={site.href}>
              <a href={site.href} className="hover:text-[#f4f6fb]">{site.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-indigo-900 py-4 text-center text-xs text-indigo-300/40">
        © {new Date().getFullYear()} SleepWorth. We may earn a commission when you buy through links on this site. As an Amazon Associate I earn from qualifying purchases.
      </div>
    </footer>
  );
}
