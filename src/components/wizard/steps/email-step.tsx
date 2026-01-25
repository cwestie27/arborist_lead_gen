"use client";

import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Input } from "@/components/ui";
import { useWizard } from "../wizard-context";

export function EmailStep() {
  const { data, setEmail, setZipCode, errors, setError, clearError } = useWizard();
  const [localEmail, setLocalEmail] = useState(data.email || "");
  const [localZipCode, setLocalZipCode] = useState(data.zipCode || "");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalEmail(value);

    if (value && !validateEmail(value)) {
      setError("email", "Please enter a valid email address");
    } else {
      clearError("email");
      if (value) {
        setEmail(value);
      }
    }
  };

  const handleEmailBlur = () => {
    if (localEmail && validateEmail(localEmail)) {
      setEmail(localEmail);
    }
  };

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 5);
    setLocalZipCode(value);
    if (value.length === 5) {
      setZipCode(value);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-charcoal-900 mb-2">
          Get Your Free Tree Valuation Report
        </h2>
        <p className="text-charcoal-600">
          Enter your email to receive your detailed report
        </p>
      </div>

      {/* Preview Card */}
      <div className="bg-forest-50 border border-forest-200 rounded-xl p-6 mb-6">
        <div className="text-center">
          <p className="text-sm text-forest-700 font-medium mb-1">
            Your Estimated Tree Value
          </p>
          <p className="font-mono text-3xl font-bold text-forest-800">
            $5,000 - $25,000
          </p>
          <p className="text-xs text-forest-600 mt-1">
            Exact value calculated in your report
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <Input
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          value={localEmail}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          error={errors.email}
          hint="We'll send your Tree Wealth Report here"
        />

        <Input
          label="Zip Code (Optional)"
          type="text"
          placeholder="12345"
          value={localZipCode}
          onChange={handleZipCodeChange}
          hint="Helps us calculate regional pricing"
        />
      </div>

      {/* Trust Signals */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 text-sm text-charcoal-500">
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4" />
          <span>Your data is secure</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span>No spam, ever</span>
        </div>
      </div>
    </div>
  );
}
