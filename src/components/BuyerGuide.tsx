import Image from "next/image";
import Link from "next/link";
import type { Guide, Product } from "@/data/types";
import { getProduct } from "@/data/products";
import { AffiliateButton } from "@/components/AffiliateButton";

function productOrThrow(slug: string): Product {
  const p = getProduct(slug);
  if (!p) throw new Error(`BuyerGuide: unknown product slug ${slug}`);
  return p;
}

export function QuickPicks({ guide }: { guide: Guide }) {
  if (!guide.quickPicks?.length) return null;
  return (
    <section
      aria-labelledby="quick-picks"
      className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5 sm:p-6"
    >
      <h2 id="quick-picks" className="font-serif text-2xl text-slate-900">
        Quick picks
      </h2>
      <ol className="mt-4 space-y-3">
        {guide.quickPicks.map((q) => {
          const p = productOrThrow(q.productSlug);
          return (
            <li key={q.productSlug} className="flex gap-3">
              <span className="mt-0.5 shrink-0 rounded-full bg-indigo-700 px-2.5 py-0.5 text-[11px] font-semibold text-white">
                {q.label}
              </span>
              <p className="text-sm text-slate-700">
                <a
                  href={`#pick-${p.slug}`}
                  className="font-semibold text-indigo-900 underline decoration-indigo-300 underline-offset-2"
                >
                  {p.name}
                </a>{" "}
                — {q.why}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export function GuideTable({ guide }: { guide: Guide }) {
  const t = guide.table;
  if (!t) return null;
  return (
    <section aria-label={t.caption}>
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="min-w-full text-left text-sm">
          <caption className="px-4 pt-4 text-left font-serif text-xl text-slate-900">
            {t.caption}
          </caption>
          <thead className="text-xs uppercase tracking-wider text-slate-500">
            <tr>
              {t.columns.map((c, i) => (
                <th key={i} scope="col" className="px-4 py-3 font-semibold">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {t.rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, i) =>
                  i === 0 ? (
                    <th
                      key={i}
                      scope="row"
                      className="whitespace-nowrap px-4 py-3 font-semibold text-slate-800"
                    >
                      {cell}
                    </th>
                  ) : (
                    <td key={i} className="px-4 py-3 text-slate-600">
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function GuidePicks({ guide }: { guide: Guide }) {
  if (!guide.picks?.length) return null;
  return (
    <section aria-labelledby="our-picks" className="space-y-8">
      <h2 id="our-picks" className="font-serif text-3xl text-slate-900">
        Our picks, with the tradeoffs
      </h2>
      {guide.picks.map((pick, idx) => {
        const p = productOrThrow(pick.productSlug);
        return (
          <article
            key={pick.productSlug}
            id={`pick-${p.slug}`}
            className="scroll-mt-24 grid gap-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 md:grid-cols-[220px_1fr]"
          >
            <Link
              href={`/products/${p.slug}`}
              className="relative block aspect-square overflow-hidden rounded-xl border border-slate-100 bg-white"
            >
              {p.imageUrl && (
                <Image
                  src={p.imageUrl}
                  alt={p.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 220px"
                  className="object-contain p-3"
                  priority={idx === 0}
                />
              )}
            </Link>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-700">
                {idx + 1}. {pick.label}
              </p>
              <h3 className="mt-1 font-serif text-2xl text-slate-900">
                <Link
                  href={`/products/${p.slug}`}
                  className="hover:underline hover:decoration-indigo-300 hover:underline-offset-4"
                >
                  {p.name}
                </Link>
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">{pick.verdict}</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                    Pros
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                    {pick.pros.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-rose-700">
                    Cons
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                    {pick.cons.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600">
                <span className="font-semibold text-slate-800">Best for: </span>
                {pick.bestFor}
              </p>
              <p className="mt-1 text-sm text-slate-600">
                <span className="font-semibold text-slate-800">Skip if: </span>
                {pick.skipIf}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <AffiliateButton
                  productSlug={p.slug}
                  productName={p.name}
                  amazonAsin={p.amazonAsin}
                  amazonQuery={p.amazonQuery}
                  placement={`guide_${guide.slug}`}
                />
                <Link
                  href={`/products/${p.slug}`}
                  className="text-sm font-medium text-indigo-800 underline underline-offset-4"
                >
                  Full review →
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export function GuideCriteria({ guide }: { guide: Guide }) {
  if (!guide.criteria?.length) return null;
  return (
    <section aria-labelledby="how-to-choose" className="max-w-3xl">
      <h2 id="how-to-choose" className="font-serif text-3xl text-slate-900">
        How to choose
      </h2>
      <dl className="mt-4 space-y-4">
        {guide.criteria.map((c) => (
          <div key={c.heading}>
            <dt className="font-semibold text-slate-900">{c.heading}</dt>
            <dd className="mt-1 leading-relaxed text-slate-600">{c.body}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function GuideFaq({ guide }: { guide: Guide }) {
  if (!guide.faqs?.length) return null;
  return (
    <section aria-labelledby="faq" className="max-w-3xl">
      <h2 id="faq" className="font-serif text-3xl text-slate-900">
        FAQ
      </h2>
      <div className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
        {guide.faqs.map((f) => (
          <div key={f.q} className="p-5">
            <h3 className="font-semibold text-slate-900">{f.q}</h3>
            <p className="mt-2 leading-relaxed text-slate-600">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function faqJsonLd(guide: Guide) {
  if (!guide.faqs?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
