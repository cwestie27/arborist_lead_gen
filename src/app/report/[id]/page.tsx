import Link from "next/link";
import { AlertTriangle, ArrowRight, TreeDeciduous } from "lucide-react";
import { getReport } from "@/lib/reports";
import { ReportClient } from "./ReportClient";
import { Button, Card, CardContent } from "@/components/ui";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ReportPage({ params }: PageProps) {
  const { id } = await params;

  // Validate UUID format
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (!uuidRegex.test(id)) {
    return <ReportNotFound message="Invalid report ID format" />;
  }

  const { data, error, expired } = await getReport(id);

  if (expired) {
    return <ReportExpired />;
  }

  if (error || !data) {
    return <ReportNotFound message={error || "Report not found"} />;
  }

  // Validate required data structure
  if (!data.totals || typeof data.totals !== "object") {
    return <ReportNotFound message="Report data is incomplete or corrupted" />;
  }

  return <ReportClient data={data} reportId={id} />;
}

function ReportNotFound({ message }: { message: string }) {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-6">
      <Card className="max-w-md w-full">
        <CardContent className="text-center py-12">
          <div className="w-16 h-16 bg-charcoal-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-8 h-8 text-charcoal-400" />
          </div>
          <h1 className="font-heading text-2xl font-bold text-charcoal-900 mb-2">
            Report Not Found
          </h1>
          <p className="text-charcoal-600 mb-6">
            {message}. The report may have been removed or the link may be incorrect.
          </p>
          <Link href="/calculator">
            <Button rightIcon={<ArrowRight className="w-4 h-4" />}>
              Calculate Your Tree&apos;s Value
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

function ReportExpired() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-6">
      <Card className="max-w-md w-full">
        <CardContent className="text-center py-12">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <TreeDeciduous className="w-8 h-8 text-amber-600" />
          </div>
          <h1 className="font-heading text-2xl font-bold text-charcoal-900 mb-2">
            Report Expired
          </h1>
          <p className="text-charcoal-600 mb-6">
            This report has expired after 90 days. Create a new assessment to get an updated valuation.
          </p>
          <Link href="/calculator">
            <Button rightIcon={<ArrowRight className="w-4 h-4" />}>
              Start New Assessment
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
