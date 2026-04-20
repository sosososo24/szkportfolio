import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@splidejs/react-splide",
    "@splidejs/splide-extension-auto-scroll",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
};

export default nextConfig;
