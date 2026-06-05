import Link from "next/link";
import InternalLinkSection from "@/components/InternalLinkSection";

type IntentLinkItem = {
  href: string;
  title: string;
  description: string;
};

type IntentLandingPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  ctaLabel: string;
  primaryHref: string;
  secondaryHref: string;
  secondaryLabel: string;
  proofStats: Array<[string, string]>;
  servicePoints: string[];
  audienceTitle?: string;
  audienceIntro?: string;
  audienceFit: string[];
  processTitle?: string;
  processSteps: Array<{ title: string; description: string }>;
  differentiatorsTitle?: string;
  differentiators: Array<{ title: string; description: string }>;
  outcomes: string[];
  faq: Array<{ question: string; answer: string }>;
  relatedLinks: IntentLinkItem[];
  schema: Record<string, unknown>;
};

export default function IntentLandingPage({
  eyebrow,
  title,
  intro,
  ctaLabel,
  primaryHref,
  secondaryHref,
  secondaryLabel,
  proofStats,
  servicePoints,
  audienceTitle = "Who This Is Best For",
  audienceIntro = "These engagement types usually get the most value from this kind of project.",
  audienceFit,
  processTitle = "How The Work Typically Moves",
  processSteps,
  differentiatorsTitle = "Why Teams Choose This Approach",
  differentiators,
  outcomes,
  faq,
  relatedLinks,
  schema,
}: IntentLandingPageProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#EAEBDB] text-[#0d2d47]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section
        className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pt-32 md:px-10 md:pb-20 md:pt-40"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 38%, #8EA5F1 72%, #7392FB 100%)",
        }}
      >
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#0d2d47]/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5A7EFF]">
              {eyebrow}
            </p>
            <h1 className="mt-4 max-w-5xl text-[40px] font-semibold uppercase leading-[0.92] tracking-tight sm:text-6xl md:text-[84px]">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#0d2d47]/75 md:text-lg">
              {intro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={primaryHref}
                className="inline-flex justify-center rounded-full bg-[#0d2d47] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
              >
                {ctaLabel}
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex justify-center rounded-full border border-[#0d2d47]/20 bg-white/25 px-7 py-3 text-sm font-medium text-[#0d2d47] backdrop-blur-md transition hover:bg-white/45"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {proofStats.map(([value, label]) => (
              <div
                key={label}
                className="rounded-[24px] border border-white/30 bg-white/20 p-5 backdrop-blur-md"
              >
                <p className="text-3xl font-semibold leading-none text-[#0d2d47] sm:text-4xl">
                  {value}
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-[#0d2d47]/60">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 md:px-10 md:py-18">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-semibold uppercase leading-tight sm:text-4xl md:text-5xl">
              What This Service Covers
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#0d2d47]/72">
              Each project is planned around visibility, trust, conversion, and long-term digital growth.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {servicePoints.map((point) => (
              <div
                key={point}
                className="rounded-[24px] border border-[#0d2d47]/10 bg-white/50 p-5 shadow-[0_18px_50px_rgba(13,45,71,0.08)]"
              >
                <p className="text-base font-medium leading-8 text-[#0d2d47]/78">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 md:px-10 md:py-18">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold uppercase leading-tight sm:text-4xl md:text-5xl">
              {audienceTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#0d2d47]/72">
              {audienceIntro}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {audienceFit.map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-[#0d2d47]/10 bg-[#dfe6f3]/50 p-5 shadow-[0_18px_50px_rgba(13,45,71,0.08)]"
              >
                <p className="text-base font-medium leading-8 text-[#0d2d47]/78">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-4 py-14 sm:px-6 md:px-10 md:py-18"
        style={{
          background:
            "linear-gradient(180deg, rgba(13,45,71,0.03) 0%, rgba(115,146,251,0.12) 100%)",
        }}
      >
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-3xl font-semibold uppercase leading-tight sm:text-4xl md:text-5xl">
            {processTitle}
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[24px] border border-[#0d2d47]/10 bg-white/70 p-6 shadow-[0_18px_50px_rgba(13,45,71,0.08)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5A7EFF]">
                  Step {index + 1}
                </p>
                <h3 className="mt-3 text-xl font-semibold uppercase leading-tight">{step.title}</h3>
                <p className="mt-4 text-base leading-8 text-[#0d2d47]/72">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-4 py-14 sm:px-6 md:px-10 md:py-18"
        style={{
          background:
            "linear-gradient(135deg, #7392FB 0%, #243f78 52%, #0d2d47 100%)",
        }}
      >
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-3xl font-semibold uppercase leading-tight text-white sm:text-4xl md:text-5xl">
            Expected Outcomes
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {outcomes.map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-white/20 bg-white/12 p-6 text-white shadow-[0_24px_70px_rgba(13,45,71,0.22)] backdrop-blur-md"
              >
                <p className="text-base leading-8 text-white/78">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 md:px-10 md:py-18">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-3xl font-semibold uppercase leading-tight sm:text-4xl md:text-5xl">
            {differentiatorsTitle}
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {differentiators.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] border border-[#0d2d47]/10 bg-white/50 p-6 shadow-[0_18px_50px_rgba(13,45,71,0.08)]"
              >
                <h3 className="text-xl font-semibold uppercase leading-tight">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-[#0d2d47]/72">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 md:px-10 md:py-18">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-3xl font-semibold uppercase leading-tight sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faq.map((item) => (
              <article
                key={item.question}
                className="rounded-[24px] border border-[#0d2d47]/10 bg-white/50 p-6 shadow-[0_18px_50px_rgba(13,45,71,0.08)]"
              >
                <h3 className="text-xl font-semibold uppercase leading-tight">{item.question}</h3>
                <p className="mt-4 text-base leading-8 text-[#0d2d47]/72">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InternalLinkSection
        title="Related Services And Resources"
        intro="Move from search intent into the service, blog, and proof pages that support this topic."
        items={relatedLinks}
      />
    </main>
  );
}
