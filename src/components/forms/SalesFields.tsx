"use client";

interface SalesFieldsProps {
  formData: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

export default function SalesFields({ formData, onChange }: SalesFieldsProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-orange-500 font-mono">
        &gt; SALES EXPERIENCE
      </h3>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Describe your sales background *</label>
        <textarea
          required
          rows={4}
          value={formData.salesBackground || ""}
          onChange={(e) => onChange("salesBackground", e.target.value)}
          placeholder="Industries, products/services sold, typical deal sizes..."
          className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-600 resize-none"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Notable contract wins / achievements</label>
        <textarea
          rows={3}
          value={formData.contractWins || ""}
          onChange={(e) => onChange("contractWins", e.target.value)}
          placeholder="Largest deals closed, quotas exceeded, awards..."
          className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-600 resize-none"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Current leads / contacts you can bring</label>
        <textarea
          rows={3}
          value={formData.currentLeads || ""}
          onChange={(e) => onChange("currentLeads", e.target.value)}
          placeholder="Industries, companies, or networks you have access to..."
          className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-600 resize-none"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">On a scale of 1-10, how much of a &quot;shark&quot; are you? *</label>
        <select
          required
          value={formData.sharkScale || ""}
          onChange={(e) => onChange("sharkScale", e.target.value)}
          className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white"
        >
          <option value="">Select...</option>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
        <p className="text-xs text-gray-500 mt-1">1 = mild, 10 = relentless closer</p>
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Languages spoken</label>
        <input
          type="text"
          value={formData.languages || ""}
          onChange={(e) => onChange("languages", e.target.value)}
          placeholder="e.g., English (native), Spanish (fluent), Arabic (conversational)"
          className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-600"
        />
      </div>

      <div className="glass-card p-4 border-orange-500">
        <h4 className="font-bold text-sm mb-2">Compensation Structure</h4>
        <p className="text-gray-400 text-sm">
          Account Executive positions are <span className="text-orange-500">pure commission</span>: 
          10% of training sales ($140 per $1,400 KDT Small Arms Training enrollment).
        </p>
        <p className="text-gray-500 text-xs mt-2">
          Rates may vary for different training products.
        </p>
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            className="mt-1 w-5 h-5 rounded bg-[var(--bg-secondary)] border-gray-800 text-orange-500 focus:ring-orange-500"
          />
          <span className="text-sm text-gray-400">
            I understand and accept the commission-based compensation structure. *
          </span>
        </label>
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Why do you want to sell for KDT? *</label>
        <textarea
          required
          rows={4}
          value={formData.whyKDT || ""}
          onChange={(e) => onChange("whyKDT", e.target.value)}
          placeholder="What excites you about representing Knight Division Tactical?"
          className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-gray-800 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-600 resize-none"
        />
      </div>
    </div>
  );
}
