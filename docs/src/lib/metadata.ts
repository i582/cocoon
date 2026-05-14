export const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

const repository = process.env.GITHUB_REPOSITORY ?? "i582/cocoon";

export const githubRepoUrl = `https://github.com/${repository}`;
