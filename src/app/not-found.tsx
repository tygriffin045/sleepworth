import Link from "next/link";
import { categories } from "@/data/categories";
import { hubs } from "@/data/hubs";

export default function NotFound() {
  return (
    <div className="space-y-10">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-700">
          404
        </p>
        <h1 className="mt-2 font-serif text-4xl text-slate-900">
          That page is not here
        </h1>
        <p className="mt-3 text-lg text-slate-600">
          The link may be outdated. Jump to a live category or use-case hub —
          every destination below is published on SleepWorth.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center rounded-full bg-indigo-950 px-5 py-2.5 text-sm font-semibold text-[#f4f6fb] hover:bg-slate-900"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="inline-flex min-h-11 items-center rounded-full border border-indigo-300 bg-white px-5 py-2.5 text-sm font-semibold text-indigo-950 hover:bg-indigo-50"
          >
            All products
          </Link>
          <Link
            href="/best"
            className="inline-flex min-h-11 items-center rounded-full border border-indigo-300 bg-white px-5 py-2.5 text-sm font-semibold text-indigo-950 hover:bg-indigo-50"
          >
            Best for… hubs
          </Link>
        </div>
      </header>

      <section>
        <h2 className="font-serif text-2xl text-slate-900">Shop by category</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {categories.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/category/${c.slug}`}
                className="flex min-h-11 items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:border-indigo-300"
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-slate-900">Use-case hubs</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {hubs.map((h) => (
            <li key={h.slug}>
              <Link
                href={`/best/${h.slug}`}
                className="flex min-h-11 items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:border-indigo-300"
              >
                {h.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
