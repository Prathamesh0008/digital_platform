"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { useCallback, useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NovaTechAssistant = dynamic(() => import("@/components/NovaTechAssistant"), {
  ssr: false,
});

const NovaLogoPreloader = dynamic(() => import("@/components/NovaLogoPreloader"), {
  ssr: false,
});

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

        <NovaTechAssistant />

        <Footer />
      </div>
    </>
  );
}
