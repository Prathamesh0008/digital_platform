import SocialMediaClient from "./SocialMediaClient";
import { faqs } from "./socialMediaData";
import { absoluteUrl, siteName } from "@/lib/site";

const faqSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Social Media Marketing Services",
      serviceType: "Social Media Marketing",
      provider: {
        "@type": "Organization",
        name: siteName,
        url: absoluteUrl("/"),
      },
      url: absoluteUrl("/services/social-media-marketing"),
      description:
        "Social media marketing services covering content strategy, paid campaigns, social SEO, community growth, and brand engagement.",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ],
};

export const metadata = {
  title: `Social Media Marketing Agency | ${siteName}`,
  description:
    "Nova Techscience provides social media marketing services, social SEO, paid campaigns and AI-driven social growth strategies for brands worldwide.",
  alternates: {
    canonical: "/services/social-media-marketing",
  },
  openGraph: {
    title: `Social Media Marketing Agency | ${siteName}`,
    description:
      "Grow brand reach and engagement with social media marketing, social SEO, paid campaigns, and platform-focused content strategy.",
    url: absoluteUrl("/services/social-media-marketing"),
  },
};

export default function SocialMediaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SocialMediaClient />
    </>
  );
}
