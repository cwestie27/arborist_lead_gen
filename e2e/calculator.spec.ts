import { test, expect } from "@playwright/test";

test.describe("Tree Value Calculator", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/calculator");
    // Wait for the wizard to load
    await page.waitForSelector("text=TreeValue Pro");
  });

  test("displays the wizard with species selection step", async ({ page }) => {
    // Should show the species step
    await expect(page.getByText("What type of tree is it?")).toBeVisible();

    // Should show species options
    await expect(page.getByText("Oak")).toBeVisible();
    await expect(page.getByText("Maple")).toBeVisible();
    await expect(page.getByText("Pine / Evergreen")).toBeVisible();
  });

  test("completes full wizard flow and shows results", async ({ page }) => {
    // Step 1: Select species
    await expect(page.getByText("What type of tree is it?")).toBeVisible();
    await page.getByText("Oak", { exact: true }).click();
    await page.getByRole("button", { name: /continue/i }).click();

    // Step 2: Select height
    await expect(page.getByText("How tall is your tree?")).toBeVisible();
    await page.getByText("About as tall as a 2-story house").click();
    await page.getByRole("button", { name: /continue/i }).click();

    // Step 3: Select girth
    await expect(page.getByText("How thick is the trunk?")).toBeVisible();
    await page.getByText("I can wrap my arms around it").click();
    await page.getByRole("button", { name: /continue/i }).click();

    // Step 4: Select location
    await expect(
      page.getByText("Where is your tree located?")
    ).toBeVisible();
    await page.getByText("Front Yard").click();
    await page.getByRole("button", { name: /continue/i }).click();

    // Step 5: Enter email and get report
    await expect(
      page.getByText("Get Your Free Tree Valuation Report")
    ).toBeVisible();
    await page.getByLabel("Email Address").fill("test@example.com");
    await page.getByRole("button", { name: /get my report/i }).click();

    // Should redirect to results page
    await expect(page).toHaveURL(/\/calculator\/results/);

    // Results page should show value
    await expect(page.getByText("Your Tree is Worth")).toBeVisible();
    await expect(page.getByText(/\$[\d,]+/).first()).toBeVisible();
  });

  test("allows going back through steps", async ({ page }) => {
    // Step 1: Select species
    await page.getByText("Oak", { exact: true }).click();
    await page.getByRole("button", { name: /continue/i }).click();

    // Step 2: Should be on height
    await expect(page.getByText("How tall is your tree?")).toBeVisible();

    // Go back
    await page.getByRole("button", { name: /back/i }).click();

    // Should be back on species
    await expect(page.getByText("What type of tree is it?")).toBeVisible();
  });

  test("validates species selection before proceeding", async ({ page }) => {
    // Continue button should be disabled when no selection
    const continueButton = page.getByRole("button", { name: /continue/i });
    await expect(continueButton).toBeDisabled();

    // Select a species
    await page.getByText("Oak", { exact: true }).click();

    // Now button should be enabled
    await expect(continueButton).toBeEnabled();
  });

  test("shows progress indicator", async ({ page }) => {
    // Should show step 1 of 5 (use first() since it appears twice)
    await expect(page.getByText("Step 1 of 5").first()).toBeVisible();

    // Select and proceed
    await page.getByText("Oak", { exact: true }).click();
    await page.getByRole("button", { name: /continue/i }).click();

    // Should show step 2 of 5
    await expect(page.getByText("Step 2 of 5").first()).toBeVisible();
  });

  test("calculates different values for different inputs", async ({ page }) => {
    // Complete wizard with small tree
    await page.getByText("Oak", { exact: true }).click();
    await page.getByRole("button", { name: /continue/i }).click();

    await page.getByText("Shorter than a 1-story house").click();
    await page.getByRole("button", { name: /continue/i }).click();

    await page.getByText("Fingers can wrap around it").click();
    await page.getByRole("button", { name: /continue/i }).click();

    await page.getByText("Front Yard").click();
    await page.getByRole("button", { name: /continue/i }).click();

    await page.getByLabel("Email Address").fill("small-tree@example.com");
    await page.getByRole("button", { name: /get my report/i }).click();

    await expect(page).toHaveURL(/\/calculator\/results/);

    // Get the value displayed
    const smallTreeValue = await page
      .locator(".font-mono")
      .first()
      .textContent();

    // Go back and calculate for larger tree
    await page.goto("/calculator");

    await page.getByText("Oak", { exact: true }).click();
    await page.getByRole("button", { name: /continue/i }).click();

    await page.getByText("Towering / Utility pole height").click();
    await page.getByRole("button", { name: /continue/i }).click();

    await page.getByText("Two people needed to hug it").click();
    await page.getByRole("button", { name: /continue/i }).click();

    await page.getByText("Front Yard").click();
    await page.getByRole("button", { name: /continue/i }).click();

    await page.getByLabel("Email Address").fill("large-tree@example.com");
    await page.getByRole("button", { name: /get my report/i }).click();

    await expect(page).toHaveURL(/\/calculator\/results/);

    const largeTreeValue = await page
      .locator(".font-mono")
      .first()
      .textContent();

    // Parse values and compare
    const smallValue = parseInt(smallTreeValue?.replace(/[^0-9]/g, "") || "0");
    const largeValue = parseInt(largeTreeValue?.replace(/[^0-9]/g, "") || "0");

    expect(largeValue).toBeGreaterThan(smallValue);
  });
});

test.describe("Results Page", () => {
  test("redirects to calculator if no data", async ({ page }) => {
    // Try to access results directly
    await page.goto("/calculator/results");

    // Should redirect to calculator
    await expect(page).toHaveURL(/\/calculator$/);
  });

  test("displays ecosystem benefits breakdown", async ({ page }) => {
    // Complete wizard first
    await page.goto("/calculator");
    await page.waitForSelector("text=TreeValue Pro");

    await page.getByText("Oak", { exact: true }).click();
    await page.getByRole("button", { name: /continue/i }).click();
    await page.getByText("About as tall as a 2-story house").click();
    await page.getByRole("button", { name: /continue/i }).click();
    await page.getByText("I can wrap my arms around it").click();
    await page.getByRole("button", { name: /continue/i }).click();
    await page.getByText("Front Yard").click();
    await page.getByRole("button", { name: /continue/i }).click();
    await page.getByLabel("Email Address").fill("eco-test@example.com");
    await page.getByRole("button", { name: /get my report/i }).click();

    await expect(page).toHaveURL(/\/calculator\/results/);

    // Check ecosystem benefits are displayed
    await expect(page.getByText("Annual Ecosystem Benefits")).toBeVisible();
    await expect(page.getByText("Carbon Sequestration")).toBeVisible();
    await expect(page.getByText("Stormwater Management")).toBeVisible();
    await expect(page.getByText("Energy Savings")).toBeVisible();
  });

  test("shows CTA buttons for arborist services", async ({ page }) => {
    // Complete wizard first
    await page.goto("/calculator");
    await page.waitForSelector("text=TreeValue Pro");

    await page.getByText("Oak", { exact: true }).click();
    await page.getByRole("button", { name: /continue/i }).click();
    await page.getByText("About as tall as a 2-story house").click();
    await page.getByRole("button", { name: /continue/i }).click();
    await page.getByText("I can wrap my arms around it").click();
    await page.getByRole("button", { name: /continue/i }).click();
    await page.getByText("Front Yard").click();
    await page.getByRole("button", { name: /continue/i }).click();
    await page.getByLabel("Email Address").fill("cta-test@example.com");
    await page.getByRole("button", { name: /get my report/i }).click();

    await expect(page).toHaveURL(/\/calculator\/results/);

    // Check CTA buttons
    await expect(
      page.getByRole("link", { name: /find.*arborist/i })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /get.*quote/i })
    ).toBeVisible();
  });
});

test.describe("Shareable Report Page", () => {
  test("displays report with mock data", async ({ page }) => {
    await page.goto("/report/test-tree-123");

    // Wait for page to load
    await page.waitForLoadState("networkidle");

    // Should show tree valuation report
    await expect(page.getByText("Tree Valuation Report")).toBeVisible();
    await expect(page.getByText(/is Worth/)).toBeVisible();

    // Should show a dollar value
    await expect(page.getByText(/\$[\d,]+/).first()).toBeVisible();
  });

  test("has share button", async ({ page }) => {
    await page.goto("/report/test-tree-123");
    await page.waitForLoadState("networkidle");

    await expect(
      page.getByRole("button", { name: /share/i })
    ).toBeVisible();
  });

  test("has CTA to calculate own tree", async ({ page }) => {
    await page.goto("/report/test-tree-123");
    await page.waitForLoadState("networkidle");

    const ctaLink = page.getByRole("link", {
      name: /calculate.*tree.*value/i,
    });
    await expect(ctaLink).toBeVisible();

    // Click and verify navigation
    await ctaLink.click();
    await expect(page).toHaveURL(/\/calculator/);
  });
});

test.describe("Homepage", () => {
  test("has CTA to start calculator", async ({ page }) => {
    await page.goto("/");

    // Look for CTA to calculator
    const ctaLink = page.getByRole("link", { name: /calculate my tree/i });
    await expect(ctaLink).toBeVisible();

    // Click and verify navigation
    await ctaLink.click();
    await expect(page).toHaveURL(/\/calculator/);
  });
});

test.describe("API Routes", () => {
  test("POST /api/valuate returns valuation", async ({ request }) => {
    const response = await request.post("/api/valuate", {
      data: {
        species: "oak",
        height: "taller_2_story",
        girth: "arms_wrap",
      },
    });

    expect(response.status()).toBe(200);

    const data = await response.json();
    expect(data.success).toBe(true);
    expect(data.valuation).toBeDefined();
    expect(data.valuation.structuralValue).toBeGreaterThan(0);
  });

  test("POST /api/valuate validates required fields", async ({ request }) => {
    const response = await request.post("/api/valuate", {
      data: {
        species: "oak",
        // Missing height and girth
      },
    });

    expect(response.status()).toBe(400);

    const data = await response.json();
    expect(data.error).toBe("Validation failed");
    expect(data.errors).toBeDefined();
  });

  test("GET /api/valuate returns method not allowed", async ({ request }) => {
    const response = await request.get("/api/valuate");
    expect(response.status()).toBe(405);
  });

  test("GET /api/redirect without target redirects to fallback", async ({
    request,
  }) => {
    // Without target, should redirect to fallback (arborist)
    const response = await request.get("/api/redirect", { maxRedirects: 0 });
    expect(response.status()).toBe(307);
  });

  test("GET /api/redirect with valid target returns redirect", async ({
    request,
  }) => {
    const response = await request.get(
      "/api/redirect?target=arborist&tree_id=test123",
      { maxRedirects: 0 }
    );

    // Should redirect (307) to partner URL
    expect(response.status()).toBe(307);
  });
});
