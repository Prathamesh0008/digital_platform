"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  "Responsive website design",
  "Custom UI/UX design",
  "SEO-friendly structure",
  "Fast loading performance",
  "CMS-ready architecture",
  "Conversion-focused layouts",
];

const websiteTypes = [
  {
    title: "Static Websites",
    text: "Clean, fast, and secure websites for companies that need a professional online presence with low maintenance.",
  },
  {
    title: "Dynamic Websites",
    text: "Flexible websites with editable content, interactive sections, and scalable features for growing businesses.",
  },
  {
    title: "CMS Websites",
    text: "Easy-to-manage websites built so your team can update content, blogs, pages, and media without technical stress.",
  },
  {
    title: "E-Commerce Websites",
    text: "Modern online stores designed for product visibility, smooth checkout, and better customer experience.",
  },
];

const process = [
  "Discovery & Planning",
  "UI/UX Wireframe",
  "Website Design",
  "Development",
  "Testing & Optimization",
  "Launch & Support",
];

export default function WebDesignPage() {
  return (
    <main className="min-h-screen bg-[#EAEBDB] text-[#0d2d47]">
      <section
        className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 md:px-10 md:pb-24 md:pt-32"
        style={{
          background:
            "linear-gradient(to top, #EAEBDB, #C4CFE3, #8EA5F1, #6887FB)",
        }}
      >
        <div className="pointer-events-none absolute left-[-140px] top-[-140px] h-[360px] w-[360px] rounded-full bg-white/25 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-160px] right-[-140px] h-[420px] w-[420px] rounded-full bg-[#0d2d47]/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 inline-flex rounded-full border border-[#0d2d47]/15 bg-white/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] backdrop-blur-md">
              Web Design & Development
            </p>

            <h1 className="max-w-5xl text-[44px] font-semibold uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-[88px] lg:text-[104px]">
              Websites That Look Premium And Convert
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#0d2d47]/75 md:text-lg">
              We design and develop responsive, fast, and SEO-ready websites
              that help brands build trust, improve visibility, and generate
              real business growth.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-full bg-[#0d2d47] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
              >
                Start Your Website
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex justify-center rounded-full border border-[#0d2d47]/25 bg-white/25 px-6 py-3 text-sm font-medium text-[#0d2d47] backdrop-blur-md transition hover:bg-white/45"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 35 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-[38px] border border-white/35 bg-white/20 p-3 shadow-[0_30px_90px_rgba(13,45,71,0.22)] backdrop-blur-md"
          >
            <div className="overflow-hidden rounded-[30px] border border-white/40 bg-white/30">
              <div className="flex items-center gap-2 border-b border-[#0d2d47]/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#0d2d47]/35" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#0d2d47]/22" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#0d2d47]/14" />
                <span className="ml-auto text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0d2d47]/50">
                  Website Preview
                </span>
              </div>

              <div className="p-5">
                <div className="mb-4 h-36 rounded-[24px] bg-[#0d2d47]" />
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="h-24 rounded-2xl bg-white/45" />
                  <div className="h-24 rounded-2xl bg-white/45" />
                  <div className="h-24 rounded-2xl bg-white/45" />
                </div>
                <div className="mt-4 h-20 rounded-2xl bg-white/45" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              Why It Matters
            </p>
            <h2 className="text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[72px]">
              Your Website Is Your Digital First Impression
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-[28px] border border-[#0d2d47]/10 bg-white/35 p-5 backdrop-blur-md"
              >
                <p className="mb-4 text-sm font-semibold text-[#0d2d47]/45">
                  {(i + 1).toString().padStart(2, "0")}
                </p>
                <h3 className="text-lg font-semibold uppercase">{item}</h3>
              </motion.div>
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
          <div className="mb-12 max-w-4xl">
            <p className="mb-5 inline-flex rounded-full border border-[#0d2d47]/15 bg-white/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] backdrop-blur-md">
              Website Solutions
            </p>

            <h2 className="text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[72px]">
              Websites Built For Every Business Stage
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {websiteTypes.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-[34px] border border-white/35 bg-white/25 p-6 shadow-[0_24px_70px_rgba(13,45,71,0.12)] backdrop-blur-md"
              >
                <span className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#0d2d47] text-sm font-semibold text-white">
                  0{i + 1}
                </span>

                <h3 className="text-2xl font-semibold uppercase">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-[#0d2d47]/70 md:text-base">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EAEBDB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 inline-flex rounded-full bg-[#0d2d47] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                Our Process
              </p>

              <h2 className="text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[72px]">
                From Idea To Launch
              </h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {process.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-[28px] border border-[#0d2d47]/10 bg-[#B6C4E7] p-5 shadow-[0_18px_45px_rgba(13,45,71,0.12)]"
              >
                <p className="text-5xl font-semibold text-[#0d2d47]/20">
                  {(i + 1).toString().padStart(2, "0")}
                </p>
                <h3 className="mt-6 text-xl font-semibold uppercase">
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#6887FB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px] rounded-[38px] border border-white/35 bg-white/20 p-6 text-center shadow-[0_30px_90px_rgba(13,45,71,0.2)] backdrop-blur-md sm:p-10 md:p-14">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#0d2d47]/55">
            Build A Better Website
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[76px]">
            Let’s Create A Website That Works For Your Brand
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#0d2d47]/75 md:text-base">
            Get a clean, responsive, SEO-ready website designed to support
            visibility, trust, and conversion.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#0d2d47] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2d47]/90"
            >
              Start Your Website
            </Link>

            <Link
              href="/portfolio"
              className="rounded-full border border-[#0d2d47]/20 bg-white/25 px-7 py-3 text-sm font-medium text-[#0d2d47] backdrop-blur-md transition hover:bg-white/45"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}










// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";

// const features = [
//   "Responsive website design",
//   "Custom UI/UX design",
//   "SEO-friendly structure",
//   "Fast loading performance",
//   "CMS-ready architecture",
//   "Conversion-focused layouts",
// ];

// const websiteTypes = [
//   {
//     title: "Static Websites",
//     text: "Clean, fast, and secure websites for companies that need a professional online presence with low maintenance.",
//   },
//   {
//     title: "Dynamic Websites",
//     text: "Flexible websites with editable content, interactive sections, and scalable features for growing businesses.",
//   },
//   {
//     title: "CMS Websites",
//     text: "Easy-to-manage websites built so your team can update content, blogs, pages, and media without technical stress.",
//   },
//   {
//     title: "E-Commerce Websites",
//     text: "Modern online stores designed for product visibility, smooth checkout, and better customer experience.",
//   },
// ];

// const process = [
//   "Discovery & Planning",
//   "UI/UX Wireframe",
//   "Website Design",
//   "Development",
//   "Testing & Optimization",
//   "Launch & Support",
// ];

// export default function WebDesignPage() {
//   return (
//     <main className="min-h-screen bg-[#EAEBDB] text-[#211955]">
//       <section
//         className="relative overflow-hidden px-4 pb-16 pt-28 text-white sm:px-6 md:px-10 md:pb-24 md:pt-32"
//         style={{
//         background:
//   "linear-gradient(to bottom right, #36aee4 0%, #360f8a 50%, #211955 100%)",
//         }}
//       >
//         <div className="pointer-events-none absolute left-[-140px] top-[-140px] h-[360px] w-[360px] rounded-full bg-white/18 blur-3xl" />
//         <div className="pointer-events-none absolute bottom-[-160px] right-[-140px] h-[420px] w-[420px] rounded-full bg-[#36aee4]/25 blur-3xl" />

//         <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
//           <motion.div
//             initial={{ opacity: 0, y: 35 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/12 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-md">
//               Web Design & Development
//             </p>

//             <h1 className="max-w-5xl text-[44px] font-semibold uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-[88px] lg:text-[104px]">
//               Websites That Look Premium And Convert
//             </h1>

//             <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/78 md:text-lg">
//               We design and develop responsive, fast, and SEO-ready websites
//               that help brands build trust, improve visibility, and generate
//               real business growth.
//             </p>

//             <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//               <Link
//                 href="/contact"
//                 className="inline-flex justify-center rounded-full bg-[#e64f0e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ff6a24]"
//               >
//                 Start Your Website
//               </Link>

//               <Link
//                 href="/portfolio"
//                 className="inline-flex justify-center rounded-full border border-white/30 bg-white/12 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/22"
//               >
//                 View Our Work
//               </Link>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.94, y: 35 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="rounded-[32px] border border-white/28 bg-white/12 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-md"
//           >
//             <div className="overflow-hidden rounded-[24px] border border-white/22 bg-[#EAEBDB] text-[#211955]">
//               <div className="flex items-center gap-2 border-b border-[#211955]/10 px-4 py-3">
//                 <span className="h-2.5 w-2.5 rounded-full bg-[#e64f0e]" />
//                 <span className="h-2.5 w-2.5 rounded-full bg-[#36aee4]" />
//                 <span className="h-2.5 w-2.5 rounded-full bg-[#211955]/25" />
//                 <span className="ml-auto text-[10px] font-semibold uppercase tracking-[0.16em] text-[#211955]/50">
//                   Website Preview
//                 </span>
//               </div>

//               <div className="p-5">
//                 <div className="mb-4 h-36 rounded-[20px] bg-[linear-gradient(135deg,#211955,#360f8a_55%,#36aee4)]" />
//                 <div className="grid gap-3 sm:grid-cols-3">
//                   <div className="h-24 rounded-2xl bg-[#C4CFE3]/70" />
//                   <div className="h-24 rounded-2xl bg-[#C4CFE3]/70" />
//                   <div className="h-24 rounded-2xl bg-[#C4CFE3]/70" />
//                 </div>
//                 <div className="mt-4 h-20 rounded-2xl bg-[#211955]/10" />
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <section className="bg-[#EAEBDB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
//         <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
//           <div>
          
//             <h2 className="text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[72px]">
//               Your Website Is Your Digital First Impression
//             </h2>
//           </div>

//           <div className="grid gap-4 sm:grid-cols-2">
//             {features.map((item, i) => (
//               <motion.div
//                 key={item}
//                 initial={{ opacity: 0, y: 28 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.05 }}
//                 className="rounded-[24px] border border-[#211955]/10 bg-white/45 p-5 shadow-[0_18px_50px_rgba(33,25,85,0.08)] backdrop-blur-md"
//               >
//                 <p className="mb-4 text-sm font-semibold text-[#211955]/45">
//                   {(i + 1).toString().padStart(2, "0")}
//                 </p>
//                 <h3 className="text-lg font-semibold uppercase">{item}</h3>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section
//         className="px-4 py-16 sm:px-6 md:px-10 md:py-24"
//         style={{
//          background:
//   "linear-gradient(to bottom right, #36aee4 0%, #360f8a 50%, #211955 100%)",
//         }}
//       >
//         <div className="mx-auto max-w-[1400px]">
//           <div className="mb-12 max-w-4xl">
           

//             <h2 className="text-4xl font-semibold uppercase leading-[0.95] text-white sm:text-5xl md:text-[72px]">
//               Websites Built For Every Business Stage
//             </h2>
//           </div>

//           <div className="grid gap-5 md:grid-cols-2">
//             {websiteTypes.map((item, i) => (
//               <motion.article
//                 key={item.title}
//                 initial={{ opacity: 0, y: 35 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.08 }}
//                 className="rounded-[28px] border border-white/22 bg-white/12 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.2)] backdrop-blur-md"
//               >
//                 <span className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#e64f0e]">
//                   0{i + 1}
//                 </span>

//                <h3 className="text-2xl font-semibold uppercase  text-[#e64f0e] ">
//                 {item.title}
//                </h3>
                    
               
              
                

//                 <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
//                   {item.text}
//                 </p>
//               </motion.article>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="bg-[#EAEBDB] px-4 py-16 sm:px-6 md:px-10 md:py-24">
//         <div className="mx-auto max-w-[1400px]">
//           <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
//             <div>
            

//               <h2 className="text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[72px]">
//                 Our Process
//                 From Idea To Launch
//               </h2>
//             </div>
//           </div>

//           <div className="grid gap-4 md:grid-cols-3">
//             {process.map((item, i) => (
//               <motion.div
//                 key={item}
//                 initial={{ opacity: 0, y: 28 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.05 }}
//                 className="rounded-[24px] border border-[#211955]/10 bg-white/45 p-5 shadow-[0_18px_45px_rgba(33,25,85,0.1)] backdrop-blur-md"
//               >
//                 <p className="text-5xl font-semibold text-[#211955]/20">
//                   {(i + 1).toString().padStart(2, "0")}
//                 </p>
//                 <h3 className="mt-6 text-xl font-semibold uppercase text-[#211955]">
//                   {item}
//                 </h3>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="bg-[#36aee4] px-4 py-16 sm:px-6 md:px-10 md:py-24">
//         <div className="mx-auto max-w-[1400px] rounded-[32px] border border-white/35 bg-[#EAEBDB]/80 p-6 text-center shadow-[0_30px_90px_rgba(33,25,85,0.18)] backdrop-blur-md sm:p-10 md:p-14">
//           <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#211955]/55">
//             Build A Better Website
//           </p>

//           <h2 className="mx-auto max-w-4xl text-4xl font-semibold uppercase leading-[0.95] sm:text-5xl md:text-[76px]">
//             Let&apos;s Create A Website That Works For Your Brand
//           </h2>

//           <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#211955]/75 md:text-base">
//             Get a clean, responsive, SEO-ready website designed to support
//             visibility, trust, and conversion.
//           </p>

//           <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
//             <Link
//               href="/contact"
//               className="rounded-full bg-[#211955] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#211955]/90"
//             >
//               Start Your Website
//             </Link>

//             <Link
//               href="/portfolio"
//               className="rounded-full border border-[#211955]/20 bg-white/25 px-7 py-3 text-sm font-medium text-[#211955] backdrop-blur-md transition hover:bg-white/45"
//             >
//               View Portfolio
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
