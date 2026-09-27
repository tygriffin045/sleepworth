import type { Guide } from "./types";

/**
 * Buyer-intent guides. Every spec below is taken from the linked Amazon
 * listing (checked 2026-09-27) or our catalog notes — no invented numbers,
 * prices, or ratings.
 */
export const buyerGuides: Guide[] = [
  {
    slug: "dohm-vs-lectrofan",
    targetQuery: "dohm vs lectrofan",
    metaTitle: "Dohm vs LectroFan: Which Sound Machine to Buy",
    title: "Dohm vs LectroFan: which white noise machine should you buy?",
    description:
      "Yogasleep Dohm Classic vs LectroFan Classic: real fan vs digital noise, volume control, timer, power, and travel — plus two alternatives when neither fits.",
    readingTime: "7 min read",
    publishedAt: "2026-09-27",
    verdict:
      "Buy the Dohm Classic if you want the most natural, set-and-forget fan sound and your room is only moderately noisy. Buy the LectroFan Classic if you need precise volume control, a sleep timer, more sound choices, or something small enough to pack. Neither one loops: the Dohm uses a real fan, and the LectroFan generates its sounds continuously.",
    quickPicks: [
      {
        label: "Best natural fan sound",
        productSlug: "yogasleep-dohm-classic",
        why: "A real fan inside a vented housing — no speaker, no loop, two speeds.",
      },
      {
        label: "Best for volume control & travel",
        productSlug: "lectrofan-classic",
        why: "20 non-looping fan and white-noise sounds, precise volume, sleep timer, USB power.",
      },
      {
        label: "Best when only you need masking",
        productSlug: "soundcore-sleep-a20",
        why: "Sleep earbuds put the sound in your ears instead of filling the room.",
      },
      {
        label: "Best if screens are the real problem",
        productSlug: "hatch-restore-3",
        why: "Sound plus sunrise light and wind-down routines in one bedside unit.",
      },
    ],
    table: {
      caption: "Dohm Classic vs LectroFan Classic at a glance",
      columns: ["", "Yogasleep Dohm Classic", "LectroFan Classic"],
      rows: [
        ["How it makes sound", "Real internal fan (mechanical)", "Digitally generated through a speaker"],
        ["Sound options", "One fan sound; two speeds; tone shaped by twisting the housing", "20 non-looping fan and white-noise sounds"],
        ["Volume", "Set by speed and how open the vents are", "Precise, stepped volume settings"],
        ["Sleep timer", "None — runs until you switch it off", "Built in"],
        ["Power", "Plug-in 120V AC (7-ft cord)", "USB-powered"],
        ["Travel", "Larger; needs a wall outlet", "Compact; packs easily"],
      ],
    },
    productSlugs: [
      "yogasleep-dohm-classic",
      "lectrofan-classic",
      "soundcore-sleep-a20",
      "hatch-restore-3",
    ],
    sections: [
      {
        heading: "Sound: a real fan vs generated noise",
        body: "The Dohm makes its sound mechanically — a fan spins inside a vented housing, and you shape the tone by twisting the cap and collar. That is why people who find electronic noise grating often settle on it: there is no speaker and nothing to loop. The LectroFan generates its sounds digitally, which buys you variety: a range of fan sounds plus white-noise profiles that run from brighter to deeper and rumblier. If you already know you like the sound of a box fan, the Dohm is the safer bet. If you want to experiment until something disappears into the background, the LectroFan gives you more to try.",
      },
      {
        heading: "Volume: which one handles loud neighbors",
        body: "When the problem is traffic, a thin apartment wall, or a snoring partner in the same room, volume headroom decides it. The LectroFan has precise volume steps, so you can run it barely audible or turn it up well past the Dohm. The Dohm's range is limited to its two speeds and how far you open the vents. Published side-by-side tests from other reviewers consistently find LectroFan models go louder than the Dohm Classic. For loud, irregular noise, start with the LectroFan. For a steady hum or quiet suburb, the Dohm is usually plenty.",
      },
      {
        heading: "Simplicity, timer, and power",
        body: "The Dohm is one switch and two speeds, with no screen and no app, and it runs until you turn it off. Nothing to program, which is the point. The LectroFan adds a built-in sleep timer and runs on USB power, so it works from a laptop, a USB wall plug, or a hotel nightstand. The Dohm plugs into a standard 120V outlet with its 7-foot cord.",
      },
      {
        heading: "Tinnitus and light sleepers",
        body: "Both machines are widely used to mask tinnitus. The LectroFan's fine volume steps make it easier to set the sound just above your tinnitus level without overdoing it; the Dohm suits people who find a real fan more soothing than any recording. If tinnitus is persistent or worsening, see an audiologist — a sound machine masks it, it does not treat it.",
      },
    ],
    picks: [
      {
        productSlug: "yogasleep-dohm-classic",
        label: "Best natural fan sound",
        verdict:
          "The original since 1962 and still our pick when someone says digital noise sounds fake. Flip the switch, pick a speed, twist the housing until the tone disappears into the room.",
        pros: [
          "Real mechanical fan sound — nothing to loop",
          "One switch, two speeds, no app or screen",
          "Assembled by hand in the USA, per Yogasleep",
        ],
        cons: [
          "No sleep timer",
          "Only one type of sound",
          "Less volume headroom for loud environments",
          "Needs a 120V wall outlet",
        ],
        bestFor: "Light-to-moderate noise, people who dislike electronic sound, set-and-forget bedrooms and nurseries.",
        skipIf: "You need to drown out loud, irregular noise or want to travel with it.",
      },
      {
        productSlug: "lectrofan-classic",
        label: "Best for volume control & travel",
        verdict:
          "The pick for noisy apartments and frequent travelers: 20 non-looping sounds, precise volume, a built-in timer, and USB power in a compact body.",
        pros: [
          "20 non-looping fan and white-noise sounds",
          "Precise volume — very quiet to loud",
          "Built-in sleep timer",
          "USB-powered and compact for travel",
        ],
        cons: [
          "Generated sound — some people hear it as electronic",
          "More buttons to learn than the Dohm",
          "Plastic build feels less substantial",
        ],
        bestFor: "City bedrooms, thin walls, tinnitus sufferers who want fine volume control, and travelers.",
        skipIf: "You specifically want the sound of a real fan.",
      },
      {
        productSlug: "soundcore-sleep-a20",
        label: "Best when only you need masking",
        verdict:
          "If your partner hates white noise but you need it, a room machine will always be a compromise. Sleep earbuds keep the sound in your ears.",
        pros: [
          "Masks noise for you without filling the room",
          "Small in-ear design meant for sleeping",
          "Travel friendly",
        ],
        cons: [
          "In-ear comfort is personal — use the return window",
          "Needs charging",
          "Costs roughly three times either machine",
        ],
        bestFor: "Couples who disagree about sound, and travelers.",
        skipIf: "You dislike anything in your ears overnight.",
      },
      {
        productSlug: "hatch-restore-3",
        label: "Best if screens are the real problem",
        verdict:
          "When you're up because your phone is on the nightstand, a better noise machine won't fix it. Restore 3 combines sound, a sunrise alarm, and wind-down routines so the phone can leave the room.",
        pros: [
          "Sound, sunrise light, and routines in one unit",
          "Replaces the phone as an alarm clock",
        ],
        cons: [
          "Costs about three times a Dohm or LectroFan",
          "Some content and features run through the Hatch app and subscription",
        ],
        bestFor: "People who want to get the phone off the nightstand.",
        skipIf: "You only need noise masking — buy a Dohm or LectroFan.",
      },
    ],
    criteria: [
      {
        heading: "Match the machine to the noise",
        body: "Steady, moderate noise (a hallway, a quiet street, a fridge) is Dohm territory. Loud or irregular noise (sirens, neighbors, snoring in the same room) needs the LectroFan's volume headroom. If only one person in the bed wants masking, look at sleep earbuds instead.",
      },
      {
        heading: "Volume control you'll actually use",
        body: "The goal is the lowest level that hides the disturbance. Precise steps (LectroFan) make that easy; two speeds plus vent adjustment (Dohm) works if your room is consistent.",
      },
      {
        heading: "Timer or all night",
        body: "Want the sound to stop after you fall asleep? You need a timer, and the Dohm doesn't have one. If you wake to silence and then notice every noise, running all night is usually better.",
      },
      {
        heading: "No loops",
        body: "Cheap track-based machines can have an audible restart point that your brain learns to hear. Both of these avoid it: the Dohm is a real fan, and the LectroFan generates non-looping sound.",
      },
      {
        heading: "Power and placement",
        body: "The Dohm needs a wall outlet; the LectroFan runs from USB. Place either one between you and the noise source (often near the door or window), not right beside your head.",
      },
    ],
    faqs: [
      {
        q: "Is the Dohm or the LectroFan louder?",
        a: "The LectroFan. Published side-by-side tests consistently find LectroFan models reach higher volume than the Dohm Classic, and the LectroFan also has finer volume steps. The Dohm's loudness is limited to its two speeds and how open the vents are.",
      },
      {
        q: "Does the Dohm have a timer?",
        a: "No. The Dohm Classic runs until you switch it off. The LectroFan Classic has a built-in sleep timer.",
      },
      {
        q: "Does the LectroFan loop?",
        a: "No. The LectroFan generates its sounds continuously, so there is no audible loop point. The Dohm uses a real fan, so looping isn't possible.",
      },
      {
        q: "Which is better for tinnitus, Dohm or LectroFan?",
        a: "Both are used for tinnitus masking. The LectroFan's fine volume steps make it easier to set sound just above your tinnitus level; the Dohm suits people who find a real fan more soothing. For persistent tinnitus, see an audiologist.",
      },
      {
        q: "Which is better for travel?",
        a: "The LectroFan Classic. It is compact and USB-powered, so it packs easily and runs from a laptop or USB plug. The Dohm Classic is larger and needs a 120V wall outlet.",
      },
      {
        q: "Is the Marpac Dohm the same as the Yogasleep Dohm?",
        a: "Yes. Marpac rebranded as Yogasleep in 2020; the Dohm Classic is the same fan-based machine.",
      },
    ],
  },
  {
    slug: "best-sleep-mask-for-side-sleepers",
    targetQuery: "best sleep mask for side sleepers",
    metaTitle: "Best Sleep Mask for Side Sleepers (3 Honest Picks)",
    title: "Best sleep mask for side sleepers: 3 picks that stay put without pressure",
    description:
      "The best sleep masks for side sleepers — contoured cups vs flat silk, temple bulk, straps, and nose light leaks. Manta Pro, MZOO, and Alaska Bear compared honestly.",
    readingTime: "6 min read",
    publishedAt: "2026-09-27",
    verdict:
      "Buy the Manta Pro if side sleeping has made every other mask shift or press on your eyes — its slim angled strap and C-shaped cups are built for it. The MZOO gets you most of the contoured, zero-eye-pressure benefit for a fraction of the price. If you hate foam and want the thinnest thing on your face, the Alaska Bear silk mask is flat and light, but it rests on your eyelids.",
    quickPicks: [
      {
        label: "Best overall for side sleepers",
        productSlug: "manta-sleep-mask",
        why: "Slim angled strap, C-shaped adjustable cups, nothing touching your lids.",
      },
      {
        label: "Best value contoured mask",
        productSlug: "mzoo-contoured-sleep-mask",
        why: "Deep memory-foam cups and thin curved sides at a budget price.",
      },
      {
        label: "Best flat silk mask",
        productSlug: "alaska-bear-sleep-mask",
        why: "100% mulberry silk, buckle at the back of the head, packs flat.",
      },
    ],
    productSlugs: [
      "manta-sleep-mask",
      "mzoo-contoured-sleep-mask",
      "alaska-bear-sleep-mask",
    ],
    sections: [
      {
        heading: "Why most masks fail side sleepers",
        body: "On your back, a mask only has to seal around your eyes. On your side, the pillow pushes the mask toward your nose or up your forehead, the strap presses into your temple, and a thick edge becomes a pressure point. The fixes are specific: thin or angled sides, a strap that lies flat (ideally with the adjuster at the back of the head, not over your ear), and cups or padding that don't lever off your face when one side is compressed.",
      },
      {
        heading: "Contoured cups vs flat silk",
        body: "Contoured masks (Manta Pro, MZOO) hold fabric off your eyelids, so you can blink and there is no pressure on your eyes or lashes. The tradeoff is more structure at the side of your face. Flat silk masks (Alaska Bear) are the thinnest option and feel like almost nothing, but they lie directly on your lids and can slide if you press your face hard into the pillow. If eye pressure bothers you, go contoured. If bulk bothers you, go silk.",
      },
    ],
    picks: [
      {
        productSlug: "manta-sleep-mask",
        label: "Best overall for side sleepers",
        verdict:
          "The mask that converts people who 'can't wear masks.' Manta designed the Pro around side sleeping: a slim angled strap, C-shaped eye cups you can reposition, and ventilated materials. Expect a night or two of adjusting cup position and strap height to get it right.",
        pros: [
          "Slim angled strap and C-shaped cups designed for side sleeping",
          "Fully adjustable eye cups and head strap",
          "No fabric on your lids or lashes",
          "Ventilated, quick-drying materials",
        ],
        cons: [
          "Costs several times more than the other two",
          "Takes some fiddling to dial in cup and strap position",
          "Bulkier to pack than a flat mask",
        ],
        bestFor: "Dedicated side sleepers, lash-extension wearers, and anyone who has given up on cheaper masks.",
        skipIf: "You want a cheap spare or hate adjusting things.",
      },
      {
        productSlug: "mzoo-contoured-sleep-mask",
        label: "Best value contoured mask",
        verdict:
          "Most of the contoured benefit for much less. MZOO's cups are deep, its sides are thinned and curved to reduce temple pressure, and the nose padding is generous. The catch is that the cups are fixed, so fit depends on your face.",
        pros: [
          "Deep contoured memory-foam cups (13 mm per the listing) — no eye pressure",
          "Thin, curved sides to reduce temple bulk",
          "Nose padding and bridge cutout to seal light",
          "Adjustable 19–28 in strap that won't snag hair",
        ],
        cons: [
          "Fixed cups — fit varies by face shape",
          "Memory foam can feel warm on hot nights",
          "Materials a step below Manta",
        ],
        bestFor: "Side sleepers who want contoured cups on a budget, or a travel spare.",
        skipIf: "Fixed-cup masks haven't fit your face before.",
      },
      {
        productSlug: "alaska-bear-sleep-mask",
        label: "Best flat silk mask",
        verdict:
          "The lightest option here: 100% mulberry silk with a raised nose cutout and a strap whose buckle sits at the back of your head, away from the pillow. Great if you hate foam; not the pick if you want zero contact with your eyelids.",
        pros: [
          "100% mulberry silk — smooth and very light",
          "Adjustable 15.8–27.6 in strap; buckle sits at the back of the head",
          "Higher nose cutout to block light underneath",
          "Packs flat",
        ],
        cons: [
          "Rests on your eyelids — not for lash extensions or eye-pressure haters",
          "Can shift if you press your face hard into the pillow",
        ],
        bestFor: "Lighter side sleepers who dislike foam, and travelers.",
        skipIf: "You need a mask that never touches your eyes.",
      },
    ],
    criteria: [
      {
        heading: "Temple profile",
        body: "The side of the mask sits between your face and the pillow all night. Look for thin, tapered, or angled sides. A thick foam edge is the most common reason side sleepers give up on masks.",
      },
      {
        heading: "Strap and adjuster placement",
        body: "An adjuster or buckle that lands over your ear becomes a pressure point. Prefer a strap that lies flat with the adjuster at the back of the head, and try wearing it slightly above the ears to stop the mask riding up.",
      },
      {
        heading: "Cups vs flat",
        body: "Cups keep pressure off your eyes and lashes; flat silk is thinner. Pick based on which bothers you more: something touching your eyes, or bulk at the side of your face.",
      },
      {
        heading: "The nose seal",
        body: "Most light leaks happen at the bridge of the nose, especially when the pillow shifts the mask. Look for real nose padding or a raised nose cutout.",
      },
      {
        heading: "Fit is personal",
        body: "Face shape matters more than reviews. Buy from a listing with an easy return window and give a new mask three or four nights before judging it.",
      },
    ],
    faqs: [
      {
        q: "What kind of sleep mask is best for side sleepers?",
        a: "One with a low profile at the temples and a strap that lies flat. Contoured masks with thin, angled sides, like the Manta Pro or MZOO, keep pressure off your eyes; a flat silk mask like the Alaska Bear is the thinnest option but rests on your eyelids.",
      },
      {
        q: "Why does my sleep mask move when I sleep on my side?",
        a: "The pillow pushes the side of the mask toward your nose or up your forehead. A snug, adjustable strap worn slightly above the ears, thinner sides, and a mask that isn't tall at the temple all reduce shifting.",
      },
      {
        q: "Is the Manta Pro worth it for side sleepers?",
        a: "If cheaper masks keep pressing on your eyes or leaking light, yes — it's built around side-sleeping comfort with adjustable cups and a slim angled strap. It costs several times more than the MZOO, so try the MZOO first if budget matters.",
      },
      {
        q: "Are silk sleep masks good for side sleepers?",
        a: "They're the thinnest option and many side sleepers like them, but they lie directly on your eyelids and can shift. If eyelid pressure bothers you, choose a contoured mask instead.",
      },
      {
        q: "Do contoured sleep masks block all light?",
        a: "When the cups and nose padding fit your face, they seal very well, and both Manta and MZOO advertise 100% light blocking. Fit varies by face, so use the return window if light leaks at the nose.",
      },
    ],
  },
  {
    slug: "bamboo-vs-eucalyptus-sheets",
    targetQuery: "bamboo vs eucalyptus sheets",
    metaTitle: "Bamboo vs Eucalyptus Sheets: Which Is Cooler?",
    title: "Bamboo vs eucalyptus sheets: which is cooler for hot sleepers?",
    description:
      "Bamboo (rayon/viscose) vs eucalyptus (TENCEL lyocell) sheets for hot sleepers: what the labels mean, feel, moisture, care, and value — one pick for each, plus a cotton alternative.",
    readingTime: "7 min read",
    publishedAt: "2026-09-27",
    verdict:
      "Both tend to feel cooler than cotton sateen or polyester microfiber for hot sleepers. Choose eucalyptus lyocell if you wake up damp or clammy and want a smooth, cool-to-the-touch, slightly crisper feel — it costs more. Choose bamboo rayon if you mainly run warm and want the softest, silkiest drape for less. If you dislike slippery fabric altogether, organic cotton percale is the crisp, breathable alternative.",
    quickPicks: [
      {
        label: "Best eucalyptus (night sweats)",
        productSlug: "eucalyptus-lyocell-sheets",
        why: "100% TENCEL lyocell, OEKO-TEX certified, 16-inch pockets.",
      },
      {
        label: "Best bamboo (softest for the money)",
        productSlug: "cooling-bamboo-sheet-set",
        why: "100% rayon derived from bamboo, OEKO-TEX certified, fits up to 16-inch mattresses.",
      },
      {
        label: "Best if you hate silky sheets",
        productSlug: "percale-cotton-sheet-set",
        why: "GOTS organic cotton percale — crisp, matte, and breathable.",
      },
    ],
    table: {
      caption: "Bamboo vs eucalyptus sheets at a glance",
      columns: ["", "Bamboo sheets", "Eucalyptus sheets"],
      rows: [
        ["What the fiber is", "Usually rayon/viscose made from bamboo pulp", "Lyocell made from eucalyptus pulp (TENCEL is Lenzing's brand)"],
        ["Typical feel", "Very soft, silky, fluid drape", "Smooth, cool to the touch, slightly crisper"],
        ["Moisture", "Breathable and moisture-wicking", "Breathable, with strong moisture handling — the usual pick for night sweats"],
        ["Care", "Cold wash, low dry; can pill if washed roughly", "Gentle wash, low dry; holds up better when wet than viscose"],
        ["Price (our picks)", "Lower", "Higher"],
      ],
    },
    productSlugs: [
      "eucalyptus-lyocell-sheets",
      "cooling-bamboo-sheet-set",
      "percale-cotton-sheet-set",
    ],
    sections: [
      {
        heading: "What 'bamboo' and 'eucalyptus' actually mean on a label",
        body: "Most bamboo sheets are rayon or viscose: bamboo is dissolved into pulp and regenerated into fiber, and the FTC expects these products to be labeled as rayon or viscose made from bamboo — which is why an accurate listing reads 'rayon derived from bamboo.' Eucalyptus sheets are usually lyocell, made from eucalyptus pulp in a solvent-spinning process that recovers and reuses most of the solvent. TENCEL is Lenzing's brand name for its lyocell. Both are regenerated cellulose fibers, closer cousins than the marketing suggests.",
      },
      {
        heading: "Which one actually sleeps cooler",
        body: "Neither is air conditioning. Both breathe far better than polyester microfiber and feel cool when you first get in. The difference shows up over the night: hot sleepers who wake up damp consistently report that lyocell handles moisture better and feels less clammy by morning, while bamboo rayon wins on softness and drape. If you run warm but stay dry, bamboo is usually enough. If sweat is the real problem, spend the extra on lyocell.",
      },
      {
        heading: "Durability and care",
        body: "Viscose rayon is weaker when wet, which is why bamboo sheets ask for cold water, a gentle cycle, and low heat, and why rough washing makes them pill. Lyocell has better wet strength, but it still wrinkles more than microfiber and prefers low heat. For both: no bleach, no fabric softener buildup, and pull them from the dryer promptly.",
      },
    ],
    picks: [
      {
        productSlug: "eucalyptus-lyocell-sheets",
        label: "Best eucalyptus (for night sweats)",
        verdict:
          "Our pick when sweat, not just heat, is waking you up. Stylinen's set is 100% TENCEL lyocell with OEKO-TEX certification and deep 16-inch pockets.",
        pros: [
          "100% TENCEL lyocell from eucalyptus",
          "OEKO-TEX Standard 100 certified",
          "16-inch deep pockets",
          "Smooth, cool-to-the-touch hand",
        ],
        cons: [
          "Costs more than bamboo",
          "Wrinkles more than microfiber",
          "The slick feel isn't for everyone",
        ],
        bestFor: "Night sweats, humid climates, and sensitive skin.",
        skipIf: "You're on a tight budget or love crisp cotton.",
      },
      {
        productSlug: "cooling-bamboo-sheet-set",
        label: "Best bamboo (softest for the money)",
        verdict:
          "The upgrade we recommend first for warm sleepers leaving microfiber or sateen. Bedsure PureWoven is 100% rayon derived from bamboo, OEKO-TEX certified, with a fitted sheet for mattresses up to 16 inches.",
        pros: [
          "100% rayon derived from bamboo",
          "OEKO-TEX Standard 100 certified",
          "Fitted sheet fits mattresses up to 16 in, with 360° elastic",
          "Very soft, drapey feel at a lower price than lyocell",
        ],
        cons: [
          "Needs gentle care — cold wash, tumble dry low",
          "Can pill with rough washing",
          "Heavy night-sweaters usually prefer lyocell",
        ],
        bestFor: "Warm sleepers who want softness and value.",
        skipIf: "You wake up soaked — go lyocell.",
      },
      {
        productSlug: "percale-cotton-sheet-set",
        label: "Best if you hate silky sheets",
        verdict:
          "Some hot sleepers can't stand slippery fabric. California Design Den's GOTS-certified organic cotton percale is crisp, matte, and breathable, and softens with every wash.",
        pros: [
          "100% organic cotton percale, GOTS certified",
          "Crisp, matte, breathable — not slippery",
          "Gets softer with washing",
        ],
        cons: [
          "Wrinkles",
          "Not silky, by design",
          "Fitted sheet fits mattresses up to 15 in — a little shallower than the other two",
        ],
        bestFor: "Hot sleepers who like a hotel-crisp sheet.",
        skipIf: "You want a silky, drapey feel.",
      },
    ],
    criteria: [
      {
        heading: "Read the fiber line, not the headline",
        body: "Look for 'lyocell' or 'TENCEL lyocell' for eucalyptus, and 'rayon' or 'viscose from bamboo' for bamboo. 'Cooling' sets made of polyester microfiber are a different, warmer product.",
      },
      {
        heading: "Blends dilute the benefit",
        body: "A sheet that is mostly polyester with a little bamboo or lyocell will not behave like the real thing. For hot sleepers, 100% of the fiber you're paying for is the point.",
      },
      {
        heading: "Pocket depth",
        body: "Measure your mattress plus any topper. Our bamboo and eucalyptus picks fit up to 16 inches; the percale set fits up to 15.",
      },
      {
        heading: "Certifications",
        body: "OEKO-TEX Standard 100 means the fabric was tested for harmful substances. GOTS applies to organic cotton. Neither says anything about cooling, but both are worth having.",
      },
      {
        heading: "Care you'll actually follow",
        body: "If your household washes everything hot and dries on high, regenerated fibers will wear faster. Cotton percale is the more forgiving choice.",
      },
    ],
    faqs: [
      {
        q: "Are bamboo or eucalyptus sheets cooler?",
        a: "Both feel cooler than cotton sateen or polyester for most hot sleepers. Eucalyptus lyocell is usually the better pick if you sweat at night because it handles moisture well and feels cool to the touch; bamboo rayon is softer and usually cheaper.",
      },
      {
        q: "Is eucalyptus the same as TENCEL?",
        a: "Eucalyptus sheets are usually lyocell made from eucalyptus pulp. TENCEL is Lenzing's brand name for its lyocell fibers, so 'TENCEL lyocell' means branded lyocell.",
      },
      {
        q: "Are bamboo sheets really made of bamboo?",
        a: "Most are rayon or viscose made from bamboo pulp: the plant is chemically processed into a regenerated fiber. That's why accurate listings say 'rayon derived from bamboo.'",
      },
      {
        q: "Which lasts longer, bamboo or eucalyptus sheets?",
        a: "Lyocell generally holds up better when wet than viscose rayon, which is one reason bamboo sheets need gentler washing. For either, wash on a gentle cycle, tumble dry low, and skip bleach.",
      },
      {
        q: "What should I buy if I don't like silky sheets?",
        a: "Cotton percale. It's crisp, matte, and breathable — our pick is the California Design Den organic cotton percale set.",
      },
    ],
  },
];
