import { describe, it, expect } from "vitest";
import { cn, formatCurrency, formatNumber } from "./utils";

describe("utils", () => {
  describe("cn", () => {
    it("merges class names", () => {
      expect(cn("foo", "bar")).toBe("foo bar");
    });

    it("handles conditional classes", () => {
      expect(cn("base", true && "included", false && "excluded")).toBe(
        "base included"
      );
    });

    it("merges conflicting Tailwind classes correctly", () => {
      expect(cn("px-4", "px-6")).toBe("px-6");
      expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
    });
  });

  describe("formatCurrency", () => {
    it("formats numbers as USD currency", () => {
      expect(formatCurrency(1000)).toBe("$1,000");
      expect(formatCurrency(18330)).toBe("$18,330");
      expect(formatCurrency(0)).toBe("$0");
    });

    it("respects decimal places", () => {
      expect(formatCurrency(1234.56, 2)).toBe("$1,234.56");
      expect(formatCurrency(1234.5, 0)).toBe("$1,235");
    });

    it("handles large numbers", () => {
      expect(formatCurrency(1000000)).toBe("$1,000,000");
    });
  });

  describe("formatNumber", () => {
    it("formats numbers with commas", () => {
      expect(formatNumber(1000)).toBe("1,000");
      expect(formatNumber(1234567)).toBe("1,234,567");
    });

    it("respects decimal places", () => {
      expect(formatNumber(1234.567, 2)).toBe("1,234.57");
    });
  });
});
