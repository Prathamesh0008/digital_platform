"use client";

import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/blog";

export default function BlogSection() {
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-[#7A97F8] px-4 py-12 sm:px-6 md:px-10 md:py-14">
      <div className="absolute inset-x-0 top-0 h-px bg-white/18" />
      <div className="absolute left-[-140px] top-[-120px] h-[300px] w-[300px] rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-[-160px] right-[-120px] h-[320px] w-[320px] rounded-full bg-[#e9ecff]/16 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="mb-8 border-b border-[#0d2d47]/14 pb-6">
          <div className="grid gap-5 lg:grid-cols-[400px_minmax(0,1fr)_auto] lg:items-start lg:gap-8">
            <h2 className="max-w-[320px] text-4xl font-semibold uppercase leading-[0.9] tracking-tight text-[#0d2d47] sm:text-5xl md:text-[56px] lg:max-w-[360px]">
              Latest
              <br />
              Blogs
            </h2>

            <p className="max-w-3xl pt-1  text-sm leading-7 text-[#0d2d47]/78 sm:text-base md:text-lg">
              Explore practical insights on digital marketing, SEO, website
              strategy, SaaS, and online growth for modern businesses.
            </p>

            <Link
              href="/blog"
              className="inline-flex h-14 items-center justify-center rounded-full bg-[#0d2d47] px-8 text-base font-semibold text-white transition hover:bg-[#133a5a] lg:min-w-[160px]"
            >
              View All
              <span className="ml-3 text-lg leading-none">&rsaquo;</span>
            </Link>
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {featuredBlogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group w-[84vw] shrink-0 snap-start overflow-hidden rounded-[28px] border border-[#0d2d47]/10 bg-white/32 backdrop-blur-sm transition duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={800}
                    height={340}
                    sizes="84vw"
                    className="h-[240px] w-full object-contain bg-white transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-4 text-left">
                  <div className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0d2d47]/55">
                    <span>{blog.author}</span>
                    <span className="h-1 w-1 rounded-full bg-[#0d2d47]/40" />
                    <span>{blog.category}</span>
                  </div>

                  <h3 className="text-lg font-semibold uppercase leading-snug text-[#0d2d47]">
                    {blog.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#0d2d47]/72">
                    {blog.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-3">
          {featuredBlogs.map((blog, index) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className={`group overflow-hidden rounded-[30px] border border-[#0d2d47]/10 bg-white/32 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/42 ${
                index === 0 ? "md:col-span-2 xl:col-span-1" : ""
              }`}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={900}
                  height={420}
                  sizes="(max-width: 1279px) 50vw, 33vw"
                  className="h-[300px] w-full object-contain bg-white transition duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-5 text-left">
                <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#0d2d47]/55">
                  <span>{blog.author}</span>
                  <span className="h-1 w-1 rounded-full bg-[#0d2d47]/40" />
                  <span>{blog.category}</span>
                </div>

                <h3 className="text-xl font-semibold uppercase leading-snug text-[#0d2d47]">
                  {blog.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#0d2d47]/72 md:text-base md:leading-7">
                  {blog.excerpt}
                </p>

                <div className="mt-6 h-px w-0 bg-[#0d2d47]/35 transition-all duration-300 group-hover:w-full" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
