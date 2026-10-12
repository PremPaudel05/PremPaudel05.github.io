import type { NextConfig } from "next";

const [repositoryOwner, repositoryName] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const isUserSite = repositoryName?.toLowerCase() === `${repositoryOwner?.toLowerCase()}.github.io`;

// Support any owner's username.github.io site and ordinary project repositories.
// An explicit empty NEXT_PUBLIC_BASE_PATH also supports root-level custom domains.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (
  isGitHubActions && repositoryName && !isUserSite ? `/${repositoryName}` : ""
);

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  trailingSlash: true,
};

export default nextConfig;
