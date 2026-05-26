// app/services/page.jsx
"use client";

import ServicesHero from "@/components/ServicesHero";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesHorizontal from "@/components/ServicesHorizontal";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#EAEBDB] text-[#0d2d47]">
      <ServicesHero />
      <ServicesHorizontal />
      <ServicesGrid />
      <WhyChooseUs />
    </main>
  );
}
