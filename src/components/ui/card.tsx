"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

// ========================================
// Base Card Component
// ========================================

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-white border border-charcoal-200 shadow-sm",
      elevated: "bg-white shadow-md hover:shadow-lg transition-shadow",
      outlined: "bg-transparent border-2 border-charcoal-200",
    };

    return (
      <div
        ref={ref}
        className={cn("rounded-xl", variants[variant], className)}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

// ========================================
// Card Header
// ========================================

const CardHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pb-0", className)} {...props} />
));

CardHeader.displayName = "CardHeader";

// ========================================
// Card Title
// ========================================

const CardTitle = forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-heading text-xl font-semibold text-charcoal-900",
      className
    )}
    {...props}
  />
));

CardTitle.displayName = "CardTitle";

// ========================================
// Card Description
// ========================================

const CardDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-charcoal-500 mt-1", className)}
    {...props}
  />
));

CardDescription.displayName = "CardDescription";

// ========================================
// Card Content
// ========================================

const CardContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6", className)} {...props} />
));

CardContent.displayName = "CardContent";

// ========================================
// Card Footer
// ========================================

const CardFooter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6 pt-0 flex items-center", className)}
    {...props}
  />
));

CardFooter.displayName = "CardFooter";

// ========================================
// Selection Card (for Wizard)
// ========================================

export interface SelectionCardProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  icon?: React.ReactNode;
  title: string;
  description?: string;
}

const SelectionCard = forwardRef<HTMLButtonElement, SelectionCardProps>(
  ({ className, selected, icon, title, description, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "group relative w-full p-4 sm:p-6 text-left",
          "bg-white rounded-xl",
          "border-2 transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-forest-500 focus:ring-offset-2",
          "overflow-hidden",
          selected
            ? "border-forest-700 bg-forest-50 shadow-md"
            : "border-charcoal-200 hover:border-forest-400 hover:bg-forest-50/50 shadow-sm hover:shadow-md",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-3 sm:gap-4">
          {icon && (
            <div
              className={cn(
                "w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shrink-0",
                "transition-colors duration-200",
                "[&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-7 sm:[&>svg]:h-7",
                selected
                  ? "bg-forest-200 text-forest-800"
                  : "bg-forest-100 text-forest-700 group-hover:bg-forest-200"
              )}
            >
              {icon}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3
              className={cn(
                "font-semibold text-base sm:text-lg",
                selected ? "text-forest-900" : "text-charcoal-900"
              )}
            >
              {title}
            </h3>
            {description && (
              <p className="text-xs sm:text-sm text-charcoal-500 mt-0.5">
                {description}
              </p>
            )}
          </div>
          <div
            className={cn(
              "w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 shrink-0",
              "flex items-center justify-center",
              "transition-all duration-200",
              selected
                ? "border-forest-700 bg-forest-700"
                : "border-charcoal-300 group-hover:border-forest-400"
            )}
          >
            {selected && (
              <svg
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
        </div>
      </button>
    );
  }
);

SelectionCard.displayName = "SelectionCard";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  SelectionCard,
};
