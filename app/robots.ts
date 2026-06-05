import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/agent"],
      },
      { userAgent: "Baiduspider", disallow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
      { userAgent: "omgili", disallow: "/" },
      { userAgent: "omgilibot", disallow: "/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
