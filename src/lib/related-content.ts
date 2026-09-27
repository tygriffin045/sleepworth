import { hubs } from "@/data/hubs";
import { compares } from "@/data/compares";
import { guides } from "@/data/guides";
import { getProductsByCategory } from "@/data/products";
import type { CategorySlug } from "@/data/types";

export type RelatedLink = { href: string; label: string; kind: string };

/** Live hubs / compares / guides that mention this product slug. */
export function getRelatedForProduct(productSlug: string): RelatedLink[] {
  const links: RelatedLink[] = [];

  for (const h of hubs) {
    if (h.productSlugs.includes(productSlug)) {
      links.push({ href: `/best/${h.slug}`, label: h.title, kind: "Hub" });
    }
  }
  for (const c of compares) {
    if (c.rows.some((r) => r.productSlug === productSlug)) {
      links.push({
        href: `/compare/${c.slug}`,
        label: c.title,
        kind: "Compare",
      });
    }
  }
  for (const g of guides) {
    if (g.productSlugs.includes(productSlug)) {
      links.push({ href: `/guides/${g.slug}`, label: g.title, kind: "Guide" });
    }
  }

  return links;
}

/** Related editorial routes for a category (only live routes). */
export function getRelatedForCategory(categorySlug: CategorySlug): RelatedLink[] {
  const productSlugs = new Set(
    getProductsByCategory(categorySlug).map((p) => p.slug),
  );
  const links: RelatedLink[] = [];

  for (const h of hubs) {
    if (h.productSlugs.some((s) => productSlugs.has(s))) {
      links.push({ href: `/best/${h.slug}`, label: h.title, kind: "Hub" });
    }
  }
  for (const c of compares) {
    if (c.rows.some((r) => productSlugs.has(r.productSlug))) {
      links.push({
        href: `/compare/${c.slug}`,
        label: c.title,
        kind: "Compare",
      });
    }
  }
  for (const g of guides) {
    if (g.productSlugs.some((s) => productSlugs.has(s))) {
      links.push({ href: `/guides/${g.slug}`, label: g.title, kind: "Guide" });
    }
  }

  return links;
}
