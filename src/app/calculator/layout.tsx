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

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
