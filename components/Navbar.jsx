"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isAfterHero, setIsAfterHero] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.55;
      setIsAfterHero(window.scrollY > threshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const serviceLinks = [
    { name: "Brand Strategy", href: "/services/brand-strategy" },
    { name: "SEO Optimization", href: "/services/seo-optimization" },
    { name: "Social Media", href: "/services/social-media" },
    { name: "Performance Ads", href: "/services/performance-ads" },
    { name: "Web Designs", href: "/services/web-design" },
    { name: "E-Commerce Growth", href: "/services/ecommerce-growth" },
    { name: "Analytics And Data", href: "/services/analytics-data" },
    { name: "GEO Service", href: "/services/geo-service" },
    { name: "Blog", href: "/services/blog" },
  ];

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-3 py-2.5 transition-all duration-300 sm:px-4 sm:py-3 ${
          isAfterHero
            ? "border-white/20 bg-[#050816]/78 shadow-[0_12px_45px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            : "border-white/30 bg-[#0d1330]/52 shadow-[0_8px_30px_rgba(0,0,0,0.28)] backdrop-blur-lg"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 rounded-xl px-2 py-1.5">
          <Image
            src="/oldlogo.svg"
            alt="NovaTech logo"
            width={220}
            height={88}
            className="h-auto w-[125px] sm:w-[150px] md:w-[175px]"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 lg:flex">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.hasDropdown && pathname.startsWith("/services"));

            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? "bg-white text-[#0b1024]"
                        : "text-white/90 hover:bg-white/12 hover:text-white"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`text-xs transition ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </Link>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 top-[46px] w-[310px] -translate-x-1/2 rounded-2xl border border-white/20 bg-[#070c20]/95 p-3 shadow-[0_22px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
                      >
                        <div className="mb-2 px-2 py-1">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                            Services
                          </p>
                        </div>

                        <div className="grid gap-1.5">
                          {serviceLinks.map((service) => {
                            const serviceActive = pathname === service.href;

                            return (
                              <Link
                                key={service.name}
                                href={service.href}
                                className={`rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                                  serviceActive
                                    ? "bg-white text-[#0b1024]"
                                    : "text-white/82 hover:bg-white/12 hover:text-white"
                                }`}
                              >
                                {service.name}
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-white text-[#0b1024]"
                    : "text-white/90 hover:bg-white/12 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-xl bg-[#5A7EFF] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4a6ae0] md:inline-flex"
          >
            Start Project
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-xl border border-white/25 bg-white/10 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/20 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <div className="lg:hidden">
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              className="fixed inset-0 z-40 bg-black/50"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.aside
              className="fixed right-3 top-[84px] z-50 max-h-[calc(100vh-105px)] w-[90vw] max-w-[380px] overflow-y-auto rounded-2xl border border-white/20 bg-[#070c20]/95 p-4 shadow-2xl backdrop-blur-2xl"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                  Navigation
                </span>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg border border-white/20 px-2.5 py-1 text-xs text-white"
                >
                  Close
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {links.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.hasDropdown && pathname.startsWith("/services"));

                  if (link.hasDropdown) {
                    return (
                      <div key={link.name}>
                        <button
                          type="button"
                          onClick={() =>
                            setMobileServicesOpen((prev) => !prev)
                          }
                          className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition ${
                            isActive
                              ? "bg-white text-[#0b1024]"
                              : "bg-white/10 text-white hover:bg-white hover:text-[#0b1024]"
                          }`}
                        >
                          <span>{link.name}</span>
                          <span
                            className={`text-xs transition ${
                              mobileServicesOpen ? "rotate-180" : ""
                            }`}
                          >
                            ▾
                          </span>
                        </button>

                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-2 grid gap-1.5 rounded-2xl border border-white/10 bg-white/5 p-2">
                                <Link
                                  href="/services"
                                  onClick={() => setIsOpen(false)}
                                  className="rounded-xl px-3 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
                                >
                                  All Services
                                </Link>

                                {serviceLinks.map((service) => (
                                  <Link
                                    key={service.name}
                                    href={service.href}
                                    onClick={() => setIsOpen(false)}
                                    className="rounded-xl px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white hover:text-[#0b1024]"
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                        isActive
                          ? "bg-white text-[#0b1024]"
                          : "bg-white/10 text-white hover:bg-white hover:text-[#0b1024]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-[#5A7EFF] px-4 py-3 text-sm font-semibold text-white"
              >
                Start Project
              </Link>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}












// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import { AnimatePresence, motion } from "framer-motion";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);
//   const [isAfterHero, setIsAfterHero] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       const threshold = window.innerHeight * 0.55;
//       setIsAfterHero(window.scrollY > threshold);
//     };

//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     window.addEventListener("resize", onScroll);

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", onScroll);
//     };
//   }, []);

//   useEffect(() => {
//     setIsOpen(false);
//     setServicesOpen(false);
//     setMobileServicesOpen(false);
//   }, [pathname]);

//   const serviceLinks = [
//     { name: "Brand Strategy", href: "/services/brand-strategy" },
//     { name: "SEO Optimization", href: "/services/seo-optimization" },
//     { name: "Social Media", href: "/services/social-media" },
//     { name: "Performance Ads", href: "/services/performance-ads" },
//     { name: "Web Designs", href: "/services/web-design" },
//     { name: "E-Commerce Growth", href: "/services/ecommerce-growth" },
//     { name: "Analytics And Data", href: "/services/analytics-data" },
//     { name: "GEO Service", href: "/services/geo-service" },
//     { name: "Blog", href: "/blog" },
//   ];

//   const links = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Services", href: "/services", hasDropdown: true },
//     { name: "Portfolio", href: "/portfolio" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
//       <div
//         className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-3 py-2.5 transition-all duration-300 sm:px-4 sm:py-3 ${
//           isAfterHero
//             ? "border-white/50 bg-white/85 shadow-[0_12px_45px_rgba(33,25,85,0.18)] backdrop-blur-xl"
//             : "border-white/45 bg-white/70 shadow-[0_8px_30px_rgba(33,25,85,0.14)] backdrop-blur-lg"
//         }`}
//       >
//         <Link href="/" className="flex items-center gap-2 rounded-xl px-2 py-1.5">
//           <Image
//             src="/digitallogo.png"
//             alt="NovaTech logo"
//             width={220}
//             height={88}
//             className="h-auto w-[125px] sm:w-[150px] md:w-[175px]"
//             priority
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden items-center gap-2 lg:flex">
//           {links.map((link) => {
//             const isActive =
//               pathname === link.href ||
//               (link.hasDropdown && pathname.startsWith("/services"));

//             if (link.hasDropdown) {
//               return (
//                 <div
//                   key={link.name}
//                   className="relative"
//                   onMouseEnter={() => setServicesOpen(true)}
//                   onMouseLeave={() => setServicesOpen(false)}
//                 >
//                   <Link
//                     href={link.href}
//                     className={`flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-medium transition ${
//                       isActive
//                         ? "bg-[#211955] text-white"
//                         : "text-[#211955] hover:bg-[#36aee4]/15 hover:text-[#360f8a]"
//                     }`}
//                   >
//                     {link.name}
//                     <span
//                       className={`text-xs transition ${
//                         servicesOpen ? "rotate-180" : ""
//                       }`}
//                     >
//                       ▾
//                     </span>
//                   </Link>

//                   <AnimatePresence>
//                     {servicesOpen && (
//                       <motion.div
//                         initial={{ opacity: 0, y: 10, scale: 0.98 }}
//                         animate={{ opacity: 1, y: 0, scale: 1 }}
//                         exit={{ opacity: 0, y: 8, scale: 0.98 }}
//                         transition={{ duration: 0.18 }}
//                         className="absolute left-1/2 top-[46px] w-[310px] -translate-x-1/2 rounded-2xl border border-[#211955]/10 bg-white/95 p-3 shadow-[0_22px_60px_rgba(33,25,85,0.22)] backdrop-blur-2xl"
//                       >
//                         <div className="mb-2 px-2 py-1">
//                           <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#211955]/45">
//                             Services
//                           </p>
//                         </div>

//                         <div className="grid gap-1.5">
//                           {serviceLinks.map((service) => {
//                             const serviceActive = pathname === service.href;

//                             return (
//                               <Link
//                                 key={service.name}
//                                 href={service.href}
//                                 className={`rounded-xl px-3 py-2.5 text-sm font-medium transition ${
//                                   serviceActive
//                                     ? "bg-[#211955] text-white"
//                                     : "text-[#211955]/80 hover:bg-[#36aee4]/15 hover:text-[#211955]"
//                                 }`}
//                               >
//                                 {service.name}
//                               </Link>
//                             );
//                           })}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               );
//             }

//             return (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
//                   isActive
//                     ? "bg-[#211955] text-white"
//                     : "text-[#211955] hover:bg-[#36aee4]/15 hover:text-[#360f8a]"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             );
//           })}
//         </nav>

//         <div className="flex items-center gap-2">
//           <Link
//             href="/contact"
//             className="hidden rounded-xl bg-[#e64f0e] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#ff6a24] md:inline-flex"
//           >
//             Start Project
//           </Link>

//           <button
//             type="button"
//             onClick={() => setIsOpen((prev) => !prev)}
//             className="rounded-xl border border-[#211955]/15 bg-[#211955] px-3 py-2 text-sm font-medium text-white transition hover:bg-[#360f8a] lg:hidden"
//             aria-label="Toggle menu"
//             aria-expanded={isOpen}
//           >
//             Menu
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <div className="lg:hidden">
//             <motion.button
//               type="button"
//               aria-label="Close menu overlay"
//               className="fixed inset-0 z-40 bg-black/45"
//               onClick={() => setIsOpen(false)}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             />

//             <motion.aside
//               className="fixed right-3 top-[84px] z-50 max-h-[calc(100vh-105px)] w-[90vw] max-w-[380px] overflow-y-auto rounded-2xl border border-[#211955]/10 bg-white/95 p-4 shadow-2xl backdrop-blur-2xl"
//               initial={{ opacity: 0, y: -12, scale: 0.98 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: -10, scale: 0.98 }}
//               transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
//             >
//               <div className="mb-3 flex items-center justify-between">
//                 <span className="text-xs uppercase tracking-[0.2em] text-[#211955]/60">
//                   Navigation
//                 </span>

//                 <button
//                   type="button"
//                   onClick={() => setIsOpen(false)}
//                   className="rounded-lg border border-[#211955]/15 px-2.5 py-1 text-xs text-[#211955]"
//                 >
//                   Close
//                 </button>
//               </div>

//               <nav className="flex flex-col gap-2">
//                 {links.map((link) => {
//                   const isActive =
//                     pathname === link.href ||
//                     (link.hasDropdown && pathname.startsWith("/services"));

//                   if (link.hasDropdown) {
//                     return (
//                       <div key={link.name}>
//                         <button
//                           type="button"
//                           onClick={() =>
//                             setMobileServicesOpen((prev) => !prev)
//                           }
//                           className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition ${
//                             isActive
//                               ? "bg-[#211955] text-white"
//                               : "bg-[#211955]/5 text-[#211955] hover:bg-[#36aee4]/15"
//                           }`}
//                         >
//                           <span>{link.name}</span>
//                           <span
//                             className={`text-xs transition ${
//                               mobileServicesOpen ? "rotate-180" : ""
//                             }`}
//                           >
//                             ▾
//                           </span>
//                         </button>

//                         <AnimatePresence>
//                           {mobileServicesOpen && (
//                             <motion.div
//                               initial={{ height: 0, opacity: 0 }}
//                               animate={{ height: "auto", opacity: 1 }}
//                               exit={{ height: 0, opacity: 0 }}
//                               transition={{ duration: 0.22 }}
//                               className="overflow-hidden"
//                             >
//                               <div className="mt-2 grid gap-1.5 rounded-2xl border border-[#211955]/10 bg-[#211955]/5 p-2">
//                                 <Link
//                                   href="/services"
//                                   onClick={() => setIsOpen(false)}
//                                   className="rounded-xl px-3 py-2 text-sm font-medium text-[#211955]/70 transition hover:bg-[#36aee4]/15 hover:text-[#211955]"
//                                 >
//                                   All Services
//                                 </Link>

//                                 {serviceLinks.map((service) => (
//                                   <Link
//                                     key={service.name}
//                                     href={service.href}
//                                     onClick={() => setIsOpen(false)}
//                                     className="rounded-xl px-3 py-2 text-sm font-medium text-[#211955]/80 transition hover:bg-[#36aee4]/15 hover:text-[#211955]"
//                                   >
//                                     {service.name}
//                                   </Link>
//                                 ))}
//                               </div>
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     );
//                   }

//                   return (
//                     <Link
//                       key={link.name}
//                       href={link.href}
//                       onClick={() => setIsOpen(false)}
//                       className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
//                         isActive
//                           ? "bg-[#211955] text-white"
//                           : "bg-[#211955]/5 text-[#211955] hover:bg-[#36aee4]/15"
//                       }`}
//                     >
//                       {link.name}
//                     </Link>
//                   );
//                 })}
//               </nav>

//               <Link
//                 href="/contact"
//                 onClick={() => setIsOpen(false)}
//                 className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-[#e64f0e] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#ff6a24]"
//               >
//                 Start Project
//               </Link>
//             </motion.aside>
//           </div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }