import type React from "react";
import type { Metadata } from "next";
import { Inter, Cairo, Dancing_Script } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { CartProvider } from "@/components/cart-provider";
import CartModal from "@/components/cart-modal";
import CookieBanner from "@/components/cookie-banner";
import SplashScreen from "@/components/splash-screen";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  variable: "--font-cairo",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alhorparfum.com"),
  title: {
    default: "Alhor Parfum — Finest Oriental Scents in Casablanca, Morocco",
    template: "%s | Alhor Parfum",
  },
  description:
    "Alhor Parfum — Specializing in the finest oriental products, oud, and luxury fragrances in Casablanca, Morocco. We stand out for our high quality and elegant scents.",
  keywords: [
    "Alhor Parfum",
    "oriental products Casablanca",
    "oriental scents Morocco",
    "oud Casablanca",
    "luxury products Morocco",
    "Alhor fragrances",
    "product store Morocco",
    "luxury oud",
    "incense Casablanca",
    "oriental fragrance shop",
  ],
  authors: [
    {
      name: "Alhor Parfum",
      url: "https://alhorparfum.com",
    },
  ],
  creator: "Alhor Parfum",
  publisher: "Alhor Parfum",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  category: "product Store",
  classification: "Oriental products & Fragrances Store",
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
    title: "Alhor Parfum — Finest Oriental Scents",
    description:
      "Alhor Parfum specializes in the finest oriental products, oud, and luxury fragrances in Casablanca, Morocco.",
    url: "https://alhorparfum.com",
    siteName: "Alhor Parfum",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alhor Parfum — Finest Oriental Scents",
        type: "image/jpeg",
      },
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Alhor Parfum Logo",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "Morocco",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alhor Parfum — Finest Oriental Scents",
    description:
      "The finest oriental products and oud in Casablanca, Morocco.",
    images: ["/og-image.jpg"],
    creator: "@alhorparfum",
    site: "@alhorparfum",
  },
  alternates: {
    canonical: "https://alhorparfum.com",
    languages: {
      "en-US": "https://alhorparfum.com",
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
    "geo.region": "MA-CAS",
    "geo.placename": "Casablanca",
    "geo.position": "33.5731;-7.5898",
    ICBM: "33.5731, -7.5898",
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "Store"],
      "@id": "https://alhorparfum.com/#organization",
      name: "Alhor Parfum",
      url: "https://alhorparfum.com",
      logo: {
        "@type": "ImageObject",
        url: "https://alhorparfum.com/favicon.png",
        width: 512,
        height: 512,
      },
      image: "https://alhorparfum.com/og-image.jpg",
      description:
        "Alhor Parfum specializes in the finest oriental products, oud, and luxury fragrances in Casablanca, Morocco.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "22 Rue 8",
        addressLocality: "Casablanca",
        addressRegion: "Casablanca-Settat",
        postalCode: "20220",
        addressCountry: "MA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.5731,
        longitude: -7.5898,
      },
      telephone: "+212669034206",
      email: "alhorparfum@gmail.com",
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
            "Saturday",
            "Sunday",
          ],
          opens: "10:00",
          closes: "22:00",
        },
      ],
      sameAs: [
        "https://www.facebook.com/Mohamedaminefakih/",
        "https://www.instagram.com/alhor_oud_parfums_orientales/",
        "https://www.tiktok.com/@matjar.elhor/",
      ],
      areaServed: {
        "@type": "Country",
        name: "Morocco",
      },
      knowsLanguage: ["en"],
    },
    {
      "@type": "WebSite",
      "@id": "https://alhorparfum.com/#website",
      url: "https://alhorparfum.com",
      name: "Alhor Parfum",
      description: "The finest oriental products and luxury fragrances in Morocco",
      publisher: {
        "@id": "https://alhorparfum.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://alhorparfum.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      inLanguage: ["en-US"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://alhorparfum.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://alhorparfum.com",
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
    <html lang="en" dir="ltr" className="loading-lock" suppressHydrationWarning>
      <head>
        {/* Preconnect to external resources */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#FFCC00" />
        <meta name="msapplication-TileColor" content="#FFCC00" />

        {/* Additional SEO meta tags */}
        <meta name="application-name" content="Alhor Parfum" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Alhor Parfum" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${cairo.variable} ${dancingScript.variable} antialiased`} suppressHydrationWarning>
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
