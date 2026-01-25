"use client";

import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useMemo,
  ReactNode,
} from "react";
import type {
  WizardData,
  SpeciesCategory,
  HeightHeuristic,
  GirthHeuristic,
  LocationType,
} from "@/types";
import { WIZARD_STEPS } from "@/lib/constants";

// ========================================
// Types
// ========================================

interface WizardState {
  currentStep: number;
  data: WizardData;
  isComplete: boolean;
  errors: Partial<Record<keyof WizardData, string>>;
}

type WizardAction =
  | { type: "SET_SPECIES"; payload: SpeciesCategory }
  | { type: "SET_HEIGHT"; payload: HeightHeuristic }
  | { type: "SET_GIRTH"; payload: GirthHeuristic }
  | { type: "SET_LOCATION"; payload: LocationType }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_ZIP_CODE"; payload: string }
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "GO_TO_STEP"; payload: number }
  | { type: "SET_ERROR"; payload: { field: keyof WizardData; message: string } }
  | { type: "CLEAR_ERROR"; payload: keyof WizardData }
  | { type: "RESET" };

interface WizardContextValue extends WizardState {
  // Actions
  setSpecies: (species: SpeciesCategory) => void;
  setHeight: (height: HeightHeuristic) => void;
  setGirth: (girth: GirthHeuristic) => void;
  setLocation: (location: LocationType) => void;
  setEmail: (email: string) => void;
  setZipCode: (zipCode: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  setError: (field: keyof WizardData, message: string) => void;
  clearError: (field: keyof WizardData) => void;
  reset: () => void;

  // Computed
  canGoNext: boolean;
  canGoBack: boolean;
  totalSteps: number;
  currentStepConfig: (typeof WIZARD_STEPS)[number];
  progress: number;
}

// ========================================
// Initial State
// ========================================

const initialState: WizardState = {
  currentStep: 1,
  data: {
    species: null,
    height: null,
    girth: null,
    location: null,
    email: null,
    zipCode: null,
  },
  isComplete: false,
  errors: {},
};

// ========================================
// Validation (defined before reducer since reducer uses these)
// ========================================

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateCurrentStep(state: WizardState): boolean {
  const { currentStep, data } = state;

  switch (currentStep) {
    case 1:
      return data.species !== null;
    case 2:
      return data.height !== null;
    case 3:
      return data.girth !== null;
    case 4:
      return data.location !== null;
    case 5:
      return data.email !== null && isValidEmail(data.email);
    default:
      return false;
  }
}

// ========================================
// Reducer
// ========================================

function wizardReducer(state: WizardState, action: WizardAction): WizardState {
  switch (action.type) {
    case "SET_SPECIES":
      return {
        ...state,
        data: { ...state.data, species: action.payload },
        errors: { ...state.errors, species: undefined },
      };

    case "SET_HEIGHT":
      return {
        ...state,
        data: { ...state.data, height: action.payload },
        errors: { ...state.errors, height: undefined },
      };

    case "SET_GIRTH":
      return {
        ...state,
        data: { ...state.data, girth: action.payload },
        errors: { ...state.errors, girth: undefined },
      };

    case "SET_LOCATION":
      return {
        ...state,
        data: { ...state.data, location: action.payload },
        errors: { ...state.errors, location: undefined },
      };

    case "SET_EMAIL":
      return {
        ...state,
        data: { ...state.data, email: action.payload },
        errors: { ...state.errors, email: undefined },
      };

    case "SET_ZIP_CODE":
      return {
        ...state,
        data: { ...state.data, zipCode: action.payload },
        errors: { ...state.errors, zipCode: undefined },
      };

    case "NEXT_STEP": {
      // Validate current step before advancing
      if (!validateCurrentStep(state)) {
        return state; // Don't advance if validation fails
      }

      // If already on last step and valid, mark as complete
      if (state.currentStep === WIZARD_STEPS.length) {
        return {
          ...state,
          isComplete: true,
        };
      }

      // Otherwise advance to next step
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    }

    case "PREV_STEP":
      return {
        ...state,
        currentStep: Math.max(state.currentStep - 1, 1),
      };

    case "GO_TO_STEP":
      return {
        ...state,
        currentStep: Math.max(1, Math.min(action.payload, WIZARD_STEPS.length)),
      };

    case "SET_ERROR":
      return {
        ...state,
        errors: { ...state.errors, [action.payload.field]: action.payload.message },
      };

    case "CLEAR_ERROR":
      return {
        ...state,
        errors: { ...state.errors, [action.payload]: undefined },
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

// ========================================
// Context
// ========================================

const WizardContext = createContext<WizardContextValue | null>(null);

// ========================================
// Provider
// ========================================

interface WizardProviderProps {
  children: ReactNode;
  initialData?: Partial<WizardData>;
}

export function WizardProvider({ children, initialData }: WizardProviderProps) {
  const [state, dispatch] = useReducer(wizardReducer, {
    ...initialState,
    data: { ...initialState.data, ...initialData },
  });

  // Actions
  const setSpecies = useCallback((species: SpeciesCategory) => {
    dispatch({ type: "SET_SPECIES", payload: species });
  }, []);

  const setHeight = useCallback((height: HeightHeuristic) => {
    dispatch({ type: "SET_HEIGHT", payload: height });
  }, []);

  const setGirth = useCallback((girth: GirthHeuristic) => {
    dispatch({ type: "SET_GIRTH", payload: girth });
  }, []);

  const setLocation = useCallback((location: LocationType) => {
    dispatch({ type: "SET_LOCATION", payload: location });
  }, []);

  const setEmail = useCallback((email: string) => {
    dispatch({ type: "SET_EMAIL", payload: email });
  }, []);

  const setZipCode = useCallback((zipCode: string) => {
    dispatch({ type: "SET_ZIP_CODE", payload: zipCode });
  }, []);

  const nextStep = useCallback(() => {
    // Validation happens inside the reducer to ensure it uses current state
    dispatch({ type: "NEXT_STEP" });
  }, []);

  const prevStep = useCallback(() => {
    dispatch({ type: "PREV_STEP" });
  }, []);

  const goToStep = useCallback((step: number) => {
    dispatch({ type: "GO_TO_STEP", payload: step });
  }, []);

  const setError = useCallback((field: keyof WizardData, message: string) => {
    dispatch({ type: "SET_ERROR", payload: { field, message } });
  }, []);

  const clearError = useCallback((field: keyof WizardData) => {
    dispatch({ type: "CLEAR_ERROR", payload: field });
  }, []);

  const reset = useCallback(() => {
    dispatch({ type: "RESET" });
  }, []);

  // Computed values
  const canGoNext = useMemo(() => validateCurrentStep(state), [state]);
  const canGoBack = state.currentStep > 1;
  const totalSteps = WIZARD_STEPS.length;
  const currentStepConfig = WIZARD_STEPS[state.currentStep - 1];
  const progress = (state.currentStep / totalSteps) * 100;

  const value: WizardContextValue = useMemo(
    () => ({
      ...state,
      setSpecies,
      setHeight,
      setGirth,
      setLocation,
      setEmail,
      setZipCode,
      nextStep,
      prevStep,
      goToStep,
      setError,
      clearError,
      reset,
      canGoNext,
      canGoBack,
      totalSteps,
      currentStepConfig,
      progress,
    }),
    [
      state,
      setSpecies,
      setHeight,
      setGirth,
      setLocation,
      setEmail,
      setZipCode,
      nextStep,
      prevStep,
      goToStep,
      setError,
      clearError,
      reset,
      canGoNext,
      canGoBack,
      totalSteps,
      currentStepConfig,
      progress,
    ]
  );

  return (
    <WizardContext.Provider value={value}>{children}</WizardContext.Provider>
  );
}

// ========================================
// Hook
// ========================================

export function useWizard(): WizardContextValue {
  const context = useContext(WizardContext);

  if (!context) {
    throw new Error("useWizard must be used within a WizardProvider");
  }

  return context;
}

// Export for testing
export { validateCurrentStep, isValidEmail, initialState };
