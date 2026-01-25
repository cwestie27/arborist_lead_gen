"use client";

import { useCallback, useState } from "react";
import { TreeDeciduous, TreePine, Apple, Camera, Check, Loader2 } from "lucide-react";
import { SelectionCard, PhotoUpload, Button } from "@/components/ui";
import { useWizard } from "../wizard-context";
import type { SpeciesCategory } from "@/types";
import { SPECIES_OPTIONS } from "@/lib/constants";

const SPECIES_ICONS: Record<SpeciesCategory, React.ReactNode> = {
  oak: <TreeDeciduous className="w-7 h-7" />,
  maple: <TreeDeciduous className="w-7 h-7" />,
  pine: <TreePine className="w-7 h-7" />,
  fruit_tree: <Apple className="w-7 h-7" />,
  other: <Camera className="w-7 h-7" />,
};

export function SpeciesStep() {
  const {
    currentTree,
    setSpecies,
    setIdentificationPhotos,
    setIdentificationResult,
    setCustomSpecies,
    setIdentifying,
    isIdentifying,
  } = useWizard();

  const [identificationError, setIdentificationError] = useState<string | null>(null);

  const handleIdentify = useCallback(async () => {
    if (currentTree.identificationPhotos.length === 0) return;

    setIdentifying(true);
    setIdentificationError(null);

    try {
      const response = await fetch("/api/identify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          images: currentTree.identificationPhotos.map((p) => p.base64),
          includeHealth: false, // Just identification for this step
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Identification failed");
      }

      if (data.identification) {
        setIdentificationResult(data.identification);
        setCustomSpecies(data.identification.commonName);
      } else {
        setIdentificationError("Could not identify the tree. Please try a clearer photo.");
      }
    } catch (error) {
      setIdentificationError(
        error instanceof Error ? error.message : "Identification failed"
      );
    } finally {
      setIdentifying(false);
    }
  }, [currentTree.identificationPhotos, setIdentificationResult, setCustomSpecies, setIdentifying]);

  const showPhotoUpload = currentTree.species === "other";

  return (
    <div className="space-y-4">
      <div className="text-center mb-8">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-charcoal-900 mb-2">
          What type of tree is it?
        </h2>
        <p className="text-charcoal-600">
          Select a category or upload a photo for identification
        </p>
      </div>

      <div className="grid gap-3">
        {SPECIES_OPTIONS.map((option) => (
          <SelectionCard
            key={option.value}
            title={option.label}
            description={option.description}
            icon={SPECIES_ICONS[option.value]}
            selected={currentTree.species === option.value}
            onClick={() => setSpecies(option.value)}
            aria-label={`Select ${option.label}`}
          />
        ))}
      </div>

      {/* Photo Upload for "Other" */}
      {showPhotoUpload && (
        <div className="mt-6 p-6 bg-forest-50 rounded-xl border border-forest-200">
          <PhotoUpload
            photos={currentTree.identificationPhotos}
            onPhotosChange={setIdentificationPhotos}
            maxPhotos={3}
            title="Upload Tree Photos"
            description="Upload clear photos of leaves, bark, or the whole tree"
            isLoading={isIdentifying}
          />

          {currentTree.identificationPhotos.length > 0 && !currentTree.identificationResult && (
            <div className="mt-4">
              <Button
                onClick={handleIdentify}
                disabled={isIdentifying}
                className="w-full"
                leftIcon={isIdentifying ? <Loader2 className="w-4 h-4 animate-spin" /> : undefined}
              >
                {isIdentifying ? "Identifying..." : "Identify Tree"}
              </Button>
            </div>
          )}

          {identificationError && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {identificationError}
            </div>
          )}

          {/* Show Identification Result */}
          {currentTree.identificationResult && (
            <div className="mt-4 p-4 bg-white rounded-lg border border-forest-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-forest-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-forest-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-charcoal-900">
                    {currentTree.identificationResult.commonName}
                  </p>
                  <p className="text-sm text-charcoal-500 italic">
                    {currentTree.identificationResult.scientificName}
                  </p>
                  <p className="text-sm text-forest-600 mt-1">
                    {(currentTree.identificationResult.probability * 100).toFixed(0)}% confidence
                  </p>
                  {currentTree.identificationResult.description && (
                    <p className="text-sm text-charcoal-600 mt-2 line-clamp-3">
                      {currentTree.identificationResult.description}
                    </p>
                  )}
                </div>
                {currentTree.identificationResult.imageUrl && (
                  <img
                    src={currentTree.identificationResult.imageUrl}
                    alt={currentTree.identificationResult.commonName}
                    className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
