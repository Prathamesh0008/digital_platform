import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NovaLogoPreloader from "@/components/NovaLogoPreloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NovaTech Science",
  description: "NovaTech Science Logo Animation",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body suppressHydrationWarning>
        <NovaLogoPreloader />
        {children}
      </body>
    </html>
  );
}