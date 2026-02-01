"use client";

import { useCallback, useState, useRef } from "react";
import { Camera, X, Upload, Loader2 } from "lucide-react";
import { Button } from "./button";
import type { PhotoUpload as PhotoUploadType } from "@/types";

interface PhotoUploadProps {
  photos: PhotoUploadType[];
  onPhotosChange: (photos: PhotoUploadType[]) => void;
  maxPhotos?: number;
  title?: string;
  description?: string;
  acceptTypes?: string;
  isLoading?: boolean;
  uploadImmediately?: boolean;
  onUploadComplete?: (url: string) => void;
}

function generateId(): string {
  return `photo_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      // Remove data URL prefix to get pure base64
      const base64 = result.split(",")[1];
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function uploadToStorage(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("/api/upload-photo", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Upload failed");
  }

  const data = await response.json();
  return data.url;
}

export function PhotoUpload({
  photos,
  onPhotosChange,
  maxPhotos = 3,
  title = "Upload Photos",
  description = "Drag and drop or click to upload",
  acceptTypes = "image/jpeg,image/png,image/webp",
  isLoading = false,
  uploadImmediately = false,
  onUploadComplete,
}: PhotoUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback(
    async (files: FileList | File[]) => {
      const fileArray = Array.from(files);
      const remainingSlots = maxPhotos - photos.length;
      const filesToProcess = fileArray.slice(0, remainingSlots);

      if (uploadImmediately) {
        setIsUploading(true);
        try {
          const newPhotos: PhotoUploadType[] = await Promise.all(
            filesToProcess.map(async (file) => {
              const url = await uploadToStorage(file);
              onUploadComplete?.(url);
              return {
                id: generateId(),
                base64: await fileToBase64(file),
                fileName: file.name,
                mimeType: file.type,
                uploadedAt: new Date().toISOString(),
                url,
              };
            })
          );
          onPhotosChange([...photos, ...newPhotos]);
        } catch (error) {
          console.error("Upload failed:", error);
        } finally {
          setIsUploading(false);
        }
      } else {
        const newPhotos: PhotoUploadType[] = await Promise.all(
          filesToProcess.map(async (file) => ({
            id: generateId(),
            base64: await fileToBase64(file),
            fileName: file.name,
            mimeType: file.type,
            uploadedAt: new Date().toISOString(),
          }))
        );
        onPhotosChange([...photos, ...newPhotos]);
      }
    },
    [photos, onPhotosChange, maxPhotos, uploadImmediately, onUploadComplete]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      if (e.dataTransfer.files.length > 0) {
        handleFiles(e.dataTransfer.files);
      }
    },
    [handleFiles]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        handleFiles(e.target.files);
      }
    },
    [handleFiles]
  );

  const handleRemove = useCallback(
    (id: string) => {
      onPhotosChange(photos.filter((p) => p.id !== id));
    },
    [photos, onPhotosChange]
  );

  const canAddMore = photos.length < maxPhotos;

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="font-semibold text-charcoal-900">{title}</h3>
        <p className="text-sm text-charcoal-500">{description}</p>
      </div>

      {/* Photo Previews */}
      {photos.length > 0 && (
        <div className="grid grid-cols-3 gap-3">
          {photos.map((photo) => (
            <div key={photo.id} className="relative aspect-square">
              <img
                src={`data:${photo.mimeType};base64,${photo.base64}`}
                alt={`Tree photo: ${photo.fileName}`}
                className="w-full h-full object-cover rounded-lg border border-charcoal-200"
                loading="lazy"
                decoding="async"
              />
              <button
                onClick={() => handleRemove(photo.id)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="Remove photo"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Upload Zone */}
      {canAddMore && (
        <div
          onClick={handleClick}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`
            relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer
            transition-all duration-200
            ${
              isDragging
                ? "border-forest-500 bg-forest-50"
                : "border-charcoal-300 hover:border-forest-400 hover:bg-forest-50/50"
            }
            ${isLoading || isUploading ? "pointer-events-none opacity-60" : ""}
          `}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept={acceptTypes}
            multiple
            onChange={handleInputChange}
            className="hidden"
          />

          {isLoading || isUploading ? (
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="w-10 h-10 text-forest-500 animate-spin" />
              <p className="text-sm text-charcoal-600">
                {isUploading ? "Uploading photos..." : "Analyzing photos..."}
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 bg-forest-100 rounded-full flex items-center justify-center">
                {isDragging ? (
                  <Upload className="w-7 h-7 text-forest-600" />
                ) : (
                  <Camera className="w-7 h-7 text-forest-600" />
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-charcoal-700">
                  {isDragging ? "Drop photos here" : "Click or drag photos"}
                </p>
                <p className="text-xs text-charcoal-400 mt-1">
                  {photos.length}/{maxPhotos} photos • JPG, PNG, WebP
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Mobile Camera Button */}
      {canAddMore && !isLoading && !isUploading && (
        <Button
          variant="secondary"
          className="w-full md:hidden"
          onClick={handleClick}
          leftIcon={<Camera className="w-4 h-4" />}
        >
          Take Photo
        </Button>
      )}
    </div>
  );
}
