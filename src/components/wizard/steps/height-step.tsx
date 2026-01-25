"use client";

import { Home, Building2, TreeDeciduous, Zap } from "lucide-react";
import { SelectionCard } from "@/components/ui";
import { useWizard } from "../wizard-context";
import type { HeightHeuristic } from "@/types";
import { HEIGHT_OPTIONS } from "@/lib/constants";

const HEIGHT_ICONS: Record<HeightHeuristic, React.ReactNode> = {
  "1_story": <Home className="w-7 h-7" />,
  "2_story": <Building2 className="w-7 h-7" />,
  taller_2_story: <TreeDeciduous className="w-7 h-7" />,
  towering: <Zap className="w-7 h-7" />,
};

export function HeightStep() {
  const { data, setHeight } = useWizard();

  return (
    <div className="space-y-4">
      <div className="text-center mb-8">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-charcoal-900 mb-2">
          How tall is your tree?
        </h2>
        <p className="text-charcoal-600">
          Compare it to nearby structures for reference
        </p>
      </div>

      <div className="grid gap-3">
        {HEIGHT_OPTIONS.map((option) => (
          <SelectionCard
            key={option.value}
            title={option.label}
            description={option.description}
            icon={HEIGHT_ICONS[option.value]}
            selected={data.height === option.value}
            onClick={() => setHeight(option.value)}
            aria-label={`Select ${option.label}`}
          />
        ))}
      </div>
    </div>
  );
}
