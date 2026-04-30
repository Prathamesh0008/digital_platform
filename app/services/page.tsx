// app/services/page.jsx
"use client";

import ServicesHero from "@/components/ServicesHero";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesHorizontal from "@/components/ServicesHorizontal";

export default function ServicesPage() {
  return (
    <main className="bg-[#FFF8F5] min-h-screen">
      <ServicesHero />
      <ServicesHorizontal />
      <ServicesGrid />
      <WhyChooseUs />
    </main>
  );
}