"use client";

import Image from "next/image";

const stats = [
  { tag: "TM", value: "200+", label: "Team Members" },
  { tag: "AW", value: "18+", label: "Awards Won" },
  { tag: "PD", value: "560+", label: "Projects Delivered" },
  { tag: "CR", value: "455+", label: "Client Reviews" },
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
      "High search rankings in digital marketing refer to the strategic implementation of SEO services and advanced digital marketing techniques designed to improve a website's visibility on search engine results pages (SERPs).",
      "The primary objective is to achieve higher rankings on search engines, increase organic traffic, and attract high-intent users actively searching for relevant products, services, or information.",
      "By leveraging search engine optimization (SEO), keyword research, on-page optimization, technical SEO, and authoritative content strategies, businesses can strengthen their online presence and outperform competitors.",
      "High-ranking digital marketing strategies not only improve visibility but also drive qualified leads, boost brand credibility, and generate sustainable long-term growth.",
      "Effective digital marketing and SEO solutions ensure your website is discoverable, competitive, and positioned to convert search traffic into measurable business success.",
    ],
  },
];

export default function HomeWhyChooseSection() {
  return (
    <section className="bg-[#FFF8F5] px-4 py-14 sm:px-6 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-medium text-[#0d2d47] sm:text-4xl md:text-5xl">
          Talk About Us
        </h2>

        <div className="mt-8 grid gap-4 rounded-3xl bg-[linear-gradient(120deg,#0d2d47_0%,#1c3f67_50%,#5A7EFF_100%)] p-5 text-white sm:grid-cols-2 lg:grid-cols-4 lg:p-7">
          {stats.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur"
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-xs font-semibold tracking-widest">
                {item.tag}
              </div>
              <p className="mt-3 text-3xl font-semibold leading-none">{item.value}</p>
              <p className="mt-2 text-sm text-white/90">{item.label}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-3xl border border-[#d7dfef] bg-white shadow-[0_18px_35px_-24px_rgba(13,45,71,0.45)]">
            <Image
              src="/about1.jpg"
              alt="Business professionals collaborating"
              width={900}
              height={1100}
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>

          <div className="rounded-3xl border border-[#d7dfef] bg-white p-6 shadow-[0_18px_35px_-24px_rgba(13,45,71,0.45)] sm:p-8">
            <h3 className="text-3xl font-semibold tracking-tight text-[#0d2d47] sm:text-4xl md:text-5xl">
              WHY CHOOSE <span className="text-[#5A7EFF]">Nova Techscience</span>
            </h3>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#0d2d47]/85 md:text-lg">
              <p>
                As a trusted name in digital marketing, Nova Techsciences delivers innovative
                strategies that help businesses thrive in a fast-paced digital world. We
                continuously stay ahead of evolving trends, platform updates, and market shifts to
                ensure our clients remain competitive and visible across global markets.
              </p>
              <p>
                Our approach is rooted in insight and precision. Every project begins with a deep
                analysis of your brand, industry, and objectives, allowing us to craft customized
                digital marketing solutions that address your unique challenges and opportunities.
                Backed by a team of experienced professionals, we combine creative expertise with
                advanced technologies to execute strategies that drive real, measurable results.
              </p>
              <p>
                From optimizing web-based marketing campaigns to strengthening your online presence,
                Nova Techsciences focuses on creating impact that goes beyond visibility. We aim to
                build sustainable growth, stronger brand recognition, and meaningful engagement
                with your audience.
              </p>
              <p>
                Choose Nova Techsciences for best digital marketing services worldwide, and let us
                guide your business through the complexities of the digital landscape, turning
                strategy into success and potential into performance.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 space-y-6">
          {contentBlocks.map((block) => (
            <article
              key={block.title}
              className="overflow-hidden rounded-3xl border border-[#d7dfef] bg-white shadow-[0_18px_35px_-24px_rgba(13,45,71,0.45)]"
            >
              <header className="flex items-center justify-between bg-[#0d2d47] px-5 py-4 text-white sm:px-7">
                <h4 className="text-xl font-semibold sm:text-2xl">{block.title}</h4>
                <span className="text-2xl text-[#7ef0c4]">-&gt;</span>
              </header>
              <div className="bg-white px-5 py-6 sm:px-7">
                {block.body.map((paragraph) => (
                  <p key={paragraph} className="mb-3 text-base leading-relaxed text-[#0d2d47]/85 last:mb-0 md:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
