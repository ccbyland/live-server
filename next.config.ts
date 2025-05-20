import type { NextConfig } from "next";

const isLocal = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  output: isLocal ? undefined : "export",
  reactStrictMode: true,
  basePath: `/${process.env.version}`,
  assetPrefix: `/${process.env.version}/`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
