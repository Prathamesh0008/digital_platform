"use client";
 
import Link from "next/link";
import Image from "next/image";
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
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center cursor-pointer">
          <Image src="/logo.png" alt="NovaTech logo" width={a} height={100} />
        </Link>

        {/* NAV */}
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
                      : "bg-white/20 text-white border-white/30 hover:bg-white hover:text-black"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
 
        </nav>
      </div>
    </header>
  );
}
