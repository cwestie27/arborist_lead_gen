import type { Metadata } from "next";
import { getReport } from "@/lib/reports";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  // Validate UUID format
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (!uuidRegex.test(id)) {
    return {
      title: "Report Not Found | TreeValue Pro",
      description: "This tree valuation report could not be found.",
    };
  }

  const { data } = await getReport(id);

  if (!data) {
    return {
      title: "Report Not Found | TreeValue Pro",
      description: "This tree valuation report could not be found.",
    };
  }

  const { totals } = data;
  const treeWord = totals.treeCount === 1 ? "Tree" : "Trees";
  const structuralValue = totals.structuralValue.toLocaleString();
  const ecoValue = totals.annualEcoValue.toLocaleString();

  const title = `${totals.treeCount} ${treeWord} Worth $${structuralValue}`;
  const description = `This property has ${totals.treeCount} ${treeWord.toLowerCase()} with a combined replacement value of $${structuralValue} and $${ecoValue}/year in ecosystem benefits.`;

  const ogImageUrl = `/api/og?trees=${totals.treeCount}&value=${structuralValue}&eco=${ecoValue}`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | TreeValue Pro`,
      description,
      type: "article",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `Property Tree Valuation - $${structuralValue}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | TreeValue Pro`,
      description,
      images: [ogImageUrl],
    },
  };
}

export default function ReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
