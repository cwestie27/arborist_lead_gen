"use client";

import { useCallback, useState, useEffect, useRef } from "react";
import {
  Heart,
  ThumbsUp,
  Minus,
  AlertTriangle,
  AlertCircle,
  Camera,
  Loader2,
  Check,
} from "lucide-react";
import { SelectionCard, PhotoUpload } from "@/components/ui";
import { useWizard } from "../wizard-context";
import type { HealthCondition, PhotoUpload as PhotoUploadType } from "@/types";
import { HEALTH_OPTIONS } from "@/lib/constants";

const HEALTH_ICONS: Record<HealthCondition, React.ReactNode> = {
  excellent: <Heart className="w-7 h-7 text-green-500" />,
  good: <ThumbsUp className="w-7 h-7 text-blue-500" />,
  fair: <Minus className="w-7 h-7 text-yellow-500" />,
  poor: <AlertTriangle className="w-7 h-7 text-orange-500" />,
  critical: <AlertCircle className="w-7 h-7 text-red-500" />,
};

export function HealthStep() {
  const {
    currentTree,
    setHealthCondition,
    setHealthPhotos,
    setHealthAssessment,
    setIdentifying,
    isIdentifying,
  } = useWizard();

  const [assessmentError, setAssessmentError] = useState<string | null>(null);
  const lastAnalyzedPhotosRef = useRef<string>("");

  const handleAssessHealth = useCallback(async (photos: PhotoUploadType[]) => {
    if (photos.length === 0) return;

    // Create a key from photo IDs to track what we've analyzed
    const photosKey = photos.map(p => p.id).sort().join(",");

    // Don't re-analyze if we already analyzed these exact photos
    if (photosKey === lastAnalyzedPhotosRef.current) return;

    setIdentifying(true);
    setAssessmentError(null);

    try {
      const response = await fetch("/api/identify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          images: photos.map((p) => p.base64),
          includeHealth: true,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Health assessment failed");
      }

      if (data.healthAssessment) {
        setHealthAssessment(data.healthAssessment);
        // Auto-select suggested condition from AI
        if (data.suggestedCondition) {
          setHealthCondition(data.suggestedCondition);
        }
        lastAnalyzedPhotosRef.current = photosKey;
      } else {
        setAssessmentError("Could not assess health. Please select condition manually.");
      }
    } catch (error) {
      setAssessmentError(
        error instanceof Error ? error.message : "Health assessment failed"
      );
    } finally {
      setIdentifying(false);
    }
  }, [
    setHealthAssessment,
    setHealthCondition,
    setIdentifying,
  ]);

  // Auto-analyze when photos are added
  useEffect(() => {
    if (currentTree.healthPhotos.length > 0 && !isIdentifying && !currentTree.healthAssessment) {
      handleAssessHealth(currentTree.healthPhotos);
    }
  }, [currentTree.healthPhotos, currentTree.healthAssessment, isIdentifying, handleAssessHealth]);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-charcoal-900 mb-2">
          How healthy is your tree?
        </h2>
        <p className="text-charcoal-600">
          Upload photos for AI assessment or select a condition manually
        </p>
      </div>

      {/* Photo Upload Section */}
      <div className="p-6 bg-earth-50 rounded-xl border border-earth-200">
        <div className="flex items-center gap-2 mb-4">
          <Camera className="w-5 h-5 text-earth-600" />
          <h3 className="font-semibold text-charcoal-900">
            AI Health Assessment (Optional)
          </h3>
        </div>

        <PhotoUpload
          photos={currentTree.healthPhotos}
          onPhotosChange={setHealthPhotos}
          maxPhotos={3}
          title="Upload Health Photos"
          description="Photos of leaves, trunk, or problem areas"
          isLoading={isIdentifying}
        />

        {isIdentifying && (
          <div className="mt-4 flex items-center justify-center gap-2 text-earth-600">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span className="text-sm">Analyzing health...</span>
          </div>
        )}

        {assessmentError && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {assessmentError}
          </div>
        )}

        {/* Health Assessment Result */}
        {currentTree.healthAssessment && (
          <div className="mt-4 p-4 bg-white rounded-lg border border-earth-200">
            <div className="flex items-center gap-2 mb-3">
              <Check className="w-5 h-5 text-forest-600" />
              <span className="font-semibold text-charcoal-900">
                AI Assessment Complete
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-charcoal-600">Overall Health:</span>
                <span
                  className={`font-semibold ${
                    currentTree.healthAssessment.isHealthy
                      ? "text-green-600"
                      : "text-orange-600"
                  }`}
                >
                  {currentTree.healthAssessment.isHealthy ? "Healthy" : "Needs Attention"}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-charcoal-600">Confidence:</span>
                <span className="text-charcoal-900">
                  {(currentTree.healthAssessment.healthProbability * 100).toFixed(0)}%
                </span>
              </div>

              {currentTree.healthAssessment.diseases.length > 0 && (
                <div className="pt-3 border-t border-earth-100">
                  <p className="text-sm font-medium text-charcoal-700 mb-2">
                    Potential Issues Detected:
                  </p>
                  <ul className="space-y-2">
                    {currentTree.healthAssessment.diseases
                      .filter((d) => d.probability > 0.2)
                      .slice(0, 3)
                      .map((disease, i) => (
                        <li key={i} className="text-sm">
                          <span className="font-medium text-orange-700">
                            {disease.name}
                          </span>
                          <span className="text-charcoal-500">
                            {" "}
                            ({(disease.probability * 100).toFixed(0)}% probability)
                          </span>
                          {disease.description && (
                            <p className="text-charcoal-600 text-xs mt-1 line-clamp-2">
                              {disease.description}
                            </p>
                          )}
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Manual Selection */}
      <div>
        <h3 className="font-semibold text-charcoal-900 mb-3">
          {currentTree.healthAssessment
            ? "Confirm or adjust the condition:"
            : "Or select condition manually:"}
        </h3>
        <div className="grid gap-3">
          {HEALTH_OPTIONS.map((option) => (
            <SelectionCard
              key={option.value}
              title={option.label}
              description={option.description}
              icon={HEALTH_ICONS[option.value]}
              selected={currentTree.healthCondition === option.value}
              onClick={() => setHealthCondition(option.value)}
              aria-label={`Select ${option.label} condition`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
