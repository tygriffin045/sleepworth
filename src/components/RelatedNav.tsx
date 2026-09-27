import Link from "next/link";
import type { RelatedLink } from "@/lib/related-content";

export function RelatedNav({
  title = "Keep exploring",
  links,
}: {
  title?: string;
  links: RelatedLink[];
}) {
  if (links.length === 0) return null;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
      <h2 className="font-serif text-xl text-slate-900 sm:text-2xl">{title}</h2>
      <p className="mt-1 text-sm text-slate-600">
        Hubs, comparisons, and guides that mention these picks — every link is a
        live page on SleepWorth.
      </p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="flex min-h-11 items-center gap-2 rounded-xl border border-slate-100 bg-slate-50/80 px-3 py-2 text-sm transition hover:border-indigo-200 hover:bg-indigo-50/50"
            >
              <span className="shrink-0 rounded-full bg-indigo-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-indigo-800">
                {l.kind}
              </span>
              <span className="font-medium text-slate-900 underline-offset-2 hover:underline">
                {l.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
