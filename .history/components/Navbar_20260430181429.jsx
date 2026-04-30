"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Services", href: "/services" },
    { name: "Features", href: "/features" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Pricing", href: "/pricing" },
    { name: "Team", href: "/team" },
    { name: "FAQs", href: "/faqs" },
  ];

  return (
    <header className="fixed top-5 left-0 w-full z-50 px-4">
      <div className="mx-auto w-full max-w-[1020px] rounded-full border border-white/10 bg-[#171328]/95 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between px-5 py-3">
          <Link href="/" className="flex items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-[#7A1CFF] text-[#7A1CFF]"
              aria-hidden="true"
            >
              <path d="M13 2 4 13h6l-1 9 9-11h-6l1-9Z" />
            </svg>
            <span className="text-4xl font-semibold leading-none text-white hidden xl:block">
              Social<span className="text-[#8A2BFF]">Lift</span>
            </span>
            <span className="text-lg font-semibold leading-none text-white xl:hidden">
              Social<span className="text-[#8A2BFF]">Lift</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-2xl leading-none font-semibold transition ${
                    isActive ? "text-white" : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="rounded-full bg-[#6E12F5] px-6 py-2.5 text-2xl leading-none font-semibold text-white transition hover:bg-[#7A1CFF]"
          >
            Contact Us
          </Link>
        </div>

        <nav className="lg:hidden border-t border-white/10 px-5 py-3">
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-white/85">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-white">
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
