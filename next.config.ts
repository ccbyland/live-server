import type { NextConfig } from "next";

const isLocal = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  output: isLocal ? undefined : "export",
  reactStrictMode: true,
  basePath: isLocal ? '' : `/${process.env.VERSION}`,
  assetPrefix: isLocal ? '' : `/${process.env.VERSION}`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
