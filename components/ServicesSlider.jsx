//marketing-website\components\ServicesSlider.jsx
"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Megaphone,
  Search,
  Globe,
  Laptop,
  Rocket
} from "lucide-react";

export default function ServicesSlider() {
  const services = [
  {
    icon: <BarChart />,
    title: "Brand Strategy",
    desc: "Building powerful brand identities...",
  },
  {
    icon: <Megaphone />,
    title: "Digital Marketing",
    desc: "Data-driven campaigns...",
  },
  {
    icon: <Search />,
    title: "SEO Optimization",
    desc: "Rank higher...",
  },
  {
    icon: <Globe />,
    title: "Social Media",
    desc: "Engaging content...",
  },
  {
    icon: <Rocket />,
    title: "Performance Ads",
    desc: "Maximize ROI...",
  },
  {
    icon: <Laptop />,
    title: "Web Design",
    desc: "Modern websites...",
  },
];

  return (
    <section className="w-full py-28 bg-[#FFF8F5]">

      {/* 🔥 HEADER */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-medium text-[#0d2d47]">
          Our <span className="text-[#5A7EFF]">Services</span>
        </h1>

        <p className="mt-6 text-[#0d2d47]/70 max-w-xl mx-auto">
          We create powerful digital solutions that help brands grow,
          scale and dominate their industry.
        </p>
      </div>

      {/* 🔥 GRID */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {services.map((item, i) => (
          <motion.div
            key={i}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E1E4DD]"
          >

            {/* ICON */}
            <div className="text-3xl text-[#5A7EFF] mb-6">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-2xl font-semibold text-[#0d2d47] mb-4">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-[#0d2d47]/70 leading-relaxed mb-6">
              {item.desc}
            </p>

            {/* LINE ANIMATION */}
            <div className="h-[2px] w-0 bg-gradient-to-r from-[#5A7EFF] to-[#7392FB] group-hover:w-full transition-all duration-500" />

          </motion.div>
        ))}

      </div>
    </section>
  );
}