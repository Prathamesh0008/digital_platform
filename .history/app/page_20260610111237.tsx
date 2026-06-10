//marketing-website\app\page.tsx
import type { Metadata } from "next";
import dynamic from "next/dynamic";
 
import Hero from "@/components/Hero";
import HomeSectionWarmup from "@/components/HomeSectionWarmup";
import Services from "@/components/Services";
import LazySection from "@/components/LazySection";
 
const SplitMarqueeSection = dynamic(() => import("@/components/SplitMarqueeSection"));
const ClientsAndTestimonials = dynamic(() => import("@/components/ClientsAndTestimonials"));
const WorkProcess = dynamic(() => import("@/components/WorkProcess"));
const HomeGrowthSection = dynamic(() => import("@/components/HomeGrowthSection"));
const ClientReviewSlider = dynamic(() => import("@/components/ClientReviewSlider"));
const DigitalGrowthForm = dynamic(() => import("@/components/DigitalGrowthForm"));
const BlogSection = dynamic(() => import("@/components/BlogSection"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
 
const siteUrl = "https://www.novatechsciences.com";
 
export const metadata: Metadata = {
  title: "Digital Marketing, SEO & Website Development",
  description:
    "End-to-end digital marketing agency offering SEO, performance campaigns, and complete website development from scratch to launch.",
  keywords: [
    "digital marketing",
    "seo agency",
    "website development",
    "technical seo",
    "performance marketing",
    "web design",
  ],
  alternates: {
    canonical: "/",
  },
};
 
export default function Home() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Nova Techscience",
      url: siteUrl,
      logo: `${siteUrl}/novatechscience-logo.svg`,
      sameAs: [],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Nova Techscience",
      url: siteUrl,
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Nova Techscience",
      url: siteUrl,
      description:
        "Digital marketing, SEO, and end-to-end website development services for business growth.",
      areaServed: "Worldwide",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Office no-2, 1st Floor, Wadhwa PBR, Sector 4, Palm Beach Rd, above Venilicious Bakery & Cake shop, Nerul West, Nerul",
        addressLocality: "Navi Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400706",
        addressCountry: "IN",
      },
      serviceType: [
        "Digital Marketing",
        "Search Engine Optimization",
        "Website Development",
        "Performance Marketing",
      ],
    },
  ];
 
  return (
    <main>
      <HomeSectionWarmup />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
     {/* <ScrollWire /> */}
      <Hero />
      <Services />
      <LazySection minHeight={180}>
        <SplitMarqueeSection />
      </LazySection>
      <LazySection minHeight={360} rootMargin="1200px 0px">
        <ClientsAndTestimonials />
      </LazySection>
      <LazySection minHeight={320} rootMargin="1400px 0px">
        <WorkProcess />
      </LazySection>
      <LazySection minHeight={320}>
        <HomeGrowthSection />
      </LazySection>
      <LazySection minHeight={240}>
        <ClientReviewSlider />
      </LazySection>
      <LazySection minHeight={280}>
        <DigitalGrowthForm />
      </LazySection>
      <LazySection minHeight={240}>
        <BlogSection />
      </LazySection>
      
        <FAQSection />
     
 
     
    </main>
  );
}
 
 
