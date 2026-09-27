export const SITE_URL = "https://sleepworth.vercel.app";
export const SITE_NAME = "SleepWorth";

/** Default 1200×630 share image (public/og-default.jpg). Product pages use their own photos. */
export const DEFAULT_OG_IMAGE_PATH = "/og-default.jpg";
export const DEFAULT_OG_IMAGES = [
  {
    url: DEFAULT_OG_IMAGE_PATH,
    width: 1200,
    height: 630,
    alt: "SleepWorth — Honest picks for better sleep",
    type: "image/jpeg",
  },
];
export const DEFAULT_TWITTER_IMAGES = [DEFAULT_OG_IMAGE_PATH];
