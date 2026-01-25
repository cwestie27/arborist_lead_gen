import { describe, it, expect } from "vitest";
import { calculateTreeValue, getRegionalMultiplier, getValuationSummary } from "./valuation";
import type { ValuationInputs } from "./valuation";
import {
  REGIONAL_COSTS,
  SPECIES_RATINGS,
  HEIGHT_MAP,
  GIRTH_MAP,
} from "./constants";

describe("valuation engine", () => {
  describe("getRegionalMultiplier", () => {
    it("returns tier1 pricing for high-cost areas", () => {
      expect(getRegionalMultiplier("90210")).toBe(REGIONAL_COSTS.tier1); // CA
      expect(getRegionalMultiplier("10001")).toBe(REGIONAL_COSTS.tier1); // NY
      expect(getRegionalMultiplier("02101")).toBe(REGIONAL_COSTS.tier1); // MA
    });

    it("returns tier2 pricing for average-cost areas", () => {
      expect(getRegionalMultiplier("22101")).toBe(REGIONAL_COSTS.tier2); // VA
      expect(getRegionalMultiplier("60601")).toBe(REGIONAL_COSTS.tier2); // IL
      expect(getRegionalMultiplier("75201")).toBe(REGIONAL_COSTS.tier2); // TX
    });

    it("returns tier3 pricing for unknown/rural areas", () => {
      expect(getRegionalMultiplier("99999")).toBe(REGIONAL_COSTS.tier3);
      expect(getRegionalMultiplier("12345")).toBe(REGIONAL_COSTS.tier3);
    });

    it("returns tier2 (default) for null/invalid zip codes", () => {
      expect(getRegionalMultiplier(null)).toBe(REGIONAL_COSTS.tier2);
      expect(getRegionalMultiplier("")).toBe(REGIONAL_COSTS.tier2);
      expect(getRegionalMultiplier("1")).toBe(REGIONAL_COSTS.tier2);
    });
  });

  describe("calculateTreeValue", () => {
    describe("basic calculations", () => {
      it("calculates value for a medium oak tree", () => {
        const inputs: ValuationInputs = {
          species: "oak",
          height: "2_story",
          girth: "paint_bucket",
        };

        const result = calculateTreeValue(inputs);

        // Verify structure
        expect(result).toHaveProperty("structuralValue");
        expect(result).toHaveProperty("ecoValue");
        expect(result).toHaveProperty("totalValue");
        expect(result).toHaveProperty("inputs");

        // Structural value should be positive and reasonable
        expect(result.structuralValue).toBeGreaterThan(1000);
        expect(result.structuralValue).toBeLessThan(10000);

        // Eco value breakdown
        expect(result.ecoValue.total).toBeGreaterThan(0);
        expect(result.ecoValue.carbon).toBeGreaterThanOrEqual(0);
        expect(result.ecoValue.stormwater).toBeGreaterThanOrEqual(0);

        // Total should equal structural + eco
        expect(result.totalValue).toBe(
          result.structuralValue + result.ecoValue.total
        );
      });

      it("calculates value for a large oak tree (arms wrap)", () => {
        const inputs: ValuationInputs = {
          species: "oak",
          height: "taller_2_story",
          girth: "arms_wrap",
        };

        const result = calculateTreeValue(inputs);

        // Large oak should have significant value
        expect(result.structuralValue).toBeGreaterThan(5000);
        expect(result.structuralValue).toBeLessThan(30000);
      });

      it("calculates value for a small sapling", () => {
        const inputs: ValuationInputs = {
          species: "other",
          height: "1_story",
          girth: "fingers_wrap",
        };

        const result = calculateTreeValue(inputs);

        // Small tree should have modest value
        expect(result.structuralValue).toBeGreaterThan(0);
        expect(result.structuralValue).toBeLessThan(500);
      });

      it("calculates value for a massive tree (two people hug)", () => {
        const inputs: ValuationInputs = {
          species: "oak",
          height: "towering",
          girth: "two_people_hug",
        };

        const result = calculateTreeValue(inputs);

        // Very large tree should trigger adjusted trunk area
        // Value should be significant but not astronomical
        expect(result.structuralValue).toBeGreaterThan(10000);
        expect(result.structuralValue).toBeLessThan(100000);
      });
    });

    describe("species ratings affect value", () => {
      const baseInputs = {
        height: "2_story" as const,
        girth: "arms_wrap" as const,
      };

      it("oak trees are worth more than pine trees", () => {
        const oakResult = calculateTreeValue({ ...baseInputs, species: "oak" });
        const pineResult = calculateTreeValue({ ...baseInputs, species: "pine" });

        expect(oakResult.structuralValue).toBeGreaterThan(
          pineResult.structuralValue
        );
      });

      it("maple trees are worth slightly less than oak", () => {
        const oakResult = calculateTreeValue({ ...baseInputs, species: "oak" });
        const mapleResult = calculateTreeValue({
          ...baseInputs,
          species: "maple",
        });

        expect(oakResult.structuralValue).toBeGreaterThan(
          mapleResult.structuralValue
        );
        // But close in value
        expect(mapleResult.structuralValue).toBeGreaterThan(
          oakResult.structuralValue * 0.8
        );
      });

      it("unknown species have lowest rating", () => {
        const oakResult = calculateTreeValue({ ...baseInputs, species: "oak" });
        const otherResult = calculateTreeValue({
          ...baseInputs,
          species: "other",
        });

        expect(oakResult.structuralValue).toBeGreaterThan(
          otherResult.structuralValue
        );
        // Other should be roughly half of oak
        const ratio =
          SPECIES_RATINGS.other / SPECIES_RATINGS.oak;
        expect(otherResult.structuralValue).toBeCloseTo(
          oakResult.structuralValue * ratio,
          -2 // Allow 1% variance
        );
      });
    });

    describe("regional pricing affects value", () => {
      const baseInputs: Omit<ValuationInputs, "zipCode"> = {
        species: "oak",
        height: "2_story",
        girth: "arms_wrap",
      };

      it("CA trees are worth more than rural trees", () => {
        const caResult = calculateTreeValue({ ...baseInputs, zipCode: "90210" });
        const ruralResult = calculateTreeValue({
          ...baseInputs,
          zipCode: "99999",
        });

        expect(caResult.structuralValue).toBeGreaterThan(
          ruralResult.structuralValue
        );
      });

      it("regional multiplier is reflected in inputs", () => {
        const caResult = calculateTreeValue({ ...baseInputs, zipCode: "90210" });
        expect(caResult.inputs.regionalMultiplier).toBe(REGIONAL_COSTS.tier1);

        const vaResult = calculateTreeValue({ ...baseInputs, zipCode: "22101" });
        expect(vaResult.inputs.regionalMultiplier).toBe(REGIONAL_COSTS.tier2);
      });
    });

    describe("input validation and sanity checks", () => {
      it("adjusts height when girth is large but height is small (stoutness cap)", () => {
        // A 36" DBH tree cannot be only 12' tall
        const inputs: ValuationInputs = {
          species: "oak",
          height: "1_story", // 12 ft
          girth: "two_people_hug", // 36" DBH
        };

        const result = calculateTreeValue(inputs);

        // Height should be adjusted up from 12 to 42
        expect(result.inputs.heightFeet).toBeGreaterThan(HEIGHT_MAP["1_story"]);
      });

      it("adjusts DBH when height is tall but girth is small (slenderness floor)", () => {
        // A 65' tree cannot have only a 3" trunk
        const inputs: ValuationInputs = {
          species: "pine",
          height: "towering", // 65 ft
          girth: "fingers_wrap", // 3" DBH
        };

        const result = calculateTreeValue(inputs);

        // DBH should be adjusted up from 3 to 15
        expect(result.inputs.dbhInches).toBeGreaterThan(GIRTH_MAP["fingers_wrap"]);
      });

      it("does not adjust valid input combinations", () => {
        const inputs: ValuationInputs = {
          species: "oak",
          height: "taller_2_story",
          girth: "arms_wrap",
        };

        const result = calculateTreeValue(inputs);

        // Inputs should remain as specified
        expect(result.inputs.dbhInches).toBe(GIRTH_MAP["arms_wrap"]);
        expect(result.inputs.heightFeet).toBe(HEIGHT_MAP["taller_2_story"]);
      });
    });

    describe("ecosystem value calculations", () => {
      it("calculates carbon sequestration value", () => {
        const inputs: ValuationInputs = {
          species: "oak",
          height: "taller_2_story",
          girth: "arms_wrap",
        };

        const result = calculateTreeValue(inputs);

        expect(result.ecoValue.carbon).toBeGreaterThan(0);
      });

      it("calculates stormwater interception value", () => {
        const inputs: ValuationInputs = {
          species: "oak",
          height: "taller_2_story",
          girth: "arms_wrap",
        };

        const result = calculateTreeValue(inputs);

        expect(result.ecoValue.stormwater).toBeGreaterThan(0);
      });

      it("includes energy savings for tall trees", () => {
        const tallInputs: ValuationInputs = {
          species: "oak",
          height: "taller_2_story", // 42 ft > 30 ft threshold
          girth: "arms_wrap",
        };

        const shortInputs: ValuationInputs = {
          species: "oak",
          height: "1_story", // 12 ft < 30 ft threshold
          girth: "paint_bucket",
        };

        const tallResult = calculateTreeValue(tallInputs);
        const shortResult = calculateTreeValue(shortInputs);

        expect(tallResult.ecoValue.energy).toBe(25); // ENERGY_SAVINGS_LARGE_TREE
        expect(shortResult.ecoValue.energy).toBe(0);
      });

      it("evergreens intercept more stormwater than deciduous", () => {
        const pineInputs: ValuationInputs = {
          species: "pine", // Lower species rating = evergreen factor
          height: "taller_2_story",
          girth: "arms_wrap",
        };

        const oakInputs: ValuationInputs = {
          species: "oak",
          height: "taller_2_story",
          girth: "arms_wrap",
        };

        const pineResult = calculateTreeValue(pineInputs);
        const oakResult = calculateTreeValue(oakInputs);

        // Pine (evergreen) should intercept more water
        expect(pineResult.ecoValue.stormwater).toBeGreaterThan(
          oakResult.ecoValue.stormwater
        );
      });
    });

    describe("large tree adjustment (TAA)", () => {
      it("applies adjustment for trees over 30 inches DBH", () => {
        // Compare a 30" tree (no adjustment) vs 36" tree (with adjustment)
        const borderlineInputs: ValuationInputs = {
          species: "oak",
          height: "taller_2_story",
          girth: "arms_wrap", // 20" DBH - no adjustment
        };

        const largeInputs: ValuationInputs = {
          species: "oak",
          height: "towering",
          girth: "two_people_hug", // 36" DBH - with adjustment
        };

        const borderlineResult = calculateTreeValue(borderlineInputs);
        const largeResult = calculateTreeValue(largeInputs);

        // Large tree should be worth more, but not proportionally more
        // Without TAA, 36" would be 3.24x the area of 20" (1017 vs 314)
        // With TAA, the ratio should be closer
        const areaRatio = Math.pow(36 / 20, 2);
        const valueRatio =
          largeResult.structuralValue / borderlineResult.structuralValue;

        expect(valueRatio).toBeLessThan(areaRatio);
      });
    });
  });

  describe("getValuationSummary", () => {
    it("returns a formatted string summary", () => {
      const inputs: ValuationInputs = {
        species: "oak",
        height: "taller_2_story",
        girth: "arms_wrap",
        zipCode: "22101",
      };

      const valuation = calculateTreeValue(inputs);
      const summary = getValuationSummary(valuation);

      expect(typeof summary).toBe("string");
      expect(summary).toContain("Tree Valuation Summary");
      expect(summary).toContain("Structural (Replacement) Value");
      expect(summary).toContain("Annual Ecosystem Benefits");
      expect(summary).toContain("Carbon Sequestration");
    });
  });
});
