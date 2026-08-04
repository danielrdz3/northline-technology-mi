import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.GITHUB_PAGES === "true"
    ? {
        output: "export",
        basePath: "/northline-technology-mi",
        assetPrefix: "/northline-technology-mi",
        images: { unoptimized: true },
        typescript: { ignoreBuildErrors: true },
        env: { NEXT_PUBLIC_BASE_PATH: "/northline-technology-mi" },
      }
    : {}),
};

export default nextConfig;
