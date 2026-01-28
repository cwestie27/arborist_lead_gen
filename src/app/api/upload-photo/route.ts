import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

// Force dynamic to prevent caching
export const dynamic = "force-dynamic";

// Valid image MIME types
const VALID_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    // Validate file type
    if (!VALID_TYPES.includes(file.type)) {
      return NextResponse.json(
        {
          error: "Invalid file type",
          message: `File must be one of: ${VALID_TYPES.join(", ")}`,
        },
        { status: 400 }
      );
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        {
          error: "File too large",
          message: "Maximum file size is 5MB",
        },
        { status: 400 }
      );
    }

    // Generate unique filename
    const extension = file.name.split(".").pop() || "jpg";
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${extension}`;
    const filePath = `uploads/${fileName}`;

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Supabase Storage
    const supabase = createAdminClient();
    const { error: uploadError } = await supabase.storage
      .from("tree-images")
      .upload(filePath, buffer, {
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) {
      console.error("Storage upload error:", uploadError);
      return NextResponse.json(
        {
          error: "Upload failed",
          message: uploadError.message,
        },
        { status: 500 }
      );
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from("tree-images")
      .getPublicUrl(filePath);

    return NextResponse.json({
      success: true,
      url: urlData.publicUrl,
      fileName: fileName,
    });
  } catch (error) {
    console.error("Upload API error:", error);

    return NextResponse.json(
      {
        error: "Internal server error",
        message: "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      error: "Method not allowed",
      message: "Use POST with multipart/form-data to upload a file",
    },
    { status: 405 }
  );
}
