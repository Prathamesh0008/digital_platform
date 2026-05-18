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

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-3 py-2.5 sm:px-4 sm:py-3 transition-all duration-300 ${
          isAfterHero
            ? "border-white/20 bg-[#050816]/78 backdrop-blur-xl shadow-[0_12px_45px_rgba(0,0,0,0.45)]"
            : "border-white/30 bg-[#0d1330]/52 backdrop-blur-lg shadow-[0_8px_30px_rgba(0,0,0,0.28)]"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 rounded-xl px-2 py-1.5">
          <Image
            src="/novatechscience-logo.svg"
            alt="NovaTech logo"
            width={220}
            height={88}
            className="h-auto w-[125px] sm:w-[150px] md:w-[175px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
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
              className="fixed right-3 top-[84px] z-50 w-[90vw] max-w-[360px] rounded-2xl border border-white/20 bg-[#070c20]/95 p-4 shadow-2xl backdrop-blur-2xl"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-white/60">Navigation</span>
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
                  const isActive = pathname === link.href;
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
