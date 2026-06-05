import EcommerceGrowthClient from "./EcommerceGrowthClient";
import { absoluteUrl, siteName } from "@/lib/site";

export const metadata = {
  title: `Ecommerce Growth Services | ${siteName}`,
  description:
    "Nova Techscience helps ecommerce brands improve store performance, product visibility, conversion rate, retention, SEO, ads, and revenue growth.",
  alternates: {
    canonical: "/services/ecommerce-growth",
  },
  openGraph: {
    title: `Ecommerce Growth Services | ${siteName}`,
    description:
      "Scale ecommerce revenue with product page optimization, conversion strategy, performance marketing, SEO, and customer journey improvements.",
    url: absoluteUrl("/services/ecommerce-growth"),
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ecommerce Growth Services",
  serviceType: "Ecommerce Growth Strategy",
  provider: {
    "@type": "Organization",
    name: siteName,
    url: absoluteUrl("/"),
  },
  url: absoluteUrl("/services/ecommerce-growth"),
  description:
    "Ecommerce growth services focused on CRO, product visibility, SEO, performance ads, customer retention, and online revenue growth.",
};

export default function EcommerceGrowthPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <EcommerceGrowthClient />
    </>
  );
}
