import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/alma",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
