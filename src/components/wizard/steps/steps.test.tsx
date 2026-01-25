import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { WizardProvider } from "../wizard-context";
import { SpeciesStep } from "./species-step";
import { HeightStep } from "./height-step";
import { GirthStep } from "./girth-step";
import { LocationStep } from "./location-step";
import { EmailStep } from "./email-step";
import type { ReactNode } from "react";

// Wrapper for testing steps
function createWrapper(initialData = {}) {
  return function Wrapper({ children }: { children: ReactNode }) {
    return (
      <WizardProvider initialData={initialData}>{children}</WizardProvider>
    );
  };
}

describe("Wizard Steps", () => {
  describe("SpeciesStep", () => {
    it("renders all species options", () => {
      render(<SpeciesStep />, { wrapper: createWrapper() });

      expect(screen.getByText("Oak")).toBeInTheDocument();
      expect(screen.getByText("Maple")).toBeInTheDocument();
      expect(screen.getByText("Pine / Evergreen")).toBeInTheDocument();
      expect(screen.getByText("Fruit Tree")).toBeInTheDocument();
      expect(screen.getByText("Other / Not Sure")).toBeInTheDocument();
    });

    it("renders the heading", () => {
      render(<SpeciesStep />, { wrapper: createWrapper() });

      expect(
        screen.getByText("What type of tree is it?")
      ).toBeInTheDocument();
    });

    it("allows selecting a species", async () => {
      const user = userEvent.setup();
      render(<SpeciesStep />, { wrapper: createWrapper() });

      const oakButton = screen.getByRole("button", { name: /select oak/i });
      await user.click(oakButton);

      // Check that the button now has selected styling (check aria or visual indicator)
      expect(oakButton).toHaveClass("border-forest-700");
    });

    it("shows pre-selected species from initial data", () => {
      render(<SpeciesStep />, {
        wrapper: createWrapper({ species: "maple" }),
      });

      const mapleButton = screen.getByRole("button", { name: /select maple/i });
      expect(mapleButton).toHaveClass("border-forest-700");
    });
  });

  describe("HeightStep", () => {
    it("renders all height options", () => {
      render(<HeightStep />, { wrapper: createWrapper() });

      expect(
        screen.getByText("Shorter than a 1-story house")
      ).toBeInTheDocument();
      expect(
        screen.getByText("About as tall as a 2-story house")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Taller than a 2-story house")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Towering / Utility pole height")
      ).toBeInTheDocument();
    });

    it("renders the heading", () => {
      render(<HeightStep />, { wrapper: createWrapper() });

      expect(screen.getByText("How tall is your tree?")).toBeInTheDocument();
    });

    it("allows selecting a height", async () => {
      const user = userEvent.setup();
      render(<HeightStep />, { wrapper: createWrapper() });

      const button = screen.getByRole("button", {
        name: /select about as tall as a 2-story house/i,
      });
      await user.click(button);

      expect(button).toHaveClass("border-forest-700");
    });
  });

  describe("GirthStep", () => {
    it("renders all girth options", () => {
      render(<GirthStep />, { wrapper: createWrapper() });

      expect(
        screen.getByText("Fingers can wrap around it")
      ).toBeInTheDocument();
      expect(screen.getByText("Size of a paint bucket")).toBeInTheDocument();
      expect(
        screen.getByText("I can wrap my arms around it")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Two people needed to hug it")
      ).toBeInTheDocument();
    });

    it("renders the heading", () => {
      render(<GirthStep />, { wrapper: createWrapper() });

      expect(screen.getByText("How thick is the trunk?")).toBeInTheDocument();
    });

    it("allows selecting a girth", async () => {
      const user = userEvent.setup();
      render(<GirthStep />, { wrapper: createWrapper() });

      const button = screen.getByRole("button", {
        name: /select i can wrap my arms around it/i,
      });
      await user.click(button);

      expect(button).toHaveClass("border-forest-700");
    });
  });

  describe("LocationStep", () => {
    it("renders all location options", () => {
      render(<LocationStep />, { wrapper: createWrapper() });

      expect(screen.getByText("Front Yard")).toBeInTheDocument();
      expect(screen.getByText("Back Yard")).toBeInTheDocument();
      expect(screen.getByText("Side Yard")).toBeInTheDocument();
    });

    it("renders the heading", () => {
      render(<LocationStep />, { wrapper: createWrapper() });

      expect(
        screen.getByText("Where is your tree located?")
      ).toBeInTheDocument();
    });

    it("allows selecting a location", async () => {
      const user = userEvent.setup();
      render(<LocationStep />, { wrapper: createWrapper() });

      const button = screen.getByRole("button", {
        name: /select front yard/i,
      });
      await user.click(button);

      expect(button).toHaveClass("border-forest-700");
    });
  });

  describe("EmailStep", () => {
    it("renders email input", () => {
      render(<EmailStep />, { wrapper: createWrapper() });

      expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    });

    it("renders zip code input", () => {
      render(<EmailStep />, { wrapper: createWrapper() });

      expect(screen.getByLabelText(/zip code/i)).toBeInTheDocument();
    });

    it("renders the heading", () => {
      render(<EmailStep />, { wrapper: createWrapper() });

      expect(
        screen.getByText("Get Your Free Tree Valuation Report")
      ).toBeInTheDocument();
    });

    it("validates email format", async () => {
      const user = userEvent.setup();
      render(<EmailStep />, { wrapper: createWrapper() });

      const emailInput = screen.getByLabelText(/email address/i);

      await user.type(emailInput, "invalid-email");
      await user.tab(); // Trigger blur

      expect(
        screen.getByText("Please enter a valid email address")
      ).toBeInTheDocument();
    });

    it("accepts valid email", async () => {
      const user = userEvent.setup();
      render(<EmailStep />, { wrapper: createWrapper() });

      const emailInput = screen.getByLabelText(/email address/i);

      await user.type(emailInput, "test@example.com");
      await user.tab();

      expect(
        screen.queryByText("Please enter a valid email address")
      ).not.toBeInTheDocument();
    });

    it("restricts zip code to 5 digits", async () => {
      const user = userEvent.setup();
      render(<EmailStep />, { wrapper: createWrapper() });

      const zipInput = screen.getByLabelText(/zip code/i);

      await user.type(zipInput, "123456789");

      expect(zipInput).toHaveValue("12345");
    });

    it("strips non-numeric characters from zip code", async () => {
      const user = userEvent.setup();
      render(<EmailStep />, { wrapper: createWrapper() });

      const zipInput = screen.getByLabelText(/zip code/i);

      await user.type(zipInput, "12abc34");

      expect(zipInput).toHaveValue("1234");
    });

    it("shows trust signals", () => {
      render(<EmailStep />, { wrapper: createWrapper() });

      expect(screen.getByText("Your data is secure")).toBeInTheDocument();
      expect(screen.getByText("No spam, ever")).toBeInTheDocument();
    });

    it("shows value preview", () => {
      render(<EmailStep />, { wrapper: createWrapper() });

      expect(
        screen.getByText("Your Estimated Tree Value")
      ).toBeInTheDocument();
      expect(screen.getByText("$5,000 - $25,000")).toBeInTheDocument();
    });
  });
});
