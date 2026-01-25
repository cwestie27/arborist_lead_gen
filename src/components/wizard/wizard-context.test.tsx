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
      expect(result.current.data.species).toBeNull();
      expect(result.current.data.height).toBeNull();
      expect(result.current.data.girth).toBeNull();
      expect(result.current.data.location).toBeNull();
      expect(result.current.data.email).toBeNull();
      expect(result.current.isComplete).toBe(false);
    });

    it("accepts initial data", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper({ species: "oak", zipCode: "22101" }),
      });

      expect(result.current.data.species).toBe("oak");
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

      expect(result.current.currentStep).toBe(5); // Max step

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

      expect(result.current.data.species).toBe("maple");
    });

    it("sets height correctly", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      act(() => {
        result.current.setHeight("2_story");
      });

      expect(result.current.data.height).toBe("2_story");
    });

    it("sets girth correctly", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      act(() => {
        result.current.setGirth("arms_wrap");
      });

      expect(result.current.data.girth).toBe("arms_wrap");
    });

    it("sets location correctly", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      act(() => {
        result.current.setLocation("front_yard");
      });

      expect(result.current.data.location).toBe("front_yard");
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

      // Step 5: Email (invalid first)
      act(() => {
        result.current.setEmail("invalid");
      });
      expect(result.current.canGoNext).toBe(false);

      // Step 5: Email (valid)
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

    it("clears error when value is set", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      act(() => {
        result.current.setError("species", "Please select a species");
      });

      expect(result.current.errors.species).toBe("Please select a species");

      act(() => {
        result.current.setSpecies("oak");
      });

      expect(result.current.errors.species).toBeUndefined();
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
      expect(result.current.data.species).toBe("oak");

      // Reset
      act(() => {
        result.current.reset();
      });

      expect(result.current.currentStep).toBe(1);
      expect(result.current.data.species).toBeNull();
      expect(result.current.data.height).toBeNull();
      expect(result.current.isComplete).toBe(false);
    });
  });

  describe("computed values", () => {
    it("calculates progress correctly", () => {
      const { result } = renderHook(() => useWizard(), {
        wrapper: createWrapper(),
      });

      expect(result.current.progress).toBe(20); // 1/5 = 20%

      act(() => {
        result.current.setSpecies("oak");
        result.current.nextStep();
      });

      expect(result.current.progress).toBe(40); // 2/5 = 40%
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

      expect(result.current.totalSteps).toBe(5);
    });
  });
});
