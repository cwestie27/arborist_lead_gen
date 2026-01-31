import { describe, it, expect, vi, beforeEach } from "vitest";
import { NextRequest } from "next/server";
import { GET, POST } from "./route";

// Mock Next.js headers
vi.mock("next/headers", () => ({
  headers: vi.fn().mockResolvedValue({
    get: vi.fn((name: string) => {
      if (name === "user-agent") return "Mozilla/5.0 Test Browser";
      if (name === "x-forwarded-for") return "192.168.1.1";
      return null;
    }),
  }),
}));

// Mock the rate limit module
vi.mock("@/lib/rate-limit", () => ({
  rateLimit: vi.fn().mockResolvedValue({
    success: true,
    limit: 10,
    remaining: 9,
    reset: Date.now() + 60000,
  }),
}));

// Mock Supabase
vi.mock("@/lib/supabase/server", () => ({
  createAdminClient: vi.fn(() => ({
    from: vi.fn(() => ({
      insert: vi.fn().mockResolvedValue({ data: null, error: null }),
    })),
  })),
}));

describe("GET /api/redirect", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("valid redirects", () => {
    it("redirects to arborist URL for valid target", async () => {
      const request = new NextRequest(
        "http://localhost:3000/api/redirect?target=arborist"
      );

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get("location")).toBe(
        "https://www.treesaregood.org/findanarborist"
      );
    });

    it("redirects to pruning URL", async () => {
      const request = new NextRequest(
        "http://localhost:3000/api/redirect?target=pruning"
      );

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get("location")).toBe(
        "https://www.homeadvisor.com/c.Tree-Trimming.html"
      );
    });

    it("redirects to removal URL", async () => {
      const request = new NextRequest(
        "http://localhost:3000/api/redirect?target=removal"
      );

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get("location")).toBe(
        "https://www.homeadvisor.com/c.Tree-Removal.html"
      );
    });

    it("redirects to health URL", async () => {
      const request = new NextRequest(
        "http://localhost:3000/api/redirect?target=health"
      );

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get("location")).toBe(
        "https://www.treesaregood.org/treeowner/caringforyourtrees"
      );
    });

    it("accepts optional tree_id parameter", async () => {
      const request = new NextRequest(
        "http://localhost:3000/api/redirect?target=arborist&tree_id=123"
      );

      const response = await GET(request);

      expect(response.status).toBe(307);
    });

    it("accepts optional uid parameter", async () => {
      const request = new NextRequest(
        "http://localhost:3000/api/redirect?target=arborist&uid=user@example.com"
      );

      const response = await GET(request);

      expect(response.status).toBe(307);
    });
  });

  describe("invalid requests", () => {
    it("redirects to fallback for missing target", async () => {
      const request = new NextRequest("http://localhost:3000/api/redirect");

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get("location")).toBe(
        "https://www.treesaregood.org/findanarborist"
      );
    });

    it("redirects to fallback for invalid target", async () => {
      const request = new NextRequest(
        "http://localhost:3000/api/redirect?target=invalid"
      );

      const response = await GET(request);

      expect(response.status).toBe(307);
      expect(response.headers.get("location")).toBe(
        "https://www.treesaregood.org/findanarborist"
      );
    });
  });

  describe("caching headers", () => {
    it("includes no-cache headers", async () => {
      const request = new NextRequest(
        "http://localhost:3000/api/redirect?target=arborist"
      );

      const response = await GET(request);
      const cacheControl = response.headers.get("cache-control");

      // Should have no-store directive
      expect(cacheControl).not.toBeNull();
      expect(cacheControl).toContain("no-store");
    });
  });
});

describe("POST /api/redirect", () => {
  it("returns method not allowed", async () => {
    const response = await POST();
    const data = await response.json();

    expect(response.status).toBe(405);
    expect(data.error).toBe("Method not allowed");
  });
});
