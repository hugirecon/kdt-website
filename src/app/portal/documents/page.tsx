"use client";

import { useState } from "react";

type DocStatus = "approved" | "pending_review" | "uploaded" | "rejected" | "required";

interface Document {
  id: string;
  name: string;
  type: string;
  uploadedAt: string | null;
  status: DocStatus;
  size: string | null;
  note?: string;
}

const mockDocuments: Document[] = [
  {
    id: "1",
    name: "Resume_TestCandidate.pdf",
    type: "Resume / CV",
    uploadedAt: "2026-04-07",
    status: "approved",
    size: "245 KB",
  },
  {
    id: "2",
    name: "DD214_Redacted.pdf",
    type: "DD-214 (Military Discharge)",
    uploadedAt: "2026-04-07",
    status: "pending_review",
    size: "1.2 MB",
  },
  {
    id: "3",
    name: "FirstAid_Cert.jpg",
    type: "Certification",
    uploadedAt: "2026-04-07",
    status: "uploaded",
    size: "890 KB",
  },
  {
    id: "4",
    name: null as unknown as string,
    type: "Background Check Consent",
    uploadedAt: null,
    status: "required",
    size: null,
    note: "Required before Stage 5: Final Review",
  },
];

function StatusBadge({ status }: { status: DocStatus }) {
  const config = {
    approved: { label: "Approved", bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" },
    pending_review: { label: "Pending Review", bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20" },
    uploaded: { label: "Uploaded", bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20" },
    rejected: { label: "Rejected", bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/20" },
    required: { label: "Required", bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/20" },
  }[status];

  return (
    <span className={`px-2 py-0.5 rounded text-[10px] font-medium border ${config.bg} ${config.text} ${config.border}`}>
      {config.label}
    </span>
  );
}

function DocIcon({ status }: { status: DocStatus }) {
  if (status === "required") {
    return (
      <div className="w-10 h-10 rounded-lg bg-red-500/[0.08] border border-red-500/20 flex items-center justify-center flex-shrink-0">
        <svg className="w-5 h-5 text-red-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    );
  }
  return (
    <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
      <svg className="w-5 h-5 text-[#78716c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    </div>
  );
}

export default function DocumentsPage() {
  const [docs] = useState(mockDocuments);
  const uploaded = docs.filter((d) => d.status !== "required");
  const required = docs.filter((d) => d.status === "required");

  return (
    <div className="pt-20 px-4 md:px-8 lg:px-12 max-w-5xl mx-auto">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-[#fafaf9] tracking-tight">Documents</h1>
          <p className="text-sm text-[#78716c] mt-1">
            Manage documents required for your selection process.
          </p>
        </div>
        <button className="px-4 py-2 bg-[#f97316] text-black text-xs font-semibold rounded hover:bg-[#fb923c] transition-colors flex items-center gap-2">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Upload Document
        </button>
      </div>

      {/* Required documents alert */}
      {required.length > 0 && (
        <div className="rounded-lg border border-red-500/20 bg-red-500/[0.05] p-4 mb-6">
          <div className="flex items-center gap-2 mb-1">
            <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            <span className="text-sm font-medium text-red-400">{required.length} document{required.length > 1 ? "s" : ""} required</span>
          </div>
          <p className="text-xs text-[#78716c]">Upload the missing documents to continue your selection process.</p>
        </div>
      )}

      {/* Documents list */}
      <div className="rounded-lg border border-white/[0.08] bg-[#0a0a0a] divide-y divide-white/[0.06]">
        {docs.map((doc) => (
          <div key={doc.id} className="p-4 flex items-center gap-4 hover:bg-white/[0.02] transition-colors">
            <DocIcon status={doc.status} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-[#fafaf9] truncate">
                  {doc.status === "required" ? doc.type : doc.name}
                </span>
                <StatusBadge status={doc.status} />
              </div>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-xs text-[#52525b]">{doc.type}</span>
                {doc.size && (
                  <>
                    <span className="text-[#3f3f46]">·</span>
                    <span className="text-xs text-[#52525b]">{doc.size}</span>
                  </>
                )}
                {doc.uploadedAt && (
                  <>
                    <span className="text-[#3f3f46]">·</span>
                    <span className="text-xs text-[#52525b]">Uploaded {doc.uploadedAt}</span>
                  </>
                )}
                {doc.note && <span className="text-xs text-red-400/60">{doc.note}</span>}
              </div>
            </div>
            {doc.status === "required" ? (
              <button className="px-3 py-1.5 bg-[#f97316] text-black text-xs font-semibold rounded hover:bg-[#fb923c] transition-colors flex-shrink-0">
                Upload
              </button>
            ) : (
              <button className="p-2 text-[#52525b] hover:text-[#fafaf9] transition-colors flex-shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {[
          { label: "Total", value: docs.length, color: "text-[#fafaf9]" },
          { label: "Approved", value: docs.filter((d) => d.status === "approved").length, color: "text-emerald-400" },
          { label: "Pending", value: docs.filter((d) => d.status === "pending_review" || d.status === "required").length, color: "text-amber-400" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-lg border border-white/[0.08] bg-[#0a0a0a] p-4 text-center">
            <div className={`text-2xl font-semibold ${stat.color}`}>{stat.value}</div>
            <div className="text-[10px] text-[#52525b] uppercase tracking-widest mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
