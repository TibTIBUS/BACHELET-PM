import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const githubBasePath = "/BACHELET-PM";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  ...(isGitHubPages
    ? {
        basePath: githubBasePath,
        assetPrefix: githubBasePath,
      }
    : {}),
};

export default nextConfig;
