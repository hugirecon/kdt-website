"use client";

import { useState } from "react";
import CommonFields from "@/components/forms/CommonFields";
import MilitaryFields from "@/components/forms/MilitaryFields";
import TechnicalFields from "@/components/forms/TechnicalFields";
import SalesFields from "@/components/forms/SalesFields";
import MedicalFields from "@/components/forms/MedicalFields";

interface ApplicationFormProps {
  role: string;
  formSections: ("military" | "technical" | "sales" | "medical")[];
}

export default function ApplicationForm({ role, formSections }: ApplicationFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Submit to API
    console.log("Form submitted:", { role, ...formData });
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#f97316]/10 flex items-center justify-center">
          <svg className="w-10 h-10 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">
          Application Submitted
        </h3>
        <p className="text-gray-400 max-w-md mx-auto">
          Thank you for your interest in Knight Division Tactical. We&apos;ll review your application and be in touch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Common fields for all roles */}
      <CommonFields formData={formData} onChange={handleChange} />

      {/* Conditional sections based on role */}
      {formSections.includes("military") && (
        <MilitaryFields formData={formData} onChange={handleChange} role={role} />
      )}

      {formSections.includes("medical") && (
        <MedicalFields formData={formData} onChange={handleChange} />
      )}

      {formSections.includes("technical") && (
        <TechnicalFields formData={formData} onChange={handleChange} role={role} />
      )}

      {formSections.includes("sales") && (
        <SalesFields formData={formData} onChange={handleChange} />
      )}

      {/* Additional notes for all roles */}
      <div className="space-y-6 pt-6 mt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
          <h3 className="text-lg font-bold text-white tracking-wide">
            Additional Information
          </h3>
        </div>
        <div className="relative group">
          <textarea
            rows={4}
            value={formData.additionalNotes || ""}
            onChange={(e) => handleChange("additionalNotes", e.target.value)}
            placeholder="Anything else you'd like us to know?"
            className="w-full px-4 py-4 bg-[#0f0f14] border-2 border-white/10 rounded-xl focus:border-[#f97316]/50 focus:outline-none transition-all text-white placeholder-gray-500 resize-none"
          />
        </div>
      </div>

      {/* Submit button */}
      <div className="pt-8 mt-8 border-t border-white/10">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative w-full px-8 py-4 bg-[#f97316] text-black font-bold rounded-xl text-lg overflow-hidden transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_40px_rgba(249,115,22,0.4)]"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <span className="relative flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processing...
              </>
            ) : (
              <>
                Submit Application
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </>
            )}
          </span>
        </button>
        <p className="text-gray-500 text-sm mt-4 text-center">
          By submitting, you agree to our{" "}
          <a href="/privacy" className="text-[#f97316] hover:underline">privacy policy</a>
          {" "}and{" "}
          <a href="/terms" className="text-[#f97316] hover:underline">terms of service</a>.
        </p>
      </div>
    </form>
  );
}
