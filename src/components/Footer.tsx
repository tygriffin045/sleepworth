import Link from "next/link";
import { categories } from "@/data/categories";
import { AMAZON_ASSOCIATE_STATEMENT } from "@/lib/affiliate";

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
      <div className="border-t border-indigo-900 py-4 text-center text-xs text-indigo-300/40">
        © {new Date().getFullYear()} SleepWorth. {AMAZON_ASSOCIATE_STATEMENT}
      </div>
    </footer>
  );
}
