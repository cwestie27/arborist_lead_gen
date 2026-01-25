"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { WizardProvider, useWizard } from "@/components/wizard";
import { WizardContainer } from "@/components/wizard/wizard-container";
import { calculateTreeValue } from "@/lib/valuation";

function CalculatorContent() {
  const router = useRouter();
  const { data, isComplete } = useWizard();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleComplete = useCallback(async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      // Calculate the tree value
      if (data.species && data.height && data.girth) {
        const valuation = calculateTreeValue({
          species: data.species,
          height: data.height,
          girth: data.girth,
          zipCode: data.zipCode,
        });

        // Store in session storage for the results page
        sessionStorage.setItem(
          "treeValuation",
          JSON.stringify({
            valuation,
            email: data.email,
            createdAt: new Date().toISOString(),
          })
        );

        // TODO: In production, this would:
        // 1. Call /api/valuate to create the tree record
        // 2. Trigger email sending
        // 3. Redirect to report page with tree ID

        // For now, redirect to a results page
        router.push("/calculator/results");
      }
    } catch (error) {
      console.error("Error completing wizard:", error);
      setIsSubmitting(false);
    }
  }, [data, isSubmitting, router]);

  // Trigger completion when wizard finishes
  if (isComplete && !isSubmitting) {
    handleComplete();
  }

  return <WizardContainer />;
}

export default function CalculatorPage() {
  return (
    <WizardProvider>
      <CalculatorContent />
    </WizardProvider>
  );
}
