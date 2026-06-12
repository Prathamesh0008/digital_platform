//app\blog\[slug]\page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BlogInterlinkSection from "@/components/BlogInterlinkSection";
import BlogInlineLinkText from "@/components/BlogInlineLinkText";
import InternalLinkSection from "@/components/InternalLinkSection";
import AiPoweredLeadGenerationForServiceBusinesses from "@/components/AiPoweredLeadGenerationForServiceBusinesses";
import HowSeoAndGeoWorkTogether from "@/components/HowSeoAndGeoWorkTogether";
import LandingPageTipsForBetterPerformanceAds from "@/components/LandingPageTipsForBetterPerformanceAds";
import WhyBrandStrategyMattersBeforeWebsiteDesign from "@/components/WhyBrandStrategyMattersBeforeWebsiteDesign";
import WhyEveryBrandNeedsConversionFocusedWebsite from "@/components/WhyEveryBrandNeedsConversionFocusedWebsite";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blog";
import { getBlogRelatedLinks, getRelatedBlogArticles } from "@/lib/internalLinks";
import { absoluteUrl, siteName } from "@/lib/site";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return {};
  }

  return {
    title: `${blog.title} | ${siteName}`,
    description: blog.excerpt,
    alternates: {
      canonical: `/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      url: absoluteUrl(`/blog/${blog.slug}`),
      images: [{ url: blog.image, alt: blog.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);
  const related = blogs.filter((item) => item.slug !== slug).slice(0, 3);
  const relatedBlogs = getRelatedBlogArticles(slug);

  if (!blog) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    image: absoluteUrl(blog.image),
    author: {
      "@type": "Organization",
      name: blog.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
    },
    mainEntityOfPage: absoluteUrl(`/blog/${blog.slug}`),
  };

  if (slug === "how-seo-and-geo-work-together") {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the difference between SEO and GEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO focuses on improving visibility in traditional search engines like Google and Bing, while GEO focuses on increasing visibility within AI-powered platforms such as ChatGPT, Gemini, Perplexity, and Copilot. Together, SEO and GEO help businesses reach users through both search results and AI-generated answers.",
          },
        },
        {
          "@type": "Question",
          name: "Why is GEO important for modern search visibility?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GEO is important because more users are relying on AI assistants to find information and make decisions. GEO helps businesses become trusted sources that AI systems can understand, reference, and recommend in generated responses.",
          },
        },
        {
          "@type": "Question",
          name: "Can GEO replace traditional SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, GEO cannot replace SEO. Traditional SEO remains essential for search engine rankings and organic traffic. GEO complements SEO by helping AI systems understand your expertise and brand authority.",
          },
        },
        {
          "@type": "Question",
          name: "How do I implement an International GEO strategy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An International GEO strategy involves creating localized content, optimizing brand entities, building regional authority, implementing structured data, and publishing expert-led content that AI systems can easily understand and reference.",
          },
        },
        {
          "@type": "Question",
          name: "What industries benefit most from SEO and GEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Industries such as healthcare, legal services, SaaS, technology, finance, consulting, manufacturing, and eCommerce benefit significantly from combining SEO and GEO to improve visibility and authority.",
          },
        },
        {
          "@type": "Question",
          name: "How can a GEO agency help my business grow?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A GEO agency helps optimize content for AI-driven search experiences by improving entity recognition, authority signals, structured data, and AI-friendly content, increasing the chances of being cited by AI platforms.",
          },
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([articleSchema, faqSchema]),
          }}
        />
        <HowSeoAndGeoWorkTogether />
      </>
    );
  }

  if (slug === "why-every-brand-needs-a-conversion-focused-website") {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a conversion-focused website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A conversion-focused website is designed to encourage visitors to take specific actions such as contacting your business, requesting a quote, scheduling a consultation, or making a purchase. Every design element, message, and call-to-action supports business growth and customer acquisition.",
          },
        },
        {
          "@type": "Question",
          name: "Why is website conversion optimization important?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Website conversion optimization helps businesses generate more leads and sales from existing traffic. Instead of spending more money on advertising, companies improve user experience, messaging, and design to increase the percentage of visitors who become customers.",
          },
        },
        {
          "@type": "Question",
          name: "How does a conversion-focused website improve SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A conversion-focused website improves SEO by creating better user experiences, reducing bounce rates, increasing engagement, and improving website performance. Search engines reward websites that provide value and satisfy user intent effectively.",
          },
        },
        {
          "@type": "Question",
          name: "What are the most important elements of a high-converting website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Key elements include clear messaging, strong calls-to-action, trust signals, fast loading speeds, mobile responsiveness, easy navigation, customer testimonials, and strategic page layouts. Together these factors help guide visitors toward conversion actions.",
          },
        },
        {
          "@type": "Question",
          name: "Can a conversion-focused website increase sales?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A well-designed conversion-focused website removes barriers, builds trust, and simplifies decision-making. This often leads to higher conversion rates, improved lead quality, and increased sales without requiring additional website traffic.",
          },
        },
        {
          "@type": "Question",
          name: "How often should a business update its website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most businesses should review and optimize their website every 6 to 12 months. Regular updates ensure content remains relevant, user experience stays competitive, and conversion opportunities continue improving as customer behavior evolves.",
          },
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([articleSchema, faqSchema]),
          }}
        />
        <WhyEveryBrandNeedsConversionFocusedWebsite />
      </>
    );
  }

  if (slug === "ai-powered-lead-generation-for-service-businesses") {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is AI-powered lead generation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI-powered lead generation uses artificial intelligence to identify, attract, qualify, and nurture potential customers automatically. It helps businesses improve lead quality, automate repetitive tasks, and increase conversion opportunities while reducing manual effort.",
          },
        },
        {
          "@type": "Question",
          name: "How does AI improve lead quality?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI analyzes customer behavior, engagement patterns, demographics, and intent signals to identify prospects most likely to convert. This allows businesses to focus on high-quality leads instead of spending time on unqualified inquiries.",
          },
        },
        {
          "@type": "Question",
          name: "Can small service businesses use AI lead generation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Modern AI tools are accessible to businesses of all sizes. Small service businesses can use AI chatbots, CRM automation, email personalization, and predictive analytics to improve lead generation without large marketing teams.",
          },
        },
        {
          "@type": "Question",
          name: "What is the role of AI chatbots in lead generation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI chatbots engage website visitors instantly, answer questions, collect customer information, schedule appointments, and qualify leads. This improves response times and helps businesses capture opportunities around the clock.",
          },
        },
        {
          "@type": "Question",
          name: "How does GEO support AI lead generation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GEO helps businesses appear in AI-generated answers on platforms like ChatGPT, Gemini, and Perplexity. Increased AI visibility can generate highly qualified leads from users actively seeking recommendations and solutions.",
          },
        },
        {
          "@type": "Question",
          name: "Is AI replacing human sales teams?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. AI enhances sales teams by automating repetitive tasks and providing insights. Human expertise remains essential for relationship building, strategic conversations, negotiations, and closing complex service-based sales.",
          },
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([articleSchema, faqSchema]),
          }}
        />
        <AiPoweredLeadGenerationForServiceBusinesses />
      </>
    );
  }

  if (slug === "landing-page-tips-for-performance-ads") {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why are landing pages important for Performance Ads campaigns?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Landing pages are important because they directly influence conversion rates, cost per acquisition, and return on ad spend. A well-optimized landing page aligns with user intent, provides a seamless experience, and guides visitors toward a specific action. Strong landing pages help businesses maximize advertising budgets while generating higher-quality leads and better campaign performance.",
          },
        },
        {
          "@type": "Question",
          name: "What makes a high-converting landing page for Google Ads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A high-converting landing page typically includes a compelling headline, clear value proposition, strong call-to-action, trust-building elements, fast loading speed, and mobile-friendly design. The page should closely match the advertisement's message and remove distractions that could prevent users from completing the desired action.",
          },
        },
        {
          "@type": "Question",
          name: "How can businesses reduce their cost per lead using landing page optimization?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Businesses can reduce cost per lead by improving page relevance, simplifying forms, enhancing mobile usability, and increasing conversion rates. When landing pages perform better, advertising platforms often reward campaigns with improved Quality Scores, resulting in lower click costs and more efficient lead generation.",
          },
        },
        {
          "@type": "Question",
          name: "Should businesses create separate landing pages for different European countries?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Separate landing pages often perform significantly better because they can address local languages, currencies, customer expectations, and regional regulations. Country-specific landing pages create a more personalized user experience, improve trust, and increase conversion rates across European markets.",
          },
        },
        {
          "@type": "Question",
          name: "How does landing page speed affect Performance Ads results?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Landing page speed directly affects user experience and advertising effectiveness. Slow-loading pages often experience higher bounce rates and lower conversions. Faster pages keep visitors engaged, improve campaign performance metrics, and help businesses generate more leads without increasing advertising spend.",
          },
        },
        {
          "@type": "Question",
          name: "What is the ideal number of form fields on a landing page?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most high-performing landing pages use only essential form fields such as name, email address, company name, and phone number. Shorter forms generally increase conversion rates because they reduce friction and make it easier for visitors to complete the desired action quickly.",
          },
        },
        {
          "@type": "Question",
          name: "How does GEO help landing pages appear in AI search results?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Generative Engine Optimization (GEO) helps landing pages become more visible in AI-powered search platforms such as ChatGPT, Gemini, Perplexity, and Google's AI Overviews. GEO focuses on creating structured, authoritative, and answer-focused content that AI systems can easily understand, summarize, and recommend to users.",
          },
        },
        {
          "@type": "Question",
          name: "What role does trust play in landing page conversions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trust is one of the strongest factors influencing conversion decisions. Testimonials, case studies, client logos, certifications, security badges, and transparent privacy policies help reassure visitors that a business is credible. Higher trust levels often result in increased lead generation and stronger advertising performance.",
          },
        },
        {
          "@type": "Question",
          name: "How often should a landing page be tested and optimized?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Landing pages should be reviewed and optimized continuously. Businesses should regularly analyze user behavior, conversion data, and campaign performance while conducting A/B tests on headlines, calls-to-action, forms, and page layouts. Ongoing optimization helps maintain competitive performance and maximize return on investment.",
          },
        },
        {
          "@type": "Question",
          name: "Why should SEO, GEO, and Performance Ads work together?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO, GEO, and Performance Ads are most effective when integrated into a unified strategy. SEO improves visibility and authority, GEO increases AI search discoverability, and Performance Ads generate immediate traffic. Together, they create a comprehensive digital marketing ecosystem that drives sustainable growth and higher-quality conversions.",
          },
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([articleSchema, faqSchema]),
          }}
        />
        <LandingPageTipsForBetterPerformanceAds />
      </>
    );
  }

  if (slug === "why-brand-strategy-matters-before-design") {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why should brand strategy come before website design?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Brand strategy should come before website design because it defines your positioning, messaging, audience, and business goals. A website built without a clear strategy may look attractive but struggle to communicate value or generate conversions. Strategy ensures every design decision supports long-term business growth and customer engagement.",
          },
        },
        {
          "@type": "Question",
          name: "Can a website succeed without a brand strategy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A website can function without a brand strategy, but it is unlikely to perform at its full potential. Without clear positioning and messaging, businesses often face low conversion rates, inconsistent communication, and weaker customer trust. Brand strategy provides the foundation that helps websites become effective marketing and sales tools.",
          },
        },
        {
          "@type": "Question",
          name: "How does brand strategy improve website conversions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Brand strategy improves website conversions by creating clarity around who you serve, what problems you solve, and why customers should choose your business. When visitors immediately understand your value proposition, they are more likely to trust your brand, engage with your content, and take action.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between branding and website design?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Branding focuses on strategy, positioning, messaging, identity, and customer perception, while website design focuses on presenting that brand digitally. Branding determines what your business stands for, and website design communicates that message visually. Effective websites are built upon strong branding rather than design trends alone.",
          },
        },
        {
          "@type": "Question",
          name: "How does brand strategy support SEO performance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Brand strategy strengthens SEO by helping businesses create focused content, establish topical authority, and communicate expertise consistently. Search engines increasingly reward brands that demonstrate trust, relevance, and authority. A clear strategy makes keyword targeting, content marketing, and user engagement more effective over time.",
          },
        },
        {
          "@type": "Question",
          name: "Does brand strategy help businesses appear in AI search results?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Brand strategy helps businesses establish consistent brand signals, authoritative content, and recognizable expertise across digital channels. AI-powered search platforms such as ChatGPT, Google AI Overviews, Gemini, and Perplexity often favor brands that demonstrate authority, consistency, and trustworthiness within their industry.",
          },
        },
        {
          "@type": "Question",
          name: "What are the key elements of a successful brand strategy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A successful brand strategy typically includes audience research, brand positioning, value proposition development, messaging frameworks, competitive differentiation, visual identity guidelines, and customer experience planning. Together, these elements create a consistent and memorable brand that supports marketing, sales, and website performance.",
          },
        },
        {
          "@type": "Question",
          name: "How does brand strategy influence website content?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Brand strategy provides the direction for website content by defining tone of voice, key messages, customer pain points, and business objectives. This ensures that every page communicates a consistent message and helps visitors understand the value of your products or services more effectively.",
          },
        },
        {
          "@type": "Question",
          name: "When should a business invest in brand strategy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Businesses should invest in brand strategy before launching a new website, entering a new market, rebranding, or scaling marketing efforts. Establishing a strategic foundation early helps avoid costly redesigns, improves marketing effectiveness, and creates a stronger customer experience across all channels.",
          },
        },
        {
          "@type": "Question",
          name: "Why do many website redesign projects fail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many website redesigns fail because businesses focus on visual improvements without addressing deeper branding issues. If positioning, messaging, and audience understanding remain unclear, a new design alone rarely improves results. Successful redesigns start with strategy and then translate that strategy into the website experience.",
          },
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([articleSchema, faqSchema]),
          }}
        />
        <WhyBrandStrategyMattersBeforeWebsiteDesign />
      </>
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#EAEBDB] text-[#0d2d47]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <section
        className="relative px-4 pb-12 pt-28 sm:px-6 sm:pt-32 md:px-10 md:pb-20 md:pt-40"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 38%, #8EA5F1 78%, #7392FB 100%)",
        }}
      >
        <div className="relative mx-auto max-w-[1180px]">
          <Link
            href="/blog"
            className="mb-7 inline-flex rounded-full border border-[#0d2d47]/15 bg-white/30 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] backdrop-blur-md transition hover:bg-white/60 sm:px-5 sm:text-xs"
          >
            {"<- Back To Blog"}
          </Link>

          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#0d2d47] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-white sm:px-5 sm:text-xs">
              {blog.category}
            </span>

            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#0d2d47]/60 sm:text-xs">
              {blog.date} {" | "} {blog.readTime}
            </span>
          </div>

          <h1 className="max-w-5xl text-[34px] font-semibold uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[78px]">
            {blog.title}
          </h1>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-[#0d2d47]/72 sm:text-base md:text-lg md:leading-8">
            {blog.excerpt}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
            <p className="rounded-full bg-white/35 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.13em] text-[#0d2d47]/70 backdrop-blur-md sm:px-5 sm:text-sm">
              By {blog.author}
            </p>

            <p className="rounded-full bg-white/35 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.13em] text-[#0d2d47]/70 backdrop-blur-md sm:px-5 sm:text-sm">
              NovaTech Sciences
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1180px]">
          <div className="relative h-[260px] overflow-hidden rounded-[24px] border border-white/45 shadow-[0_20px_70px_rgba(13,45,71,0.12)] sm:h-[360px] md:h-[480px] md:rounded-[34px] lg:h-[560px]">
           
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2d47]/20 via-transparent to-transparent" />
          </div>

          <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[0.72fr_1.28fr]">
            <aside className="h-fit rounded-[24px] border border-[#0d2d47]/10 bg-white/45 p-5 shadow-[0_18px_50px_rgba(13,45,71,0.07)] backdrop-blur-md lg:sticky lg:top-28 lg:p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#0d2d47]/50">
                In This Article
              </p>

              <div className="mt-5 grid gap-3">
                {blog.content.map((section, index) => (
                  <a
                    key={section.heading}
                    href={`#section-${index}`}
                    className="rounded-2xl bg-white/45 px-4 py-3 text-sm font-medium leading-5 text-[#0d2d47]/75 transition hover:bg-[#0d2d47] hover:text-white"
                  >
                    {index + 1}. {section.heading}
                  </a>
                ))}
              </div>

              <div className="mt-8 rounded-[24px] bg-[#0d2d47] p-5 text-white sm:p-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/55">
                  Need Growth?
                </p>

                <h3 className="mt-3 text-xl font-semibold leading-tight sm:text-2xl">
                  Build better visibility with NovaTech.
                </h3>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#0d2d47] transition hover:bg-[#EAEBDB]"
                >
                  Start Project {"->"}
                </Link>
              </div>
            </aside>

            <article className="rounded-[24px] border border-[#0d2d47]/10 bg-white/50 p-5 shadow-[0_18px_55px_rgba(13,45,71,0.1)] backdrop-blur-md sm:p-6 md:rounded-[34px] md:p-10">
              {blog.content.map((section, index) => (
                <section
                  key={section.heading}
                  id={`section-${index}`}
                  className="border-b border-[#0d2d47]/10 py-8 first:pt-0 last:border-b-0 last:pb-0 md:py-9"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#0d2d47] text-sm font-medium text-white sm:h-11 sm:w-11">
                    {index + 1}
                  </div>

                  <h2 className="text-2xl font-semibold uppercase leading-tight sm:text-3xl md:text-4xl">
                    {section.heading}
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-[#0d2d47]/72 sm:text-base sm:leading-8 md:text-lg">
                    <BlogInlineLinkText currentPath={`/blog/${blog.slug}`}>
                      {section.body}
                    </BlogInlineLinkText>
                  </p>
                </section>
              ))}
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#6887FB] px-4 py-12 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#0d2d47]/60">
                Continue Reading
              </p>

              <h2 className="mt-3 text-3xl font-semibold uppercase leading-tight text-[#0d2d47] sm:text-4xl">
                Related Articles
              </h2>
            </div>

            <Link
              href="/blog"
              className="w-fit rounded-full bg-[#0d2d47] px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[#0d2d47]"
            >
              View All Blogs
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="group rounded-[24px] border border-white/35 bg-white/25 p-5 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/45 md:rounded-[26px]"
              >
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-[#0d2d47]/55">
                  {item.category}
                </p>

                <h3 className="text-lg font-semibold uppercase leading-tight sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm font-medium text-[#0d2d47]">
                  Read More {"->"}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BlogInterlinkSection items={relatedBlogs} />

      <InternalLinkSection
        title="Related Services"
        intro="Continue from this article into the service pages and proof pages most closely connected to the topic."
        items={getBlogRelatedLinks(blog.category)}
      />
    </main>
  );
}
