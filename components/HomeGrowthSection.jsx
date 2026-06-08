"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaUsers, FaTrophy, FaClock, FaGlobe } from "react-icons/fa";

const stats = [
  { icon: FaUsers, target: 200, suffix: "+", label: "Team Members" },
  { icon: FaTrophy, target: 18, suffix: "+", label: "Awards Won" },
  { icon: FaClock, target: 560, suffix: "+", label: "Projects Delivered" },
  { icon: FaGlobe, target: 455, suffix: "+", label: "Client Reviews" },
];

const contentBlocks = [
  {
    title: "Better Online Exposure",
    body: [
      "As a results-driven digital marketing company, we specialize in delivering powerful online exposure that elevates your brand's visibility, authority, and reach across global digital platforms.",
      "Our advanced digital marketing strategies are designed to attract targeted audiences, increase engagement, and convert traffic into measurable business growth.",
      "Through a strategic blend of SEO optimization, performance marketing, content strategy, and data-driven execution, we ensure your products and services are easily discoverable by the right customers at the right moment.",
      "Every campaign is engineered to maximize digital impact, strengthen brand credibility, and generate consistent, revenue-focused outcomes.",
      "Partner with us to transform your online presence into a high-performing growth engine that drives sales, builds trust, and positions your brand as a leader in the digital space.",
    ],
  },
  {
    title: "High Search Rankings",
    body: [
      "High search rankings in digital marketing refer to the strategic implementation of SEO services and advanced digital marketing techniques designed to improve a website's visibility on search engine results pages.",
      "The primary objective is to achieve higher rankings on search engines, increase organic traffic, and attract high-intent users actively searching for relevant products, services, or information.",
      "By leveraging search engine optimization, keyword research, on-page optimization, technical SEO, and authoritative content strategies, businesses can strengthen their online presence and outperform competitors.",
      "High-ranking digital marketing strategies not only improve visibility but also drive qualified leads, boost brand credibility, and generate sustainable long-term growth.",
      "Effective digital marketing and SEO solutions ensure your website is discoverable, competitive, and positioned to convert search traffic into measurable business success.",
    ],
  },
];

function CountUpNumber({ target, suffix = "+" }) {
  const [count, setCount] = useState(0);
  const numberRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const element = numberRef.current;
    if (!element) return;

    const stopAnimation = () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        stopAnimation();

        if (!entry.isIntersecting) {
          setCount(0);
          return;
        }

        const duration = 900;
        const startTime = performance.now();

        const animate = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);

          setCount(Math.floor(easedProgress * target));

          if (progress < 1) {
            frameRef.current = requestAnimationFrame(animate);
          } else {
            setCount(target);
          }
        };

        frameRef.current = requestAnimationFrame(animate);
      },
      { threshold: 0.25 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      stopAnimation();
    };
  }, [target]);

  return (
    <span ref={numberRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function HomeGrowthSection() {
  const [activeInfoTab, setActiveInfoTab] = useState(0);

  const infoTabs = [
    {
      title: "Improved Customer Reach",
      image: "/Customer reach 1.png",
      description:
        "Improved customer reach in digital marketing refers to strategically expanding your brand's visibility and influence to connect with a broader, high-potential audience across digital platforms. By leveraging digital marketing strategies, SEO, social media marketing, paid advertising, and content marketing, businesses can attract, engage, and convert customers who are actively interested in their products or services. This approach enables brands to reach new markets, increase brand awareness, drive qualified traffic, and build lasting customer relationships. Effective digital marketing efforts ensure consistent engagement, higher conversions, and sustainable growth by connecting your business with the right audience at scale.",
    },
    {
      title: "Complete Brand Control",
      image: "/brandcontrol.jpg",
      description:
        "Complete brand control in digital marketing refers to a business's ability to maintain consistent messaging, visual identity, and brand experience across all digital platforms and online touchpoints. Through strategic digital branding, content management, social media marketing, and online reputation management, brands can actively shape how they are perceived in the digital landscape. This level of control ensures brand consistency, strengthens trust, enhances brand authority, and aligns every digital interaction with your core values and long-term vision. Effective digital marketing strategies empower businesses to protect their brand image while delivering a unified, impactful presence that resonates with their target audience.",
    },
    {
      title: "Enhanced Customer Trust",
      image: "/Customer trust.jpg",
      description:
        "Enhanced customer trust in digital marketing refers to building strong credibility, reliability, and confidence in your brand through consistent, transparent, and value-driven digital experiences. By leveraging strategic branding, high-quality content, social proof, and data-backed digital marketing strategies, businesses can establish authority and foster long-term customer confidence. In today's competitive digital landscape, trust is a key driver of conversion, customer loyalty, and brand equity. Well-executed digital marketing initiatives ensure every interaction—across websites, campaigns, and digital channels—reinforces authenticity, professionalism, and dependability, guiding prospects smoothly through the sales funnel and strengthening enterprise-level brand perception.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden px-4 py-16 sm:px-6 md:px-10 md:py-24"
      style={{
        background:
          "linear-gradient(to top, #EAEBDB, #C4CFE3, #8EA5F1, #6887FB)",
      }}
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 pl-4 sm:pl-6 md:pl-10">
          <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-[#0d2d47] sm:text-5xl md:text-[72px]">
            Our Impact
            <br />
            In Numbers
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {stats.map((item) => (
            <article
              key={item.label}
              className="group rounded-[22px] border border-white/30 bg-white/20 p-4 backdrop-blur-md transition hover:bg-white/30 sm:rounded-[28px] sm:p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#0d2d47] text-lg text-white transition group-hover:scale-110 sm:mb-6 sm:h-12 sm:w-12 sm:text-xl">
                <item.icon />
              </div>

              <h3 className="text-3xl font-semibold text-[#0d2d47] sm:text-5xl md:text-[64px]">
                <CountUpNumber target={item.target} suffix={item.suffix} />
              </h3>

              <p className="mt-3 text-xs font-medium uppercase tracking-wide text-[#0d2d47]/75 sm:mt-4 sm:text-sm">
                {item.label}
              </p>
            </article>
          ))}
        </div>

<div className="mt-20 grid items-center gap-8 lg:grid-cols-2">
  {/* Content box */}
  <div className="order-2 rounded-[30px] border border-white/30 bg-white/20 p-6 backdrop-blur-md sm:p-8 lg:order-1">
    <div className="mb-8 flex flex-wrap gap-3">
      {infoTabs.map((tab, idx) => (
        <button
          key={tab.title}
          onClick={() => setActiveInfoTab(idx)}
          className={`cursor-pointer rounded-full px-5 py-2 text-sm font-medium uppercase tracking-wide transition ${
            activeInfoTab === idx
              ? "bg-[#0d2d47] text-white"
              : "bg-white/30 text-[#0d2d47] hover:bg-white/50"
          }`}
        >
          {tab.title}
        </button>
      ))}
    </div>


{/* Mobile image first - no background container */}
<div className="mb-8 lg:hidden">
  <div className="h-[360px] overflow-hidden sm:h-[440px]">
    <Image
      key={activeInfoTab}
      src={infoTabs[activeInfoTab].image}
      alt={infoTabs[activeInfoTab].title}
      width={941}
      height={1672}
      className="h-full w-full object-contain object-center transition-all duration-500"
    />
  </div>
</div>

    <h3 className="text-2xl font-semibold uppercase text-[#0d2d47] sm:text-3xl">
      {infoTabs[activeInfoTab].title}
    </h3>

    <p className="mt-4 text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
      {infoTabs[activeInfoTab].description}
    </p>
  </div>

  {/* Desktop image right */}
  <div className="hidden overflow-hidden rounded-[36px] border border-white/30 bg-white/20 p-3 backdrop-blur-md lg:block">
    <div className="h-[520px] overflow-hidden rounded-[28px]">
      <Image
        key={activeInfoTab}
        src={infoTabs[activeInfoTab].image}
        alt={infoTabs[activeInfoTab].title}
        width={941}
        height={1672}
        className="h-full w-full object-cover object-center transition-all duration-500"
      />
    </div>
  </div>
</div>
      </div>
    </section>
  );
}