import AnalyticsDataClient from "./AnalyticsDataClient";
import { absoluteUrl, siteName } from "@/lib/site";

export const metadata = {
  title: `Analytics And Data Services | ${siteName}`,
  description:
    "Nova Techscience provides analytics and data services including GA4 setup, dashboard reporting, conversion tracking, funnel analysis, attribution, and growth insights.",
  alternates: {
    canonical: "/services/analytics-data",
  },
  openGraph: {
    title: `Analytics And Data Services | ${siteName}`,
    description:
      "Track business growth with analytics setup, reporting dashboards, event tracking, attribution, and conversion-focused data services.",
    url: absoluteUrl("/services/analytics-data"),
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Analytics and Data Services",
  serviceType: "Marketing Analytics",
  provider: {
    "@type": "Organization",
    name: siteName,
    url: absoluteUrl("/"),
  },
  url: absoluteUrl("/services/analytics-data"),
  description:
    "Analytics and data services covering GA4 setup, reporting dashboards, attribution, user behavior tracking, and data-led business growth.",
};

export default function AnalyticsDataPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AnalyticsDataClient />
    </>
  );
}
