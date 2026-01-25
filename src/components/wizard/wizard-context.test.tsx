import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { WizardProvider, useWizard, isValidEmail } from "./wizard-context";
import type { ReactNode } from "react";

// Wrapper for testing hooks
function createWrapper(initialData = {}) {
  return function Wrapper({ children }: { children: ReactNode }) {
    return (
      <WizardProvider initialData={initialData}>{children}</WizardProvider>
    );
  };
}

describe("WizardContext", () => {
  describe("isValidEmail", () => {
    it("validates correct email formats", () => {
      expect(isValidEmail("test@example.com")).toBe(true);
      expect(isValidEmail("user.name@domain.co.uk")).toBe(true);
      expect(isValidEmail("user+tag@example.org")).toBe(true);
    });

    it("rejects invalid email formats", () => {
      expect(isValidEmail("")).toBe(false);
      expect(isValidEmail("notanemail")).toBe(false);
      expect(isValidEmail("missing@domain")).toBe(false);
      expect(isValidEmail("@nodomain.com")).toBe(false);
      expect(isValidEmail("spaces in@email.com")).toBe(false);
    });
  });

  describe("useWizard hook", () => {
    it("throws error when used outside provider", () => {
      // Suppress console.error for this test
      const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

      expect(() => {
        renderHook(() => useWizard());
      }).toThrow("useWizard must be used within a WizardProvider");

      consoleSpy.mockRestore();
    });

    it("provides initial state", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      expect(result.current.currentStep).toBe(1);
      expect(result.current.currentTree.species).toBeNull();
      expect(result.current.currentTree.height).toBeNull();
      expect(result.current.currentTree.girth).toBeNull();
      expect(result.current.currentTree.location).toBeNull();
      expect(result.current.currentTree.healthCondition).toBeNull();
      expect(result.current.data.email).toBeNull();
      expect(result.current.isComplete).toBe(false);
      expect(result.current.treeCount).toBe(1);
    });

    it("accepts initial data", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper({ zipCode: "22101" }),
      });

      expect(result.current.data.zipCode).toBe("22101");
    });
  });

  describe("navigation", () => {
    it("prevents advancing without selecting an option", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      expect(result.current.canGoNext).toBe(false);
      expect(result.current.currentStep).toBe(1);

      act(() => {
        result.current.nextStep();
      });

      // Should still be on step 1
      expect(result.current.currentStep).toBe(1);
    });

    it("allows advancing after selecting species", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      act(() => {
        result.current.setSpecies("oak");
      });

      expect(result.current.canGoNext).toBe(true);

      act(() => {
        result.current.nextStep();
      });

      expect(result.current.currentStep).toBe(2);
    });

    it("allows going back to previous step", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      // Advance to step 2
      act(() => {
        result.current.setSpecies("oak");
        result.current.nextStep();
      });

      expect(result.current.currentStep).toBe(2);
      expect(result.current.canGoBack).toBe(true);

      act(() => {
        result.current.prevStep();
      });

      expect(result.current.currentStep).toBe(1);
    });

    it("cannot go back from step 1", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      expect(result.current.canGoBack).toBe(false);

      act(() => {
        result.current.prevStep();
      });

      expect(result.current.currentStep).toBe(1);
    });

    it("allows jumping to specific step", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      act(() => {
        result.current.goToStep(3);
      });

      expect(result.current.currentStep).toBe(3);
    });

    it("clamps step to valid range", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      act(() => {
        result.current.goToStep(100);
      });

      expect(result.current.currentStep).toBe(6); // Max step

      act(() => {
        result.current.goToStep(-1);
      });

      expect(result.current.currentStep).toBe(1); // Min step
    });
  });

  describe("data setters", () => {
    it("sets species correctly", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      act(() => {
        result.current.setSpecies("maple");
      });

      expect(result.current.currentTree.species).toBe("maple");
    });

    it("sets height correctly", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      act(() => {
        result.current.setHeight("2_story");
      });

      expect(result.current.currentTree.height).toBe("2_story");
    });

    it("sets girth correctly", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      act(() => {
        result.current.setGirth("arms_wrap");
      });

      expect(result.current.currentTree.girth).toBe("arms_wrap");
    });

    it("sets location correctly", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      act(() => {
        result.current.setLocation("front_yard");
      });

      expect(result.current.currentTree.location).toBe("front_yard");
    });

    it("sets health condition correctly", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      act(() => {
        result.current.setHealthCondition("good");
      });

      expect(result.current.currentTree.healthCondition).toBe("good");
    });

    it("sets email correctly", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      act(() => {
        result.current.setEmail("test@example.com");
      });

      expect(result.current.data.email).toBe("test@example.com");
    });

    it("sets zip code correctly", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      act(() => {
        result.current.setZipCode("22101");
      });

      expect(result.current.data.zipCode).toBe("22101");
    });
  });

  describe("multi-tree support", () => {
    it("adds a new tree", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      expect(result.current.treeCount).toBe(1);

      act(() => {
        result.current.addTree();
      });

      expect(result.current.treeCount).toBe(2);
      expect(result.current.data.currentTreeIndex).toBe(1);
    });

    it("removes a tree", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      // Add a tree first
      act(() => {
        result.current.addTree();
      });

      expect(result.current.treeCount).toBe(2);

      act(() => {
        result.current.removeTree(1);
      });

      expect(result.current.treeCount).toBe(1);
    });

    it("cannot remove the last tree", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      expect(result.current.treeCount).toBe(1);

      act(() => {
        result.current.removeTree(0);
      });

      expect(result.current.treeCount).toBe(1);
    });

    it("selects a tree", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      // Add a tree first and set some data
      act(() => {
        result.current.setSpecies("oak");
        result.current.addTree();
        result.current.setSpecies("maple");
      });

      expect(result.current.currentTree.species).toBe("maple");

      act(() => {
        result.current.selectTree(0);
      });

      expect(result.current.currentTree.species).toBe("oak");
    });
  });

  describe("complete wizard flow", () => {
    it("completes all steps successfully", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      // Step 1: Species
      act(() => {
        result.current.setSpecies("oak");
        result.current.nextStep();
      });
      expect(result.current.currentStep).toBe(2);

      // Step 2: Height
      act(() => {
        result.current.setHeight("taller_2_story");
        result.current.nextStep();
      });
      expect(result.current.currentStep).toBe(3);

      // Step 3: Girth
      act(() => {
        result.current.setGirth("arms_wrap");
        result.current.nextStep();
      });
      expect(result.current.currentStep).toBe(4);

      // Step 4: Location
      act(() => {
        result.current.setLocation("front_yard");
        result.current.nextStep();
      });
      expect(result.current.currentStep).toBe(5);

      // Step 5: Health
      act(() => {
        result.current.setHealthCondition("good");
        result.current.nextStep();
      });
      expect(result.current.currentStep).toBe(6);

      // Step 6: Email (invalid first)
      act(() => {
        result.current.setEmail("invalid");
      });
      expect(result.current.canGoNext).toBe(false);

      // Step 6: Email (valid)
      act(() => {
        result.current.setEmail("test@example.com");
      });
      expect(result.current.canGoNext).toBe(true);

      // Complete
      act(() => {
        result.current.nextStep();
      });
      expect(result.current.isComplete).toBe(true);
    });
  });

  describe("error handling", () => {
    it("sets and clears errors", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      act(() => {
        result.current.setError("email", "Invalid email format");
      });

      expect(result.current.errors.email).toBe("Invalid email format");

      act(() => {
        result.current.clearError("email");
      });

      expect(result.current.errors.email).toBeUndefined();
    });
  });

  describe("reset", () => {
    it("resets wizard to initial state", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      // Make some changes
      act(() => {
        result.current.setSpecies("oak");
        result.current.nextStep();
        result.current.setHeight("taller_2_story");
        result.current.nextStep();
      });

      expect(result.current.currentStep).toBe(3);
      expect(result.current.currentTree.species).toBe("oak");

      // Reset
      act(() => {
        result.current.reset();
      });

      expect(result.current.currentStep).toBe(1);
      expect(result.current.currentTree.species).toBeNull();
      expect(result.current.currentTree.height).toBeNull();
      expect(result.current.isComplete).toBe(false);
    });
  });

  describe("computed values", () => {
    it("calculates progress correctly", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      // 6 total steps now
      expect(result.current.progress).toBeCloseTo(16.67, 0); // 1/6

      act(() => {
        result.current.setSpecies("oak");
        result.current.nextStep();
      });

      expect(result.current.progress).toBeCloseTo(33.33, 0); // 2/6
    });

    it("provides current step config", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      expect(result.current.currentStepConfig.id).toBe(1);
      expect(result.current.currentStepConfig.title).toBe("Tree Type");

      act(() => {
        result.current.setSpecies("oak");
        result.current.nextStep();
      });

      expect(result.current.currentStepConfig.id).toBe(2);
      expect(result.current.currentStepConfig.title).toBe("Height");
    });

    it("provides total steps", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      expect(result.current.totalSteps).toBe(6);
    });
  });
});
