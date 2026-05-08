"use client";

import { usePathname } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NovaTechAssistant from "@/components/NovaTechAssistant";

export default function AppShell({ children }) {
  const pathname = usePathname();

  const isAgentPortal = pathname.startsWith("/agent");

  if (isAgentPortal) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {children}
      </main>

      <NovaTechAssistant />

      <Footer />
    </>
  );
}