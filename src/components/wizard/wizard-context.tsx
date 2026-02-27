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
  TreeData,
  SpeciesCategory,
  HeightHeuristic,
  GirthHeuristic,
  LocationType,
  HealthCondition,
  PhotoUpload,
  KindwiseIdentification,
  KindwiseHealthAssessment,
} from "@/types";
import { WIZARD_STEPS } from "@/lib/constants";

// ========================================
// Types
// ========================================

interface WizardState {
  currentStep: number;
  data: WizardData;
  isComplete: boolean;
  isIdentifying: boolean;
  errors: Record<string, string>;
}

type WizardAction =
  | { type: "SET_SPECIES"; payload: SpeciesCategory }
  | { type: "SET_HEIGHT"; payload: HeightHeuristic }
  | { type: "SET_GIRTH"; payload: GirthHeuristic }
  | { type: "SET_LOCATION"; payload: LocationType }
  | { type: "SET_HEALTH_CONDITION"; payload: HealthCondition }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_ADDRESS"; payload: string }
  | { type: "SET_ZIP_CODE"; payload: string }
  | { type: "SET_PHONE"; payload: string }
  | { type: "SET_IDENTIFICATION_PHOTOS"; payload: PhotoUpload[] }
  | { type: "SET_HEALTH_PHOTOS"; payload: PhotoUpload[] }
  | { type: "SET_IDENTIFICATION_RESULT"; payload: KindwiseIdentification }
  | { type: "SET_HEALTH_ASSESSMENT"; payload: KindwiseHealthAssessment }
  | { type: "SET_CUSTOM_SPECIES"; payload: string }
  | { type: "SET_IDENTIFYING"; payload: boolean }
  | { type: "ADD_TREE" }
  | { type: "REMOVE_TREE"; payload: number }
  | { type: "SELECT_TREE"; payload: number }
  | { type: "SET_TREE_NICKNAME"; payload: string }
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "GO_TO_STEP"; payload: number }
  | { type: "SET_ERROR"; payload: { field: string; message: string } }
  | { type: "CLEAR_ERROR"; payload: string }
  | { type: "RESET" };

interface WizardContextValue extends WizardState {
  // Tree actions
  currentTree: TreeData;
  setSpecies: (species: SpeciesCategory) => void;
  setHeight: (height: HeightHeuristic) => void;
  setGirth: (girth: GirthHeuristic) => void;
  setLocation: (location: LocationType) => void;
  setHealthCondition: (condition: HealthCondition) => void;
  setIdentificationPhotos: (photos: PhotoUpload[]) => void;
  setHealthPhotos: (photos: PhotoUpload[]) => void;
  setIdentificationResult: (result: KindwiseIdentification) => void;
  setHealthAssessment: (assessment: KindwiseHealthAssessment) => void;
  setCustomSpecies: (species: string) => void;
  setTreeNickname: (nickname: string) => void;
  setIdentifying: (isIdentifying: boolean) => void;

  // Multi-tree actions
  addTree: () => void;
  removeTree: (index: number) => void;
  selectTree: (index: number) => void;

  // Global actions
  setEmail: (email: string) => void;
  setAddress: (address: string) => void;
  setZipCode: (zipCode: string) => void;
  setPhone: (phone: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  setError: (field: string, message: string) => void;
  clearError: (field: string) => void;
  reset: () => void;

  // Computed
  canGoNext: boolean;
  canGoBack: boolean;
  totalSteps: number;
  currentStepConfig: (typeof WIZARD_STEPS)[number];
  progress: number;
  treeCount: number;
}

// ========================================
// Helpers
// ========================================

function createEmptyTree(): TreeData {
  return {
    id: `tree_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
    species: null,
    height: null,
    girth: null,
    location: null,
    healthCondition: null,
    identificationPhotos: [],
    healthPhotos: [],
  };
}

// ========================================
// Initial State
// ========================================

const initialState: WizardState = {
  currentStep: 1,
  data: {
    trees: [createEmptyTree()],
    currentTreeIndex: 0,
    email: null,
    address: null,
    zipCode: null,
    phone: null,
  },
  isComplete: false,
  isIdentifying: false,
  errors: {},
};

// ========================================
// Validation
// ========================================

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateCurrentStep(state: WizardState): boolean {
  const { currentStep, data, isIdentifying } = state;
  const currentTree = data.trees[data.currentTreeIndex];

  // Don't allow advancing if identification is in progress
  if (isIdentifying) return false;

  switch (currentStep) {
    case 1: // Species
      if (currentTree.species === "other") {
        // Must have identification result or skip
        return currentTree.identificationResult !== undefined ||
               currentTree.identificationPhotos.length === 0;
      }
      return currentTree.species !== null;
    case 2: // Height
      return currentTree.height !== null;
    case 3: // Girth
      return currentTree.girth !== null;
    case 4: // Location
      return currentTree.location !== null;
    case 5: // Health
      return currentTree.healthCondition !== null;
    case 6: // Email + Address + Zip Code
      return data.email !== null && isValidEmail(data.email) &&
             data.address !== null && data.address.trim().length >= 5 &&
             data.zipCode !== null && data.zipCode.length === 5;
    default:
      return false;
  }
}

// ========================================
// Reducer
// ========================================

function wizardReducer(state: WizardState, action: WizardAction): WizardState {
  const currentTreeIndex = state.data.currentTreeIndex;

  const updateCurrentTree = (updates: Partial<TreeData>): WizardState => ({
    ...state,
    data: {
      ...state.data,
      trees: state.data.trees.map((tree, i) =>
        i === currentTreeIndex ? { ...tree, ...updates } : tree
      ),
    },
  });

  switch (action.type) {
    case "SET_SPECIES":
      return updateCurrentTree({
        species: action.payload,
        // Clear identification if switching away from "other"
        ...(action.payload !== "other" && {
          identificationPhotos: [],
          identificationResult: undefined,
          customSpecies: undefined,
        }),
      });

    case "SET_HEIGHT":
      return updateCurrentTree({ height: action.payload });

    case "SET_GIRTH":
      return updateCurrentTree({ girth: action.payload });

    case "SET_LOCATION":
      return updateCurrentTree({ location: action.payload });

    case "SET_HEALTH_CONDITION":
      return updateCurrentTree({ healthCondition: action.payload });

    case "SET_IDENTIFICATION_PHOTOS":
      return updateCurrentTree({ identificationPhotos: action.payload });

    case "SET_HEALTH_PHOTOS":
      return updateCurrentTree({ healthPhotos: action.payload });

    case "SET_IDENTIFICATION_RESULT":
      return updateCurrentTree({ identificationResult: action.payload });

    case "SET_HEALTH_ASSESSMENT":
      return updateCurrentTree({ healthAssessment: action.payload });

    case "SET_CUSTOM_SPECIES":
      return updateCurrentTree({ customSpecies: action.payload });

    case "SET_TREE_NICKNAME":
      return updateCurrentTree({ nickname: action.payload });

    case "SET_IDENTIFYING":
      return { ...state, isIdentifying: action.payload };

    case "SET_EMAIL":
      return {
        ...state,
        data: { ...state.data, email: action.payload },
      };

    case "SET_ADDRESS":
      return {
        ...state,
        data: { ...state.data, address: action.payload },
      };

    case "SET_ZIP_CODE":
      return {
        ...state,
        data: { ...state.data, zipCode: action.payload },
      };

    case "SET_PHONE":
      return {
        ...state,
        data: { ...state.data, phone: action.payload },
      };

    case "ADD_TREE":
      return {
        ...state,
        data: {
          ...state.data,
          trees: [...state.data.trees, createEmptyTree()],
          currentTreeIndex: state.data.trees.length,
        },
        currentStep: 1, // Go back to species step for new tree
      };

    case "REMOVE_TREE": {
      if (state.data.trees.length <= 1) return state;
      const newTrees = state.data.trees.filter((_, i) => i !== action.payload);
      const newIndex = Math.min(currentTreeIndex, newTrees.length - 1);
      return {
        ...state,
        data: {
          ...state.data,
          trees: newTrees,
          currentTreeIndex: newIndex,
        },
      };
    }

    case "SELECT_TREE":
      return {
        ...state,
        data: {
          ...state.data,
          currentTreeIndex: Math.max(0, Math.min(action.payload, state.data.trees.length - 1)),
        },
        currentStep: 1, // Go to species step when switching trees
      };

    case "NEXT_STEP": {
      if (!validateCurrentStep(state)) {
        return state;
      }

      if (state.currentStep === WIZARD_STEPS.length) {
        return { ...state, isComplete: true };
      }

      return { ...state, currentStep: state.currentStep + 1 };
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

    case "CLEAR_ERROR": {
      const { [action.payload]: _, ...rest } = state.errors;
      return { ...state, errors: rest };
    }

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

  // Tree actions
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

  const setHealthCondition = useCallback((condition: HealthCondition) => {
    dispatch({ type: "SET_HEALTH_CONDITION", payload: condition });
  }, []);

  const setIdentificationPhotos = useCallback((photos: PhotoUpload[]) => {
    dispatch({ type: "SET_IDENTIFICATION_PHOTOS", payload: photos });
  }, []);

  const setHealthPhotos = useCallback((photos: PhotoUpload[]) => {
    dispatch({ type: "SET_HEALTH_PHOTOS", payload: photos });
  }, []);

  const setIdentificationResult = useCallback((result: KindwiseIdentification) => {
    dispatch({ type: "SET_IDENTIFICATION_RESULT", payload: result });
  }, []);

  const setHealthAssessment = useCallback((assessment: KindwiseHealthAssessment) => {
    dispatch({ type: "SET_HEALTH_ASSESSMENT", payload: assessment });
  }, []);

  const setCustomSpecies = useCallback((species: string) => {
    dispatch({ type: "SET_CUSTOM_SPECIES", payload: species });
  }, []);

  const setTreeNickname = useCallback((nickname: string) => {
    dispatch({ type: "SET_TREE_NICKNAME", payload: nickname });
  }, []);

  const setIdentifying = useCallback((isIdentifying: boolean) => {
    dispatch({ type: "SET_IDENTIFYING", payload: isIdentifying });
  }, []);

  // Multi-tree actions
  const addTree = useCallback(() => {
    dispatch({ type: "ADD_TREE" });
  }, []);

  const removeTree = useCallback((index: number) => {
    dispatch({ type: "REMOVE_TREE", payload: index });
  }, []);

  const selectTree = useCallback((index: number) => {
    dispatch({ type: "SELECT_TREE", payload: index });
  }, []);

  // Global actions
  const setEmail = useCallback((email: string) => {
    dispatch({ type: "SET_EMAIL", payload: email });
  }, []);

  const setAddress = useCallback((address: string) => {
    dispatch({ type: "SET_ADDRESS", payload: address });
  }, []);

  const setZipCode = useCallback((zipCode: string) => {
    dispatch({ type: "SET_ZIP_CODE", payload: zipCode });
  }, []);

  const setPhone = useCallback((phone: string) => {
    dispatch({ type: "SET_PHONE", payload: phone });
  }, []);

  const nextStep = useCallback(() => {
    dispatch({ type: "NEXT_STEP" });
  }, []);

  const prevStep = useCallback(() => {
    dispatch({ type: "PREV_STEP" });
  }, []);

  const goToStep = useCallback((step: number) => {
    dispatch({ type: "GO_TO_STEP", payload: step });
  }, []);

  const setError = useCallback((field: string, message: string) => {
    dispatch({ type: "SET_ERROR", payload: { field, message } });
  }, []);

  const clearError = useCallback((field: string) => {
    dispatch({ type: "CLEAR_ERROR", payload: field });
  }, []);

  const reset = useCallback(() => {
    dispatch({ type: "RESET" });
  }, []);

  // Computed values
  const currentTree = state.data.trees[state.data.currentTreeIndex];
  const canGoNext = useMemo(() => validateCurrentStep(state), [state]);
  const canGoBack = state.currentStep > 1;
  const totalSteps = WIZARD_STEPS.length;
  const currentStepConfig = WIZARD_STEPS[state.currentStep - 1];
  const progress = (state.currentStep / totalSteps) * 100;
  const treeCount = state.data.trees.length;

  const value: WizardContextValue = useMemo(
    () => ({
      ...state,
      currentTree,
      setSpecies,
      setHeight,
      setGirth,
      setLocation,
      setHealthCondition,
      setIdentificationPhotos,
      setHealthPhotos,
      setIdentificationResult,
      setHealthAssessment,
      setCustomSpecies,
      setTreeNickname,
      setIdentifying,
      addTree,
      removeTree,
      selectTree,
      setEmail,
      setAddress,
      setZipCode,
      setPhone,
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
      treeCount,
    }),
    [
      state,
      currentTree,
      setSpecies,
      setHeight,
      setGirth,
      setLocation,
      setHealthCondition,
      setIdentificationPhotos,
      setHealthPhotos,
      setIdentificationResult,
      setHealthAssessment,
      setCustomSpecies,
      setTreeNickname,
      setIdentifying,
      addTree,
      removeTree,
      selectTree,
      setEmail,
      setAddress,
      setZipCode,
      setPhone,
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
      treeCount,
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
export { validateCurrentStep, isValidEmail, initialState, createEmptyTree };
