"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { useState, useSyncExternalStore } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NovaLogoPreloader from "@/components/NovaLogoPreloader";

const NovaTechAssistant = dynamic(() => import("@/components/NovaTechAssistant"), {
  ssr: false,
  loading: () => null,
});

const PRELOADER_SESSION_KEY = "nova_preloader_seen";
const EMPTY_SUBSCRIBE = () => () => {};

export default function AppShell({ children }) {
  const pathname = usePathname();
  const [preloaderDismissed, setPreloaderDismissed] = useState(false);
  const isAgentPortal = pathname.startsWith("/agent");
  const assistantEligible = !isAgentPortal;

  const hasSeenPreloader = useSyncExternalStore(
    EMPTY_SUBSCRIBE,
    () =>
      isAgentPortal ||
      window.sessionStorage.getItem(PRELOADER_SESSION_KEY) === "1",
    () => false
  );

  const shouldShowPreloader =
    !isAgentPortal && !hasSeenPreloader && !preloaderDismissed;
  const handlePreloaderComplete = () => {
    window.sessionStorage.setItem(PRELOADER_SESSION_KEY, "1");
    setPreloaderDismissed(true);
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

        {assistantEligible && (
          <div className="app-assistant">
            <NovaTechAssistant />
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}
