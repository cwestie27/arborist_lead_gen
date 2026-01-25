import { describe, it, expect, vi, beforeEach } from "vitest";
import { NextRequest } from "next/server";
import { POST, GET } from "./route";

// Helper to create mock request
function createMockRequest(body: unknown): NextRequest {
  return new NextRequest("http://localhost:3000/api/valuate", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

describe("POST /api/valuate", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("successful requests", () => {
    it("calculates value for valid inputs", async () => {
      const request = createMockRequest({
        species: "oak",
        height: "taller_2_story",
        girth: "arms_wrap",
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.valuation).toBeDefined();
      expect(data.valuation.structuralValue).toBeGreaterThan(0);
      expect(data.valuation.ecoValue).toBeDefined();
      expect(data.valuation.totalValue).toBeGreaterThan(0);
    });

    it("includes regional pricing when zip code provided", async () => {
      const caRequest = createMockRequest({
        species: "oak",
        height: "taller_2_story",
        girth: "arms_wrap",
        zipCode: "90210",
      });

      const ruralRequest = createMockRequest({
        species: "oak",
        height: "taller_2_story",
        girth: "arms_wrap",
        zipCode: "99999",
      });

      const caResponse = await POST(caRequest);
      const ruralResponse = await POST(ruralRequest);

      const caData = await caResponse.json();
      const ruralData = await ruralResponse.json();

      // CA should have higher valuation
      expect(caData.valuation.structuralValue).toBeGreaterThan(
        ruralData.valuation.structuralValue
      );
    });

    it("calculates different values for different species", async () => {
      const oakRequest = createMockRequest({
        species: "oak",
        height: "taller_2_story",
        girth: "arms_wrap",
      });

      const otherRequest = createMockRequest({
        species: "other",
        height: "taller_2_story",
        girth: "arms_wrap",
      });

      const oakResponse = await POST(oakRequest);
      const otherResponse = await POST(otherRequest);

      const oakData = await oakResponse.json();
      const otherData = await otherResponse.json();

      expect(oakData.valuation.structuralValue).toBeGreaterThan(
        otherData.valuation.structuralValue
      );
    });

    it("accepts optional email", async () => {
      const request = createMockRequest({
        species: "oak",
        height: "taller_2_story",
        girth: "arms_wrap",
        email: "test@example.com",
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
    });
  });

  describe("validation errors", () => {
    it("rejects missing species", async () => {
      const request = createMockRequest({
        height: "taller_2_story",
        girth: "arms_wrap",
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe("Validation failed");
      expect(data.errors).toContainEqual({
        field: "species",
        message: "Species is required",
      });
    });

    it("rejects missing height", async () => {
      const request = createMockRequest({
        species: "oak",
        girth: "arms_wrap",
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.errors).toContainEqual({
        field: "height",
        message: "Height is required",
      });
    });

    it("rejects missing girth", async () => {
      const request = createMockRequest({
        species: "oak",
        height: "taller_2_story",
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.errors).toContainEqual({
        field: "girth",
        message: "Girth is required",
      });
    });

    it("rejects invalid species value", async () => {
      const request = createMockRequest({
        species: "invalid_species",
        height: "taller_2_story",
        girth: "arms_wrap",
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.errors[0].field).toBe("species");
      expect(data.errors[0].message).toContain("Invalid species");
    });

    it("rejects invalid height value", async () => {
      const request = createMockRequest({
        species: "oak",
        height: "invalid_height",
        girth: "arms_wrap",
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.errors[0].field).toBe("height");
    });

    it("rejects invalid girth value", async () => {
      const request = createMockRequest({
        species: "oak",
        height: "taller_2_story",
        girth: "invalid_girth",
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.errors[0].field).toBe("girth");
    });

    it("rejects invalid email format", async () => {
      const request = createMockRequest({
        species: "oak",
        height: "taller_2_story",
        girth: "arms_wrap",
        email: "not-an-email",
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.errors).toContainEqual({
        field: "email",
        message: "Invalid email format",
      });
    });

    it("returns multiple validation errors", async () => {
      const request = createMockRequest({
        // Missing all required fields
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.errors.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe("error handling", () => {
    it("handles invalid JSON", async () => {
      const request = new NextRequest("http://localhost:3000/api/valuate", {
        method: "POST",
        body: "not valid json",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe("Invalid JSON");
    });
  });
});

describe("GET /api/valuate", () => {
  it("returns method not allowed", async () => {
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(405);
    expect(data.error).toBe("Method not allowed");
  });
});
