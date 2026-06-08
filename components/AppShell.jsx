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

export default function AppShell({ children }) {
  const pathname = usePathname();
  const [showAssistant, setShowAssistant] = useState(false);
  const isAgentPortal = pathname.startsWith("/agent");

  useEffect(() => {
    if (isAgentPortal) {
      return;
    }

    const timer = setTimeout(() => {
      setShowAssistant(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isAgentPortal]);

  if (isAgentPortal) {
    return <>{children}</>;
  }

  return (
    <>
      <div className="flex min-h-screen flex-col">
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
