import GeoServiceClient from "./GeoServiceClient";
import { absoluteUrl, siteName } from "@/lib/site";

export const metadata = {
  title: `GEO Marketing Services | GEO Agency | ${siteName}`,
  description:
    "Nova Techscience offers GEO marketing, AEO and SEO services to grow visibility across Google AI Overviews, ChatGPT and AI search.",
  alternates: {
    canonical: "/services/generative-engine-optimization-geo-agency",
  },
  openGraph: {
    title: `GEO Marketing Services | GEO Agency | ${siteName}`,
    description:
      "Improve AI search visibility with GEO marketing, AEO, entity clarity, and answer-focused content strategy.",
    url: absoluteUrl("/services/generative-engine-optimization-geo-agency"),
  },
};

const geoSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GEO Marketing Services",
  serviceType: "Generative Engine Optimization",
  provider: {
    "@type": "Organization",
    name: siteName,
    url: absoluteUrl("/"),
  },
  url: absoluteUrl("/services/generative-engine-optimization-geo-agency"),
  description:
    "GEO marketing services focused on AI search visibility, answer engine optimization, structured content, and entity-led digital discoverability.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(geoSchema) }}
      />
      <GeoServiceClient />
    </>
  );
}
