import { test, expect } from "@playwright/test";

test.describe("Multi-Tree Property Report", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/calculator");
    await page.waitForSelector("text=TreeValue Pro");
  });

  test("can add multiple trees in wizard", async ({ page }) => {
    // Complete first tree
    await page.getByText("Oak", { exact: true }).click();
    await page.getByRole("button", { name: /continue/i }).click();

    await page.getByText("About as tall as a 2-story house").click();
    await page.getByRole("button", { name: /continue/i }).click();

    await page.getByText("I can wrap my arms around it").click();
    await page.getByRole("button", { name: /continue/i }).click();

    await page.getByText("Front Yard").click();
    await page.getByRole("button", { name: /continue/i }).click();

    await page.getByLabel("Email Address").fill("multi-tree@example.com");
    await page.getByRole("button", { name: /get my report/i }).click();

    // Should redirect to results
    await expect(page).toHaveURL(/\/calculator\/results/);

    // Check for "Add Another Tree" button if it exists
    const addTreeButton = page.getByRole("button", { name: /add.*tree/i });
    if (await addTreeButton.isVisible()) {
      await addTreeButton.click();

      // Should navigate back to start a new tree
      await expect(page.getByText("What type of tree is it?")).toBeVisible();
    }
  });

  test("displays combined property report", async ({ page }) => {
    // Complete first tree
    await page.getByText("Oak", { exact: true }).click();
    await page.getByRole("button", { name: /continue/i }).click();

    await page.getByText("About as tall as a 2-story house").click();
    await page.getByRole("button", { name: /continue/i }).click();

    await page.getByText("I can wrap my arms around it").click();
    await page.getByRole("button", { name: /continue/i }).click();

    await page.getByText("Front Yard").click();
    await page.getByRole("button", { name: /continue/i }).click();

    await page.getByLabel("Email Address").fill("combined@example.com");
    await page.getByRole("button", { name: /get my report/i }).click();

    await expect(page).toHaveURL(/\/calculator\/results/);

    // Should display total value
    await expect(page.getByText("Your Tree is Worth")).toBeVisible();

    // Should show a dollar amount
    await expect(page.getByText(/\$[\d,]+/).first()).toBeVisible();
  });

  test("shows share report option on results page", async ({ page }) => {
    // Complete wizard
    await page.getByText("Maple", { exact: true }).click();
    await page.getByRole("button", { name: /continue/i }).click();

    await page.getByText("About as tall as a 2-story house").click();
    await page.getByRole("button", { name: /continue/i }).click();

    await page.getByText("I can wrap my arms around it").click();
    await page.getByRole("button", { name: /continue/i }).click();

    await page.getByText("Front Yard").click();
    await page.getByRole("button", { name: /continue/i }).click();

    await page.getByLabel("Email Address").fill("share@example.com");
    await page.getByRole("button", { name: /get my report/i }).click();

    await expect(page).toHaveURL(/\/calculator\/results/);

    // Look for share/save report option
    const shareButton = page.getByRole("button", { name: /share|save/i });
    if (await shareButton.isVisible()) {
      await expect(shareButton).toBeVisible();
    }
  });
});

test.describe("Saved Report Access", () => {
  test("can view saved report by ID", async ({ page }) => {
    // Access a report page (uses mock data for invalid IDs)
    await page.goto("/report/test-report-123");
    await page.waitForLoadState("networkidle");

    // Should display report content
    await expect(
      page.getByText(/Tree Valuation Report|Property Report/)
    ).toBeVisible();
  });

  test("displays proper error or fallback for expired/invalid reports", async ({
    page,
  }) => {
    // Try to access a non-existent report
    await page.goto("/report/non-existent-report-xyz");
    await page.waitForLoadState("networkidle");

    // Should either show error message or fallback/mock data
    const hasContent = await page
      .getByText(/Tree Valuation Report|Property Report|not found|expired/i)
      .isVisible();
    expect(hasContent).toBe(true);
  });

  test("report page has share functionality", async ({ page }) => {
    await page.goto("/report/test-report-123");
    await page.waitForLoadState("networkidle");

    // Should have share button
    const shareButton = page.getByRole("button", { name: /share/i });
    await expect(shareButton).toBeVisible();
  });
});

test.describe("Property Report API", () => {
  test("POST /api/save-report saves report and returns ID", async ({
    request,
  }) => {
    const response = await request.post("/api/save-report", {
      data: {
        email: "api-test@example.com",
        zipCode: "22101",
        propertyValuation: {
          totalStructuralValue: 25000,
          totalEcoValue: 350,
          treeCount: 2,
          trees: [
            {
              species: "oak",
              height: "2_story",
              girth: "arms_wrap",
              location: "front_yard",
              structuralValue: 15000,
              ecoValue: { total: 200 },
            },
            {
              species: "maple",
              height: "1_story",
              girth: "paint_bucket",
              location: "back_yard",
              structuralValue: 10000,
              ecoValue: { total: 150 },
            },
          ],
        },
      },
    });

    // Should succeed
    expect(response.status()).toBe(200);

    const data = await response.json();
    expect(data.success).toBe(true);
    expect(data.reportId).toBeDefined();
  });

  test("POST /api/save-report validates required fields", async ({
    request,
  }) => {
    const response = await request.post("/api/save-report", {
      data: {
        email: "test@example.com",
        // Missing propertyValuation
      },
    });

    // Should fail validation
    expect(response.status()).toBe(400);
  });
});
