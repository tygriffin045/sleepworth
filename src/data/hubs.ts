export type Hub = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  intro: string[];
  productSlugs: string[];
  skipAdvice: string;
};

export const hubs: Hub[] = [
  {
    slug: "side-sleepers",
    title: "Best for side sleepers",
    eyebrow: "Use-case hub",
    description:
      "Loft, contour, and pressure relief picks for people who sleep on their side most nights — and what we skip when loft is wrong.",
    intro: [
      "Side sleepers fail pillows when loft is too low (shoulder collapses) or too high (neck cranked). Start by matching loft to shoulder width, then worry about brand stories.",
      "If you flip between side and back, adjustable shredded foam usually beats a fixed cervical cut. If you are almost always on your side and want a fixed geometry, contoured foam can work — but it is unforgiving for stomach time.",
    ],
    productSlugs: [
      "coop-original-adjustable-pillow",
      "coop-eden-pillow",
      "purple-harmony-pillow",
      "eli-elm-contoured-pillow",
      "linenspa-3-inch-gel-memory-foam-topper",
      "manta-sleep-mask",
      "mzoo-contoured-sleep-mask",
    ],
    skipAdvice:
      "Skip ultra-flat stomach-sleeper pillows and thin egg-crate toppers if shoulder pressure is the complaint — they will not create the loft or cushion you need.",
  },
  {
    slug: "hot-sleepers",
    title: "Best for hot sleepers",
    eyebrow: "Use-case hub",
    description:
      "Cooling fibers, breathable toppers, and lighter bedding stacks for people who wake damp — without phase-change marketing theater.",
    intro: [
      "Fix the room first (cooler setpoint, airflow), then sheets, then pillows/toppers. Stacking a heavy weighted blanket on polyester sheets is how people decide cooling gear “does not work.”",
      "We prefer eucalyptus/bamboo-viscose and percale over high thread-count sateen hype. Latex toppers often sleep cooler than dense memory foam. Contoured or gel pillows help only after the bedding stack stops trapping heat.",
    ],
    productSlugs: [
      "cooling-bamboo-sheet-set",
      "eucalyptus-lyocell-sheets",
      "percale-cotton-sheet-set",
      "coop-eden-cool-plus",
      "purple-harmony-pillow",
      "latex-mattress-topper-2-inch",
      "cooling-weighted-blanket",
      "cooling-comforter-insert",
      "cooling-mattress-pad",
    ],
    skipAdvice:
      "Skip thick down-alternative comforters and non-breathable vinyl protectors if heat is your main failure mode. Quiet waterproof protectors still matter — just avoid plastic rustle covers that seal you in.",
  },
  {
    slug: "apartment-blackout",
    title: "Best for apartment blackout",
    eyebrow: "Use-case hub",
    description:
      "Streetlight and early-sun fixes for renters: curtains that actually overlap, liners behind decorative panels, and masks for stubborn leaks.",
    intro: [
      "“Blackout” on a label is not 100% if panels do not overlap or light leaks at the edges. Measure width generously; wraparound rods help. Liners keep decorative curtains you already like.",
      "Masks handle travel and the last light cracks. Contoured cups (Manta / MZOO) beat flat silk for side sleepers who hate eyelid pressure; Alaska Bear wins on soft nightly price.",
    ],
    productSlugs: [
      "nicetown-blackout-curtains",
      "blackout-curtain-liner",
      "manta-sleep-mask",
      "mzoo-contoured-sleep-mask",
      "alaska-bear-sleep-mask",
      "yogasleep-dohm-classic",
      "lectrofan-classic",
    ],
    skipAdvice:
      "Skip skinny curtain panels that leave a center gap, and skip relying on a mask alone if the whole room floods with morning sun — fix the window first.",
  },
  {
    slug: "budget-starter-kit",
    title: "Budget starter sleep kit",
    eyebrow: "Use-case hub",
    description:
      "A practical first stack under real money constraints: pillow pair, sheets, protector, darkness, and noise — without buying the whole catalog.",
    intro: [
      "Order of operations on a budget: protect the mattress, get a washable sheet set, fix the loudest sleep disruption (light or noise), then upgrade the pillow if neck mornings are brutal.",
      "This kit is deliberately boring. Boring gear that ships tomorrow beats a premium wishlist that never gets ordered.",
    ],
    productSlugs: [
      "beckham-hotel-collection-pillows",
      "amazon-basics-microfiber-sheet-set",
      "saferest-mattress-protector",
      "utopia-bamboo-mattress-protector",
      "nicetown-blackout-curtains",
      "alaska-bear-sleep-mask",
      "yogasleep-dohm-classic",
      "lectrofan-classic",
      "ynm-weighted-blanket-15lb",
      "honeywell-hul570w-humidifier",
    ],
    skipAdvice:
      "Skip TEMPUR toppers and Hatch Restore until the basics are covered. Premium only pays off after darkness, noise, and a usable pillow are solved.",
  },
];

export function getHub(slug: string): Hub | undefined {
  return hubs.find((h) => h.slug === slug);
}
