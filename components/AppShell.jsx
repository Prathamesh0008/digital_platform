"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NovaTechAssistant from "@/components/NovaTechAssistant";
import NovaLogoPreloader from "@/components/NovaLogoPreloader";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  const isAgentPortal = pathname.startsWith("/agent");

  if (isAgentPortal) {
    return <>{children}</>;
  }

  if (isLoading) {
    return <NovaLogoPreloader onComplete={() => setIsLoading(false)} />;
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
