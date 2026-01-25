"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface ProgressIndicatorProps {
  steps: number;
  currentStep: number;
  labels?: string[];
  className?: string;
}

export function ProgressIndicator({
  steps,
  currentStep,
  labels,
  className,
}: ProgressIndicatorProps) {
  return (
    <div className={cn("w-full", className)}>
      {/* Mobile: Simple progress bar */}
      <div className="sm:hidden">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-charcoal-700">
            Step {currentStep} of {steps}
          </span>
          <span className="text-sm text-charcoal-500">
            {Math.round((currentStep / steps) * 100)}%
          </span>
        </div>
        <div className="h-2 bg-charcoal-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-forest-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${(currentStep / steps) * 100}%` }}
          />
        </div>
      </div>

      {/* Desktop: Step indicators */}
      <div className="hidden sm:flex items-center justify-center">
        {Array.from({ length: steps }, (_, i) => {
          const stepNumber = i + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <div key={stepNumber} className="flex items-center">
              {/* Step circle */}
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center",
                    "font-medium text-sm transition-all duration-200",
                    isCompleted && "bg-forest-700 text-white",
                    isCurrent &&
                      "bg-forest-700 text-white ring-4 ring-forest-200",
                    !isCompleted &&
                      !isCurrent &&
                      "bg-charcoal-100 text-charcoal-400"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5" strokeWidth={2.5} />
                  ) : (
                    stepNumber
                  )}
                </div>
                {labels && labels[i] && (
                  <span
                    className={cn(
                      "mt-2 text-xs font-medium text-center max-w-[80px]",
                      isCurrent ? "text-forest-700" : "text-charcoal-500"
                    )}
                  >
                    {labels[i]}
                  </span>
                )}
              </div>

              {/* Connector line */}
              {stepNumber < steps && (
                <div
                  className={cn(
                    "w-12 lg:w-16 h-0.5 mx-2",
                    stepNumber < currentStep
                      ? "bg-forest-700"
                      : "bg-charcoal-200"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
