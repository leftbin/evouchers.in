import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/evouchers.in",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
