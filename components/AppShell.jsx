"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { useEffect, useState, useSyncExternalStore } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NovaLogoPreloader from "@/components/NovaLogoPreloader";

const NovaTechAssistant = dynamic(() => import("@/components/NovaTechAssistant"), {
  ssr: false,
  loading: () => null,
});

const PRELOADER_SESSION_KEY = "nova_preloader_seen";
const EMPTY_SUBSCRIBE = () => () => {};

function isAssistantEligiblePath(pathname) {
  return [
    "/contact",
    "/services",
    "/case-studies",
    "/portfolio",
    "/website-development-company",
    "/performance-marketing-agency",
    "/seo-agency",
    "/local-seo-services",
    "/freelance-website-developer",
  ].some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}

export default function AppShell({ children }) {
  const pathname = usePathname();
  const [showAssistant, setShowAssistant] = useState(false);
  const [preloaderDismissed, setPreloaderDismissed] = useState(false);
  const isAgentPortal = pathname.startsWith("/agent");
  const assistantEligible = isAssistantEligiblePath(pathname);

  const hasSeenPreloader = useSyncExternalStore(
    EMPTY_SUBSCRIBE,
    () =>
      isAgentPortal ||
      window.sessionStorage.getItem(PRELOADER_SESSION_KEY) === "1",
    () => false
  );

  const shouldShowPreloader =
    !isAgentPortal && !hasSeenPreloader && !preloaderDismissed;
  const preloaderResolved =
    isAgentPortal || hasSeenPreloader || preloaderDismissed;

  useEffect(() => {
    if (
      isAgentPortal ||
      !preloaderResolved ||
      !assistantEligible ||
      showAssistant
    ) {
      return;
    }

    const revealAssistant = () => {
      setShowAssistant(true);
    };

    const onScroll = () => {
      if (window.scrollY > 320) {
        revealAssistant();
      }
    };

    const fallbackTimer = setTimeout(revealAssistant, 9000);

    window.addEventListener("pointerdown", revealAssistant, { passive: true });
    window.addEventListener("keydown", revealAssistant);
    window.addEventListener("touchstart", revealAssistant, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener("pointerdown", revealAssistant);
      window.removeEventListener("keydown", revealAssistant);
      window.removeEventListener("touchstart", revealAssistant);
      window.removeEventListener("scroll", onScroll);
    };
  }, [assistantEligible, isAgentPortal, preloaderResolved, showAssistant]);

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

        {assistantEligible && showAssistant && (
          <div className="app-assistant">
            <NovaTechAssistant />
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}
