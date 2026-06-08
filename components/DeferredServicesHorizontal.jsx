"use client";

import dynamic from "next/dynamic";

import LazySection from "@/components/LazySection";

const ServicesHorizontal = dynamic(() => import("@/components/ServicesHorizontal"), {
  ssr: false,
  loading: () => (
    <div
      className="rounded-[32px] bg-[#FFF8F5]"
      style={{ minHeight: 760 }}
      aria-hidden="true"
    />
  ),
});

export default function DeferredServicesHorizontal() {
  return (
    <LazySection minHeight={760} rootMargin="120px 0px">
      <ServicesHorizontal />
    </LazySection>
  );
}
