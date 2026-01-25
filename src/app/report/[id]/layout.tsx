import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

// Generate mock data for metadata - same logic as page
function getMockData(id: string) {
  const seed = id.split("").reduce((a, b) => a + b.charCodeAt(0), 0);
  const structuralValue = 8000 + (seed % 20000);
  const ecoTotal = 400 + (seed % 800);
  const speciesName = ["Oak", "Maple", "Pine", "Spruce", "Birch"][seed % 5];

  return { structuralValue, ecoTotal, speciesName };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const { structuralValue, ecoTotal, speciesName } = getMockData(id);

  const title = `${speciesName} Tree Worth $${structuralValue.toLocaleString()}`;
  const description = `This ${speciesName} tree has a replacement value of $${structuralValue.toLocaleString()} and provides $${ecoTotal.toLocaleString()}/year in ecosystem benefits.`;

  const ogImageUrl = `/api/og?species=${encodeURIComponent(speciesName)}&value=${structuralValue.toLocaleString()}&eco=${ecoTotal.toLocaleString()}`;

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
          alt: `${speciesName} Tree Valuation - $${structuralValue.toLocaleString()}`,
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
