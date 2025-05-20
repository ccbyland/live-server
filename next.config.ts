import type { NextConfig } from "next";

const isLocal = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  output: isLocal ? undefined : "export",
  reactStrictMode: true,
  basePath: `/${process.env.VERSION}`,
  assetPrefix: `/${process.env.VERSION}/`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
