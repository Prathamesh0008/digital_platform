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
  const hasStarted = useRef(false);

  useEffect(() => {
    const element = numberRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted.current) return;

        hasStarted.current = true;

        const duration = 1600;
        const startTime = performance.now();

        const animate = (currentTime) => {
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          const currentValue = Math.floor(easedProgress * target);

          setCount(currentValue);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(target);
          }
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={numberRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function HomeWhyChooseSection() {
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
      className="relative px-4 py-16 sm:px-6 md:px-10 md:py-24"
      style={{
        background:
          "linear-gradient(to top, #EAEBDB, #C4CFE3, #8EA5F1, #7392FB)",
      }}
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Stats Section */}
        <div className="mb-16 md:mb-24">
          <div className="mb-8 pl-4 sm:pl-6 md:pl-10">
            <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-black sm:text-5xl md:text-[72px]">
              Our Impact
              <br />
              In Numbers
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <article
                key={item.label}
                className="group border-l border-black/15 bg-white/15 px-5 py-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/25 sm:px-6 md:px-8 md:py-8"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-black text-xl text-white transition-transform duration-300 group-hover:scale-110">
                  <item.icon />
                </div>

                <h3 className="text-5xl font-semibold leading-none tracking-tight text-black md:text-[64px]">
                  <CountUpNumber target={item.target} suffix={item.suffix} />
                </h3>

                <p className="mt-4 text-sm font-medium uppercase tracking-wide text-black/70 md:text-base">
                  {item.label}
                </p>

                <div className="mt-6 h-px w-0 bg-black/30 transition-all duration-300 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="overflow-hidden border-l border-black/15 pl-4 sm:pl-6 md:pl-10">
            <div className="overflow-hidden rounded-[36px] border border-white/30 bg-white/20 p-3 backdrop-blur-md">
              <div className="h-[420px] overflow-hidden rounded-[28px] sm:h-[480px] lg:h-[560px]">
                <Image
                  src="/Home_1.png"
                  alt="Business professionals collaborating"
                  width={941}
                  height={1672}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="border-l border-black/15 pl-4 sm:pl-6 md:pl-10">
            <h3 className="text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-black sm:text-5xl md:text-[64px]">
              Why Choose
              <br />
              Nova Techscience
            </h3>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-black/75 sm:text-lg md:text-[21px]">
              <p>
                As a trusted name in digital marketing, Nova Techsciences
                delivers innovative strategies that help businesses thrive in a
                fast-paced digital world. We continuously stay ahead of evolving
                trends, platform updates, and market shifts to ensure our clients
                remain competitive and visible across global markets.
              </p>

              <p>
                Our approach is rooted in insight and precision. Every project
                begins with a deep analysis of your brand, industry, and
                objectives, allowing us to craft customized digital marketing
                solutions that address your unique challenges and opportunities.
              </p>

              <p>
                From optimizing web-based marketing campaigns to strengthening
                your online presence, Nova Techsciences focuses on creating
                impact that goes beyond visibility. We aim to build sustainable
                growth, stronger brand recognition, and meaningful engagement
                with your audience.
              </p>

              <p className="font-medium text-black">
                Choose Nova Techsciences for digital marketing services
                worldwide, and let us guide your business through the
                complexities of the digital landscape.
              </p>
            </div>

            <div className="mt-10 h-px w-full bg-black/20" />
          </div>
        </div>

        {/* Content Blocks */}
        <div className="mt-16 space-y-6 md:mt-24">
          {contentBlocks.map((block) => (
            <article
              key={block.title}
              className="overflow-hidden border-l border-black/15 bg-white/15 backdrop-blur-sm"
            >
              <header className="flex items-center justify-between border-b border-black/15 px-5 py-5 sm:px-7">
                <h4 className="text-2xl font-medium uppercase tracking-tight text-black sm:text-3xl">
                  {block.title}
                </h4>

                <span className="text-3xl text-black">→</span>
              </header>

              <div className="px-5 py-6 sm:px-7">
                {block.body.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="mb-4 text-base leading-relaxed text-black/75 last:mb-0 md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Interactive Info Section - Same as HomeGrowthSection */}
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
                      ? "bg-black text-white"
                      : "bg-white/30 text-black hover:bg-white/50"
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

            <h3 className="text-2xl font-semibold uppercase text-black sm:text-3xl">
              {infoTabs[activeInfoTab].title}
            </h3>

            <p className="mt-4 text-base leading-relaxed text-black/75 md:text-lg">
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