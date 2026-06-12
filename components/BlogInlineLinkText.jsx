import Link from "next/link";

const inlineLinks = [
  {
    href: "/services/seo-optimization",
    aliases: ["technical SEO", "SEO services", "SEO Service", "SEO"],
  },
  {
    href: "/services/geo-service",
    aliases: [
      "Generative Engine Optimization",
      "GEO strategies",
      "GEO strategy",
      "GEO services",
      "GEO Service",
      "GEO",
    ],
  },
  {
    href: "/services/web-design",
    aliases: [
      "conversion-focused website",
      "conversion-focused websites",
      "website design",
      "Website Design",
      "web design",
      "Web Design",
    ],
  },
  {
    href: "/services/brand-strategy",
    aliases: ["brand strategy", "Brand Strategy"],
  },
  {
    href: "/services/performance-ads",
    aliases: ["Performance Ads", "performance ads", "paid advertising"],
  },
  {
    href: "/blog/how-seo-and-geo-work-together",
    aliases: ["SEO and GEO", "SEO And GEO"],
  },
  {
    href: "/blog/ai-powered-lead-generation-for-service-businesses",
    aliases: [
      "AI-powered lead generation",
      "AI lead generation",
      "lead generation",
    ],
  },
  {
    href: "/blog/landing-page-tips-for-performance-ads",
    aliases: ["landing pages", "landing page"],
  },
  {
    href: "/blog/why-brand-strategy-matters-before-design",
    aliases: ["brand-first approach"],
  },
];

const linkClassName =
  "font-semibold text-[#4f6df5] underline decoration-[#4f6df5]/35 underline-offset-4 transition hover:text-[#0d2d47] hover:decoration-[#0d2d47]";

const escapedAliases = inlineLinks
  .flatMap((item) =>
    item.aliases.map((alias) => ({
      alias,
      href: item.href,
      escaped: alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    }))
  )
  .sort((a, b) => b.alias.length - a.alias.length);

const pattern = new RegExp(
  `\\b(${escapedAliases.map((item) => item.escaped).join("|")})\\b`,
  "g"
);

function findMatch(text) {
  const normalized = text.toLowerCase();

  return escapedAliases.find((item) => item.alias.toLowerCase() === normalized);
}

export default function BlogInlineLinkText({ children, currentPath }) {
  if (typeof children !== "string") {
    return children;
  }

  const parts = children.split(pattern);

  return parts.map((part, index) => {
    const match = findMatch(part);

    if (!match || match.href === currentPath) {
      return part;
    }

    return (
      <Link
        key={`${match.href}-${part}-${index}`}
        href={match.href}
        className={linkClassName}
      >
        {part}
      </Link>
    );
  });
}
