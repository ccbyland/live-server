import type { NextConfig } from "next";

const repoName = "live-server";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
