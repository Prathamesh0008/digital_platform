import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blog";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);
  const related = blogs.filter((item) => item.slug !== slug).slice(0, 3);

  if (!blog) notFound();

  return (
    <main className="min-h-screen overflow-hidden bg-[#EAEBDB] text-[#0d2d47]">
      <section
        className="relative px-4 pb-12 pt-32 sm:px-6 md:px-10 md:pb-20 md:pt-40"
        style={{
          background:
            "linear-gradient(135deg, #EAEBDB 0%, #C4CFE3 38%, #8EA5F1 72%, #7392FB 100%)",
        }}
      >
        <div className="mx-auto max-w-[1180px]">
          <Link
            href="/services/blog"
            className="mb-8 inline-flex rounded-full border border-[#0d2d47]/15 bg-white/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-md"
          >
            ← Back To Blog
          </Link>

          <div className="mb-5 flex flex-wrap items-center gap-3">
            {/* <span className="rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              {blog.category}
            </span> */}

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0d2d47]/55">
              {blog.date} · {blog.readTime}
            </span>
          </div>

          <h1 className="text-[42px] font-semibold uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-[82px]">
            {blog.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
            {blog.excerpt}
          </p>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#0d2d47]/55">
            By {blog.author}
          </p>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1180px]">
          <div className="relative min-h-[320px] overflow-hidden rounded-[34px] border border-white/45 shadow-[0_28px_90px_rgba(13,45,71,0.16)] md:min-h-[560px]">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <aside className="h-fit rounded-[28px] border border-[#0d2d47]/10 bg-white/35 p-6 backdrop-blur-md lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0d2d47]/50">
                In This Article
              </p>

              <div className="mt-5 grid gap-3">
                {blog.content.map((section, index) => (
                  <a
                    key={section.heading}
                    href={`#section-${index}`}
                    className="rounded-2xl bg-white/35 px-4 py-3 text-sm font-semibold text-[#0d2d47]/75 transition hover:bg-[#0d2d47] hover:text-white"
                  >
                    {section.heading}
                  </a>
                ))}
              </div>
            </aside>

            <article className="rounded-[34px] border border-[#0d2d47]/10 bg-white/35 p-6 shadow-[0_24px_70px_rgba(13,45,71,0.12)] backdrop-blur-md md:p-10">
              {blog.content.map((section, index) => (
                <section
                  key={section.heading}
                  id={`section-${index}`}
                  className="border-b border-[#0d2d47]/10 py-8 first:pt-0 last:border-b-0 last:pb-0"
                >
                  <h2 className="text-3xl font-semibold uppercase leading-tight">
                    {section.heading}
                  </h2>

                  <p className="mt-5 text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
                    {section.body}
                  </p>
                </section>
              ))}
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#6887FB] px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <h2 className="mb-8 text-4xl font-semibold uppercase leading-tight text-[#0d2d47]">
            Related Articles
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/services/blog/${item.slug}`}
                className="rounded-[26px] border border-white/35 bg-white/25 p-5 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/40"
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#0d2d47]/55">
                  {item.category}
                </p>

                <h3 className="text-xl font-semibold uppercase leading-tight">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm font-semibold text-[#0d2d47]">
                  Read More →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}