"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const cards = [
  {
    title: "Brand Strategy",
    desc: "Sharper positioning, clearer messaging, and a stronger foundation for every growth move that follows.",
    image: "/caseStudy/brand-strategy-500x320.png",
    href: "/services/brand-strategy",
    label: "Positioning",
  },
  {
    title: "SEO Optimization",
    desc: "Search-focused structure built to improve discoverability, rankings, and qualified inbound traffic.",
    image: "/caseStudy/seo-500x320.png",
    href: "/services/seo-optimization",
    label: "Search",
  },
  {
    title: "Social Media",
    desc: "Content systems and campaign direction that keep brands active, visible, and consistent.",
    image: "/caseStudy/social-media-marketing.png",
    href: "/services/social-media",
    label: "Social",
  },
  {
    title: "Performance Ads",
    desc: "Paid campaigns designed around conversion paths, measurement, and more efficient acquisition.",
    image: "/caseStudy/performance-ads.png",
    href: "/services/performance-ads",
    label: "Paid Media",
  },
  {
    title: "Web Design",
    desc: "Conversion-focused websites with cleaner journeys, faster messaging, and stronger visual trust.",
    image: "/caseStudy/web-development-500x320.png",
    href: "/services/web-design",
    label: "Web",
  },
  {
    title: "E-Commerce Growth",
    desc: "Revenue-oriented improvements across merchandising, conversion flow, and repeat purchase behavior.",
    image: "/caseStudy/ecommerce-growth.png",
    href: "/services/ecommerce-growth",
    label: "Commerce",
  },
  {
    title: "Analytics & Data",
    desc: "Clearer reporting and better decision-making through cleaner data, attribution, and insight systems.",
    image: "/caseStudy/analytics-data-500x320-blended.png",
    href: "/services/analytics-data",
    label: "Analytics",
  },
];

export default function ServicesHorizontal() {
  const [activeIndex, setActiveIndex] = useState(1);
  const shouldReduceMotion = useReducedMotion();
  const activeCard = cards[activeIndex];

  return (
    <section className="relative overflow-hidden bg-[#EAEBDB] py-18 sm:py-22 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(115,146,251,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(13,45,71,0.08),transparent_28%)]" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <div className="max-w-xl">
              {/* <span className="inline-flex rounded-full border border-[#0d2d47]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0d2d47]/68">
                Selected Work
              </span> */}

              <h2 className="mt-5 text-4xl font-semibold uppercase leading-[0.9] tracking-tight text-[#0d2d47] sm:text-5xl md:text-[86px] lg:text-[108px]">
               Our 
                <br />
                Services
              </h2>

              <p className="mt-6 max-w-md text-base leading-8 text-[#0d2d47]/72 sm:text-lg">
                Explore focused service stories through one large visual frame
                instead of a spinning carousel.
              </p>
            </div>

            <div className="mt-10 flex gap-10 border-t border-[#0d2d47]/12 pt-6 text-[#0d2d47]">
              <div>
                <div className="text-3xl font-semibold sm:text-4xl">07</div>
                <div className="mt-1 text-xs uppercase tracking-[0.24em] text-[#0d2d47]/54">
                  Focus Areas
                </div>
              </div>
              <div>
                <div className="text-3xl font-semibold sm:text-4xl">01</div>
                <div className="mt-1 text-xs uppercase tracking-[0.24em] text-[#0d2d47]/54">
                  Live Preview
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <motion.article
              key={activeCard.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="relative min-h-[420px] overflow-hidden rounded-[34px] bg-[#0d2d47] shadow-[0_28px_80px_rgba(13,45,71,0.22)] sm:min-h-[480px] lg:min-h-[560px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${activeCard.image})` }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,18,30,0.84),rgba(7,18,30,0.3)_48%,rgba(7,18,30,0.12))]" />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,18,30,0.32),rgba(7,18,30,0))]" />

              <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white sm:p-8 lg:p-10">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm">
                    {activeCard.label}
                  </span>
                  <span className="text-sm font-medium text-white/58">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="max-w-xl">
                  <h3 className="text-3xl font-semibold leading-[0.95] tracking-tight sm:text-4xl lg:text-[56px]">
                    {activeCard.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-white/78 sm:text-base">
                    {activeCard.desc}
                  </p>
                  <Link
                    href={activeCard.href}
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#0d2d47] transition hover:bg-[#c8d3ef]"
                  >
                    View Service
                    <span aria-hidden="true">{">"}</span>
                  </Link>
                </div>
              </div>
            </motion.article>

            <div className="grid gap-3 sm:grid-cols-2">
              {cards.map((card, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={card.title}
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={`group flex items-center justify-between rounded-[24px] border px-4 py-4 text-left transition sm:px-5 ${
                      isActive
                        ? "border-[#0d2d47] bg-[#0d2d47] text-white"
                        : "border-[#0d2d47]/12 bg-white/55 text-[#0d2d47] hover:border-[#0d2d47]/30 hover:bg-white"
                    }`}
                  >
                    <div className="pr-4">
                      {/* <div
                        className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${
                          isActive ? "text-white/58" : "text-[#0d2d47]/45"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")} / {card.label}
                      </div> */}
                      <div className="mt-2 text-lg font-semibold leading-tight sm:text-[22px]">
                        {card.title}
                      </div>
                    </div>

                    <span
                      className={`shrink-0 text-xl transition-transform duration-200 ${
                        isActive
                          ? "translate-x-0 text-white"
                          : "text-[#0d2d47]/38 group-hover:translate-x-1"
                      }`}
                      aria-hidden="true"
                    >
                      {">"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
