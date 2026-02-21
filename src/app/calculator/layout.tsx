import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Tree Value Calculator",
  description:
    "Calculate your tree's replacement value in under 2 minutes. Get a professional valuation report showing structural worth and annual ecosystem benefits.",
  openGraph: {
    title: "Free Tree Value Calculator | TreeValue Pro",
    description:
      "Discover what your trees are really worth. Calculate replacement value and ecosystem benefits in under 2 minutes.",
    images: ["/api/og?species=Tree&value=15,000&eco=850"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Tree Value Calculator | TreeValue Pro",
    description:
      "Discover what your trees are really worth. Calculate replacement value and ecosystem benefits.",
    images: ["/api/og?species=Tree&value=15,000&eco=850"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "TreeValue Pro - Free Tree Value Calculator",
  url: "https://www.arborvalue.com/calculator",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Calculate your tree's replacement value using professional CTLA methodology. Get a detailed valuation report with structural worth and annual ecosystem benefits in under 2 minutes.",
  featureList: [
    "CTLA trunk formula valuation",
    "Species-specific calculations",
    "Ecosystem benefits analysis",
    "Downloadable Tree Wealth Report",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much is my tree worth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tree values vary widely based on species, size, health, and location. A mature oak tree (20\" diameter) in good condition typically ranges from $4,000 to $15,000 in replacement value. Use our free calculator for an instant estimate.",
      },
    },
    {
      "@type": "Question",
      name: "How is tree replacement cost calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tree replacement cost is calculated using the CTLA (Council of Tree and Landscape Appraisers) trunk formula: Trunk Area x Base Price x Species Factor x Condition Rating x Location Factor. This is the same method used by certified arborists and accepted by insurance companies.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a tree appraisal cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional tree appraisals typically cost $150-$450 for a single tree, $500-$950 for multiple trees, and $1,000+ for complex assessments requiring expert witness testimony. You can get a free estimate first using our online calculator.",
      },
    },
  ],
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
