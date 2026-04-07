"use client";

import Link from "next/link";

type StageStatus = "completed" | "in_review" | "active" | "locked";

interface Stage {
  name: string;
  status: StageStatus;
}

interface CandidateData {
  name: string;
  role: string;
  branch: string;
  currentStage: number;
  stages: Stage[];
  appliedDate: string;
  actionRequired: { label: string; href: string; type: string } | null;
}

const mockCandidate: CandidateData = {
  name: "Test Candidate",
  role: "Knight (Private Military Contractor)",
  branch: "PMC",
  currentStage: 1,
  stages: [
    { name: "Pre-Screen", status: "completed" },
    { name: "Application Review", status: "in_review" },
    { name: "Aptitude Assessment", status: "locked" },
    { name: "Bot Interview", status: "locked" },
    { name: "The Gauntlet", status: "locked" },
    { name: "Final Review", status: "locked" },
    { name: "Onboarding", status: "locked" },
  ],
  appliedDate: "2026-04-07",
  actionRequired: null,
};

function getStatusBadge(status: StageStatus) {
  switch (status) {
    case "completed":
      return { label: "Completed", bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" };
    case "in_review":
      return { label: "Awaiting Review", bg: "bg-[#f97316]/10", text: "text-[#f97316]", border: "border-[#f97316]/20" };
    case "active":
      return { label: "In Progress", bg: "bg-[#f97316]/10", text: "text-[#f97316]", border: "border-[#f97316]/20" };
    case "locked":
      return { label: "Locked", bg: "bg-white/[0.03]", text: "text-[#52525b]", border: "border-white/[0.06]" };
  }
}

function StageIcon({ status, index }: { status: StageStatus; index: number }) {
  if (status === "completed") {
    return (
      <div className="w-8 h-8 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
        <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    );
  }
  if (status === "in_review" || status === "active") {
    return (
      <div className="w-8 h-8 rounded-full bg-[#f97316]/15 border border-[#f97316]/40 flex items-center justify-center flex-shrink-0 relative">
        <span className="text-xs font-bold text-[#f97316]">{index}</span>
        <div className="absolute inset-0 rounded-full border border-[#f97316]/40 animate-ping opacity-30" />
      </div>
    );
  }
  return (
    <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
      <svg className="w-3.5 h-3.5 text-[#52525b]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
      </svg>
    </div>
  );
}

export default function PortalDashboard() {
  const candidate = mockCandidate;
  const currentStageData = candidate.stages[candidate.currentStage];
  const currentBadge = getStatusBadge(currentStageData.status);
  const progress = ((candidate.currentStage) / (candidate.stages.length - 1)) * 100;

  return (
    <div className="pt-20 px-4 md:px-8 lg:px-12 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-[#fafaf9] tracking-tight">Selection Pipeline</h1>
        <p className="text-sm text-[#78716c] mt-1">
          Applied for <span className="text-[#a8a29e]">{candidate.role}</span> · {candidate.appliedDate}
        </p>
      </div>

      {/* Status Card */}
      <div className="rounded-lg border border-white/[0.08] bg-[#0a0a0a] p-6 mb-6">
        <div className="flex items-start justify-between mb-5">
          <div>
            <div className="text-xs text-[#78716c] uppercase tracking-widest mb-1">Current Stage</div>
            <div className="text-lg text-[#fafaf9] font-medium">
              Stage {candidate.currentStage}: {currentStageData.name}
            </div>
          </div>
          <span className={`px-3 py-1 rounded text-xs font-medium border ${currentBadge.bg} ${currentBadge.text} ${currentBadge.border}`}>
            {currentBadge.label}
          </span>
        </div>

        {/* Progress bar */}
        <div className="relative">
          <div className="flex justify-between mb-2">
            {candidate.stages.map((stage, i) => (
              <div
                key={i}
                className={`text-[10px] font-medium ${
                  i < candidate.currentStage
                    ? "text-emerald-400"
                    : i === candidate.currentStage
                    ? "text-[#f97316]"
                    : "text-[#52525b]"
                }`}
              >
                {i}
              </div>
            ))}
          </div>
          <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700 ease-out"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #059669 0%, #f97316 100%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Action Items */}
      {candidate.actionRequired && (
        <div className="rounded-lg border border-red-500/20 bg-red-500/[0.05] p-5 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-red-500/15 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-red-400">Action Required</div>
              <div className="text-xs text-[#78716c] mt-0.5">{candidate.actionRequired.label}</div>
            </div>
            <Link
              href={candidate.actionRequired.href}
              className="px-4 py-2 bg-[#f97316] text-black text-xs font-semibold rounded hover:bg-[#fb923c] transition-colors"
            >
              {candidate.actionRequired.type === "assessment" ? "Start Assessment" : "Upload Document"}
            </Link>
          </div>
        </div>
      )}

      {/* Stage Timeline */}
      <div className="rounded-lg border border-white/[0.08] bg-[#0a0a0a] p-6">
        <h2 className="text-sm font-medium text-[#fafaf9] mb-6">Stage Timeline</h2>
        <div className="space-y-0">
          {candidate.stages.map((stage, i) => {
            const badge = getStatusBadge(stage.status);
            const isLast = i === candidate.stages.length - 1;
            return (
              <div key={i} className="flex gap-4">
                {/* Timeline line + icon */}
                <div className="flex flex-col items-center">
                  <StageIcon status={stage.status} index={i} />
                  {!isLast && (
                    <div
                      className={`w-px flex-1 min-h-[32px] ${
                        i < candidate.currentStage ? "bg-emerald-500/30" : "bg-white/[0.06]"
                      }`}
                    />
                  )}
                </div>
                {/* Content */}
                <div className={`pb-6 ${isLast ? "pb-0" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-sm font-medium ${
                        stage.status === "completed"
                          ? "text-[#a8a29e]"
                          : stage.status === "locked"
                          ? "text-[#52525b]"
                          : "text-[#fafaf9]"
                      }`}
                    >
                      Stage {i}: {stage.name}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-medium border ${badge.bg} ${badge.text} ${badge.border}`}>
                      {badge.label}
                    </span>
                  </div>
                  {stage.status === "completed" && (
                    <p className="text-xs text-[#52525b] mt-1">Completed</p>
                  )}
                  {stage.status === "in_review" && (
                    <p className="text-xs text-[#78716c] mt-1">Your application is being reviewed by the selection team.</p>
                  )}
                  {stage.status === "active" && (
                    <p className="text-xs text-[#78716c] mt-1">This stage is active. Complete the required actions to proceed.</p>
                  )}
                  {stage.status === "locked" && (
                    <p className="text-xs text-[#3f3f46] mt-1">Complete previous stages to unlock.</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <Link
          href="/portal/stages"
          className="rounded-lg border border-white/[0.08] bg-[#0a0a0a] p-5 hover:border-white/[0.15] transition-colors group"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-[#fafaf9] group-hover:text-[#f97316] transition-colors">View All Stages</div>
              <div className="text-xs text-[#78716c] mt-1">Detailed requirements and descriptions</div>
            </div>
            <svg className="w-4 h-4 text-[#52525b] group-hover:text-[#f97316] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </Link>
        <Link
          href="/portal/documents"
          className="rounded-lg border border-white/[0.08] bg-[#0a0a0a] p-5 hover:border-white/[0.15] transition-colors group"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-[#fafaf9] group-hover:text-[#f97316] transition-colors">Documents</div>
              <div className="text-xs text-[#78716c] mt-1">Upload and manage your documents</div>
            </div>
            <svg className="w-4 h-4 text-[#52525b] group-hover:text-[#f97316] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}
