import WebDesignClient from "./WebDesignClient";
import { absoluteUrl, siteName } from "@/lib/site";

export const metadata = {
  title: `Website Design And Development Services | ${siteName}`,
  description:
    "Nova Techscience provides website design and development services with responsive UX, SEO-ready structure, conversion-focused pages, and modern digital experiences.",
  alternates: {
    canonical: "/services/web-design",
  },
  openGraph: {
    title: `Website Design And Development Services | ${siteName}`,
    description:
      "Build responsive, SEO-ready, conversion-focused websites with modern UI, strong structure, and premium brand presentation.",
    url: absoluteUrl("/services/web-design"),
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Design and Development Services",
  serviceType: "Website Design",
  provider: {
    "@type": "Organization",
    name: siteName,
    url: absoluteUrl("/"),
  },
  url: absoluteUrl("/services/web-design"),
  description:
    "Website design and development services for responsive websites, SEO-friendly structure, UX design, and conversion-ready digital platforms.",
};

export default function WebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <WebDesignClient />
    </>
  );
}
