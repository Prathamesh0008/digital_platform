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
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/services/blog" },
  ];

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

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 1023px)").matches;

    document.body.style.transition = "padding-top 0.35s ease";

    if (isMobile && isOpen) {
      document.body.style.paddingTop = mobileServicesOpen ? "620px" : "430px";
    } else {
      document.body.style.paddingTop = "0px";
    }

    return () => {
      document.body.style.paddingTop = "0px";
    };
  }, [isOpen, mobileServicesOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-300 ${
          isAfterHero
            ? "border-black/10 bg-white/92 shadow-[0_12px_45px_rgba(13,45,71,0.16)] backdrop-blur-xl"
            : "border-black/10 bg-white/85 shadow-[0_8px_30px_rgba(13,45,71,0.12)] backdrop-blur-lg"
        }`}
      >
        <div className="flex items-center justify-between px-3 py-2.5 sm:px-4 sm:py-3">
          <Link href="/" className="flex items-center gap-2 rounded-xl px-2 py-1.5">
            <Image
              src="/Nova_logo.png"
              alt="NovaTechscience"
              width={220}
              height={88}
              className="h-auto w-[125px] sm:w-[150px] md:w-[175px]"
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
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-medium transition ${
                        isActive
                          ? "bg-black text-white"
                          : "text-black hover:bg-black/10"
                      }`}
                    >
                      {link.name}
                      <span className={`text-xs transition ${servicesOpen ? "rotate-180" : ""}`}>
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
                          className="absolute left-1/2 top-[46px] w-[310px] -translate-x-1/2 rounded-2xl border border-black/10 bg-white/95 p-3 shadow-[0_22px_60px_rgba(13,45,71,0.18)] backdrop-blur-2xl"
                        >
                          <p className="mb-2 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45">
                            Services
                          </p>

                          <div className="grid gap-1.5">
                            {serviceLinks.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className={`rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                                  pathname === service.href
                                    ? "bg-black text-white"
                                    : "text-black/80 hover:bg-black/10 hover:text-black"
                                }`}
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
              className="hidden rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-black/80 md:inline-flex"
            >
              Start Project
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
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden lg:hidden"
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
                              onClick={() => setIsOpen(false)}
                              className="flex flex-1 items-center px-4 py-3 text-sm font-medium"
                            >
                              {link.name}
                            </Link>

                            <button
                              type="button"
                              onClick={() => setMobileServicesOpen((prev) => !prev)}
                              className="flex w-14 items-center justify-center border-l border-black/10"
                            >
                              <span
                                className={`transition duration-300 ${
                                  mobileServicesOpen ? "rotate-180" : ""
                                }`}
                              >
                                ▾
                              </span>
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
                                  {serviceLinks.map((service) => (
                                    <Link
                                      key={service.name}
                                      href={service.href}
                                      onClick={() => setIsOpen(false)}
                                      className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                                        pathname === service.href
                                          ? "bg-black text-white"
                                          : "text-black/80 hover:bg-black hover:text-white"
                                      }`}
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
                  className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-black/80"
                >
                  Start Project
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}