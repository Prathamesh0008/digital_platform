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
    // { name: "Blog", href: "/services/blog" },
  ];

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
    {name: "Blog", href: "/services/blog"},
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-3 py-2.5 transition-all duration-300 sm:px-4 sm:py-3 ${
          isAfterHero
            ? "border-black/10 bg-white/92 shadow-[0_12px_45px_rgba(13,45,71,0.16)] backdrop-blur-xl"
            : "border-black/10 bg-white/85 shadow-[0_8px_30px_rgba(13,45,71,0.12)] backdrop-blur-lg"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 rounded-xl px-2 py-1.5">
          <Image
            src="/digitallogo.png"
            alt="NovaTechscience"
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
                        ? "bg-black text-white"
                        : "text-black hover:bg-black/10"
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
                        className="absolute left-1/2 top-[46px] w-[310px] -translate-x-1/2 rounded-2xl border border-black/10 bg-white/95 p-3 shadow-[0_22px_60px_rgba(13,45,71,0.18)] backdrop-blur-2xl"
                      >
                        <div className="mb-2 px-2 py-1">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45">
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
                                    ? "bg-black text-white"
                                    : "text-black/80 hover:bg-black/10 hover:text-black"
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
            className="rounded-xl border border-black/10 bg-black px-3 py-2 text-sm font-medium text-white transition hover:bg-black/80 lg:hidden"
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
              className="fixed inset-0 z-40 bg-black/45"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.aside
              className="fixed right-3 top-[84px] z-50 max-h-[calc(100vh-105px)] w-[90vw] max-w-[380px] overflow-y-auto rounded-2xl border border-black/10 bg-white/95 p-4 shadow-2xl backdrop-blur-2xl"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-black/60">
                  Navigation
                </span>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg border border-black/10 bg-black px-2.5 py-1 text-xs text-white"
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
                        <div
                          className={`flex w-full overflow-hidden rounded-xl transition ${
                            isActive
                              ? "bg-black text-white"
                              : "bg-black/5 text-black"
                          }`}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex flex-1 items-center px-4 py-3 text-sm font-medium transition ${
                              isActive
                                ? "text-white"
                                : "text-black hover:bg-black hover:text-white"
                            }`}
                          >
                            {link.name}
                          </Link>

                          <button
                            type="button"
                            onClick={() =>
                              setMobileServicesOpen((prev) => !prev)
                            }
                            className={`flex w-14 shrink-0 items-center justify-center border-l text-sm transition ${
                              isActive
                                ? "border-white/15 text-white hover:bg-white/10"
                                : "border-black/10 text-black hover:bg-black hover:text-white"
                            }`}
                            aria-label="Toggle services dropdown"
                            aria-expanded={mobileServicesOpen}
                          >
                            <span
                              className={`transition ${
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
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-2 grid gap-1.5 rounded-2xl border border-black/10 bg-black/[0.03] p-2">
                                {serviceLinks.map((service) => {
                                  const serviceActive =
                                    pathname === service.href;

                                  return (
                                    <Link
                                      key={service.name}
                                      href={service.href}
                                      onClick={() => setIsOpen(false)}
                                      className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                                        serviceActive
                                          ? "bg-black text-white"
                                          : "text-black/80 hover:bg-black hover:text-white"
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
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}