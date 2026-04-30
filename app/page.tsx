//marketing-website\app\page.tsx

import Hero from "@/components/Hero";
import NextSection from "@/components/NextSection";
// import PortfolioHero from  "@/components/PortfolioHero";

// import PortfolioHeroLight from "@/components/PortfolioHeroLight";
import ClientsAndTestimonials from "@/components/ClientsAndTestimonials";
import ContactSection from "@/components/ContactSection";
// import ScrollWire from "@/components/ScrollWire";
import SplitMarqueeSection from "@/components/SplitMarqueeSection";

export default function Home() {
  return (
    <main>
     {/* <ScrollWire /> */}
      <Hero />
      <NextSection />
      
      {/* <PortfolioHero/> */}
      {/* <PortfolioHeroLight/> */}
      <SplitMarqueeSection/>
      <ClientsAndTestimonials/>
      <ContactSection/>
     
    </main>
  );
}