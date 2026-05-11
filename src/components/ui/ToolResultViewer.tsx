import React from 'react';
import { VtechEndpoint, VtechCallResult } from '@/types/vtech';
import { Download, ExternalLink, Copy, Bug } from 'lucide-react';
import { GlowButton } from './GlowButton';
import { useSettingsStore } from '@/store/useStore';

interface ToolResultViewerProps {
  endpoint: VtechEndpoint;
  result: VtechCallResult | null;
}

export function ToolResultViewer({ endpoint, result }: ToolResultViewerProps) {
  const { developerUnsafeMode } = useSettingsStore();
  
  if (!result) return null;

  const handleCopy = () => {
     if (result.data) {
        navigator.clipboard.writeText(typeof result.data === 'string' ? result.data : JSON.stringify(result.data, null, 2));
     } else if (result.error) {
        navigator.clipboard.writeText(result.error);
     }
  }

  const renderContent = () => {
    if (!result.ok) {
       return (
         <div className="p-4 bg-red-900/40 border border-red-500/50 rounded-lg text-red-200 text-sm whitespace-pre-wrap font-mono">
           {result.error || "Unknown Error"}
         </div>
       );
    }

    if (result.outputType === 'image' && result.blobUrl) {
       return <img src={result.blobUrl} alt="Result" className="w-full rounded-lg object-contain max-h-[400px]" />;
    }
    if (result.outputType === 'audio' && result.blobUrl) {
       return <audio src={result.blobUrl} controls className="w-full mt-4" />;
    }
    if (result.outputType === 'video' && result.blobUrl) {
       return <video src={result.blobUrl} controls className="w-full rounded-lg max-h-[400px]" />;
    }

    // Try to find common data fields
    const resData: any = result.data;
    
    // Sometimes APIs that return JSON are actually download links or image URLs
    if (resData && typeof resData === 'object') {
       const possibleUrl = resData.url || resData.link || resData.download || resData.result || resData.media || resData.image || resData.audio || resData.video;
       if (typeof possibleUrl === 'string' && possibleUrl.startsWith('http')) {
           if (result.outputType === 'download' || resData.url || resData.download) {
                return (
                    <div className="p-4 bg-space-dark/80 rounded-lg border border-space-cyan/30 flex items-center justify-between">
                        <span className="text-sm font-mono text-gray-300 truncate mr-4">{possibleUrl}</span>
                        <a href={possibleUrl} target="_blank" rel="noreferrer" className="shrink-0 flex items-center gap-2 px-4 py-2 bg-space-cyan/20 text-space-cyan rounded-lg hover:bg-space-cyan/40 transition-colors">
                            <Download className="w-4 h-4" /> Download
                        </a>
                    </div>
                );
           }
           if (possibleUrl.match(/\.(jpeg|jpg|gif|png)$/i)) {
               return <img src={possibleUrl} alt="Result" className="w-full rounded-lg object-contain max-h-[400px]" />;
           }
           if (possibleUrl.match(/\.(mp4|webm)$/i)) {
               return <video src={possibleUrl} controls className="w-full rounded-lg max-h-[400px]" />;
           }
           if (possibleUrl.match(/\.(mp3|wav|ogg)$/i)) {
               return <audio src={possibleUrl} controls className="w-full mt-4" />;
           }
       }
    }

    if (result.outputType === 'text') {
       return <div className="p-4 bg-space-dark/80 font-mono text-sm whitespace-pre-wrap rounded-lg text-gray-300 border border-white/10">{typeof resData === 'string' ? resData : JSON.stringify(resData, null, 2)}</div>;
    }

    // JSON Viewer
    return (
      <div className="relative group">
        <button onClick={handleCopy} className="absolute top-2 right-2 p-2 bg-space-dark/80 hover:bg-space-cyan/20 border border-white/10 rounded-lg text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
            <Copy className="w-4 h-4" />
        </button>
        <pre className="p-4 bg-space-dark/80 font-mono text-xs overflow-x-auto rounded-lg text-space-cyan border border-space-cyan/20 cyber-scrollbar max-h-[400px]">
          {JSON.stringify(resData, null, 2)}
        </pre>
      </div>
    );
  };

  return (
    <div className="mt-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono text-gray-400">OUTPUT TERMINAL</span>
        </div>
        {renderContent()}
      </div>
      
      {developerUnsafeMode && (
         <div className="p-4 bg-gray-900/60 border border-gray-500/30 rounded-lg space-y-2 mt-4 mt-8">
            <h3 className="font-mono text-xs text-yellow-500 flex items-center gap-2 mb-3">
               <Bug className="w-4 h-4" /> DEVELOPER DEBUG PANEL
            </h3>
            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-gray-400">
               <div><strong>ID:</strong> {endpoint.id}</div>
               <div><strong>Category:</strong> {endpoint.category}</div>
               <div><strong>Expected Output:</strong> {result.outputType}</div>
               <div><strong>Content-Type:</strong> {result.contentType || 'UNKNOWN'}</div>
               <div><strong>Status Code:</strong> {result.status || 'UNKNOWN'}</div>
               <div><strong>Success:</strong> {result.ok ? 'TRUE' : 'FALSE'}</div>
            </div>
            {result.error && (
               <div className="mt-2 text-[10px] font-mono text-red-400 p-2 bg-red-900/20 rounded">
                  <strong>Error:</strong> {result.error}
               </div>
            )}
         </div>
      )}
    </div>
  );
}
