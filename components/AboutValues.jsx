// marketing-website/components/AboutValues.jsx
"use client";

import { motion } from "framer-motion";

export default function AboutValues() {
  const values = [
    {
      number: "01",
      title: "Innovation First",
      description: "We constantly explore new technologies and creative approaches to keep our clients ahead of the curve.",
    },
    {
      number: "02",
      title: "Data-Driven Decisions",
      description: "Every strategy is backed by insights, analytics, and measurable goals that drive real business results.",
    },
    {
      number: "03",
      title: "Client Partnership",
      description: "We don't just work for you — we work with you, becoming an extension of your team.",
    },
    {
      number: "04",
      title: "Authentic Storytelling",
      description: "We help brands find their unique voice and tell stories that genuinely connect with audiences.",
    },
  ];

  return (
    <section
      className="relative w-full px-10 py-32 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #C4CFE3, #BEC9E7, #6988FB)",
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="uppercase text-sm text-white/70 mb-4 tracking-wide">
            What We Stand For
          </p>
          <h2 className="uppercase tracking-tight leading-[0.9] text-[50px] md:text-[80px] lg:text-[100px] font-medium text-white">
            Our Core <br />
            Values
          </h2>
        </motion.div>

        {/* VALUES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group border-b border-white/30 pb-8 hover:border-white/80 transition cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <span className="text-6xl font-bold text-white/20 group-hover:text-white/40 transition">
                  {value.number}
                </span>
                <div>
                  <h3 className="text-2xl font-medium text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}