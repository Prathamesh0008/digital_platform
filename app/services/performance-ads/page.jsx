import PerformanceAdsClient from "./PerformanceAdsClient";
import { absoluteUrl, siteName } from "@/lib/site";

export const metadata = {
  title: `Performance Ads Agency | ${siteName}`,
  description:
    "Nova Techscience manages performance ads for lead generation, ecommerce sales, Google Ads, Meta Ads, landing pages, tracking, and conversion optimization.",
  alternates: {
    canonical: "/services/performance-ads",
  },
  openGraph: {
    title: `Performance Ads Agency | ${siteName}`,
    description:
      "Drive qualified leads and sales with performance ads, conversion tracking, paid media strategy, and landing page optimization.",
    url: absoluteUrl("/services/performance-ads"),
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Performance Ads Services",
  serviceType: "Performance Advertising",
  provider: {
    "@type": "Organization",
    name: siteName,
    url: absoluteUrl("/"),
  },
  url: absoluteUrl("/services/performance-ads"),
  description:
    "Performance advertising services for Google Ads, Meta Ads, YouTube Ads, lead generation, ecommerce growth, and ROI-focused campaign optimization.",
};

export default function PerformanceAdsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PerformanceAdsClient />
    </>
  );
}
