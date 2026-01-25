"use client";

import { Hand, Circle, CircleDot, Users } from "lucide-react";
import { SelectionCard } from "@/components/ui";
import { useWizard } from "../wizard-context";
import type { GirthHeuristic } from "@/types";
import { GIRTH_OPTIONS } from "@/lib/constants";

const GIRTH_ICONS: Record<GirthHeuristic, React.ReactNode> = {
  fingers_wrap: <Hand className="w-7 h-7" />,
  paint_bucket: <Circle className="w-7 h-7" />,
  arms_wrap: <CircleDot className="w-7 h-7" />,
  two_people_hug: <Users className="w-7 h-7" />,
};

export function GirthStep() {
  const { currentTree, setGirth } = useWizard();

  return (
    <div className="space-y-4">
      <div className="text-center mb-8">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-charcoal-900 mb-2">
          How thick is the trunk?
        </h2>
        <p className="text-charcoal-600">
          Measure at chest height (about 4.5 feet from the ground)
        </p>
      </div>

      <div className="grid gap-3">
        {GIRTH_OPTIONS.map((option) => (
          <SelectionCard
            key={option.value}
            title={option.label}
            description={option.description}
            icon={GIRTH_ICONS[option.value]}
            selected={currentTree.girth === option.value}
            onClick={() => setGirth(option.value)}
            aria-label={`Select ${option.label}`}
          />
        ))}
      </div>
    </div>
  );
}
