"use client";

interface MilitaryFieldsProps {
  formData: Record<string, string>;
  onChange: (field: string, value: string) => void;
  role?: string; // For role-specific questions
}

export default function MilitaryFields({ formData, onChange, role }: MilitaryFieldsProps) {
  const hasMilitaryExperience = formData.hasMilitaryExperience === "yes";

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-orange-500 font-mono">
        &gt; MILITARY EXPERIENCE
      </h3>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Do you have military experience? *</label>
        <select
          required
          value={formData.hasMilitaryExperience || ""}
          onChange={(e) => onChange("hasMilitaryExperience", e.target.value)}
          className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white"
        >
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {hasMilitaryExperience && (
        <>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Branch *</label>
              <input
                type="text"
                required
                value={formData.branch || ""}
                onChange={(e) => onChange("branch", e.target.value)}
                placeholder="e.g., US Army, USMC, etc."
                className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-600"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">MOS/Rate/AFSC *</label>
              <input
                type="text"
                required
                value={formData.mos || ""}
                onChange={(e) => onChange("mos", e.target.value)}
                placeholder="e.g., 11B, 0311, etc."
                className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-600"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Rank at Separation *</label>
              <input
                type="text"
                required
                value={formData.rank || ""}
                onChange={(e) => onChange("rank", e.target.value)}
                className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Years in Service *</label>
              <input
                type="number"
                required
                min="0"
                value={formData.yearsInService || ""}
                onChange={(e) => onChange("yearsInService", e.target.value)}
                className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Number of Deployments *</label>
            <input
              type="number"
              required
              min="0"
              value={formData.deployments || ""}
              onChange={(e) => onChange("deployments", e.target.value)}
              className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white"
            />
          </div>

          {/* SOF Experience - shown for Knight role */}
          {role === "knight" && (
            <div>
              <label className="block text-sm text-gray-400 mb-1">SOF Experience *</label>
              <select
                required
                value={formData.sofExperience || ""}
                onChange={(e) => onChange("sofExperience", e.target.value)}
                className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white"
              >
                <option value="">Select...</option>
                <option value="tier1">Tier 1 (CAG/DEVGRU/etc.)</option>
                <option value="tier2">Tier 2 (SF/Rangers/MARSOC/etc.)</option>
                <option value="tier3">Tier 3 (Conventional with specialized training)</option>
                <option value="none">No SOF Experience</option>
              </select>
            </div>
          )}

          <div>
            <label className="block text-sm text-gray-400 mb-1">Description of Military Duties *</label>
            <textarea
              required
              rows={4}
              value={formData.militaryDuties || ""}
              onChange={(e) => onChange("militaryDuties", e.target.value)}
              placeholder="Describe your primary duties, specializations, and notable assignments..."
              className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-600 resize-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Relevant Training & Skills</label>
            <textarea
              rows={3}
              value={formData.militaryTraining || ""}
              onChange={(e) => onChange("militaryTraining", e.target.value)}
              placeholder="List relevant courses, schools, certifications..."
              className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-600 resize-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Previous PMC Experience</label>
            <select
              value={formData.pmcExperience || ""}
              onChange={(e) => onChange("pmcExperience", e.target.value)}
              className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white"
            >
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {formData.pmcExperience === "yes" && (
            <div>
              <label className="block text-sm text-gray-400 mb-1">PMC Experience Details</label>
              <textarea
                rows={3}
                value={formData.pmcDetails || ""}
                onChange={(e) => onChange("pmcDetails", e.target.value)}
                placeholder="Companies, roles, duration, locations..."
                className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-600 resize-none"
              />
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Security Clearance Status *</label>
              <select
                required
                value={formData.clearanceStatus || ""}
                onChange={(e) => onChange("clearanceStatus", e.target.value)}
                className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white"
              >
                <option value="">Select...</option>
                <option value="ts-sci">TS/SCI (Active)</option>
                <option value="ts">Top Secret (Active)</option>
                <option value="secret">Secret (Active)</option>
                <option value="expired">Previously held (Expired)</option>
                <option value="none">None</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Willing to work internationally? *</label>
              <select
                required
                value={formData.internationalWork || ""}
                onChange={(e) => onChange("internationalWork", e.target.value)}
                className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white"
              >
                <option value="">Select...</option>
                <option value="yes">Yes</option>
                <option value="limited">Limited (specify in notes)</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">DD-214 Upload</label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-orange-500 file:text-black file:font-semibold"
            />
            <p className="text-xs text-gray-500 mt-1">Optional but strongly recommended</p>
          </div>

          {/* Knight-specific fields */}
          {role === "knight" && (
            <>
              <h3 className="text-lg font-bold text-orange-500 font-mono pt-4">
                &gt; FIREARMS & CERTIFICATIONS
              </h3>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Firearm Licenses by State</label>
                <input
                  type="text"
                  value={formData.firearmLicenses || ""}
                  onChange={(e) => onChange("firearmLicenses", e.target.value)}
                  placeholder="e.g., TX CHL, FL CCW, etc."
                  className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Guard Cards / Security Licenses</label>
                <input
                  type="text"
                  value={formData.guardCards || ""}
                  onChange={(e) => onChange("guardCards", e.target.value)}
                  placeholder="List states and license types..."
                  className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Armed work experience outside USA?</label>
                <select
                  value={formData.armedWorkOutsideUSA || ""}
                  onChange={(e) => onChange("armedWorkOutsideUSA", e.target.value)}
                  className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white"
                >
                  <option value="">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
