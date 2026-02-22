"use client";

import { useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  TreeDeciduous,
  Plus,
  X,
  Check,
} from "lucide-react";
import { Button, ProgressIndicator } from "@/components/ui";
import { useWizard } from "./wizard-context";
import {
  SpeciesStep,
  HeightStep,
  GirthStep,
  LocationStep,
  HealthStep,
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
    data,
    currentTree,
    addTree,
    removeTree,
    selectTree,
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
        return <HealthStep />;
      case 6:
        return <EmailStep />;
      default:
        return null;
    }
  };

  const stepLabels = WIZARD_STEPS.map((s) => s.title);

  // Check if current tree is complete (has all required fields)
  const isTreeComplete = (index: number) => {
    const tree = data.trees[index];
    return (
      tree.species !== null &&
      tree.height !== null &&
      tree.girth !== null &&
      tree.location !== null &&
      tree.healthCondition !== null
    );
  };

  // Get tree display name
  const getTreeName = (index: number) => {
    const tree = data.trees[index];
    if (tree.nickname) return tree.nickname;
    if (tree.customSpecies) return tree.customSpecies;
    if (tree.identificationResult) return tree.identificationResult.commonName;
    if (tree.species && tree.species !== "other") {
      return tree.species.charAt(0).toUpperCase() + tree.species.slice(1).replace("_", " ");
    }
    return `Tree ${index + 1}`;
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white border-b border-charcoal-100 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TreeDeciduous className="w-6 h-6 text-forest-600" />
              <span className="font-heading text-lg font-semibold text-charcoal-900">
                Arbor Value
              </span>
            </div>
            <span className="text-sm text-charcoal-500">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
        </div>
      </header>

      {/* Tree Selector (Multi-tree) */}
      {data.trees.length > 0 && (
        <div className="bg-earth-50 border-b border-earth-200">
          <div className="max-w-2xl mx-auto px-6 py-3">
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {data.trees.map((tree, index) => (
                <button
                  key={tree.id}
                  onClick={() => selectTree(index)}
                  className={`
                    flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium
                    whitespace-nowrap transition-all
                    ${
                      index === data.currentTreeIndex
                        ? "bg-forest-600 text-white"
                        : "bg-white border border-charcoal-200 text-charcoal-700 hover:border-forest-300"
                    }
                  `}
                >
                  {isTreeComplete(index) && (
                    <Check className="w-4 h-4 flex-shrink-0" />
                  )}
                  <span>{getTreeName(index)}</span>
                  {data.trees.length > 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeTree(index);
                      }}
                      className={`
                        ml-1 p-0.5 rounded-full hover:bg-black/10
                        ${index === data.currentTreeIndex ? "text-white/80" : "text-charcoal-400"}
                      `}
                      aria-label={`Remove ${getTreeName(index)}`}
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </button>
              ))}

              <button
                onClick={addTree}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium
                  border-2 border-dashed border-forest-300 text-forest-600
                  hover:border-forest-500 hover:bg-forest-50 transition-all whitespace-nowrap"
              >
                <Plus className="w-4 h-4" />
                Add Tree
              </button>
            </div>
          </div>
        </div>
      )}

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
              key={`${data.currentTreeIndex}-${currentStep}`}
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
