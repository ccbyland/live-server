import type { NextConfig } from "next";

const isLocal = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  output: isLocal ? undefined : "export",
  reactStrictMode: true,
  basePath: isLocal ? undefined : `/${process.env.VERSION}`,
  assetPrefix: isLocal ? undefined : `/${process.env.VERSION}/`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
