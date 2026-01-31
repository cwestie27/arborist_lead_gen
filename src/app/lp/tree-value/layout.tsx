import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Tree Valuation | Find Out What Your Tree is Worth",
  description:
    "Discover your tree's true value in 60 seconds. Get a free instant valuation report showing replacement cost and annual benefits. Used by 10,000+ homeowners.",
  robots: {
    index: false, // Don't index landing pages (they're for ads)
    follow: false,
  },
};

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
