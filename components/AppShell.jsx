"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NovaTechAssistant = dynamic(() => import("@/components/NovaTechAssistant"), {
  ssr: false,
  loading: () => null,
});
const NovaLogoPreloader = dynamic(() => import("@/components/NovaLogoPreloader"), {
  ssr: false,
  loading: () => null,
});

const PRELOADER_SESSION_KEY = "nova_preloader_seen";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const [showAssistant, setShowAssistant] = useState(false);
  const [shouldShowPreloader, setShouldShowPreloader] = useState(false);
  const [preloaderResolved, setPreloaderResolved] = useState(false);
  const isAgentPortal = pathname.startsWith("/agent");

  useEffect(() => {
    if (isAgentPortal) {
      setPreloaderResolved(true);
      return;
    }

    const hasSeenPreloader = window.sessionStorage.getItem(PRELOADER_SESSION_KEY) === "1";

    if (hasSeenPreloader) {
      setPreloaderResolved(true);
      return;
    }

    setShouldShowPreloader(true);
    setPreloaderResolved(false);
  }, [isAgentPortal]);

  useEffect(() => {
    if (isAgentPortal || !preloaderResolved) {
      return;
    }

    const timer = setTimeout(() => {
      setShowAssistant(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isAgentPortal, preloaderResolved]);

  const handlePreloaderComplete = () => {
    window.sessionStorage.setItem(PRELOADER_SESSION_KEY, "1");
    setShouldShowPreloader(false);
    setPreloaderResolved(true);
  };

  if (isAgentPortal) {
    return <>{children}</>;
  }

  return (
    <>
      {shouldShowPreloader && (
        <NovaLogoPreloader onComplete={handlePreloaderComplete} />
      )}

      <div className="flex min-h-screen flex-col">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        {showAssistant && (
          <div className="app-assistant">
            <NovaTechAssistant />
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}
