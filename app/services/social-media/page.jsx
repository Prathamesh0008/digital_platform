import SocialMediaClient from "./SocialMediaClient";
import { faqs } from "./socialMediaData";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export const metadata = {
  title: "Social Media Marketing Agency | Nova Techscience",
  description:
    "Nova Techscience provides social media marketing services, social SEO, paid campaigns and AI-driven social growth strategies for brands worldwide.",
  alternates: {
    canonical: "/services/social-media-marketing",
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
