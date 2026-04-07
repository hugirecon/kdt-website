"use client";

type StageStatus = "completed" | "in_review" | "active" | "locked";

interface StageDetail {
  name: string;
  status: StageStatus;
  description: string;
  requirements: string[];
  duration: string;
  completedDate?: string;
  unlockRequirement?: string;
}

const stages: StageDetail[] = [
  {
    name: "Pre-Screen",
    status: "completed",
    description: "Initial eligibility verification based on your background, qualifications, and fit for the role. Automated screening of basic requirements.",
    requirements: ["Valid identification", "Meet minimum age requirement", "No disqualifying factors"],
    duration: "Instant",
    completedDate: "2026-04-07",
  },
  {
    name: "Application Review",
    status: "in_review",
    description: "Your full application is reviewed by the KDT selection team. This includes your resume, cover letter, and any supporting documentation.",
    requirements: ["Complete application form", "Upload resume/CV", "Provide references"],
    duration: "3–5 business days",
  },
  {
    name: "Aptitude Assessment",
    status: "locked",
    description: "A comprehensive assessment evaluating cognitive ability, situational judgment, and role-specific knowledge. Timed and monitored.",
    requirements: ["Stable internet connection", "60 minutes uninterrupted", "Webcam access"],
    duration: "60 minutes",
    unlockRequirement: "Pass Application Review",
  },
  {
    name: "Bot Interview",
    status: "locked",
    description: "AI-conducted structured interview covering your experience, motivations, and scenario-based responses. Recorded for review by the selection team.",
    requirements: ["Microphone access", "Quiet environment", "30 minutes uninterrupted"],
    duration: "25–35 minutes",
    unlockRequirement: "Pass Aptitude Assessment",
  },
  {
    name: "The Gauntlet",
    status: "locked",
    description: "An intensive multi-phase evaluation combining physical fitness standards, stress testing, and practical problem-solving under pressure.",
    requirements: ["Physical fitness clearance", "Travel to evaluation site", "2-day availability"],
    duration: "2 days",
    unlockRequirement: "Pass Bot Interview",
  },
  {
    name: "Final Review",
    status: "locked",
    description: "The selection board reviews all accumulated data from previous stages. Background verification and final clearance checks are conducted.",
    requirements: ["All previous stages completed", "Background check consent"],
    duration: "5–10 business days",
    unlockRequirement: "Complete The Gauntlet",
  },
  {
    name: "Onboarding",
    status: "locked",
    description: "Welcome to KDT. You'll receive your assignment details, complete administrative onboarding, and begin your initial training program.",
    requirements: ["Sign employment agreement", "Complete tax forms", "Equipment sizing"],
    duration: "1 week",
    unlockRequirement: "Board approval",
  },
];

function StatusIndicator({ status }: { status: StageStatus }) {
  switch (status) {
    case "completed":
      return (
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-xs font-medium text-emerald-400">Completed</span>
        </div>
      );
    case "in_review":
      return (
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
          <span className="text-xs font-medium text-[#f97316]">Awaiting Review</span>
        </div>
      );
    case "active":
      return (
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#f97316]" />
          <span className="text-xs font-medium text-[#f97316]">In Progress</span>
        </div>
      );
    case "locked":
      return (
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#3f3f46]" />
          <span className="text-xs font-medium text-[#52525b]">Locked</span>
        </div>
      );
  }
}

export default function StagesPage() {
  return (
    <div className="pt-20 px-4 md:px-8 lg:px-12 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-[#fafaf9] tracking-tight">Selection Stages</h1>
        <p className="text-sm text-[#78716c] mt-1">
          Detailed overview of the KDT selection pipeline — 7 stages from pre-screen to onboarding.
        </p>
      </div>

      <div className="space-y-4">
        {stages.map((stage, i) => {
          const isLocked = stage.status === "locked";
          return (
            <div
              key={i}
              className={`rounded-lg border p-6 transition-colors ${
                isLocked
                  ? "border-white/[0.04] bg-[#0a0a0a]/50"
                  : stage.status === "in_review" || stage.status === "active"
                  ? "border-[#f97316]/20 bg-[#0a0a0a]"
                  : "border-white/[0.08] bg-[#0a0a0a]"
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs font-mono font-bold px-2 py-1 rounded ${
                      isLocked
                        ? "bg-white/[0.03] text-[#3f3f46]"
                        : stage.status === "completed"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-[#f97316]/10 text-[#f97316]"
                    }`}
                  >
                    {String(i).padStart(2, "0")}
                  </span>
                  <h2
                    className={`text-base font-medium ${
                      isLocked ? "text-[#52525b]" : "text-[#fafaf9]"
                    }`}
                  >
                    {stage.name}
                  </h2>
                </div>
                <StatusIndicator status={stage.status} />
              </div>

              {/* Description */}
              <p className={`text-sm leading-relaxed mb-4 ${isLocked ? "text-[#3f3f46]" : "text-[#78716c]"}`}>
                {stage.description}
              </p>

              {/* Details grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Requirements */}
                <div>
                  <div className={`text-[10px] uppercase tracking-widest mb-2 ${isLocked ? "text-[#3f3f46]" : "text-[#52525b]"}`}>
                    Requirements
                  </div>
                  <ul className="space-y-1.5">
                    {stage.requirements.map((req, j) => (
                      <li key={j} className={`flex items-start gap-2 text-xs ${isLocked ? "text-[#3f3f46]" : "text-[#78716c]"}`}>
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Meta */}
                <div className="space-y-3">
                  <div>
                    <div className={`text-[10px] uppercase tracking-widest mb-1 ${isLocked ? "text-[#3f3f46]" : "text-[#52525b]"}`}>
                      Est. Duration
                    </div>
                    <div className={`text-xs ${isLocked ? "text-[#3f3f46]" : "text-[#78716c]"}`}>{stage.duration}</div>
                  </div>
                  {stage.completedDate && (
                    <div>
                      <div className="text-[10px] uppercase tracking-widest mb-1 text-emerald-500/50">Completed</div>
                      <div className="text-xs text-emerald-400">{stage.completedDate}</div>
                    </div>
                  )}
                  {stage.unlockRequirement && (
                    <div>
                      <div className="text-[10px] uppercase tracking-widest mb-1 text-[#3f3f46]">To Unlock</div>
                      <div className="text-xs text-[#52525b]">{stage.unlockRequirement}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA for active stages */}
              {stage.status === "active" && (
                <div className="mt-4 pt-4 border-t border-white/[0.06]">
                  <button className="px-4 py-2 bg-[#f97316] text-black text-xs font-semibold rounded hover:bg-[#fb923c] transition-colors">
                    Start Stage
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
