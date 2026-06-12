//app\blog\page.tsx
import Link from "next/link";
import Image from "next/image";
import InternalLinkSection from "@/components/InternalLinkSection";
import { insightLinks, serviceHubLinks } from "@/lib/internalLinks";
import { blogs } from "@/data/blog";

export const metadata = {
  title: "Digital Marketing Blog | NovaTech",
  description:
    "Read NovaTech insights on SEO, GEO, web design, branding, ads and digital growth.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const featured = blogs[0];
  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

  return (
    <main className="min-h-screen overflow-hidden bg-[#EAEBDB] text-[#0d2d47]">
      <section
        className="relative px-4 pb-14 pt-32 sm:px-6 md:px-10 md:pb-20 md:pt-40"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 38%, #8EA5F1 72%, #7392FB 100%)",
        }}
      >
        <div className="pointer-events-none absolute left-[-120px] top-[-120px] h-[280px] w-[280px] rounded-full bg-white/25 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-160px] right-[-120px] h-[340px] w-[340px] rounded-full bg-[#0d2d47]/15 blur-3xl" />

        <div className="relative mx-auto max-w-[1400px]">
          <h1 className="max-w-5xl text-[44px] font-semibold uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-[88px] lg:text-[104px]">
            Digital Growth Insights
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
            Practical ideas on SEO, GEO, web design, brand strategy,
            performance ads and conversion-focused digital growth.
          </p>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8 flex gap-3 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible">
            {categories.map((category) => (
              <span
                key={category}
                className="shrink-0 rounded-full border border-[#0d2d47]/10 bg-white/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#0d2d47]/75 backdrop-blur-md"
              >
                {category}
              </span>
            ))}
          </div>

          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-[36px] border border-[#0d2d47]/10 bg-white/35 shadow-[0_28px_90px_rgba(13,45,71,0.16)] backdrop-blur-md lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]"
          >
            <div className=" min-w-0 overflow-hidden bg-white lg:min-h-[520px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-contain object-left transition duration-700 scale-104"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>

            <div className="min-w-0 flex flex-col justify-center p-6 sm:p-8 md:p-12">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#0d2d47] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                  Featured
                </span>

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0d2d47]/55">
                  {featured.date} {" | "} {featured.readTime}
                </span>
              </div>

              <h2 className="text-3xl font-semibold uppercase leading-tight sm:text-4xl md:text-5xl">
                {featured.title}
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-[#0d2d47]/70 md:text-base">
                {featured.excerpt}
              </p>

              <span className="mt-8 inline-flex w-fit rounded-full bg-[#0d2d47] px-6 py-3 text-sm font-semibold text-white transition group-hover:bg-[#5A7EFF]">
                Read Featured Article
              </span>
            </div>
          </Link>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.slice(1).map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group overflow-hidden rounded-[30px] border border-[#0d2d47]/10 bg-white/35 shadow-[0_20px_65px_rgba(13,45,71,0.12)] backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/50"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-white">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-contain transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[#0d2d47] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                      {blog.category}
                    </span>

                    <span className="text-xs font-semibold text-[#0d2d47]/50">
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold uppercase leading-tight">
                    {blog.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-[#0d2d47]/70">
                    {blog.excerpt}
                  </p>

                  <span className="mt-6 inline-flex text-sm font-semibold text-[#5A7EFF]">
                    Read Article {"->"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InternalLinkSection
        title="Related Services And Proof"
        intro="Use these supporting pages to connect insight content with real services and implementation examples."
        items={[...serviceHubLinks, insightLinks[1], insightLinks[2]].slice(0, 3)}
      />
    </main>
  );
}
