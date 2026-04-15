import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@splidejs/react-splide",
    "@splidejs/splide-extension-auto-scroll",
  ],
};

export default nextConfig;
