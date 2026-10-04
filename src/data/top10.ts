import type { Product } from "./types";
import { products, getProductsByCategory } from "./products";

/**
 * Top 10 picks per category page (ordered). Every ASIN was checked live and in stock on amazon.com on Oct 3, 2026.
 * Picks marked in TOP10_BESTSELLERS appeared on the matching Amazon Best Sellers list when checked.
 */
export const TOP10: Record<string, string[]> = {
  "pillows": ["coop-original-adjustable-pillow", "coop-eden-pillow", "coop-eden-cool-plus", "beckham-hotel-collection-pillows", "purple-harmony-pillow", "tempur-pedic-tempur-cloud-pillow", "eli-elm-contoured-pillow", "utopia-bedding-gusset-bed-pillow", "jollyvogue-pillows-queen-size-set-of", "sasttie-firm-pillows-queen-size-set"],
  "mattress-toppers": ["linenspa-2-inch-gel-memory-foam-topper", "linenspa-3-inch-gel-memory-foam-topper", "tempur-adapt-cooling-topper", "latex-mattress-topper-2-inch", "bedlore-queen-mattress-topper", "niagara-sleep-solution-100-cotton-top", "mlily-ego-3-inch-queen-mattress", "olixis-2-inch-twin-cooling-gel", "sinweek-2-inch-gel-memory-foam", "whatsbedding-4-inch-memory-foam-mattress"],
  "sheets-bedding": ["amazon-basics-microfiber-sheet-set", "shilucheng-cotton-sheet-set", "beckham-hotel-collection-sheets", "down-alternative-comforter", "percale-cotton-sheet-set", "cgk-unlimited-queen-size-4-piece", "amazon-basics-lightweight-super-soft-breathable", "utopia-bedding-queen-sheets-set", "mellanni-iconic-4-piece-bed-sheet", "lane-linen-queen-sheets-100-organic"],
  "mattress-protectors": ["saferest-mattress-protector", "utopia-bamboo-mattress-protector", "zippered-mattress-encasement", "pillow-protector-pair", "bedlore-waterproof-mattress-protector", "utopia-bedding-waterproof-twin-size-mattress", "plushdeluxe-bamboo-waterproof-mattress-protector", "springspirit-queen-size-mattress-protector-waterproof", "bedlore-waterproof-king-size-mattress-protector", "amazon-basics-waterproof-mattress-protector"],
  "weighted-blankets": ["gravity-weighted-blanket-15lb", "ynm-weighted-blanket-15lb", "cooling-weighted-blanket", "weighted-blanket-20lb", "yescool-weighted-blanket-for-adults-20lbs", "l-agraty-weighted-blanket-for-adults", "mr-sandman-cooling-weighted-blanket-for", "topcee-weighted-blanket", "wemore-weighted-blanket-for-adult-15lbs", "an-cooling-weighted-blanket-for-adults"],
  "cooling-bedding": ["cooling-bamboo-sheet-set", "eucalyptus-lyocell-sheets", "cooling-mattress-pad", "cooling-comforter-insert", "downcool-comforters-queen-size", "hyleory-queen-comforter", "pure-bamboo-king-sheets", "bedsure-queen-sheet-set-4-pieces", "cohome-all-season-queen-size-cooling", "comfort-spaces-100-cotton-percale-sheets"],
  "blackout-curtains-masks": ["nicetown-blackout-curtains", "manta-sleep-mask", "alaska-bear-sleep-mask", "mzoo-contoured-sleep-mask", "blackout-curtain-liner", "100-blackout-shield-linen-total-blackout", "myhalos-sleep-mask-for-men-and", "chrisdowa-blackout-curtains-for-bedroom-and", "miulee-100-blackout-linen-curtains-for", "miulee-blackout-curtains-for-bedroom-2"],
  "white-noise-sound-machines": ["yogasleep-dohm-classic", "lectrofan-classic", "hatch-restore-3", "soundcore-sleep-a20", "magicteam-sound-white-noise-machine-with", "brownnoise-brown-noise-sound-machine-with", "dreamegg-portable-noise-machine-for-baby", "momcozy-smart-baby-sound-machine-with", "babelio-pocket-mini-portable-white-noise", "homedics-soundsleep-white-noise-sound-machine"],
  "bedtime-lighting": ["philips-smartsleep-hf3520", "hatch-restore-lighting", "dimmable-bedside-lamp", "red-night-light-sleep", "odokee-sunrise-alarm-clock-white-noise", "peakeep-night-light-digital-alarm-clock", "jall-full-screen-wake-up-light", "wkzay-sunrise-alarm-clock-with-sound", "reacher-wood-grain-sunrise-alarm-clock", "vicsoon-sunrise-alarm-clock-with-wake"],
  "sleep-air-humidity": ["levoit-lv600s-humidifier", "honeywell-hul570w-humidifier", "bedroom-air-purifier-quiet", "levoit-top-fill-humidifiers-for-bedroom", "dreo-3l-humidifiers-for-bedroom", "coway-air-purifier-for-home-up", "frida-3-in-1-cool-mist", "voopnu-air-purifiers-for-home", "dreo-4l-humidifiers-for-bedroom", "winix-5510-air-purifier-new-generation"],
  "sleep-masks": ["loop-quiet", "mzoo-luxury-sleep-mask-for-women", "nodpod-patented-gentle-pressure-sleep-mask", "fygrip-3d-eye-mask-sleep-mask", "litbear-sleep-mask-for-side-sleeper", "beevines-100-mulberry-silk-sleep-mask", "vynix-sleep-mask-for-men-women", "lky-digital-sleep-mask-for-side", "moeaseii-sleep-mask-total-blackout-3d", "facemoon-3d-blackout-weighted-sleep-mask"],
  "earplugs": ["loop-quiet-earplugs", "macks", "flents-protechs-quiet-time-foam-ear", "loop-switch-2-adjustable-ear-plugs", "mack-s-pillow-soft-silicone-earplugs", "lysian-soft-foam-ear-plugs-for", "peace-quiet-pq-wax-ear-plugs", "loop-engage-2-ear-plugs", "justrvn-ear-plugs-for-sleeping", "clxynd-ear-plugs-for-sleeping-noise"],
};

export const TOP10_BESTSELLERS: Record<string, string[]> = {
  "pillows": ["coop-original-adjustable-pillow", "coop-eden-pillow", "beckham-hotel-collection-pillows", "utopia-bedding-gusset-bed-pillow", "jollyvogue-pillows-queen-size-set-of", "sasttie-firm-pillows-queen-size-set"],
  "mattress-toppers": ["linenspa-3-inch-gel-memory-foam-topper", "bedlore-queen-mattress-topper", "niagara-sleep-solution-100-cotton-top", "mlily-ego-3-inch-queen-mattress", "olixis-2-inch-twin-cooling-gel", "sinweek-2-inch-gel-memory-foam", "whatsbedding-4-inch-memory-foam-mattress"],
  "sheets-bedding": ["percale-cotton-sheet-set", "cgk-unlimited-queen-size-4-piece", "amazon-basics-lightweight-super-soft-breathable", "utopia-bedding-queen-sheets-set", "mellanni-iconic-4-piece-bed-sheet", "lane-linen-queen-sheets-100-organic"],
  "mattress-protectors": ["saferest-mattress-protector", "bedlore-waterproof-mattress-protector", "utopia-bedding-waterproof-twin-size-mattress", "plushdeluxe-bamboo-waterproof-mattress-protector", "springspirit-queen-size-mattress-protector-waterproof", "bedlore-waterproof-king-size-mattress-protector", "amazon-basics-waterproof-mattress-protector"],
  "weighted-blankets": ["yescool-weighted-blanket-for-adults-20lbs", "l-agraty-weighted-blanket-for-adults", "mr-sandman-cooling-weighted-blanket-for", "topcee-weighted-blanket", "wemore-weighted-blanket-for-adult-15lbs", "an-cooling-weighted-blanket-for-adults"],
  "cooling-bedding": ["cooling-bamboo-sheet-set", "downcool-comforters-queen-size", "hyleory-queen-comforter", "pure-bamboo-king-sheets", "bedsure-queen-sheet-set-4-pieces", "cohome-all-season-queen-size-cooling", "comfort-spaces-100-cotton-percale-sheets"],
  "blackout-curtains-masks": ["nicetown-blackout-curtains", "100-blackout-shield-linen-total-blackout", "myhalos-sleep-mask-for-men-and", "chrisdowa-blackout-curtains-for-bedroom-and", "miulee-100-blackout-linen-curtains-for", "miulee-blackout-curtains-for-bedroom-2"],
  "white-noise-sound-machines": ["yogasleep-dohm-classic", "magicteam-sound-white-noise-machine-with", "brownnoise-brown-noise-sound-machine-with", "dreamegg-portable-noise-machine-for-baby", "momcozy-smart-baby-sound-machine-with", "babelio-pocket-mini-portable-white-noise", "homedics-soundsleep-white-noise-sound-machine"],
  "bedtime-lighting": ["hatch-restore-lighting", "odokee-sunrise-alarm-clock-white-noise", "peakeep-night-light-digital-alarm-clock"],
  "sleep-air-humidity": ["levoit-lv600s-humidifier", "bedroom-air-purifier-quiet", "levoit-top-fill-humidifiers-for-bedroom", "dreo-3l-humidifiers-for-bedroom", "coway-air-purifier-for-home-up", "frida-3-in-1-cool-mist", "voopnu-air-purifiers-for-home", "dreo-4l-humidifiers-for-bedroom", "winix-5510-air-purifier-new-generation"],
  "sleep-masks": ["mzoo-luxury-sleep-mask-for-women", "nodpod-patented-gentle-pressure-sleep-mask", "fygrip-3d-eye-mask-sleep-mask", "litbear-sleep-mask-for-side-sleeper", "beevines-100-mulberry-silk-sleep-mask", "vynix-sleep-mask-for-men-women", "lky-digital-sleep-mask-for-side", "moeaseii-sleep-mask-total-blackout-3d", "facemoon-3d-blackout-weighted-sleep-mask"],
  "earplugs": ["loop-quiet-earplugs", "macks", "flents-protechs-quiet-time-foam-ear", "loop-switch-2-adjustable-ear-plugs", "mack-s-pillow-soft-silicone-earplugs", "lysian-soft-foam-ear-plugs-for", "peace-quiet-pq-wax-ear-plugs", "loop-engage-2-ear-plugs", "justrvn-ear-plugs-for-sleeping", "clxynd-ear-plugs-for-sleeping-noise"],
};

export function getTopPicks(category: string): Product[] {
  const slugs = TOP10[category];
  if (!slugs) return getProductsByCategory(category).slice(0, 10);
  return slugs
    .map((s) => products.find((p) => p.slug === s))
    .filter((p): p is Product => Boolean(p));
}
