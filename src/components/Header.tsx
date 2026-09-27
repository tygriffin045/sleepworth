"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { categories } from "@/data/categories";
import { hubs } from "@/data/hubs";
import type { CategorySlug } from "@/data/types";

const BED: CategorySlug[] = [
  "pillows",
  "mattress-toppers",
  "sheets-bedding",
  "mattress-protectors",
  "weighted-blankets",
  "cooling-bedding",
];
const ROOM: CategorySlug[] = [
  "blackout-curtains-masks",
  "white-noise-sound-machines",
  "bedtime-lighting",
  "sleep-air-humidity",
];

const pick = (slugs: CategorySlug[]) =>
  slugs
    .map((s) => categories.find((c) => c.slug === s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const groups = [
  { label: "In the bed", items: pick(BED).map((c) => ({ href: `/category/${c.slug}`, label: c.name })) },
  { label: "The bedroom", items: pick(ROOM).map((c) => ({ href: `/category/${c.slug}`, label: c.name })) },
  {
    label: "Best for…",
    items: [
      ...hubs.map((h) => ({ href: `/best/${h.slug}`, label: cap(h.title.replace(/^Best for /, "")) })),
      { href: "/best", label: "All use-case hubs" },
    ],
  },
];

const topLinks = [
  { href: "/compare", label: "Compare" },
  { href: "/guides", label: "Guides" },
  { href: "/products", label: "All products" },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 12"
      className={`h-3 w-3 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M2.5 4.5 L6 8 L9.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const shopId = useId();
  const shopWrap = useRef<HTMLDivElement>(null);
  const shopBtn = useRef<HTMLButtonElement>(null);
  const mobileBtn = useRef<HTMLButtonElement>(null);

  // Close menus on navigation.
  useEffect(() => {
    setShopOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  // Click outside / Escape for Shop menu.
  useEffect(() => {
    if (!shopOpen) return;
    const onDown = (e: MouseEvent) => {
      if (shopWrap.current && !shopWrap.current.contains(e.target as Node)) setShopOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShopOpen(false);
        shopBtn.current?.focus();
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [shopOpen]);

  // Escape closes mobile sheet.
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        mobileBtn.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const onShopBlur = useCallback((e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setShopOpen(false);
  }, []);

  const onShopKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setShopOpen(true);
      requestAnimationFrame(() => {
        shopWrap.current?.querySelector<HTMLAnchorElement>("[data-shop-link]")?.focus();
      });
    }
  };

  const navLink =
    "inline-flex items-center rounded-md px-2.5 py-1.5 hover:bg-indigo-100/60 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f4f6fb]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex shrink-0 items-baseline gap-2">
          <span className="font-serif text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            SleepWorth
          </span>
          <span className="hidden whitespace-nowrap text-xs text-slate-500 sm:inline">
            sleep gear, edited
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 whitespace-nowrap text-sm text-slate-700 lg:flex">
          <div ref={shopWrap} className="relative" onBlur={onShopBlur}>
            <button
              ref={shopBtn}
              type="button"
              className={`${navLink} gap-1`}
              aria-expanded={shopOpen}
              aria-controls={shopId}
              aria-haspopup="true"
              onClick={() => setShopOpen((o) => !o)}
              onKeyDown={onShopKeyDown}
            >
              Shop
              <Chevron open={shopOpen} />
            </button>
            {shopOpen && (
              <div
                id={shopId}
                className="absolute left-1/2 top-full z-50 mt-2 w-[min(46rem,calc(100vw-2rem))] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl"
              >
                <div className="grid grid-cols-3 gap-6">
                  {groups.map((g) => (
                    <div key={g.label}>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-indigo-700">
                        {g.label}
                      </p>
                      <ul className="mt-2 space-y-0.5">
                        {g.items.map((it) => (
                          <li key={it.href}>
                            <Link
                              data-shop-link
                              href={it.href}
                              className="block whitespace-normal rounded-md px-2 py-1.5 text-sm text-slate-800 hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400"
                              onClick={() => setShopOpen(false)}
                            >
                              {it.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500">
                  <span>Amazon Associate links · no invented scores</span>
                  <Link data-shop-link href="/products" className="font-semibold text-indigo-800 underline underline-offset-2" onClick={() => setShopOpen(false)}>
                    See all 45 picks →
                  </Link>
                </div>
              </div>
            )}
          </div>
          {topLinks.map((l) => (
            <Link key={l.href} href={l.href} className={navLink}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 whitespace-nowrap text-sm sm:gap-3">
          <Link
            href="/affiliate-disclosure"
            className="hidden text-xs text-slate-500 underline-offset-2 hover:text-slate-800 hover:underline sm:inline"
          >
            Disclosure
          </Link>
          <Link
            href="/products"
            className="inline-flex min-h-10 items-center rounded-full bg-indigo-950 px-3.5 py-1.5 text-xs font-medium text-[#f4f6fb] hover:bg-slate-900 sm:text-sm"
          >
            Browse picks
          </Link>
          <button
            ref={mobileBtn}
            type="button"
            className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-slate-300/80 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-800 hover:bg-white lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-sheet"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 4h12M2 8h12M2 12h12" strokeLinecap="round" />
              </svg>
            )}
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav-sheet"
          aria-label="Mobile"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-slate-200 bg-[#f4f6fb] px-4 pb-6 pt-3 lg:hidden"
        >
          <ul className="grid grid-cols-3 gap-2">
            {topLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="flex min-h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-2 text-center text-sm font-semibold text-slate-900"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          {groups.map((g) => (
            <div key={g.label} className="mt-4">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-indigo-700">{g.label}</p>
              <ul className="mt-1 grid grid-cols-1 gap-1 sm:grid-cols-2">
                {g.items.map((it) => (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      className="flex min-h-11 items-center rounded-lg px-2 text-sm text-slate-800 hover:bg-white"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="mt-4 border-t border-slate-200 pt-3">
            <Link href="/affiliate-disclosure" className="flex min-h-11 items-center px-2 text-sm text-slate-600 underline underline-offset-2">
              Affiliate disclosure
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
