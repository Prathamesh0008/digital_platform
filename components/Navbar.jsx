"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">

      {/* 🔥 NAV WRAPPER */}
      <div
        className="
        flex items-center gap-6
        bg-black/60 backdrop-blur-xl
        border border-white/10
        rounded-full px-6 py-3
        shadow-[0_10px_40px_rgba(0,0,0,0.4)]
      "
      >

        {/* 🔥 LOGO */}
        <Link href="/" className="flex items-center gap-2 pr-4 border-r border-white/10">

          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm font-bold">
              N
            </div>
            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm font-bold -ml-2">
              T
            </div>
          </div>

          <span className="text-white text-xs tracking-widest uppercase hidden sm:block">
            NovaTech
          </span>
        </Link>

        {/* 🔥 NAV LINKS */}
        <nav className="flex items-center gap-2">

          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition"
              >

                {/* 🔥 SPOTLIGHT EFFECT ONLY */}
                {isActive && (
                  <>
                    {/* TOP LIGHT LINE */}
                    <span
                      className="
                      absolute -top-[6px] left-1/2 -translate-x-1/2
                      w-10 h-[2px] bg-white rounded-full
                    "
                    />

                    {/* LIGHT GLOW */}
                    <span
                      className="
                      absolute top-0 left-1/2 -translate-x-1/2
                      w-20 h-10
                      bg-gradient-to-b from-white/40 via-white/10 to-transparent
                      blur-md
                      rounded-full
                    "
                    />
                  </>
                )}

                {/* TEXT */}
                <span className="relative z-10">
                  {link.name}
                </span>

                {/* HOVER SOFT BG */}
                <span
                  className="
                  absolute inset-0 rounded-full opacity-0
                  hover:opacity-100 transition
                  bg-white/10
                "
                />
              </Link>
            );
          })}

        </nav>
      </div>
    </header>
  );
}