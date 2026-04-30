// components/ServicesGrid.jsx
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

export default function ServicesGrid() {
  const services = [
    {
      icon: <BarChart />,
      title: "Brand Strategy",
      desc: "Crafting strong identities that stand out.",
    },
    {
      icon: <Megaphone />,
      title: "Digital Marketing",
      desc: "Campaigns that deliver measurable growth.",
    },
    {
      icon: <Search />,
      title: "SEO Optimization",
      desc: "Improve rankings and visibility.",
    },
    {
      icon: <Globe />,
      title: "Social Media",
      desc: "Engage and grow your audience.",
    },
    {
      icon: <Rocket />,
      title: "Performance Ads",
      desc: "Maximize ROI with precision targeting.",
    },
    {
      icon: <Laptop />,
      title: "Web Design",
      desc: "Modern high-converting websites.",
    },
  ];

  return (
    <section className="py-24 bg-[#EAEBDB]">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-medium text-[#0d2d47] mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {services.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="group bg-white p-6 rounded-xl border border-[#C4CFE3]"
            >
              <div className="text-[#5A7EFF] text-2xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-lg font-medium mb-2 text-[#0d2d47]">
                {item.title}
              </h3>

              <p className="text-sm text-[#0d2d47]/70 mb-4">
                {item.desc}
              </p>

              <span className="text-sm text-[#5A7EFF] flex items-center gap-2">
                View more →
              </span>

              <div className="mt-2 h-[1px] w-0 bg-[#5A7EFF] group-hover:w-full transition-all" />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}