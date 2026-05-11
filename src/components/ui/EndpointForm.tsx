import React, { useState } from 'react';
import { VtechEndpoint, EndpointParam } from '@/types/vtech';
import { GlowButton } from './GlowButton';
import { Loader2, Play } from 'lucide-react';

interface EndpointFormProps {
  endpoint: VtechEndpoint;
  onSubmit: (data: Record<string, any>) => void;
  isLoading: boolean;
}

export function EndpointForm({ endpoint, onSubmit, isLoading }: EndpointFormProps) {
  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {endpoint.params.length === 0 && (
        <div className="text-sm font-mono text-gray-400 mb-4">
          No parameters required. Click Execute to run.
        </div>
      )}
      {endpoint.params.map(param => (
        <div key={param.name} className="space-y-1">
          <label className="text-sm font-mono text-space-starlight mb-1 block capitalize">
            {param.label} {param.required && <span className="text-red-500">*</span>}
          </label>
          
          {(param.type === 'text' || param.type === 'url') && (
            <input
              type={param.type === 'url' ? 'url' : 'text'}
              required={param.required}
              className="w-full bg-space-navy/50 border border-space-cyan/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-space-cyan focus:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all font-mono text-sm"
              placeholder={`Enter ${param.label}`}
              onChange={(e) => handleChange(param.name, e.target.value)}
            />
          )}

          {param.type === 'number' && (
            <input
              type="number"
              required={param.required}
              className="w-full bg-space-navy/50 border border-space-cyan/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-space-cyan focus:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all font-mono text-sm"
              placeholder={`Enter ${param.label}`}
              onChange={(e) => handleChange(param.name, e.target.value)}
            />
          )}

          {param.type === 'textarea' && (
            <textarea
              required={param.required}
              rows={4}
              className="w-full bg-space-navy/50 border border-space-cyan/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-space-cyan focus:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all font-mono text-sm"
              placeholder={`Enter ${param.label}`}
              onChange={(e) => handleChange(param.name, e.target.value)}
            />
          )}

          {param.type === 'color' && (
            <div className="flex items-center gap-4">
              <input
                type="color"
                required={param.required}
                className="w-12 h-12 rounded cursor-pointer bg-transparent border-0"
                onChange={(e) => handleChange(param.name, e.target.value)}
              />
              <input
                type="text"
                className="flex-1 bg-space-navy/50 border border-space-cyan/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-space-cyan transition-all font-mono text-sm"
                placeholder="#000000"
                value={formData[param.name] || '#000000'}
                onChange={(e) => handleChange(param.name, e.target.value)}
              />
            </div>
          )}

          {param.type === 'boolean' && (
            <select
              required={param.required}
              className="w-full bg-space-navy/50 border border-space-cyan/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-space-cyan transition-all font-mono text-sm"
              onChange={(e) => handleChange(param.name, e.target.value)}
            >
              <option value="">Select option</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          )}

          {param.type === 'select' && param.options && (
            <select
              required={param.required}
              className="w-full bg-space-navy/50 border border-space-cyan/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-space-cyan transition-all font-mono text-sm"
              onChange={(e) => handleChange(param.name, e.target.value)}
            >
              <option value="">Select {param.label}</option>
              {param.options.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          )}

        </div>
      ))}
      <div className="pt-2">
        <GlowButton type="submit" disabled={isLoading} className="w-full font-bold">
          {isLoading ? <Loader2 className="animate-spin" size={18} /> : <Play size={18} />}
          EXECUTE
        </GlowButton>
      </div>
    </form>
  );
}
