import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";
import { CookieConsent } from "@/components/CookieConsent";
import { MetaPixel } from "@/components/MetaPixel";
import { SiteNav } from "@/components/SiteNav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://treevalue.pro";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TreeValue Pro | Discover What Your Trees Are Really Worth",
    template: "%s | TreeValue Pro",
  },
  description:
    "Calculate the true value of your trees. Get a professional tree valuation report showing replacement cost and annual ecosystem benefits using the CTLA Trunk Formula Method.",
  keywords: [
    "tree value calculator",
    "tree appraisal",
    "tree replacement cost",
    "tree worth",
    "arborist",
    "tree valuation",
    "CTLA trunk formula",
    "ecosystem benefits",
    "carbon sequestration",
    "tree care",
  ],
  authors: [{ name: "TreeValue Pro" }],
  creator: "TreeValue Pro",
  publisher: "TreeValue Pro",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "TreeValue Pro | Discover What Your Trees Are Really Worth",
    description:
      "Calculate the true value of your trees. Get a professional tree valuation report.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "TreeValue Pro",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "TreeValue Pro - Tree Valuation Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TreeValue Pro | Discover What Your Trees Are Really Worth",
    description:
      "Calculate the true value of your trees. Get a professional tree valuation report.",
    images: ["/api/og"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable}`}>
      <head>
        <StructuredData />
        <script defer src="https://analytics.haveaidoit.com/script.js" data-website-id="a196fcc8-e3cd-4aa5-b7f1-83c08bf7982d" />
      </head>
      <body className="min-h-screen bg-cream text-charcoal-800 antialiased">
        <SiteNav />
        {children}
        <CookieConsent />
        <MetaPixel />
      </body>
    </html>
  );
}
