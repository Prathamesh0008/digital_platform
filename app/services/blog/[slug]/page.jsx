import Link from "next/link";
import Image from "next/image";
import InternalLinkSection from "@/components/InternalLinkSection";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blog";
import { getBlogRelatedLinks } from "@/lib/internalLinks";
import { absoluteUrl, siteName } from "@/lib/site";

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return {};
  }

  return {
    title: `${blog.title} | ${siteName}`,
    description: blog.excerpt,
    alternates: {
      canonical: `/services/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      url: absoluteUrl(`/services/blog/${blog.slug}`),
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

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);
  const related = blogs.filter((item) => item.slug !== slug).slice(0, 3);

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
    mainEntityOfPage: absoluteUrl(`/services/blog/${blog.slug}`),
  };

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
            href="/services/blog"
            className="mb-7 inline-flex rounded-full border border-[#0d2d47]/15 bg-white/30 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] backdrop-blur-md transition hover:bg-white/60 sm:px-5 sm:text-xs"
          >
            ← Back To Blog
          </Link>

          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#0d2d47] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-white sm:px-5 sm:text-xs">
              {blog.category}
            </span>

            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#0d2d47]/60 sm:text-xs">
              {blog.date} · {blog.readTime}
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
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
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
                  Start Project →
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
                    {section.body}
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
              href="/services/blog"
              className="w-fit rounded-full bg-[#0d2d47] px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[#0d2d47]"
            >
              View All Blogs
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/services/blog/${item.slug}`}
                className="group rounded-[24px] border border-white/35 bg-white/25 p-5 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/45 md:rounded-[26px]"
              >
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-[#0d2d47]/55">
                  {item.category}
                </p>

                <h3 className="text-lg font-semibold uppercase leading-tight sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm font-medium text-[#0d2d47]">
                  Read More →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <InternalLinkSection
        title="Related Services"
        intro="Continue from this article into the service pages and proof pages most closely connected to the topic."
        items={getBlogRelatedLinks(blog.category)}
      />
    </main>
  );
}
