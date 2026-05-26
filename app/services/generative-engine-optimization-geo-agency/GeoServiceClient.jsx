"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

const aiPlatforms = [
  "Google AI Overviews",
  "Google AI Mode",
  "ChatGPT",
  "Gemini",
  "Perplexity",
  "Claude",
  "Microsoft Copilot",
  "Voice Search",
];

const stats = [
  {
    value: "25%",
    label: "Potential traditional search volume drop by 2026",
  },
  {
    value: "40%",
    label: "Potential visibility lift from GEO methods",
  },
  {
    value: "3",
    label: "SEO, AEO and GEO working together",
  },
];

const geoQuestions = [
  "Can AI systems clearly understand who you are?",
  "Can AI platforms trust your content enough to cite it?",
  "Can your website become a preferred source for answers?",
];

const geoFocus = [
  "Google AI Overviews",
  "Google AI Mode",
  "ChatGPT responses",
  "Perplexity citations",
  "Gemini answers",
  "Voice search",
  "Featured snippets",
  "People Also Ask results",
  "AI-powered recommendation engines",
];

const agencyApproach = [
  "AI search visibility audit",
  "SEO and GEO keyword mapping",
  "AEO question-based content planning",
  "Technical SEO and crawlability improvement",
  "Structured data and schema markup",
  "Entity-based content optimisation",
  "Topic authority development",
  "Brand mention and citation strategy",
  "Conversion-focused landing page improvement",
  "GEO performance tracking",
];

const benefits = [
  {
    title: "Increase AI answer visibility",
    text: "Help AI engines understand when your brand should appear in answers, summaries, and recommendations.",
  },
  {
    title: "Make content easier to trust",
    text: "Structure and enrich pages so AI systems can interpret your expertise and surface your content confidently.",
  },
  {
    title: "Win AI-led search traffic",
    text: "Capture visits from users who start inside AI tools rather than traditional search pages.",
  },
  {
    title: "Strengthen your brand entity",
    text: "Build clearer signals around who you are, what you do, and why your business is credible.",
  },
  {
    title: "Improve conversion quality",
    text: "Reach people with stronger intent by answering the questions they ask before they choose a provider.",
  },
  {
    title: "Protect future search visibility",
    text: "Stay discoverable as AI engines evolve and search behaviour shifts across channels.",
  },
];

const whoNeedsGeo = [
  "Your customers search for services before buying",
  "You want visibility in AI Overviews and ChatGPT-style answers",
  "Your competitors are already mentioned in AI search results",
  "Your website has content but low authority signals",
  "Your SEO rankings are not converting into enough leads",
  "Your brand is not clearly understood by search engines",
  "You operate in competitive markets such as Europe, the US or India",
];

const businessTypes = [
  ["B2B companies", "Improves brand authority and expert visibility"],
  ["Digital marketing brands", "Helps appear in AI-led service comparisons"],
  ["SaaS companies", "Supports product explanation and category ownership"],
  [
    "Healthcare and pharma websites",
    "Improves factual content structure and trust signals",
  ],
  ["Ecommerce brands", "Helps AI engines understand product value"],
  [
    "Local and international service providers",
    "Strengthens regional and global discovery",
  ],
];

const services = [
  {
    no: "01",
    title: "AI Search Visibility Audit",
    text: "An AI search visibility audit identifies how your brand appears across Google AI Overviews, ChatGPT, Gemini, Perplexity and traditional search results. Nova Techscience reviews whether AI systems can recognise your brand, services, products, expertise and trust signals.",
    points: [
      "Current SEO rankings",
      "AI Overview visibility",
      "Brand entity strength",
      "Competitor AI mentions",
      "Content gaps",
      "Schema markup quality",
      "Internal linking structure",
      "Technical SEO issues",
      "Authority and citation signals",
      "Search intent coverage",
    ],
    summary:
      "This audit gives your business a clear starting point. Instead of guessing what to optimise, we identify where AI systems are failing to understand or trust your brand.",
  },
  {
    no: "02",
    title: "GEO Content Strategy",
    text: "A GEO content strategy creates clear, factual and structured content that AI systems can easily interpret, summarise and cite. We build service pages, blogs, comparison pages, FAQs, guides and landing pages designed for humans and AI engines.",
    points: [
      "Question-based headings",
      "40-60 word direct answers",
      "Entity-rich explanations",
      "Statistics and expert references",
      "Clear definitions",
      "Comparison tables",
      "FAQ blocks",
      "Step-by-step sections",
      "Internal link opportunities",
      "Natural keyword integration",
    ],
    summary:
      "GEO content is not keyword stuffing. It is structured, helpful and complete content that gives AI models enough context to understand your expertise.",
  },
  {
    no: "03",
    title: "AEO Answer Engine Optimization",
    text: "AEO helps your content appear in direct answers, Featured Snippets, People Also Ask, voice search and conversational AI responses. We optimise each section so it can work as an independent answer.",
    points: [
      "Short direct answers below headings",
      "FAQ schema",
      "Natural question phrases",
      "Voice-search-friendly language",
      "Clear service definitions",
      "Simple explanations",
      "Snippet-ready paragraphs",
    ],
    summary:
      "AEO makes your content easier to extract. This improves your chances of appearing in AI summaries, voice results and Google answer-style features.",
  },
  {
    no: "04",
    title: "Technical GEO Implementation",
    text: "Technical GEO ensures AI crawlers and search engines can access, understand and classify your website correctly. Even strong content can fail if your site has poor technical structure.",
    points: [
      "Schema markup implementation",
      "Service schema",
      "FAQ schema",
      "Article schema",
      "HowTo schema",
      "Breadcrumb schema",
      "Clean heading hierarchy",
      "Internal linking improvements",
      "Page speed optimisation",
      "Mobile usability checks",
      "Crawlability improvements",
      "Indexing review",
      "Canonical tag checks",
    ],
    summary:
      "Technical GEO gives your content a clean machine-readable structure. This helps both Google and AI platforms understand your brand faster.",
  },
  {
    no: "05",
    title: "Entity And Brand Authority Building",
    text: "Entity optimisation helps AI systems clearly understand your brand, services, people, locations, products and industry relevance. AI engines look at entities and relationships, not only keywords.",
    points: [
      "Brand name",
      "Services",
      "Founders or leadership",
      "Target locations",
      "Industry categories",
      "Product categories",
      "Case studies",
      "Author profiles",
      "Social profiles",
      "External references",
    ],
    summary:
      "Strong entity signals help AI platforms understand what your business does, where you operate and why your content should be trusted.",
  },
  {
    no: "06",
    title: "AI Authority And Citation Building",
    text: "AI authority building improves the trust signals that make your brand more likely to be mentioned or cited in AI-generated responses. AI systems often prefer sources with expertise, accuracy and external validation.",
    points: [
      "Expert content",
      "Case studies",
      "Original insights",
      "Data-backed articles",
      "Author bios",
      "Business profiles",
      "High-quality backlinks",
      "Brand mentions",
      "Industry references",
      "Consistent NAP and company information",
    ],
    summary:
      "Authority building helps your brand move from being just another website to becoming a reliable source AI engines can recognise.",
  },
  {
    no: "07",
    title: "Competitor AI Analysis",
    text: "Competitor AI analysis shows which brands are being mentioned in AI responses and why they are earning visibility. We study competitors across Google, AI Overviews, Perplexity, ChatGPT-style answers and organic search.",
    points: [
      "Competitors earning AI mentions",
      "Topics where they are stronger",
      "Missing content opportunities",
      "Citation patterns",
      "Schema advantages",
      "Authority gaps",
      "Content formats that perform well",
      "Pages that attract AI visibility",
    ],
    summary:
      "Competitor analysis helps your business find fast GEO opportunities instead of building content blindly.",
  },
  {
    no: "08",
    title: "GEO Conversion Rate Optimisation",
    text: "GEO conversion optimisation turns AI-driven traffic into leads, enquiries and sales by improving landing pages, CTAs and user journeys. Users from AI search often have high intent and specific questions.",
    points: [
      "Clear hero messaging",
      "Trust badges",
      "Strong CTAs",
      "Service comparison sections",
      "FAQ placement",
      "Lead forms",
      "Better page flow",
      "Mobile-first design",
      "Faster loading pages",
      "Social proof and case studies",
    ],
    summary:
      "GEO brings visibility. CRO turns that visibility into business results.",
  },
];

const comparison = [
  ["SEO", "Rank in search engine results", "Organic traffic and keyword visibility"],
  ["AEO", "Appear in direct answers", "Featured snippets, PAA and voice search"],
  [
    "GEO",
    "Get understood and cited by AI engines",
    "AI Overviews, ChatGPT, Gemini and Perplexity",
  ],
  ["SEM", "Paid search visibility", "Fast traffic through ads"],
  [
    "AI SEO",
    "Combined search and AI optimisation",
    "Future-ready digital visibility",
  ],
];

const reasons = [
  "Strong understanding of SEO and AI search",
  "GEO-focused content strategy",
  "Technical SEO implementation",
  "AEO-friendly page structure",
  "International targeting for Europe, US and India",
  "Data-led competitor research",
  "Human-written, EEAT-focused content",
  "Conversion-focused service page planning",
  "Transparent reporting and strategy",
];

const process = [
  {
    title: "Discover And Audit",
    text: "We begin by analysing your website, competitors, AI search presence, SEO performance and content structure. This gives us a full picture of the gaps blocking your growth.",
  },
  {
    title: "Build The GEO Strategy",
    text: "We create a custom GEO strategy based on your services, audience, market, search intent and AI visibility opportunities, including keyword mapping, topic clusters and schema planning.",
  },
  {
    title: "Optimise Content And Structure",
    text: "We improve your website content so it answers questions clearly and supports AI extraction with headings, FAQs, direct answers, entities, internal links and trust signals.",
  },
  {
    title: "Implement Technical SEO And Schema",
    text: "We add structured data and improve technical elements so search engines and AI systems can understand your website, including Service Schema, FAQ Schema, Article Schema and HowTo Schema where relevant.",
  },
  {
    title: "Build Authority Signals",
    text: "We strengthen your brand with expert content, references, citations, backlinks, author profiles and topical depth to improve trust for users and AI systems.",
  },
  {
    title: "Monitor And Improve",
    text: "We track SEO rankings, AI visibility, traffic, conversions, keyword movement and content performance. GEO is ongoing because AI search results change frequently.",
  },
];

const results = [
  "More visibility in AI-powered search",
  "Better chances of AI citations",
  "Stronger Featured Snippet opportunities",
  "Improved People Also Ask coverage",
  "Higher organic search trust",
  "Better content clarity",
  "Stronger brand authority",
  "More qualified leads",
  "Better conversion quality",
];

const faqs = [
  {
    q: "What is a GEO service?",
    a: "A GEO service helps businesses optimise their websites and content for AI-powered search engines and generative AI platforms. GEO services improve how AI systems understand, trust and cite your brand across Google AI Overviews, ChatGPT, Gemini, Perplexity and voice search results, helping increase online visibility and authority.",
  },
  {
    q: "What is the difference between GEO services and SEO?",
    a: "SEO focuses on improving rankings in traditional search engines like Google, while GEO services optimise content for AI-generated answers and conversational search platforms. GEO improves AI visibility, entity understanding, structured data and citation potential, whereas SEO mainly targets organic rankings, keywords and website traffic.",
  },
  {
    q: "What is GEO vs SEO vs AEO?",
    a: "GEO improves visibility in AI-generated search responses, SEO improves rankings in traditional search engines and AEO focuses on appearing in direct answers, voice search and featured snippets. Together, GEO, SEO and AEO create a complete digital visibility strategy for modern AI-driven and search-driven user behaviour.",
  },
  {
    q: "What does GEO stand for?",
    a: "GEO stands for Generative Engine Optimization. It is a digital marketing strategy focused on helping AI engines and large language models understand, trust and reference your website content in AI-generated answers, conversational search experiences and modern AI-powered discovery platforms.",
  },
  {
    q: "How does GEO work?",
    a: "GEO works by improving website structure, entity clarity, content quality, schema markup and authority signals so AI systems can process information more accurately. It combines technical SEO, AI-focused content optimisation, structured data and trust-building strategies to improve visibility in AI-generated search responses.",
  },
  {
    q: "What is GEO and how does it work?",
    a: "Generative Engine Optimization GEO is the process of optimising websites for AI-powered search engines and conversational platforms. GEO works by making content easier for AI systems to understand through structured information, topical authority, schema markup, entity optimisation and answer-focused content creation strategies.",
  },
  {
    q: "Why is GEO better than SEO?",
    a: "GEO is not better than SEO but expands SEO for the AI search era. While SEO improves traditional rankings, GEO helps businesses appear in AI-generated answers and conversational search experiences. GEO supports future-ready visibility as more users rely on AI tools instead of standard search engine results pages.",
  },
  {
    q: "Is GEO replacing SEO?",
    a: "No, GEO is not replacing SEO. GEO works alongside SEO to improve visibility across AI search platforms and traditional search engines. Businesses now need both SEO and GEO strategies because users search through Google, AI Overviews, ChatGPT, Gemini, Perplexity and voice assistants simultaneously.",
  },
  {
    q: "What is geo targeting in SEO?",
    a: "Geo targeting in SEO is the process of optimising content and search visibility for specific geographic locations. It helps businesses appear in local or regional search results by using location-based keywords, local landing pages, Google Business optimisation and region-specific content strategies.",
  },
  {
    q: "What is the full form of GEO in AI?",
    a: "In AI and digital marketing, GEO stands for Generative Engine Optimization. It refers to optimising websites and digital content so generative AI systems and large language models can accurately understand, trust and reference a business within AI-generated search responses and conversational platforms.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

function SectionIntro({ eyebrow, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mb-10 max-w-5xl"
    >
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#0d2d47]/55">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-[72px]">
        {title}
      </h2>
      {text ? (
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
          {text}
        </p>
      ) : null}
    </motion.div>
  );
}

export default function GeoServiceClient() {
  const [openFaq, setOpenFaq] = useState(0);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0.35]);

  return (
    <main className="min-h-screen bg-[#EAEBDB] text-[#0d2d47]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section
        className="relative min-h-screen overflow-hidden px-4 pb-24 pt-28 sm:px-6 md:px-10 md:pt-32"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 35%, #8EA5F1 70%, #7392FB 100%)",
        }}
      >
        <div className="pointer-events-none absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-white/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-10 h-[520px] w-[520px] rounded-full bg-[#0d2d47]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1400px]">
          <motion.div style={{ y: heroY, opacity: heroOpacity }}>
            {/* <p className="mb-5 inline-flex rounded-full border border-[#0d2d47]/15 bg-white/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] backdrop-blur-md">
              GEO Marketing Services | GEO Agency | Nova Techscience
            </p> */}

            <h1 className="max-w-6xl text-[40px] font-semibold uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-[88px] lg:text-[104px]">
              Generative Engine Optimization{" "}
              <span className="text-[#7392FB]">GEO Agency</span> For AI Search
              Growth
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
              Nova Techscience is a generative engine optimization GEO agency
              helping brands become visible, trusted and cited across
              AI-powered search platforms, answer engines and traditional
              search results.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#0d2d47]/75">
              Search is no longer limited to blue links on Google. Customers now
              ask questions on ChatGPT, Gemini, Perplexity, Google AI Overviews
              and voice assistants before they visit a website.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-full bg-[#0d2d47] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
              >
                Get Your GEO Plan
              </Link>
              <Link
                href="/services"
                className="inline-flex justify-center rounded-full border border-[#0d2d47]/25 bg-white/25 px-6 py-3 text-sm font-medium backdrop-blur-md transition hover:bg-white/45"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {aiPlatforms.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-white/35 bg-white/25 px-5 py-4 text-center shadow-[0_16px_40px_rgba(13,45,71,0.1)] backdrop-blur-md"
              >
                <p className="text-sm font-semibold">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EAEBDB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <SectionIntro
            eyebrow="Why GEO Marketing Matters In 2026"
            title="AI Search Is Changing How Brands Are Found"
          />

          <div>
            <p className="text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
              GEO marketing matters because AI search engines now influence how
              people discover, compare and trust businesses online. If your
              content is not structured for AI understanding, your brand may be
              ignored even when your website ranks well on Google.
            </p>
            <p className="mt-5 text-base leading-relaxed text-[#0d2d47]/75">
              Traditional SEO is still important, but it is no longer enough on
              its own. Google's own guidance says SEO best practices continue to
              matter for generative AI features because AI Overviews and AI Mode
              rely on Google Search systems and indexed content.
            </p>
            <p className="mt-5 text-base leading-relaxed text-[#0d2d47]/75">
              Gartner predicted that traditional search engine volume may drop
              by 25% by 2026 because of AI chatbots and virtual agents.
              Research on Generative Engine Optimization also found that GEO
              methods can improve visibility in generative engine responses by
              up to 40%.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <motion.div
                  key={stat.value}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-[28px] border border-[#0d2d47]/10 bg-white/35 p-5 backdrop-blur-md"
                >
                  <p className="text-4xl font-semibold">{stat.value}</p>
                  <p className="mt-3 text-xs font-medium uppercase leading-snug tracking-[0.12em] text-[#0d2d47]/60">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="px-4 py-16 sm:px-6 md:px-10 md:py-24"
        style={{
          background:
            "linear-gradient(to bottom, #EAEBDB, #C4CFE3, #8EA5F1)",
        }}
      >
        <div className="mx-auto max-w-[1400px]">
          <SectionIntro
            eyebrow="What Is Generative Engine Optimization GEO?"
            title="Make Your Brand Understandable To AI Engines"
            text="Generative Engine Optimization GEO is the process of improving your website, content, structured data and brand authority so AI platforms can understand, trust and mention your business in AI-generated answers."
          />

          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-l-4 border-[#0d2d47] py-2 pl-6">
              <h3 className="text-2xl font-semibold uppercase leading-tight">
                GEO helps your brand answer three important questions
              </h3>
              <div className="mt-6 divide-y divide-[#0d2d47]/12">
                {geoQuestions.map((item) => (
                  <p
                    key={item}
                    className="py-4 text-sm font-semibold text-[#0d2d47]"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-[#0d2d47]/75 md:text-base">
                In simple terms, SEO helps users find your website, while GEO
                helps AI engines understand, select and reference your brand
                inside generated answers.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[24px] bg-[#0d2d47]/10 sm:grid-cols-2">
              {geoFocus.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="bg-white/30 p-5 font-semibold backdrop-blur-md"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="px-4 py-16 sm:px-6 md:px-10 md:py-24"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 36%, #8EA5F1 72%, #7392FB 100%)",
        }}
      >
        <div className="mx-auto max-w-[1400px]">
          <SectionIntro
            eyebrow="What Makes Nova Techscience A GEO Agency?"
            title="SEO, AEO And GEO In One Visibility System"
            text="Nova Techscience works as a GEO agency by combining technical optimisation, AI-focused content, entity building, authority signals and search strategy into one complete visibility system."
          />

          <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
            <div className="py-4">
              <p className="text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
                Many businesses still treat AI search as a future trend. Nova
                Techscience treats it as a current growth channel. Our team
                builds GEO campaigns that support both AI visibility and
                traditional organic rankings.
              </p>
              <p className="mt-6 border-l-4 border-[#0d2d47] pl-5 text-sm font-semibold leading-relaxed text-[#0d2d47]">
                Summary: Nova Techscience does not replace SEO with GEO. We
                strengthen your existing SEO marketing with AI search
                optimisation so your brand can perform across both traditional
                and generative search channels.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[24px] bg-[#0d2d47]/10 sm:grid-cols-2 lg:grid-cols-1">
              {agencyApproach.map((item) => (
                <div
                  key={item}
                  className="bg-white/30 px-4 py-3 text-sm font-semibold backdrop-blur-md"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-visible px-4 py-16 sm:px-6 md:px-10 md:py-24"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 34%, #8EA5F1 70%, #7392FB 100%)",
        }}
      >
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="lg:sticky lg:top-24 lg:h-fit">
            {/* <p className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              What GEO Does
            </p> */}

            <h2 className="max-w-xl text-4xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-[66px]">
              What GEO And AI Search Optimisation Do For Your Business
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
              GEO refocuses your existing search work so AI engines can
              understand, trust, and surface your brand more often.
            </p>
          </div>

          <div className="space-y-6 lg:pb-[34vh]">
            {benefits.map((item, i) => {
              const cardGradients = [
                "linear-gradient(110deg, #7392FB 0%, #243f78 52%, #0d2d47 100%)",
                "linear-gradient(110deg, #8EA5F1 0%, #5877de 48%, #0d2d47 100%)",
                "linear-gradient(110deg, #C4CFE3 0%, #7392FB 48%, #0d2d47 100%)",
                "linear-gradient(110deg, #EAEBDB 0%, #8EA5F1 48%, #0d2d47 100%)",
                "linear-gradient(110deg, #7392FB 0%, #8EA5F1 36%, #0d2d47 100%)",
                "linear-gradient(110deg, #C4CFE3 0%, #7392FB 44%, #071523 100%)",
              ];

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{ duration: 0.55, delay: i * 0.04 }}
                  className="relative min-h-[260px] overflow-hidden rounded-[22px] border border-white/70 p-6 text-white shadow-[0_26px_80px_rgba(13,45,71,0.2)] sm:min-h-[320px] sm:p-8 lg:sticky"
                  style={{
                    top: `calc(5.5rem + ${i * 14}px)`,
                    zIndex: i + 1,
                    background: cardGradients[i],
                  }}
                >
                  <div className="absolute bottom-2 left-5 select-none text-[150px] font-semibold leading-none tracking-tight text-white sm:bottom-3 sm:text-[220px] lg:bottom-4 lg:text-[260px]">
                    {i + 1}.
                  </div>

                  <div className="relative z-10 ml-auto flex min-h-[210px] max-w-xl flex-col justify-center sm:min-h-[260px]">
                    <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-6 text-base font-medium leading-relaxed text-white/86">
                      {item.text}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#EAEBDB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <SectionIntro
            eyebrow="Who Needs GEO Services?"
            title="For Brands That Depend On Online Visibility"
            text="GEO services are useful for any business that depends on online visibility, search traffic, qualified leads, product discovery or expert positioning."
          />

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="divide-y divide-[#0d2d47]/12 border-y border-[#0d2d47]/12">
              {whoNeedsGeo.map((item) => (
                <p
                  key={item}
                  className="py-4 text-sm font-semibold text-[#0d2d47]"
                >
                  {item}
                </p>
              ))}
            </div>

            <div className="overflow-hidden rounded-[24px] bg-white/30 backdrop-blur-md">
              {businessTypes.map(([type, benefit]) => (
                <div
                  key={type}
                  className="grid gap-3 border-b border-[#0d2d47]/10 p-5 last:border-b-0 md:grid-cols-[0.42fr_0.58fr]"
                >
                  <p className="font-semibold uppercase">{type}</p>
                  <p className="text-[#0d2d47]/70">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="px-4 py-16 sm:px-6 md:px-10 md:py-24"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 36%, #8EA5F1 72%, #7392FB 100%)",
        }}
      >
        <div className="mx-auto max-w-[1500px]">
          <SectionIntro
            eyebrow="Our GEO Services"
            title="Complete GEO, AEO And SEO Marketing Services"
          />

          <div className="grid gap-px overflow-hidden rounded-[28px] bg-[#0d2d47]/10 lg:grid-cols-2">
            {services.map((service, i) => (
              <motion.article
                key={service.no}
                initial={{ opacity: 0, y: 34, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.55, delay: i * 0.04, ease: "easeOut" }}
                className="group bg-white/28 p-6 backdrop-blur-md transition duration-300 hover:bg-white/42 md:p-8"
              >
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-[#0d2d47]/15 bg-[#0d2d47] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white transition group-hover:bg-[#7392FB]">
                    GEO Service
                  </span>
                  <span className="h-px min-w-10 flex-1 bg-[#0d2d47]/15" />
                </div>

                <h3 className="text-2xl font-semibold uppercase leading-tight">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#0d2d47]/75 md:text-base">
                  {service.text}
                </p>

                <div className="mt-6 grid gap-x-6 sm:grid-cols-2">
                  {service.points.map((point) => (
                    <div
                      key={point}
                      className="border-b border-[#0d2d47]/10 py-2 text-sm font-medium text-[#0d2d47]/75"
                    >
                      {point}
                    </div>
                  ))}
                </div>

                <p className="mt-6 border-l-4 border-[#0d2d47] pl-4 text-sm font-semibold leading-relaxed text-[#0d2d47]">
                  Summary: {service.summary}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-4 py-16 sm:px-6 md:px-10 md:py-24"
        style={{
          background:
            "linear-gradient(to bottom, #EAEBDB, #C4CFE3, #8EA5F1)",
        }}
      >
        <div className="mx-auto max-w-[1400px]">
          <SectionIntro
            eyebrow="GEO vs SEO vs AEO"
            title="What Is The Difference?"
            text="SEO improves visibility in traditional search engines, AEO improves direct answer visibility and GEO improves how AI engines understand and cite your brand."
          />

          <div className="overflow-hidden rounded-[24px] bg-white/28 backdrop-blur-md">
            {comparison.map(([strategy, goal, bestFor]) => (
              <div
                key={strategy}
                className="grid gap-3 border-b border-[#0d2d47]/10 p-5 last:border-b-0 md:grid-cols-3"
              >
                <p className="text-xl font-semibold">{strategy}</p>
                <p className="text-[#0d2d47]/75">{goal}</p>
                <p className="text-[#0d2d47]/75">{bestFor}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 border-l-4 border-[#0d2d47] pl-5 text-sm font-semibold leading-relaxed text-[#0d2d47]">
            Summary: The best digital marketing agencies now combine SEO, AEO
            and GEO. Nova Techscience uses all three to build long-term search
            visibility.
          </p>
        </div>
      </section>

      <section className="bg-[#EAEBDB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionIntro
              eyebrow="Why Choose Nova Techscience?"
              title="Future-Ready GEO Marketing"
              text="Nova Techscience is a GEO marketing and SEO agency that helps businesses build future-ready visibility across search engines, AI platforms and answer engines."
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {reasons.map((item) => (
              <div
                key={item}
                className="border-b border-[#0d2d47]/12 px-1 py-3 text-sm font-semibold"
              >
                {item}
              </div>
            ))}
            <p className="border-l-4 border-[#0d2d47] pl-5 text-sm font-semibold leading-relaxed text-[#0d2d47] sm:col-span-2">
              Summary: Nova Techscience helps your business move beyond
              rankings and become visible wherever customers ask questions
              online.
            </p>
          </div>
        </div>
      </section>

      <section
        className="px-4 py-16 sm:px-6 md:px-10 md:py-24"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 36%, #8EA5F1 72%, #7392FB 100%)",
        }}
      >
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-2">
          <div>
            <SectionIntro
              eyebrow="Our GEO Campaign Process"
              title="Discover, Optimise, Build Authority"
            />
            <div className="divide-y divide-[#0d2d47]/12 border-y border-[#0d2d47]/12">
              {process.map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="py-5"
                >
                  <p className="text-sm font-semibold text-[#0d2d47]/45">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#0d2d47]/75">
                    {item.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          <div>
            <SectionIntro
              eyebrow="What Results Can GEO Deliver?"
              title="Visibility, Trust And Qualified Leads"
              text="GEO can improve your brand's visibility in AI answers, increase qualified search traffic, strengthen authority and help users find your business across modern search platforms."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {results.map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="border-b border-[#0d2d47]/12 px-1 py-4 text-sm font-semibold"
                >
                  {item}
                </motion.div>
              ))}
            </div>
            <p className="mt-6 border-l-4 border-[#0d2d47] pl-5 text-sm font-semibold leading-relaxed text-[#0d2d47] md:text-base">
              Summary: GEO is not only about traffic. It is about becoming the
              brand AI engines understand, trust and recommend.
            </p>
          </div>
        </div>
      </section>

      <section
        className="px-4 py-16 sm:px-6 md:px-10 md:py-24"
        style={{
          background:
            "linear-gradient(to bottom, #EAEBDB, #C4CFE3, #8EA5F1, #6887FB)",
        }}
      >
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            {/* <p className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              FAQ Answers
            </p> */}
            <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-[72px]">
              GEO Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((item, i) => {
              const isOpen = openFaq === i;

              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-[26px] border border-white/35 bg-white/25 backdrop-blur-md"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                  >
                    <span className="text-base font-semibold uppercase">
                      {item.q}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0d2d47] text-white">
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-[#0d2d47]/70 md:text-base">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#6887FB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px] rounded-[38px] border border-white/35 bg-white/20 p-6 text-center shadow-[0_30px_90px_rgba(13,45,71,0.2)] backdrop-blur-md sm:p-10 md:p-14">
          {/* <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#0d2d47]/55">
            Conclusion
          </p> */}
          <h2 className="mx-auto max-w-5xl text-4xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-[76px]">
            Make Your Brand Easier For AI To Find
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-[#0d2d47]/75 md:text-base">
            AI search is changing how people discover brands, services and
            solutions. Businesses that rely only on traditional SEO may lose
            visibility as users shift toward AI answers, voice search and
            conversational discovery.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#0d2d47]/75 md:text-base">
            Nova Techscience helps your business stay ahead with a complete GEO
            marketing, AEO and SEO service designed for Google AI Overviews,
            ChatGPT, Gemini, Perplexity and modern search behaviour.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#0d2d47] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
            >
              Start Your GEO Project
            </Link>
            <Link
              href="/portfolio"
              className="rounded-full border border-[#0d2d47]/20 bg-white/25 px-7 py-3 text-sm font-medium text-[#0d2d47] backdrop-blur-md transition hover:bg-white/45"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
