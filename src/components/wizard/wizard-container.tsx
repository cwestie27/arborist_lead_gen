"use client";

import { useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, TreeDeciduous } from "lucide-react";
import { Button, ProgressIndicator } from "@/components/ui";
import { useWizard } from "./wizard-context";
import {
  SpeciesStep,
  HeightStep,
  GirthStep,
  LocationStep,
  EmailStep,
} from "./steps";
import { WIZARD_STEPS } from "@/lib/constants";

const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

interface WizardContainerProps {
  onComplete?: () => void;
}

export function WizardContainer({ onComplete }: WizardContainerProps) {
  const {
    currentStep,
    canGoNext,
    canGoBack,
    nextStep,
    prevStep,
    isComplete,
    totalSteps,
  } = useWizard();

  const handleNext = useCallback(() => {
    if (canGoNext) {
      nextStep();
    }
  }, [canGoNext, nextStep]);

  const handleBack = useCallback(() => {
    if (canGoBack) {
      prevStep();
    }
  }, [canGoBack, prevStep]);

  // Call onComplete when wizard finishes
  if (isComplete && onComplete) {
    onComplete();
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <SpeciesStep />;
      case 2:
        return <HeightStep />;
      case 3:
        return <GirthStep />;
      case 4:
        return <LocationStep />;
      case 5:
        return <EmailStep />;
      default:
        return null;
    }
  };

  const stepLabels = WIZARD_STEPS.map((s) => s.title);

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white border-b border-charcoal-100 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TreeDeciduous className="w-6 h-6 text-forest-600" />
              <span className="font-heading text-lg font-semibold text-charcoal-900">
                TreeValue Pro
              </span>
            </div>
            <span className="text-sm text-charcoal-500">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
        </div>
      </header>

      {/* Progress */}
      <div className="bg-white border-b border-charcoal-100">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <ProgressIndicator
            steps={totalSteps}
            currentStep={currentStep}
            labels={stepLabels}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-8 md:py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-charcoal-100 p-6 md:p-8">
          <AnimatePresence mode="wait" custom={1}>
            <motion.div
              key={currentStep}
              custom={1}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <div>
            {canGoBack && (
              <Button
                variant="ghost"
                onClick={handleBack}
                leftIcon={<ArrowLeft className="w-4 h-4" />}
              >
                Back
              </Button>
            )}
          </div>

          <Button
            onClick={handleNext}
            disabled={!canGoNext}
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            {currentStep === totalSteps ? "Get My Report" : "Continue"}
          </Button>
        </div>
      </main>
    </div>
  );
}
