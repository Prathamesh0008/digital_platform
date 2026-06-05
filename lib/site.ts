export const siteUrl = "https://www.novatechscience.com";
export const siteName = "Nova Techscience";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
