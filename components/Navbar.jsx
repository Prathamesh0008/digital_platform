
//components\Navbar.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const rotatingWords = ["Start Project", "Digital", "Growth", "Online"];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "auto" });
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isAfterHero, setIsAfterHero] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const prefetchedRoutesRef = useRef(new Set());

const serviceLinks = [
  { name: "Brand Strategy", href: "/services/brand-strategy" },
  { name: "SEO Optimization", href: "/services/seo-optimization" },
  { name: "Social Media", href: "/services/social-media" },
  { name: "Performance Ads", href: "/services/performance-ads" },
  { name: "Web Designs", href: "/services/web-design" },
  { name: "E-Commerce Growth", href: "/services/ecommerce-growth" },
  { name: "Analytics And Data", href: "/services/analytics-data" },
  { name: "GEO Service", href: "/services/geo-service" },
];

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    // { name: "Portfolio", href: "/portfolio" },
     { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/services/blog" },
    { name: "Contact", href: "/contact" },
    
  ];

  const prefetchRoutes = (routes) => {
    routes.forEach((route) => {
      if (prefetchedRoutesRef.current.has(route)) {
        return;
      }

      router.prefetch(route);
      prefetchedRoutesRef.current.add(route);
    });
  };

  useEffect(() => {
    let ticking = false;
    let lastScrollY = 0;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const threshold = window.innerHeight * 0.55;
          setIsAfterHero(currentScrollY > threshold);
          const scrollingUp = currentScrollY < lastScrollY;
          const nearTop = currentScrollY < 24;

          setIsNavVisible(nearTop || scrollingUp);
          lastScrollY = currentScrollY;
          ticking = false;
        });
      }
    };

    const onResize = () => {
      const threshold = window.innerHeight * 0.55;
      setIsAfterHero(window.scrollY > threshold);
      setIsNavVisible(true);
    };

    lastScrollY = window.scrollY;
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsOpen(false);
      setServicesOpen(false);
      setMobileServicesOpen(false);
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);
  
//push website down when mobile services dropdown is open to prevent content jump when it opens/closes
  // useEffect(() => {
  //   const isMobile = window.matchMedia("(max-width: 1023px)").matches;

  //   document.body.style.transition = "padding-top 0.35s ease";

  //   if (isMobile && isOpen) {
  //     document.body.style.paddingTop = mobileServicesOpen ? "620px" : "430px";
  //   } else {
  //     document.body.style.paddingTop = "0px";
  //   }

  //   return () => {
  //     document.body.style.paddingTop = "0px";
  //   };
  // }, [isOpen, mobileServicesOpen]);

  // Handle word rotation with "Start Project" staying longer
  useEffect(() => {
  const durations = [2800, 1500, 1500, 1500];

  const timeoutId = setTimeout(() => {
    setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
  }, durations[currentWordIndex]);

  return () => clearTimeout(timeoutId);
}, [currentWordIndex]);

  useEffect(() => {
    const routesToPrefetch = [
      ...links.map((link) => link.href),
      ...serviceLinks.map((link) => link.href),
    ];

    const warmRoutes = () => prefetchRoutes(routesToPrefetch);

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(warmRoutes, { timeout: 2000 });

      return () => window.cancelIdleCallback(idleId);
    }

    const timer = window.setTimeout(warmRoutes, 1200);

    return () => window.clearTimeout(timer);
  }, [router]);

  const handleServicesPrefetch = () => {
    prefetchRoutes(serviceLinks.map((service) => service.href));
  };

  const handleNavIntent = (href) => {
    prefetchRoutes([href]);
  };

  const handleNavClick = (href) => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);

    if (pathname === href) {
      scrollToTop();
      return;
    }

    requestAnimationFrame(() => {
      scrollToTop();
    });
  };

  return (
    <header
      className={`app-navbar fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-transform duration-300 sm:px-5 sm:pt-4 ${
        isNavVisible ? "translate-y-0" : "-translate-y-[140%]"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-300 ${
          isAfterHero
            ? "border-black/10 bg-white/92 shadow-[0_12px_45px_rgba(13,45,71,0.16)] backdrop-blur-xl"
            : "border-black/10 bg-white/85 shadow-[0_8px_30px_rgba(13,45,71,0.12)] backdrop-blur-lg"
        }`}
      >
        <div className="flex items-center justify-between px-3 py-2.5 sm:px-4 sm:py-3">
          <Link
            href="/"
            onMouseEnter={() => handleNavIntent("/")}
            onTouchStart={() => handleNavIntent("/")}
            onClick={() => handleNavClick("/")}
            scroll={false}
            className="flex items-center gap-2 rounded-xl px-2 py-2.5"
          >
            <Image
              src="/novalogo1.svg"
              alt="NovaTechscience"
              width={230}
              height={88}
          className="h-auto w-[190px] sm:w-[210px] md:w-[180px]"
              priority
            />
          </Link>

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
                    onMouseEnter={() => {
                      handleServicesPrefetch();
                      setServicesOpen(true);
                    }}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      onMouseEnter={() => handleNavIntent(link.href)}
                      onTouchStart={() => handleNavIntent(link.href)}
                      onClick={() => handleNavClick(link.href)}
                      scroll={false}
                      className={`flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-medium transition ${
                        isActive
                          ? "bg-black text-white"
                          : "text-black hover:bg-black/10"
                      }`}
                    >
                      {link.name}
                      <FaChevronDown
                        className={`text-[10px] transition ${servicesOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </Link>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.18 }}
                         className="absolute left-1/2 top-[42px] w-[235px] -translate-x-1/2 rounded-2xl border border-black/10 bg-white/95 p-2 shadow-[0_16px_42px_rgba(13,45,71,0.14)] backdrop-blur-2xl"
                        >
                          <p className="mb-2 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45">
                            Services
                          </p>

                          <div className="grid gap-1.5">
                            {serviceLinks.map((service) => {
  const isServiceActive = pathname === service.href;

  return (
    <Link
      key={service.name}
      href={service.href}
      onMouseEnter={() => handleNavIntent(service.href)}
      onTouchStart={() => handleNavIntent(service.href)}
      onClick={() => handleNavClick(service.href)}
      scroll={false}
      className={`block rounded-xl px-3 py-2 text-[13px] font-medium transition ${
        isServiceActive
          ? "bg-black text-white"
          : "text-black/75 hover:bg-black/8 hover:text-black"
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
                  onMouseEnter={() => handleNavIntent(link.href)}
                  onTouchStart={() => handleNavIntent(link.href)}
                  onClick={() => handleNavClick(link.href)}
                  scroll={false}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-black text-white"
                      : "text-black hover:bg-black/10"
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
  className="group relative hidden h-12 w-[178px] items-center justify-between overflow-visible rounded-full bg-[#0d2d47] px-3 text-sm font-bold text-white shadow-[0_12px_32px_rgba(13,45,71,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(115,146,251,0.35)] md:inline-flex"
>
  <span className="absolute inset-0 bg-gradient-to-r from-[#7392FB]/0 via-[#7392FB]/35 to-[#7392FB]/0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:animate-shimmer" />

<span className="relative flex h-12 min-w-0 flex-1 items-center justify-center overflow-visible px-2 text-center">
    <AnimatePresence mode="wait">
      <motion.span
        key={currentWordIndex}
        initial={{ y: 16, opacity: 0, filter: "blur(4px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        exit={{ y: -16, opacity: 0, filter: "blur(4px)" }}
        transition={{ duration: 0.28, ease: "easeOut" }}
   className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[22px] font-normal text-white"
style={{
  fontFamily: "'Great Vibes', cursive",
  textShadow: `
    0 0 8px rgba(230,79,14,0.55),
    0 0 16px rgba(230,79,14,0.45),
    0 0 28px rgba(230,79,14,0.35)
  `,
}}
      >
        {rotatingWords[currentWordIndex]}
      </motion.span>
    </AnimatePresence>
  </span>

  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#0d2d47] transition group-hover:translate-x-0.5">
    →
  </span>
</Link>
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-black text-white transition hover:bg-black/80 lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span
                className={`absolute h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                  isOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                  isOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
          <motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -10 }}
  transition={{ duration: 0.25, ease: "easeOut" }}
  className="max-h-[calc(100vh-110px)] overflow-y-auto overscroll-contain lg:hidden"
>
              <div className="border-t border-black/10 p-4 pt-3">
                <nav className="flex flex-col gap-2">
                  {links.map((link) => {
                    const isActive =
                      pathname === link.href ||
                      (link.hasDropdown && pathname.startsWith("/services"));

                    if (link.hasDropdown) {
                      return (
                        <div key={link.name}>
                          <div
                            className={`flex overflow-hidden rounded-xl ${
                              isActive ? "bg-black text-white" : "bg-black/5 text-black"
                            }`}
                          >
                            <Link
                              href={link.href}
                              onTouchStart={() => handleNavIntent(link.href)}
                              onClick={() => handleNavClick(link.href)}
                              scroll={false}
                              className="flex flex-1 items-center px-4 py-3 text-sm font-medium"
                            >
                              {link.name}
                            </Link>

                            <button
                              type="button"
                              onClick={() => {
                                handleServicesPrefetch();
                                setMobileServicesOpen((prev) => !prev);
                              }}
                              className="flex w-14 items-center justify-center border-l border-black/10"
                            >
                              <FaChevronDown
                                className={`text-xs transition duration-300 ${
                                  mobileServicesOpen ? "rotate-180" : ""
                                }`}
                                aria-hidden="true"
                              />
                            </button>
                          </div>

                          <AnimatePresence>
                            {mobileServicesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0, y: -6 }}
                                animate={{ height: "auto", opacity: 1, y: 0 }}
                                exit={{ height: 0, opacity: 0, y: -6 }}
                                transition={{ duration: 0.28 }}
                                className="overflow-hidden"
                              >
                                <div className="mt-2 grid gap-1.5 rounded-2xl border border-black/10 bg-black/[0.03] p-2">
                                 {serviceLinks.map((service) => {
  const isServiceActive = pathname === service.href;

  return (
    <Link
      key={service.name}
      href={service.href}
      onTouchStart={() => handleNavIntent(service.href)}
      onClick={() => handleNavClick(service.href)}
      scroll={false}
      className={`block rounded-xl px-3 py-2 text-[13px] font-medium transition ${
        isServiceActive
          ? "bg-black text-white"
          : "text-black/75 hover:bg-black hover:text-white"
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
                        onTouchStart={() => handleNavIntent(link.href)}
                        onClick={() => handleNavClick(link.href)}
                        scroll={false}
                        className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                          isActive
                            ? "bg-black text-white"
                            : "bg-black/5 text-black hover:bg-black hover:text-white"
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
 className="group relative mt-3 inline-flex h-12 w-full items-center justify-between overflow-visible rounded-full bg-[#0d2d47] px-4 text-sm font-bold text-white shadow-[0_12px_30px_rgba(13,45,71,0.28)]"
>
  <span className="absolute inset-0 bg-gradient-to-r from-[#7392FB]/0 via-[#7392FB]/30 to-[#7392FB]/0 opacity-70 animate-shimmer" />
<span className="relative flex h-12 flex-1 items-center justify-center overflow-visible text-center">
    <AnimatePresence mode="wait">
      <motion.span
        key={currentWordIndex}
        initial={{ y: 16, opacity: 0, filter: "blur(4px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        exit={{ y: -16, opacity: 0, filter: "blur(4px)" }}
        transition={{ duration: 0.28, ease: "easeOut" }}
   className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[22px] font-normal"
        style={{ fontFamily: "'Great Vibes', cursive" }}
      >
        {rotatingWords[currentWordIndex]}
      </motion.span>
    </AnimatePresence>
  </span>

  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#0d2d47]">
    →
  </span>
</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 1.5s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
}














// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import { AnimatePresence, motion } from "framer-motion";
// import { FaChevronDown } from "react-icons/fa";

// const rotatingWords = ["Start Project", "Digital", "Growth", "Online"];

// export default function Navbar() {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);
//   const [isAfterHero, setIsAfterHero] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [isWordGlowing, setIsWordGlowing] = useState(false);

//   const serviceLinks = [
//     { name: "Brand Strategy", href: "/services/brand-strategy" },
//     { name: "SEO Optimization", href: "/services/seo-optimization" },
//     { name: "Social Media", href: "/services/social-media" },
//     { name: "Performance Ads", href: "/services/performance-ads" },
//     { name: "Web Designs", href: "/services/web-design" },
//     { name: "E-Commerce Growth", href: "/services/ecommerce-growth" },
//     { name: "Analytics And Data", href: "/services/analytics-data" },
//     { name: "GEO Service", href: "/services/geo-service" },
//   ];

//   const links = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Services", href: "/services", hasDropdown: true },
//     // { name: "Portfolio", href: "/portfolio" },
//     { name: "Case Studies", href: "/case-studies" },
//     { name: "Blog", href: "/services/blog" },
//     { name: "Contact", href: "/contact" },
//   ];

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
//     const frame = requestAnimationFrame(() => {
//       setIsOpen(false);
//       setServicesOpen(false);
//       setMobileServicesOpen(false);
//     });

//     return () => cancelAnimationFrame(frame);
//   }, [pathname]);

//   useEffect(() => {
//     const durations = [2800, 1500, 1500, 1500];

//     setIsWordGlowing(true);

//     const glowTimer = setTimeout(() => {
//       setIsWordGlowing(false);
//     }, 550);

//     const timeoutId = setTimeout(() => {
//       setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
//     }, durations[currentWordIndex]);

//     return () => {
//       clearTimeout(timeoutId);
//       clearTimeout(glowTimer);
//     };
//   }, [currentWordIndex]);

//   return (
//     <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
//       <div
//         className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-300 ${
//           isAfterHero
//             ? "border-black/10 bg-white/92 shadow-[0_12px_45px_rgba(13,45,71,0.16)] backdrop-blur-xl"
//             : "border-black/10 bg-white/85 shadow-[0_8px_30px_rgba(13,45,71,0.12)] backdrop-blur-lg"
//         }`}
//       >
//         <div className="flex items-center justify-between px-3 py-2.5 sm:px-4 sm:py-3">
//           <Link href="/" className="flex items-center gap-2 rounded-xl px-2 py-2.5">
//             <Image
//               src="/novalogo1.svg"
//               alt="NovaTechscience"
//               width={230}
//               height={88}
//               className="h-auto w-[190px] sm:w-[210px] md:w-[180px]"
//               priority
//             />
//           </Link>

//           <nav className="hidden items-center gap-2 lg:flex">
//             {links.map((link) => {
//               const isActive =
//                 pathname === link.href ||
//                 (link.hasDropdown && pathname.startsWith("/services"));

//               if (link.hasDropdown) {
//                 return (
//                   <div
//                     key={link.name}
//                     className="relative"
//                     onMouseEnter={() => setServicesOpen(true)}
//                     onMouseLeave={() => setServicesOpen(false)}
//                   >
//                     <Link
//                       href={link.href}
//                       className={`flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-medium transition ${
//                         isActive
//                           ? "bg-black text-white"
//                           : "text-black hover:bg-black/10"
//                       }`}
//                     >
//                       {link.name}
//                       <FaChevronDown
//                         className={`text-[10px] transition ${
//                           servicesOpen ? "rotate-180" : ""
//                         }`}
//                         aria-hidden="true"
//                       />
//                     </Link>

//                     <AnimatePresence>
//                       {servicesOpen && (
//                         <motion.div
//                           initial={{ opacity: 0, y: 10, scale: 0.98 }}
//                           animate={{ opacity: 1, y: 0, scale: 1 }}
//                           exit={{ opacity: 0, y: 8, scale: 0.98 }}
//                           transition={{ duration: 0.18 }}
//                           className="absolute left-1/2 top-[42px] w-[235px] -translate-x-1/2 rounded-2xl border border-black/10 bg-white/95 p-2 shadow-[0_16px_42px_rgba(13,45,71,0.14)] backdrop-blur-2xl"
//                         >
//                           <p className="mb-2 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45">
//                             Services
//                           </p>

//                           <div className="grid gap-1.5">
//                             {serviceLinks.map((service) => {
//                               const isServiceActive = pathname === service.href;

//                               return (
//                                 <Link
//                                   key={service.name}
//                                   href={service.href}
//                                   className={`block rounded-xl px-3 py-2 text-[13px] font-medium transition ${
//                                     isServiceActive
//                                       ? "bg-black text-white"
//                                       : "text-black/75 hover:bg-black/8 hover:text-black"
//                                   }`}
//                                 >
//                                   {service.name}
//                                 </Link>
//                               );
//                             })}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 );
//               }

//               return (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
//                     isActive
//                       ? "bg-black text-white"
//                       : "text-black hover:bg-black/10"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               );
//             })}
//           </nav>

//           <div className="flex items-center gap-2">
//             <Link
//               href="/contact"
//               className={`group relative hidden h-12 w-[178px] items-center justify-between overflow-hidden rounded-full bg-[#050505] px-3 text-sm font-bold text-white shadow-[0_12px_32px_rgba(13,45,71,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(115,146,251,0.35)] md:inline-flex ${
//                 isWordGlowing
//                   ? "bg-[#071827] shadow-[0_0_35px_rgba(230,79,14,0.78)]"
//                   : ""
//               }`}
//             >
//               <span className="absolute inset-0 bg-gradient-to-r from-[#e64f0e]/0 via-[#e64f0e]/25 to-[#e64f0e]/0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:animate-shimmer" />

//               <span className="relative flex h-12 min-w-0 flex-1 items-center justify-center overflow-visible px-2 text-center">
//                 <AnimatePresence mode="wait">
//                   <motion.span
//                     key={currentWordIndex}
//                     initial={{ y: 16, opacity: 0, filter: "blur(4px)" }}
//                     animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
//                     exit={{ y: -16, opacity: 0, filter: "blur(4px)" }}
//                     transition={{ duration: 0.28, ease: "easeOut" }}
//                     className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[22px] font-normal text-[#e64f0e]"
//                     style={{ fontFamily: "'Great Vibes', cursive" }}
//                   >
//                     {rotatingWords[currentWordIndex]}
//                   </motion.span>
//                 </AnimatePresence>
//               </span>

//               <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#0d2d47] transition group-hover:translate-x-0.5">
//                 →
//               </span>
//             </Link>

//             <button
//               type="button"
//               onClick={() => setIsOpen((prev) => !prev)}
//               className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-black text-white transition hover:bg-black/80 lg:hidden"
//               aria-label="Toggle menu"
//               aria-expanded={isOpen}
//             >
//               <span
//                 className={`absolute h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
//                   isOpen ? "rotate-45" : "-translate-y-1.5"
//                 }`}
//               />
//               <span
//                 className={`absolute h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
//                   isOpen ? "opacity-0 scale-0" : "opacity-100"
//                 }`}
//               />
//               <span
//                 className={`absolute h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
//                   isOpen ? "-rotate-45" : "translate-y-1.5"
//                 }`}
//               />
//             </button>
//           </div>
//         </div>

//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.25, ease: "easeOut" }}
//               className="max-h-[calc(100vh-110px)] overflow-y-auto overscroll-contain lg:hidden"
//             >
//               <div className="border-t border-black/10 p-4 pt-3">
//                 <nav className="flex flex-col gap-2">
//                   {links.map((link) => {
//                     const isActive =
//                       pathname === link.href ||
//                       (link.hasDropdown && pathname.startsWith("/services"));

//                     if (link.hasDropdown) {
//                       return (
//                         <div key={link.name}>
//                           <div
//                             className={`flex overflow-hidden rounded-xl ${
//                               isActive ? "bg-black text-white" : "bg-black/5 text-black"
//                             }`}
//                           >
//                             <Link
//                               href={link.href}
//                               onClick={() => setIsOpen(false)}
//                               className="flex flex-1 items-center px-4 py-3 text-sm font-medium"
//                             >
//                               {link.name}
//                             </Link>

//                             <button
//                               type="button"
//                               onClick={() => setMobileServicesOpen((prev) => !prev)}
//                               className="flex w-14 items-center justify-center border-l border-black/10"
//                             >
//                               <FaChevronDown
//                                 className={`text-xs transition duration-300 ${
//                                   mobileServicesOpen ? "rotate-180" : ""
//                                 }`}
//                                 aria-hidden="true"
//                               />
//                             </button>
//                           </div>

//                           <AnimatePresence>
//                             {mobileServicesOpen && (
//                               <motion.div
//                                 initial={{ height: 0, opacity: 0, y: -6 }}
//                                 animate={{ height: "auto", opacity: 1, y: 0 }}
//                                 exit={{ height: 0, opacity: 0, y: -6 }}
//                                 transition={{ duration: 0.28 }}
//                                 className="overflow-hidden"
//                               >
//                                 <div className="mt-2 grid gap-1.5 rounded-2xl border border-black/10 bg-black/[0.03] p-2">
//                                   {serviceLinks.map((service) => {
//                                     const isServiceActive = pathname === service.href;

//                                     return (
//                                       <Link
//                                         key={service.name}
//                                         href={service.href}
//                                         onClick={() => setIsOpen(false)}
//                                         className={`block rounded-xl px-3 py-2 text-[13px] font-medium transition ${
//                                           isServiceActive
//                                             ? "bg-black text-white"
//                                             : "text-black/75 hover:bg-black hover:text-white"
//                                         }`}
//                                       >
//                                         {service.name}
//                                       </Link>
//                                     );
//                                   })}
//                                 </div>
//                               </motion.div>
//                             )}
//                           </AnimatePresence>
//                         </div>
//                       );
//                     }

//                     return (
//                       <Link
//                         key={link.name}
//                         href={link.href}
//                         onClick={() => setIsOpen(false)}
//                         className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
//                           isActive
//                             ? "bg-black text-white"
//                             : "bg-black/5 text-black hover:bg-black hover:text-white"
//                         }`}
//                       >
//                         {link.name}
//                       </Link>
//                     );
//                   })}
//                 </nav>

//                 <Link
//                   href="/contact"
//                   onClick={() => setIsOpen(false)}
//                   className={`group relative mt-3 inline-flex h-12 w-full items-center justify-between overflow-hidden rounded-full bg-[#050505] px-4 text-sm font-bold text-white shadow-[0_12px_30px_rgba(13,45,71,0.28)] transition duration-300 ${
//                     isWordGlowing
//                       ? "bg-[#071827] shadow-[0_0_35px_rgba(230,79,14,0.78)]"
//                       : ""
//                   }`}
//                 >
//                   <span className="absolute inset-0 bg-gradient-to-r from-[#e64f0e]/0 via-[#e64f0e]/25 to-[#e64f0e]/0 opacity-70 animate-shimmer" />

//                   <span className="relative flex h-12 flex-1 items-center justify-center overflow-visible text-center">
//                     <AnimatePresence mode="wait">
//                       <motion.span
//                         key={currentWordIndex}
//                         initial={{ y: 16, opacity: 0, filter: "blur(4px)" }}
//                         animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
//                         exit={{ y: -16, opacity: 0, filter: "blur(4px)" }}
//                         transition={{ duration: 0.28, ease: "easeOut" }}
//                         className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[22px] font-normal text-[#e64f0e]"
//                         style={{ fontFamily: "'Great Vibes', cursive" }}
//                       >
//                         {rotatingWords[currentWordIndex]}
//                       </motion.span>
//                     </AnimatePresence>
//                   </span>

//                   <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#0d2d47]">
//                     →
//                   </span>
//                 </Link>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       <style jsx>{`
//         @keyframes shimmer {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(100%);
//           }
//         }

//         .animate-shimmer {
//           animation: shimmer 1.5s ease-in-out infinite;
//         }
//       `}</style>
//     </header>
//   );
// }



