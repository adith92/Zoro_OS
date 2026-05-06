import React, { useState } from 'react';
import { VynaaEndpoint, EndpointParam } from '@/types/vynaa';
import { GlowButton } from './GlowButton';
import { Loader2, Play } from 'lucide-react';

interface EndpointFormProps {
  endpoint: VynaaEndpoint;
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
      {endpoint.params.map(param => (
        <div key={param.name} className="space-y-1">
          <label className="text-sm font-mono text-space-starlight mb-1 block">
            {param.label} {param.required && <span className="text-red-500">*</span>}
          </label>
          {param.type === 'text' && (
            <input
              type="text"
              required={param.required}
              className="w-full bg-space-navy/50 border border-space-cyan/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-space-cyan focus:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all font-mono text-sm"
              placeholder={`Enter ${param.label}`}
              onChange={(e) => handleChange(param.name, e.target.value)}
            />
          )}
          {/* We can add select/number if needed in future */}
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
