import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "images-eu.ssl-images-amazon.com",
        pathname: "/images/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/products/shilucheng-cotton-sheet-set", destination: "/products/lane-linen-450tc-sateen-sheet-set", permanent: true },
      { source: "/products/eli-elm-contoured-pillow", destination: "/products/sidney-sleep-curved-pillow", permanent: true },
      { source: "/products/honeywell-hul570w-humidifier", destination: "/products/honeywell-hul430-humidifier", permanent: true },
      { source: "/products/utopia-bamboo-mattress-protector", destination: "/products/utopia-waterproof-mattress-protector", permanent: true },
      { source: "/products/red-night-light-sleep", destination: "/products/auvon-motion-night-light", permanent: true },
      { source: "/products/macks", destination: "/products/macks-ultra-soft-foam-earplugs", permanent: true },
      { source: "/products/loop-engage-2-ear-plugs", destination: "/category/earplugs", permanent: true },
      { source: "/products/loop-quiet", destination: "/products/loop-quiet-earplugs", permanent: true },
      { source: "/products/loop-mask", destination: "/products/loop-quiet-earplugs", permanent: true },
      { source: "/products/hatch-restore-lighting", destination: "/products/hatch-restore-3", permanent: true },
      { source: "/products/egg-crate-foam-topper", destination: "/category/mattress-toppers", permanent: true },
      { source: "/categories/:slug", destination: "/category/:slug", permanent: true },
      {
        // Product renamed when Gravity Basics went unavailable; keep old links working.
        source: "/products/gravity-basics-weighted-blanket",
        destination: "/products/gravity-weighted-blanket-15lb",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
