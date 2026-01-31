import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Accessibility", () => {
  test("home page has no critical accessibility violations", async ({ page }) => {
    await page.goto("/");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    // Filter for critical and serious violations only
    const criticalViolations = accessibilityScanResults.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );

    // Log all violations for debugging
    if (criticalViolations.length > 0) {
      console.log("Critical/Serious accessibility violations:");
      criticalViolations.forEach((v) => {
        console.log(`- ${v.id}: ${v.description} (${v.impact})`);
        v.nodes.forEach((n) => {
          console.log(`  Target: ${n.target}`);
        });
      });
    }

    expect(criticalViolations).toHaveLength(0);
  });

  test("calculator page has no critical accessibility violations", async ({ page }) => {
    await page.goto("/calculator");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    const criticalViolations = accessibilityScanResults.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );

    if (criticalViolations.length > 0) {
      console.log("Critical/Serious accessibility violations on calculator:");
      criticalViolations.forEach((v) => {
        console.log(`- ${v.id}: ${v.description} (${v.impact})`);
      });
    }

    expect(criticalViolations).toHaveLength(0);
  });

  test("privacy page has no critical accessibility violations", async ({ page }) => {
    await page.goto("/privacy");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    const criticalViolations = accessibilityScanResults.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );

    expect(criticalViolations).toHaveLength(0);
  });

  test("terms page has no critical accessibility violations", async ({ page }) => {
    await page.goto("/terms");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    const criticalViolations = accessibilityScanResults.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );

    expect(criticalViolations).toHaveLength(0);
  });

  test("login page has no critical accessibility violations", async ({ page }) => {
    await page.goto("/auth/login");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    const criticalViolations = accessibilityScanResults.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );

    expect(criticalViolations).toHaveLength(0);
  });

  test.describe("Keyboard Navigation", () => {
    test("home page CTA buttons are keyboard accessible", async ({ page }) => {
      await page.goto("/");

      // Tab to the first CTA button
      await page.keyboard.press("Tab");
      await page.keyboard.press("Tab"); // May need multiple tabs

      // Check that a button is focused
      const focusedElement = await page.evaluate(() => {
        const el = document.activeElement;
        return el ? el.tagName.toLowerCase() : null;
      });

      // Should be able to focus interactive elements
      expect(["a", "button", "input"]).toContain(focusedElement);
    });

    test("calculator wizard steps are keyboard navigable", async ({ page }) => {
      await page.goto("/calculator");

      // Wait for the wizard to load
      await page.waitForSelector("h2");

      // Tab through the page
      await page.keyboard.press("Tab");

      const focusedElement = await page.evaluate(() => {
        const el = document.activeElement;
        return el ? el.tagName.toLowerCase() : null;
      });

      expect(focusedElement).not.toBeNull();
    });
  });

  test.describe("Color Contrast", () => {
    test("text has sufficient color contrast", async ({ page }) => {
      await page.goto("/");

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(["wcag2aa"])
        .analyze();

      const contrastViolations = accessibilityScanResults.violations.filter(
        (v) => v.id === "color-contrast"
      );

      // Log any contrast issues
      if (contrastViolations.length > 0) {
        console.log("Color contrast issues:");
        contrastViolations.forEach((v) => {
          v.nodes.forEach((n) => {
            console.log(`  - ${n.target}: ${n.failureSummary}`);
          });
        });
      }

      // We want 0 contrast violations
      expect(contrastViolations).toHaveLength(0);
    });
  });
});
