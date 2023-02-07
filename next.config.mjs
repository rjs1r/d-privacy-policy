// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

const isGithubAction = process.env.GITHUB_ACTIONS === "true";

let assetPrefix = "/";
let basePath = "";

if (isGithubAction) {
  const repo = process.env.GITHUB_REPOSITORY?.replace(/.*\//, "");
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
  basePath,
  assetPrefix,
};
export default config;
