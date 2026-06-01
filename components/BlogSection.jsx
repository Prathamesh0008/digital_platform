// digital_platform/components/BlogSection.jsx
"use client";

const blogs = [
  {
    title: "10 Digital Marketing Trends To Watch In 2026",
    date: "15 Jan",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    text: "Digital marketers need smart strategies to understand what is coming next in online growth.",
  },
  {
    title: "What Is Software As A Service (SaaS)",
    date: "1 Jan",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
    text: "SaaS platforms help businesses manage software, automation, marketing, and operations online.",
  },
  {
    title: "Best Platforms For Digital Marketing Courses",
    date: "18 Dec",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    text: "Digital marketing is not rule-based only. It requires learning, testing, and continuous updates.",
  },
  {
    title: "How SEO Helps Your Business Grow Online",
    date: "22 Feb",
    image:
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=800&auto=format&fit=crop",
    text: "SEO improves visibility, builds trust, and helps businesses attract high-intent customers.",
  },
  {
    title: "Why Website Design Matters For Branding",
    date: "10 Mar",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    text: "A professional website creates first impressions and supports your business growth.",
  },
];

export default function BlogSection() {
  const repeatedBlogs = [...blogs, ...blogs, ...blogs];

  return (
    <section className="relative overflow-hidden bg-[#7A97F8] px-4 py-16 sm:px-6 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div className="pl-4 sm:pl-6 md:pl-10">
            {/* <span className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white">
              Insights
            </span> */}

            <h2 className="text-4xl font-semibold uppercase leading-[0.9] tracking-tight text-[#0d2d47] sm:text-5xl md:text-[72px]">
              Latest
              <br />
              Blogs
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-relaxed text-[#0d2d47]/75 md:text-base">
            Explore practical insights on digital marketing, SEO, website
            strategy, SaaS, and online growth for modern businesses.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex w-max animate-blog-slide gap-5 py-4 sm:gap-7">
            {repeatedBlogs.map((blog, index) => (
              <article
                key={`${blog.title}-${index}`}
                className="group w-[320px] shrink-0 overflow-hidden rounded-[30px] border border-[#0d2d47]/10 bg-white/35 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/50 sm:w-[390px]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                   className="h-[300px] w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 sm:h-[340px]"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-[#0d2d47] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
                    {blog.date}
                  </div>
                </div>

               <div className="p-4 text-left">
                  <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-[#0d2d47]/55">
                    <span>Admin</span>
                    <span className="h-1 w-1 rounded-full bg-[#0d2d47]/40" />
                    <span>Digital Marketing</span>
                  </div>

                  <h3 className="text-base font-semibold uppercase leading-snug text-[#0d2d47] sm:text-lg">
                    {blog.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-[#0d2d47]/70 sm:text-sm">
                    {blog.text}
                  </p>

                  <div className="mt-6 h-px w-0 bg-[#0d2d47]/40 transition-all duration-300 group-hover:w-full" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blog-slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.33%);
          }
        }

        .animate-blog-slide {
          animation: blog-slide 32s linear infinite;
        }

        .animate-blog-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}