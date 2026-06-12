import { blogs } from "@/data/blog";

export const serviceHubLinks = [
  {
    href: "/services/seo-services",
    title: "SEO Services",
    description: "Improve rankings, technical SEO health, and long-term organic traffic growth.",
  },
  {
    href: "/services/web-design",
    title: "Website Design",
    description: "Build responsive, conversion-focused websites with stronger UX and search structure.",
  },
  {
    href: "/services/performance-ads",
    title: "Performance Ads",
    description: "Generate qualified leads and sales with tracking-first paid campaign strategy.",
  },
];

export const insightLinks = [
  {
    href: "/services/blog",
    title: "Digital Marketing Blog",
    description: "Read practical insights on SEO, GEO, web design, branding, ads, and growth.",
  },
  {
    href: "/case-studies",
    title: "Website Case Studies",
    description: "See how strategy, design, and development come together in real client work.",
  },
  {
    href: "/portfolio",
    title: "Portfolio Projects",
    description: "Explore selected websites and digital experiences built for modern brands.",
  },
];

export function getBlogRelatedLinks(category: string) {
  const normalized = category.toLowerCase();

  if (normalized.includes("seo") || normalized.includes("geo")) {
    return [
      {
        href: "/services/seo-services",
        title: "Professional SEO Services",
        description: "Technical SEO, content optimization, and organic growth strategy.",
      },
      {
        href: "/services/generative-engine-optimization-geo-agency",
        title: "GEO Marketing Services",
        description: "Grow visibility in AI search, answer engines, and AI-generated summaries.",
      },
      ...insightLinks.slice(1, 3),
    ];
  }

  if (normalized.includes("web")) {
    return [
      {
        href: "/services/web-design",
        title: "Website Design Services",
        description: "Build faster, clearer, and conversion-focused websites for your brand.",
      },
      {
        href: "/portfolio",
        title: "Website Portfolio",
        description: "Review selected design and development work across industries.",
      },
      {
        href: "/case-studies",
        title: "Website Case Studies",
        description: "See detailed breakdowns of strategy, UX, and implementation work.",
      },
    ];
  }

  if (normalized.includes("lead") || normalized.includes("ads")) {
    return [
      {
        href: "/services/performance-ads",
        title: "Performance Ads Services",
        description: "Launch paid campaigns with clean tracking, testing, and ROI focus.",
      },
      {
        href: "/services/ecommerce-growth",
        title: "Ecommerce Growth Services",
        description: "Improve conversions, product visibility, and revenue performance.",
      },
      ...insightLinks.slice(1, 3),
    ];
  }

  if (normalized.includes("brand")) {
    return [
      {
        href: "/services/brand-strategy",
        title: "Brand Strategy Services",
        description: "Clarify positioning, messaging, and visual direction for stronger growth.",
      },
      {
        href: "/portfolio",
        title: "Brand Website Portfolio",
        description: "Explore how strategy and design are translated into digital experiences.",
      },
      ...insightLinks.slice(1, 2),
    ];
  }

  return [...serviceHubLinks];
}

const blogInterlinkMap: Record<string, string[]> = {
  "how-seo-and-geo-work-together": [
    "why-brand-strategy-matters-before-design",
    "why-every-brand-needs-a-conversion-focused-website",
    "ai-powered-lead-generation-for-service-businesses",
  ],
  "why-every-brand-needs-a-conversion-focused-website": [
    "why-brand-strategy-matters-before-design",
    "landing-page-tips-for-performance-ads",
    "how-seo-and-geo-work-together",
  ],
  "ai-powered-lead-generation-for-service-businesses": [
    "landing-page-tips-for-performance-ads",
    "how-seo-and-geo-work-together",
    "why-every-brand-needs-a-conversion-focused-website",
  ],
  "landing-page-tips-for-performance-ads": [
    "ai-powered-lead-generation-for-service-businesses",
    "why-every-brand-needs-a-conversion-focused-website",
    "how-seo-and-geo-work-together",
  ],
  "why-brand-strategy-matters-before-design": [
    "why-every-brand-needs-a-conversion-focused-website",
    "how-seo-and-geo-work-together",
    "landing-page-tips-for-performance-ads",
  ],
};

export function getRelatedBlogArticles(currentSlug: string) {
  const preferredSlugs = blogInterlinkMap[currentSlug] ?? [];
  const preferredBlogs = preferredSlugs
    .map((slug) => blogs.find((blog) => blog.slug === slug))
    .filter(Boolean);

  const fallbackBlogs = blogs.filter(
    (blog) =>
      blog.slug !== currentSlug &&
      !preferredSlugs.includes(blog.slug)
  );

  return [...preferredBlogs, ...fallbackBlogs].slice(0, 3).map((blog) => ({
    href: `/blog/${blog!.slug}`,
    title: blog!.title,
    description: blog!.excerpt,
  }));
}

export const projectRelatedLinks = [
  {
    href: "/services/web-design",
    title: "Website Design Services",
    description: "Create responsive, premium websites built for trust and conversion.",
  },
  {
    href: "/services/seo-services",
    title: "SEO Services",
    description: "Support website visibility with stronger technical SEO and content structure.",
  },
  {
    href: "/services/blog",
    title: "Digital Growth Articles",
    description: "Read actionable insights on design, SEO, and digital growth strategy.",
  },
];

export const intentLandingLinks = [
  {
    href: "/website-development-company",
    title: "Website Development Company",
    description: "Intent page for businesses searching for custom website development support.",
  },
  {
    href: "/freelance-website-developer",
    title: "Freelance Website Developer",
    description: "Landing page for direct website development and redesign enquiries.",
  },
  {
    href: "/seo-agency",
    title: "SEO Agency",
    description: "Search-intent page focused on SEO services, rankings, and organic growth.",
  },
  {
    href: "/local-seo-services",
    title: "Local SEO Services",
    description: "Location-intent landing page for local search visibility and service-area growth.",
  },
  {
    href: "/performance-marketing-agency",
    title: "Performance Marketing Agency",
    description: "Paid media and campaign growth landing page for leads, tracking, and ROI.",
  },
];

export const locationLandingLinks = [
  {
    href: "/website-development-company-in-mumbai",
    title: "Website Development Company In Mumbai",
    description: "Location-focused website development page for Mumbai business websites and redesigns.",
  },
  {
    href: "/freelance-website-developer-in-mumbai",
    title: "Freelance Website Developer In Mumbai",
    description: "Direct website development support for founders and service businesses in Mumbai.",
  },
  {
    href: "/seo-agency-in-navi-mumbai",
    title: "SEO Agency In Navi Mumbai",
    description: "Search growth page focused on technical SEO, content, and rankings in Navi Mumbai.",
  },
  {
    href: "/local-seo-services-in-thane",
    title: "Local SEO Services In Thane",
    description: "Local visibility landing page for Thane service businesses and regional growth.",
  },
  {
    href: "/performance-marketing-agency-in-mumbai",
    title: "Performance Marketing Agency In Mumbai",
    description: "Paid ads and conversion growth page for Mumbai-focused lead generation campaigns.",
  },
];
