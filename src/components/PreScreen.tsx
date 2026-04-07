"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

// ── Branch question config ──────────────────────────────────────────
type Branch = "PMC" | "CIC" | "SPEAR" | "MIC";

const BRANCH_QUESTIONS: Record<Branch, string[]> = {
  PMC: [
    "Are you a United States citizen?",
    "Are you at least 21 years of age?",
    "Do you hold a valid United States passport?",
    "Do you have prior military service?",
    "Are you able to pass a federal background check?",
    "Are you physically fit and able to meet demanding operational requirements?",
  ],
  CIC: [
    "Are you a United States citizen?",
    "Are you at least 18 years of age?",
    "Are you able to pass a federal background check?",
    "Do you have relevant professional experience or education in your field?",
    "Are you willing to sign a Non-Disclosure Agreement?",
  ],
  SPEAR: [
    "Are you a United States citizen?",
    "Are you at least 18 years of age?",
    "Are you able to pass a background check?",
    "Do you have professional sales, business development, or marketing experience?",
    "Are you comfortable with performance-based compensation?",
  ],
  MIC: [
    "Are you authorized to work in the United States?",
    "Are you at least 18 years of age?",
    "Are you able to pass a background check?",
    "Do you have relevant trade, engineering, or technical experience?",
    "Are you willing to deploy to project sites domestically or internationally?",
  ],
};

// Map role slugs → branch
const ROLE_BRANCH_MAP: Record<string, Branch> = {
  // PMC
  knight: "PMC",
  "medical-element": "PMC",
  "communications-element": "PMC",
  "intelligence-unit": "PMC",
  pilot: "PMC",
  "drone-operator": "PMC",
  // CIC
  "legal-unit": "CIC",
  logistics: "CIC",
  "ai-developer": "CIC",
  "blockchain-developer": "CIC",
  programmer: "CIC",
  hacker: "CIC",
  // SPEAR
  "account-executive": "SPEAR",
  propagandist: "SPEAR",
  // MIC
  "construction-maintenance": "MIC",
  "manufacturing-unit": "MIC",
  "engineering-unit": "MIC",
};

export function getBranchForRole(roleSlug: string): Branch | null {
  return ROLE_BRANCH_MAP[roleSlug] ?? null;
}

// ── Component ───────────────────────────────────────────────────────
type ScreenState = "answering" | "passed" | "failed";

interface PreScreenProps {
  roleSlug: string;
  onPass: () => void;
}

export default function PreScreen({ roleSlug, onPass }: PreScreenProps) {
  const branch = getBranchForRole(roleSlug);
  const questions = branch ? BRANCH_QUESTIONS[branch] : [];

  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [state, setState] = useState<ScreenState>("answering");
  const resultRef = useRef<HTMLDivElement>(null);

  // Scroll to result when state changes
  useEffect(() => {
    if (state !== "answering" && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [state]);

  // Notify parent on pass
  useEffect(() => {
    if (state === "passed") onPass();
  }, [state, onPass]);

  if (!branch || questions.length === 0) {
    // No pre-screen for unknown roles — pass through
    return null;
  }

  const handleAnswer = (index: number, value: boolean) => {
    if (state !== "answering") return;

    const next = { ...answers, [index]: value };
    setAnswers(next);

    // Immediate knockout
    if (!value) {
      setState("failed");
      return;
    }

    // Check if all answered yes
    if (Object.keys(next).length === questions.length && Object.values(next).every(Boolean)) {
      setState("passed");
    }
  };

  return (
    <div className="max-w-[800px] mx-auto relative z-10">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-6">
          <div className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
          <span className="text-[13px] text-gray-400 font-medium tracking-wide uppercase">
            Pre-Screen Qualification
          </span>
        </div>
        <h2 className="text-[28px] font-bold text-white mb-3">
          Eligibility Verification
        </h2>
        <p className="text-gray-400 text-[15px] max-w-lg mx-auto">
          Please confirm you meet the following minimum requirements before proceeding to the application.
        </p>
      </div>

      {/* Questions */}
      {state === "answering" && (
        <div className="space-y-4">
          {questions.map((q, i) => {
            const answered = i in answers;
            const isNext = !answered && Object.keys(answers).length === i;
            const isPast = answered;

            return (
              <div
                key={i}
                className={`
                  p-5 rounded-xl border transition-all duration-300
                  ${isPast
                    ? "bg-[#f97316]/[0.04] border-[#f97316]/20"
                    : isNext
                      ? "bg-white/[0.03] border-white/10"
                      : "bg-white/[0.01] border-white/5 opacity-40"
                  }
                `}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <span className="text-[13px] font-mono text-gray-600 mt-0.5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[15px] text-gray-200 leading-relaxed">{q}</p>
                  </div>

                  {isPast ? (
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <svg className="w-5 h-5 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[13px] text-[#f97316] font-medium">Confirmed</span>
                    </div>
                  ) : isNext ? (
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button
                        onClick={() => handleAnswer(i, true)}
                        className="px-4 py-2 text-[13px] font-semibold rounded-lg bg-[#f97316] text-black hover:bg-[#fb923c] transition-colors"
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => handleAnswer(i, false)}
                        className="px-4 py-2 text-[13px] font-semibold rounded-lg bg-white/[0.06] text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white transition-colors"
                      >
                        No
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Passed */}
      {state === "passed" && (
        <div ref={resultRef} className="text-center py-8">
          <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#f97316]/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-[20px] font-bold text-white mb-2">
            You meet the initial requirements.
          </h3>
          <p className="text-gray-400 text-[15px]">
            Please complete the application below.
          </p>
        </div>
      )}

      {/* Failed */}
      {state === "failed" && (
        <div ref={resultRef} className="text-center py-8">
          <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-red-500/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h3 className="text-[20px] font-bold text-white mb-2">
            Not Eligible at This Time
          </h3>
          <p className="text-gray-400 text-[15px] max-w-md mx-auto mb-6">
            Based on your responses, you do not meet the minimum requirements for this position at this time.
          </p>
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-[14px] font-medium text-white hover:bg-white/10 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Browse Other Positions
          </Link>
        </div>
      )}
    </div>
  );
}
