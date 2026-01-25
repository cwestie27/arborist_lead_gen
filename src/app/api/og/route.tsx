import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // Get parameters from URL
  const value = searchParams.get("value") || "10,000";
  const species = searchParams.get("species") || "Tree";
  const ecoValue = searchParams.get("eco") || "500";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #15803d 0%, #166534 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#bbf7d0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22v-7" />
            <path d="M9 22h6" />
            <path d="M12 15c-3.3 0-6-2.7-6-6 0-2.5 1.5-4.6 3.6-5.5.3-.1.6-.1.9 0C12.7 4.4 14 6 14 8c0 .6-.1 1.2-.3 1.7.8.7 1.3 1.7 1.3 2.8 0 1.4-.7 2.6-1.8 3.3" />
            <path d="M12 15c3.3 0 6-2.7 6-6 0-2.5-1.5-4.6-3.6-5.5" />
          </svg>
          <span
            style={{
              fontSize: "32px",
              fontWeight: "600",
              color: "#bbf7d0",
              letterSpacing: "-0.5px",
            }}
          >
            TreeValue Pro
          </span>
        </div>

        {/* Species */}
        <div
          style={{
            fontSize: "28px",
            color: "#dcfce7",
            marginBottom: "16px",
          }}
        >
          Your {species} is worth
        </div>

        {/* Main Value */}
        <div
          style={{
            fontSize: "96px",
            fontWeight: "700",
            color: "#ffffff",
            marginBottom: "24px",
            fontFamily: "monospace",
          }}
        >
          ${value}
        </div>

        {/* Eco Value Box */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "16px 32px",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            borderRadius: "12px",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              color: "#dcfce7",
            }}
          >
            Annual Ecosystem Benefits:
          </span>
          <span
            style={{
              fontSize: "24px",
              fontWeight: "600",
              color: "#ffffff",
              fontFamily: "monospace",
            }}
          >
            ${ecoValue}/yr
          </span>
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            fontSize: "18px",
            color: "#bbf7d0",
          }}
        >
          CTLA Trunk Formula Method | treevalue.pro
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
