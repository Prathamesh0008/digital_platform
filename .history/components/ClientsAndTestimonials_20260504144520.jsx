//marketing-website\components\ClientsAndTestimonials.jsx
"use client";

import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

/* 🔥 SINGLE LOGO ITEM WITH REPLAY ANIMATION */
function LogoItem({ src, i }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.4,
  });

  const controls = useAnimation();

  const isTopRow = i < 3;

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // 👈 reset when out
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          x: isTopRow ? -160 : 160,
          scale: 0.92,
          filter: "blur(6px)",
        },
        visible: {
          opacity: 1,
          x: 0,
          scale: 1,
          filter: "blur(0px)",
        },
      }}
      initial="hidden"
      animate={controls}
      transition={{
        delay: isTopRow ? i * 0.18 : (i - 3) * 0.22 + 0.3,
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ scale: 1.08, y: -4 }}
      className={`flex items-center justify-center h-[180px]
        ${i % 3 !== 2 ? "border-r" : ""}
        ${i < 3 ? "border-b" : ""}
        border-black/20`}
    >
      <img
        src={src}
        className="max-h-[140px] md:max-h-[170px] w-auto object-contain
          opacity-70 hover:opacity-100 transition duration-300"
      />
    </motion.div>
  );
}

export default function ClientsAndTestimonials() {
  return (
    <section className="w-full">

      {/* ========================= */}
      {/* 🔥 CLIENTS SECTION */}
      {/* ========================= */}
      <div className="bg-[#EAEBDB] px-10 py-24">

        <div className="grid md:grid-cols-4 border-t border-black/20">

          {/* LEFT TITLE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="p-10 border-r border-black/20 flex items-start"
          >
            <h2 className="uppercase leading-[0.9] text-[60px] font-medium">
              Our <br /> Clients
            </h2>
          </motion.div>

          {/* 🔥 RIGHT LOGO GRID */}
          {/* 🔥 RIGHT LOGO GRID */}
<div className="md:col-span-3 flex flex-col gap-6 overflow-hidden">

  {/* 🔥 TOP ROW → LEFT TO RIGHT */}
  <motion.div
    className="flex gap-10 whitespace-nowrap"
    animate={{ x: ["-50%", "0%"] }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    {[
      "/Travelo.avif",
      "/Bayview.avif",
      "/MTVS.avif",
      "/Fiber Box.avif",
      "/Arena.avif",
      // duplicate for loop
      "/Travelo.avif",
      "/Bayview.avif",
      "/MTVS.avif",
      "/Fiber Box.avif",
      "/Arena.avif",
    ].map((src, i) => (
      <div
        key={i}
        className="flex items-center justify-center h-[120px] min-w-[200px]"
      >
        <img
          src={src}
          className="max-h-[80px] w-auto object-contain opacity-70 hover:opacity-100 transition"
        />
      </div>
    ))}
  </motion.div>

  {/* 🔥 BOTTOM ROW → RIGHT TO LEFT */}
  <motion.div
    className="flex gap-10 whitespace-nowrap"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    {[
      "/Travelo.avif",
      "/Bayview.avif",
      "/MTVS.avif",
      "/Fiber Box.avif",
      "/Arena.avif",
      // duplicate for loop
      "/Travelo.avif",
      "/Bayview.avif",
      "/MTVS.avif",
      "/Fiber Box.avif",
      "/Arena.avif",
    ].map((src, i) => (
      <div
  key={i}
  className="flex items-center justify-center h-[160px] min-w-[260px]"
>
  <img
    src={src}
    className="max-h-[110px] md:max-h-[130px] w-auto object-contain
      opacity-70 hover:opacity-100 hover:scale-110
      transition duration-300"
  />
</div>
    ))}
  </motion.div>

</div>

        </div>
      </div>

      {/* ========================= */}
      {/* 🔥 BIG STATEMENT */}
      {/* ========================= */}
      <div
        className="px-10 py-32"
        style={{
          background:
            "linear-gradient(to bottom, #EAEBDB, #E1E4DD, #BEC9E7, #6988FB, #5A7EFF)",
        }}
      >
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="uppercase tracking-tight leading-[0.9]
              text-[50px] md:text-[90px] lg:text-[120px] font-medium"
          >
            Driven by innovation, <br />
            Fueled by strategy — <br />
            Redefining success in <br />
            Every campaign!
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-start md:items-end leading-none"
          >
            <Image
              src="/Toppart.png"
              alt="Top logo part"
              width={100}
              height={10}
              className=" ml-[-50px]   "
            />
            <Image
              src="/Bottompart.png"
              alt="Bottom logo part"
              width={100}
              height={10}
              className="   "
            />
          </motion.div>
        </div>
      </div>

      {/* ========================= */}
      {/* 🔥 TESTIMONIALS */}
      {/* ========================= */}
      <div
        className="relative px-10 py-24 text-black"
        style={{
          background: "linear-gradient(to bottom, #5A7EFF, #6988FB)",
        }}
      >

        {/* GRID LINES */}
        <div className="absolute inset-0 grid grid-cols-4 pointer-events-none">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border-l border-black/20" />
          ))}
        </div>

        <div className="relative grid md:grid-cols-4 gap-10">

          {/* LEFT TITLE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="uppercase leading-[0.9] text-[60px] font-medium">
              What our <br /> clients <br /> say
            </h2>
          </motion.div>

          {/* TESTIMONIALS */}
          {[
            {
              text: "Our online presence was revolutionized by NovaTech. The team helped us reach a more targeted audience and achieve exceptional results.",
              name: "Sarah Johnson, CMO ROON",
            },
            {
              text: "Their SEO strategies brought us to the top of search results. Exceptional visibility and measurable growth.",
              name: "Andrew White, Owner of Volaso",
            },
            {
              text: "Our social media engagement tripled. The team transformed our online interactions and strengthened our connection.",
              name: "Hannah Green, Director of Vailu",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-col justify-between group"
            >
              <p className="mb-10 text-black leading-relaxed">
                "{item.text}"
              </p>

              <span className="border border-black px-4 py-2 rounded-full w-fit text-sm
                group-hover:bg-black group-hover:text-white transition">
                {item.name}
              </span>
            </motion.div>
          ))}

        </div>
      </div>

    </section>
  );
}


// //marketing-website\components\ClientsAndTestimonials.jsx
// "use client";

// import { motion } from "framer-motion";

// export default function ClientsAndTestimonials() {
//   return (
//     <section className="w-full">

//       {/* ========================= */}
//       {/* 🔥 CLIENTS SECTION */}
//       {/* ========================= */}
//       <div className="bg-[#EAEBDB] px-10 py-24">

//         <div className="grid md:grid-cols-4 border-t border-black/20">

//           {/* LEFT TITLE */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//             className="p-10 border-r border-black/20 flex items-start"
//           >
//             <h2 className="uppercase leading-[0.9] text-[60px] font-medium">
//               Our <br /> Clients
//             </h2>
//           </motion.div>

//           {/* RIGHT GRID */}
//          <div className="md:col-span-3 grid grid-cols-3 overflow-hidden">

//   {[
//     "/Travelo.avif",
//     "/Bayview.avif",
//     "/MTVS.avif",
//     "/Fiber Box.avif",
//     "/Arena.avif",
//   ].map((src, i) => {
//     const isTopRow = i < 3;

//     return (
//       <motion.div
//         key={i}
//         initial={{ 
//           opacity: 0,
//           x: isTopRow ? -120 : 120, // 👈 direction control
//           scale: 0.95,
//         }}
//         whileInView={{
//           opacity: 1,
//           x: 0,
//           scale: 1,
//         }}
//         transition={{
//           delay: i * 0.15,
//           duration: 1,
//           ease: [0.22, 1, 0.36, 1], // premium easing
//         }}
//         viewport={{ once: true, margin: "-50px" }}
//         className={`flex items-center justify-center h-[180px]
//           ${i % 3 !== 2 ? "border-r" : ""}
//           ${i < 3 ? "border-b" : ""}
//           border-black/20`}
//       >
//         <img
//           src={src}
//           className="max-h-[140px] md:max-h-[170px] w-auto object-contain
//             opacity-70 hover:opacity-100 hover:scale-105
//             transition duration-300"
//         />
//       </motion.div>
//     );
//   })}

//   {/* EMPTY CELL */}
//   <div className="h-[180px]" />

// </div>
//         </div>
//       </div>

//       {/* ========================= */}
//       {/* 🔥 BIG STATEMENT */}
//       {/* ========================= */}
//       <div
//         className="px-10 py-32"
//         style={{
//           background:
//             "linear-gradient(to bottom, #EAEBDB, #E1E4DD, #BEC9E7, #6988FB, #5A7EFF)",
//         }}
//       >
//         <motion.h1
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="uppercase tracking-tight leading-[0.9]
//             text-[50px] md:text-[100px] lg:text-[140px] font-medium"
//         >
//           Driven by innovation, <br />
//           Fueled by strategy — <br />
//           Redefining success in <br />
//           Every campaign!
//         </motion.h1>
//       </div>

//       {/* ========================= */}
//       {/* 🔥 TESTIMONIALS */}
//       {/* ========================= */}
//       <div
//         className="relative px-10 py-24 text-black"
//         style={{
//           background: "linear-gradient(to bottom, #5A7EFF, #6988FB)",
//         }}
//       >

//         {/* GRID LINES */}
//         <div className="absolute inset-0 grid grid-cols-4 pointer-events-none">
//           {[1, 2, 3, 4].map((i) => (
//             <div key={i} className="border-l border-black/20" />
//           ))}
//         </div>

//         <div className="relative grid md:grid-cols-4 gap-10">

//           {/* LEFT TITLE */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="uppercase leading-[0.9] text-[60px] font-medium">
//               What our <br /> clients <br /> say
//             </h2>
//           </motion.div>

//           {/* TESTIMONIALS */}
//           {[
//             {
//               text: "Our online presence was revolutionized by NovaTech. The team helped us reach a more targeted audience and achieve exceptional results.",
//               name: "Sarah Johnson, CMO ROON",
//             },
//             {
//               text: "Their SEO strategies brought us to the top of search results. Exceptional visibility and measurable growth.",
//               name: "Andrew White, Owner of Volaso",
//             },
//             {
//               text: "Our social media engagement tripled. The team transformed our online interactions and strengthened our connection.",
//               name: "Hannah Green, Director of Vailu",
//             },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.2, duration: 0.8 }}
//               viewport={{ once: false, amount: 0.3 }}
//               className="flex flex-col justify-between group"
//             >
//               <p className="mb-10 text-black leading-relaxed">
//                 "{item.text}"
//               </p>

//               <span className="border border-black px-4 py-2 rounded-full w-fit text-sm
//                 group-hover:bg-black group-hover:text-white transition">
//                 {item.name}
//               </span>
//             </motion.div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }
