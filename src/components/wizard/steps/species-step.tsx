"use client";

import { TreeDeciduous, TreePine, Apple, HelpCircle } from "lucide-react";
import { SelectionCard } from "@/components/ui";
import { useWizard } from "../wizard-context";
import type { SpeciesCategory } from "@/types";
import { SPECIES_OPTIONS } from "@/lib/constants";

const SPECIES_ICONS: Record<SpeciesCategory, React.ReactNode> = {
  oak: <TreeDeciduous className="w-7 h-7" />,
  maple: <TreeDeciduous className="w-7 h-7" />,
  pine: <TreePine className="w-7 h-7" />,
  fruit_tree: <Apple className="w-7 h-7" />,
  other: <HelpCircle className="w-7 h-7" />,
};

export function SpeciesStep() {
  const { data, setSpecies } = useWizard();

  return (
    <div className="space-y-4">
      <div className="text-center mb-8">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-charcoal-900 mb-2">
          What type of tree is it?
        </h2>
        <p className="text-charcoal-600">
          Select the category that best matches your tree
        </p>
      </div>

      <div className="grid gap-3">
        {SPECIES_OPTIONS.map((option) => (
          <SelectionCard
            key={option.value}
            title={option.label}
            description={option.description}
            icon={SPECIES_ICONS[option.value]}
            selected={data.species === option.value}
            onClick={() => setSpecies(option.value)}
            aria-label={`Select ${option.label}`}
          />
        ))}
      </div>
    </div>
  );
}
