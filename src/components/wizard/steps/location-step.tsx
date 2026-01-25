"use client";

import { Home, TreeDeciduous, ArrowLeftRight } from "lucide-react";
import { SelectionCard } from "@/components/ui";
import { useWizard } from "../wizard-context";
import type { LocationType } from "@/types";

interface LocationOption {
  value: LocationType;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const LOCATION_OPTIONS: LocationOption[] = [
  {
    value: "front_yard",
    label: "Front Yard",
    description: "Visible from the street, adds curb appeal",
    icon: <Home className="w-7 h-7" />,
  },
  {
    value: "back_yard",
    label: "Back Yard",
    description: "Behind the house, provides shade and privacy",
    icon: <TreeDeciduous className="w-7 h-7" />,
  },
  {
    value: "side_yard",
    label: "Side Yard",
    description: "Along the side of the property",
    icon: <ArrowLeftRight className="w-7 h-7" />,
  },
];

export function LocationStep() {
  const { currentTree, setLocation } = useWizard();

  return (
    <div className="space-y-4">
      <div className="text-center mb-8">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-charcoal-900 mb-2">
          Where is your tree located?
        </h2>
        <p className="text-charcoal-600">
          Location affects the tree&apos;s contribution to your property value
        </p>
      </div>

      <div className="grid gap-3">
        {LOCATION_OPTIONS.map((option) => (
          <SelectionCard
            key={option.value}
            title={option.label}
            description={option.description}
            icon={option.icon}
            selected={currentTree.location === option.value}
            onClick={() => setLocation(option.value)}
            aria-label={`Select ${option.label}`}
          />
        ))}
      </div>
    </div>
  );
}
