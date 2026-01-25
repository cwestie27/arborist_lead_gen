"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      "inline-flex items-center justify-center font-medium",
      "rounded-lg transition-all duration-200",
      "focus:outline-none focus:ring-2 focus:ring-forest-500 focus:ring-offset-2",
      "disabled:opacity-50 disabled:cursor-not-allowed"
    );

    const variants = {
      primary: cn(
        "bg-forest-700 text-white",
        "hover:bg-forest-800",
        "shadow-sm hover:shadow-md",
        "active:bg-forest-900"
      ),
      secondary: cn(
        "bg-transparent text-forest-700",
        "border-2 border-forest-700",
        "hover:bg-forest-50",
        "active:bg-forest-100"
      ),
      ghost: cn(
        "text-forest-700",
        "hover:bg-forest-50 hover:text-forest-800",
        "active:bg-forest-100"
      ),
      link: cn(
        "text-forest-700 underline-offset-4",
        "hover:underline",
        "p-0"
      ),
    };

    const sizes = {
      sm: "px-4 py-2 text-sm gap-1.5",
      md: "px-6 py-3 text-base gap-2",
      lg: "px-8 py-4 text-lg gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : leftIcon ? (
          <span className="shrink-0">{leftIcon}</span>
        ) : null}
        {children}
        {rightIcon && !isLoading && (
          <span className="shrink-0">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
