import { ReactElement, ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

/**
 * Custom render function that includes providers
 */
interface CustomRenderOptions extends Omit<RenderOptions, "wrapper"> {
  initialRouterState?: {
    pathname?: string;
    searchParams?: Record<string, string>;
  };
}

function AllProviders({ children }: { children: ReactNode }) {
  // Add providers here as needed (WizardProvider, etc.)
  return <>{children}</>;
}

function customRender(ui: ReactElement, options?: CustomRenderOptions) {
  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: AllProviders, ...options }),
  };
}

// Re-export everything from testing-library
export * from "@testing-library/react";
export { customRender as render, userEvent };
