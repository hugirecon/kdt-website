"use client";

import { useState } from "react";
import SmartFormField, { SmartFileField, SmartCheckbox } from "./SmartFormField";

interface CommonFieldsProps {
  formData: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

type UploadStatus = "idle" | "uploading" | "success" | "error";

export default function CommonFields({ formData, onChange }: CommonFieldsProps) {
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>("idle");
  const [uploadMessage, setUploadMessage] = useState<string>("");

  async function handleResumeUpload(file: File | null) {
    if (!file) {
      onChange("resumeToken", "");
      onChange("resumeFilename", "");
      setUploadStatus("idle");
      setUploadMessage("");
      return;
    }
    setUploadStatus("uploading");
    setUploadMessage("Validating file...");
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/upload/resume", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) {
        setUploadStatus("error");
        setUploadMessage(data.error || "Upload failed");
        onChange("resumeToken", "");
        return;
      }
      onChange("resumeToken", data.token);
      onChange("resumeFilename", data.filename);
      setUploadStatus("success");
      setUploadMessage(`Accepted (${data.detected.toUpperCase()})`);
    } catch {
      setUploadStatus("error");
      setUploadMessage("Network error. Try again.");
      onChange("resumeToken", "");
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
        <h3 className="text-lg font-bold text-white tracking-wide">
          Personal Information
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <SmartFormField
          label="First Name"
          name="firstName"
          value={formData.firstName || ""}
          onChange={(value) => onChange("firstName", value)}
          required
        />
        <SmartFormField
          label="Last Name"
          name="lastName"
          value={formData.lastName || ""}
          onChange={(value) => onChange("lastName", value)}
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <SmartFormField
          label="Email"
          name="email"
          type="email"
          value={formData.email || ""}
          onChange={(value) => onChange("email", value)}
          required
        />
        <SmartFormField
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone || ""}
          onChange={(value) => onChange("phone", value)}
          required
        />
      </div>

      <SmartFormField
        label="LinkedIn Profile"
        name="linkedin"
        type="url"
        value={formData.linkedin || ""}
        onChange={(value) => onChange("linkedin", value)}
        placeholder="https://linkedin.com/in/..."
      />

      <div className="grid md:grid-cols-3 gap-4">
        <SmartFormField
          label="Age"
          name="age"
          type="number"
          value={formData.age || ""}
          onChange={(value) => onChange("age", value)}
          required
          min={18}
          max={99}
        />
        <SmartFormField
          label="Sex"
          name="sex"
          type="select"
          value={formData.sex || ""}
          onChange={(value) => onChange("sex", value)}
          required
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ]}
        />
        <SmartFormField
          label="Country"
          name="country"
          value={formData.country || ""}
          onChange={(value) => onChange("country", value)}
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <SmartFormField
          label="State / Province"
          name="state"
          value={formData.state || ""}
          onChange={(value) => onChange("state", value)}
          required
        />
        <SmartFormField
          label="City / Municipality"
          name="city"
          value={formData.city || ""}
          onChange={(value) => onChange("city", value)}
          required
        />
      </div>

      <SmartFormField
        label="Passports Held"
        name="passports"
        value={formData.passports || ""}
        onChange={(value) => onChange("passports", value)}
        required
        placeholder="e.g., USA, Germany"
      />

      <SmartFormField
        label="Social Media Link"
        name="socialMedia"
        type="url"
        value={formData.socialMedia || ""}
        onChange={(value) => onChange("socialMedia", value)}
        placeholder="Instagram, Twitter, etc."
      />

      <div className="grid md:grid-cols-2 gap-4">
        <SmartFormField
          label="Availability to Start"
          name="availability"
          type="select"
          value={formData.availability || ""}
          onChange={(value) => onChange("availability", value)}
          required
          options={[
            { value: "immediate", label: "Immediately" },
            { value: "2weeks", label: "2 weeks" },
            { value: "1month", label: "1 month" },
            { value: "2months", label: "2+ months" },
          ]}
        />
        <SmartFormField
          label="Work Commitment"
          name="commitment"
          type="select"
          value={formData.commitment || ""}
          onChange={(value) => onChange("commitment", value)}
          required
          options={[
            { value: "fulltime", label: "Full-time" },
            { value: "parttime", label: "Part-time" },
            { value: "contract", label: "Contract" },
          ]}
        />
      </div>

      <div className="space-y-2">
        <SmartFileField
          label="Resume / CV"
          name="resume"
          accept=".pdf,.doc,.docx"
          required
          onChange={handleResumeUpload}
        />
        {uploadStatus !== "idle" && (
          <div
            className={`text-[13px] font-medium flex items-center gap-2 ${
              uploadStatus === "success"
                ? "text-[#22c55e]"
                : uploadStatus === "error"
                  ? "text-red-400"
                  : "text-gray-400"
            }`}
          >
            {uploadStatus === "uploading" && (
              <div className="w-3 h-3 border-2 border-[#f97316]/30 border-t-[#f97316] rounded-full animate-spin" />
            )}
            {uploadStatus === "success" && (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
            {uploadStatus === "error" && (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            <span>{uploadMessage}</span>
          </div>
        )}
      </div>

      {/* Agreements */}
      <div className="space-y-5 pt-6 mt-6 border-t border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
          <h3 className="text-lg font-bold text-white tracking-wide">
            Agreements
          </h3>
        </div>

        <SmartCheckbox
          label="I agree to drug testing as required for this position."
          name="drugTest"
          checked={formData.drugTest === "true"}
          onChange={(checked) => onChange("drugTest", checked ? "true" : "")}
          required
        />

        <SmartCheckbox
          label="I acknowledge that I may be required to sign an NDA and/or Non-Compete agreement."
          name="ndaAcknowledge"
          checked={formData.ndaAcknowledge === "true"}
          onChange={(checked) => onChange("ndaAcknowledge", checked ? "true" : "")}
          required
        />

        <SmartCheckbox
          label="I consent to a background check as part of the application process."
          name="backgroundCheck"
          checked={formData.backgroundCheck === "true"}
          onChange={(checked) => onChange("backgroundCheck", checked ? "true" : "")}
          required
        />

        <SmartCheckbox
          label="I confirm that I have no conflicts of interest that would prevent me from performing this role."
          name="noConflicts"
          checked={formData.noConflicts === "true"}
          onChange={(checked) => onChange("noConflicts", checked ? "true" : "")}
          required
        />
      </div>
    </div>
  );
}
