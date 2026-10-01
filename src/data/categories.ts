import type { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "pillows",
    name: "Pillows",
    shortLabel: "Pillows",
    description:
      "Loft, fill, and cooling tradeoffs we actually care about. Adjustable shredded foam when your position changes; denser latex or TEMPUR when you want the pillow to hold shape; hotel-style down-alternative when you just need a reliable pair.",
  },
  {
    slug: "mattress-toppers",
    name: "Mattress Toppers",
    shortLabel: "Toppers",
    description:
      "When the mattress is structurally fine but the surface is too firm or too slick. Two inches softens; three inches remakes the feel. Skip toppers if the core is hammocking — that needs a new mattress, not more foam.",
  },
  {
    slug: "sheets-bedding",
    name: "Sheets & Bedding",
    shortLabel: "Sheets",
    description:
      "Everyday sheet sets and duvet inserts chosen for washability, deep-pocket fit, and honest hand-feel — not inflated thread-count theater. Percale breathes; sateen drapes; microfiber survives laundry abuse.",
  },
  {
    slug: "mattress-protectors",
    name: "Mattress Protectors",
    shortLabel: "Protectors",
    description:
      "Waterproof, vinyl-free barriers that should disappear under a fitted sheet. We favor quiet membranes over plastic rustle, deep pockets for toppers, and encasements when allergens or bed bugs are the real worry.",
  },
  {
    slug: "weighted-blankets",
    name: "Weighted Blankets",
    shortLabel: "Weighted",
    description:
      "Deep-pressure blankets sized for adults — typically ~10% of body weight as a starting rule, not a law. Glass-bead fills distribute more evenly than cheap pellets; cooling covers matter if you already run hot.",
  },
  {
    slug: "cooling-bedding",
    name: "Cooling Bedding",
    shortLabel: "Cooling",
    description:
      "For hot sleepers who wake damp: eucalyptus/lyocell and bamboo-viscose sheets, breathable pads, and lighter comforters. Cooling marketing is noisy — we prioritize fiber and weave over phase-change hype.",
  },
  {
    slug: "blackout-curtains-masks",
    name: "Blackout Curtains / Sleep Masks",
    shortLabel: "Darkness",
    description:
      "True darkness is underrated. Curtains handle the room; masks handle travel and stubborn light leaks. Contoured cups beat flat masks for side sleepers who hate eyelid pressure. “Blackout” on a label is rarely 100% without overlapping panels.",
  },
  {
    slug: "white-noise-sound-machines",
    name: "White Noise / Sound Machines",
    shortLabel: "Sound",
    description:
      "Fan-based classics for natural non-looping hush, digital generators when you need precise volume or tinnitus masking, and sleep earbuds when a partner’s snore is the problem — not the hallway.",
  },
  {
    slug: "bedtime-lighting",
    name: "Bedtime Lighting / Sunrise Alarms",
    shortLabel: "Lighting",
    description:
      "Wind-down light and sunrise alarms that replace phone screens. Hatch-style routine devices, dedicated wake-up lights, and dim bedside lamps — framed for circadian cues, not desk task lighting.",
  },
  {
    slug: "sleep-air-humidity",
    name: "Sleep Air & Humidity",
    shortLabel: "Air",
    description:
      "Bedroom humidity and quiet mist when dry air wrecks your throat at 3 a.m. We stick to sleep-framed humidifiers with real sleep modes — not whole-house HVAC projects.",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
,
  {
    slug: "earplugs",
    name: "Earplugs",
    shortLabel: "Earplugs",
    description: "Reusable and foam earplugs for partners, travel, and apartments with thin walls.",
  },
];
