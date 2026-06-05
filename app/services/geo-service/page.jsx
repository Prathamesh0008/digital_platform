import GeoServiceClient from "../generative-engine-optimization-geo-agency/GeoServiceClient";
import { siteName } from "@/lib/site";

export const metadata = {
  title: `GEO Services | ${siteName}`,
  description:
    "Nova Techscience offers GEO marketing, AEO and SEO services to grow visibility across Google AI Overviews, ChatGPT and AI search.",
  alternates: {
    canonical: "/services/generative-engine-optimization-geo-agency",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function GeoServicePage() {
  return <GeoServiceClient />;
}
