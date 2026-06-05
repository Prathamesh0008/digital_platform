//marketing-website\app\page.tsx
import type { Metadata } from "next";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
// import PortfolioHero from  "@/components/PortfolioHero";
//import ServicesStacked from "@/components/ServicesStacked";
import  ServicesHorizontal from "@/components/ServicesHorizontal";
// import PortfolioHeroLight from "@/components/PortfolioHeroLight";
import ClientsAndTestimonials from "@/components/ClientsAndTestimonials";
// import ScrollWire from "@/components/ScrollWire";
import SplitMarqueeSection from "@/components/SplitMarqueeSection";
//import HomeWhyChooseSection from "@/components/HomeWhyChooseSection";
import WorkProcess from "@/components/WorkProcess";
import HomeGrowthSection from "@/components/HomeGrowthSection";
// import ClientsLogoSlider from "@/components/ClientsLogoSlider";
// import VideoTestimonialsSlider from "@/components/VideoTestimonialsSlider";
import ClientReviewSlider from "@/components/ClientReviewSlider";
import DigitalGrowthForm from "@/components/DigitalGrowthForm";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
     {/* <ScrollWire /> */}
      {/* <Hero /> */}
      <Services />
      {/* <ServicesStacked/> */}
       <ServicesHorizontal />
      {/* <PortfolioHero/> */}
      {/* <PortfolioHeroLight/> */}
      <SplitMarqueeSection/>
      <ClientsAndTestimonials/>
      {/* <HomeWhyChooseSection /> */}
      <WorkProcess/>
      <HomeGrowthSection/>
      {/* <ClientsLogoSlider/> */}
      {/* <VideoTestimonialsSlider/> */}
      <ClientReviewSlider/>
      <DigitalGrowthForm/>
      <BlogSection/>
      <FAQSection/>

     
    </main>
  );
}
