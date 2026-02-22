"use client";

const siteUrl = (process.env.NEXT_PUBLIC_APP_URL || "https://www.arborvalue.com").trim();

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TreeValue Pro",
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
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
    {
      "@type": "Question",
      name: "How do I measure my tree's girth (circumference)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tree girth is measured at 4.5 feet (breast height) above the ground. You can use a tape measure around the trunk, or use our simple comparison tool that lets you estimate based on everyday objects like paint buckets or arm spans.",
      },
    },
    {
      "@type": "Question",
      name: "What types of trees can be valued?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TreeValue Pro can value any tree species including oaks, maples, pines, fruit trees, ornamental trees, and more. Our database includes species-specific ratings for hundreds of tree varieties found in North America.",
      },
    },
    {
      "@type": "Question",
      name: "How does tree health affect the valuation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tree health significantly impacts value. A tree in excellent condition receives 100% of its calculated value, while poor health can reduce value by 50% or more. Our AI-powered health assessment can analyze photos of your tree to detect diseases and pest damage.",
      },
    },
    {
      "@type": "Question",
      name: "What is carbon sequestration and why does it matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Carbon sequestration is the process by which trees absorb CO2 from the atmosphere and store it as carbon in their wood, leaves, and roots. A mature tree can absorb 48 pounds of CO2 per year. This has real economic value as companies and governments pay to offset carbon emissions.",
      },
    },
    {
      "@type": "Question",
      name: "Can I value multiple trees at once?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! TreeValue Pro supports multi-tree assessments. You can add multiple trees to get a complete property valuation with combined structural value and ecosystem benefits for all your trees.",
      },
    },
    {
      "@type": "Question",
      name: "Can TreeValue Pro help identify hazardous trees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Our AI-powered health assessment analyzes photos of your tree to detect signs of disease, pest infestation, and structural issues that could make a tree hazardous. Early detection of problems like dead branches, fungal growth, or trunk decay helps you address issues before they become dangerous liabilities.",
      },
    },
    {
      "@type": "Question",
      name: "How do trees become dangerous in storms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trees become storm hazards when they have dead or dying branches, fungal growth indicating internal decay, significant lean, co-dominant stems with included bark, root damage, or pest infestations that weaken the wood. These issues make trees more likely to drop limbs or fall entirely during high winds. Regular health assessments can identify these warning signs before storm damage occurs.",
      },
    },
    {
      "@type": "Question",
      name: "Am I liable if my tree damages a neighbor's property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In most jurisdictions, homeowners can be held liable for damage caused by their trees if they knew or should have known the tree was hazardous. This is why documenting your tree's health status is important. Regular health assessments help you identify and address potential hazards proactively, protecting both your property and your neighbors while reducing your liability exposure.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Tree Calculator",
      item: `${siteUrl}/calculator`,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
