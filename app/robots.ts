import type { MetadataRoute } from "next";

const siteUrl = "https://www.novatechscience.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: ["/wp-admin/", "/cgi-bin/", "/wp-login.php", "/my-account/", "/?s="],
      },
      {
        userAgent: "*",
        allow: "/wp-admin/admin-ajax.php",
      },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Googlebot-Image", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "Slurp", allow: "/" },
      { userAgent: "DuckDuckBot", allow: "/" },
      { userAgent: "Baiduspider", disallow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "FacebookBot", disallow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
      { userAgent: "omgili", disallow: "/" },
      { userAgent: "omgilibot", disallow: "/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
