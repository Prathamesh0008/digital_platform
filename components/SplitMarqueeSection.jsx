"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SplitMarqueeSection() {
  const marqueeItems = [
    "Global Digital Marketing",
    "SEO Excellence",
    "Audience Targeting",
    "Performance Campaigns",
    "Brand Growth",
  ];

  return (
    <section className="w-full overflow-hidden">
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-scroll {
          animation: marquee 25s linear infinite;
        }
      `}</style>

      <div className="overflow-hidden border-b border-black/10 bg-[#EAEBDB]">
        <div className="marquee-scroll flex whitespace-nowrap py-3 text-base font-medium text-[#0d2d47] sm:py-4 sm:text-lg">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="mx-5 flex items-center gap-3 sm:mx-8">
              + {item}
            </span>
          ))}
        </div>
      </div>

      <div
        className="py-10 sm:py-12 md:py-14"
        style={{
          background:
            "linear-gradient(to top, #EAEBDB, #C4CFE3, #8EA5F1, #7392FB)",
        }}
      >
        <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-4 sm:px-6 md:grid-cols-2 md:gap-10 md:px-10">
          <div className="flex flex-col items-start justify-center text-left text-[#0d2d47]">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl font-medium leading-[1.08] sm:text-5xl md:text-[58px] lg:text-[72px]"
            >
              Leading
              <br />
              Digital Marketing
              <br />
              Agency Worldwide
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-md text-sm leading-7 text-[#0d2d47]/70 sm:text-base"
            >
              We help brands establish, strengthen, and scale their online
              presence with transparent, measurable, and performance-focused
              execution.
            </motion.p>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/services"
                className="mt-8 inline-flex rounded-full bg-[#0d2d47] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#5A7EFF]"
              >
                Explore Strategy
              </Link>
            </motion.div>
          </div>

          <div className="flex items-center justify-start">
            <motion.p
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="max-w-xl text-left text-base leading-relaxed text-[#0d2d47] sm:text-lg md:text-xl"
            >
              Behind every great result is a seamless workflow: planning,
              strategy, execution, tracking, refinement, and repeat. This cycle
              keeps your SEO, social, content, and paid campaigns improving
              with every phase.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
