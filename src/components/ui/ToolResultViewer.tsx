import React from 'react';
import { VynaaEndpoint, VynaaResponse } from '@/types/vynaa';
import { Download, ExternalLink } from 'lucide-react';
import { GlowButton } from './GlowButton';

interface ToolResultViewerProps {
  endpoint: VynaaEndpoint;
  result: VynaaResponse | null;
}

export function ToolResultViewer({ endpoint, result }: ToolResultViewerProps) {
  if (!result) return null;

  const renderContent = () => {
    if (['image', 'audio', 'video'].includes(endpoint.outputType) && result.type) {
      if (result.type === 'image') {
        return <img src={result.result} alt="Result" className="w-full rounded-lg object-contain max-h-[400px]" />;
      }
      if (result.type === 'audio') {
        return <audio src={result.result} controls className="w-full mt-4" />;
      }
      if (result.type === 'video') {
        return <video src={result.result} controls className="w-full rounded-lg max-h-[400px]" />;
      }
    }

    // Try to find common data fields
    const displayData = result.data || result.result || result;

    if (endpoint.outputType === 'text') {
       return <div className="p-4 bg-space-dark/80 font-mono text-sm whitespace-pre-wrap rounded-lg text-gray-300 border border-white/10">{typeof displayData === 'string' ? displayData : JSON.stringify(displayData, null, 2)}</div>;
    }

    // JSON Viewer
    return (
      <div className="relative group">
        <pre className="p-4 bg-space-dark/80 font-mono text-xs overflow-x-auto rounded-lg text-space-cyan border border-space-cyan/20 cyber-scrollbar max-h-[400px]">
          {JSON.stringify(displayData, null, 2)}
        </pre>
      </div>
    );
  };

  return (
    <div className="mt-6 flex flex-col space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-mono text-gray-400">OUTPUT TERMINAL</span>
      </div>
      {renderContent()}
    </div>
  );
}
