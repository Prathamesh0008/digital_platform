//components\HomeGrowthSection.jsx
"use client";
 
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
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
 
  const infoTabs = useMemo(() => [
    {
      title: "Improved Customer Reach",
      image: "/Customer reach 1.png",
      imageAlt: "Improved customer reach digital marketing visual",
      description:
        "Improved customer reach in digital marketing refers to strategically expanding your brand's visibility and influence to connect with a broader, high-potential audience across digital platforms. By leveraging digital marketing strategies, SEO, social media marketing, paid advertising, and content marketing, businesses can attract, engage, and convert customers who are actively interested in their products or services. This approach enables brands to reach new markets, increase brand awareness, drive qualified traffic, and build lasting customer relationships. Effective digital marketing efforts ensure consistent engagement, higher conversions, and sustainable growth by connecting your business with the right audience at scale.",
    },
    {
      title: "Complete Brand Control",
      image: "/brandcontrol2.png",
      imageAlt: "Complete brand control digital marketing visual",
      description:
        "Complete brand control in digital marketing refers to a business's ability to maintain consistent messaging, visual identity, and brand experience across all digital platforms and online touchpoints. Through strategic digital branding, content management, social media marketing, and online reputation management, brands can actively shape how they are perceived in the digital landscape. This level of control ensures brand consistency, strengthens trust, enhances brand authority, and aligns every digital interaction with your core values and long-term vision. Effective digital marketing strategies empower businesses to protect their brand image while delivering a unified, impactful presence that resonates with their target audience.",
    },
    {
      title: "Enhanced Customer Trust",
      image: "/Enhancedcustomertrust1.png",
      imageAlt: "Enhanced customer trust digital marketing visual",
      description:
        "Enhanced customer trust in digital marketing refers to building strong credibility, reliability, and confidence in your brand through consistent, transparent, and value-driven digital experiences. By leveraging strategic branding, high-quality content, social proof, and data-backed digital marketing strategies, businesses can establish authority and foster long-term customer confidence. In today's competitive digital landscape, trust is a key driver of conversion, customer loyalty, and brand equity. Well-executed digital marketing initiatives ensure every interaction—across websites, campaigns, and digital channels—reinforces authenticity, professionalism, and dependability, guiding prospects smoothly through the sales funnel and strengthening enterprise-level brand perception.",
    },
  ], []);
  const activeInfo = infoTabs[activeInfoTab];

  useEffect(() => {
    infoTabs.forEach((tab) => {
      const img = new window.Image();
      img.src = tab.image;
    });
  }, [infoTabs]);
 
  return (
    <section
      className="relative overflow-hidden px-4 py-12 sm:px-6 md:px-10 md:py-14"
      style={{
        background:
          "linear-gradient(to top, #EAEBDB, #C4CFE3, #8EA5F1, #6887FB)",
      }}
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10">
          {/* <span className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white">
            Talk About Us
          </span> */}
 
          <h2 className="text-4xl font-semibold uppercase leading-[0.98] tracking-tight text-[#0d2d47] sm:text-5xl md:text-[58px]">
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
 
      <h3 className="text-3xl font-semibold text-[#0d2d47] sm:text-4xl md:text-[48px]">
        <CountUpNumber target={item.target} suffix={item.suffix} />
      </h3>
 
      <p className="mt-3 text-xs font-medium uppercase tracking-wide text-[#0d2d47]/75 sm:mt-4 sm:text-sm">
        {item.label}
      </p>
    </article>
  ))}
</div>
        <div className="mt-10 grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[36px] border border-white/30 bg-white/20 p-3 backdrop-blur-md">
<div className="flex h-[320px] items-center justify-center overflow-hidden rounded-[28px] bg-white/20 sm:h-[380px] lg:h-[430px]">
  <Image
    src="/Home_1.avif"
    alt="Business professionals collaborating"
    width={941}
    height={1672}
    className="h-full w-full object-cover object-center"
  />
</div>
</div>
 
          <div>
            <h3 className="text-4xl font-semibold uppercase leading-[0.98] text-[#0d2d47] sm:text-5xl md:text-[52px]">
              Why Choose
              <br />
              Nova Techscience
            </h3>
 
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#0d2d47]/75 sm:text-lg">
              <p>As a trusted name in digital marketing, Nova Techsciences delivers innovative strategies that help businesses thrive in a fast-paced digital world. We continuously stay ahead of evolving trends, platform updates, and market shifts to ensure our clients remain competitive and visible across global markets.</p>
              <p>Our approach is rooted in insight and precision. Every project begins with a deep analysis of your brand, industry, and objectives, allowing us to craft customized digital marketing solutions that address your unique challenges and opportunities.</p>
              <p>From optimizing web-based marketing campaigns to strengthening your online presence, Nova Techsciences focuses on creating impact that goes beyond visibility. We aim to build sustainable growth, stronger brand recognition, and meaningful engagement with your audience.</p>
              <p className="font-medium text-[#0d2d47]">Choose Nova Techsciences for digital marketing services worldwide, and let us guide your business through the complexities of the digital landscape.</p>
            </div>
          </div>
        </div>
 
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {contentBlocks.map((block) => (
            <article
              key={block.title}
              className="rounded-[30px] border border-white/30 bg-white/20 p-5 backdrop-blur-md md:p-6"
            >
              <h4 className="text-2xl font-semibold uppercase text-[#0d2d47] sm:text-3xl">
                {block.title}
              </h4>
 
              <div className="mt-6 space-y-4">
                {block.body.map((paragraph, idx) => (
                  <p key={idx} className="text-base leading-relaxed text-[#0d2d47]/75">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
 
        <div className="mt-10 grid items-center gap-6 lg:grid-cols-2">
          <div className="order-1 rounded-[30px] border border-white/30 bg-white/20 p-6 backdrop-blur-md sm:p-8 lg:order-1">
            <div className="mb-6 flex flex-wrap gap-3">
              {infoTabs.map((tab, idx) => (
                <button
                  key={tab.title}
                  onClick={() => setActiveInfoTab(idx)}
                  className={`cursor-pointer rounded-full px-4 py-2 text-left text-xs font-medium uppercase tracking-wide transition sm:px-5 sm:text-sm ${
                    activeInfoTab === idx
                      ? "bg-[#0d2d47] text-white"
                      : "bg-white/30 text-[#0d2d47] hover:bg-white/50"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
 
            <div className="hidden min-h-[360px] lg:block">
              <h3 className="text-2xl font-semibold uppercase text-[#0d2d47] sm:text-3xl">
                {activeInfo.title}
              </h3>
 
              <p className="mt-4 text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
                {activeInfo.description}
              </p>
            </div>
          </div>
 
        <div className="order-2 overflow-hidden rounded-[36px] border border-white/30 bg-white/20 p-3 backdrop-blur-md lg:order-2">
  <div className="h-[240px] overflow-hidden rounded-[28px] sm:h-[300px] lg:h-[350px]">
    <Image
      src={activeInfo.image}
      alt={activeInfo.imageAlt}
      width={941}
      height={1672}
      priority={activeInfoTab === 0}
      loading="eager"
      className="h-full w-full object-cover object-center"
    />
  </div>
</div>

          <div className="order-3 rounded-[30px] border border-white/30 bg-white/20 p-6 backdrop-blur-md sm:p-8 lg:hidden">
            <h3 className="text-2xl font-semibold uppercase text-[#0d2d47] sm:text-3xl">
              {activeInfo.title}
            </h3>
 
            <p className="mt-4 text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
              {activeInfo.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
 
