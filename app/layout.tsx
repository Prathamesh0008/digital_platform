import type { Metadata } from "next";
import { Great_Vibes, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Crimson_Text } from "next/font/google";

import AppShell from "@/components/AppShell";
const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson-text",
});
const siteUrl = "https://www.novatechscience.com";
const siteName = "Nova Techscience";
const defaultTitle = "Nova Techscience | Digital Marketing, SEO & Website Development";
const defaultDescription =
  "Nova Techscience delivers end-to-end digital marketing, technical SEO, performance campaigns, and website development from scratch to launch.";
const defaultKeywords = [
  "digital marketing agency",
  "seo services",
  "technical seo",
  "website development company",
  "web design and development",
  "performance marketing",
  "search engine optimization",
  "social media marketing",
  "lead generation",
  "branding and marketing",
];

const inter = Manrope({
  subsets: ["latin"],
  variable: "--font-inter",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Nova Tech Science",
  url: "https://www.novatechscience.com/",
  description:
    "Nova Tech Science is a digital marketing and website development company offering SEO, website design, web development, branding, social media marketing, and digital solutions.",
  publisher: {
    "@type": "Organization",
    name: "Nova Tech Science",
    logo: {
      "@type": "ImageObject",
      url: "https://www.novatechscience.com/novatechscience-logo.svg",
    },
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.novatechscience.com/",
    },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nova Tech Science",
  url: "https://www.novatechscience.com/",
  logo: "https://www.novatechscience.com/novatechscience-logo.svg",
  sameAs: ["https://share.google/rWQHnLKvieZu0FCsA"],
  description:
    "Nova Tech Science is a digital marketing agency providing website development, SEO, branding, graphic design, social media marketing, and complete online business solutions.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: "https://www.novatechscience.com/",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nova Tech Science",
  image: "https://www.novatechscience.com/novatechscience-logo.svg",
  url: "https://www.novatechscience.com/",
  sameAs: ["https://share.google/rWQHnLKvieZu0FCsA"],
  description:
    "Nova Tech Science is a digital marketing and website development company offering SEO services, website development, social media marketing, branding, and graphic design solutions.",
  priceRange: "$$",
  areaServed: "Worldwide",
  serviceType: [
    "SEO Services",
    "Website Development",
    "Digital Marketing",
    "Graphic Design",
    "Social Media Marketing",
    "Branding",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nova Tech Science",
  url: "https://www.novatechscience.com/",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.novatechscience.com/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@type": "Organization",
    name: "Nova Tech Science",
    logo: {
      "@type": "ImageObject",
      url: "https://www.novatechscience.com/novatechscience-logo.svg",
    },
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Digital Marketing and Website Development",
  provider: {
    "@type": "Organization",
    name: "Nova Tech Science",
    url: "https://www.novatechscience.com/",
    logo: "https://www.novatechscience.com/novatechscience-logo.svg",
  },
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  description:
    "Nova Tech Science provides professional digital marketing services including SEO, website development, web design, branding, graphic design, social media marketing, and complete online business solutions.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Search Engine Optimization (SEO)",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Design",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Social Media Marketing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Graphic Design",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Branding Services",
        },
      },
    ],
  },
  sameAs: ["https://share.google/rWQHnLKvieZu0FCsA"],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  title: {
    default: defaultTitle,
    template: "%s | Nova Techscience",
  },
  description: defaultDescription,
  keywords: defaultKeywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nova Techscience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <head>
        <Script id="gtm-script" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NMQHTXRJ');`}
        </Script>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T3CMEYQ5DK"
          strategy="lazyOnload"
        />
        <Script id="ga-script" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-T3CMEYQ5DK');`}
        </Script>

        <Script
          id="schema-webpage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        <Script
          id="schema-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="schema-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="schema-service"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
 <body className={`${crimsonText.className} min-h-full flex flex-col`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NMQHTXRJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

