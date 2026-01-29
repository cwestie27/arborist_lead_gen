"use client";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://treevalue.pro";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TreeValue Pro",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Professional tree valuation calculator using CTLA appraisal methods. Get your tree's replacement value and annual ecosystem benefits.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@treevalue.pro",
    contactType: "customer service",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TreeValue Pro",
  url: siteUrl,
  description:
    "Calculate the true value of your trees with our free professional-grade valuation tool.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/calculator`,
    "query-input": "required name=tree_species",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Your Tree's Value",
  description:
    "Use TreeValue Pro to calculate your tree's replacement value and annual ecosystem benefits in 3 simple steps.",
  totalTime: "PT2M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Describe Your Tree",
      text: "Answer a few simple questions about your tree's species, size (height and girth), location, and health condition. No measuring tools needed - estimates work great.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Get Your Valuation",
      text: "Our algorithm calculates your tree's replacement value using the CTLA Trunk Formula Method and annual ecosystem benefits using i-Tree formulas.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Receive Your Report",
      text: "Get a detailed Tree Wealth Report delivered to your inbox with your complete valuation breakdown and expert recommendations.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How accurate is the tree valuation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TreeValue Pro uses the industry-standard CTLA (Council of Tree and Landscape Appraisers) Trunk Formula Method, the same methodology used by certified arborists. While our estimates are highly accurate for informational purposes, official appraisals for insurance or legal matters should be performed by a certified arborist.",
      },
    },
    {
      "@type": "Question",
      name: "What is the CTLA Trunk Formula Method?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The CTLA Trunk Formula Method calculates tree value based on the tree's trunk cross-sectional area, species value rating, condition rating, and location factors. It's the most widely accepted method for tree appraisal in North America.",
      },
    },
    {
      "@type": "Question",
      name: "What are ecosystem benefits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trees provide valuable services every year including carbon sequestration (removing CO2 from the air), stormwater management (reducing runoff), energy savings (shade in summer, windbreak in winter), and air quality improvement. We calculate the dollar value of these benefits using i-Tree methodology developed by the USDA Forest Service.",
      },
    },
    {
      "@type": "Question",
      name: "Is the tree valuation free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! TreeValue Pro is completely free to use. You can calculate the value of unlimited trees and receive detailed reports at no cost.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use this valuation for insurance claims?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our valuations provide excellent estimates for understanding your tree's worth, but insurance companies typically require a formal appraisal from a certified arborist. We can connect you with qualified arborists in your area who can provide official documentation.",
      },
    },
  ],
};

export function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
