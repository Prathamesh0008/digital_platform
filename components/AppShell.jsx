"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { useCallback, useState, useEffect } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NovaTechAssistant = dynamic(() => import("@/components/NovaTechAssistant"), {
  ssr: false,
  loading: () => null,
});

const NovaLogoPreloader = dynamic(() => import("@/components/NovaLogoPreloader"), {
  ssr: false,
});

export default function AppShell({ children }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [showAssistant, setShowAssistant] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Lazy load assistant after 3 seconds to not block navigation
  useEffect(() => {
    if (isLoading) return;
    
    const timer = setTimeout(() => {
      setShowAssistant(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  const isAgentPortal = pathname.startsWith("/agent");

  if (isAgentPortal) {
    return <>{children}</>;
  }

  return (
    <>
      {isLoading && <NovaLogoPreloader onComplete={handlePreloaderComplete} />}

      <div
        className={`flex min-h-screen flex-col transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden={isLoading}
      >
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        {showAssistant && <NovaTechAssistant />}

        <Footer />
      </div>
    </>
  );
}
