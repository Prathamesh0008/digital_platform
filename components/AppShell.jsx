"use client";

import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NovaTechAssistant from "@/components/NovaTechAssistant";
import NovaLogoPreloader from "@/components/NovaLogoPreloader";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

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

    {isLoading && (
      <NovaLogoPreloader onComplete={handlePreloaderComplete} />
    )}
  </>
);

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
