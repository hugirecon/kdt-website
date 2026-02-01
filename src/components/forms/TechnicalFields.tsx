"use client";

interface TechnicalFieldsProps {
  formData: Record<string, string>;
  onChange: (field: string, value: string) => void;
  role?: string;
}

export default function TechnicalFields({ formData, onChange, role }: TechnicalFieldsProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-orange-500 font-mono">
        &gt; TECHNICAL EXPERIENCE
      </h3>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Years of Experience *</label>
        <input
          type="number"
          required
          min="0"
          value={formData.yearsExperience || ""}
          onChange={(e) => onChange("yearsExperience", e.target.value)}
          className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Primary Skills / Languages / Tools *</label>
        <textarea
          required
          rows={3}
          value={formData.primarySkills || ""}
          onChange={(e) => onChange("primarySkills", e.target.value)}
          placeholder="List your core technical skills..."
          className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-600 resize-none"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Portfolio / GitHub / Projects</label>
        <input
          type="url"
          value={formData.portfolio || ""}
          onChange={(e) => onChange("portfolio", e.target.value)}
          placeholder="https://github.com/..."
          className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-600"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Certifications</label>
        <input
          type="text"
          value={formData.certifications || ""}
          onChange={(e) => onChange("certifications", e.target.value)}
          placeholder="e.g., AWS, CISSP, OSCP, etc."
          className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-600"
        />
      </div>

      {/* AI Developer specific */}
      {role === "ai-developer" && (
        <>
          <div>
            <label className="block text-sm text-gray-400 mb-1">AI/ML Frameworks & Tools *</label>
            <textarea
              required
              rows={2}
              value={formData.aiTools || ""}
              onChange={(e) => onChange("aiTools", e.target.value)}
              placeholder="e.g., PyTorch, TensorFlow, scikit-learn, LangChain..."
              className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-600 resize-none"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Production ML Deployment Experience *</label>
            <textarea
              required
              rows={3}
              value={formData.mlDeployment || ""}
              onChange={(e) => onChange("mlDeployment", e.target.value)}
              placeholder="Describe models you've deployed to production..."
              className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-600 resize-none"
            />
          </div>
        </>
      )}

      {/* Blockchain Developer specific */}
      {role === "blockchain-developer" && (
        <>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Smart Contract Languages *</label>
            <input
              type="text"
              required
              value={formData.smartContractLangs || ""}
              onChange={(e) => onChange("smartContractLangs", e.target.value)}
              placeholder="e.g., Solidity, Rust, Move..."
              className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Chains / Protocols Experience *</label>
            <input
              type="text"
              required
              value={formData.chainsExperience || ""}
              onChange={(e) => onChange("chainsExperience", e.target.value)}
              placeholder="e.g., Ethereum, Solana, Polygon..."
              className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Security Audit Experience</label>
            <textarea
              rows={2}
              value={formData.auditExperience || ""}
              onChange={(e) => onChange("auditExperience", e.target.value)}
              placeholder="Any smart contract auditing experience..."
              className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-600 resize-none"
            />
          </div>
        </>
      )}

      {/* Hacker specific */}
      {role === "hacker" && (
        <>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Years of Penetration Testing Experience *</label>
            <input
              type="number"
              required
              min="0"
              value={formData.pentestYears || ""}
              onChange={(e) => onChange("pentestYears", e.target.value)}
              className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Security Tools Proficiency *</label>
            <textarea
              required
              rows={2}
              value={formData.securityTools || ""}
              onChange={(e) => onChange("securityTools", e.target.value)}
              placeholder="e.g., Burp Suite, Metasploit, Nmap, Ghidra..."
              className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-600 resize-none"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Bug Bounties / CTF Achievements</label>
            <textarea
              rows={2}
              value={formData.bugBounties || ""}
              onChange={(e) => onChange("bugBounties", e.target.value)}
              placeholder="Notable findings, CTF rankings, etc."
              className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-600 resize-none"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Secure Coding Practices *</label>
            <textarea
              required
              rows={2}
              value={formData.secureCoding || ""}
              onChange={(e) => onChange("secureCoding", e.target.value)}
              placeholder="Describe your approach to writing secure code..."
              className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-600 resize-none"
            />
          </div>
        </>
      )}

      <div>
        <label className="block text-sm text-gray-400 mb-1">Why do you want to work at KDT? *</label>
        <textarea
          required
          rows={4}
          value={formData.whyKDT || ""}
          onChange={(e) => onChange("whyKDT", e.target.value)}
          placeholder="Tell us what draws you to Knight Division Tactical..."
          className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-600 resize-none"
        />
      </div>
    </div>
  );
}
