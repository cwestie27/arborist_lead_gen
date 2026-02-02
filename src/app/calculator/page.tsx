"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState, useEffect } from "react";
import { WizardProvider, useWizard } from "@/components/wizard";
import { WizardContainer } from "@/components/wizard/wizard-container";
import { calculateTreeValue } from "@/lib/valuation";
import { MetaEvents } from "@/components/MetaPixel";
import type { PropertyValuation, TreeData, TreeValuation } from "@/types";

function CalculatorContent() {
  const router = useRouter();
  const { data, isComplete } = useWizard();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Track wizard start on mount
  useEffect(() => {
    MetaEvents.viewContent("Tree Calculator");
    MetaEvents.wizardStarted();
  }, []);

  const handleComplete = useCallback(async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      // Calculate valuations for all trees
      const valuatedTrees: Array<TreeData & { valuation: TreeValuation }> = [];
      let totalStructural = 0;
      let totalEco = 0;
      let totalCarbon = 0;
      let totalStormwater = 0;
      let totalEnergy = 0;

      for (const tree of data.trees) {
        if (tree.species && tree.height && tree.girth && tree.healthCondition) {
          const valuation = calculateTreeValue({
            species: tree.species,
            height: tree.height,
            girth: tree.girth,
            healthCondition: tree.healthCondition,
            zipCode: data.zipCode,
          });

          valuatedTrees.push({ ...tree, valuation });
          totalStructural += valuation.structuralValue;
          totalEco += valuation.ecoValue.total;
          totalCarbon += valuation.ecoValue.carbonLbsPerYear;
          totalStormwater += valuation.ecoValue.stormwaterGallonsPerYear;
          totalEnergy += valuation.ecoValue.energy;
        }
      }

      // Create property valuation summary
      const propertyValuation: PropertyValuation = {
        trees: valuatedTrees,
        totals: {
          structuralValue: totalStructural,
          annualEcoValue: totalEco,
          carbonLbsPerYear: totalCarbon,
          stormwaterGallonsPerYear: totalStormwater,
          energySavings: totalEnergy,
          treeCount: valuatedTrees.length,
        },
        email: data.email,
        address: data.address,
        zipCode: data.zipCode,
        createdAt: new Date().toISOString(),
      };

      // Store in session storage for the results page
      sessionStorage.setItem("propertyValuation", JSON.stringify(propertyValuation));

      // Track conversion events
      MetaEvents.completeRegistration(totalStructural);
      MetaEvents.valuationCompleted(totalStructural, totalEco);
      if (data.email) {
        MetaEvents.lead(totalStructural);
        MetaEvents.emailCaptured();
      }

      // Redirect to results page
      router.push("/calculator/results");
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
      {/* SEO: Hidden H1 for accessibility and search engines */}
      <h1 className="sr-only">Free Tree Value Calculator - Calculate Your Tree&apos;s Worth</h1>
      <CalculatorContent />
    </WizardProvider>
  );
}
