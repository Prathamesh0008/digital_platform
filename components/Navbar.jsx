"use client";
 
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
 
export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isAfterHero, setIsAfterHero] = useState(false);
 
  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.75;
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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isAfterHero ? "bg-black/60 backdrop-blur-md border-b border-white/10" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between">

        <Link href="/" className="flex items-center cursor-pointer">
          <Image src="/logo.png" alt="NovaTech logo" width={250} height={100} className="w-[170px] sm:w-[210px] md:w-[250px] h-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          {links.map((link) => {
            const isActive = pathname === link.href;
 
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  px-6 py-2.5 text-sm rounded-full transition cursor-pointer font-medium
                  backdrop-blur-md border
                  ${
                    isActive
                      ? "bg-white text-black border-white"
                      : isAfterHero
                      ? "bg-white/10 text-white border-white/20 hover:bg-white hover:text-black"
                      : "bg-white/20 text-white border-white/30 hover:bg-white hover:text-black"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`md:hidden rounded-full px-4 py-2 text-sm font-medium backdrop-blur-md transition ${
            isAfterHero
              ? "border border-white/20 bg-white/10 text-white"
              : "border border-white/30 bg-white/20 text-white"
          }`}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          Menu
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="rounded-2xl border border-white/30 bg-[#0b1024]/90 p-3 backdrop-blur-md">
            <div className="flex flex-col gap-2">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-full px-4 py-2.5 text-sm transition ${
                      isActive
                        ? "bg-white text-black"
                        : "bg-white/10 text-white hover:bg-white hover:text-black"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
