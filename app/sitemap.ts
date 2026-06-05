import type { MetadataRoute } from "next";
import { blogs } from "@/data/blog";
import { portfolioProjects } from "@/data/portfolio";
import { services } from "@/data/servicesData";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/services", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/services/blog", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/services/details", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/services/seo-services", changeFrequency: "weekly" as const, priority: 0.8 },
    {
      path: "/services/social-media-marketing",
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      path: "/services/generative-engine-optimization-geo-agency",
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    { path: "/website-development-company", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/freelance-website-developer", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/seo-agency", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/local-seo-services", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/performance-marketing-agency", changeFrequency: "weekly" as const, priority: 0.8 },
    {
      path: "/website-development-company-in-mumbai",
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      path: "/freelance-website-developer-in-mumbai",
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    { path: "/seo-agency-in-navi-mumbai", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/local-seo-services-in-thane", changeFrequency: "weekly" as const, priority: 0.8 },
    {
      path: "/performance-marketing-agency-in-mumbai",
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    { path: "/portfolio", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/case-studies", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.9 },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...services.map((service) => ({
      url: absoluteUrl(`/services/${service.slug}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...blogs.map((blog) => ({
      url: absoluteUrl(`/services/blog/${blog.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...portfolioProjects.flatMap((project) => [
      {
        url: absoluteUrl(`/portfolio/${project.slug}`),
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      },
      {
        url: absoluteUrl(`/case-studies/${project.slug}`),
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      },
    ]),
  ];
}
