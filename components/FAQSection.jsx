//components\FAQSection.jsx
"use client";

import { useState } from "react";
import { FaQuestion, FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What makes Nova Techscience one of the leading digital marketing agencies worldwide?",
    answer:
      "Nova Techscience focuses on result-driven digital strategies, SEO, website development, branding, and performance marketing to help businesses grow globally.",
  },
  {
    question: "What digital marketing services does Nova Techscience offer for international clients?",
    answer:
      "We offer SEO, social media marketing, paid ads, website development, content strategy, branding, graphic design, and online growth solutions.",
  },
  {
    question: "How does Nova Techscience stand out from other global advertising agencies?",
    answer:
      "Our approach combines creative design, technical execution, data-driven campaigns, and customized strategies for every business.",
  },
  {
    question: "How does Nova Techscience ensure the success of international digital marketing campaigns?",
    answer:
      "We use audience research, SEO planning, campaign tracking, analytics, performance optimization, and regular strategy updates.",
  },
  {
    question: "Which industries does Nova Techscience serve globally?",
    answer:
      "We work with healthcare, logistics, education, real estate, ecommerce, technology, manufacturing, and service-based businesses.",
  },
  {
    question: "Can Nova Techscience assist with mobile app development for international clients?",
    answer:
      "Yes, Nova Techscience can support mobile app UI, design planning, development coordination, and digital launch strategies.",
  },
  {
    question: "Does Nova Techscience provide professional video production services?",
    answer:
      "Yes, we support promotional videos, brand videos, reels, ads creatives, and visual content for digital campaigns.",
  },
  {
    question: "How experienced is the team at Nova Techscience in handling worldwide digital campaigns?",
    answer:
      "Our team works with modern marketing tools, SEO systems, design platforms, and campaign strategies to support clients across different markets.",
  },
  {
    question: "What are the benefits of choosing Nova Techscience for graphic design and creative services?",
    answer:
      "You get professional visuals, consistent branding, social media creatives, ad banners, website graphics, and marketing-ready designs.",
  },
  {
    question: "Can Nova Techscience help build a strong online presence for global brands?",
    answer:
      "Yes, we help brands improve online visibility, website performance, search rankings, social presence, and customer engagement.",
  },
  {
    question: "How does Nova Techscience maintain its reputation as a top international digital marketing agency?",
    answer:
      "We focus on quality work, transparent communication, measurable results, updated strategies, and long-term client success.",
  },
  {
    question: "Why should businesses choose Nova Techscience as their global marketing partner?",
    answer:
      "Businesses choose Nova Techscience for reliable digital solutions, creative execution, SEO expertise, and growth-focused marketing support.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
   <section
  className="relative overflow-hidden px-4 py-16 sm:px-6 md:px-10 md:py-24"
  style={{
    background:
      "linear-gradient(to top, #EAEBDB, #C4CFE3, #8EA5F1, #7392FB)",
  }}
>
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div className="border-l border-black/15 pl-4 sm:pl-6 md:pl-10">
            {/* <span className="mb-5 inline-flex rounded-full bg-black px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white">
              FAQ
            </span> */}

            <h2 className="text-4xl font-semibold uppercase leading-[0.9] tracking-tight text-black sm:text-5xl md:text-[72px]">
              Frequently
              <br />
              Asked
              <br />
              Questions
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-relaxed text-black/65 md:text-base">
            Find clear answers about Nova Techscience services, global digital
            marketing support, SEO, branding, creative work, and online growth
            solutions.
          </p>
        </div>

        <div className="grid items-start gap-4 lg:grid-cols-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-[26px] border transition-all duration-300 ${
                  isOpen
                    ? "border-black/20 bg-black text-white shadow-[0_18px_45px_rgba(0,0,0,0.14)]"
                    : "border-black/10 bg-white/35 text-black hover:bg-white/55"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full cursor-pointer items-start justify-between gap-5 px-5 py-5 text-left sm:px-6"
                >
                  <div className="flex gap-4">
                    <span
                      className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs ${
                        isOpen
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      }`}
                    >
                      <FaQuestion />
                    </span>

                    <h3 className="text-sm font-semibold leading-6 md:text-base">
                      {faq.question}
                    </h3>
                  </div>

                  <span
                    className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs ${
                      isOpen
                        ? "border-white/25 text-white"
                        : "border-black/15 text-black"
                    }`}
                  >
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`px-5 pb-6 pl-[68px] text-sm leading-7 md:text-base ${
                        isOpen ? "text-white/75" : "text-black/65"
                      }`}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}