export type CompareRow = {
  productSlug: string;
  bestFor: string;
  loftOrFeel: string;
  cooling: string;
  priceBand: string;
  skipIf: string;
};

export type CompareTable = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  columns: { key: keyof CompareRow | "name"; label: string }[];
  rows: CompareRow[];
  verdict: string;
};

export const compares: CompareTable[] = [
  {
    slug: "pillows",
    title: "Pillow comparison",
    description:
      "Adjustable foam vs hotel fluff vs Purple grid vs TEMPUR — which pillow philosophy fits your nights.",
    intro:
      "Pillows are not interchangeable. Adjustable shredded foam (Coop) wins when loft is unknown. Beckham wins as a cheap pair. Purple wins for cool bounce. TEMPUR wins if you already love that slow hug.",
    columns: [
      { key: "name", label: "Pillow" },
      { key: "bestFor", label: "Best for" },
      { key: "loftOrFeel", label: "Loft / feel" },
      { key: "cooling", label: "Cooling" },
      { key: "priceBand", label: "Price band" },
      { key: "skipIf", label: "Skip if" },
    ],
    rows: [
      {
        productSlug: "coop-original-adjustable-pillow",
        bestFor: "Combo sleepers",
        loftOrFeel: "User-tuned shredded foam",
        cooling: "Average",
        priceBand: "About $70–$90",
        skipIf: "You refuse any setup time",
      },
      {
        productSlug: "coop-eden-pillow",
        bestFor: "Warm Coop fans",
        loftOrFeel: "Softer adjustable",
        cooling: "Better than Original",
        priceBand: "About $80–$100",
        skipIf: "You sleep cold on Original",
      },
      {
        productSlug: "beckham-hotel-collection-pillows",
        bestFor: "Guest rooms / budget pair",
        loftOrFeel: "Plush down-alt loft",
        cooling: "Average",
        priceBand: "About $40–$60",
        skipIf: "You need precise neck loft",
      },
      {
        productSlug: "purple-harmony-pillow",
        bestFor: "Hot + bounce seekers",
        loftOrFeel: "Latex + GelFlex grid",
        cooling: "Strong",
        priceBand: "About $150–$200",
        skipIf: "Budget is mid-range",
      },
      {
        productSlug: "tempur-pedic-tempur-cloud-pillow",
        bestFor: "TEMPUR mattress owners",
        loftOrFeel: "Slow-response hug",
        cooling: "Can sleep warm",
        priceBand: "About $100–$160",
        skipIf: "You hate sink-in foam",
      },
    ],
    verdict:
      "Unknown loft → Coop Original. Hot sleeper with budget → Eden. Guests → Beckham. Premium cool → Purple. Already on TEMPUR → Cloud.",
  },
  {
    slug: "sound-machines",
    title: "Sound machine comparison",
    description:
      "Dohm vs LectroFan vs Hatch — natural fan, precise digital noise, or light+routine ecosystems.",
    intro:
      "Pick a philosophy: mechanical fan nature (Dohm), non-looping digital control (LectroFan), or phone-free wind-down with light (Hatch). They are not the same product wearing different logos.",
    columns: [
      { key: "name", label: "Machine" },
      { key: "bestFor", label: "Best for" },
      { key: "loftOrFeel", label: "Sound type" },
      { key: "cooling", label: "Extras" },
      { key: "priceBand", label: "Price band" },
      { key: "skipIf", label: "Skip if" },
    ],
    rows: [
      {
        productSlug: "yogasleep-dohm-classic",
        bestFor: "Natural fan hush",
        loftOrFeel: "Real fan, no loops",
        cooling: "Tone via cap/collar",
        priceBand: "About $45–$55",
        skipIf: "You need rain/ocean libraries",
      },
      {
        productSlug: "lectrofan-classic",
        bestFor: "Tinnitus / precise volume",
        loftOrFeel: "Non-looping digital",
        cooling: "~20 variants, travel size",
        priceBand: "About $40–$55",
        skipIf: "You only want mechanical fan",
      },
      {
        productSlug: "hatch-restore-3",
        bestFor: "Routines + sunrise",
        loftOrFeel: "App soundscapes",
        cooling: "Light + wind-down",
        priceBand: "About $170",
        skipIf: "You only need noise",
      },
      {
        productSlug: "philips-smartsleep-hf3520",
        bestFor: "Sunrise without Hatch",
        loftOrFeel: "Light-first + sounds/FM",
        cooling: "Dedicated wake-up light",
        priceBand: "About $80–$120",
        skipIf: "You already own Hatch",
      },
    ],
    verdict:
      "Loop-haters → Dohm. Precise masking → LectroFan. Kill phone bedtime → Hatch. Sunrise on a mid budget → Philips HF3520.",
  },
  {
    slug: "toppers",
    title: "Mattress topper comparison",
    description:
      "2-inch vs 3-inch gel foam vs latex — how much cushion you actually need before you waste money.",
    intro:
      "Toppers fix surface firmness, not a hammocked core. Two inches softens; three inches remakes comfort for many side sleepers; latex trades hug for cooler bounce.",
    columns: [
      { key: "name", label: "Topper" },
      { key: "bestFor", label: "Best for" },
      { key: "loftOrFeel", label: "Thickness / feel" },
      { key: "cooling", label: "Heat feel" },
      { key: "priceBand", label: "Price band" },
      { key: "skipIf", label: "Skip if" },
    ],
    rows: [
      {
        productSlug: "linenspa-2-inch-gel-memory-foam-topper",
        bestFor: "First softens",
        loftOrFeel: "2\" gel memory foam",
        cooling: "Moderate",
        priceBand: "About $45–$90",
        skipIf: "Mattress is sagging",
      },
      {
        productSlug: "linenspa-3-inch-gel-memory-foam-topper",
        bestFor: "Side-sleeper pressure",
        loftOrFeel: "3\" deeper plush",
        cooling: "Warmer than latex",
        priceBand: "About $60–$120",
        skipIf: "You need firm support",
      },
      {
        productSlug: "latex-mattress-topper-2-inch",
        bestFor: "Hot foam-haters",
        loftOrFeel: "2\" Dunlop latex bounce",
        cooling: "Usually cooler",
        priceBand: "About $100–$250",
        skipIf: "You want maximum hug",
      },
      {
        productSlug: "tempur-adapt-cooling-topper",
        bestFor: "Premium TEMPUR feel",
        loftOrFeel: "~3\" conforming",
        cooling: "Cover helps; foam still hugs",
        priceBand: "About $200–$450+",
        skipIf: "Budget under $150",
      },
    ],
    verdict:
      "Try 2\" first. Still firm at shoulders → 3\". Hate memory-foam heat → latex. Want TEMPUR without a new mattress → Adapt (after basics).",
  },
  {
    slug: "darkness",
    title: "Darkness tools comparison",
    description:
      "Curtains vs liners vs contoured masks vs silk flats — room fixes vs personal fixes.",
    intro:
      "Curtains fix the room; masks fix travel and leftover leaks. Contoured cups protect eyelashes; silk flats win on soft price. Liners keep decorative drapes.",
    columns: [
      { key: "name", label: "Tool" },
      { key: "bestFor", label: "Best for" },
      { key: "loftOrFeel", label: "Coverage" },
      { key: "cooling", label: "Notes" },
      { key: "priceBand", label: "Price band" },
      { key: "skipIf", label: "Skip if" },
    ],
    rows: [
      {
        productSlug: "nicetown-blackout-curtains",
        bestFor: "Apartment streetlights",
        loftOrFeel: "Full window (if overlapped)",
        cooling: "Thermal layers help",
        priceBand: "About $25–$50",
        skipIf: "Panels too narrow for window",
      },
      {
        productSlug: "blackout-curtain-liner",
        bestFor: "Keep existing drapes",
        loftOrFeel: "Behind decorative panels",
        cooling: "Adds density",
        priceBand: "About $20–$40",
        skipIf: "Curtains are already cheap junk",
      },
      {
        productSlug: "mzoo-contoured-sleep-mask",
        bestFor: "Budget contoured",
        loftOrFeel: "Eyes only",
        cooling: "No eyelid press",
        priceBand: "About $12–$25",
        skipIf: "You want Manta adjustability",
      },
      {
        productSlug: "alaska-bear-sleep-mask",
        bestFor: "Soft nightly mask",
        loftOrFeel: "Eyes only",
        cooling: "Silk hand-feel",
        priceBand: "About $10–$20",
        skipIf: "Flat masks always fail you",
      },
    ],
    verdict:
      "Bright windows → NICETOWN (sized right). Nice drapes already → liners. Side sleeper mask → MZOO/Manta. Soft cheap nightly → Alaska Bear.",
  },
];

export function getCompare(slug: string): CompareTable | undefined {
  return compares.find((c) => c.slug === slug);
}
