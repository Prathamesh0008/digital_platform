"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "10 Digital Marketing Trends To Watch In 2026",
    date: "January 15, 2026",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    excerpt:
      "Digital marketers need smart strategies to understand what is coming next in online growth.",
    category: "Trends",
    author: "Sarah Mitchell",
  },
  {
    id: 2,
    title: "What Is Software As A Service (SaaS)",
    date: "January 1, 2026",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
    excerpt:
      "SaaS platforms help businesses manage software, automation, marketing, and operations online.",
    category: "Technology",
    author: "James Chen",
  },
  {
    id: 3,
    title: "Best Platforms For Digital Marketing Courses",
    date: "December 18, 2025",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    excerpt:
      "Digital marketing is not rule-based only. It requires learning, testing, and continuous updates.",
    category: "Education",
    author: "Emma Rodriguez",
  },
  {
    id: 4,
    title: "How SEO Helps Your Business Grow Online",
    date: "February 22, 2026",
    image:
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=800&auto=format&fit=crop",
    excerpt:
      "SEO improves visibility, builds trust, and helps businesses attract high-intent customers.",
    category: "SEO",
    author: "David Kim",
  },
  {
    id: 5,
    title: "Why Website Design Matters For Branding",
    date: "March 10, 2026",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    excerpt:
      "A professional website creates first impressions and supports your business growth.",
    category: "Design",
    author: "Lisa Thompson",
  },
];

export default function BlogSection() {
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-b from-[#7A97F8] to-[#6B88E8] px-4 py-16 sm:px-6 md:px-10 lg:py-20"
      aria-labelledby="blog-section-title"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute left-[-150px] top-[-100px] h-[400px] w-[400px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-[-180px] right-[-120px] h-[400px] w-[400px] rounded-full bg-[#e9ecff]/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 border-b border-white/20 pb-8">
          <div className="grid gap-6 md:grid-cols-[300px_minmax(0,1fr)] lg:grid-cols-[360px_1fr]">
            <div>
              <span className="inline-block rounded-full bg-[#0d2d47]/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#0d2d47]">
                Our Blog
              </span>
              <h2 
                id="blog-section-title"
                className="mt-3 text-4xl font-bold uppercase leading-[0.92] tracking-tight text-[#0d2d47] sm:text-5xl lg:text-[64px]"
              >
                Latest
                <br />
                Insights
              </h2>
            </div>

            <div className="flex flex-col items-start justify-end gap-4 md:flex-row md:items-center md:justify-between">
              <p className="max-w-xl text-sm leading-relaxed text-[#0d2d47]/80 sm:text-base lg:text-lg">
                Explore practical insights on digital marketing, SEO, website
                strategy, SaaS, and online growth for modern businesses.
              </p>
              <button 
                className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#0d2d47] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1a3d57] hover:shadow-lg"
                aria-label="View all blog posts"
              >
                View All
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div 
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 scrollbar-hide"
            role="list"
            aria-label="Blog posts carousel"
          >
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="group w-[85vw] shrink-0 snap-start overflow-hidden rounded-2xl bg-white/30 backdrop-blur-sm transition-all hover:bg-white/40"
                role="listitem"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="85vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={blog.id === 1}
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-[#0d2d47] px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                    {blog.category}
                  </div>
                </div>

                <div className="p-5">
                  <div className="mb-3 flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-[#0d2d47]/60">
                    <span>{blog.author}</span>
                    <span className="h-1 w-1 rounded-full bg-[#0d2d47]/30" />
                    <span>{blog.date}</span>
                  </div>

                  <h3 className="text-lg font-semibold leading-snug text-[#0d2d47]">
                    {blog.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#0d2d47]/70">
                    {blog.excerpt}
                  </p>

                  <div className="mt-4 inline-flex items-center text-sm font-semibold text-[#0d2d47]">
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden gap-6 md:grid lg:grid-cols-3">
          {featuredBlogs.map((blog, index) => (
            <article
              key={blog.id}
              className={`group overflow-hidden rounded-2xl bg-white/30 backdrop-blur-sm transition-all hover:-translate-y-2 hover:bg-white/40 hover:shadow-xl ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
              role="article"
            >
              <div className={`relative overflow-hidden ${
                index === 0 ? "aspect-[16/9]" : "aspect-[16/10]"
              }`}>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={index === 0}
                />

                <div className="absolute left-5 top-5 rounded-full bg-[#0d2d47] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-lg">
                  {blog.category}
                </div>
              </div>

              <div className="p-6 lg:p-8">
                <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-wider text-[#0d2d47]/60">
                  <span>{blog.author}</span>
                  <span className="h-1 w-1 rounded-full bg-[#0d2d47]/30" />
                  <span>{blog.date}</span>
                </div>

                <h3 className={`font-bold leading-snug text-[#0d2d47] ${
                  index === 0 ? "text-2xl lg:text-3xl" : "text-xl"
                }`}>
                  {blog.title}
                </h3>

                <p className={`mt-3 leading-relaxed text-[#0d2d47]/70 ${
                  index === 0 ? "text-base" : "text-sm"
                }`}>
                  {blog.excerpt}
                </p>

                <div className="mt-6 flex items-center text-sm font-semibold text-[#0d2d47] transition-all group-hover:text-[#1a3d57]">
                  Read Article
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button - Mobile */}
        <div className="mt-8 text-center md:hidden">
          <button className="inline-flex items-center gap-2 rounded-full bg-[#0d2d47] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#1a3d57] hover:shadow-lg">
            View All Posts
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}