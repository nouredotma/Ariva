import type React from "react";
import type { Metadata } from "next";
import { Open_Sans, Dancing_Script } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { CartProvider } from "@/components/cart-provider";
import CartModal from "@/components/cart-modal";
import CookieBanner from "@/components/cookie-banner";
import SplashScreen from "@/components/splash-screen";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const openSans = Open_Sans({ 
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ariva.com"),
  title: {
    default: "Ariva — Organic Products in Morocco",
    template: "%s | Ariva",
  },
  description:
    "Ariva — Discover fresh, 100% Certified Organic goods curated directly from local cooperatives nestled in the Atlas Mountains and Souss Valley in Morocco.",
  keywords: [
    "Ariva",
    "organic products Morocco",
    "certified organic",
    "Atlas Mountains",
    "Souss Valley",
    "natural goods"
  ],
  authors: [
    {
      name: "Ariva",
      url: "https://ariva.com",
    },
  ],
  creator: "Ariva",
  publisher: "Ariva",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  category: "Organic Store",
  classification: "Organic Products Store",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Ariva — Organic Products in Morocco",
    description:
      "Ariva — Discover fresh, 100% Certified Organic goods curated directly from local cooperatives nestled in the Atlas Mountains and Souss Valley in Morocco.",
    url: "https://ariva.com",
    siteName: "Ariva",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ariva — Organic Products in Morocco",
        type: "image/jpeg",
      },
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Ariva Logo",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "Morocco",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ariva — Organic Products in Morocco",
    description:
      "Discover fresh, 100% Certified Organic goods in Morocco.",
    images: ["/og-image.jpg"],
    creator: "@ariva",
    site: "@ariva",
  },
  alternates: {
    canonical: "https://ariva.com",
    languages: {
      "en-US": "https://ariva.com",
    },
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
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "geo.region": "MA-AGD",
    "geo.placename": "Agadir",
    "geo.position": "30.4278;-9.5981",
    ICBM: "30.4278, -9.5981",
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "Store"],
      "@id": "https://ariva.com/#organization",
      name: "Ariva",
      url: "https://ariva.com",
      logo: {
        "@type": "ImageObject",
        url: "https://ariva.com/favicon.png",
        width: 512,
        height: 512,
      },
      image: "https://ariva.com/og-image.jpg",
      description:
        "Ariva — Discover fresh, 100% Certified Organic goods curated directly from local cooperatives nestled in the Atlas Mountains and Souss Valley in Morocco.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Avenue Hassan II",
        addressLocality: "Agadir",
        addressRegion: "Souss-Massa",
        postalCode: "80000",
        addressCountry: "MA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 30.4278,
        longitude: -9.5981,
      },
      telephone: "+212600000000",
      email: "hello@ariva.com",
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      sameAs: [
        "https://www.facebook.com/ariva",
        "https://www.instagram.com/ariva_organic",
        "https://www.tiktok.com/@ariva"
      ],
      areaServed: {
        "@type": "Country",
        name: "Morocco",
      },
      knowsLanguage: ["en"],
    },
    {
      "@type": "WebSite",
      "@id": "https://ariva.com/#website",
      url: "https://ariva.com",
      name: "Ariva",
      description: "Discover fresh, 100% Certified Organic goods in Morocco.",
      publisher: {
        "@id": "https://ariva.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://ariva.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      inLanguage: ["en-US"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ariva.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://ariva.com",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="loading-lock" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Preconnect to external resources */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#4f7942" />
        <meta name="msapplication-TileColor" content="#4f7942" />

        {/* Additional SEO meta tags */}
        <meta name="application-name" content="Ariva" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ariva" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${openSans.variable} ${dancingScript.variable} antialiased`} suppressHydrationWarning>
        <SplashScreen />
        <CartProvider>
          {children}
          <CartModal />
          <CookieBanner />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  );
}
