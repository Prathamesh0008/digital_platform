import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NovaTech Agency",
  description: "Digital Marketing Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* 🔥 GLOBAL NAVBAR */}
        <Navbar />

        {/* 🔥 PAGE CONTENT */}
        <main className="flex-1">
          {children}
        </main>

        {/* 🔥 GLOBAL FOOTER */}
        <Footer />

      </body>
    </html>
  );
}