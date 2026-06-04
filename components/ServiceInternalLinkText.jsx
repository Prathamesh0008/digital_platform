import Link from "next/link";

const serviceLinks = [
  {
    label: "Brand Strategy",
    href: "/services/brand-strategy",
    aliases: ["Brand Strategy"],
  },
  {
    label: "SEO Optimization",
    href: "/services/seo-optimization",
    aliases: ["SEO Optimization", "SEO services", "SEO Services", "SEO"],
  },
  {
    label: "Social Media",
    href: "/services/social-media",
    aliases: ["Social Media", "social media"],
  },
  {
    label: "Performance Ads",
    href: "/services/performance-ads",
    aliases: ["Performance Ads"],
  },
  {
    label: "Web Design",
    href: "/services/web-design",
    aliases: ["Web Design", "Website Design", "website design", "web design"],
  },
  {
    label: "E-Commerce Growth",
    href: "/services/ecommerce-growth",
    aliases: ["E-Commerce Growth", "E-Commerce", "Ecommerce", "ecommerce", "e-commerce"],
  },
  {
    label: "Analytics and Data",
    href: "/services/analytics-data",
    aliases: ["Analytics and Data", "Analytics And Data", "Analytics & Data"],
  },
  {
    label: "GEO Service",
    href: "/services/geo-service",
    aliases: ["GEO Service", "GEO services", "GEO Services", "GEO"],
  },
];

const linkClassName =
  "font-semibold text-[#4f6df5] underline decoration-[#4f6df5]/35 underline-offset-4 transition hover:text-[#0d2d47] hover:decoration-[#0d2d47]";

const escapedAliases = serviceLinks
  .flatMap((service) =>
    service.aliases.map((alias) => ({
      alias,
      service,
      escaped: alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    }))
  )
  .sort((a, b) => b.alias.length - a.alias.length);

const servicePattern = new RegExp(
  `\\b(${escapedAliases.map((item) => item.escaped).join("|")})\\b`,
  "g"
);

function findService(match) {
  const normalized = match.toLowerCase();

  return escapedAliases.find((item) => item.alias.toLowerCase() === normalized)
    ?.service;
}

export default function ServiceInternalLinkText({ children, currentHref }) {
  if (typeof children !== "string") {
    return children;
  }

  const parts = children.split(servicePattern);

  return parts.map((part, index) => {
    const service = findService(part);

    if (!service || service.href === currentHref) {
      return part;
    }

    return (
      <Link
        key={`${service.href}-${part}-${index}`}
        href={service.href}
        prefetch={false}
        className={linkClassName}
      >
        {part}
      </Link>
    );
  });
}
