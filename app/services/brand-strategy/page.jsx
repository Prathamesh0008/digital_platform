import BrandStrategyClient from "./BrandStrategyClient";
import { absoluteUrl, siteName } from "@/lib/site";

export const metadata = {
  title: `Brand Strategy Services Agency | ${siteName}`,
  description:
    "Nova Techscience provides brand strategy services including positioning, messaging, visual direction, digital branding, GEO strategy, and growth-focused brand development.",
  alternates: {
    canonical: "/services/brand-strategy",
  },
  openGraph: {
    title: `Brand Strategy Services Agency | ${siteName}`,
    description:
      "Build stronger brand positioning, messaging, visual identity, and AI-ready digital presence with Nova Techscience brand strategy services.",
    url: absoluteUrl("/services/brand-strategy"),
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Brand Strategy Services",
  serviceType: "Brand Strategy",
  provider: {
    "@type": "Organization",
    name: siteName,
    url: absoluteUrl("/"),
  },
  url: absoluteUrl("/services/brand-strategy"),
  description:
    "Brand strategy services covering brand positioning, messaging, identity direction, GEO visibility, and authority-led digital growth.",
};

export default function BrandStrategyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BrandStrategyClient />
    </>
  );
}
