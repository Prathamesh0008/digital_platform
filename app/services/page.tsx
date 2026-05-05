// app/services/page.jsx
"use client";

import ServicesHero from "@/components/ServicesHero";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesHorizontal from "@/components/ServicesHorizontal";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom,#f8fafc,#eef2ff_35%,#dbeafe_68%,#93c5fd)]">
      <ServicesHero />
      <ServicesHorizontal />
      <ServicesGrid />
      <WhyChooseUs />
    </main>
  );
}
