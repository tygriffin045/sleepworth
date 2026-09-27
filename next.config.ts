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
