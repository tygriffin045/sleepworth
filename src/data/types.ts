export type CategorySlug =
  | "pillows"
  | "mattress-toppers"
  | "sheets-bedding"
  | "mattress-protectors"
  | "weighted-blankets"
  | "cooling-bedding"
  | "blackout-curtains-masks"
  | "white-noise-sound-machines"
  | "bedtime-lighting"
  | "sleep-air-humidity"
  | "earplugs";

export type BudgetBand = "budget" | "mid" | "premium";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  brand: string;
  category: CategorySlug;
  /** Short conversion label, e.g. "Best for side sleepers" */
  bestFor: string;
  tagline: string;
  summary: string;
  priceBand: string;
  budget: BudgetBand;
  priceMin: number;
  priceMax: number;
  imageGradient: string;
  imageAlt: string;
  imageUrl?: string;
  featured: boolean;
  pros: string[];
  cons: string[];
  whoItsFor: string;
  skipIf: string;
  specs: ProductSpec[];
  relatedSlugs: string[];
  amazonAsin?: string;
  amazonQuery: string;
  asinPlaceholder?: boolean;
}

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  shortLabel: string;
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  readingTime: string;
  publishedAt: string;
  productSlugs: string[];
  sections: { heading: string; body: string }[];
  /** Buyer-intent guide extras (optional). */
  metaTitle?: string;
  targetQuery?: string;
  verdict?: string;
  quickPicks?: GuideQuickPick[];
  table?: { caption: string; columns: string[]; rows: string[][] };
  picks?: GuidePick[];
  criteria?: { heading: string; body: string }[];
  faqs?: { q: string; a: string }[];
}

export interface GuideQuickPick {
  label: string;
  productSlug: string;
  why: string;
}

export interface GuidePick {
  productSlug: string;
  label: string;
  verdict: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  skipIf: string;
}
