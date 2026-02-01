"use client";

interface MedicalFieldsProps {
  formData: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

export default function MedicalFields({ formData, onChange }: MedicalFieldsProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-orange-500 font-mono">
        &gt; MEDICAL QUALIFICATIONS
      </h3>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Medical Certification Level *</label>
        <select
          required
          value={formData.certLevel || ""}
          onChange={(e) => onChange("certLevel", e.target.value)}
          className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white"
        >
          <option value="">Select...</option>
          <option value="physician">Physician (MD/DO)</option>
          <option value="pa">Physician Assistant</option>
          <option value="np">Nurse Practitioner</option>
          <option value="rn">Registered Nurse</option>
          <option value="18d">18D (Special Forces Medical Sergeant)</option>
          <option value="68w">68W (Combat Medic)</option>
          <option value="corpsman">Navy Corpsman</option>
          <option value="paramedic">Paramedic</option>
          <option value="emt">EMT</option>
          <option value="other">Other (specify below)</option>
        </select>
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Years of Trauma Care Experience *</label>
        <input
          type="number"
          required
          min="0"
          value={formData.traumaYears || ""}
          onChange={(e) => onChange("traumaYears", e.target.value)}
          className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">TCCC/TECC Certification *</label>
        <select
          required
          value={formData.tcccCert || ""}
          onChange={(e) => onChange("tcccCert", e.target.value)}
          className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white"
        >
          <option value="">Select...</option>
          <option value="tccc-active">TCCC (Active)</option>
          <option value="tecc-active">TECC (Active)</option>
          <option value="both">Both TCCC & TECC (Active)</option>
          <option value="expired">Previously certified (Expired)</option>
          <option value="none">Not certified</option>
        </select>
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Austere/Field Environment Experience *</label>
        <select
          required
          value={formData.austereExp || ""}
          onChange={(e) => onChange("austereExp", e.target.value)}
          className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white"
        >
          <option value="">Select...</option>
          <option value="extensive">Extensive (multiple deployments/missions)</option>
          <option value="moderate">Moderate (some field experience)</option>
          <option value="limited">Limited (primarily clinical/hospital)</option>
          <option value="none">None</option>
        </select>
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Specific Medical Skills *</label>
        <textarea
          required
          rows={4}
          value={formData.medicalSkills || ""}
          onChange={(e) => onChange("medicalSkills", e.target.value)}
          placeholder="e.g., surgical airway, chest decompression, blood transfusion, prolonged field care, etc."
          className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-600 resize-none"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Additional Medical Certifications</label>
        <input
          type="text"
          value={formData.additionalCerts || ""}
          onChange={(e) => onChange("additionalCerts", e.target.value)}
          placeholder="e.g., ACLS, PALS, ATLS, etc."
          className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-600"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Medical Licenses Held</label>
        <input
          type="text"
          value={formData.medicalLicenses || ""}
          onChange={(e) => onChange("medicalLicenses", e.target.value)}
          placeholder="State licenses, DEA, etc."
          className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-600"
        />
      </div>
    </div>
  );
}
